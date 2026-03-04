import React from 'react';
import rev1 from '../assets/review1.jpg';
import rev2 from '../assets/review2.jpg';

const Reviews = () => {
    const reviews = [
        { id: 1, img: rev1, name: "মো: আব্দুল কাদির", text: "বীজের মান নিয়ে আমি খুবই সন্তুষ্ট। খুব দ্রুত ঘাস বড় হয়েছে।" },
        { id: 2, img: rev2, name: "সোহেল রানা", text: "খামারের জন্য সেরা ঘাস। গবাদিপশু খুব পছন্দ করে খাচ্ছে।" }
    ];

    return (
        <section id="reviews" className="reviews-section">
            <div className="container">
                <div className="section-header text-center animate-fade">
                    <h2 className="section-title">সফল খামারিদের মতামত</h2>
                    <p className="section-subtitle">আমাদের বীজের মান সম্পর্কে কাস্টমাররা যা বলছেন</p>
                </div>

                <div className="reviews-grid">
                    {reviews.map((rev) => (
                        <div key={rev.id} className="review-card-premium">
                            <div className="review-img-container">
                                <img src={rev.img} alt={`Review from ${rev.name}`} className="review-screenshot" />
                            </div>
                            <div className="review-info">
                                <div className="verified-badge">✓ Verified Buyer</div>
                                <h4>{rev.name}</h4>
                                <p>"{rev.text}"</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <style jsx>{`
                .reviews-section {
                    padding: 100px 0;
                    background: #f9f9f9;
                }
                .reviews-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
                    gap: 30px;
                    margin-top: 50px;
                }
                .review-card-premium {
                    background: white;
                    border-radius: 30px;
                    overflow: hidden;
                    box-shadow: 0 10px 30px rgba(0,0,0,0.05);
                    transition: 0.3s;
                }
                .review-card-premium:hover { transform: translateY(-10px); }
                
                .review-img-container {
                    width: 100%;
                    height: 500px;
                    background: #eee;
                    overflow: hidden;
                    border-bottom: 1px solid #eee;
                }
                .review-screenshot {
                    width: 100%;
                    height: 100%;
                    object-fit: contain;
                }
                .review-info { padding: 30px; }
                .verified-badge {
                    color: #4caf50;
                    font-size: 0.8rem;
                    font-weight: 700;
                    text-transform: uppercase;
                    margin-bottom: 10px;
                }
                .review-info h4 { margin-bottom: 10px; color: #2d5a27; }
                .review-info p { color: #666; font-style: italic; }

                @media (max-width: 480px) {
                    .reviews-grid { grid-template-columns: 1fr; }
                    .review-img-container { height: 350px; }
                }
            `}</style>
        </section>
    );
};

export default Reviews;
