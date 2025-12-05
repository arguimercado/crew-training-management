import { caller } from "@/trpc/server";

export default async function Home() {

  const helloQuery = await caller.hello();
  
  return (
    <div>{JSON.stringify(helloQuery)}</div>
  );
}
