import type { InferGetServerSidePropsType, GetServerSideProps } from "next";

type RuntimeEnv = {
  backendUrl: string;
  apiPath: string;
  apiVersion: string;
  n_backendUrl: string;
  n_apiPath: string;
  n_apiVersion: string;
};

export const getServerSideProps = (async () => {
  // Fetch data from external API
  const runtimeEnv: RuntimeEnv = {
    backendUrl: process.env.NEXT_PUBLIC_BACKEND_URL || "",
    apiPath: process.env.NEXT_PUBLIC_API_PATH || "",
    apiVersion: process.env.NEXT_PUBLIC_API_VERSION || "",
    n_backendUrl: process.env.BACKEND_URL || "",
    n_apiPath: process.env.API_PATH || "",
    n_apiVersion: process.env.API_VERSION || "",
  };
  // Pass data to the page via props
  return { props: { runtimeEnv } };
}) satisfies GetServerSideProps<{ runtimeEnv: RuntimeEnv }>;

export default function Page({ runtimeEnv }: InferGetServerSidePropsType<typeof getServerSideProps>) {
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
      <p>BACKEND_URL: {runtimeEnv.backendUrl}</p>
      <p>API_PATH: {runtimeEnv.apiPath}</p>
      <p>API_VERSION: {runtimeEnv.apiVersion}</p>
      <p>N_BACKEND_URL: {runtimeEnv.n_backendUrl}</p>
      <p>N_API_PATH: {runtimeEnv.n_apiPath}</p>
      <p>N_API_VERSION: {runtimeEnv.n_apiVersion}</p>
    </main>
  );
}
// import { unstable_noStore } from "next/cache";

// export default function Home() {
//   // unstable_noStore();
//   console.log(`===========`);
//   console.log(`NODE_ENV: ${process.env.NODE_ENV}`);
//   console.log(`BACKEND_URL: ${process.env.BACKEND_URL}`);
//   console.log(`API_PATH: ${process.env.API_PATH}`);
//   console.log(`API_VERSION: ${process.env.API_VERSION}`);
//   console.log(`NEXT_PUBLIC_BACKEND_URL: ${process.env.NEXT_PUBLIC_BACKEND_URL}`);
//   console.log(`NEXT_PUBLIC_API_PATH: ${process.env.NEXT_PUBLIC_API_PATH}`);
//   console.log(`NEXT_PUBLIC_API_VERSION: ${process.env.NEXT_PUBLIC_API_VERSION}`);
//   console.log(`===========`);

//   return (
//     <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-green-200">
//       <p>BACKEND_URL: {process.env.BACKEND_URL}</p>
//       <p>API_PATH: {process.env.API_PATH}</p>
//       <p>API_VERSION: {process.env.API_VERSION}</p>
//       <p>NEXT_PUBLIC_BACKEND_URL: {process.env.NEXT_PUBLIC_BACKEND_URL}</p>
//       <p>NEXT_PUBLIC_API_PATH: {process.env.NEXT_PUBLIC_API_PATH}</p>
//       <p>NEXT_PUBLIC_API_VERSION: {process.env.NEXT_PUBLIC_API_VERSION}</p>
//     </main>
//   );
// }
