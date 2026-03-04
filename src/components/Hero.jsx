import React from 'react';

const Hero = () => {
    return (
        <section id="hero" className="hero-section-alt">
            <div className="hero-overlay-dark"></div>
            <div className="container hero-content-centered animate-fade">
                <div className="hero-badge animate-bounce">
                    <img src="/src/assets/logo.jpg" alt="Logo" className="hero-logo-small" onError={(e) => e.target.style.display = 'none'} />
                    আলিফ এগ্রো সার্ভিস
                </div>
                <h1 className="hero-subtitle-large">সর্বোচ্চ মানের হাইব্রিড সরগম সুদান ঘাসের বীজ</h1>
                <p className="hero-description-alt">
                    অধিক ফলনশীল এবং উন্নত পুষ্টিগুণ সম্পন্ন বীজ। আপনার গবাদি পশুর জন্য সেরা পুষ্টি নিশ্চিত করুন। প্রতিদিনের সমৃদ্ধির পথে আমরা আপনার সাথী।
                </p>

                <div className="hero-btns-centered">
                    <a href="#order" className="btn-order-now">এখনই অর্ডার করুন</a>
                    <a href="#description" className="btn-learn-more">সুবিধা গুলো দেখুন</a>
                </div>
            </div>

            <style jsx>{`
                .hero-section-alt {
                    position: relative;
                    min-height: 80vh;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    background: url('https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1950&q=80') center/cover no-repeat;
                    color: white;
                    text-align: center;
                    overflow: hidden;
                    padding: 80px 20px;
                }
                .hero-overlay-dark {
                    position: absolute;
                    top: 0; left: 0; width: 100%; height: 100%;
                    background: linear-gradient(135deg, rgba(0,0,0,0.7) 0%, rgba(46, 125, 50, 0.4) 100%);
                }
                .hero-content-centered {
                    position: relative;
                    z-index: 10;
                    max-width: 900px;
                }
                .hero-badge {
                    display: inline-flex;
                    align-items: center;
                    gap: 10px;
                    background: rgba(255,255,255,0.15);
                    backdrop-filter: blur(10px);
                    padding: 8px 20px;
                    border-radius: 50px;
                    font-weight: 700;
                    color: #ffca28;
                    margin-bottom: 25px;
                    border: 1px solid rgba(255,255,255,0.2);
                }
                .hero-logo-small {
                    height: 24px;
                    border-radius: 50%;
                }
                .hero-subtitle-large {
                    font-size: 3.5rem;
                    line-height: 1.1;
                    margin-bottom: 20px;
                    font-weight: 900;
                    text-shadow: 0 4px 15px rgba(0,0,0,0.3);
                }
                .hero-description-alt {
                    font-size: 1.25rem;
                    opacity: 0.9;
                    margin-bottom: 40px;
                    max-width: 700px;
                    margin-inline: auto;
                }
                .hero-btns-centered {
                    display: flex;
                    gap: 20px;
                    justify-content: center;
                }
                .btn-order-now {
                    background: #4caf50;
                    color: white;
                    padding: 15px 40px;
                    border-radius: 50px;
                    text-decoration: none;
                    font-weight: 800;
                    font-size: 1.1rem;
                    box-shadow: 0 10px 20px rgba(76, 175, 80, 0.3);
                    transition: transform 0.3s;
                }
                .btn-order-now:hover { transform: translateY(-5px); }
                .btn-learn-more {
                    background: transparent;
                    color: white;
                    padding: 15px 40px;
                    border-radius: 50px;
                    text-decoration: none;
                    font-weight: 700;
                    border: 2px solid white;
                    transition: all 0.3s;
                }
                .btn-learn-more:hover { background: white; color: #2d5a27; }

                @media (max-width: 768px) {
                    .hero-subtitle-large { font-size: 2.2rem; }
                    .hero-btns-centered { flex-direction: column; gap: 15px; }
                    .btn-order-now, .btn-learn-more { width: 100%; text-align: center; }
                }
            `}</style>
        </section>
    );
};

export default Hero;
