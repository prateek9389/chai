"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function OrdersPage() {
  const [activeTab, setActiveTab] = useState("subscriptions"); // "subscriptions" | "orders"

  const subscriptions = [
    {
      id: "sub-1",
      name: "Daily Aromatic Masala Chai",
      frequency: "Daily Morning Cycle",
      time: "7:00 AM - 9:00 AM",
      start: "2026-07-05",
      price: "₹119 / cup",
      status: "Active",
      image: "https://i.pinimg.com/736x/82/64/80/8264808f4840845e96abc7f7ec60b82f.jpg",
    },
    {
      id: "sub-2",
      name: "Weekend Royal Saffron Tea",
      frequency: "Weekend Relaxer Cycle",
      time: "5:30 PM - 7:30 PM",
      start: "2026-07-06",
      price: "₹224 / cup",
      status: "Active",
      image: "https://i.pinimg.com/736x/21/74/32/2174329b8ef1603c1cbc68bd9ef5865a.jpg",
    },
  ];

  const orders = [
    {
      id: "CHAI-ORD-982110",
      date: "2026-07-01",
      status: "Delivered",
      total: "₹214",
      item: "Cardamom (Elaichi) Chai x1 + rusks",
      image: "https://i.pinimg.com/1200x/5c/b8/8a/5cb88a02e013987379378009ba8d7eb2.jpg",
    },
    {
      id: "CHAI-ORD-839210",
      date: "2026-06-28",
      status: "Delivered",
      total: "₹199",
      item: "Tandoori Smoky Chai x1",
      image: "https://i.pinimg.com/736x/f4/bf/80/f4bf80502363c42324e7126f07b612ad.jpg",
    },
    {
      id: "CHAI-ORD-110294",
      date: "2026-06-22",
      status: "Delivered",
      total: "₹349",
      item: "Organic Matcha Latte Mix x1",
      image: "https://i.pinimg.com/1200x/5c/b8/8a/5cb88a02e013987379378009ba8d7eb2.jpg",
    },
  ];

  const handlePauseSub = (id) => {
    alert(`Subscription ${id} has been paused successfully.`);
  };

  return (
    <div style={{ background: "#fcfaf7", minHeight: "100vh", color: "#2c1b0d", overflowX: "hidden" }}>
      <Navbar />

      <div className="orders-container">
        
        {/* Banner */}
        <section className="orders-header-row">
          <h1>Track Your Brews</h1>
          <p>Manage your active recurring cycles or view past boutique tea collections.</p>
        </section>

        {/* Tab Controls */}
        <div className="tabs-wrapper">
          <button
            onClick={() => setActiveTab("subscriptions")}
            className={`tab-btn ${activeTab === "subscriptions" ? "active" : ""}`}
          >
            🔄 Active Subscriptions ({subscriptions.length})
          </button>
          <button
            onClick={() => setActiveTab("orders")}
            className={`tab-btn ${activeTab === "orders" ? "active" : ""}`}
          >
            📦 Order History ({orders.length})
          </button>
        </div>

        {/* Subscriptions Content */}
        {activeTab === "subscriptions" && (
          <div className="orders-list-grid">
            {subscriptions.map((sub) => (
              <div key={sub.id} className="order-item-card">
                <img src={sub.image} alt={sub.name} className="order-card-img" />
                <div style={{ flexGrow: 1 }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <span className="status-indicator active">{sub.status}</span>
                    <strong style={{ fontSize: "14.5px", color: "#8a583c" }}>{sub.price}</strong>
                  </div>
                  
                  <h3 className="card-title-name">{sub.name}</h3>
                  <div className="card-meta-list">
                    <p>📅 Start Date: <strong>{sub.start}</strong></p>
                    <p>🔁 Cycle: <strong>{sub.frequency}</strong></p>
                    <p>⏰ Slot: <strong>{sub.time}</strong></p>
                  </div>

                  <div className="card-action-row">
                    <button onClick={() => handlePauseSub(sub.id)} className="card-btn secondary">
                      Pause Delivery
                    </button>
                    <Link href={`/subscribe?productId=1`} className="card-btn primary">
                      Edit Blends
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Orders Content */}
        {activeTab === "orders" && (
          <div className="orders-list-grid">
            {orders.map((ord) => (
              <div key={ord.id} className="order-item-card">
                <img src={ord.image} alt={ord.id} className="order-card-img" />
                <div style={{ flexGrow: 1 }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <span className="status-indicator delivered">{ord.status}</span>
                    <strong style={{ fontSize: "14.5px", color: "#2c1b0d" }}>{ord.total}</strong>
                  </div>
                  
                  <h3 className="card-title-name">{ord.id}</h3>
                  <div className="card-meta-list">
                    <p>📅 Placed Date: <strong>{ord.date}</strong></p>
                    <p>🛍️ Blend Items: <strong>{ord.item}</strong></p>
                  </div>

                  <div className="card-action-row" style={{ marginTop: "20px" }}>
                    <Link href={`/orders/${ord.id}`} className="card-btn primary full-width-btn">
                      View Order Invoice & Tracking →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>

      <Footer />

      {/* Styled JSX */}
      <style>{`
        .orders-container {
          width: 100%;
          max-width: 1180px;
          margin: 0 auto;
          padding: 120px 20px 60px;
          box-sizing: border-box;
        }

        .orders-header-row {
          text-align: center;
          margin-bottom: 40px;
        }

        .orders-header-row h1 {
          font-size: clamp(26px, 4vw, 38px);
          font-weight: 900;
          color: #2c1b0d;
          margin-bottom: 8px;
        }

        .orders-header-row p {
          font-size: 14.5px;
          color: #666;
        }

        /* Tab options */
        .tabs-wrapper {
          display: flex;
          justify-content: center;
          gap: 16px;
          margin-bottom: 36px;
          border-bottom: 1px solid rgba(0,0,0,0.06);
          padding-bottom: 16px;
        }

        .tab-btn {
          background: #ffffff;
          border: 1.5px solid rgba(0,0,0,0.08);
          border-radius: 99px;
          padding: 12px 24px;
          font-size: 14px;
          font-weight: 700;
          color: #555;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .tab-btn.active {
          border-color: #2c1b0d;
          background: #2c1b0d;
          color: #ffffff;
        }

        /* Cards list grid */
        .orders-list-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 24px;
        }

        .order-item-card {
          background: #ffffff;
          border-radius: 20px;
          border: 1px solid rgba(0,0,0,0.04);
          padding: 24px;
          display: flex;
          gap: 20px;
          align-items: start;
          box-shadow: 0 4px 20px rgba(0,0,0,0.01);
        }

        .order-card-img {
          width: 90px;
          height: 90px;
          border-radius: 12px;
          object-fit: cover;
          flex-shrink: 0;
        }

        .status-indicator {
          font-size: 10px;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          padding: 2px 8px;
          border-radius: 4px;
        }

        .status-indicator.active {
          background: rgba(39, 174, 96, 0.1);
          color: #27ae60;
        }

        .status-indicator.delivered {
          background: rgba(44, 27, 13, 0.08);
          color: #2c1b0d;
        }

        .card-title-name {
          font-size: 17px;
          font-weight: 800;
          color: #2c1b0d;
          margin: 6px 0 10px;
        }

        .card-meta-list {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .card-meta-list p {
          font-size: 12.5px;
          color: #666;
          margin: 0;
        }

        .card-action-row {
          display: flex;
          gap: 10px;
          margin-top: 18px;
        }

        .card-btn {
          flex: 1;
          border: none;
          padding: 10px;
          border-radius: 8px;
          font-size: 12.5px;
          font-weight: 700;
          cursor: pointer;
          text-align: center;
          transition: background 0.2s;
          text-decoration: none;
        }

        .card-btn.primary {
          background: #8a583c;
          color: #ffffff;
        }

        .card-btn.primary:hover {
          background: #6f4228;
        }

        .card-btn.secondary {
          background: #fbf9f6;
          border: 1px solid rgba(0,0,0,0.1);
          color: #2c1b0d;
        }

        .full-width-btn {
          flex: none;
          width: 100%;
          display: block;
          box-sizing: border-box;
        }

        @media (max-width: 860px) {
          .orders-list-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
}
