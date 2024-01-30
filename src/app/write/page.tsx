"use client";

import styles from "./writePage.module.css";
import { useEffect, useState } from "react";

import { PlusCircle, ImagePlus, Upload, FileVideoIcon } from "lucide-react";

import "react-quill/dist/quill.bubble.css";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import { app } from "@/utils/firebase";
import dynamic from "next/dynamic";

const storage = getStorage(app);

export default function WritePage() {
  const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

  const [isOpen, setIsOpen] = useState(false);
  const [media, setMedia] = useState("");
  const [title, setTitle] = useState("");
  const [value, setValue] = useState("");
  const [cat, setCat] = useState("");
  const [file, setFile] = useState<File>();

  const { data, status } = useSession();
  const router = useRouter();

  useEffect(
    function () {
      function upload(file: File) {
        const name = new Date().getTime + file.name;
        const storageRef = ref(storage, file.name);

        const uploadTask = uploadBytesResumable(storageRef, file);

        uploadTask.on(
          "state_changed",
          (snapshot) => {
            const progress =
              (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            console.log("Upload is " + progress + "% done");
            switch (snapshot.state) {
              case "paused":
                console.log("Upload is paused");
                break;
              case "running":
                console.log("Upload is running");
                break;
            }
          },
          (error) => {},
          () => {
            getDownloadURL(uploadTask.snapshot.ref).then(
              (downloadURL): void => {
                console.log("File available at", downloadURL);
                setMedia(downloadURL);
              },
            );
          },
        );
      }
      file && upload(file);
    },

    [file],
  );

  function slugify(str: string) {
    return str
      .toLocaleLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, "")
      .replace(/[\s_-]+/g, "")
      .replace(/^-+|-+$/g, "");
  }

  async function handleSubmit() {
    const res = await fetch("/api/posts", {
      method: "POST",
      body: JSON.stringify({
        title,
        desc: value,
        img: media,
        slug: slugify(title),
        catSlug: "travel",
      }),
    });
    console.log(res);
  }

  if (status === "loading") {
    return <div className={styles.loading}>Loading...</div>;
  }

  if (status === "unauthenticated") {
    router.push("/");
  }

  return (
    <main className={styles.container}>
      <input
        type="text"
        placeholder="Title"
        className={styles.input}
        onChange={(e) => setTitle(e.target.value)}
        value={title}
      />

      <input
        type="text"
        placeholder="Category"
        onChange={(e) => setCat(e.target.value)}
        value={cat}
      />

      <div className={styles.editor}>
        <button
          className={styles.button}
          onClick={() => setIsOpen((open) => !open)}
        >
          <PlusCircle size={40} />
        </button>
        {isOpen && (
          <div className={styles.add}>
            <input
              type="file"
              id="image"
              onChange={(e) => setFile(e.target?.files?.[0])}
              style={{
                display: "none",
              }}
            />
            <button className={styles.addButton}>
              <label htmlFor="image" style={{ cursor: "pointer" }}>
                <ImagePlus />
              </label>
            </button>

            <button className={styles.addButton}>
              <Upload />
            </button>

            <button className={styles.addButton}>
              <FileVideoIcon />
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
      <button className={styles.publish} onClick={handleSubmit}>
        Publish
      </button>
    </main>
  );
}
