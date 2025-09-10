import Link from 'next/link';
import { FaInstagram, FaFacebook } from "react-icons/fa";
import NigeriaFlag from '/public/nigeriac.svg';
import SwedenFlag from "/public/swedenc.svg";
import { IoLogoWhatsapp } from "react-icons/io";
import { AiFillTikTok } from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import style from './footer.module.css'
import Logo from "@/public/logo-light.svg";


const footererLinks = [
  {
    title: "Contact",
    links: [
      // {
      //   icon: <FaMapMarkedAlt color="#6c9711" size="1.3rem" />,
      //   plainText: true,
      //   text: "Address goes here",
      // },
      {
        icon: <MdEmail color="#6c9711" size="1.3rem" />,
        href: "info@gympalapp.com",
        text: "info@gympalapp.com",
      },
      // {
      //   icon: <MdPhone color="#6c9711" size="1.3rem" />,
      //   href: "tel:+2345567678",
      //   text: "+2-345-567-678",
      // },
    ],
  },
  {
    title: "Find Us",
    links: [
      {
        icon: <img src={SwedenFlag.src} alt="Swedish Flag" />,
        plainText: true,
        text: "Gympal AB in Norrköping, Sweden (Head Office)",
      },
    ],
  },
  {
    title: "Social Media",
    links: [
      {
        icon: <FaFacebook color="#6c9711" size="1.3rem" />,
        href: "https://www.facebook.com/Gympalapp/",
        text: "Facebook",
      },
      {
        icon: <FaInstagram color="#6c9711" size="1.3rem" />,
        href: "https://www.instagram.com/gympa_l/",
        text: "Instagram",
      },
      {
        icon: <IoLogoWhatsapp color="#6c9711" size="1.3rem" />,
        href: "https://wa.me/46769696014",
        text: "WhatsApp",
      },
      {
        icon: <AiFillTikTok color="#6c9711" size="1.3rem" />,
        href: "https://www.tiktok.com/@gympal4",
        text: "TikTok",
      },
    ],
  },
];

const FooterNav = () => {
  return (
    <footer className={style.footer}>
          <Link href="/" className={style.footerLogo}>
            <img src={Logo.src} alt="logo" />
          </Link>
      <div className={style.footerContentContainer}>
        <div className={style.footerLinks}>
          {footererLinks.map(({ title, links }) => (
            <div key={title}>
              <h3>{title}</h3>
              <ul>
                {links.map(({ icon, text, href, plainText }) => (
                  <li key={text}>
                    {plainText ? (
                      <p>
                        {icon}
                        {text}
                      </p>
                    ) : (
                      <a target="_blabk" rel="noreferrer" href={href}>
                        {icon}
                        {text}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className={style.copyrightText}>
          © Copyright 2024 Gympal AB, all rights reserved
        </p>
      </div>
    </footer>
  );
}

export default FooterNav
