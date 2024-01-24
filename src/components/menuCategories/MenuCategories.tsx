import Link from "next/link";
import styles from "./menuCategories.module.css";
function MenuCategories() {
  return (
    <div className={styles.categoryList}>
      <Link
        href="/blog/cat="
        className={`${styles.categoryItem} ${styles.style}`}
      >
        style
      </Link>
      <Link
        href="/blog/cat="
        className={`${styles.categoryItem} ${styles.fashion}`}
      >
        fashion
      </Link>
      <Link
        href="/blog/cat="
        className={`${styles.categoryItem} ${styles.food}`}
      >
        food
      </Link>
      <Link
        href="/blog/cat="
        className={`${styles.categoryItem} ${styles.travel}`}
      >
        travel
      </Link>
      <Link
        href="/blog/cat="
        className={`${styles.categoryItem} ${styles.culture}`}
      >
        culture
      </Link>
      <Link
        href="/blog/cat="
        className={`${styles.categoryItem} ${styles.coding}`}
      >
        coding
      </Link>
    </div>
  );
}

export default MenuCategories;