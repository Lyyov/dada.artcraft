import Link from "next/link";

export default function NotFound() {
  return (
    <div className="max-w-[600px] m-auto min-h-[inherit] flex flex-col justify-center">
      <h1 className="title-primary m-0 text-left">404</h1>
      <h2 className="paragraph font-bold mt-4">
        Oops! This Page Could Not Be Found
      </h2>
      <p className="paragraph mt-2">
        Sorry but the page you are looking for does not exist, have been
        removed. name changed or is temporarily unavailable
      </p>
      <div className="flex gap-4 mt-4 fo">
        <Link
          href="/"
          className="p-2 border-background-secondary border-2 rounded-md hover:text-accent"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
}
