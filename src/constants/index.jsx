import { BotMessageSquare } from "lucide-react";
import { BatteryCharging } from "lucide-react";
import { Fingerprint } from "lucide-react";
import { ShieldHalf } from "lucide-react";
import { PlugZap } from "lucide-react";
import { GlobeLock } from "lucide-react";

import user1 from "../assets/profile-pictures/user1.jpg";
import user2 from "../assets/profile-pictures/user2.jpg";
import user3 from "../assets/profile-pictures/user3.jpg";
import user4 from "../assets/profile-pictures/user4.jpg";
import user5 from "../assets/profile-pictures/user5.jpg";
import user6 from "../assets/profile-pictures/user6.jpg";

import rezku from '../assets/rezku.png'
import hungerRush from '../assets/hungerRush.png'
import revel from '../assets/revel.png'
import parSale from '../assets/parSale.png'
import spotOn from '../assets/spotOn.png'
import microsSimphony from '../assets/microsSimphony.png'
import microsRes from '../assets/microsRes.png'
import speedLine from '../assets/speedline.png'
import focus from '../assets/focus.png'
import foodTec from '../assets/foodTec.png'
import prism from '../assets/prism.png'
import linga from '../assets/linga.png'
import xenial from '../assets/xenial.png'
import ovvi from '../assets/ovvi.png'



export const navItems = [
  { label: "HOME", href: "/" },
  { label: "SERVICES", href: "#" },
  { label: "PRICING", href: "#" },
  { label: "OUR TEAM", href: "#" },
  { label: "CONTACT US", href: "#" },
  { label: "RESOURCES", href: "#" },
];

export const testimonials = [
  {
    user: "John Doe",
    company: "Stellar Solutions",
    image: user1,
    text: "I am extremely satisfied with the services provided. The team was responsive, professional, and delivered results beyond my expectations.",
  },
  {
    user: "Jane Smith",
    company: "Blue Horizon Technologies",
    image: user2,
    text: "I couldn't be happier with the outcome of our project. The team's creativity and problem-solving skills were instrumental in bringing our vision to life",
  },
  {
    user: "David Johnson",
    company: "Quantum Innovations",
    image: user3,
    text: "Working with this company was a pleasure. Their attention to detail and commitment to excellence are commendable. I would highly recommend them to anyone looking for top-notch service.",
  },
  {
    user: "Ronee Brown",
    company: "Fusion Dynamics",
    image: user4,
    text: "Working with the team at XYZ Company was a game-changer for our project. Their attention to detail and innovative solutions helped us achieve our goals faster than we thought possible. We are grateful for their expertise and professionalism!",
  },
  {
    user: "Michael Wilson",
    company: "Visionary Creations",
    image: user5,
    text: "I am amazed by the level of professionalism and dedication shown by the team. They were able to exceed our expectations and deliver outstanding results.",
  },
  {
    user: "Emily Davis",
    company: "Synergy Systems",
    image: user6,
    text: "The team went above and beyond to ensure our project was a success. Their expertise and dedication are unmatched. I look forward to working with them again in the future.",
  },
];

export const features = [
  {
    icon: <BotMessageSquare />,
    text: "Drag-and-Drop Interface",
    description:
      "Easily design and arrange your VR environments with a user-friendly drag-and-drop interface.",
  },
  {
    icon: <Fingerprint />,
    text: "Multi-Platform Compatibility",
    description:
      "Build VR applications that run seamlessly across multiple platforms, including mobile, desktop, and VR headsets.",
  },
  {
    icon: <ShieldHalf />,
    text: "Built-in Templates",
    description:
      "Jumpstart your VR projects with a variety of built-in templates for different types of applications and environments.",
  },
  {
    icon: <BatteryCharging />,
    text: "Real-Time Preview",
    description:
      "Preview your VR application in real-time as you make changes, allowing for quick iterations and adjustments.",
  },
  {
    icon: <PlugZap />,
    text: "Collaboration Tools",
    description:
      "Work together with your team in real-time on VR projects, enabling seamless collaboration and idea sharing.",
  },
  {
    icon: <GlobeLock />,
    text: "Analytics Dashboard",
    description:
      "Gain valuable insights into user interactions and behavior within your VR applications with an integrated analytics dashboard.",
  },
];

export const checklistItems = [
  {
    title: "Code merge made easy",
    description:
      "Track the performance of your VR apps and gain insights into user behavior.",
  },
  {
    title: "Review code without worry",
    description:
      "Track the performance of your VR apps and gain insights into user behavior.",
  },
  {
    title: "AI Assistance to reduce time",
    description:
      "Track the performance of your VR apps and gain insights into user behavior.",
  },
  {
    title: "Share work in minutes",
    description:
      "Track the performance of your VR apps and gain insights into user behavior.",
  },
];

export const pricingOptions = [
  {
    title: "Free",
    price: "$0",
    features: [
      "Private board sharing",
      "5 Gb Storage",
      "Web Analytics",
      "Private Mode",
    ],
  },
  {
    title: "Pro",
    price: "$10",
    features: [
      "Private board sharing",
      "10 Gb Storage",
      "Web Analytics (Advance)",
      "Private Mode",
    ],
  },
  {
    title: "Enterprise",
    price: "$200",
    features: [
      "Private board sharing",
      "Unlimited Storage",
      "High Performance Network",
      "Private Mode",
    ],
  },
];

export const quickLinks = [
  { href: "#", text: "Home" },
  { href: "#", text: "Services" },
  { href: "#", text: "Pricing" },
  { href: "#", text: "Our Team" },
  { href: "#", text: "Contact Us" },
  { href: "#", text: "Affiliates" },
];

export const quickLinksRest = [
  { href: "#", text: "E-books" },
  { href: "#", text: "White Papers" },
  { href: "#", text: "Press Releases" },
  { href: "#", text: "Case Studies" },
  { href: "#", text: "Blogs" },
];

export const platformLinks = [
  { href: "#", text: "Features" },
  { href: "#", text: "Supported Devices" },
  { href: "#", text: "System Requirements" },
  { href: "#", text: "Downloads" },
  { href: "#", text: "Release Notes" },
];

export const communityLinks = [
  { href: "#", text: "Events" },
  { href: "#", text: "Meetups" },
  { href: "#", text: "Conferences" },
  { href: "#", text: "Hackathons" },
  { href: "#", text: "Jobs" },
];

export const logos =[
  `${rezku}`,
  `${hungerRush}`,
  `${revel}`,
  `${parSale}`,
  `${spotOn}`,
  `${microsSimphony}`,
  `${microsRes}`,
  `${speedLine}`,
  `${focus}`,
  `${foodTec}`,
  `${prism}`,
  `${linga}`,
  `${xenial}`,
  `${ovvi}`,
]

export const logosSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 7,
  slidesToScroll: 3,
  // NextArrow: <NextArrow />,
  // PrevArrow: <PrevArrow />,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: '10px',
      },
    },
    {
      breakpoint: 640,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: '5px',
      },
    },
  ],
};

export const cardsSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: '10px',
      },
    },
    {
      breakpoint: 640,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: '5px',
      },
    },
  ],
};


const Icon1 = () => (
  <svg version="1.0" xmlns="http://www.w3.org/2000/svg" className='max-w-12 md:max-w-14'
  viewBox="0 0 512.000000 512.000000"
  preserveAspectRatio="xMidYMid meet">
  <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
  fill="#0773b3" stroke="none">
  <path d="M165 4761 c-51 -23 -101 -79 -114 -128 -16 -55 -15 -1149 0 -1194 18
  -51 55 -97 102 -122 42 -22 48 -22 547 -27 l505 -5 268 -192 c291 -209 310
  -218 355 -170 21 22 22 32 22 195 l0 172 63 0 c93 0 135 16 188 69 70 70 70
  71 67 712 l-3 554 -28 48 c-15 26 -47 60 -69 75 l-42 27 -910 2 c-864 3 -913
  2 -951 -16z m1830 -165 c14 -20 15 -90 13 -570 -3 -529 -4 -548 -22 -562 -14
  -10 -51 -14 -132 -14 -160 0 -158 2 -162 -174 -2 -75 -5 -136 -7 -136 -2 0
  -101 70 -220 155 l-216 155 -502 0 c-439 0 -505 2 -525 16 l-22 15 0 554 c0
  490 2 555 16 569 14 14 108 16 889 16 l875 0 15 -24z"/>
  <path d="M1035 4561 c-94 -24 -164 -81 -205 -165 -54 -109 -42 -224 32 -328
  16 -23 19 -33 9 -36 -7 -2 -40 -25 -74 -51 -109 -83 -188 -228 -191 -349 -1
  -60 1 -65 32 -93 l32 -29 436 0 436 0 29 29 c25 26 29 37 29 86 0 138 -96 299
  -232 386 l-48 31 31 38 c87 108 77 276 -23 385 -73 80 -197 121 -293 96z m135
  -173 c159 -82 56 -325 -114 -268 -42 14 -82 57 -95 105 -24 86 50 183 139 185
  14 0 46 -10 70 -22z m75 -492 c85 -39 184 -153 185 -213 0 -10 -73 -13 -330
  -13 -181 0 -330 3 -330 6 0 3 12 29 26 58 83 167 281 239 449 162z"/>
  <path d="M3455 4684 c-354 -52 -591 -156 -791 -347 -166 -156 -278 -353 -338
  -592 -39 -157 -49 -245 -50 -470 -2 -246 5 -222 -129 -400 -152 -202 -224
  -398 -167 -455 20 -20 24 -21 123 -40 l57 -11 0 -113 c0 -99 2 -115 20 -134
  11 -12 32 -25 45 -28 14 -3 25 -9 25 -12 0 -4 -19 -24 -41 -44 -41 -38 -42
  -39 -36 -94 4 -41 17 -74 46 -122 46 -77 71 -137 101 -240 18 -62 26 -76 58
  -97 84 -55 184 -54 432 5 171 41 232 47 265 26 14 -9 25 -26 25 -39 0 -12 -22
  -87 -49 -167 -64 -187 -80 -253 -88 -349 -6 -76 -5 -80 20 -105 l26 -26 854 0
  854 0 23 25 c33 35 24 85 -59 332 -110 329 -139 463 -148 694 l-6 146 130 129
  c257 255 391 526 439 884 90 679 -262 1319 -854 1551 -190 74 -285 91 -537 94
  -121 2 -233 1 -250 -1z m385 -548 l0 -393 -44 -5 c-92 -11 -179 -90 -206 -188
  -5 -19 -10 -159 -10 -311 0 -317 5 -348 71 -423 23 -26 40 -48 38 -50 -2 -2
  -95 -58 -206 -124 l-203 -121 -66 35 c-52 27 -77 34 -123 34 -164 0 -285 -119
  -285 -279 1 -240 279 -367 459 -209 66 58 95 123 95 213 l0 70 78 45 c42 24
  173 102 291 172 188 112 220 128 258 128 110 0 203 53 247 141 l26 53 0 304
  c0 205 -4 318 -12 344 -14 49 -76 120 -123 142 -19 10 -54 20 -78 24 l-42 8
  -3 377 -2 377 27 -6 c57 -14 200 -67 258 -97 216 -108 410 -306 523 -532 43
  -87 89 -222 114 -338 32 -147 31 -416 -1 -567 -66 -307 -225 -575 -451 -761
  -41 -33 -81 -68 -87 -77 -16 -20 -18 -261 -3 -382 21 -163 61 -333 129 -541
  l69 -209 -725 0 -726 0 7 43 c4 23 31 114 61 202 62 186 71 234 55 296 -17 63
  -52 103 -115 135 -52 25 -62 26 -138 21 -45 -4 -138 -20 -207 -37 -171 -41
  -272 -55 -298 -41 -11 6 -24 29 -31 56 -19 74 -49 148 -86 210 l-36 59 44 45
  c54 55 67 80 67 121 0 44 -31 84 -85 109 l-45 21 0 114 c0 143 -10 160 -109
  178 -35 7 -65 17 -68 24 -8 21 53 128 137 240 149 198 166 245 156 423 -4 66
  -3 171 4 244 51 597 394 973 965 1061 50 8 168 14 263 15 l172 1 0 -394z m234
  -582 l26 -27 0 -288 0 -288 -24 -28 c-24 -27 -27 -28 -139 -31 -130 -4 -166 7
  -186 56 -9 20 -11 108 -9 306 l3 278 28 24 c26 23 36 24 151 24 120 0 124 -1
  150 -26z m-934 -1139 c42 -22 60 -53 60 -106 0 -127 -167 -161 -224 -46 -49
  101 63 204 164 152z"/>
  <path d="M1443 2028 l-268 -193 -505 -5 c-499 -5 -505 -5 -547 -27 -47 -25
  -84 -71 -102 -122 -8 -24 -11 -204 -11 -605 0 -531 2 -574 19 -611 22 -50 79
  -101 128 -115 27 -8 308 -10 939 -8 l900 3 42 27 c22 15 54 49 69 75 l28 48 3
  554 c3 641 3 642 -67 712 -53 53 -95 69 -188 69 l-63 0 0 173 c0 168 -1 174
  -23 195 -48 45 -66 36 -354 -170z m219 -184 c4 -176 2 -174 162 -174 81 0 118
  -4 132 -14 18 -14 19 -32 19 -569 0 -455 -2 -557 -14 -570 -12 -16 -87 -17
  -887 -17 -780 0 -874 2 -888 16 -14 14 -16 79 -16 569 l0 554 22 15 c20 14 86
  16 525 16 l502 0 213 154 c117 85 216 155 220 155 3 1 8 -60 10 -135z"/>
  <path d="M354 1506 c-48 -21 -61 -89 -24 -126 20 -20 33 -20 744 -20 l725 0
  20 26 c28 35 26 67 -3 101 l-24 28 -704 2 c-575 2 -709 0 -734 -11z"/>
  <path d="M332 1140 c-28 -26 -29 -79 -3 -111 l19 -24 717 -3 716 -2 30 29 c36
  36 38 73 4 106 l-24 25 -719 0 c-709 0 -719 0 -740 -20z"/>
  <path d="M336 789 c-20 -16 -26 -29 -26 -59 0 -30 6 -43 26 -59 26 -21 34 -21
  731 -21 598 0 708 2 732 15 48 24 56 81 16 120 l-24 25 -714 0 c-707 0 -715 0
  -741 -21z"/>
  </g>
</svg>
)

const Icon2 = () => (
  <svg version="1.0" xmlns="http://www.w3.org/2000/svg" className='max-w-12 md:max-w-14'
  viewBox="0 0 512.000000 512.000000"
  preserveAspectRatio="xMidYMid meet">
  <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
  fill="#0773b3" stroke="none">
  <path d="M165 4761 c-51 -23 -101 -79 -114 -128 -16 -55 -15 -1149 0 -1194 18
  -51 55 -97 102 -122 42 -22 48 -22 547 -27 l505 -5 268 -192 c291 -209 310
  -218 355 -170 21 22 22 32 22 195 l0 172 63 0 c93 0 135 16 188 69 70 70 70
  71 67 712 l-3 554 -28 48 c-15 26 -47 60 -69 75 l-42 27 -910 2 c-864 3 -913
  2 -951 -16z m1830 -165 c14 -20 15 -90 13 -570 -3 -529 -4 -548 -22 -562 -14
  -10 -51 -14 -132 -14 -160 0 -158 2 -162 -174 -2 -75 -5 -136 -7 -136 -2 0
  -101 70 -220 155 l-216 155 -502 0 c-439 0 -505 2 -525 16 l-22 15 0 554 c0
  490 2 555 16 569 14 14 108 16 889 16 l875 0 15 -24z"/>
  <path d="M1035 4561 c-94 -24 -164 -81 -205 -165 -54 -109 -42 -224 32 -328
  16 -23 19 -33 9 -36 -7 -2 -40 -25 -74 -51 -109 -83 -188 -228 -191 -349 -1
  -60 1 -65 32 -93 l32 -29 436 0 436 0 29 29 c25 26 29 37 29 86 0 138 -96 299
  -232 386 l-48 31 31 38 c87 108 77 276 -23 385 -73 80 -197 121 -293 96z m135
  -173 c159 -82 56 -325 -114 -268 -42 14 -82 57 -95 105 -24 86 50 183 139 185
  14 0 46 -10 70 -22z m75 -492 c85 -39 184 -153 185 -213 0 -10 -73 -13 -330
  -13 -181 0 -330 3 -330 6 0 3 12 29 26 58 83 167 281 239 449 162z"/>
  <path d="M3455 4684 c-354 -52 -591 -156 -791 -347 -166 -156 -278 -353 -338
  -592 -39 -157 -49 -245 -50 -470 -2 -246 5 -222 -129 -400 -152 -202 -224
  -398 -167 -455 20 -20 24 -21 123 -40 l57 -11 0 -113 c0 -99 2 -115 20 -134
  11 -12 32 -25 45 -28 14 -3 25 -9 25 -12 0 -4 -19 -24 -41 -44 -41 -38 -42
  -39 -36 -94 4 -41 17 -74 46 -122 46 -77 71 -137 101 -240 18 -62 26 -76 58
  -97 84 -55 184 -54 432 5 171 41 232 47 265 26 14 -9 25 -26 25 -39 0 -12 -22
  -87 -49 -167 -64 -187 -80 -253 -88 -349 -6 -76 -5 -80 20 -105 l26 -26 854 0
  854 0 23 25 c33 35 24 85 -59 332 -110 329 -139 463 -148 694 l-6 146 130 129
  c257 255 391 526 439 884 90 679 -262 1319 -854 1551 -190 74 -285 91 -537 94
  -121 2 -233 1 -250 -1z m385 -548 l0 -393 -44 -5 c-92 -11 -179 -90 -206 -188
  -5 -19 -10 -159 -10 -311 0 -317 5 -348 71 -423 23 -26 40 -48 38 -50 -2 -2
  -95 -58 -206 -124 l-203 -121 -66 35 c-52 27 -77 34 -123 34 -164 0 -285 -119
  -285 -279 1 -240 279 -367 459 -209 66 58 95 123 95 213 l0 70 78 45 c42 24
  173 102 291 172 188 112 220 128 258 128 110 0 203 53 247 141 l26 53 0 304
  c0 205 -4 318 -12 344 -14 49 -76 120 -123 142 -19 10 -54 20 -78 24 l-42 8
  -3 377 -2 377 27 -6 c57 -14 200 -67 258 -97 216 -108 410 -306 523 -532 43
  -87 89 -222 114 -338 32 -147 31 -416 -1 -567 -66 -307 -225 -575 -451 -761
  -41 -33 -81 -68 -87 -77 -16 -20 -18 -261 -3 -382 21 -163 61 -333 129 -541
  l69 -209 -725 0 -726 0 7 43 c4 23 31 114 61 202 62 186 71 234 55 296 -17 63
  -52 103 -115 135 -52 25 -62 26 -138 21 -45 -4 -138 -20 -207 -37 -171 -41
  -272 -55 -298 -41 -11 6 -24 29 -31 56 -19 74 -49 148 -86 210 l-36 59 44 45
  c54 55 67 80 67 121 0 44 -31 84 -85 109 l-45 21 0 114 c0 143 -10 160 -109
  178 -35 7 -65 17 -68 24 -8 21 53 128 137 240 149 198 166 245 156 423 -4 66
  -3 171 4 244 51 597 394 973 965 1061 50 8 168 14 263 15 l172 1 0 -394z m234
  -582 l26 -27 0 -288 0 -288 -24 -28 c-24 -27 -27 -28 -139 -31 -130 -4 -166 7
  -186 56 -9 20 -11 108 -9 306 l3 278 28 24 c26 23 36 24 151 24 120 0 124 -1
  150 -26z m-934 -1139 c42 -22 60 -53 60 -106 0 -127 -167 -161 -224 -46 -49
  101 63 204 164 152z"/>
  <path d="M1443 2028 l-268 -193 -505 -5 c-499 -5 -505 -5 -547 -27 -47 -25
  -84 -71 -102 -122 -8 -24 -11 -204 -11 -605 0 -531 2 -574 19 -611 22 -50 79
  -101 128 -115 27 -8 308 -10 939 -8 l900 3 42 27 c22 15 54 49 69 75 l28 48 3
  554 c3 641 3 642 -67 712 -53 53 -95 69 -188 69 l-63 0 0 173 c0 168 -1 174
  -23 195 -48 45 -66 36 -354 -170z m219 -184 c4 -176 2 -174 162 -174 81 0 118
  -4 132 -14 18 -14 19 -32 19 -569 0 -455 -2 -557 -14 -570 -12 -16 -87 -17
  -887 -17 -780 0 -874 2 -888 16 -14 14 -16 79 -16 569 l0 554 22 15 c20 14 86
  16 525 16 l502 0 213 154 c117 85 216 155 220 155 3 1 8 -60 10 -135z"/>
  <path d="M354 1506 c-48 -21 -61 -89 -24 -126 20 -20 33 -20 744 -20 l725 0
  20 26 c28 35 26 67 -3 101 l-24 28 -704 2 c-575 2 -709 0 -734 -11z"/>
  <path d="M332 1140 c-28 -26 -29 -79 -3 -111 l19 -24 717 -3 716 -2 30 29 c36
  36 38 73 4 106 l-24 25 -719 0 c-709 0 -719 0 -740 -20z"/>
  <path d="M336 789 c-20 -16 -26 -29 -26 -59 0 -30 6 -43 26 -59 26 -21 34 -21
  731 -21 598 0 708 2 732 15 48 24 56 81 16 120 l-24 25 -714 0 c-707 0 -715 0
  -741 -21z"/>
  </g>
</svg>
)

const Icon3 = () => (
  <svg version="1.0" xmlns="http://www.w3.org/2000/svg" className='max-w-12 md:max-w-14'
  viewBox="0 0 512.000000 512.000000"
  preserveAspectRatio="xMidYMid meet">
  <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
  fill="#0773b3" stroke="none">
  <path d="M165 4761 c-51 -23 -101 -79 -114 -128 -16 -55 -15 -1149 0 -1194 18
  -51 55 -97 102 -122 42 -22 48 -22 547 -27 l505 -5 268 -192 c291 -209 310
  -218 355 -170 21 22 22 32 22 195 l0 172 63 0 c93 0 135 16 188 69 70 70 70
  71 67 712 l-3 554 -28 48 c-15 26 -47 60 -69 75 l-42 27 -910 2 c-864 3 -913
  2 -951 -16z m1830 -165 c14 -20 15 -90 13 -570 -3 -529 -4 -548 -22 -562 -14
  -10 -51 -14 -132 -14 -160 0 -158 2 -162 -174 -2 -75 -5 -136 -7 -136 -2 0
  -101 70 -220 155 l-216 155 -502 0 c-439 0 -505 2 -525 16 l-22 15 0 554 c0
  490 2 555 16 569 14 14 108 16 889 16 l875 0 15 -24z"/>
  <path d="M1035 4561 c-94 -24 -164 -81 -205 -165 -54 -109 -42 -224 32 -328
  16 -23 19 -33 9 -36 -7 -2 -40 -25 -74 -51 -109 -83 -188 -228 -191 -349 -1
  -60 1 -65 32 -93 l32 -29 436 0 436 0 29 29 c25 26 29 37 29 86 0 138 -96 299
  -232 386 l-48 31 31 38 c87 108 77 276 -23 385 -73 80 -197 121 -293 96z m135
  -173 c159 -82 56 -325 -114 -268 -42 14 -82 57 -95 105 -24 86 50 183 139 185
  14 0 46 -10 70 -22z m75 -492 c85 -39 184 -153 185 -213 0 -10 -73 -13 -330
  -13 -181 0 -330 3 -330 6 0 3 12 29 26 58 83 167 281 239 449 162z"/>
  <path d="M3455 4684 c-354 -52 -591 -156 -791 -347 -166 -156 -278 -353 -338
  -592 -39 -157 -49 -245 -50 -470 -2 -246 5 -222 -129 -400 -152 -202 -224
  -398 -167 -455 20 -20 24 -21 123 -40 l57 -11 0 -113 c0 -99 2 -115 20 -134
  11 -12 32 -25 45 -28 14 -3 25 -9 25 -12 0 -4 -19 -24 -41 -44 -41 -38 -42
  -39 -36 -94 4 -41 17 -74 46 -122 46 -77 71 -137 101 -240 18 -62 26 -76 58
  -97 84 -55 184 -54 432 5 171 41 232 47 265 26 14 -9 25 -26 25 -39 0 -12 -22
  -87 -49 -167 -64 -187 -80 -253 -88 -349 -6 -76 -5 -80 20 -105 l26 -26 854 0
  854 0 23 25 c33 35 24 85 -59 332 -110 329 -139 463 -148 694 l-6 146 130 129
  c257 255 391 526 439 884 90 679 -262 1319 -854 1551 -190 74 -285 91 -537 94
  -121 2 -233 1 -250 -1z m385 -548 l0 -393 -44 -5 c-92 -11 -179 -90 -206 -188
  -5 -19 -10 -159 -10 -311 0 -317 5 -348 71 -423 23 -26 40 -48 38 -50 -2 -2
  -95 -58 -206 -124 l-203 -121 -66 35 c-52 27 -77 34 -123 34 -164 0 -285 -119
  -285 -279 1 -240 279 -367 459 -209 66 58 95 123 95 213 l0 70 78 45 c42 24
  173 102 291 172 188 112 220 128 258 128 110 0 203 53 247 141 l26 53 0 304
  c0 205 -4 318 -12 344 -14 49 -76 120 -123 142 -19 10 -54 20 -78 24 l-42 8
  -3 377 -2 377 27 -6 c57 -14 200 -67 258 -97 216 -108 410 -306 523 -532 43
  -87 89 -222 114 -338 32 -147 31 -416 -1 -567 -66 -307 -225 -575 -451 -761
  -41 -33 -81 -68 -87 -77 -16 -20 -18 -261 -3 -382 21 -163 61 -333 129 -541
  l69 -209 -725 0 -726 0 7 43 c4 23 31 114 61 202 62 186 71 234 55 296 -17 63
  -52 103 -115 135 -52 25 -62 26 -138 21 -45 -4 -138 -20 -207 -37 -171 -41
  -272 -55 -298 -41 -11 6 -24 29 -31 56 -19 74 -49 148 -86 210 l-36 59 44 45
  c54 55 67 80 67 121 0 44 -31 84 -85 109 l-45 21 0 114 c0 143 -10 160 -109
  178 -35 7 -65 17 -68 24 -8 21 53 128 137 240 149 198 166 245 156 423 -4 66
  -3 171 4 244 51 597 394 973 965 1061 50 8 168 14 263 15 l172 1 0 -394z m234
  -582 l26 -27 0 -288 0 -288 -24 -28 c-24 -27 -27 -28 -139 -31 -130 -4 -166 7
  -186 56 -9 20 -11 108 -9 306 l3 278 28 24 c26 23 36 24 151 24 120 0 124 -1
  150 -26z m-934 -1139 c42 -22 60 -53 60 -106 0 -127 -167 -161 -224 -46 -49
  101 63 204 164 152z"/>
  <path d="M1443 2028 l-268 -193 -505 -5 c-499 -5 -505 -5 -547 -27 -47 -25
  -84 -71 -102 -122 -8 -24 -11 -204 -11 -605 0 -531 2 -574 19 -611 22 -50 79
  -101 128 -115 27 -8 308 -10 939 -8 l900 3 42 27 c22 15 54 49 69 75 l28 48 3
  554 c3 641 3 642 -67 712 -53 53 -95 69 -188 69 l-63 0 0 173 c0 168 -1 174
  -23 195 -48 45 -66 36 -354 -170z m219 -184 c4 -176 2 -174 162 -174 81 0 118
  -4 132 -14 18 -14 19 -32 19 -569 0 -455 -2 -557 -14 -570 -12 -16 -87 -17
  -887 -17 -780 0 -874 2 -888 16 -14 14 -16 79 -16 569 l0 554 22 15 c20 14 86
  16 525 16 l502 0 213 154 c117 85 216 155 220 155 3 1 8 -60 10 -135z"/>
  <path d="M354 1506 c-48 -21 -61 -89 -24 -126 20 -20 33 -20 744 -20 l725 0
  20 26 c28 35 26 67 -3 101 l-24 28 -704 2 c-575 2 -709 0 -734 -11z"/>
  <path d="M332 1140 c-28 -26 -29 -79 -3 -111 l19 -24 717 -3 716 -2 30 29 c36
  36 38 73 4 106 l-24 25 -719 0 c-709 0 -719 0 -740 -20z"/>
  <path d="M336 789 c-20 -16 -26 -29 -26 -59 0 -30 6 -43 26 -59 26 -21 34 -21
  731 -21 598 0 708 2 732 15 48 24 56 81 16 120 l-24 25 -714 0 c-707 0 -715 0
  -741 -21z"/>
  </g>
</svg>
)

export const cData = [
  {id: 1, title: 'AI Ordering Solutions', content: 'Increase accuracy and Speed with AI redundant systems.', icon: <Icon1 />},
  {id: 2, title: 'POS Integrations', content: 'We are integrated with over 50 POS systems.', icon: <Icon2 />},
  {id: 3, title: 'Spanish Language Ordering', content: 'Increase your marketing with Spanish speaking agents.', icon: <Icon3 />},
]