import React from "react";
import Thumbnail from "./Thumbnail";
import FlipMove from "react-flip-move";
const Results = ({ results }) => {
  return (
    <div className="px-5 py-10 sm:grid md:grid-cols-2 lg:grid-cols-3 3xl:flex flex-wrap justify-center">
      {results.map((item, i) => {
        return <Thumbnail result={item} key={i} />;
      })}
    </div>
  );
};

export default Results;
