import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCategory } from "../services/game";

const CategoryPage = () => {
  const { categoryName } = useParams();
  const [categoryData, setCategoryData] = useState(null);

  console.log("categoryData", categoryData);

  useEffect(() => {
    getCategory(categoryName).then((data) => setCategoryData(data));
  }, [categoryName]);

  return (
    <div>
      <h1>Category Page</h1>
      <p>{categoryName}</p>
    </div>
  );
};
export default CategoryPage;
