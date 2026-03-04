export default function Reviews() {
    const reviews = [
        {
            id: 1,
            image: "/src/assets/review1.jpg",
            text: "দেখেন স্যার আপনাদের বীজ (Look sir, your seeds)",
            user: "জাহিদ হাসান"
        },
        {
            id: 2,
            image: "/src/assets/review2.jpg",
            text: "আমি আপনাদের কাছ থেকে বীজ নিয়েছি বীজ নিয়ে রোপন করেছি",
            user: "রিপন"
        }
    ];

    return (
        <section id="reviews" className="reviews-section section-padding">
            <div className="container">
                <h2 className="section-title text-center">গ্রাহকদের মতামত</h2>
                <p className="section-subtitle text-center">আমাদের থেকে বীজ নিয়ে যারা সফল হয়েছেন তাদের কিছু বাস্তব চিত্র।</p>

                <div className="review-grid">
                    {reviews.map(review => (
                        <div key={review.id} className="review-card-premium">
                            <div className="review-img-container">
                                <img src={review.image} alt="Customer Success" className="review-screenshot" />
                            </div>
                            <div className="review-content">
                                <div className="chat-bubble">
                                    <p>{review.text}</p>
                                </div>
                                <div className="user-info">
                                    <strong>{review.user}</strong>
                                    <span className="verified-badge">ভেরিফাইড কাস্টমার</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <style jsx>{`
        .review-img-container {
          height: 500px !important;
          background: #f0f0f0;
        }
        .review-screenshot {
          width: 100%;
          height: 100%;
          object-fit: contain !important;
        }
        .review-card-premium {
          background: #fff;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 15px 35px rgba(0,0,0,0.1);
        }
        .review-content {
          padding: 25px;
        }
        .section-title {
          font-size: 2.2rem;
          color: #2d5a27;
          margin-bottom: 10px;
          font-weight: 800;
        }
        .verified-badge {
            color: #4caf50;
            font-size: 0.85rem;
            display: block;
            margin-top: 5px;
        }
      `}</style>
        </section>
    );
}
