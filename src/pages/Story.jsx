import "./Story.css";
import { StoreData } from "../data/api.js";
import { useState } from "react";

function Story() {

  const [search, setSearch] = useState("");

  const filteredStores = StoreData.filter((store) =>
    store.city.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="store-page">

      <div className="city-section">

        <div className="city-search">
          <span>🔍</span>

          <input
            type="text"
            placeholder="Search city"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <h3>Popular Cities</h3>

        {StoreData.map((store) => (
          <p
            key={store.id}
            onClick={() => setSearch(store.city)}
            className="city-name"
          >
            {store.city}
          </p>
        ))}

      </div>


      <div className="store-section">

        <div className="store-header">

          <h1>
            {search
              ? `Crevio stores in ${search}`
              : "Crevio stores nearby"}
          </h1>

          <span>
            {filteredStores.length} Stores
          </span>

        </div>


        <div className="store-grid">

          {filteredStores.map((store) => (

            <div className="store-card" key={store.id}>

              <div className="store-top">

                <img
                  src={store.image}
                  alt="Crevio Logo"
                />

                <div className="store-title">

                  <h2>{store.name}</h2>

                  <p className="address">
                    {store.address}
                  </p>

                </div>

              </div>


              <div className="store-info">

                <p>
                  📞 {store.phone}
                </p>

                <p>
                  🕐 {store.timing}
                </p>

                <p
                  className={
                    store.status === "Open"
                      ? "open"
                      : "closed"
                  }
                >
                  ● {store.status}
                </p>

              </div>


              <div className="store-buttons">

                <a
                  href={`tel:${store.phone}`}
                  className="call-btn"
                >
                  📞 Call
                </a>

                <button className="menu-btn">
                  ☰ View Menu
                </button>

                <button className="order-btn">
                  🛒 Order Now
                </button>

              </div>

            </div>

          ))}

        </div>


        {filteredStores.length === 0 && (

          <div className="no-store">
            <h2>😕 Store not found</h2>

            <p>
              We couldn't find a Crevio store in "{search}"
            </p>
          </div>

        )}

      </div>

    </div>
  );
}

export default Story;