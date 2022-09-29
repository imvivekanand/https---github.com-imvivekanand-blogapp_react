import React from "react";
import { useParams } from "react-router-dom";

const Article = ({ match }) => {
  const name = useParams();

  return (
    <div className="mb-20">
      <h1 className="sm:text-4xl text-2xl font-bold mt-6 to-gray-900">
        This is {name.name} Article
      </h1>
    </div>
  );
};

export default Article;
