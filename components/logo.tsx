import Image from "next/image";
import logo from "@/assets/icon.png";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="flex items-center gap-x-3">
      <Image src={logo} alt="my logo" width={40} height={40} />
      <p className="text-2xl font-semibold">Web Maestro</p>
    </Link>
  );
}
