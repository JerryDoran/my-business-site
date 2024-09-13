// import { BiCodeAlt } from "react-icons/bi";
// import { RiStackFill } from "react-icons/ri";
// import { FaChartBar } from "react-icons/fa";
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
