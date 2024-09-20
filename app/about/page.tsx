import Bounded from "@/components/bounded";
import StarGrid from "@/components/star-grid";

export default function AboutPage() {
  return (
    <Bounded className="relative">
      <StarGrid />
      <h1 className="text-balance text-4xl font-semibold sm:text-7xl">
        <span className="heading-gradient">More</span> about me
      </h1>

      <div className="prose prose-invert mt-4 max-w-xl md:text-xl">
        <p className="mb-6">
          Welcome to my corner of the web! I&apos;m Jerry and I specialize in
          creating awesome and affordable websites and web applications for
          small to medium size businesses. My mission is to build sites that are
          not only effective and user-friendly but also beautiful - the kind
          your customers will love.
        </p>
        <p>
          Here are some common web design practices that can really annoy users:
        </p>
        <ul>
          <li>Autoplaying sliders</li>
          <li>Autoplaying sound</li>
          <li>Animations that take over your mouse scrolling</li>
          <li>Menus hidden behind buttons</li>
          <li>Important content hidden behind carousels/sliders</li>
          <li>Long animations</li>
          <li>Slow page loads and refreshes</li>
        </ul>
      </div>
    </Bounded>
  );
}
