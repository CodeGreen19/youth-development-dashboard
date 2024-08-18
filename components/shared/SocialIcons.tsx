import Link from "next/link";
import React, { Fragment } from "react";
import { FaPhoneAlt } from "react-icons/fa";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa6";
import { SiTiktok } from "react-icons/si";

const SocialIcons = ({
  footer,
  className,
}: {
  footer?: boolean;
  className?: string;
}) => {
  const socialLinks = [
    {
      href: "https://facebook.com",
      ariaLabel: "Facebook",
      icon: <FaFacebookF />,
    },
    {
      href: "https://instagram.com",
      ariaLabel: "Instagram",
      icon: <FaInstagram />,
    },

    { href: "https://youtube.com", ariaLabel: "YouTube", icon: <FaYoutube /> },
    { href: "https://tiktok.com", ariaLabel: "TikTok", icon: <SiTiktok /> },
    { href: "tel:+1234567890", ariaLabel: "Call", icon: <FaPhoneAlt /> },
  ];

  return (
    <ul className={`flex items-center justify-center gap-2 ${className}`}>
      {socialLinks.map((item) => (
        <Link href={item.href} key={item.ariaLabel}>
          <li
            className={` rounded-full ${
              footer
                ? "bg-amber-500 p-2 text-black"
                : "text-yellow-500 p-2 bg-black"
            }`}
          >
            {item.icon}
          </li>
        </Link>
      ))}
    </ul>
  );
};

export default SocialIcons;
