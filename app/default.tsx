import Link from "next/link";

export default function NotFound() {
  return (
    <main>
      <h2 className="button-underline">Not Found</h2>
      <p className="button-underline">Could not find requested resource</p>
      <Link href="/">Return Home</Link>
    </main>
  );
}
