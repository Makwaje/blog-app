import styles from "./login.module.css";
function LoginPage() {
  return (
    <main className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.socialButton}>Sign in with Google</div>
        <div className={styles.socialButton}>Sign in with Github</div>
        <div className={styles.socialButton}>Sign in with Facebook</div>
      </div>
    </main>
  );
}

export default LoginPage;
