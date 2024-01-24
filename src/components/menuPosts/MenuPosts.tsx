import Link from "next/link";
import styles from "./menuPosts.module.css";
import Image from "next/image";

function MenuPosts({ withImage }: { withImage?: boolean }) {
  return (
    <div className={styles.items}>
      <Link href="/" className={styles.item}>
        {withImage && (
          <div className={styles.imageContainer}>
            <Image
              src="/p1.jpeg"
              alt="post image"
              fill
              className={styles.image}
            />
          </div>
        )}
        <div className={styles.textContainer}>
          <span className={`${styles.category} ${styles.travel}`}>Travel</span>
          <h3 className={styles.postTitle}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          </h3>
          <div className={styles.details}>
            <span className={styles.username}>Mohamed Bakri</span>
            <span className={styles.date}> - 14/2/2024</span>
          </div>
        </div>
      </Link>

      <Link href="/" className={styles.item}>
        {withImage && (
          <div className={styles.imageContainer}>
            <Image
              src="/p1.jpeg"
              alt="post image"
              fill
              className={styles.image}
            />
          </div>
        )}
        <div className={styles.textContainer}>
          <span className={`${styles.category} ${styles.culture}`}>
            culture
          </span>
          <h3 className={styles.postTitle}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          </h3>
          <div className={styles.details}>
            <span className={styles.username}>Mohamed Bakri</span>
            <span className={styles.date}> - 14/2/2024</span>
          </div>
        </div>
      </Link>

      <Link href="/" className={styles.item}>
        {withImage && (
          <div className={styles.imageContainer}>
            <Image
              src="/p1.jpeg"
              alt="post image"
              fill
              className={styles.image}
            />
          </div>
        )}
        <div className={styles.textContainer}>
          <span className={`${styles.category} ${styles.food}`}>food</span>
          <h3 className={styles.postTitle}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          </h3>
          <div className={styles.details}>
            <span className={styles.username}>Mohamed Bakri</span>
            <span className={styles.date}> - 14/2/2024</span>
          </div>
        </div>
      </Link>

      <Link href="/" className={styles.item}>
        {withImage && (
          <div className={styles.imageContainer}>
            <Image
              src="/p1.jpeg"
              alt="post image"
              fill
              className={styles.image}
            />
          </div>
        )}
        <div className={styles.textContainer}>
          <span className={`${styles.category} ${styles.fashion}`}>
            fashion
          </span>
          <h3 className={styles.postTitle}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          </h3>
          <div className={styles.details}>
            <span className={styles.username}>Mohamed Bakri</span>
            <span className={styles.date}> - 14/2/2024</span>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default MenuPosts;
