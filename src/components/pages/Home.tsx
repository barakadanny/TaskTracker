import React from "react";
import Layout from "../layouts/Layout";

const Home = () => {
  return (
    <Layout>
      <div className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-900 text-black dark:text-white">
        <div className="text-3xl font-bold underline">Hello world</div>
      </div>
    </Layout>
  );
};

export default Home;
