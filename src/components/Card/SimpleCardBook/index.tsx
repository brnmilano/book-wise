import { useState } from "react";
import { BookmarkSimple, BookOpen } from "@phosphor-icons/react";
import { Rating } from "@mui/material";
import styles from "./styles.module.scss";
import Drawer from "../../Drawer";
import Link from "next/link";
import EvaluationCard from "../EvaluationCard";

interface SimpleCardBookProps {
  id: string;
  bookImage: string;
  name: string;
  author: string;
  rating?: number;
  categories?: {
    name: string;
  };
}

export default function SimpleCardBook(props: SimpleCardBookProps) {
  const { bookImage, name, author, rating, categories } = props;

  console.log(categories);

  const [value, setValue] = useState<number | null>(2);
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);

  return (
    <>
      <Drawer
        anchor="right"
        open={isDrawerOpen}
        onClose={() => setIsDrawerOpen(!isDrawerOpen)}
        classes={{
          paper: styles.drawer,
        }}
      >
        <div className={styles.drawerContainer}>
          <div className={styles.bookWrapper}>
            <div className={styles.bookImageAndInfos}>
              <div className={styles.bookInfo}>
                <div className={styles.titleAndAuthor}>
                  <h2>{name}</h2>

                  <p>{author}</p>
                </div>

                <div className={styles.ratingWrapper}>
                  <Rating
                    name="simple-controlled"
                    classes={{
                      disabled: styles.disabled,
                      iconFilled: styles.iconFilled,
                      iconEmpty: styles.iconEmpty,
                    }}
                    value={3}
                    onChange={(event, newValue) => {
                      setValue(newValue);
                    }}
                    disabled
                  />

                  <p>3 avaliações</p>
                </div>
              </div>
            </div>

            <div className={styles.divider} />

            <div className={styles.readingStatus}>
              <div className={styles.readingItem}>
                <BookmarkSimple size={28} />

                <div>
                  <p>Categoria</p>

                  {/* {categories.map((category) => (
                    <h3 key={category.id}>{category.name}</h3>
                  ))} */}
                </div>
              </div>

              <div className={styles.readingItem}>
                <BookOpen size={28} />

                <div>
                  <p>Páginas</p>

                  <h3>160</h3>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.evaluationWrapper}>
            <p>Avaliações</p>

            <Link href="" className={styles.evaluationLink}>
              Avaliar
            </Link>
          </div>

          <EvaluationCard />
        </div>
      </Drawer>

      <div
        className={styles.container}
        onClick={() => setIsDrawerOpen(!isDrawerOpen)}
      >
        <div>
          <img src={bookImage} alt={name} width={64} height={94} />
        </div>

        <div className={styles.bookInfo}>
          <div className={styles.titleAndAuthor}>
            <h3>{name}</h3>

            <p>{author}</p>
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
    </>
  );
}
