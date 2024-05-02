import GoogleProvider from "next-auth/providers/google";
import GithubProvider from "next-auth/providers/github";
import FacebookProvider from "next-auth/providers/facebook";
import CredentialsProvider from "next-auth/providers/credentials";
import prisma from "./prisma";
import { isPasswordValid } from "@/lib/hash";

import {
  NextAuthOptions,
} from "next-auth";

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

      //@ts-ignore
      async authorize(credentials) {
        const user = await prisma.user.findFirst({ where: { email: credentials?.email } })
        // check if user exits
        if (!user)
          throw new Error("Account don't exits please check your email");

        // check if password is valid
        const isPasswordMatch = await isPasswordValid(
          credentials?.password as string,
          user.password,
        );

        if (!isPasswordMatch) throw new Error("Wrong password!");

        if (user.verified !== true) {
          throw new Error("Account not verified");
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

      newUser && (token.user = newUser);

      return token;
    },
    async session({ session, token }) {
      // Send properties to the client, like an access_token and user id from a provider.
      session.user = token.user as any;
      return session;
    },
  },
  pages: {
    signIn: "/login",
  },
  session: {
    strategy: "jwt",
    maxAge: 48 * 60 * 60, // 2 Days
  },
};
