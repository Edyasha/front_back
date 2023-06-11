import React from "react";
import styles from "./Footer.module.scss";
import facebook from "../../images/socialNetworks/facebook-icon.png";
import instagram from "../../images/socialNetworks/instagram-icon.png";
import telegram from "../../images/socialNetworks/telegram-icon.png";
import twitter from "../../images/socialNetworks/twitter-icon.png";
import viber from "../../images/socialNetworks/viber-icon.png";

const Footer = () => {
  return (
    <div className={styles.Wrapper}>
      <div className={styles.LeftPartFooter}>
      <div>
            <h3>Повідомити про порушення прав</h3>
            <p>
              Якщо ви вважаєте, що користувач "Продавай та купуй" порушує ваші
              права, надішліть нам повідомлення через <a href="">форму</a>
            </p>
          </div>
      </div>
      <div className={styles.CenterPartFooter}>
          
          <div>
            <h3>Як зв'язатися з підтримкою</h3>
            <p>
              Для консультацій щодо функцій платформи використовуйте форму зворотної
              зв'язку у вашому особистому кабінеті або напишіть на <a href="">sell_and_buy@tilda.com</a>
            </p>
          </div>
        </div>
      <div className={styles.RightPartFooter}>
        <h3>Ми у соц-мережах</h3>
        <div className={styles.SocialBox}>
          <a href="https://www.facebook.com/" className={styles.SocialIcon}>
            <img src={facebook} alt="посилання на facebook" />
          </a>
          <a href="https://www.instagram.com/" className={styles.SocialIcon}>
            <img src={instagram} alt="посилання на instagram" />
          </a>
          <a href="https://telegram.org/" className={styles.SocialIcon}>
            <img src={telegram} alt="посилання на telegram" />
          </a>
          <a href="https://twitter.com/" className={styles.SocialIcon}>
            <img src={twitter} alt="посилання на twitter" />
          </a>
          <a href="https://www.viber.com/" className={styles.SocialIcon}>
            <img src={viber} alt="посилання на viber" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
