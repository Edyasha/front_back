import styles from "./CardTemplate.module.scss";

const CardTemplate = ({ name, image }) => {
  return (
    <div className={styles.Card}>
      <p>{name}</p>
      <div className={styles.ImageBox}>
        <img className={styles.Image} src={image} alt={name} />
      </div>
    </div>
  );
};

export default CardTemplate;
