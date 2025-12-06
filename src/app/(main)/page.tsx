
import { Suspense } from "react";
import HomeComponent from "@/features/home/components/home-component";
import { HydrateClient, prefetch, trpc } from "@/trpc/server";

export default async function HomePage() {
  
  await prefetch(trpc.hello.queryOptions());
  
  return (
    <HydrateClient>
      <Suspense fallback={<div>Loading...</div>}>
        <HomeComponent />
      </Suspense>
    </HydrateClient>
  );
}
