import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from "./CatalogPage.module.scss";
import CardTemplate from "../../components/CardTemplate/CardTemplate";

const CatalogPage = () => {
  const url = "http://localhost:3001/assortment";
  const [data, setData] = useState([]);
  const [details, setDetails] = useState({});

  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, []);

  const showDetails = (item) => {
    setDetails({
      id: item.id,
      name: item.name,
      description: item.description,
      url: item.url,
      price: item.price,
    });
  };

  return (
    <>
      <p className={styles.TitlePage}>Каталог</p>
      <div className={styles.CardContainer}>
        <ul className={styles.CardList}>
          {data.map((item) => (
            <li
              onClick={() => showDetails(item)}
              className={styles.CardItem}
              key={item.id}
            >
              {item.name}
            </li>
          ))}
        </ul>
        <CardTemplate
          key={details.id}
          name={details.name}
          image={details.url}
        />
      </div>
    </>
  );
};

export default CatalogPage;
