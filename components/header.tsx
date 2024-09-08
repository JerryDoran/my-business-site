import Navbar from "@/components/navbar";

const routes = [
  {
    label: "home",
    link: "/",
  },
  {
    label: "about",
    link: "/about",
  },
  {
    label: "services",
    link: "/",
  },
  {
    label: "portfolio",
    link: "/portfolio",
  },
  {
    label: "contact",
    link: "/contact",
  },
];

export default function Header() {
  return (
    <div className="sticky top-0 z-20">
      <Navbar routes={routes} />
    </div>
  );
}
