import { useState } from "react";
import { Rating } from "@mui/material";
import styles from "./styles.module.scss";
import Image, { StaticImageData } from "next/image";
import { useRouter } from "next/router";
import clsx from "clsx";

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

  const router = useRouter();

  const [value, setValue] = useState<number | null>(2);

  return (
    <div
      className={clsx(
        router.pathname !== "/profile"
          ? styles.container
          : styles.containerProfile
      )}
    >
      {router.pathname === "/profile" ? (
        <div className={styles.profilePageWrapper}>
          <div className={styles.bookInfos}>
            <Image src={book} alt={title} width={98} height={134} />

            <div className={styles.titleAndRating}>
              <div className={styles.titleAndAuthor}>
                <h2>{title}</h2>

                <p>{authorName}</p>
              </div>

              <Rating
                name="simple-controlled"
                classes={{
                  iconFilled: styles.iconFilled,
                  iconEmpty: styles.iconEmpty,
                  disabled: styles.disabled,
                }}
                value={rating}
                onChange={(event, newValue) => {
                  setValue(newValue);
                }}
                disabled
              />
            </div>
          </div>

          <p className={styles.description}>{description}</p>
        </div>
      ) : (
        <>
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
        </>
      )}
    </div>
  );
}
