"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ProductDetailPage({ params }) {
  const productId = parseInt(params.id) || 1;
  const router = useRouter();

  const teas = [
    {
      id: 1,
      name: "Classic Masala Chai",
      desc: "Black tea brewed with aromatic spices: ginger, cardamom, cinnamon, and cloves.",
      price: "₹149",
      priceNum: 149,
      color: "#8a583c",
      image: "https://i.pinimg.com/736x/82/64/80/8264808f4840845e96abc7f7ec60b82f.jpg",
      bullets: ["Strong robust Assam tea base", "Hand-crushed winter spices", "No artificial sweeteners"],
      gallery: [
        { type: "image", url: "https://i.pinimg.com/736x/82/64/80/8264808f4840845e96abc7f7ec60b82f.jpg" },
        { type: "video", url: "/tea-hover.mp4" },
        { type: "image", url: "https://i.pinimg.com/webp/1200x/3b/64/27/3b6427d4563c2b05d8b0dd54ec265c2c.webp" },
      ],
    },
    {
      id: 2,
      name: "Cardamom (Elaichi) Chai",
      desc: "Fragrant and refreshing tea infused with crushed green cardamom pods.",
      price: "₹169",
      priceNum: 169,
      color: "#a67c52",
      image: "https://i.pinimg.com/1200x/5c/b8/8a/5cb88a02e013987379378009ba8d7eb2.jpg",
      bullets: ["Authentic green cardamom pods", "Freshly packed CTC granules", "Rich creamy texture"],
      gallery: [
        { type: "image", url: "https://i.pinimg.com/1200x/5c/b8/8a/5cb88a02e013987379378009ba8d7eb2.jpg" },
        { type: "video", url: "/tea-hover.mp4" },
        { type: "image", url: "https://i.pinimg.com/webp/1200x/a2/54/ab/a254ab3176f62d952a39db1c7a2a6a2b.webp" },
      ],
    },
    {
      id: 3,
      name: "Ginger (Adrak) Chai",
      desc: "Invigorating tea brewed with fresh grated ginger root. Great for immunity.",
      price: "₹169",
      priceNum: 169,
      color: "#c49a6c",
      image: "https://i.pinimg.com/736x/95/d1/9a/95d19a7cad652dd1caceb091c9794ac9.jpg",
      bullets: ["Grated fresh farm ginger", "Perfect for winter season", "Fights cough and cold"],
      gallery: [
        { type: "image", url: "https://i.pinimg.com/736x/95/d1/9a/95d19a7cad652dd1caceb091c9794ac9.jpg" },
        { type: "video", url: "/tea-hover.mp4" },
        { type: "image", url: "https://i.pinimg.com/webp/1200x/3b/64/27/3b6427d4563c2b05d8b0dd54ec265c2c.webp" },
      ],
    },
    {
      id: 4,
      name: "Saffron (Kesar) Royal Chai",
      desc: "Premium black tea infused with luxury saffron strands and cardamom.",
      price: "₹249",
      priceNum: 249,
      color: "#e6ad12",
      image: "https://i.pinimg.com/736x/21/74/32/2174329b8ef1603c1cbc68bd9ef5865a.jpg",
      bullets: ["Luxury Kashmiri Kesar strands", "Slow cooked milk infusion", "Rich royal aromatic profile"],
      gallery: [
        { type: "image", url: "https://i.pinimg.com/736x/21/74/32/2174329b8ef1603c1cbc68bd9ef5865a.jpg" },
        { type: "video", url: "/tea-hover.mp4" },
        { type: "image", url: "https://i.pinimg.com/webp/1200x/a2/54/ab/a254ab3176f62d952a39db1c7a2a6a2b.webp" },
      ],
    },
    {
      id: 5,
      name: "Tandoori Smoky Chai",
      desc: "Clay pot baked tea giving it a unique, rich, earthy and smoky flavor profile.",
      price: "₹199",
      priceNum: 199,
      color: "#ab704d",
      image: "https://i.pinimg.com/736x/f4/bf/80/f4bf80502363c42324e7126f07b612ad.jpg",
      bullets: ["Tandoor heated kulhad bake", "Earthy mineral clay properties", "Bold malty smoky taste"],
      gallery: [
        { type: "image", url: "https://i.pinimg.com/736x/f4/bf/80/f4bf80502363c42324e7126f07b612ad.jpg" },
        { type: "video", url: "/tea-hover.mp4" },
        { type: "image", url: "https://i.pinimg.com/webp/1200x/3b/64/27/3b6427d4563c2b05d8b0dd54ec265c2c.webp" },
      ],
    },
    {
      id: 6,
      name: "Kashmiri Kahwa",
      desc: "Exquisite green tea brewed with saffron strands, cinnamon, and almond slivers.",
      price: "₹219",
      priceNum: 219,
      color: "#5c7a4d",
      image: "https://i.pinimg.com/736x/c4/a8/cc/c4a8ccde9a67e5f24e2be4d0621f4186.jpg",
      bullets: ["Whole leaf green tea", "Garnished with fresh almonds", "Deep golden saffron look"],
      gallery: [
        { type: "image", url: "https://i.pinimg.com/736x/c4/a8/cc/c4a8ccde9a67e5f24e2be4d0621f4186.jpg" },
        { type: "video", url: "/tea-hover.mp4" },
        { type: "image", url: "https://i.pinimg.com/webp/1200x/a2/54/ab/a254ab3176f62d952a39db1c7a2a6a2b.webp" },
      ],
    },
  ];

  const product = teas.find((t) => t.id === productId) || teas[0];

  // Active Gallery Media
  const [activeMediaIndex, setActiveMediaIndex] = useState(0);

  // Custom Ingredients selection with animation triggers
  const [customIngredients, setCustomIngredients] = useState([]);
  const [flyingIngredients, setFlyingIngredients] = useState([]);

  // Sugar and Milk Custom Selection Options
  const [sugarLevel, setSugarLevel] = useState("normal"); // "none" | "light" | "normal" | "extra"
  const [milkType, setMilkType] = useState("whole"); // "whole" | "oat" | "almond" | "black"

  const availableIngredients = [
    { name: "Adrak (Ginger)", icon: "🫚", color: "#e67e22" },
    { name: "Elaichi (Cardamom)", icon: "🟢", color: "#27ae60" },
    { name: "Dalchini (Cinnamon)", icon: "🪵", color: "#8a583c" },
    { name: "Kesar (Saffron)", icon: "🍂", color: "#f1c40f" },
    { name: "Tulsi Leaves", icon: "🍃", color: "#2ecc71" },
    { name: "Black Pepper", icon: "🌶️", color: "#e74c3c" },
  ];

  // Synth sound generator
  const playPopSound = () => {
    try {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (!AudioContext) return;
      const ctx = new AudioContext();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      
      osc.type = "sine";
      osc.frequency.setValueAtTime(350, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(1000, ctx.currentTime + 0.12);
      
      gain.gain.setValueAtTime(0.12, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.12);
      
      osc.connect(gain);
      gain.connect(ctx.destination);
      
      osc.start();
      osc.stop(ctx.currentTime + 0.12);
    } catch (e) {
      console.warn("AudioContext failed to trigger:", e);
    }
  };

  const handleToggleIngredient = (ing) => {
    const isAdded = customIngredients.some((i) => i.name === ing.name);
    
    // Play Pop Sound
    playPopSound();

    if (!isAdded) {
      // Trigger Added Animation
      const animationId = Date.now();
      setFlyingIngredients((prev) => [...prev, { ...ing, id: animationId }]);
      setTimeout(() => {
        setFlyingIngredients((prev) => prev.filter((i) => i.id !== animationId));
      }, 1000);
      setCustomIngredients((prev) => [...prev, ing]);
    } else {
      setCustomIngredients((prev) => prev.filter((i) => i.name !== ing.name));
    }
  };

  const handleNextMedia = () => {
    setActiveMediaIndex((prev) => (prev + 1) % product.gallery.length);
  };

  const handlePrevMedia = () => {
    setActiveMediaIndex((prev) => (prev - 1 + product.gallery.length) % product.gallery.length);
  };

  // Subscription Type selection
  const [purchaseType, setPurchaseType] = useState("one-time");

  // Quantity selection
  const [quantity, setQuantity] = useState(1);

  // Addons Modal State
  const [isAddonModalOpen, setIsAddonModalOpen] = useState(false);
  const [selectedAddons, setSelectedAddons] = useState([]);

  // Addon list items
  const addons = [
    {
      id: "a1",
      name: "Handmade Chai Biscuits",
      price: "₹59",
      image: "https://i.pinimg.com/webp/1200x/a2/54/ab/a254ab3176f62d952a39db1c7a2a6a2b.webp",
    },
    {
      id: "a2",
      name: "Butter Rusk Toasts",
      price: "₹79",
      image: "https://i.pinimg.com/webp/1200x/3b/64/27/3b6427d4563c2b05d8b0dd54ec265c2c.webp",
    },
    {
      id: "a3",
      name: "Classic Elaichi Rusk",
      price: "₹69",
      image: "https://i.pinimg.com/736x/95/d1/9a/95d19a7cad652dd1caceb091c9794ac9.jpg",
    },
    {
      id: "a4",
      name: "Almond Cookies",
      price: "₹89",
      image: "https://i.pinimg.com/736x/21/74/32/2174329b8ef1603c1cbc68bd9ef5865a.jpg",
    },
  ];

  // Actions
  const handlePurchase = () => {
    if (purchaseType === "subscription") {
      router.push(`/subscribe?productId=${product.id}`);
    } else {
      setIsAddonModalOpen(true);
    }
  };

  const toggleAddon = (addon) => {
    setSelectedAddons((prev) => {
      const exists = prev.find((a) => a.id === addon.id);
      if (exists) {
        return prev.filter((a) => a.id !== addon.id);
      }
      return [...prev, addon];
    });
  };

  const handleFinishCheckout = () => {
    const addonIds = selectedAddons.map((a) => a.id).join(",");
    router.push(`/checkout?productId=${product.id}&quantity=${quantity}&addons=${addonIds}&sugar=${sugarLevel}&milk=${milkType}`);
    setIsAddonModalOpen(false);
  };

  const crossSellTeas = teas.filter((t) => t.id !== productId);

  // FAQ state
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <div style={{ background: "#f5f5f7", minHeight: "100vh", color: "#2c1b0d", width: "100vw", overflowX: "hidden" }}>
      <Navbar />

      {/* Full Width product detail wrap */}
      <div className="product-page-container-full">
        {/* Breadcrumbs */}
        <div className="breadcrumbs">
          <Link href="/">Home</Link> &gt; <Link href="#our-blends">Teas</Link> &gt; <span className="active-crumb">{product.name}</span>
        </div>

        {/* Flat Nordic Layout Container for custom mobile ordering */}
        <div className="nordic-layout-container">
          
          {/* Column 2: Gallery (Center) - order: 1 on mobile */}
          <div className="nordic-gallery">
            <div className="nordic-main-media-wrapper">
              {/* Carousel Left Arrow */}
              <button className="carousel-nav-btn left-nav" onClick={handlePrevMedia}>
                ‹
              </button>

              {product.gallery[activeMediaIndex].type === "video" ? (
                <video
                  src={product.gallery[activeMediaIndex].url}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="nordic-main-media"
                />
              ) : (
                <img
                  src={product.gallery[activeMediaIndex].url}
                  alt={product.name}
                  className="nordic-main-media"
                />
              )}

              {/* Carousel Right Arrow */}
              <button className="carousel-nav-btn right-nav" onClick={handleNextMedia}>
                ›
              </button>

              {/* Bouncing flying ingredient animations inside the center image container */}
              {flyingIngredients.map((item) => (
                <div
                  key={item.id}
                  className="bouncing-ingredient-item"
                  style={{
                    backgroundColor: item.color,
                  }}
                >
                  <span style={{ fontSize: "20px" }}>{item.icon}</span>
                  <span style={{ fontSize: "12px", fontWeight: 800 }}>+{item.name}</span>
                </div>
              ))}
            </div>

            {/* Thumbnail selector */}
            <div className="nordic-thumbnails">
              {product.gallery.map((media, idx) => (
                <div
                  key={idx}
                  className={`nordic-thumbnail-card ${idx === activeMediaIndex ? "active" : ""}`}
                  onClick={() => setActiveMediaIndex(idx)}
                >
                  {media.type === "video" ? (
                    <video src={media.url} muted playsInline className="nordic-thumb-media" />
                  ) : (
                    <img src={media.url} alt="thumb" className="nordic-thumb-media" />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Column 1: Sidebar Ingredients Customizer (Left) - order: 2 on mobile */}
          <div className="sidebar-customizer">
            <h3 className="sidebar-heading">Brew Customizer</h3>
            <p className="sidebar-sub">Select organic spices to blend directly into your brewing kettle.</p>
            
            <div className="ingredients-vertical-list">
              {availableIngredients.map((ing) => {
                const isSelected = customIngredients.some((i) => i.name === ing.name);
                return (
                  <button
                    key={ing.name}
                    onClick={() => handleToggleIngredient(ing)}
                    className={`ingredient-vertical-btn ${isSelected ? "selected" : ""}`}
                  >
                    <span className="swatch-icon-circle" style={{ background: `${ing.color}15`, color: ing.color }}>
                      {ing.icon}
                    </span>
                    <div style={{ textAlign: "left", flexGrow: 1 }}>
                      <span className="swatch-title">{ing.name}</span>
                      <span className="swatch-status">{isSelected ? "Added to Kettle" : "Tap to Add"}</span>
                    </div>
                    <span className="swatch-checkbox">{isSelected ? "✓" : "+"}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Sugar & Milk Selection Container - order: 3 on mobile */}
          <div className="customizer-options-row">
            {/* Sugar selection */}
            <div style={{ flex: 1 }}>
              <h4 style={{ fontSize: "13px", fontWeight: 700, marginBottom: "8px", color: "#2c1b0d" }}>Sugar Level</h4>
              <div className="swatch-selection-row">
                {[
                  { value: "none", label: "No Sugar ❌" },
                  { value: "light", label: "Light 🍬" },
                  { value: "normal", label: "Normal 🍬🍬" },
                  { value: "extra", label: "Extra 🍬🍬" },
                ].map((s) => (
                  <button
                    key={s.value}
                    onClick={() => setSugarLevel(s.value)}
                    className={`swatch-select-item ${sugarLevel === s.value ? "selected" : ""}`}
                  >
                    {s.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Milk customizer */}
            <div style={{ flex: 1 }}>
              <h4 style={{ fontSize: "13px", fontWeight: 700, marginBottom: "8px", color: "#2c1b0d" }}>Milk Type</h4>
              <div className="swatch-selection-row">
                {[
                  { value: "whole", label: "Whole 🥛" },
                  { value: "oat", label: "Oat 🌾" },
                  { value: "almond", label: "Almond 🥜" },
                  { value: "black", label: "Black ☕️" },
                ].map((m) => (
                  <button
                    key={m.value}
                    onClick={() => setMilkType(m.value)}
                    className={`swatch-select-item ${milkType === m.value ? "selected" : ""}`}
                  >
                    {m.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Column 3: Details (Right) - order: 4 on mobile */}
          <div className="nordic-details">
            <div className="nordic-meta">
              <span className="nordic-reviews">184 Reviews</span>
              <span className="divider">|</span>
              <span className="nordic-rating">4.8 ★★★★★</span>
            </div>

            <h1 className="nordic-title">{product.name}</h1>
            <p className="nordic-desc">{product.desc}</p>

            <div className="nordic-price-box">
              <span className="current-price">{product.price}</span>
              <span className="original-price">₹299</span>
              <span className="sale-badge">SAVE 50%</span>
            </div>

            {/* Buying configuration options */}
            <div className="purchase-options" style={{ width: "100%", marginBottom: "20px" }}>
              <div
                className={`option-card ${purchaseType === "one-time" ? "selected" : ""}`}
                onClick={() => setPurchaseType("one-time")}
              >
                <div className="radio-dot" />
                <div style={{ flexGrow: 1 }}>
                  <h4 style={{ fontSize: "13.5px", fontWeight: 700, color: "#2c1b0d" }}>One-Time Purchase</h4>
                </div>
                <span style={{ fontWeight: 800, color: "#2c1b0d" }}>{product.price}</span>
              </div>

              <div
                className={`option-card ${purchaseType === "subscription" ? "selected" : ""}`}
                onClick={() => setPurchaseType("subscription")}
              >
                <div className="radio-dot" />
                <div style={{ flexGrow: 1 }}>
                  <h4 style={{ fontSize: "13.5px", fontWeight: 700, color: "#2c1b0d" }}>Subscribe &amp; Save</h4>
                </div>
                <span style={{ fontWeight: 800, color: "#5c7a4d" }}>₹299/mo</span>
              </div>
            </div>

            {/* Quantity Selector & Purchase buttons */}
            <div style={{ display: "flex", gap: "10px", width: "100%", flexWrap: "wrap" }}>
              <div className="qty-selector">
                <button onClick={() => setQuantity((q) => Math.max(1, q - 1))} className="qty-btn">-</button>
                <span className="qty-val">{quantity}</span>
                <button onClick={() => setQuantity((q) => q + 1)} className="qty-btn">+</button>
              </div>

              <button onClick={handlePurchase} className="nordic-btn-add" style={{ flexGrow: 1 }}>
                ADD TO CART
              </button>
              <button onClick={handlePurchase} className="nordic-btn-buy" style={{ flexGrow: 1 }}>
                BUY NOW
              </button>
            </div>

            {/* Trust Badges */}
            <div className="nordic-trust-row">
              <div className="trust-item">🔒 Secure Payments</div>
              <div className="trust-item">🚚 Free Shipping</div>
              <div className="trust-item">🍃 100% Organic</div>
              <div className="trust-item">☕️ Handcrafted Fresh</div>
            </div>

            {/* Bullet Points */}
            <ul className="nordic-bullets">
              {product.bullets.map((b, idx) => (
                <li key={idx}>{b}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* CUSTOMER REVIEWS GRID */}
        <section className="nordic-reviews-section">
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "30px" }}>
            <h2 style={{ fontSize: "20px", fontWeight: 800 }}>HEAR FROM OUR CUSTOMERS</h2>
            <span style={{ fontWeight: 700, fontSize: "15px", color: "#8a583c" }}>★ 4.8/5.0</span>
          </div>

          <div className="reviews-tab-grid">
            <div className="review-tab-card">
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "10px" }}>
                <strong>Sarah M. ★★★★★</strong>
                <span className="verified-badge">Verified</span>
              </div>
              <p className="quote-tab">"Incredibly rich and refreshing. Perfect cardamom aroma!"</p>
            </div>
            <div className="review-tab-card">
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "10px" }}>
                <strong>Mike R. ★★★★★</strong>
                <span className="verified-badge">Verified</span>
              </div>
              <p className="quote-tab">"Excellent taste, especially after adding fresh adrak and kesar!"</p>
            </div>
            <div className="review-tab-card">
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "10px" }}>
                <strong>Lena K. ★★★★★</strong>
                <span className="verified-badge">Verified</span>
              </div>
              <p className="quote-tab">"Perfect earthy tone. Absolutely loving the smoky clay cup finish."</p>
            </div>
            <div className="review-tab-card">
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "10px" }}>
                <strong>Aarav S. ★★★★★</strong>
                <span className="verified-badge">Verified</span>
              </div>
              <p className="quote-tab">"My daily morning partner. Hands down the best authentic masala chai online."</p>
            </div>
          </div>
        </section>

        {/* FAQ ACCORDIONS */}
        <section className="nordic-faq-section">
          <h2 style={{ fontSize: "20px", fontWeight: 800, marginBottom: "24px" }}>Frequently Asked Questions</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            {[
              { q: "Customization?", a: "You can click any ingredient in the left sidebar to dynamically add them to your tea." },
              { q: "Shipping Info?", a: "Standard free shipping takes 2-4 business days across India." },
              { q: "Storage & Care?", a: "Store in a cool dry place. Once opened, seal in airtight containers." },
            ].map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div key={idx} className="faq-accordion-card">
                  <button onClick={() => setOpenFaq(isOpen ? null : idx)} className="faq-acc-btn">
                    <span>{faq.q}</span>
                    <span>{isOpen ? "✕" : "＋"}</span>
                  </button>
                  {isOpen && <p className="faq-acc-ans">{faq.a}</p>}
                </div>
              );
            })}
          </div>
        </section>

        {/* YOU MIGHT ALSO LIKE CAROUSEL */}
        <section className="cross-sell-section" style={{ background: "#ffffff", borderRadius: "24px", marginTop: "40px" }}>
          <h2 className="cross-sell-heading">YOU MIGHT ALSO LIKE</h2>
          <div className="cross-sell-carousel">
            {crossSellTeas.slice(0, 5).map((tea) => (
              <Link href={`/product/${tea.id}`} key={tea.id} style={{ textDecoration: "none" }}>
                <div className="cross-sell-card">
                  <div className="cross-sell-img-container">
                    <img src={tea.image} alt={tea.name} className="cross-sell-img" />
                  </div>
                  <h3 className="cross-sell-name">{tea.name}</h3>
                  <div className="cross-sell-footer">
                    <span className="cross-sell-price">{tea.price}</span>
                    <span className="cross-sell-arrow">→</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <Footer />
      </div>

      {/* Add-ons Quick Add Popup Modal */}
      {isAddonModalOpen && (
        <div className="modal-backdrop">
          <div className="modal-content">
            <button onClick={() => setIsAddonModalOpen(false)} className="modal-close-btn">
              ✕
            </button>

            <h3 style={{ fontSize: "20px", fontWeight: 800, color: "#2c1b0d", marginBottom: "8px", textAlign: "center" }}>
              Quick Add Add-ons
            </h3>
            <p style={{ fontSize: "13px", color: "#666", textAlign: "center", marginBottom: "24px" }}>
              Chai is incomplete without hot cookies and butter toasts. Complete your brew!
            </p>

            {/* Addons Grid */}
            <div className="addons-grid">
              {addons.map((addon) => {
                const isSelected = selectedAddons.some((a) => a.id === addon.id);
                return (
                  <div key={addon.id} className={`addon-card ${isSelected ? "selected" : ""}`}>
                    <img src={addon.image} alt={addon.name} className="addon-img" />
                    <div style={{ padding: "12px", display: "flex", flexDirection: "column", flexGrow: 1 }}>
                      <h4 style={{ fontSize: "13px", fontWeight: 700, color: "#2c1b0d", flexGrow: 1 }}>{addon.name}</h4>
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "10px" }}>
                        <span style={{ fontSize: "13px", fontWeight: 800, color: "#8a583c" }}>{addon.price}</span>
                        <button
                          onClick={() => toggleAddon(addon)}
                          style={{
                            background: isSelected ? "#5c7a4d" : "#2c1b0d",
                            color: "#ffffff",
                            border: "none",
                            borderRadius: "999px",
                            padding: "4px 10px",
                            fontSize: "11px",
                            fontWeight: 700,
                            cursor: "pointer",
                          }}
                        >
                          {isSelected ? "Added ✓" : "Add +"}
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Checkout Finalize */}
            <div style={{ borderTop: "1px solid rgba(0,0,0,0.06)", marginTop: "24px", paddingTop: "20px", textAlign: "center" }}>
              <button onClick={handleFinishCheckout} className="btn-finalize-order">
                Continue to Checkout
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Styled JSX */}
      <style>{`
        .product-page-container-full {
          width: 100%;
          padding: 110px 40px 30px;
          box-sizing: border-box;
        }

        .breadcrumbs {
          font-size: 13px;
          color: #777;
          margin-bottom: 24px;
        }

        .breadcrumbs a {
          color: inherit;
          text-decoration: none;
        }

        .breadcrumbs a:hover {
          color: #2c1b0d;
        }

        .active-crumb {
          color: #2c1b0d;
          font-weight: 600;
        }

        /* 3-Column Grid Layout on Desktop */
        .nordic-layout-container {
          display: grid;
          grid-template-columns: 290px 1.4fr 1fr;
          grid-template-areas:
            "sidebar gallery details"
            "sidebar gallery sugar-milk";
          gap: 20px;
          background: #ffffff;
          border-radius: 24px;
          padding: 30px;
          box-shadow: 0 4px 30px rgba(0,0,0,0.02);
          width: 100%;
          box-sizing: border-box;
        }

        /* Column 1: Sidebar Customizer */
        .sidebar-customizer {
          grid-area: sidebar;
          background: #fbf9f6;
          border-radius: 16px;
          padding: 24px;
          border: 1px solid rgba(0,0,0,0.04);
          display: flex;
          flex-direction: column;
          align-self: start;
        }

        .sidebar-heading {
          font-size: 16px;
          font-weight: 800;
          color: #2c1b0d;
          margin-bottom: 6px;
        }

        .sidebar-sub {
          font-size: 12px;
          color: #777;
          line-height: 1.4;
          margin-bottom: 20px;
        }

        .ingredients-vertical-list {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .ingredient-vertical-btn {
          display: flex;
          align-items: center;
          gap: 12px;
          background: #ffffff;
          border: 1.5px solid rgba(44, 27, 13, 0.08);
          border-radius: 12px;
          padding: 12px;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .ingredient-vertical-btn:hover {
          border-color: rgba(44, 27, 13, 0.25);
        }

        .ingredient-vertical-btn.selected {
          border-color: #2c1b0d;
          background: rgba(44, 27, 13, 0.02);
        }

        .swatch-icon-circle {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 16px;
          flex-shrink: 0;
        }

        .swatch-title {
          display: block;
          font-size: 13px;
          font-weight: 700;
          color: #2c1b0d;
        }

        .swatch-status {
          display: block;
          font-size: 10.5px;
          color: #777;
          margin-top: 2px;
        }

        .swatch-checkbox {
          font-size: 12px;
          font-weight: 700;
          color: #8a583c;
        }

        /* Sugar & Milk selection blocks */
        .swatch-selection-row {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 6px;
          margin-top: 8px;
        }

        .swatch-select-item {
          background: #ffffff;
          border: 1.5px solid rgba(44, 27, 13, 0.08);
          border-radius: 8px;
          padding: 8px 2px;
          font-size: 11px;
          font-weight: 700;
          cursor: pointer;
          color: #2c1b0d;
          transition: all 0.2s ease;
          text-align: center;
        }

        .swatch-select-item.selected {
          background: #2c1b0d;
          color: #ffffff;
          border-color: #2c1b0d;
        }

        .customizer-options-row {
          grid-area: sugar-milk;
          display: flex;
          gap: 16px;
          width: 100%;
          margin-top: 24px;
          border-top: 1px solid rgba(0,0,0,0.06);
          padding-top: 18px;
        }

        /* Column 2: Gallery */
        .nordic-gallery {
          grid-area: gallery;
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .nordic-main-media-wrapper {
          width: 100%;
          max-width: 580px;
          margin: 0 auto;
          aspect-ratio: 1 / 1;
          border-radius: 16px;
          overflow: hidden;
          background: #f5f5f7;
          position: relative;
          box-shadow: 0 8px 25px rgba(0,0,0,0.04);
        }

        .nordic-main-media {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        /* Carousel Navigation Buttons */
        .carousel-nav-btn {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          background: rgba(255, 255, 255, 0.8);
          border: none;
          width: 36px;
          height: 36px;
          border-radius: 50%;
          font-size: 20px;
          font-weight: bold;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #2c1b0d;
          z-index: 5;
          box-shadow: 0 4px 10px rgba(0,0,0,0.15);
          transition: background 0.2s, transform 0.2s;
        }

        .carousel-nav-btn:hover {
          background: #ffffff;
          transform: translateY(-50%) scale(1.08);
        }

        .left-nav {
          left: 12px;
        }

        .right-nav {
          right: 12px;
        }

        .nordic-thumbnails {
          display: flex;
          justify-content: center;
          gap: 12px;
        }

        .nordic-thumbnail-card {
          width: 64px;
          height: 64px;
          border-radius: 10px;
          overflow: hidden;
          border: 2px solid transparent;
          cursor: pointer;
          background: #f5f5f7;
          transition: border-color 0.2s;
        }

        .nordic-thumbnail-card.active {
          border-color: #2c1b0d;
        }

        .nordic-thumb-media {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        /* Bouncing Added Spices directly inside the Center Image */
        .bouncing-ingredient-item {
          position: absolute;
          top: 50%;
          left: 50%;
          color: #ffffff;
          background: #2c1b0d;
          padding: 12px 24px;
          border-radius: 99px;
          font-weight: 800;
          box-shadow: 0 15px 35px rgba(0,0,0,0.3);
          display: flex;
          align-items: center;
          gap: 8px;
          z-index: 10;
          animation: flyInAndBounce 1s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
        }

        @keyframes flyInAndBounce {
          0% { transform: translate(-350px, 0) scale(0.2); opacity: 0; }
          40% { transform: translate(-50%, -50%) scale(1.35); opacity: 1; }
          60% { transform: translate(-50%, -65%) scale(0.95); }
          80% { transform: translate(-50%, -45%) scale(1.1); }
          100% { transform: translate(-50%, -50%) scale(1); opacity: 0; }
        }

        /* Column 3: Details */
        .nordic-details {
          grid-area: details;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }

        .nordic-meta {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 13px;
          font-weight: 700;
          color: #888;
          margin-bottom: 12px;
        }

        .nordic-rating {
          color: #f1c40f;
        }

        .nordic-title {
          font-size: clamp(22px, 3vw, 30px);
          font-weight: 800;
          line-height: 1.2;
          margin-bottom: 12px;
          color: #2c1b0d;
        }

        .nordic-desc {
          font-size: 14.5px;
          line-height: 1.55;
          color: #666;
          margin-bottom: 24px;
        }

        .nordic-price-box {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 24px;
        }

        .current-price {
          font-size: 24px;
          font-weight: 800;
          color: #2c1b0d;
        }

        .original-price {
          font-size: 17px;
          color: #999;
          text-decoration: line-through;
        }

        .sale-badge {
          background: #27ae60;
          color: #ffffff;
          font-size: 10.5px;
          font-weight: 800;
          padding: 3px 6px;
          border-radius: 4px;
        }

        .purchase-options {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .option-card {
          display: flex;
          align-items: center;
          border: 1.5px solid rgba(44, 27, 13, 0.08);
          padding: 12px 16px;
          border-radius: 10px;
          cursor: pointer;
          transition: all 0.2s ease;
          gap: 10px;
        }

        .option-card.selected {
          border-color: #2c1b0d;
          background: rgba(44, 27, 13, 0.02);
        }

        .radio-dot {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          border: 2px solid #2c1b0d;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
        }

        .option-card.selected .radio-dot::after {
          content: "";
          position: absolute;
          width: 6px;
          height: 6px;
          background: #2c1b0d;
          border-radius: 50%;
        }

        .qty-selector {
          display: flex;
          align-items: center;
          border: 1.5px solid rgba(44, 27, 13, 0.12);
          border-radius: 8px;
          height: 44px;
        }

        .qty-btn {
          width: 32px;
          height: 100%;
          background: transparent;
          border: none;
          font-size: 15px;
          cursor: pointer;
          color: inherit;
        }

        .qty-val {
          padding: 0 10px;
          font-weight: 700;
          font-size: 13.5px;
        }

        .nordic-btn-add {
          background: transparent;
          color: #2c1b0d;
          border: 2px solid #2c1b0d;
          border-radius: 8px;
          height: 44px;
          padding: 0 18px;
          font-weight: 700;
          font-size: 12px;
          cursor: pointer;
          transition: background 0.2s;
        }

        .nordic-btn-add:hover {
          background: rgba(44, 27, 13, 0.04);
        }

        .nordic-btn-buy {
          background: #2c1b0d;
          color: #ffffff;
          border: none;
          border-radius: 8px;
          height: 44px;
          padding: 0 20px;
          font-weight: 700;
          font-size: 12px;
          cursor: pointer;
          transition: background 0.2s;
        }

        .nordic-btn-buy:hover {
          background: #4e3629;
        }

        .nordic-trust-row {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
          margin-top: 24px;
          border-top: 1px solid #eee;
          padding-top: 16px;
          width: 100%;
        }

        .trust-item {
          font-size: 11.5px;
          font-weight: 600;
          color: #666;
        }

        .nordic-bullets {
          margin-top: 20px;
          padding-left: 20px;
          color: #5c4f47;
          font-size: 13.5px;
          line-height: 1.7;
        }

        /* Reviews Grid */
        .nordic-reviews-section {
          background: #ffffff;
          border-radius: 24px;
          padding: 30px;
          margin-top: 30px;
        }

        .reviews-tab-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
        }

        .review-tab-card {
          background: #fbf9f6;
          border-radius: 14px;
          padding: 20px;
          border: 1px solid rgba(0,0,0,0.03);
        }

        .verified-badge {
          background: rgba(39, 174, 96, 0.1);
          color: #27ae60;
          font-size: 10px;
          font-weight: 700;
          padding: 2px 5px;
          border-radius: 4px;
        }

        .quote-tab {
          font-size: 13px;
          line-height: 1.5;
          color: #5c4f47;
          margin-top: 6px;
        }

        /* FAQ */
        .nordic-faq-section {
          background: #ffffff;
          border-radius: 24px;
          padding: 30px;
          margin-top: 30px;
        }

        .faq-accordion-card {
          border: 1px solid rgba(0,0,0,0.05);
          border-radius: 12px;
          overflow: hidden;
          background: #fbf9f6;
        }

        .faq-acc-btn {
          width: 100%;
          padding: 16px 20px;
          display: flex;
          justify-content: space-between;
          background: transparent;
          border: none;
          font-weight: 700;
          color: #2c1b0d;
          font-size: 14px;
          cursor: pointer;
        }

        .faq-acc-ans {
          padding: 0 20px 16px;
          font-size: 13px;
          color: #666;
          line-height: 1.5;
        }

        /* Cross Selling Carousel */
        .cross-sell-section {
          padding: 40px;
          border-top: 1px solid rgba(0,0,0,0.06);
          background: #ffffff;
        }

        .cross-sell-heading {
          font-size: 20px;
          font-weight: 800;
          color: #2c1b0d;
          margin-bottom: 20px;
        }

        .cross-sell-carousel {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 16px;
          width: 100%;
        }

        .cross-sell-card {
          background: #fbf9f6;
          border-radius: 12px;
          border: 1px solid rgba(0,0,0,0.04);
          padding: 10px;
          transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.3s;
          display: flex;
          flex-direction: column;
          width: 100%;
        }

        .cross-sell-card:hover {
          transform: translateY(-5px);
          border-color: rgba(44, 27, 13, 0.15);
        }

        .cross-sell-img-container {
          width: 100%;
          aspect-ratio: 1 / 1;
          border-radius: 8px;
          overflow: hidden;
          margin-bottom: 10px;
        }

        .cross-sell-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        .cross-sell-name {
          font-size: 13px;
          font-weight: 700;
          color: #2c1b0d;
          margin-bottom: 6px;
        }

        .cross-sell-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-top: auto;
          padding-top: 6px;
          border-top: 1px dashed rgba(0,0,0,0.05);
        }

        .cross-sell-price {
          font-size: 12.5px;
          font-weight: 800;
          color: #8a583c;
        }

        .cross-sell-arrow {
          font-size: 11px;
          color: #8a583c;
          font-weight: bold;
        }

        /* Modal Backdrop */
        .modal-backdrop {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0,0,0,0.55);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 2000;
          backdrop-filter: blur(4px);
        }

        .modal-content {
          background: #ffffff;
          width: 100%;
          max-width: 620px;
          border-radius: 20px;
          padding: 30px;
          position: relative;
          box-shadow: 0 20px 50px rgba(0,0,0,0.15);
        }

        .modal-close-btn {
          position: absolute;
          top: 18px;
          right: 18px;
          background: transparent;
          border: none;
          font-size: 20px;
          cursor: pointer;
          color: #777;
        }

        .addons-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 16px;
        }

        .addon-card {
          border: 1.5px solid rgba(0,0,0,0.06);
          border-radius: 12px;
          overflow: hidden;
          display: flex;
          background: #fbf9f6;
          transition: all 0.2s ease;
        }

        .addon-card.selected {
          border-color: #5c7a4d;
          background: rgba(92, 122, 77, 0.02);
        }

        .addon-img {
          width: 80px;
          height: auto;
          aspect-ratio: 1 / 1;
          object-fit: cover;
        }

        .btn-finalize-order {
          background: #2c1b0d;
          color: #ffffff;
          border: none;
          padding: 12px 40px;
          border-radius: 999px;
          font-size: 14px;
          font-weight: 700;
          cursor: pointer;
          width: 100%;
          max-width: 300px;
          transition: background 0.2s;
        }

        .btn-finalize-order:hover {
          background: #4e3629;
        }

        /* Mobile Responsive Configurations */
        @media (max-width: 990px) {
          .nordic-layout-container {
            grid-template-columns: 1fr 1fr;
            grid-template-areas:
              "gallery details"
              "sidebar sugar-milk";
          }
        }

        @media (max-width: 768px) {
          /* Mobile Stack Order: 1. Gallery -> 2. Sidebar Customizer (Horizontal Carousel) -> 3. Sugar & Milk Selection -> 4. Full Content Details */
          .product-page-container-full {
            padding: 90px 0px 20px 0px !important;
          }

          .breadcrumbs {
            padding: 0 16px;
            margin-bottom: 16px;
          }

          .nordic-layout-container {
            display: flex;
            flex-direction: column;
            padding: 16px 12px;
            gap: 24px;
            border-radius: 0px !important;
          }

          .nordic-gallery {
            order: 1;
            width: 100%;
          }

          .sidebar-customizer {
            order: 2;
            width: 100%;
            padding: 16px;
          }

          /* Convert ingredients list to horizontal scrolling carousel on mobile */
          .ingredients-vertical-list {
            display: flex;
            flex-direction: row;
            overflow-x: auto;
            gap: 12px;
            padding: 8px 4px;
            scroll-snap-type: x mandatory;
            -webkit-overflow-scrolling: touch;
            scrollbar-width: none; /* Hide default scrollbars */
          }

          .ingredients-vertical-list::-webkit-scrollbar {
            display: none;
          }

          .ingredient-vertical-btn {
            flex: 0 0 210px;
            scroll-snap-align: start;
          }

          .customizer-options-row {
            order: 3;
            width: 100%;
            margin-top: 0;
            border-top: 1px solid rgba(0,0,0,0.06);
            padding-top: 18px;
            flex-direction: column;
            gap: 16px;
          }

          .nordic-details {
            order: 4;
            width: 100%;
          }

          .cross-sell-carousel {
            grid-template-columns: repeat(2, 1fr);
          }

          .reviews-tab-grid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 580px) {
          .modal-content {
            width: 92%;
            max-height: 85vh;
            overflow-y: auto;
            padding: 20px 16px;
          }
          .addons-grid {
            grid-template-columns: 1fr;
            gap: 12px;
          }
        }
      `}</style>
    </div>
  );
}
