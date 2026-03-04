import React, { useState } from 'react';

const ProductGallery = () => {
    const images = [
        { src: "/src/assets/seeds.jpg", title: "উন্নত মানের হাইব্রিড বীজ", desc: "সেরা মানের ফ্রেশ বীজ যা অধিক ফলনের নিশ্চয়তা দেয়।" },
        { src: "/src/assets/product2.jpg", title: "অঙ্কুরোদগম সাফল্য", desc: "রোপনের কিছুদিনের মধ্যেই দুর্দান্ত অঙ্কুরোদগম।" },
        { src: "/src/assets/product3.jpg", title: "লতা ও ঘাসের ফলন", desc: "পরিনত অবস্থায় পুষ্টিকর ও রসালো ঘাসের সমারোহ।" }
    ];

    const [activeImg, setActiveImg] = useState(images[0].src);

    return (
        <section id="product-details" className="product-showcase-section">
            <div className="container">
                <div className="section-header text-center animate-fade">
                    <h1 className="main-product-name">হাইব্রিড সরগম সুদান ঘাসের বীজ</h1>
                    <p className="main-product-sub">বীজ থেকে শুরু করে মাঠের ফলন পর্যন্ত – একটি সম্পূর্ণ প্রিমিয়াম প্যাকেজ</p>
                </div>

                <div className="product-unified-grid">
                    {/* Main Image View */}
                    <div className="product-main-view">
                        <div className="main-img-container">
                            <img src={activeImg} alt="Product detail" className="main-display-img" />
                        </div>
                        <div className="price-tag-premium">
                            <div className="price-top">বিশেষ মূল্য</div>
                            <div className="price-val">৩৭০ টাকা / কেজি</div>
                        </div>
                    </div>

                    {/* Thumbnail/Stages Selection */}
                    <div className="product-stages-list">
                        <h3 className="stages-title">পণ্যের বিভিন্ন ধাপ সমূহ:</h3>
                        <div className="stages-grid">
                            {images.map((img, idx) => (
                                <div
                                    key={idx}
                                    className={`stage-card ${activeImg === img.src ? 'active' : ''}`}
                                    onClick={() => setActiveImg(img.src)}
                                >
                                    <div className="stage-thumb-container">
                                        <img src={img.src} alt={img.title} className="stage-thumb" />
                                    </div>
                                    <div className="stage-info">
                                        <h4>{img.title}</h4>
                                        <p>{img.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="order-cta-box">
                            <a href="#order" className="btn-order-large">অর্ডার করতে নিচে যান</a>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
                .product-showcase-section {
                    padding: 80px 0;
                    background: #fff;
                    border-top: 1px solid #eee;
                }
                .main-product-name {
                    font-size: 3rem;
                    color: #2d5a27;
                    font-weight: 900;
                    margin-bottom: 10px;
                }
                .main-product-sub {
                    font-size: 1.2rem;
                    color: #666;
                    margin-bottom: 50px;
                }
                .product-unified-grid {
                    display: grid;
                    grid-template-columns: 1.2fr 0.8fr;
                    gap: 40px;
                    align-items: start;
                }
                .main-img-container {
                    height: 550px;
                    border-radius: 30px;
                    overflow: hidden;
                    box-shadow: 0 20px 50px rgba(0,0,0,0.1);
                    background: #f9f9f9;
                }
                .main-display-img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    transition: all 0.5s ease;
                }
                .price-tag-premium {
                    background: #ffca28;
                    color: #000;
                    padding: 20px 30px;
                    border-radius: 20px;
                    display: inline-block;
                    margin-top: -40px;
                    position: relative;
                    left: 40px;
                    box-shadow: 0 10px 25px rgba(255, 202, 40, 0.4);
                    font-weight: 800;
                    z-index: 5;
                }
                .price-top { font-size: 0.9rem; text-transform: uppercase; opacity: 0.8; }
                .price-val { font-size: 1.8rem; }

                .stages-title {
                    font-size: 1.5rem;
                    margin-bottom: 25px;
                    color: #2d5a27;
                    font-weight: 700;
                }
                .stages-grid {
                    display: flex;
                    flex-direction: column;
                    gap: 15px;
                }
                .stage-card {
                    display: flex;
                    gap: 15px;
                    background: #fdfaf5;
                    padding: 15px;
                    border-radius: 20px;
                    cursor: pointer;
                    border: 2px solid transparent;
                    transition: all 0.3s;
                }
                .stage-card.active {
                    background: #fff;
                    border-color: #4caf50;
                    box-shadow: 0 10px 20px rgba(0,0,0,0.05);
                }
                .stage-thumb-container {
                    width: 80px;
                    height: 80px;
                    border-radius: 12px;
                    overflow: hidden;
                    flex-shrink: 0;
                }
                .stage-thumb {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }
                .stage-info h4 {
                    font-size: 1.1rem;
                    color: #2d5a27;
                    margin-bottom: 5px;
                }
                .stage-info p {
                    font-size: 0.9rem;
                    color: #777;
                    line-height: 1.4;
                }
                .order-cta-box {
                    margin-top: 30px;
                }
                .btn-order-large {
                    display: block;
                    background: #2d5a27;
                    color: #fff;
                    text-align: center;
                    padding: 18px;
                    border-radius: 50px;
                    text-decoration: none;
                    font-weight: 800;
                    font-size: 1.1rem;
                    transition: 0.3s;
                }
                .btn-order-large:hover { background: #4caf50; transform: translateY(-3px); }

                @media (max-width: 992px) {
                    .product-unified-grid { grid-template-columns: 1fr; }
                    .main-img-container { height: 400px; }
                    .main-product-name { font-size: 2.2rem; }
                }
            `}</style>
        </section>
    );
};

export default ProductGallery;
