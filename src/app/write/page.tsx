"use client";
import Image from "next/image";
import styles from "./writePage.module.css";
import { useState } from "react";

import ReactQuill from "react-quill";
import "react-quill/dist/quill.bubble.css";

function page() {
  const [isOpen, setIsOpen] = useState(false);
  const [value, setValue] = useState("");

  return (
    <main className={styles.container}>
      <input type="text" placeholder="Title" className={styles.input} />

      <div className={styles.editor}>
        <button
          className={styles.button}
          onClick={() => setIsOpen((open) => !open)}
        >
          <Image src="/plus.png" width={16} height={16} alt="add icon" />
        </button>
        {isOpen && (
          <div className={styles.add}>
            <button className={styles.addButton}>
              <Image src="/plus.png" width={16} height={16} alt="add icon" />
            </button>

            <button className={styles.addButton}>
              <Image src="/plus.png" width={16} height={16} alt="add icon" />
            </button>

            <button className={styles.addButton}>
              <Image src="/plus.png" width={16} height={16} alt="add icon" />
            </button>
          </div>
        )}
        <ReactQuill
          className={styles.textArea}
          theme="bubble"
          value={value}
          onChange={setValue}
          placeholder="Tell your story..."
        />
      </div>
      <button className={styles.publish}>Publish</button>
    </main>
  );
}

export default page;
