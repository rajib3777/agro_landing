import React from 'react';
import seedImg from '../assets/seeds.jpg';

const Hero = () => {
    return (
        <section className="hero-section-alt">
            <div className="container">
                <div className="hero-content-centered animate-fade">
                    <div className="badge-promo">১০০% প্রিমিয়াম কোয়ালিটি</div>
                    <h1 className="hero-subtitle-large">উন্নত মানের হাইব্রিড <br /> <span className="highlight-green">সুদান ঘাসের বীজ</span></h1>
                    <p className="hero-description-alt">
                        আপনার খামারের জন্য সেরা পুষ্টিগুণ সম্পন্ন এবং দ্রুত বর্ধনশীল ঘাসের নিশ্চয়তা। এক কেজি বীজের দাম <strong>৩৭০ টাকা</strong> মাত্র!
                    </p>

                    <div className="hero-actions-centered">
                        <a href="#order" className="btn btn-primary-large">এখনই অর্ডার করুন</a>
                        <a href="#description" className="btn btn-outline-large">বিস্তারিত জানুন</a>
                    </div>
                </div>

                <div className="hero-visual-card animate-slide-up">
                    <img src={seedImg} alt="Sorghum Sudan Grass Seeds" className="hero-main-img-alt" />
                    <div className="floating-info-card">
                        <div className="info-item">
                            <span className="info-icon">🌿</span>
                            <div className="info-text">
                                <strong>দ্রুত বৃদ্ধি</strong>
                                <span>অল্প সময়েই ফলন</span>
                            </div>
                        </div>
                        <div className="info-item">
                            <span className="info-icon">💰</span>
                            <div className="info-text">
                                <strong>সাশ্রয়ী মূল্য</strong>
                                <span>৩৭০৳ প্রতি কেজি</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
                .hero-section-alt {
                    padding: 80px 0;
                    background: radial-gradient(circle at top right, #f1f8e9, #ffffff);
                    text-align: center;
                    overflow: hidden;
                }
                .hero-content-centered {
                    max-width: 850px;
                    margin: 0 auto 50px;
                }
                .badge-promo {
                    background: #e8f5e9;
                    color: #2d5a27;
                    padding: 8px 20px;
                    border-radius: 50px;
                    display: inline-block;
                    font-weight: 700;
                    font-size: 0.9rem;
                    margin-bottom: 25px;
                    border: 1px solid #c8e6c9;
                }
                .hero-subtitle-large {
                    font-size: 3.8rem;
                    line-height: 1.1;
                    color: #1a3317;
                    font-weight: 900;
                    margin-bottom: 25px;
                }
                .highlight-green {
                    color: #4caf50;
                    position: relative;
                }
                .hero-description-alt {
                    font-size: 1.3rem;
                    color: #555;
                    margin-bottom: 40px;
                    line-height: 1.6;
                }
                .hero-actions-centered {
                    display: flex;
                    gap: 20px;
                    justify-content: center;
                }
                .btn-primary-large {
                    background: #2d5a27;
                    color: white;
                    padding: 18px 40px;
                    border-radius: 50px;
                    font-weight: 800;
                    font-size: 1.1rem;
                    text-decoration: none;
                    box-shadow: 0 10px 25px rgba(45, 90, 39, 0.3);
                    transition: 0.3s;
                }
                .btn-primary-large:hover { background: #4caf50; transform: translateY(-3px); }
                
                .btn-outline-large {
                    border: 2px solid #2d5a27;
                    color: #2d5a27;
                    padding: 18px 40px;
                    border-radius: 50px;
                    font-weight: 800;
                    font-size: 1.1rem;
                    text-decoration: none;
                    transition: 0.3s;
                }
                .btn-outline-large:hover { background: #f1f8e9; }

                .hero-visual-card {
                    position: relative;
                    max-width: 900px;
                    margin: 0 auto;
                }
                .hero-main-img-alt {
                    width: 100%;
                    border-radius: 40px;
                    box-shadow: 0 30px 60px rgba(0,0,0,0.15);
                }
                .floating-info-card {
                    position: absolute;
                    bottom: 40px;
                    left: -30px;
                    background: white;
                    padding: 25px;
                    border-radius: 25px;
                    box-shadow: 0 15px 40px rgba(0,0,0,0.1);
                    display: flex;
                    flex-direction: column;
                    gap: 15px;
                }
                .info-item {
                    display: flex;
                    align-items: center;
                    gap: 12px;
                    text-align: left;
                }
                .info-icon { font-size: 1.8rem; }
                .info-text strong { display: block; color: #1a3317; font-size: 1rem; }
                .info-text span { color: #666; font-size: 0.85rem; }

                @media (max-width: 768px) {
                    .hero-subtitle-large { font-size: 2.5rem; }
                    .hero-actions-centered { flex-direction: column; }
                    .floating-info-card { display: none; }
                }

                @keyframes fade {
                    from { opacity: 0; transform: translateY(20px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                .animate-fade { animation: fade 1.5s ease; }
            `}</style>
        </section>
    );
};

export default Hero;
