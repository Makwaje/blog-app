import Menu from "@/components/menu/Menu";
import styles from "./singlePage.module.css";
import Image from "next/image";
import Comments from "@/components/comments/Comments";
import { PostType } from "@/utils/types";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";

async function getData(slug: string) {
  const res = await fetch(`${process.env.BASE_URL}/api/posts/${slug}`, {
    cache: "no-cache",
  });

  if (!res.ok) throw new Error("Failed fetching post");

  return res.json();
}

async function SinglePage({ params }: { params: Params }) {
  const { slug } = params;
  console.log(slug);

  const { post } = (await getData(slug)) as { post: PostType };
  console.log(post);
  return (
    <main className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>{post?.title}</h1>
          <div className={styles.user}>
            <div className={styles.userImageContainer}>
              <Image
                src={post?.user.image}
                alt="post"
                fill
                className={styles.avatar}
              />
            </div>
            <div className={styles.userTextContainer}>
              <span className={styles.username}>{post?.user.name}</span>
              <span className={styles.date}>
                {post?.createdAt.substring(0, 10)}
              </span>
            </div>
          </div>
        </div>
        {post?.img && (
          <div className={styles.imageContainer}>
            <Image
              src={post?.img || ""}
              alt="post"
              fill
              className={styles.image}
            />
          </div>
        )}
      </div>
      <div className={styles.content}>
        <div className={styles.post}>
          <div
            className={styles.desc}
            dangerouslySetInnerHTML={{ __html: post?.desc }}
          />
          <div className={styles.comment}>
            <Comments postSlug={slug} />
          </div>
        </div>
        <Menu />
      </div>
    </main>
  );
}

export default SinglePage;
