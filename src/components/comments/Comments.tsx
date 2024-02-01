"use client";

import Link from "next/link";
import styles from "./comments.module.css";
import Image from "next/image";
import useSWR from "swr";
import { useSession } from "next-auth/react";
import { CommentType } from "@/utils/types";
import { useState } from "react";

async function fetcher(url: string) {
  const res = await fetch(url);

  const data = await res.json();

  if (!res.ok) throw new Error(data.message);

  return data;
}

function Comments({ postSlug }: { postSlug: string }) {
  const [desc, setDesc] = useState<string>("");
  const { status } = useSession();

  const { data, mutate, isLoading } = useSWR(
    `http://localhost:3000/api/comments?postSlug=${postSlug}`,
    fetcher,
  );

  async function handleSubmit() {
    await fetch("http://localhost:3000/api/comments", {
      method: "POST",
      body: JSON.stringify({ desc, postSlug }),
    });
    setDesc("");
    mutate();
  }
  console.log(data);
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Comments</h2>

      {status === "authenticated" ? (
        <div className={styles.write}>
          <textarea
            placeholder="write a comment"
            className={styles.input}
            onChange={(e) => setDesc(e.target.value)}
            value={desc}
          />
          <button className={styles.button} onClick={handleSubmit}>
            {isLoading ? "wait..." : "send"}
          </button>
        </div>
      ) : (
        <Link href="/login">Login to write a comment</Link>
      )}

      <div className={styles.comments}>
        {/*  */}
        {isLoading
          ? "Loading..."
          : data.comments.map((comment: CommentType) => {
              return (
                <div className={styles.comment} key={comment.id}>
                  <div className={styles.user}>
                    {comment?.user?.image && (
                      <Image
                        src={comment?.user?.image}
                        alt="profile"
                        className={styles.avatar}
                        width={50}
                        height={50}
                      />
                    )}
                    <div className={styles.userInfo}>
                      <span className={styles.username}>
                        {comment.user.name}
                      </span>
                      <span className={styles.date}>
                        {comment.createdAt.substring(0, 10)}
                      </span>
                    </div>
                  </div>
                  <p className={styles.desc}>{comment.desc}</p>
                </div>
              );
            })}
        {/*  */}
      </div>
    </div>
  );
}

export default Comments;
