"use client";

import { useMutation, useSuspenseQuery } from "@tanstack/react-query";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { useTRPC } from "@/trpc/client";

const useSuspenseHelloDataQuery = () => {
  const trpc = useTRPC();
  return useSuspenseQuery(trpc.hello.queryOptions());
};

const useCreateUserMutation = () => {
  const trpc = useTRPC();
  return useMutation(trpc.createUser.mutationOptions());
};

const HomeComponent = () => {
  const query = useSuspenseHelloDataQuery();
  const { mutateAsync } = useCreateUserMutation();

  const handleCreateUser = async () => {
    await mutateAsync(undefined, {
      onSuccess: (data) => {
        toast.success(`User ${data.name} created with ID ${data.id}`);
      },
    });
  };

  return (
    <div className="w-full h-screen flex flex-col">
      <div className="flex flex-row justify-between items-center">
        <p className="text-2xl font-bold">{query.data.greeting}</p>
        <Button variant="ghost" onClick={handleCreateUser}>
          Create User
        </Button>
      </div>
    </div>
  );
};
export default HomeComponent;
