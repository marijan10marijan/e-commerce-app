import React from "react";
import menSea from "../assets/menSea.jpg";
import AllProducts from "../components/AllProducts/AllProducts";
import { useParams } from "react-router-dom";
import { useState } from "react";
import useFetch from "../components/hooks/useFetch";

const Products = () => {
  const catId = useParams().id;
  const [sort, setSort] = useState("asc");
  const [selectedSubCat, setSelectedSubCat] = useState([]);

  const { data, loading, error } = useFetch(
    `/sub-categories?[filters][categories][id][$eq]=${catId}`
  );

  const handleChange = (e) => {
    const value = e.target.value;
    const isChecked = e.target.checked;

    setSelectedSubCat(
      isChecked
        ? [...selectedSubCat, value]
        : selectedSubCat.filter((item) => item !== value)
    );
  };

  return (
    <div className="max-w-7xl mx-auto px-6  flex flex-col sm:flex-row gap-12 pt-12">
      <div className="w-full sm:w-1/4 sm:sticky sm:h-screen top-10 ">
        <div className="flex flex-col gap-6">
          <div>
            <h2 className="mb-4">Product Categories</h2>
            {data?.map((category) => (
              <div
                key={category.id}
                className="flex gap-2 items-center relative"
              >
                <input
                  type="checkbox"
                  id={category.id}
                  value={category.id}
                  className="accent-blue-500"
                  onChange={handleChange}
                />
                <label htmlFor={category.id}>
                  {category?.attributes?.title}
                </label>
              </div>
            ))}
          </div>
          <div>
            <h2 className="mb-2">Sort by</h2>
            <div className="flex items-center gap-2">
              <input
                type="radio"
                name="lowest"
                id="lowest"
                value={"asc"}
                onChange={() => setSort("asc")}
                className="accent-blue-500"
              />
              <label htmlFor="lowest">Price(Lowest first)</label>
            </div>
            <div className="flex items-center gap-2">
              <input
                type="radio"
                name="highest"
                id="highest"
                value={"desc"}
                onChange={() => setSort("desc")}
                className="accent-blue-500"
              />
              <label htmlFor="highest">Price(Highest first)</label>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full sm:w-3/4">
        <div className="h-[280px] ">
          <img
            src={menSea}
            alt=""
            className="w-full h-full object-cover object-top"
          />
        </div>
        <AllProducts catId={catId} sort={sort} subCat={selectedSubCat} />
      </div>
    </div>
  );
};

export default Products;
