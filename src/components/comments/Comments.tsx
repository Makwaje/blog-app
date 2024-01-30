"use client";

import Link from "next/link";
import styles from "./comments.module.css";
import Image from "next/image";
import useSWR from "swr";

const authenticated = false;
function Comments() {
  const { data, isLoading } = useSWR("");
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Comments</h2>

      {authenticated ? (
        <div className={styles.write}>
          <textarea placeholder="write a comment" className={styles.input} />
          <button className={styles.button}>send</button>
        </div>
      ) : (
        <Link href="/login">Login to write a comment</Link>
      )}

      <div className={styles.comments}>
        <div className={styles.comment}>
          <div className={styles.user}>
            <Image
              src="/p1.jpeg"
              alt="profile"
              className={styles.avatar}
              width={50}
              height={50}
            />
            <div className={styles.userInfo}>
              <span className={styles.username}>Makwaje</span>
              <span className={styles.date}>12/5/2023</span>
            </div>
          </div>
          <p className={styles.desc}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Accusantium optio sed quaerat illo, fugit ab ratione. Voluptate
            voluptatum accusamus dolorem.
          </p>
        </div>
        <div className={styles.comment}>
          <div className={styles.user}>
            <Image
              src="/p1.jpeg"
              alt="profile"
              className={styles.avatar}
              width={50}
              height={50}
            />
            <div className={styles.userInfo}>
              <span className={styles.username}>Makwaje</span>
              <span className={styles.date}>12/5/2023</span>
            </div>
          </div>
          <p className={styles.desc}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Accusantium optio sed quaerat illo, fugit ab ratione. Voluptate
            voluptatum accusamus dolorem.
          </p>
        </div>
        <div className={styles.comment}>
          <div className={styles.user}>
            <Image
              src="/p1.jpeg"
              alt="profile"
              className={styles.avatar}
              width={50}
              height={50}
            />
            <div className={styles.userInfo}>
              <span className={styles.username}>Makwaje</span>
              <span className={styles.date}>12/5/2023</span>
            </div>
          </div>
          <p className={styles.desc}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Accusantium optio sed quaerat illo, fugit ab ratione. Voluptate
            voluptatum accusamus dolorem.
          </p>
        </div>
        <div className={styles.comment}>
          <div className={styles.user}>
            <Image
              src="/p1.jpeg"
              alt="profile"
              className={styles.avatar}
              width={50}
              height={50}
            />
            <div className={styles.userInfo}>
              <span className={styles.username}>Makwaje</span>
              <span className={styles.date}>12/5/2023</span>
            </div>
          </div>
          <p className={styles.desc}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Accusantium optio sed quaerat illo, fugit ab ratione. Voluptate
            voluptatum accusamus dolorem.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Comments;
