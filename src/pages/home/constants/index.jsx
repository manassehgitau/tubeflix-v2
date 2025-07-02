import { MdOutlineManageSearch, MdLocalMovies, MdOutlineLiveTv } from "react-icons/md";
import { IoIosTrendingUp } from "react-icons/io";
import { CiViewList } from "react-icons/ci";
import { GiMoon } from "react-icons/gi";

export const statistics = [
  {
    id: "0",
    prevNumber: 90.1,
    number: 100.976,
    caption: "Shows",
  },
  {
    id: "1",
    prevNumber: 0.1,
    number: 1.724,
    caption: "Users",
  },
  {
    id: "2",
    prevNumber: 5.2,
    number: 11.443,
    caption: "Personalities",
  },
];

export const FeatureList = [
  {
    id: "0",
    icon: <MdOutlineManageSearch />,
    title: "Curated Picks, Not Clickbait",
    content: "Say goodbye to decision fatigue. We highlight only the good stuff."
  },
  {
    id: "1",
    icon: <MdLocalMovies />,
    title: "Genres Galore",
    content: "Whether you're into rom-coms, docuseries, or dystopian drama, we’ve got something queued up for you."
  },
  {
    id: "2",
    icon: <IoIosTrendingUp />,
    title: "Hot Right Now",
    content: "Stay in the loop with what's trending across the globe — updated hourly."
  },
  {
    id: "3",
    icon: <MdOutlineLiveTv />,
    title: "Trailer Teasers",
    content: "Get a quick taste before you commit. Perfect for the picky."
  },
  {
    id: "4",
    icon: <CiViewList />,
    title: "Smart Watchlists",
    content: "Keep track of what you love and get recommendations based on your vibe."
  },
  {
    id: "5",
    icon: <GiMoon />,
    title: "Dark Mode Ready",
    content: "Because midnight binges deserve ambiance."
  }
]

export const pricing= [
  {
    id: "0",
    title: "Free Forever",
    price: 0,
    description: "For the chill streamers and casual couch surfers.",
    features: [
      {
        id: "0",
        icon: "",
        description: "Access to trending and top picks"
      },
      {
        id: "1",
        icon: "",
        description: "Basic watchlist"
      },
      {
        id: "2",
        icon: "",
        description: "No credit card needed (ever)"
      }
    ],
    caption: "It's free... like the Wi-Fi at your local coffee shop."
  },
  {
    id: "1",
    title: "Cinephile",
    price: 499,
    description: "For the movie buffs who want a little extra sauce.",
    features: [
      {
        id: "0",
        icon: "",
        description: "Everything in Free"
      },
      {
        id: "1",
        icon: "",
        description: "Smart personalized recommendations"
      },
      {
        id: "2",
        icon: "",
        description: "Deeper genre filters"
      },
      {
        id: "3",
        icon: "",
        description: "Unlimited watchlists"
      },
      {
        id: "4",
        icon: "",
        description: "Dark mode themes & UI perks"
      }
    ],
    caption: "Less than a fancy latte. Way more satisfying."
  },
  {
    id: "2",
    title: "Director’s Cut",
    price: 999,
    description: "For the true binge commanders and stat nerds.",
    features: [
      {
        id: "0",
        icon: "",
        description: "Everything in Cinephile"
      },
      {
        id: "1",
        icon: "",
        description: "Early access to trending titles"
      },
      {
        id: "2",
        icon: "",
        description: "Advanced viewing analytics"
      },
      {
        id: "3",
        icon: "",
        description: "Create & share curated lists"
      },
      {
        id: "4",
        icon: "",
        description: "AI-powered mood-based suggestions"
      },
      {
        id: "5",
        icon: "",
        description: "Priority support"
      }
    ],
    caption: "It's like your streaming concierge — minus the tuxedo."
  },
]

export const socials = [
  {
    id: "0",
    title: "x",
    icon: "/Images/socials/x.svg",
    url: "#",
  },
  {
    id: "1",
    title: "Threads",
    icon: "/Images/socials/threads.svg",
    url: "#",
  },
  {
    id: "2",
    title: "Instagram",
    icon: "/Images/socials/instagram.svg",
    url: "#",
  },
  {
    id: "3",
    title: "Discord",
    icon: "Images/socials/discord.svg",
    url: "#",
  },
];
