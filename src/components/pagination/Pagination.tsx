"use client";

import { useRouter } from "next/navigation";
import styles from "./pagination.module.css";

type Pagination = {
  page: number;
  hasPrev: boolean;
  hasNext: boolean;
};

function Pagination({ page, hasPrev, hasNext }: Pagination) {
  const router = useRouter();

  return (
    <div className={styles.container}>
      <button
        className={styles.button}
        onClick={() => router.push(`?page=${page - 1}`)}
        disabled={!hasPrev}
      >
        Previous
      </button>
      <button
        className={styles.button}
        onClick={() => router.push(`?page=${page + 1}`)}
        disabled={!hasNext}
      >
        Next
      </button>
    </div>
  );
}

export default Pagination;
