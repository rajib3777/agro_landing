import React from 'react';
import logoImg from '../assets/logo.jpg';

export default function Navbar() {
  return (
    <nav className="navbar sticky">
      <div className="container nav-content">
        <div className="logo-area">
          <img
            src={logoImg}
            alt="Alif Agro"
            className="nav-logo-img"
            style={{ height: '40px', borderRadius: '8px' }}
            onError={(e) => {
              e.target.style.display = 'none';
            }}
          />
          <span className="logo-text">আলিফ এগ্রো সার্ভিস</span>
        </div>
        <div className="nav-links">
          <a href="#description">সুবিধা</a>
          <a href="#reviews">রিভিউ</a>
          <a href="#order" className="btn-nav">অর্ডার করুন</a>
        </div>
      </div>
      <style jsx>{`
        .navbar {
          background: rgba(255, 255, 255, 0.9);
          backdrop-filter: blur(10px);
          padding: 10px 0;
          position: sticky;
          top: 0;
          z-index: 1000;
          box-shadow: 0 2px 15px rgba(0,0,0,0.05);
        }
        .nav-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .logo-area {
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .logo-text {
          font-size: 1.3rem;
          font-weight: 800;
          color: #2d5a27;
        }
        .nav-links {
          display: flex;
          gap: 20px;
          align-items: center;
        }
        .nav-links a {
          text-decoration: none;
          color: #333;
          font-weight: 600;
          transition: 0.3s;
        }
        .nav-links a:hover { color: #4caf50; }
        .btn-nav {
          background: #2d5a27;
          color: white !important;
          padding: 8px 20px;
          border-radius: 50px;
        }
      `}</style>
    </nav>
  );
}
