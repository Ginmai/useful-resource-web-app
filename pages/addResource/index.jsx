import React, { useState } from "react";
import axios from "axios";
import cookie from "js-cookie";
import styles from "./styles.module.css";
import Header from "../../components/Header/Header";

const addResource = () => {
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();
  const [category, setCategory] = useState();
  const [contentLink, setContentLink] = useState();

  const [erorMessege, setErorMessage] = useState();

  const addResource = async () => {
    if (!title || !description || !category || !contentLink) {
      setErorMessage("Please fill all the inputs");
      return;
    }

    const headers = {
      authorization: cookie.get("jwt_token"),
    };

    const resource = {
      title: title,
      description: description,
      category: category,
      content_link: contentLink,
    };
    try {
      const response = await axios.post(
        "http://localhost:3001/resources",
        resource,
        {
          headers: headers,
        }
      );
      console.log(response);
    } catch (err) {
      setErorMessage("Something went wrong");
      console.log(err);
    }
  };

  return (
    <div>
      <Header />
      <div className={styles.form}>
        <input
          placeholder="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          placeholder="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <input
          placeholder="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
        <input
          placeholder="content link"
          value={contentLink}
          onChange={(e) => setContentLink(e.target.value)}
        />

        <button onClick={addResource}>Add resource</button>
        <h2>{erorMessege}</h2>
      </div>
    </div>
  );
};
export default addResource;
