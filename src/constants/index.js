const navLinks = [
    { label: "Store" },
    { label: "Mac" },
    { label: "iPhone" },
    { label: "Watch" },
    { label: "Vision" },
    { label: "AirPods" },
];

const noChangeParts = [
    "Object_84",
    "Object_37",
    "Object_34",
    "Object_12",
    "Object_80",
    "Object_35",
    "Object_36",
    "Object_13",
    "Object_125",
    "Object_76",
    "Object_33",
    "Object_42",
    "Object_58",
    "Object_52",
    "Object_21",
    "Object_10",
];

const performanceImages = [
    { id: "p1", src: "/performance1.png" },
    { id: "p2", src: "/performance2.png" },
    { id: "p3", src: "/performance3.png" },
    { id: "p4", src: "/performance4.png" },
    { id: "p5", src: "/performance5.jpg" },
    { id: "p6", src: "/performance6.png" },
    { id: "p7", src: "/performance7.png" },
];

const performanceImgPositions = [
    {
        id: "p1",
        left: 5,
        bottom: 65,
    },
    {
        id: "p2",
        right: 10,
        bottom: 60,
    },
    {
        id: "p3",
        right: -5,
        bottom: 45,
    },
    {
        id: "p4",
        right: -10,
        bottom: 0,
    },
    {
        id: "p5",
        left: 20,
        bottom: 50,
    },
    {
        id: "p6",
        left: 2,
        bottom: 30,
    },
    {
        id: "p7",
        left: -5,
        bottom: 0,
    },
];

const features = [
    {
        id: 1,
        icon: "/feature-icon1.svg",
        highlight: "Email AI.",
        text: "Summarize and draft replies to emails instantly, so you stay on top of your inbox.",
        styles: "left-5 md:left-20 top-[20%] opacity-0 translate-y-5",
    },
    {
        id: 2,
        icon: "/feature-icon2.svg",
        highlight: "Image AI.",
        text: "Generate or edit images with ease. Just type what you imagine, and let AI bring it to life.",
        styles: "right-5 md:right-20 top-[30%] opacity-0 translate-y-5",
    },
    {
        id: 3,
        icon: "/feature-icon3.svg",
        highlight: "Summarize AI.",
        text: "Turn long articles, reports, or notes into clear, bite-sized summaries in seconds.",
        styles: "left-5 md:left-20 top-[50%] opacity-0 translate-y-5",
    },
    {
        id: 4,
        icon: "/feature-icon4.svg",
        highlight: "AirDrop.",
        text: "Wirelessly share photos, large files, and more between your iPhone, your Mac, & other devices.",
        styles: "right-5 md:right-20 top-[70%] opacity-0 translate-y-5",
    },
    {
        id: 5,
        icon: "/feature-icon5.svg",
        highlight: "Writing Tool.",
        text: "Write smarter and faster, whether it’s blogs, essays, or captions, AI helps polish your words.",
        styles: "left-5 md:left-20 top-[90%] opacity-0 translate-y-5",
    },
];

const featureSequence = [
    { videoPath: "/videos/feature-1.mp4", boxClass: ".box1", delay: 1 },
    { videoPath: "/videos/feature-2.mp4", boxClass: ".box2", delay: 0 },
    { videoPath: "/videos/feature-3.mp4", boxClass: ".box3", delay: 0 },
    { videoPath: "/videos/feature-4.mp4", boxClass: ".box4", delay: 0 },
    { videoPath: "/videos/feature-5.mp4", boxClass: ".box5", delay: 0 },
];

const footerLinks = [
    { label: "Privacy Policy", link: "#" },
    { label: "Terms of Use", link: "#" },
    { label: "Sales Policy", link: "#" },
    { label: "Legal", link: "#" },
    { label: "Site Map", link: "#" },
];

const galleryItems = [
    {
        id: 1,
        title: "M5, M4 Pro and M4 Max.\nOne big, powerful family.",
        desc: "The most advanced chips ever for a personal computer.",
        image: "/highlights/highlights_chip_endframe__bxbe3wx5kl42_large_2x.jpg",
    },
    {
        id: 2,
        title: "Built for Apple Intelligence.",
        desc: "Personal, private, powerful.",
        image: "/highlights/highlights_ai__gx6pr9k2njyy_large_2x.jpg",
    },
    {
        id: 3,
        title: "Up to 24 hours battery life.\nNow that's a marathon.",
        desc: "Go from dawn to dusk without reaching for a cable.",
        image: "/highlights/highlights_battery__brcrilt6v65e_large_2x.jpg",
    },
    {
        id: 4,
        title: "Breathtaking Liquid Retina XDR display.",
        desc: "Extreme dynamic range and pro color accuracy.",
        image: "/highlights/highlights_liquid_glass__b68fw5m0fv5y_large_2x.jpg",
    },
    {
        id: 5,
        title: "Apple Ecosystem.\nEverything connects.",
        desc: "Experience the magic of your Mac working with your iPhone.",
        image: "/highlights/highlights_mac_iphone__14jes6mgxxey_large_2x.jpg",
    },
];

const closerLookItems = [
    {
        id: 1,
        title: "Front and center.",
        text: "The 12MP Center Stage camera keeps you in the frame even as you move around.",
        image: "/screen.png",
    },
    {
        id: 2,
        title: "Three-mic array.",
        text: "Studio-quality mics with high signal‑to‑noise ratio and directional beamforming.",
        image: "/highlights/highlights_liquid_glass__b68fw5m0fv5y_large_2x.jpg",
    },
    {
        id: 3,
        title: "Six-speaker sound system.",
        text: "Four force‑cancelling woofers and two high‑performance tweeters fills the room.",
        image: "/highlight-bg.png",
    },
    {
        id: 4,
        title: "Touch ID.",
        text: "Fast, easy, secure authentication for logins and purchases.",
        image: "/highlights/highlights_ai__gx6pr9k2njyy_large_2x.jpg",
    },
];

export {
    features,
    featureSequence,
    closerLookItems,
    footerLinks,
    galleryItems,
    navLinks,
    noChangeParts,
    performanceImages,
    performanceImgPositions,
};
