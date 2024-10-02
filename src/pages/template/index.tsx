import { ReactNode } from "react";
import styles from "./styles.module.scss";
import SideBar from "@/src/components/SideBar";

export default function Template({ children }: { children: ReactNode }) {
  return (
    <div className={styles.container}>
      <SideBar />
      <main>{children}</main>
    </div>
  );
}
