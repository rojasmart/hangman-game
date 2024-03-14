import { useParams } from "react-router-dom";

const CategoryPage = () => {
  const { categoryName } = useParams();
  return (
    <div>
      <h1>Category Page</h1>
      <p>{categoryName}</p>
    </div>
  );
};
export default CategoryPage;
