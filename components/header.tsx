import Navbar from "@/components/navbar";
import { routes } from "@/data/siteData";

export default function Header() {
  return (
    <div className="sticky top-0 z-20">
      <Navbar routes={routes} />
    </div>
  );
}
