"use client";
import { signIn, useSession } from "next-auth/react";
import styles from "./login.module.css";
import { useRouter } from "next/navigation";

function LoginPage() {
  const { data, status } = useSession();

  const router = useRouter();

  if (status === "loading") {
    return <div className={styles.loading}>Loading...</div>;
  }

  if (status === "authenticated") {
    router.push("/");
  }

  return (
    <main className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.socialButton} style={{ cursor: "not-allowed" }}>
          Sign in with Google
        </div>
        <div className={styles.socialButton} onClick={() => signIn("github")}>
          Sign in with Github
        </div>
        <div className={styles.socialButton} onClick={() => signIn("twitter")}>
          Sign in with Twitter
        </div>
      </div>
    </main>
  );
}

export default LoginPage;
