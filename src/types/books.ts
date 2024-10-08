import { CategoryProps } from "./categories";

export type BookProps = {
  id: string;
  name: string;
  author: string;
  summary: string;
  cover_url: string;
  total_pages: number;
  categories: CategoryProps[];
};
