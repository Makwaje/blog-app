import { PrismaAdapter } from "@auth/prisma-adapter";
import { Prisma } from "@prisma/client";

import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";

import TwitterProvider from "next-auth/providers/twitter";
import { prisma } from "./connect";

export const authOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_ID as string,
      clientSecret: process.env.GOOGLE_SECRET as string,
    }),
    TwitterProvider({
      clientId: process.env.TWITTER_ID as string,
      clientSecret: process.env.TWITTER_SECRET as string,
    }),
  ],
};
