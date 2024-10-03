import { useState } from "react";
import { Rating } from "@mui/material";
import styles from "./styles.module.scss";
import Image, { StaticImageData } from "next/image";

interface CardProps {
  book: StaticImageData;
  date: Date;
  rating: number;
  title: string;
  authorName: string;
  description: string;
}

export default function StandardCardBook(props: CardProps) {
  const { book, date, rating, title, authorName, description } = props;

  const [value, setValue] = useState<number | null>(2);

  return (
    <div className={styles.container}>
      <div>
        <Image src={book} alt={title} width={108} height={152} />
      </div>

      <div className={styles.cardContent}>
        <div>
          <div className={styles.ratingWrapper}>
            <p>Hoje</p>

            <Rating
              name="simple-controlled"
              classes={{
                iconFilled: styles.iconFilled,
                iconEmpty: styles.iconEmpty,
              }}
              value={rating}
              onChange={(event, newValue) => {
                setValue(newValue);
              }}
            />
          </div>

          <div className={styles.titleAndAuthor}>
            <h3>{title}</h3>

            <p>{authorName}</p>
          </div>
        </div>

        <div className={styles.description}>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
}
