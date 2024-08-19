import { unstable_noStore } from "next/cache";

export default function Home() {
  unstable_noStore();
  console.log(`===========`);
  console.log(`NODE_ENV: ${process.env.NODE_ENV}`);
  console.log(`BACKEND_URL: ${process.env.BACKEND_URL}`);
  console.log(`API_PATH: ${process.env.API_PATH}`);
  console.log(`API_VERSION: ${process.env.API_VERSION}`);
  console.log(`NEXT_PUBLIC_BACKEND_URL: ${process.env.NEXT_PUBLIC_BACKEND_URL}`);
  console.log(`NEXT_PUBLIC_API_PATH: ${process.env.NEXT_PUBLIC_API_PATH}`);
  console.log(`NEXT_PUBLIC_API_VERSION: ${process.env.NEXT_PUBLIC_API_VERSION}`);
  console.log(`===========`);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-green-200">
      <p>BACKEND_URL: {process.env.BACKEND_URL}</p>
      <p>API_PATH: {process.env.API_PATH}</p>
      <p>API_VERSION: {process.env.API_VERSION}</p>
      <p>NEXT_PUBLIC_BACKEND_URL: {process.env.NEXT_PUBLIC_BACKEND_URL}</p>
      <p>NEXT_PUBLIC_API_PATH: {process.env.NEXT_PUBLIC_API_PATH}</p>
      <p>NEXT_PUBLIC_API_VERSION: {process.env.NEXT_PUBLIC_API_VERSION}</p>
    </main>
  );
}
