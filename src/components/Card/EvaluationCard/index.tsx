import Image from "next/image";
import styles from "./styles.module.scss";
import { useSession } from "next-auth/react";
import AlternativeImage from "../../../../public/picture.png";
import { Rating } from "@mui/material";
import { useEffect, useState } from "react";
import { api } from "@/src/lib/axios";

export default function EvaluationCard() {
  const session = useSession();

  const [value, setValue] = useState<number | null>(2);

  const fakeData = [
    {
      id: 1,
      name: "João",
      image: session.data?.user?.image,
      rating: 5,
      description:
        "Nec tempor nunc in egestas. Euismod nisi eleifend at et in sagittis. Penatibus id vestibulum imperdiet a at imperdiet lectus leo. Sit porta eget nec vitae sit vulputate eget",
    },
    {
      id: 2,
      name: "Maria",
      image: session.data?.user?.image,
      rating: 4,
      description:
        "Nec tempor nunc in egestas. Euismod nisi eleifend at et in sagittis. Penatibus id vestibulum imperdiet a at imperdiet lectus leo. Sit porta eget nec vitae sit vulputate eget",
    },
  ];

  const onLoadScreen = async () => {
    const ratings = await api.get("/ratings");

    console.log(ratings);
  };

  useEffect(() => {
    onLoadScreen();
  }, []);

  return (
    <>
      {fakeData.map((item, index) => (
        <div key={index} className={styles.container}>
          <div className={styles.imageAndName}>
            <div className={styles.userImageWrapper}>
              <Image
                src={item.image || ""}
                alt="teste"
                width={40}
                height={40}
              />
            </div>

            <div className={styles.userNameWrapper}>
              <h3>{item.name}</h3>

              <p>Há 2 dias</p>
            </div>

            <div className={styles.ratingWrapper}>
              <Rating
                name="simple-controlled"
                classes={{
                  disabled: styles.disabled,
                  iconFilled: styles.iconFilled,
                  iconEmpty: styles.iconEmpty,
                }}
                value={item.rating}
                onChange={(event, newValue) => {
                  setValue(newValue);
                }}
                disabled
              />
            </div>
          </div>

          <div className={styles.descriptionWrapper}>
            <p>{item.description}</p>
          </div>
        </div>
      ))}
    </>
  );
}
