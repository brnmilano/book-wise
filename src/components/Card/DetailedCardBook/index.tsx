import { Rating } from "@mui/material";
import styles from "./styles.module.scss";
import Image, { StaticImageData } from "next/image";
import { useState } from "react";
import { useSession } from "next-auth/react";

interface DetailedCardBookProps {
  book: StaticImageData;
  date: Date;
  rating: number;
  title: string;
  authorName: string;
  description: string;
}

export default function DetailedCardBook(props: DetailedCardBookProps) {
  const { book, date, rating, title, authorName, description } = props;

  const session = useSession();

  const [value, setValue] = useState<number | null>(2);
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  let limitNumber = 200;

  const descriptionTextLimit = (descriptionText: string, limit: number) => {
    if (descriptionText.length > limit) {
      return (
        <>
          {descriptionText.substring(0, limit)}

          {"..."}

          <span
            onClick={handleToggleDescription}
            className={styles.seeMoreOrLess}
          >
            {" ver mais"}
          </span>
        </>
      );
    }

    return descriptionText;
  };

  const handleToggleDescription = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className={styles.container}>
      <div className={styles.cardContent}>
        <div>
          <div className={styles.ratingWrapper}>
            <div className={styles.userInfo}>
              <div className={styles.userImageWrapper}>
                <Image
                  src={session.data?.user?.image || "logo-rocket.png"}
                  alt="teste"
                  width={32}
                  height={32}
                />
              </div>

              <div className={styles.nameAndDate}>
                <p>{session.data?.user?.name}</p>

                <span>Hoje</span>
              </div>
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

          <div style={{ display: "flex" }}>
            <Image src={book} alt={title} width={108} height={152} />

            <div className={styles.bookInfo}>
              <div className={styles.titleAndSubtitle}>
                <h3>{title}</h3>

                <p>{authorName}</p>
              </div>

              <div className={styles.descriptionWrapper}>
                <p className={styles.description}>
                  {isExpanded ? (
                    <>
                      {description}

                      <span
                        onClick={handleToggleDescription}
                        className={styles.seeMoreOrLess}
                      >
                        {" "}
                        ver menos
                      </span>
                    </>
                  ) : (
                    descriptionTextLimit(description, limitNumber)
                  )}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
