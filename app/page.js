import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h3>CPRG 306: Web Development 2 - Assignments</h3>
      <Link href="/week-2" className="block">Week-2 Assignment</Link>
      <Link href="/week-3" className="block">Week-3 Assignment</Link>
      <Link href="/week-4" className="block">Week-4 Assignment</Link>
      <Link href="/week-5" className="block">Week-5 Assignment</Link>
      <Link href="/week-6" className="block">Week-6 Assignment</Link>
      <Link href="/week-7" className="block text-red-400">Week-7 Assignment</Link>
    </div>
  );
}
