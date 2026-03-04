import React from 'react';

const Hero = () => {
    return (
        <section className="hero-section-alt">
            <div className="container">
                <div className="hero-content-centered animate-fade">
                    <div className="badge-promo">১০০% প্রিমিয়াম কোয়ালিটি বীজ</div>
                    <h1 className="hero-subtitle-large">উন্নত মানের হাইব্রিড সর্গম <br /> <span className="highlight-green">সুদান ঘাসের বীজ</span></h1>
                    <p className="hero-description-alt">
                        আপনার খামারের জন্য সেরা পুষ্টিগুণ সম্পন্ন এবং দ্রুত বর্ধনশীল ঘাসের নিশ্চয়তা। এক কেজি বীজের দাম <strong>৩৭০ টাকা</strong> মাত্র!
                    </p>

                    <div className="hero-actions-centered">
                        <a href="#order" className="btn btn-primary-large">এখনই অর্ডার করুন</a>
                        <a href="#description" className="btn btn-outline-large">বিস্তারিত জানুন</a>
                    </div>
                </div>
            </div>

            <style jsx>{`
                .hero-section-alt {
                    padding: 120px 0;
                    background: radial-gradient(circle at top right, #f1f8e9, #ffffff);
                    text-align: center;
                    position: relative;
                    overflow: hidden;
                }
                .hero-content-centered {
                    max-width: 900px;
                    margin: 0 auto;
                }
                .badge-promo {
                    background: #e8f5e9;
                    color: #2d5a27;
                    padding: 10px 25px;
                    border-radius: 50px;
                    display: inline-block;
                    font-weight: 700;
                    font-size: 1rem;
                    margin-bottom: 30px;
                    border: 1px solid #c8e6c9;
                    box-shadow: 0 5px 15px rgba(0,0,0,0.02);
                }
                .hero-subtitle-large {
                    font-size: 4.5rem;
                    line-height: 1.1;
                    color: #1a3317;
                    font-weight: 900;
                    margin-bottom: 30px;
                    letter-spacing: -1px;
                }
                .highlight-green {
                    color: #2d5a27;
                    position: relative;
                    display: inline-block;
                }
                .highlight-green::after {
                    content: '';
                    position: absolute;
                    bottom: 10px;
                    left: 0;
                    width: 100%;
                    height: 15px;
                    background: rgba(76, 175, 80, 0.15);
                    z-index: -1;
                    border-radius: 5px;
                }
                .hero-description-alt {
                    font-size: 1.4rem;
                    color: #555;
                    margin-bottom: 50px;
                    line-height: 1.8;
                }
                .hero-actions-centered {
                    display: flex;
                    gap: 25px;
                    justify-content: center;
                }
                .btn-primary-large {
                    background: #2d5a27;
                    color: white;
                    padding: 20px 45px;
                    border-radius: 50px;
                    font-weight: 800;
                    font-size: 1.2rem;
                    text-decoration: none;
                    box-shadow: 0 15px 35px rgba(45, 90, 39, 0.3);
                    transition: all 0.3s;
                }
                .btn-primary-large:hover { 
                    background: #4caf50; 
                    transform: translateY(-5px);
                    box-shadow: 0 20px 45px rgba(76, 175, 80, 0.4);
                }
                
                .btn-outline-large {
                    border: 2px solid #2d5a27;
                    color: #2d5a27;
                    padding: 20px 45px;
                    border-radius: 50px;
                    font-weight: 800;
                    font-size: 1.2rem;
                    text-decoration: none;
                    transition: all 0.3s;
                }
                .btn-outline-large:hover { 
                    background: #f1f8e9;
                    transform: translateY(-5px);
                }

                @media (max-width: 992px) {
                    .hero-subtitle-large { font-size: 3.5rem; }
                }

                @media (max-width: 768px) {
                    .hero-section-alt { padding: 80px 0; }
                    .hero-subtitle-large { font-size: 2.8rem; }
                    .hero-description-alt { font-size: 1.1rem; }
                    .hero-actions-centered { flex-direction: column; align-items: stretch; max-width: 300px; margin: 0 auto; }
                    .btn-primary-large, .btn-outline-large { padding: 15px 30px; font-size: 1.1rem; }
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
