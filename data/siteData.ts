import computer from "@/assets/icons/computer.png";
import lightBulb from "@/assets/icons/logical-thinking.png";
import trust from "@/assets/icons/trust.png";
import thanos from "@/assets/thanos.jpg";
import happyCustomer from "@/assets/happy-customer.jpg";
import mobile from "@/assets/mobile.jpg";
import design from "@/assets/design.jpg";
import customers from "@/assets/customers.jpg";
import speed from "@/assets/speed.jpg";
import support from "@/assets/technology-two.jpg";
import metaverse from "@/assets/ui-design-metaverse.png";
import entertainment from "@/assets/ui-movie-database.png";
import fitclub from "@/assets/business-gym-site.png";
import rosa from "@/assets/business-rosa.png";
import hoobank from "@/assets/hoobank.png";
import crypto from "@/assets/business-crypto-tracker.png";
import beach from "@/assets/beach-1.png";
import apple from "@/assets/ecommerce-apple-app.png";
import realty from "@/assets/realty-2.png";
import brandAssets from "@/assets/custom-websites/brand-assets.svg";
import seo from "@/assets/custom-websites/technical-seo-2.svg";
import brandLibrary from "@/assets/custom-websites/brand-library.svg";
import development from "@/assets/custom-websites/development-1.svg";

export const projects = [
  {
    slug: "thanos-music",
    img: thanos,
    category: "e-commerce",
    title: "Thanos Music",
    description:
      "An easy to use ecommerce site to take care of all your electronic and music needs.",
    summary:
      "This Ecommerce App is a web application that allows users to browse, search, and purchase electronic products. The application provides features for users to explore different products, view product details, add items to their cart, and complete the checkout process.",

    demoLink: "https://music-ecommerce-app-stripe.vercel.app/",
    isFeatured: true,
  },
  {
    slug: "metaverse",
    img: metaverse,
    category: "design",
    title: "Explore the Metaverse",
    description:
      "Enjoy the virtual world of the metaverse through the use of state of the art VR devices.",
    summary:
      "Next Metaverse provides information for how users can explore interactive environments, customize avatars, interact with other users, and personalize their experience with customizable objects.",
    demoLink: "https://doran-metaverse.vercel.app/",
    isFeatured: false,
  },
  {
    slug: "entertainment-hub",
    img: entertainment,
    category: "business",
    title: "Entertainment Hub",
    description:
      "Explore and browse your favorite movies and television shows in all in one place.",
    summary:
      "Entertainment DB is a web application that serves as a database for various entertainment media such as movies and TV shows. It provides a platform for users to explore, search, and discover information about their favorite entertainment titles.",
    demoLink: "https://my-entertainment-hub.netlify.app/",
    isFeatured: false,
  },
  {
    slug: "next-properties",
    img: realty,
    category: "business",
    title: "Next Gen Realty",
    description:
      "Explore and browse your favorite properties and locations in all in one place.",
    summary:
      "This is a realestate design site that showcases some of the features of a realty application.  Functionality for real estate property search can be added upon request to this application.  View detailed information about each property, including images, description, price, and contact information.",
    demoLink: "https://next-realestate-app-ten.vercel.app/",
    isFeatured: true,
  },
  {
    slug: "apple-commerce",
    img: apple,
    category: "e-commerce",
    title: "Apple Commerce",
    description:
      "Order new state of the art devices or browse for your favorite apple products.",
    summary:
      'Browse through different Apple product categories such as iPhones, MacBooks, and AirPods. Click on a product to view its details, including specifications and price. Add products to your cart by clicking the "Add to Cart" button.',
    demoLink: "https://apple-commerce-psi.vercel.app/",
    isFeatured: false,
  },
  {
    slug: "fit-club",
    img: fitclub,
    category: "business",
    title: "Fit Club Gym",
    description:
      "Feel your best and perform at the level you want in our all inclusive fit club.",
    summary:
      "The FitClub Gym website is designed as a web application for managing gym memberships and workout schedules. It provides features for users to register, view classes, book sessions, and track fitness progress.",
    demoLink: "https://react-fitclub-gym.vercel.app/",
    isFeatured: true,
  },
  {
    slug: "rosa-restaurant",
    img: rosa,
    category: "business",
    title: "The Rosa Restaurant",
    description:
      "Enjoy fun times and delicious authentic food in a wonderful family environment.",
    summary:
      "The Rosa is a website template designed for restaurant or food-related businesses. It features a modern and responsive design, allowing the site to adapt to different devices and screen sizes. The template includes sections for showcasing menu items, customer testimonials, and contact information.",
    demoLink: "https://rosa-dining.netlify.app/",
    isFeatured: true,
  },
  {
    slug: "next-gen-banking",
    img: hoobank,
    category: "design",
    title: "Next Gen Banking",
    description:
      "Next generation banking is here in this easy to use new banking site of the future.",
    summary:
      "Next Gen Banking is a web application that simulates a banking system. The site is designed using the Next.js framework, which enables server-side rendering and provides a smooth user experience.",
    demoLink: "https://next-hoobank.vercel.app/",
    isFeatured: true,
  },
  {
    slug: "crypto-tracker",
    img: crypto,
    category: "business",
    title: "Crypto Tracker",
    description:
      "Track your favorite crypto currencies and save them to your user profile.",
    summary:
      "Crypto Tracker is a web application designed to track cryptocurrency prices and manage portfolios. It utilizes external APIs, such as CoinGecko, to fetch real-time data for various cryptocurrencies, including prices, market cap, and trading volume.",
    demoLink: "https://crytpotracker.netlify.app/",
    isFeatured: false,
  },

  {
    slug: "beach-resort",
    img: beach,
    category: "design",
    title: "Beach Resort",
    description:
      "A popular beach resort design app that showcases beautiful rooms while staying at the beach.",
    summary:
      "This website template designed for tourist or travel-related businesses. It features a modern and responsive design, allowing the site to adapt to different devices and screen sizes. The template includes sections for showcasing rooms, exploring features, and search capability for selecting the room for you budget and requirements.",
    demoLink: "https://react-beach-resourt.netlify.app/",
    isFeatured: true,
  },
];

export const services = [
  {
    id: 1,
    // icon: <RiStackFill />,
    title: "Full Stack Web Development",
    description:
      "Develop projects and solutions that involve database applications, building user interfaces, and website implementation using various technologies.",
  },
  {
    id: 2,
    // icon: <BiCodeAlt />,
    title: "Applications Development",
    description:
      "Translate user software requirements into workable programming code through the use of a variety of programming languages and technologies.",
  },
  {
    id: 3,
    // icon: <FaChartBar />,
    title: "Systems Development",
    description:
      "Design, test and implement new software applications through the development of customized systems, creation of database systems or third party software.",
  },
];

export const routes = [
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

export const clientNeeds = [
  {
    title: "User-experienced focused",
    content:
      "Your site will be easy enough to customize that anyone can pick it up to make a change big or small, from text changes to adding new pages.",
    image: happyCustomer,
    wide: true,
  },
  {
    title: "Mobile optimized",
    content:
      "52% of people are viewing websites on a phone. I know it's important that every page is responsive for mobile devices.",
    image: mobile,
    wide: false,
  },
  {
    title: "Beautifully designed",
    content:
      "Your website won't be from a cookie-cutter layout. It will be designed to beautifully fit the style of your brand from images, colors and more!",
    image: design,
    wide: false,
  },
  {
    title: "Client loved",
    content:
      "I pay attention to every detail important to my clients in the creation of their website. Also, my clients can expect fast turn-around times, email support and as smooth website build process.",
    image: customers,
    wide: true,
  },
  {
    title: "Speed optimized",
    content:
      "Your site will be developed with speed optimation and performance in mind.  I believe that no website should be slow for it's users therefore possibly losing out on potential customers",
    image: speed,
    wide: true,
  },
  {
    title: "One-stop-shop support",
    content:
      "It won't be just a website, I will be one email or call away for any website support you need.  I often help out free of charge it it's a minor issue or quick change.",
    image: support,
    wide: false,
  },
];

export const benefits = [
  {
    title: "Boost and grow your online presence",
    content:
      "A strong online presence is crucial for small businesses, and I’m here to help you stand out. With a website that's not only visually appealing but also easy to find on search engines, your business will attract more visitors and convert them into loyal customers.",
    image: computer,
  },
  {
    title: "Save valuable time and reduce stress",
    content:
      "Running a small business is already a full-time job—you shouldn’t have to worry about the technical side of your website too. I take care of all the web development details, so you can focus on what you do best, without the headache of trying to figure it all out yourself.",
    image: lightBulb,
  },
  {
    title: "Tailored solutions that grow with you",
    content:
      "Your business is unique, and your website should be too. I create custom solutions that fit your specific needs and can scale as your business grows. Whether you need a simple update or a full redesign, I’m here to help your website evolve with your business.",
    image: trust,
  },
];

export const faqs = [
  {
    id: 1,
    question: "How long does it take to build a website?",
    answer:
      "The timeline depends on the size and complexity of your site. A simple website might take a few weeks, while a more complex project could take a couple of months. I’ll give you a clear timeline once we discuss your needs.",
  },
  {
    id: 2,
    question: "How much does it cost to build a website?",
    answer:
      "The cost varies based on the features you need, the design complexity, and any special functionality. I offer different packages to fit various budgets and will provide a detailed quote after we chat about your project.",
  },
  {
    id: 3,
    question: "Do I need to provide content and images?",
    answer:
      "It’s great if you have your own content and images, but if not, no worries! I can help with copywriting, and we can source high-quality images that fit your brand.",
  },
  {
    id: 4,
    question: "Can you help with SEO?",
    answer:
      "Yes! I ensure that your website is optimized for search engines from the start, helping your site rank better in search results and attract more visitors.",
  },
  {
    id: 5,
    question: "Will I be able to update the website myself?",
    answer:
      "Definitely. I build sites with user-friendly content management systems (CMS) like Prismic or Contenful, so you can easily make updates. I’ll also provide training if you need it. I can also make updates to your site for you for a small maintenance fee",
  },
  {
    id: 6,
    question: "How long does it take to build a website?",
    answer:
      "The timeline depends on the size and complexity of your site. A simple website might take a few weeks, while a more complex project could take a couple of months. I’ll give you a clear timeline once we discuss your needs.",
  },
  {
    id: 7,
    question: "What happens if my website needs fixed after it’s live?",
    answer:
      "I offer ongoing support and maintenance packages to keep your website running smoothly. If anything goes wrong, I’m just an email or a phone call away to help you out.",
  },
  {
    id: 8,
    question: "Can you redesign my existing website?",
    answer:
      "Of course! Whether you need a complete overhaul or just a few tweaks to modernize your site, I can help refresh your online presence and make it work better for your business.",
  },
  {
    id: 9,
    question: "Whats the website building process?",
    answer:
      "We meet via a video call, or a phone call to discuss your website and what you’re looking for. I build out the website with your content based on your requirements. I send you a private link to your new website built out, and you can then send any revisions or changes you want me to make. There are usually 2 sets of revisions. Once perfected, I launch the website!",
  },
];

export const testimonials = [
  {
    name: "Thomas Ellsmore",
    company: "Tommy Stumps LLC",
    testimonial:
      "The website is amazing and I'm especially impressed with how great it looks on my phone! The image gallery page is perfect and exactly the way I envisioned. Thank you so much for all you've done - I couldn't be happier with the result!",
  },
  {
    name: "John Doe",
    company: "Microsoft",
    testimonial:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam a velit fermentum, ultrices ligula sed, tincidunt est. Nullam vulputate sollicitudin nulla non pulvinar. In eget imperdiet magna.",
  },
  {
    name: "Tony Stark",
    company: "Stark Industries",
    testimonial:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam a velit fermentum, ultrices ligula sed, tincidunt est. Nullam vulputate sollicitudin nulla non pulvinar. In eget imperdiet magna.",
  },
];

export const customWebsites = [
  {
    title: "Enhanced User Experience",
    content:
      "I make it super easy for your customers to check out your services, no matter what device they're using.",
    image: brandAssets,
  },
  {
    title: "Advanced Functionality",
    content:
      "Level up your business game by adding features such as payment gateways and automation to your site.",
    image: seo,
  },
  {
    title: "Fully Custom Design",
    content:
      "Engage your users right away with interactive elements and beautifully orchestrated animations.",
    image: brandLibrary,
  },
  {
    title: "Scalable Development",
    content:
      "Your website will be ready to grow with your business and stay flexible for whatever comes next.",
    image: development,
  },
];
