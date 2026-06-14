import { useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./menu.css";
import { menuByCategory } from "./menuData";

function Tabs({ tabs, active, onChange }) {
  return (
    <div className="tabs">
      {tabs.map((t) => (
        <button
          key={t}
          className={`tabBtn ${active === t ? "active" : ""}`}
          onClick={() => onChange(t)}
          type="button"
        >
          {t}
        </button>
      ))}
    </div>
  );
}

function ItemCard({ item }) {
  return (
    <div className="menuCard">
      {item.image && (
        <img
          className="menuImage"
          src={item.image}
          alt={item.name}
        />
      )}

      <div className="menuInfo">
        <div className="menuRow">
          <h3 className="menuName">{item.name}</h3>
          <div className="menuPrice">${item.price.toFixed(2)}</div>
        </div>

        <p className="menuDesc">{item.description}</p>
      </div>
    </div>
  );
}
export default function CategoryPage() {
  const navigate = useNavigate();
  const { categoryKey } = useParams();

  const category = menuByCategory[categoryKey];
  const [activeTab, setActiveTab] = useState(category?.tabs?.[0] || "");

  const items = useMemo(() => {
    if (!category) return [];
    return category.items.filter((i) => i.tab === activeTab);
  }, [category, activeTab]);

  if (!category) {
    return (
      <div className="page darkPage">
        <button className="backBtn" onClick={() => navigate("/")} type="button">
          ← Back
        </button>
        <p className="emptyText">Category not found.</p>
      </div>
    );
  }

  return (
    <div className="page darkPage">
      <div className="topBar">
        <button className="backBtn" onClick={() => navigate("/")} type="button">
          ←
        </button>
        <h2 className="pageTitle">{category.title}</h2>
      </div>

      <Tabs tabs={category.tabs} active={activeTab} onChange={setActiveTab} />

      <div className="cards">
        {items.length === 0 ? (
          <p className="emptyText">No items in this section yet.</p>
        ) : (
          items.map((item, idx) => <ItemCard key={idx} item={item} />)
        )}
      </div>
    </div>
  );
}
