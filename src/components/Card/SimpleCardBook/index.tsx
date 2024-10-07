import { useState } from "react";
import Image, { StaticImageData } from "next/image";
import { Rating } from "@mui/material";
import styles from "./styles.module.scss";
import Drawer from "../../Drawer";
import FakeImage from "../../../../public/images/14-habitos-de-desenvolvedores-altamente-produtivos.png";
import { BookmarkSimple, BookOpen } from "@phosphor-icons/react";
import Link from "next/link";

interface SimpleCardBookProps {
  id: number;
  book: StaticImageData;
  title: string;
  authorName: string;
  rating: number;
}

export default function SimpleCardBook(props: SimpleCardBookProps) {
  const { id, book, title, authorName, rating } = props;

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
              <Image src={FakeImage} alt="" width={171} height={242} />

              <div className={styles.bookInfo}>
                <div className={styles.titleAndAuthor}>
                  <h2>14 Hábitos de Desenvolvedores Altamente Produtivos</h2>

                  <p>Zeno Rocha</p>
                </div>

                <div className={styles.ratingWrapper}>
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

                  <h3>Computação, educação</h3>
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

            <Link href="" className={styles.seeAll}>
              Avaliar
            </Link>
          </div>
        </div>
      </Drawer>

      <div
        className={styles.container}
        onClick={() => setIsDrawerOpen(!isDrawerOpen)}
      >
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
    </>
  );
}
