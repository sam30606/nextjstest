import { unstable_noStore as noStore } from "next/cache";

export default function Home() {
  noStore();
  if (process.env.NEXT_PUBLIC_SOMEENV) {
    return <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-green-200">{process.env.NEXT_PUBLIC_SOMEENV}</main>;
  } else {
    return <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-red-300">NOTTHINGGGGGGGGGG</main>;
  }
}
