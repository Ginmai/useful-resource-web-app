import React, { useEffect } from "react";
import { useRouter } from "next/router";
import axios from "axios";

const Resource = () => {
  const router = useRouter();

  const fetchResource = async () => {
    const response = await axios.get("http://localhost:3001/resources/:id");

    console.log(router.query.id);
  };

  useEffect(() => {
    router.query.id && fetchResource();
  }, [router.query.id]);

  return <div>Resource</div>;
};
export default Resource;
