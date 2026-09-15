import "./Nav2.css";
import { MenuData } from "./data/api.js";
import { useState, useEffect } from "react";

function Nav2() {
    const [recipes, setRecipes] = useState([]);
    const [search, setSearch] = useState("");

    useEffect(() => {
        MenuData().then((data) => {
            setRecipes(data);
        });
    }, []);
    
const result = search.trim()
    ? recipes.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase())
      )
    : [];

    return (
        <>
            <div className="s-nav">
                <input
                    id="search-tast"
                    type="text"
                    placeholder="🔍 SEARCH TASTY HERE"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />

                <div className="logo-black">
                    
                </div>
            </div>

            <div className="box">
                <img src="/CREVIO CHEF.png" id="chef-banner" />
            </div>

            <div className="search-box">
                {result.map((item) => (
                    <div className="search-card" key={item.id}>
                        <img src={item.image} alt={item.name} />

                        <h3>{item.name}</h3>

                        <p>PRICE ₹{item.userId}</p>
                   <button
  id="order"
  onClick={() => window.location.href = "/order"}
>
  ORDER
</button>
                    
                    </div>
                ))}
            </div>
        </>
    );
}

export default Nav2;
