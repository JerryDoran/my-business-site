import Bounded from "@/components/bounded";
import StarGrid from "@/components/star-grid";

export default function AboutPage() {
  return (
    <Bounded className="w-full">
      <StarGrid />
      <h1 className="text-balance text-4xl font-semibold sm:text-7xl">
        <span className="heading-gradient">More</span> about me
      </h1>

      <div className="prose prose-invert mt-4 w-full md:max-w-4xl md:text-xl">
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
        <p>
          Many developers make these mistakes trying to be unique or memorable
          but you don&apos;t have to sacrifice user experience to stand out.
          Websites can be both user friendly and beautifully designed.
        </p>
        <p>
          I started asking myself questions like &quot;What makes a good
          website?&quot; and &quot;What do users really care about?&quot; By
          answering these questions I learned what makes websites work well and
          where they can often go wrong. This helps me create better websites
          for my customers.
        </p>
        <p>
          I&apos;m passionate about helping small businesses thrive online by
          creating high-quality, affordable websites. I believe every business,
          no matter the size, deserves a site that not only looks great but also
          works hard for them—without breaking the bank. My goal is to make sure
          your website reflects your unique brand and helps you grow, all while
          keeping things budget-friendly.
        </p>
      </div>
    </Bounded>
  );
}
