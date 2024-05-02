export type userType = {
  name?: string | null | undefined;
  email?: string | null | undefined;
  image?: string | null | undefined;
} & {
  id: string;
  username: string;
  role: string;
  verified: string;
};
