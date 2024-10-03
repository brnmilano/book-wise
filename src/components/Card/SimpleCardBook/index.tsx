import Image, { StaticImageData } from "next/image";
import styles from "./styles.module.scss";
import { Rating } from "@mui/material";
import { useState } from "react";

interface SimpleCardBookProps {
  book: StaticImageData;
  title: string;
  authorName: string;
  rating: number;
}

export default function SimpleCardBook(props: SimpleCardBookProps) {
  const { book, title, authorName, rating } = props;

  const [value, setValue] = useState<number | null>(2);

  return (
    <div className={styles.container}>
      <div>
        <Image src={book} alt={title} width={64} height={94} />
      </div>

      <div className={styles.bookInfo}>
        <div className={styles.titleAndAuthor}>
          <h3>{title}</h3>

          <p>{authorName}</p>
        </div>

        <Rating
          name="simple-controlled"
          classes={{
            disabled: styles.disabled,
            iconFilled: styles.iconFilled,
            iconEmpty: styles.iconEmpty,
          }}
          value={rating}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
          disabled
        />
      </div>
    </div>
  );
}
