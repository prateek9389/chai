"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function OrderDetailPage({ params }) {
  const orderId = params.id || "CHAI-ORD-982110";

  return (
    <div style={{ background: "#fcfaf7", minHeight: "100vh", color: "#2c1b0d", overflowX: "hidden" }}>
      <Navbar />

      <div className="order-detail-container">
        <div className="order-detail-box">
          
          {/* Header */}
          <div className="detail-header-row">
            <div>
              <span className="order-tag">SECURE SHIPMENT LOGS</span>
              <h2>Invoice details: {orderId}</h2>
              <p>Placed on July 01, 2026 at 02:40 PM</p>
            </div>
            <div className="status-badge">Delivered</div>
          </div>

          {/* Tracker visual */}
          <div className="tracking-visual-card">
            <h4>Live Shipment Status</h4>
            <div className="stepper-track">
              <div className="step active">
                <span className="step-circle">✓</span>
                <span className="step-text">Ordered</span>
              </div>
              <div className="track-line active" />
              <div className="step active">
                <span className="step-circle">✓</span>
                <span className="step-text">Brewed</span>
              </div>
              <div className="track-line active" />
              <div className="step active">
                <span className="step-circle">✓</span>
                <span className="step-text">Dispatched</span>
              </div>
              <div className="track-line active" />
              <div className="step active">
                <span className="step-circle">✓</span>
                <span className="step-text">Delivered</span>
              </div>
            </div>
          </div>

          {/* 2-Column Split: Summary | Address */}
          <div className="detail-grid">
            
            {/* Left: Invoice items list */}
            <div className="detail-card">
              <h3 className="section-title">Invoice Items</h3>
              <div className="invoice-items-list">
                <div className="item-row">
                  <div>
                    <strong>Cardamom (Elaichi) Chai</strong>
                    <p style={{ margin: "2px 0 0", fontSize: "11.5px", color: "#777" }}>Milk: Whole | Sugar: Normal</p>
                  </div>
                  <strong>₹169</strong>
                </div>

                <div className="item-row">
                  <div>
                    <strong>Cardamom Crispy Rusk Pack (Add-on)</strong>
                    <p style={{ margin: "2px 0 0", fontSize: "11.5px", color: "#777" }}>1x side accompaniment</p>
                  </div>
                  <strong>₹45</strong>
                </div>

                <div className="breakdown-total-row">
                  <span>Subtotal:</span>
                  <span>₹214</span>
                </div>
                <div className="breakdown-total-row">
                  <span>Express Delivery:</span>
                  <span>Free</span>
                </div>
                <div className="breakdown-total-row final">
                  <span>Total Amount Paid:</span>
                  <span style={{ color: "#8a583c", fontSize: "18px", fontWeight: "900" }}>₹214</span>
                </div>
              </div>
            </div>

            {/* Right: Shipping details */}
            <div className="detail-card">
              <h3 className="section-title">Shipping & Delivery Address</h3>
              
              <div className="address-box-display">
                <p>👤 <strong>Receiver Name:</strong> Royal Tea Aficionado</p>
                <p>📞 <strong>Phone:</strong> +91 98765 43210</p>
                <p>📍 <strong>Delivery Address:</strong></p>
                <p className="full-address-text">
                  Palace Square Vista, Block 4-C, Pincode 302001, Jaipur, Rajasthan, India
                </p>
              </div>

              <div style={{ marginTop: "24px", background: "rgba(138, 88, 60, 0.08)", padding: "14px", borderRadius: "10px", fontSize: "12.5px" }}>
                <span>🛡️ Payment secured via <strong>UPI Instant Merchant Transfer</strong>. TransID: TXN-73921804.</span>
              </div>
            </div>

          </div>

        </div>
      </div>

      <Footer />

      {/* Styled JSX */}
      <style>{`
        .order-detail-container {
          width: 100%;
          max-width: 1000px;
          margin: 0 auto;
          padding: 120px 20px 60px;
          box-sizing: border-box;
        }

        .order-detail-box {
          background: #ffffff;
          border-radius: 24px;
          border: 1px solid rgba(0,0,0,0.04);
          padding: 40px;
          box-shadow: 0 4px 30px rgba(0,0,0,0.01);
        }

        .detail-header-row {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          border-bottom: 1px solid rgba(0,0,0,0.06);
          padding-bottom: 24px;
          margin-bottom: 30px;
        }

        .order-tag {
          font-size: 10.5px;
          font-weight: 800;
          color: #8a583c;
          letter-spacing: 1px;
          display: block;
          margin-bottom: 6px;
        }

        .detail-header-row h2 {
          font-size: clamp(20px, 3.5vw, 26px);
          font-weight: 900;
          color: #2c1b0d;
          margin: 0 0 6px;
        }

        .detail-header-row p {
          font-size: 13px;
          color: #666;
          margin: 0;
        }

        .status-badge {
          background: rgba(39, 174, 96, 0.1);
          color: #27ae60;
          font-size: 12px;
          font-weight: 800;
          text-transform: uppercase;
          padding: 6px 14px;
          border-radius: 8px;
        }

        /* Status stepper tracker */
        .tracking-visual-card {
          background: #fbf9f6;
          border-radius: 16px;
          padding: 24px;
          border: 1px solid rgba(0,0,0,0.03);
          margin-bottom: 30px;
        }

        .tracking-visual-card h4 {
          font-size: 14.5px;
          font-weight: 800;
          margin-bottom: 20px;
          color: #2c1b0d;
        }

        .stepper-track {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .step {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
          position: relative;
        }

        .step-circle {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background: #ddd;
          color: #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: bold;
          font-size: 14px;
        }

        .step.active .step-circle {
          background: #27ae60;
        }

        .step-text {
          font-size: 12px;
          font-weight: 750;
          color: #888;
        }

        .step.active .step-text {
          color: #2c1b0d;
        }

        .track-line {
          flex-grow: 1;
          height: 3px;
          background: #eee;
          margin: 0 10px;
          transform: translateY(-12px);
        }

        .track-line.active {
          background: #27ae60;
        }

        /* Details columns */
        .detail-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 28px;
        }

        .detail-card {
          background: #ffffff;
          border: 1.5px solid rgba(0,0,0,0.04);
          border-radius: 16px;
          padding: 24px;
        }

        .section-title {
          font-size: 16px;
          font-weight: 850;
          color: #2c1b0d;
          margin-bottom: 20px;
          border-bottom: 1.5px solid rgba(0,0,0,0.04);
          padding-bottom: 10px;
        }

        .item-row {
          display: flex;
          justify-content: space-between;
          font-size: 13.5px;
          padding-bottom: 12px;
          border-bottom: 1px solid rgba(0,0,0,0.04);
          margin-bottom: 12px;
        }

        .breakdown-total-row {
          display: flex;
          justify-content: space-between;
          font-size: 13px;
          color: #555;
          margin-bottom: 8px;
        }

        .breakdown-total-row.final {
          border-top: 1px dashed rgba(0,0,0,0.08);
          padding-top: 12px;
          margin-top: 12px;
          font-weight: 850;
          color: #2c1b0d;
        }

        /* Shipping Address card */
        .address-box-display {
          display: flex;
          flex-direction: column;
          gap: 12px;
          font-size: 13.5px;
        }

        .address-box-display p {
          margin: 0;
        }

        .full-address-text {
          background: #fbf9f6;
          padding: 12px;
          border-radius: 8px;
          border: 1px solid rgba(0,0,0,0.04);
          line-height: 1.4;
          color: #555;
        }

        @media (max-width: 800px) {
          .detail-grid {
            grid-template-columns: 1fr;
          }
          .order-detail-box {
            padding: 24px;
          }
          .track-line {
            margin: 0 4px;
          }
          .step-text {
            font-size: 10px;
          }
        }
      `}</style>
    </div>
  );
}
