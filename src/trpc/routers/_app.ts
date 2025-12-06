import prisma from "@/lib/prisma/db";
import { baseProcedure, createTRPCRouter } from "../init";

export const appRouter = createTRPCRouter({
  hello: baseProcedure.query(() => {
      return {
        greeting: "Hello from TRPC app router!",
        dateStamp: Date.now(),
      };
  }),
  createUser: baseProcedure.mutation(async ({ctx}) => {
  

  })


});
// export type definition of API
export type AppRouter = typeof appRouter;
