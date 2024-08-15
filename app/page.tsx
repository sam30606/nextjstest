import { unstable_noStore as noStore } from "next/cache";

export default function Home() {
  noStore();
  if (process.env.SOMEENV) {
    return <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-green-200">{process.env.SOMEENV}</main>;
  } else {
    return <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-red-300">NOTTHINGGGGGGGGGG</main>;
  }
}
