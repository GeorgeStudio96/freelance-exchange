import Link from "next/link";
import Button from "@/components/Button";

export default function Page() {
  return (
    <>
      <Button />
      <div className="size-16">Hello Sass</div>
      <Link href="/dashboard">Go to Dashboard</Link>
    </>
  );
}
