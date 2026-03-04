import React from 'react';
import fieldImg from '../assets/product3.jpg';

const Hero = () => {
    return (
        <section className="hero-section-alt">
            {/* Background Overlay */}
            <div className="hero-overlay-dark"></div>

            <div className="container hero-container-rel">
                <div className="hero-content-centered animate-fade">
                    <div className="badge-promo-premium">১০০% প্রিমিয়াম কোয়ালিটি বীজ</div>
                    <h1 className="hero-title-premium">উন্নত মানের হাইব্রিড সর্গম <br /> <span className="highlight-yellow">সুদান ঘাসের বীজ</span></h1>
                    <p className="hero-desc-premium">
                        আপনার খামারের জন্য সেরা পুষ্টিগুণ সম্পন্ন এবং দ্রুত বর্ধনশীল ঘাসের নিশ্চয়তা।
                    </p>
                </div>
            </div>

            <style jsx>{`
                .hero-section-alt {
                    padding: 150px 0;
                    background: url(${fieldImg}) center/cover no-repeat;
                    text-align: center;
                    position: relative;
                    overflow: hidden;
                    min-height: 85vh;
                    display: flex;
                    align-items: center;
                }
                .hero-overlay-dark {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background: linear-gradient(135deg, rgba(26, 51, 23, 0.85) 0%, rgba(45, 90, 39, 0.6) 100%);
                    z-index: 1;
                }
                .hero-container-rel {
                    position: relative;
                    z-index: 2;
                }
                .hero-content-centered {
                    max-width: 900px;
                    margin: 0 auto;
                }
                .badge-promo-premium {
                    background: #ffca28;
                    color: #000;
                    padding: 10px 25px;
                    border-radius: 50px;
                    display: inline-block;
                    font-weight: 800;
                    font-size: 1rem;
                    margin-bottom: 35px;
                    box-shadow: 0 5px 20px rgba(0,0,0,0.2);
                }
                .hero-title-premium {
                    font-size: 4.5rem;
                    line-height: 1.3;
                    color: #fff;
                    font-weight: 900;
                    margin-bottom: 30px;
                    text-shadow: 0 4px 10px rgba(0,0,0,0.3);
                }
                .highlight-yellow {
                    color: #ffca28;
                }
                .hero-desc-premium {
                    font-size: 1.4rem;
                    color: rgba(255,255,255,0.9);
                    margin-bottom: 50px;
                    line-height: 1.8;
                    max-width: 800px;
                    margin-left: auto;
                    margin-right: auto;
                }
                .price-tag-inline {
                    color: #ffca28;
                    font-size: 1.6rem;
                }
                .hero-actions-centered {
                    display: flex;
                    gap: 25px;
                    justify-content: center;
                }
                .btn-hero-solid {
                    background: #ffca28;
                    color: #000;
                    padding: 22px 50px;
                    border-radius: 50px;
                    font-weight: 800;
                    font-size: 1.25rem;
                    text-decoration: none;
                    box-shadow: 0 10px 30px rgba(255, 202, 40, 0.3);
                    transition: all 0.3s;
                }
                .btn-hero-solid:hover { 
                    transform: translateY(-5px);
                    box-shadow: 0 15px 40px rgba(255, 202, 40, 0.4);
                    background: #fff;
                }
                
                .btn-hero-outline {
                    border: 2px solid #fff;
                    color: #fff;
                    padding: 22px 50px;
                    border-radius: 50px;
                    font-weight: 800;
                    font-size: 1.25rem;
                    text-decoration: none;
                    transition: all 0.3s;
                }
                .btn-hero-outline:hover { 
                    background: rgba(255,255,255,0.1);
                    transform: translateY(-5px);
                }

                @media (max-width: 992px) {
                    .hero-title-premium { font-size: 3.5rem; }
                }

                @media (max-width: 768px) {
                    .hero-section-alt { padding: 100px 0; min-height: 70vh; }
                    .hero-title-premium { font-size: 2.8rem; }
                    .hero-desc-premium { font-size: 1.1rem; }
                    .hero-actions-centered { flex-direction: column; align-items: stretch; max-width: 320px; margin: 0 auto; gap: 15px; }
                    .btn-hero-solid, .btn-hero-outline { padding: 18px 30px; font-size: 1.1rem; }
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
