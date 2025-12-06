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
    const user = await prisma.user.create({
      data: {
        name: "New User",
        email: "newuser@example.com",
        posts: {
          create: {
            title: "Hello World",
            content: "This is my first post",
            published: true,
          }
        }
      },
      include: {
        posts: true,
      }
    });

    return user;

  })


});
// export type definition of API
export type AppRouter = typeof appRouter;
