import React from "react";
import Link from "next/link";
import styles from "./styles.module.css";

const Card = ({ _id, title, description, category, content_link }) => {
  const onClickCard = () => {
    filterCharacters(id);
  };
  return (
    <Link href={`/resource/${_id}`}>
      <div key={_id} className={styles.wrapper}>
        <a href={content_link} target="_blank">
          <h3>{title}</h3>
          <p>{description}</p>
          <h5>{category}</h5>
        </a>
      </div>
    </Link>
  );
};

export default Card;
