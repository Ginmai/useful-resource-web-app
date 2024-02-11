import { useEffect, useState } from "react";
import cookie from "js-cookie";
import { useRouter } from "next/router";
import axios from "axios";
import Card from "../components/Card/Card";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/footer";
import styles from "../styles/Home.module.css";
import Link from "next/link";

// type Resource = {
//   _id: string;
//   category: string;
//   content_link: string;
//   description: string;
//   title: string;
// };

const Home = () => {
  const router = useRouter();

  const [resources, setResources] = useState([]);

  const checkUserToken = () => {
    const token = cookie.get("jwt_token");

    if (!token) {
      router.push("/login");
    }
  };

  const fetchResources = async () => {
    const headers = {
      authorization: cookie.get("jwt_token"),
    };

    try {
      console.log(headers);
      const response = await axios.get("http://localhost:3001/resources", {
        headers: headers,
      });
      setResources(response.data.resources);
    } catch (err) {
      console.log(err);
      router.push("/login");
    }
  };

  useEffect(() => {
    checkUserToken();
    fetchResources();
  }, []);

  return (
    <>
      <Header />
      <Link href="/addResource">
        <h4 className={styles.addTutorial}>Add tutorial</h4>
      </Link>
      {resources.map((resource) => {
        return (
          <Card
            _id={resource._id}
            category={resource.category}
            content_link={resource.content_link}
            description={resource.description}
            title={resource.title}
          />
        );

        // <Card
        //   title={resource.title}
        //   description={resource.description}
        //   category={resource.category}
        //   content_link={resource.content_link}
        // />
      })}
      <Footer />
    </>
  );
};

export default Home;
