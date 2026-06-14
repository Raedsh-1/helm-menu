import { useNavigate } from "react-router-dom";
import "./menu.css";

const categories = [
  {
    title: "Starters / Appetizers",
    key: "starters",
    image: "/images/starters.jpg",
  },
  {
    title: "Saj",
    key: "saj",
    image: "/images/saj-category.jpeg",
  },
  {
    title: "International Cuisine",
    key: "international",
    image: "/images/international.jpg",
  },
  {
    title: "Coffee Menu",
    key: "coffee",
    image: "/images/coffee.jpg",
  },
  {
    title: "Cocktails & Beverages",
    key: "beverages",
    image: "/images/beverages.jpg",
  },
  {
    title: "Desserts",
    key: "desserts",
    image: "/images/desserts.jpg",
  },
  {
    title: "Shisha",
    key: "shisha",
    image: "/images/shisha.jpg",
  },
];

function CategoryCard({ title, image, onClick }) {
  return (
    <button className="categoryCard" onClick={onClick} type="button">
      <div className="categoryBg" style={{ backgroundImage: `url(${image})` }} />
      <div className="categoryOverlay" />
      <h2 className="categoryTitle">{title}</h2>
    </button>
  );
}

export default function MenuHome() {
  const navigate = useNavigate();

  return (
    <div className="homeContainer">
      <header className="homeHeader">
  <img
    src="/images/Logo2.jpg"
    alt="Helm Experience Logo"
    className="logo"
  />
  
</header>


      <div className="categoryList">
        {categories.map((c) => (
          <CategoryCard
            key={c.key}
            title={c.title}
            image={c.image}
            onClick={() => navigate(`/menu/${c.key}`)}
          />
        ))}
      </div>
    </div>
  );
}
