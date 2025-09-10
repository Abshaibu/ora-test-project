"use client";
import { ContactUsForm } from "@/component";
import FitfriendzCover from '../public/fitfriendz-cover.jpg'
import MockUp from "../public/FitFriendzAppMockUp.png";
import AppstoreBadge from '../public/app-store-badge.svg';
import PlaystoreBadge from '../public/google-play-badge.svg'
import style from "./home.module.css";

const services = [
  {
    title: "FitFriendz App",
    description: "lorem ipsum",
    link: "https://fitfriendz.com/",
    bgImg: FitfriendzCover.src,
  },
  {
    title: "FitShop",
    description: "lorem ipsum",
    link: "#",
    comingSoon: true,
    bgImg:
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Marketplace",
    description: "lorem ipsum",
    comingSoon: true,
    link: "#",
    bgImg:
      "https://images.unsplash.com/photo-1637666056726-1c54002346e4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGd5bSUyMHNob3B8ZW58MHx8MHx8fDA%3D",
  },
];


export default function Home() {
  return (
    <main className={style.container}>
      <section className={style.heroSection} id="home">
        <div className={style.homeBgImgContainer} />
        <div className={style.heroText}>
          <h1>
            The <span> Gympal </span> Company. <br />
            Beyond fitness, equipment and friends.
          </h1>
        </div>
      </section>

      <section className={style.aboutSection} id="about">
        <h2>About Us</h2>
        <div>
          <p className={style.aboutText}>
            Welcome to Gympal AB, your ultimate fitness and health company, with
            our headquarters in Sweden. We are a global
            fitness and wellness company committed to connecting people and
            fostering a healthy, active lifestyle through innovative technology
            and premium products.
          </p>
          <p className={style.aboutText}>
            At the heart of our company is the FitFriendz app, a dynamic fitness
            social media platform where users connect, interact, meet and share
            their fitness journeys, post pictures and videos, exchange tips on
            nutrition, and motivate each other towards achieving their fitness
            goals. Whether you are a fitness enthusiast, beginner or
            professional, FitFriendz is the place to stay connected and
            inspired. We also believe that looking good while working out is key
            to staying motivated, which is why we have created our exclusive
            line of fitness training clothes. Our FitMan, FitWoman and FitKid
            collections are designed for men, women and children respectively,
            offering style and comfort for everyone. Also coming soon is our
            FitLife flavoured water, perfect for keeping you hydrated and
            energized throughout the entire day.
          </p>
          <p className={style.aboutText}>
            In addition to our branded Gympal T-shirts and hoodies, we are
            excited to expand our product line with Gympal gym bags amongst
            other branded accessories, all coming soon to enhance your fitness
            journey.
          </p>
          <p className={style.aboutText}>
            We are not just a fitness company, we are a fitness ecosystem.
            Through our e-commerce marketplace, we provide a platform for
            personal trainers from around the world to promote their services
            and connect with clients. Additionally, fitness vendors can showcase
            and sell their equipment, making Gympal a one-stop-shop for all your
            fitness needs. At Gympal, our mission is simple: we bring fitness to
            life, one connection at a time. Join us on the journey to a
            healthier, stronger and more connected world!
          </p>
        </div>
      </section>

      <section className={style.servicesContainer} id="products">
        <h2>Our Product</h2>
        <div className={style.services}>
          {services.map(({ title, bgImg, link, comingSoon }) =>
            comingSoon ? (
              <div
                rel="noreferrer"
                target="_blank"
                href={link}
                key={title}
                className={style.servicesCard}
                style={{ backgroundImage: `url(${bgImg})` }}
              >
                <p>{title}</p>
                {comingSoon && (
                  <span className={style.comingSoonBadge}>coming soon</span>
                )}
                {/* <p>{description}</p> */}
              </div>
            ) : (
              <a
                rel="noreferrer"
                target="_blank"
                href={link}
                key={title}
                className={style.servicesCard}
                style={{ backgroundImage: `url(${bgImg})` }}
              >
                <p>{title}</p>
                {comingSoon && (
                  <span className={style.comingSoonBadge}>coming soon</span>
                )}
                {/* <p>{description}</p> */}
              </a>
            )
          )}
        </div>
        {/* <a
          className={style.viewAllBtn}
          target="_blank"
          rel="noreferrer"
          href="#"
        >
          View all products
        </a> */}
      </section>

      <section id="download" className={style.appDownloadSection}>
        <div className={style.downloadImg}>
          <img src={MockUp.src} alt="gympal app" />
        </div>
        <div className={style.downloadTexts}>
          <p>
            Together, we can shape the future of fitness. Download the
            FitFriendz app now and join us on this journey!
          </p>
          <div className={style.downloadBtnsContainer}>
            <a
              href="https://play.google.com/store/apps/details?id=com.gympal.app.gym_pal"
              target="_blank"
              rel="noreferrer"
            >
              <img alt="download from playstore" src={PlaystoreBadge.src} />
            </a>
            <button className={style.comingSoonBtn}>
              <span className={style.comingSoonBanner}>coming soon</span>
              <img alt="download from appstore" src={AppstoreBadge.src} />
            </button>
          </div>
        </div>
      </section>

      <section id="contact-us">
        <h2>Contact Us</h2>
        <ContactUsForm />
      </section>
    </main>
  );
}
