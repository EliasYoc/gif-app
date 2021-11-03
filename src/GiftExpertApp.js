import { useState } from "react";
import AddCategory from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

const GiftExpertApp = ({ categoris = [] }) => {
  const [categories, setCategories] = useState(categoris);
  return (
    <div>
      <h2>GifExpertApp</h2>
      <AddCategory setCategories={setCategories} />
      <ol>
        {categories.map((el) => (
          <GifGrid key={el} category={el} />
        ))}
      </ol>
      <hr />
    </div>
  );
};

export default GiftExpertApp;
