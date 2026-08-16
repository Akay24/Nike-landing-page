import { facebook, instagram, shieldTick, support, truckFast, twitter } from "../assets/icons";
import { bigShoe1, bigShoe2, bigShoe3, customer1, customer2, shoe4, shoe5, shoe6, shoe7, thumbnailShoe1, thumbnailShoe2, thumbnailShoe3 } from "../assets/images";

export const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about-us", label: "About Us" },
    { href: "#products", label: "Products" },
    { href: "#contact-us", label: "Contact Us" },
];

export const shoes = [
    {
        thumbnail: thumbnailShoe1,
        bigShoe: bigShoe1,
    },
    {
        thumbnail: thumbnailShoe2,
        bigShoe: bigShoe2,
    },
    {
        thumbnail: thumbnailShoe3,
        bigShoe: bigShoe3,
    },
];

export const statistics = [
    { value: '1k+', label: 'Brands' },
    { value: '500+', label: 'Shops' },
    { value: '250k+', label: 'Customers' },
];

export const products = [
    {
        id: "prod-1",
        imgURL: shoe4,
        name: "Nike Air Jordan-01",
        price: "$200.20",
        numericPrice: 200.20,
        rating: "4.5",
        description: "Crafted with premium leather, responsive Air-Sole cushioning, and classic high-top silhouette for iconic court-to-street style.",
        sizes: ["US 7", "US 8", "US 9", "US 10", "US 11"]
    },
    {
        id: "prod-2",
        imgURL: shoe5,
        name: "Nike Air Jordan-10",
        price: "$210.20",
        numericPrice: 210.20,
        rating: "4.6",
        description: "Featuring plush ankle padding, lightweight foam midsole, and signature grip outsole engineered for maximum agility and comfort.",
        sizes: ["US 8", "US 9", "US 10", "US 11", "US 12"]
    },
    {
        id: "prod-3",
        imgURL: shoe6,
        name: "Nike Air Jordan-100",
        price: "$220.20",
        numericPrice: 220.20,
        rating: "4.5",
        description: "Future-ready design with breathable mesh paneling, responsive Zoom Air unit, and futuristic heel clip stability.",
        sizes: ["US 7.5", "US 8.5", "US 9.5", "US 10.5", "US 11.5"]
    },
    {
        id: "prod-4",
        imgURL: shoe7,
        name: "Nike Air Jordan-001",
        price: "$230.20",
        numericPrice: 230.20,
        rating: "4.8",
        description: "Heritage craftsmanship meets modern performance. Reinforced overlay support and multi-surface traction for modern athletes.",
        sizes: ["US 8", "US 9", "US 10", "US 11"]
    },
];

export const services = [
    {
        imgURL: truckFast,
        label: "Free shipping",
        subtext: "Enjoy seamless shopping with our complimentary shipping service."
    },
    {
        imgURL: shieldTick,
        label: "Secure Payment",
        subtext: "Experience worry-free transactions with our secure payment options."
    },
    {
        imgURL: support,
        label: "Love to help you",
        subtext: "Our dedicated team is here to assist you every step of the way."
    },
];

export const reviews = [
    {
        imgURL: customer1,
        customerName: 'Morich Brown',
        rating: 4.5,
        feedback: "The attention to detail and the quality of the product exceeded my expectations. Highly recommended!"
    },
    {
        imgURL: customer2,
        customerName: 'Alexeya Decosta',
        rating: 4.5,
        feedback: "The product not only met but exceeded my expectations. I'll definitely be a returning customer!"
    }
];


export const footerLinks = [
    {
        title: "Products",
        links: [
            { name: "Air Force 1", link: "/" },
            { name: "Air Max 1", link: "/" },
            { name: "Air Jordan 1", link: "/" },
            { name: "Air Force 2", link: "/" },
            { name: "Nike Waffle Racer", link: "/" },
            { name: "Nike Cortez", link: "/" },
        ],
    },
    {
        title: "Help",
        links: [
            { name: "About us", link: "/" },
            { name: "FAQs", link: "/" },
            { name: "How it works", link: "/" },
            { name: "Privacy policy", link: "/" },
            { name: "Payment policy", link: "/" },
        ],
    },
    {
        title: "Get in touch",
        links: [
            { name: "customer@nike.com", link: "mailto:customer@nike.com" },
            { name: "+92554862354", link: "tel:+92554862354" },
        ],
    },
];

export const socialMedia = [
    { src: facebook, alt: "facebook logo" },
    { src: twitter, alt: "twitter logo" },
    { src: instagram, alt: "instagram logo" },
];