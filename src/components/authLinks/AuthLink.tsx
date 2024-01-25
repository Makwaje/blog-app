"use client";
import Link from "next/link";
import styles from "./authLink.module.css";
import { useState } from "react";

const authenticated = true;

function AuthLink() {
  // temporary
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {!authenticated ? (
        <Link href="/login" className={styles.link}>
          Login
        </Link>
      ) : (
        <>
          <Link className={styles.link} href="/write">
            Write
          </Link>
          <span className={styles.link}>logout</span>
        </>
      )}
      <div className={styles.burger} onClick={() => setIsOpen((open) => !open)}>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
      </div>
      {isOpen && (
        <div className={styles.responsiveMenu}>
          <Link href="/">Homepage</Link>
          <Link href="/">About</Link>
          <Link href="/">Contact</Link>
          {authenticated ? (
            <Link href="/login">Login</Link>
          ) : (
            <>
              <Link href="/write">Write</Link>
              <span className={styles.link}>logout</span>
            </>
          )}
        </div>
      )}
    </>
  );
}

export default AuthLink;
