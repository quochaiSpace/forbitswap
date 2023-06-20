import styles from "./index.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/scss";
import "swiper/scss/navigation";

import { useState } from "react";

import logo from "../../../assets/images/logo.png";
import logoMobile from "../../../assets/images/logo-mobile.png";
import toggle from "../../../assets/images/Group 145648.png";
import crypto from "../../../assets/images/Crypto.png";

const Header = () => {

  const [walletAdress, setWalletAddress] = useState("")

  const requestAcount = async () => {
    console.log("first")

    if (window.ethereum) {
      console.log('deleted')

      try {
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts"
        })
        setWalletAddress(accounts[0]);
      } catch {
        console.log("error conecting!")
      }
    } else {
      window.alert("please install Metamask!");
      window.open("https://metamask.io/");

    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.navbar}>
        <div className={styles.imgZone}>
          <img src={logo} className={styles.logo}></img>
        </div>
        <div className={styles.logo_mobile}>
          <img src={logoMobile} className={styles.img_logo} alt=""></img>
        </div>
        <nav className={styles.navbar_list}>
          <ul className={styles.navigator}>
            <li>Swap</li>
            <li>Pools</li>
            <li>Compass Share</li>
            <li>Bridge</li>
            <li>Earn</li>
          </ul>
        </nav>
        <div>
          <button className={styles.btnCw} type=""
            onClick={() => requestAcount()}
          >
            <span> {walletAdress.length > 0 ? `Connect: ${walletAdress.substring(0, 4)}...${walletAdress.substring(38)}` : "Connect Wallet"} </span>

          </button>
        </div>

        <div className={styles.togglebtn}>
          <img src={toggle} alt=""></img>
        </div>
      </div>

      <div className={styles.content}>
        <div className={styles.view_content}>
          <div className={styles.view_text}>
            <span className={styles.textTitle}>Compass Share</span>
            <span className={styles.textTitle2}>
              Decentralized Prediction Markets
            </span>
            <p className={styles.textTitle3}>
              Decentralized Prediction Markets on the <br /> blockchain enables
              people to buy and sell <br /> contracts based on future events.
            </p>
            <button type="" className={styles.tradebtn}>
              Trade Now
            </button>
          </div>
        </div>
      </div>

      <div className={styles.swiper_wrapper}>
        <Swiper
          navigation={true}
          slidesPerView={3}
          modules={[Navigation]}
          className="mySwiper"
          spaceBetween={20}
          breakpoints={{
            320: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
            1440: {
              slidesPerView: 4,
            },
            2000: {
              slidesPerView: 5,
            },
          }}
        >
          <SwiperSlide>
            <div className={styles.cardBody1}></div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.cardBody2}></div>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <div className={styles.cardBody3}></div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.cardBody1}></div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.cardBody2}></div>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <div className={styles.cardBody3}></div>
          </SwiperSlide>
        </Swiper>
      </div>

      <div className={styles.crypto_zone}>
        <div className={styles.crypto_currency}>
          <img src={crypto} className={styles.crypto_img} alt=""></img>
        </div>
      </div>
    </div>
  );
};

export default Header;
