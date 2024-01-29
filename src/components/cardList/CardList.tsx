import Pagination from "../pagination/Pagination";
import styles from "./cardList.module.css";
import Card from "../card/Card";
import type { PostType } from "@/utils/types";

async function getData(page: Number, cat: string) {
  const res = await fetch(
    `http://localhost:3000/api/posts?page=${page}&cat=${cat || ""}`,
    {
      cache: "no-cache",
    },
  );

  if (!res.ok) throw new Error("Failed fetching categories data");

  return res.json();
}

type CardListType = {
  page: number;
  cat?: string;
};

async function CardList({ page, cat }: CardListType) {
  const { posts, count } = await getData(page, cat);

  const POST_PER_PAGE = 2;

  const hasPrev = POST_PER_PAGE * (page - 1) > 0;
  const hasNext = POST_PER_PAGE * (page - 1) + POST_PER_PAGE < count;

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Recent posts</h1>
      <div className={styles.posts}>
        {posts?.map?.((post: PostType) => {
          return <Card post={post} key={post.id} />;
        })}
      </div>
      <Pagination page={page} hasNext={hasNext} hasPrev={hasPrev} />
    </div>
  );
}

export default CardList;
