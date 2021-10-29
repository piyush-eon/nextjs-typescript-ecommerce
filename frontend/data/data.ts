import { FaShippingFast } from "react-icons/fa";
import { MdSupportAgent } from "react-icons/md";
import { RiSecurePaymentFill } from "react-icons/ri";
import { SiAdguard } from "react-icons/si";

export const categories = [
  {
    name: "Headphones",
    color: "#EF4444",
    image: "/img/headphone.png",
  },
  {
    name: "Phones",
    color: "#10B981",
    image: "/img/phone.png",
  },
  {
    name: "Laptops",
    color: "#F59E0B",
    image: "/img/laptop.png",
  },
  {
    name: "Gaming Consoles",
    color: "#8B5CF6",
    image: "/img/ps5.png",
  },
  {
    name: "Speakers",
    color: "#EC4899",
    image: "/img/speakers.png",
  },
  {
    name: "Wearables",
    color: "#6366F1",
    image: "/img/watch.png",
  },
];

export const trending = [
  {
    name: "Dell G15 5510 15.6 FHD 120Hz",
    price: "67540",
    image: "https://m.media-amazon.com/images/I/61LVwo050hS._SL1080_.jpg",
  },
  {
    name: "Echo Dot (3rd Gen, Black) ",
    price: "4560",
    image: "https://m.media-amazon.com/images/I/61EXU8BuGZL._SL1100_.jpg",
  },
  {
    name: "boAt Rockerz 370 Wireless Headphone",
    price: "7590",
    image: "https://m.media-amazon.com/images/I/61kWB+uzR2L._SL1500_.jpg",
  },
  {
    name: "Apple iPhone 13 Pro Max (1TB)",
    price: "179900",
    image: "https://m.media-amazon.com/images/I/619m8rLBQSL._SL1500_.jpg",
  },
];

export const perks = [
  {
    icon: FaShippingFast,
    title: "Free Shipping",
    description: "Free Shipping on all Orders",
  },
  {
    icon: SiAdguard,
    title: "Money Back Guarantee",
    description: "30 day Policy",
  },
  {
    icon: MdSupportAgent,
    title: "Online Support 24/7",
    description: "Technical Support 24/7",
  },
  {
    icon: RiSecurePaymentFill,
    title: "Secure Payment",
    description: "All Cards Accepted",
  },
];
