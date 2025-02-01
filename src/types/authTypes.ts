export type userType = {
  name?: string | null | undefined;
  email?: string | null | undefined;
  image?: string | null | undefined;
  password?: string | null | undefined;
} & {
  id: string;
  username: string;
  verified: string;
};
