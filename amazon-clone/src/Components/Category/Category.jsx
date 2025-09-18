


import React from "react";
import { categoryInfos } from "./CategoryFullInfos";
import CtaegoryCard from "./CategoryCard";
import classes from "./Category.module.css";

function Category() {
  return (
    <section className={classes.category_container}>
      {categoryInfos.map((infos, index) => (
        <CtaegoryCard key={index} data={infos} />
      ))}
    </section>
  );
}

export default Category;