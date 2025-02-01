import GoogleProvider from "next-auth/providers/google";
import GithubProvider from "next-auth/providers/github";
import FacebookProvider from "next-auth/providers/facebook";
import CredentialsProvider from "next-auth/providers/credentials";
import prisma from "./prisma";
import { isPasswordValid } from "@/lib/hash";

import {
  NextAuthOptions,
  type DefaultSession,
  type DefaultUser,
} from "next-auth";
import { userType } from "@/types/authTypes";

/**
 * make sure to update this section to avoid issues typescript errors throught the whole application
 * fields id, role, and active are fields that exits in Database but don't get return throught token in jwt function below
 * so they need to be added in here
 * */
declare module "next-auth" {
  interface Session extends DefaultSession {
    user: DefaultSession["user"] & {
      id: string;
      username: string;
      verified: string;
    };
  }

  interface User extends DefaultUser {
    id: string;
    username: string;
    verified: string;
  }
}


export const AuthOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID as string,
      clientSecret: process.env.GOOGLE_SECRET as string,
    }),
    GithubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
    }),
    FacebookProvider({
      clientId: process.env.FACEBOOK_ID as string,
      clientSecret: process.env.FACEBOOK_SECRET as string,
    }),
    CredentialsProvider({
      credentials: {
        email: {},
        password: {},
      },

      //@ts-expect-error expected error
      async authorize(credentials) {
        const user = await prisma.user.findFirst({ where: { email: credentials?.email } })
        // check if user exits
        if (!user)
          throw new Error("Hmm, couldn't find an account with that email. Maybe you meant a different address!");

        // check if password is valid
        const isPasswordMatch = await isPasswordValid(
          credentials?.password as string,
          user.password,
        );

        if (!isPasswordMatch) throw new Error("We think you might have gotten a typo in there. Double-check your password and give it another shot!");

        if (user.verified !== true) {
          throw new Error("Looks like your account verification is still pending. Don't worry, we just sent you a fresh verification email!");
        }

        return user;
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      let newUser = undefined;
      let userExists: {} | null = {};
      //
      if (user) {
        // Check if email already exits
        userExists = await prisma.user.findFirst({ where: { email: user?.email as string } })

        if (userExists === null) {
          newUser = await prisma.user.create({ data: { name: user.name!, email: user.email!, username: user.name!, password: user.id } })
        } else {
          newUser = userExists;
        }
      }

      if (newUser){
        token.user = newUser
      };

      return token;
    },
    async session({ session, token }) {
      // Send properties to the client, like an access_token and user id from a provider.
      const currentUser = token?.user as userType
     
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { password: _, ...currentUserWithtoutPassword } = currentUser

      session.user = currentUserWithtoutPassword;
      return session;
    },
  },
  pages: {
    signIn: "/login",
  },
  session: {
    strategy: "jwt",
    maxAge: 24 * 60 * 60, // 2 Days
  },
};
