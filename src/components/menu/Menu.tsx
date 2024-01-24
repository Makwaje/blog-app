import Link from "next/link";
import styles from "./menu.module.css";
import Image from "next/image";
import MenuPosts from "../menuPosts/MenuPosts";
import MenuCategories from "../menuCategories/MenuCategories";

function Menu() {
  return (
    <div className={styles.container}>
      <h2 className={styles.subtitle}>What&apos;s hot</h2>
      <h2 className={styles.title}>Most Popular</h2>

      <MenuPosts />

      {/*  */}

      <h2 className={styles.subtitle}>Discover by topic</h2>
      <h2 className={styles.title}>Categories</h2>

      <MenuCategories />

      {/*  */}

      <h2 className={styles.subtitle}>Chosen by the editors</h2>
      <h2 className={styles.title}>Editors pick</h2>

      <MenuPosts withImage />
    </div>
  );
}

export default Menu;
