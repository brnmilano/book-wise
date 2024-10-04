import clsx from "clsx";
import styles from "./styles.module.scss";
import { categories } from "@/prisma/constants/categories";
import { useState } from "react";

/**
 * @description Componente de tags para filtrar livros por categoria.
 *
 * Armazena o estado da tag selecionada de forma que ele é identificado
 * individualmente para cada tag. Quando uma tag é clicada, o estado é
 * atualizado com o índice da tag clicada. Isso permite que a tag clicada
 * seja estilizada de forma diferente das demais.
 *
 * Estado selectedTagIndex quando igual ao index da tag clicada, a classe
 * styles.selected é adicionada ao elemento, estilizando a tag clicada.
 *
 * @returns
 */
export default function Tags() {
  const [selectedTagIndex, setSelectedTagIndex] = useState<number | null>(null);

  return (
    <div className={styles.container}>
      <div className={styles.tagsWrapper}>
        {categories.map((tag, index) => (
          <p
            key={index}
            className={clsx(
              styles.tag,
              selectedTagIndex === index ? styles.selected : ""
            )}
            onClick={() => setSelectedTagIndex(index)}
          >
            {tag.name}
          </p>
        ))}
      </div>
    </div>
  );
}
