import Image from "next/image";
import styles from "./card.module.css";
import Link from "next/link";
import { PostType } from "@/utils/types";

function Card({ post }: { post: PostType }) {
  return (
    <div className={styles.container}>
      {post.img && (
        <div className={styles.imageContainer}>
          <Image
            src={post.img}
            alt="post picture"
            fill
            className={styles.img}
          />
        </div>
      )}
      <div className={styles.textContainer}>
        <div className={styles.detail}>
          <span className={styles.date}>
            {post.createdAt.substring(0, 10)} -
          </span>
          <span className={styles.category}> {post.catSlug}</span>
        </div>
        <Link href={`/posts/${post.slug}`}>
          <h2>{post.title.substring(0, 60)}</h2>
        </Link>
        <p
          className={styles.description}
          dangerouslySetInnerHTML={{ __html: post.desc.substring(0, 250) }}
        />
        <Link className={styles.link} href={`/posts/${post.slug}`}>
          Read More
        </Link>
      </div>
    </div>
  );
}

export default Card;
