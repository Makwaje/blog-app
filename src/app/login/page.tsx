"use client";
import { signIn, useSession } from "next-auth/react";
import styles from "./login.module.css";
import { useRouter } from "next/navigation";

function LoginPage() {
  const { data, status } = useSession();

  console.log("data: ", data, "status: ", status);

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
        <div className={styles.socialButton}>Sign in with Google</div>
        <div className={styles.socialButton} onClick={() => signIn("github")}>
          Sign in with Github
        </div>
        <div className={styles.socialButton}>Sign in with Facebook</div>
      </div>
    </main>
  );
}

export default LoginPage;
