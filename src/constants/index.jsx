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
  <svg version="1.0" xmlns="http://www.w3.org/2000/svg "
 width="45.000000pt" height="45.000000pt" viewBox="0 0 512.000000 512.000000"
 preserveAspectRatio="xMidYMid meet">

<g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
fill="#0773b3" stroke="none">
<path d="M466 4949 c-62 -15 -153 -68 -197 -116 -22 -24 -55 -74 -72 -111
l-32 -67 0 -296 0 -295 37 -76 c45 -91 103 -147 196 -191 l67 -32 262 -3 262
-3 26 25 c33 33 33 79 0 111 l-24 25 -232 0 c-153 0 -246 4 -273 12 -55 16
-138 99 -154 154 -17 57 -17 491 0 548 16 55 99 138 154 154 59 17 1289 17
1348 0 55 -16 138 -99 154 -154 17 -57 17 -491 0 -548 -25 -85 -136 -166 -227
-166 -21 0 -41 -9 -56 -25 -24 -24 -25 -28 -25 -182 l0 -157 -183 182 c-162
161 -187 182 -216 182 -43 0 -81 -38 -81 -82 0 -29 26 -59 263 -295 236 -237
266 -263 295 -263 22 0 41 8 57 25 l25 24 0 221 c0 179 3 220 14 220 7 0 45
16 83 35 86 43 144 103 186 193 l32 67 0 296 0 295 -37 76 c-45 91 -103 147
-196 191 l-67 32 -675 2 c-387 1 -692 -3 -714 -8z"/>
<path d="M3545 4935 l-25 -24 0 -396 0 -396 25 -24 c15 -16 36 -25 55 -25 19
0 40 9 55 25 l25 24 0 341 0 340 560 0 560 0 0 -775 0 -776 25 -24 c32 -33 78
-33 110 0 l25 24 0 831 0 831 -25 24 -24 25 -671 0 -671 0 -24 -25z"/>
<path d="M825 4615 c-16 -15 -25 -36 -25 -55 0 -19 9 -40 25 -55 l24 -25 391
0 391 0 24 25 c16 15 25 36 25 55 0 19 -9 40 -25 55 l-24 25 -391 0 -391 0
-24 -25z"/>
<path d="M4025 4615 c-16 -15 -25 -36 -25 -55 0 -19 9 -40 25 -55 l24 -25 271
0 271 0 24 25 c16 15 25 36 25 55 0 19 -9 40 -25 55 l-24 25 -271 0 -271 0
-24 -25z"/>
<path d="M585 4295 c-16 -15 -25 -36 -25 -55 0 -19 9 -40 25 -55 l24 -25 311
0 311 0 24 25 c33 32 33 78 0 110 l-24 25 -311 0 -311 0 -24 -25z"/>
<path d="M1465 4295 c-50 -49 -15 -135 55 -135 41 0 80 39 80 80 0 41 -39 80
-80 80 -19 0 -40 -9 -55 -25z"/>
<path d="M3865 4295 c-16 -15 -25 -36 -25 -55 0 -19 9 -40 25 -55 l24 -25 351
0 351 0 24 25 c16 15 25 36 25 55 0 19 -9 40 -25 55 l-24 25 -351 0 -351 0
-24 -25z"/>
<path d="M2863 4119 c-48 -24 -99 -77 -119 -125 -21 -49 -17 -135 7 -201 l22
-57 -24 -15 c-338 -223 -552 -584 -585 -985 -7 -84 -15 -109 -165 -485 -88
-217 -159 -406 -159 -419 0 -12 11 -34 25 -47 23 -24 29 -25 158 -25 l135 0 4
-187 c6 -212 21 -279 93 -410 50 -90 178 -218 268 -268 131 -72 198 -87 410
-93 l187 -4 0 -295 0 -294 25 -24 c32 -33 78 -33 110 0 l25 24 0 356 0 356
-23 23 c-23 23 -25 23 -213 18 -231 -6 -298 4 -411 59 -113 56 -199 142 -252
252 -53 109 -61 164 -61 399 0 198 0 199 -25 223 -23 24 -30 25 -140 25 -63 0
-115 1 -115 3 0 1 62 158 138 348 133 330 139 349 145 435 25 344 189 641 469
847 l36 27 10 -28 c121 -345 157 -440 173 -457 45 -46 129 -10 129 56 0 16
-58 190 -130 386 -71 197 -130 372 -130 390 0 36 38 73 76 73 52 0 66 -29 234
-492 89 -246 164 -456 167 -467 4 -15 -3 -21 -34 -31 -184 -59 -336 -209 -409
-400 -25 -68 -28 -88 -28 -205 -1 -145 9 -186 73 -310 45 -88 162 -208 246
-252 68 -35 177 -73 212 -73 22 0 23 -4 23 -61 0 -34 -5 -80 -12 -103 -16 -55
-99 -138 -154 -154 -68 -20 -90 -16 -104 18 -17 42 -90 104 -138 118 -51 16
-253 15 -306 0 -86 -26 -166 -136 -166 -228 0 -92 80 -202 166 -228 53 -15
255 -16 306 0 47 14 121 76 137 116 11 27 18 30 74 36 133 14 252 98 314 222
31 65 36 85 41 169 4 83 7 95 23 95 41 0 180 53 239 91 206 133 325 385 291
617 -42 292 -257 513 -539 554 l-77 11 -127 351 c-70 192 -125 353 -122 356
11 11 311 4 369 -8 409 -88 720 -361 849 -746 57 -170 56 -151 56 -1524 l0
-1263 25 -24 c32 -33 78 -33 111 0 l25 25 -4 1307 c-3 1293 -3 1309 -24 1393
-41 165 -105 315 -186 435 -56 83 -77 108 -170 203 -171 174 -397 295 -649
348 -89 19 -309 25 -409 12 l-57 -8 -23 62 c-27 74 -78 134 -134 159 -56 26
-148 25 -202 -2z m772 -1254 c256 -67 415 -329 350 -578 -23 -89 -62 -156
-129 -223 -189 -189 -482 -189 -672 1 -151 150 -186 364 -90 553 102 200 327
302 541 247z m-620 -1450 c16 -15 25 -36 25 -55 0 -19 -9 -40 -25 -55 -23 -24
-31 -25 -135 -25 -104 0 -112 1 -135 25 -16 15 -25 36 -25 55 0 19 9 40 25 55
23 24 31 25 135 25 104 0 112 -1 135 -25z"/>
<path d="M3440 2627 c-49 -16 -133 -102 -148 -153 -28 -94 -8 -169 63 -239 70
-71 145 -91 239 -63 55 16 138 99 154 154 28 94 8 169 -63 239 -70 71 -152 91
-245 62z m135 -172 c50 -49 15 -135 -55 -135 -41 0 -80 39 -80 80 0 41 39 80
80 80 19 0 40 -9 55 -25z"/>
<path d="M4185 3975 c-16 -15 -25 -36 -25 -55 0 -19 9 -40 25 -55 24 -25 26
-25 215 -25 189 0 191 0 215 25 16 15 25 36 25 55 0 19 -9 40 -25 55 -24 25
-26 25 -215 25 -189 0 -191 0 -215 -25z"/>
<path d="M669 3107 c-29 -22 -39 -55 -39 -129 l0 -73 -40 -23 -40 -23 -53 34
c-117 75 -129 69 -242 -125 -48 -83 -90 -159 -92 -169 -12 -44 6 -68 82 -111
l75 -43 0 -45 c0 -45 0 -45 -62 -79 -78 -43 -98 -64 -98 -101 0 -39 39 -80 76
-80 29 0 210 101 230 128 13 18 14 249 1 270 -5 7 -33 26 -63 43 l-54 31 17
31 c9 18 27 49 40 70 l24 38 53 -31 c29 -16 64 -30 78 -30 13 0 51 17 84 38
32 21 74 44 92 52 43 17 52 36 52 114 l0 66 80 0 80 0 0 -57 c0 -80 15 -103
88 -139 34 -17 70 -38 80 -47 41 -38 67 -38 137 -3 l65 33 27 -46 c14 -25 33
-56 40 -68 14 -21 12 -23 -34 -46 -79 -41 -82 -46 -84 -185 -2 -139 0 -144 83
-189 l48 -26 -32 -56 c-49 -87 -44 -85 -103 -51 -63 36 -98 38 -139 6 -17 -13
-59 -37 -92 -54 -69 -35 -84 -60 -84 -143 l0 -49 -80 0 -80 0 0 70 c0 62 -3
74 -25 95 -13 14 -31 25 -38 25 -8 0 -43 19 -77 41 -36 25 -73 42 -89 41 -14
0 -69 -25 -120 -56 -126 -73 -147 -111 -92 -167 16 -16 39 -29 52 -29 12 0 53
18 90 39 l68 40 41 -22 40 -22 0 -83 c0 -75 2 -85 25 -107 24 -25 26 -25 215
-25 189 0 191 0 215 25 23 22 25 32 25 107 l0 83 40 22 41 22 68 -40 c37 -21
77 -39 89 -39 36 0 68 40 157 196 71 125 85 156 79 178 -7 28 -49 64 -117 101
-34 18 -37 23 -37 65 0 44 1 46 52 74 69 39 98 69 98 101 0 33 -152 300 -193
338 -36 35 -60 33 -143 -16 l-58 -35 -43 21 -43 21 0 83 c0 76 -2 86 -25 108
-24 25 -26 25 -212 25 -132 -1 -193 -4 -204 -13z"/>
<path d="M796 2626 c-187 -70 -216 -320 -50 -426 84 -53 179 -52 261 3 68 45
102 112 103 197 0 57 -5 73 -32 120 -59 98 -180 144 -282 106z m128 -167 c20
-16 26 -29 26 -59 0 -70 -72 -103 -126 -57 -20 17 -27 33 -27 57 0 24 7 40 27
57 34 28 65 29 100 2z"/>
<path d="M185 1095 l-25 -24 0 -431 0 -431 25 -24 24 -25 591 0 591 0 24 25
c22 21 25 33 25 102 l0 77 240 241 c215 216 240 244 240 273 0 22 -9 41 -25
57 -24 25 -24 25 -240 25 l-215 0 0 55 c0 46 -4 60 -25 80 l-24 25 -591 0
-591 0 -24 -25z m915 -172 c-24 -21 -101 -86 -170 -145 -69 -60 -127 -108
-130 -108 -3 0 -61 48 -130 108 -69 59 -146 124 -170 145 l-44 37 344 0 344 0
-44 -37z m-538 -265 c169 -144 214 -178 238 -178 24 0 69 34 238 178 114 97
215 183 225 191 16 13 17 -2 17 -258 l0 -271 -480 0 -480 0 0 271 c0 256 1
271 17 258 10 -8 111 -94 225 -191z m1078 139 c0 -1 -45 -47 -100 -102 l-100
-100 0 103 0 102 100 0 c55 0 100 -1 100 -3z"/>
</g>
</svg>
)

const Icon2 = () => (
  <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="45.000000pt" height="45.000000pt" viewBox="0 0 512.000000 512.000000"
 preserveAspectRatio="xMidYMid meet">

<g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
fill="#0773b3" stroke="none">
<path d="M605 4949 c-155 -30 -314 -155 -385 -303 -57 -119 -62 -163 -58 -567
4 -352 4 -354 29 -420 80 -207 221 -326 445 -373 l52 -11 221 -260 c123 -143
232 -268 243 -277 29 -26 74 -23 103 7 l25 24 0 255 0 254 258 4 c232 4 263 6
315 26 175 64 300 190 359 360 22 65 23 76 23 452 0 350 -2 390 -19 440 -31
92 -76 166 -136 229 -65 66 -121 102 -219 140 l-66 26 -570 2 c-331 1 -591 -3
-620 -8z m1237 -186 c93 -44 151 -100 196 -191 l37 -76 0 -376 0 -376 -37 -76
c-45 -91 -103 -147 -196 -191 l-67 -32 -307 -5 c-278 -5 -309 -7 -325 -23 -16
-15 -19 -43 -23 -206 l-5 -189 -175 204 c-96 113 -184 207 -195 209 -11 2 -46
7 -78 10 -77 9 -183 63 -237 121 -23 25 -56 75 -73 112 l-32 67 0 375 0 375
32 67 c17 37 50 87 72 111 44 48 135 101 197 116 22 5 279 9 594 8 l555 -2 67
-32z"/>
<path d="M1100 4624 c-64 -23 -125 -68 -158 -117 -33 -46 -62 -124 -62 -162 0
-24 2 -25 78 -25 l78 0 12 44 c31 116 177 154 263 67 100 -100 30 -271 -111
-271 -19 0 -40 -9 -55 -25 -23 -22 -25 -32 -25 -120 l0 -95 80 0 80 0 0 43 c0
43 1 44 52 67 65 29 126 89 158 155 34 72 34 198 0 270 -31 64 -92 124 -155
154 -65 31 -172 38 -235 15z"/>
<path d="M1120 3680 l0 -80 80 0 80 0 0 80 0 80 -80 0 -80 0 0 -80z"/>
<path d="M2845 4949 c-154 -30 -314 -156 -385 -303 -52 -109 -60 -164 -60
-406 0 -242 8 -297 60 -405 63 -132 168 -226 319 -284 l66 -26 498 -3 497 -3
0 -255 0 -255 25 -24 c29 -30 74 -33 103 -7 11 9 120 134 243 277 l221 260 52
11 c255 54 423 220 468 464 5 31 8 155 6 290 -4 222 -6 239 -29 301 -36 94
-70 147 -133 212 -62 63 -119 99 -215 136 l-66 26 -810 2 c-481 0 -830 -3
-860 -8z m1717 -186 c93 -44 151 -100 196 -191 l37 -76 0 -255 0 -256 -32 -67
c-17 -37 -50 -87 -73 -112 -54 -58 -160 -112 -237 -121 -32 -3 -67 -8 -78 -10
-11 -2 -99 -96 -195 -209 l-175 -204 -5 189 c-4 163 -7 191 -23 206 -16 17
-57 18 -565 23 l-547 5 -67 32 c-93 44 -151 100 -196 191 l-37 76 0 255 0 256
32 67 c17 37 50 87 72 111 44 48 135 101 197 116 23 5 375 9 834 8 l795 -2 67
-32z"/>
<path d="M3040 4400 l0 -80 80 0 80 0 0 -80 0 -80 -80 0 -80 0 0 -80 0 -80
135 0 c131 0 137 1 160 25 21 20 25 34 25 80 l0 55 320 0 320 0 0 -55 c0 -46
4 -60 25 -80 23 -24 29 -25 160 -25 l135 0 0 80 0 80 -80 0 -80 0 0 80 0 80
80 0 80 0 0 80 0 80 -135 0 c-131 0 -137 -1 -160 -25 -21 -20 -25 -34 -25 -80
l0 -55 -320 0 -320 0 0 55 c0 46 -4 60 -25 80 -23 24 -29 25 -160 25 l-135 0
0 -80z"/>
<path d="M2281 3344 c-169 -45 -301 -180 -346 -351 -12 -47 -15 -152 -15 -605
l0 -548 -57 0 c-32 0 -68 -3 -80 -6 l-23 -6 0 261 0 262 -25 24 -24 25 -751 0
-751 0 -24 -25 -25 -24 0 -631 0 -631 25 -24 c24 -25 24 -25 240 -25 l215 0 0
-80 0 -80 -215 0 c-216 0 -216 0 -240 -25 l-25 -24 0 -311 0 -311 25 -24 24
-25 2351 0 2351 0 24 25 25 24 0 311 0 311 -25 24 c-20 21 -34 25 -80 25 l-55
0 0 575 0 576 -25 24 c-20 21 -34 25 -80 25 l-55 0 0 160 0 160 -80 0 -80 0 0
-160 0 -160 -135 0 c-131 0 -137 -1 -160 -25 l-25 -24 0 -376 0 -375 -215 0
c-285 0 -265 17 -265 -225 l0 -175 -80 0 -80 0 0 376 c0 262 -4 389 -12 416
-6 22 -31 62 -55 88 -51 57 -108 80 -195 80 l-58 0 0 80 0 80 135 0 c131 0
137 1 160 25 24 23 25 29 25 160 l0 135 55 0 c46 0 60 4 80 25 l25 24 0 271 0
271 -25 24 -24 25 -219 0 -220 0 -6 34 c-13 67 -74 171 -134 228 -65 62 -134
101 -219 123 -79 21 -474 20 -552 -1z m587 -183 c35 -19 74 -48 88 -64 23 -27
74 -118 74 -132 0 -3 -211 -5 -470 -5 -258 0 -470 2 -470 5 0 3 10 26 22 52
36 78 117 145 208 174 14 4 129 7 255 6 l230 -2 63 -34z m172 -681 l0 -320
-80 0 -80 0 0 -80 0 -80 80 0 80 0 0 -80 0 -80 -257 1 c-242 1 -255 2 -216 16
52 18 125 95 141 151 7 21 12 90 12 151 0 105 -1 113 -25 136 -24 25 -26 25
-215 25 -189 0 -191 0 -215 -25 -24 -23 -25 -31 -25 -136 0 -61 5 -130 12
-153 15 -51 99 -137 148 -153 29 -9 2 -11 -142 -12 l-178 -1 0 480 0 480 480
0 480 0 0 -320z m480 160 l0 -160 -160 0 -160 0 0 160 0 160 160 0 160 0 0
-160z m-160 -400 l0 -80 -80 0 -80 0 0 80 0 80 80 0 80 0 0 -80z m-1760 -520
l0 -520 -640 0 -640 0 0 520 0 520 640 0 640 0 0 -520z m960 385 c0 -67 -29
-105 -80 -105 -51 0 -80 38 -80 105 l0 55 80 0 80 0 0 -55z m2080 -505 l0
-320 -160 0 -160 0 0 320 0 320 160 0 160 0 0 -320z m-2720 -320 l0 -400 -80
0 -80 0 0 375 0 376 25 24 c20 21 34 25 80 25 l55 0 0 -400z m400 263 l0 -137
103 -103 c90 -90 107 -103 137 -103 30 0 47 13 137 103 l103 103 0 137 0 137
120 0 120 0 0 -240 0 -240 -176 0 c-213 0 -241 -7 -310 -75 -59 -59 -80 -117
-71 -195 l6 -50 -204 0 -205 0 0 400 0 400 120 0 120 0 0 -137z m320 34 l0
-103 -40 -39 -40 -39 -40 39 -40 39 0 103 0 103 80 0 80 0 0 -103z m695 78
l25 -24 0 -376 0 -375 -335 0 -336 0 -24 25 c-16 15 -25 36 -25 55 0 19 9 40
25 55 l24 25 231 0 231 0 24 25 25 24 0 296 0 295 55 0 c46 0 60 -4 80 -25z
m1305 -655 l0 -120 -400 0 -400 0 0 120 0 120 400 0 400 0 0 -120z m-3520 -40
l0 -80 -160 0 -160 0 0 80 0 80 160 0 160 0 0 -80z m480 0 l0 -80 -160 0 -160
0 0 80 0 80 160 0 160 0 0 -80z m3200 -440 l0 -200 -2240 0 -2240 0 0 200 0
200 2240 0 2240 0 0 -200z"/>
<path d="M2240 2560 l0 -80 80 0 80 0 0 80 0 80 -80 0 -80 0 0 -80z"/>
<path d="M2720 2560 l0 -80 80 0 80 0 0 80 0 80 -80 0 -80 0 0 -80z"/>
<path d="M665 1495 c-16 -15 -25 -36 -25 -55 0 -19 9 -40 25 -55 l24 -25 271
0 271 0 24 25 c33 32 33 78 0 110 l-24 25 -271 0 -271 0 -24 -25z"/>
</g>
</svg>
)

const Icon3 = () => (
  <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="45.000000pt" height="45.000000pt" viewBox="0 0 512.000000 512.000000"
 preserveAspectRatio="xMidYMid meet">

<g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
fill="#0773b3" stroke="none">
<path d="M1625 4935 c-23 -22 -25 -32 -25 -120 l0 -95 -695 0 -696 0 -24 -25
c-25 -24 -25 -26 -25 -215 0 -189 0 -191 25 -215 l24 -25 696 0 695 0 0 -95
c0 -88 2 -98 25 -120 50 -51 61 -44 345 192 165 137 263 225 266 240 4 12 4
34 0 46 -3 15 -101 103 -266 240 -284 236 -295 243 -345 192z m273 -340 c70
-58 127 -110 127 -115 0 -9 -249 -220 -260 -220 -3 0 -5 20 -5 45 0 35 -6 52
-25 70 l-24 25 -696 0 -695 0 0 80 0 80 695 0 696 0 24 25 c19 18 25 35 25 70
0 25 2 45 5 45 3 0 62 -47 133 -105z"/>
<path d="M2425 4935 l-25 -24 0 -535 0 -536 -967 -2 -968 -3 -67 -32 c-93 -44
-151 -100 -196 -191 l-37 -76 0 -1136 0 -1136 37 -76 c45 -91 103 -147 196
-191 l67 -32 528 -3 527 -3 0 -159 0 -160 -56 0 c-87 0 -133 -18 -189 -75 -64
-63 -75 -100 -75 -244 0 -105 1 -113 25 -136 l24 -25 751 0 751 0 24 25 c24
23 25 31 25 136 0 144 -11 181 -75 244 -56 57 -102 75 -189 75 l-56 0 0 160 0
159 528 3 527 3 67 32 c93 44 151 100 196 191 l37 76 3 808 3 808 535 0 535 0
24 25 25 24 0 991 0 991 -25 24 -24 25 -1231 0 -1231 0 -24 -25z m2375 -1015
l0 -880 -1120 0 -1120 0 0 880 0 880 1120 0 1120 0 0 -880z m-2400 -615 l0
-376 25 -24 24 -25 616 0 615 0 0 -640 0 -640 -1680 0 -1680 0 0 936 c0 706 3
947 12 978 15 51 99 137 148 153 24 8 321 11 978 12 l942 1 0 -375z m1280
-1921 c0 -31 -5 -75 -12 -98 -16 -55 -99 -138 -154 -154 -60 -17 -2968 -17
-3028 0 -55 16 -138 99 -154 154 -7 23 -12 67 -12 98 l0 56 1680 0 1680 0 0
-56z m-1360 -584 l0 -160 -320 0 -320 0 0 160 0 160 320 0 320 0 0 -160z m295
-345 c21 -20 25 -34 25 -80 l0 -55 -640 0 -640 0 0 55 c0 46 4 60 25 80 l24
25 591 0 591 0 24 -25z"/>
<path d="M4105 4615 l-25 -24 0 -671 0 -671 25 -24 c24 -25 26 -25 215 -25
189 0 191 0 215 25 l25 24 0 671 0 671 -25 24 c-24 25 -26 25 -215 25 -189 0
-191 0 -215 -25z m295 -695 l0 -560 -80 0 -80 0 0 560 0 560 80 0 80 0 0 -560z"/>
<path d="M3465 4295 l-25 -24 0 -511 0 -511 25 -24 c24 -25 26 -25 215 -25
189 0 191 0 215 25 l25 24 0 511 0 511 -25 24 c-24 25 -26 25 -215 25 -189 0
-191 0 -215 -25z m295 -535 l0 -400 -80 0 -80 0 0 400 0 400 80 0 80 0 0 -400z"/>
<path d="M2825 3975 l-25 -24 0 -351 0 -351 25 -24 c24 -25 26 -25 215 -25
189 0 191 0 215 25 l25 24 0 351 0 351 -25 24 c-24 25 -26 25 -215 25 -189 0
-191 0 -215 -25z m295 -375 l0 -240 -80 0 -80 0 0 240 0 240 80 0 80 0 0 -240z"/>
<path d="M1245 3513 c-60 -8 -181 -42 -239 -68 -482 -213 -670 -804 -400
-1257 65 -108 194 -237 302 -302 346 -206 789 -151 1073 133 112 112 191 253
235 417 27 103 26 312 -3 419 -92 340 -362 591 -698 650 -81 14 -198 17 -270
8z m247 -167 c102 -20 175 -49 260 -105 101 -66 196 -172 247 -274 61 -124 76
-190 75 -337 -1 -107 -5 -137 -27 -205 -38 -115 -90 -198 -182 -290 -92 -92
-175 -144 -290 -182 -68 -22 -98 -26 -205 -27 -147 -1 -213 14 -337 75 -145
72 -287 228 -343 377 -77 204 -59 439 47 622 47 80 178 213 256 259 152 89
328 120 499 87z"/>
<path d="M1280 3071 c0 -45 -2 -50 -30 -61 -68 -28 -130 -129 -130 -210 0
-123 116 -240 239 -240 42 0 81 -38 81 -80 0 -41 -39 -80 -80 -80 -33 0 -80
38 -80 65 0 12 -15 15 -80 15 -89 0 -90 0 -68 -72 14 -48 76 -121 118 -138 28
-11 30 -16 30 -61 l0 -49 80 0 80 0 0 49 c0 45 2 50 30 61 68 28 130 129 130
210 0 123 -116 240 -239 240 -42 0 -81 38 -81 80 0 41 39 80 80 80 33 0 80
-38 80 -65 0 -12 15 -15 80 -15 89 0 90 0 68 72 -14 48 -76 121 -118 138 -28
11 -30 16 -30 61 l0 49 -80 0 -80 0 0 -49z"/>
<path d="M2400 2640 l0 -80 160 0 160 0 0 80 0 80 -160 0 -160 0 0 -80z"/>
<path d="M2880 2640 l0 -80 240 0 240 0 0 80 0 80 -240 0 -240 0 0 -80z"/>
<path d="M2400 2320 l0 -80 160 0 160 0 0 80 0 80 -160 0 -160 0 0 -80z"/>
<path d="M2880 2320 l0 -80 240 0 240 0 0 80 0 80 -240 0 -240 0 0 -80z"/>
<path d="M2400 2000 l0 -80 160 0 160 0 0 80 0 80 -160 0 -160 0 0 -80z"/>
<path d="M2880 2000 l0 -80 240 0 240 0 0 80 0 80 -240 0 -240 0 0 -80z"/>
<path d="M4449 2714 c-10 -3 -114 -122 -233 -265 -235 -283 -242 -294 -191
-344 22 -23 32 -25 120 -25 l95 0 0 -935 0 -936 25 -24 c24 -25 26 -25 215
-25 189 0 191 0 215 25 l25 24 0 936 0 935 95 0 c88 0 98 2 120 25 50 49 43
63 -176 327 -111 134 -209 251 -218 260 -17 19 -65 30 -92 22z m149 -339 l112
-135 -50 0 c-41 0 -56 -5 -75 -25 l-25 -24 0 -936 0 -935 -80 0 -80 0 0 935 0
936 -25 24 c-19 20 -34 25 -75 25 l-50 0 112 135 c62 74 115 135 118 135 3 0
56 -61 118 -135z"/>
</g>
</svg>
  
)

export const cData = [
  {id: 1, title: 'AI Ordering Solutions', content: 'Increase accuracy and Speed with AI redundant systems.', 
    href: '#', icon: <Icon1 />},
  {id: 2, title: 'POS Integrations', content: 'We are integrated with over 50 POS systems.',
    href: '#', icon: <Icon2 />},
  {id: 3, title: 'Spanish Language Ordering', content: 'Increase your marketing with Spanish speaking agents.',
    href: '#', icon: <Icon3 />},
]