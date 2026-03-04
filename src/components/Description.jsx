import React from 'react';
import benefitFarm from '../assets/desc_farm.jpg';
import benefitGrass from '../assets/desc_grass.jpg';
import benefitField from '../assets/desc_field.jpg';

const Description = () => {
    return (
        <section id="description" className="description-section">
            <div className="container">
                {/* Introduction */}
                <div className="intro-card animate-fade">
                    <h2 className="description-title">কেন হাইব্রিড সরগম সুদান ঘাস সেরা?</h2>
                    <p className="description-text">
                        হাইব্রিড সরগম সুদান ঘাস হলো গবাদিপশুর জন্য একটি জনপ্রিয় সবুজ খাদ্য (Green Fodder) ফসল। এটি দ্রুত বেড়ে ওঠে, ঘাস ঘন হয় এবং সঠিক ব্যবস্থাপনায় একই জমি থেকে একাধিকবার কাটিং নেওয়া যায়। দুধাল গরু, ষাঁড়, ছাগল, মহিষ—সব ধরনের খামারের জন্য এটি বেশ কার্যকর।
                    </p>
                </div>

                {/* Image 1: Lush Close-up */}
                <div className="section-visual-main animate-slide-up">
                    <img src={benefitGrass} alt="Lush Grass Close-up" loading="lazy" />
                    <div className="visual-tag">উন্নত মানের হাইব্রিড বীজ</div>
                </div>

                {/* Features Grid */}
                <div className="info-grid">
                    <div className="info-card">
                        <div className="info-icon">🌿</div>
                        <h3>খামারিদের পছন্দের কারণ</h3>
                        <ul>
                            <li>দ্রুত অঙ্কুরোদগম ও দ্রুত বৃদ্ধি—কম সময়েই জমি সবুজ হয়</li>
                            <li>ঘন ঘাস ও ভালো পুনরায় গজানোর ক্ষমতা—কাটার পর আবার দ্রুত বাড়ে</li>
                            <li>খাবার হিসেবে গ্রহণযোগ্যতা (palatability) ভালো—গবাদিপশু সহজে খায়</li>
                            <li>परिচর্য তুলনামূলক সহজ—সঠিক সময়ে পানি ও কাটিং দিলেই ভালো ফলন</li>
                            <li>সাইলেজ/শুকনা ঘাস (Hay) তৈরির উপযোগী—ফডার সংরক্ষণে সুবিধা</li>
                        </ul>
                    </div>

                    <div className="info-card highlight">
                        <div className="info-icon">⭐</div>
                        <h3>প্রধান বৈশিষ্ট্য (Key Features)</h3>
                        <ul>
                            <li><strong>Warm-season fodder:</strong> গরম/আর্দ্র আবহাওয়ায় ভালো বেড়ে ওঠে</li>
                            <li><strong>দ্রুত গ্রোথ হ্যাবিট:</strong> অল্প সময়েই কাটিং উপযোগী উচ্চতায় পৌঁছায়</li>
                            <li><strong>হাইব্রিড শক্তি (Vigour):</strong> গাছ শক্ত হয়, ঘাস ঘন হয়</li>
                            <li><strong>বহু কাটিং সম্ভাবনা:</strong> সঠিক স্টাবল রেখে কাটলে পুনরায় দ্রুত গজায়</li>
                            <li><strong>ফডার প্ল্যানিং:</strong> নিয়মিত সবুজ ঘাস সরবরাহে সহায়তা করে</li>
                        </ul>
                    </div>
                </div>

                {/* Image 2: Wide Field */}
                <div className="section-visual-wide animate-slide-up">
                    <img src={benefitField} alt="Dense Grass Field" loading="lazy" />
                </div>

                {/* Benefits Section */}
                <div className="benefits-box section-margin">
                    <h3>গবাদিপশুর জন্য উপকারিতা</h3>
                    <div className="benefits-grid">
                        <div className="benefit-item">সবুজ খাদ্যের ধারাবাহিক সরবরাহ নিশ্চিত করে</div>
                        <div className="benefit-item">দুধাল গরুর ক্ষেত্রে সবুজ ঘাসের ঘাটতি কমায়</div>
                        <div className="benefit-item">খামারের ফিড কস্ট কমাতে অত্যন্ত সহায়ক</div>
                        <div className="benefit-item">ফডার মজুদ/পরিকল্পনা সহজ করে তোলে</div>
                    </div>

                    {/* Image 3: Farm Result */}
                    <div className="farm-result-visual animate-slide-up">
                        <img src={benefitFarm} alt="Cows eating grass" loading="lazy" />
                        <p className="visual-note">সুস্থ ও সবল গবাদিপশুর জন্য নিয়মিত সবুজ ঘাস</p>
                    </div>

                    <p className="note-text" style={{ marginTop: '30px' }}>
                        <span className="badge-note">নোট</span> এটি সম্পূর্ণ কনসেন্ট্রেট ফিডের বিকল্প নয়—খামারের প্রয়োজন অনুযায়ী খড়/কনসেন্ট্রেট/মিনারেল মিক্স ইত্যাদির সাথে ব্যালান্স করে খাওয়ানো ভালো।
                    </p>
                </div>

                {/* Warning/Safety Section */}
                <div className="warning-card">
                    <h3>⚠️ খাওয়ানোর নিয়ম ও সতর্কতা (জরুরি)</h3>
                    <p>সর্গম জাতের ঘাসে কিছু পরিস্থিতিতে প্রুসিক অ্যাসিড বা নাইট্রেট বাড়তে পারে, তাই এই সতর্কতাগুলো মানুন:</p>
                    <ul>
                        <li>খুব ছোট বা কচি গাছ (কম উচ্চতা) পশুকে না খাওয়ানো ভালো।</li>
                        <li>দীর্ঘ খরা বা স্ট্রেসের পর হঠাৎ নতুন কচি গজানো অংশ সরাসরি বেশি খাওয়াবেন না।</li>
                        <li>অন্য ঘাস বা খড়ের সাথে মিশিয়ে খাওয়ান। সন্দেহ থাকলে কৃষি পরামর্শ নিন।</li>
                    </ul>
                </div>
            </div>

            <style jsx>{`
                .description-section {
                    padding: 80px 0;
                    background: #fdfaf5;
                    color: #333;
                }
                .description-title {
                    font-size: 2.5rem;
                    color: #2d5a27;
                    margin-bottom: 20px;
                    font-weight: 800;
                    text-align: center;
                }
                .description-text {
                    font-size: 1.1rem;
                    line-height: 1.8;
                    text-align: center;
                    max-width: 900px;
                    margin: 0 auto 30px;
                }
                .section-visual-main {
                    margin: 0 auto 50px;
                    border-radius: 30px;
                    overflow: hidden;
                    height: 450px;
                    max-width: 900px;
                    position: relative;
                    box-shadow: 0 20px 40px rgba(0,0,0,0.1);
                }
                .section-visual-main img { width: 100%; height: 100%; object-fit: cover; }
                .visual-tag {
                    position: absolute;
                    top: 20px;
                    right: 20px;
                    background: #4caf50;
                    color: white;
                    padding: 8px 15px;
                    border-radius: 10px;
                    font-weight: 800;
                    font-size: 0.85rem;
                }
                .section-visual-wide {
                    margin: 40px auto 60px;
                    border-radius: 30px;
                    overflow: hidden;
                    height: 380px;
                    max-width: 950px;
                    box-shadow: 0 15px 30px rgba(0,0,0,0.08);
                }
                .section-visual-wide img { width: 100%; height: 100%; object-fit: cover; }
                
                .farm-result-visual {
                    margin: 30px auto;
                    padding: 10px;
                    background: #fff;
                    border-radius: 20px;
                    max-width: 850px;
                    box-shadow: 0 5px 15px rgba(0,0,0,0.05);
                }
                .farm-result-visual img { width: 100%; height: 380px; object-fit: cover; border-radius: 15px; }
                .visual-note { margin-top: 10px; font-weight: 700; color: #2d5a27; }

                .info-grid {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 30px;
                    margin-bottom: 50px;
                }
                .info-card {
                    background: #fff;
                    padding: 40px;
                    border-radius: 30px;
                    box-shadow: 0 10px 30px rgba(0,0,0,0.05);
                }
                .info-card.highlight { background: #2d5a27; color: #fff; }
                .info-card h3 { font-size: 1.5rem; margin-bottom: 20px; border-bottom: 2px solid rgba(0,0,0,0.05); padding-bottom: 10px; }
                .info-card.highlight h3 { border-color: rgba(255,255,255,0.1); color: #ffca28; }
                .info-card ul { list-style: none; padding: 0; }
                .info-card li { margin-bottom: 12px; padding-left: 20px; position: relative; }
                .info-card li::before { content: '✓'; position: absolute; left: 0; color: #4caf50; font-weight: bold; }
                .info-card.highlight li::before { color: #ffca28; }
                .info-icon { font-size: 2.5rem; margin-bottom: 15px; }

                .benefits-box {
                    background: #e8f5e9;
                    padding: 40px;
                    border-radius: 30px;
                    text-align: center;
                }
                .benefits-box h3 { color: #2d5a27; margin-bottom: 30px; font-size: 1.8rem; }
                .benefits-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
                    gap: 20px;
                    margin-bottom: 30px;
                }
                .benefit-item {
                    background: #fff;
                    padding: 20px;
                    border-radius: 15px;
                    font-weight: 600;
                    color: #388e3c;
                    box-shadow: 0 5px 15px rgba(0,0,0,0.03);
                }
                .note-text { font-style: italic; color: #666; font-size: 0.95rem; }
                .badge-note {
                    background: #ffca28;
                    color: #000;
                    padding: 2px 10px;
                    border-radius: 5px;
                    margin-right: 10px;
                    font-style: normal;
                    font-weight: 900;
                }

                .warning-card {
                    background: #fff3e0;
                    border-left: 8px solid #ff9800;
                    padding: 40px;
                    border-radius: 0 30px 30px 0;
                    margin-top: 50px;
                }
                .warning-card h3 { color: #e65100; margin-bottom: 20px; }
                .warning-card li { margin-bottom: 10px; font-weight: 500; }

                .section-margin { margin-top: 80px; }

                @media (max-width: 768px) {
                    .info-grid { grid-template-columns: 1fr; }
                    .description-title { font-size: 1.8rem; }
                    .section-visual-main { height: 250px; }
                    .section-visual-wide { height: 200px; margin: 30px 0; }
                    .farm-result-visual img { height: 250px; }
                    .info-card { padding: 25px; }
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

export default Description;
