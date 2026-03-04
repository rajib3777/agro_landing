import React from 'react';

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

                {/* Features & Benefits Grid */}
                <div className="info-grid">
                    <div className="info-card">
                        <div className="info-icon">🌿</div>
                        <h3>খামারিদের পছন্দের কারণ</h3>
                        <ul>
                            <li>দ্রুত অঙ্কুরোদগম ও দ্রুত বৃদ্ধি—কম সময়েই জমি সবুজ হয়</li>
                            <li>ঘন ঘাস ও ভালো পুনরায় গজানোর ক্ষমতা—কাটার পর আবার দ্রুত বাড়ে</li>
                            <li>খাবার হিসেবে গ্রহণযোগ্যতা (palatability) ভালো—গবাদিপশু সহজে খায়</li>
                            <li>পরিচর্যা তুলনামূলক সহজ—সঠিক সময়ে পানি ও কাটিং দিলেই ভালো ফলন</li>
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

                {/* Benefits Section */}
                <div className="benefits-box section-margin">
                    <h3>গবাদিপশুর জন্য উপকারিতা</h3>
                    <div className="benefits-grid">
                        <div className="benefit-item">সবুজ খাদ্যের ধারাবাহিক সরবরাহ নিশ্চিত করে</div>
                        <div className="benefit-item">দুধাল গরুর ক্ষেত্রে সবুজ ঘাসের ঘাটতি কমায়</div>
                        <div className="benefit-item">খামারের ফিড কস্ট কমাতে অত্যন্ত সহায়ক</div>
                        <div className="benefit-item">ফডার মজুদ/পরিকল্পনা সহজ করে তোলে</div>
                    </div>
                    <p className="note-text">
                        <span className="badge-note">নোট</span> এটি সম্পূর্ণ কনসেন্ট্রেট ফিডের বিকল্প নয়—খামারের প্রয়োজন অনুযায়ী খড়/কনসেন্ট্রেট/মিনারেল মিক্স ইত্যাদির সাথে ব্যালান্স করে খাওয়ানো ভালো।
                    </p>
                </div>

                {/* Cultivation Guide */}
                <div className="guide-section section-margin">
                    <h2 className="text-center section-header-alt">চাষের সংক্ষিপ্ত নির্দেশনা (Cultivation Guide)</h2>
                    <div className="guide-steps">
                        <div className="step">
                            <span className="step-num">১</span>
                            <h4>জমি ও মাটি প্রস্তুতি</h4>
                            <p>জমি ঝুরঝুরে করে চাষ দিন, আগাছা পরিষ্কার রাখুন। পানি দাঁড়ায় এমন জমিতে ড্রেনেজ ব্যবস্থা রাখুন। বপনের আগে পচা গোবর/কম্পোস্ট দিলে বৃদ্ধি ভালো হয়।</p>
                        </div>
                        <div className="step">
                            <span className="step-num">২</span>
                            <h4>বপন পদ্ধতি</h4>
                            <p>লাইন করে বপন করলে পরিচর্যা সহজ হয়। বপনের গভীরতা হালকা মাটিতে অল্প গভীরে রাখা ভালো। বপনের পর হালকা সেচ দিলে অঙ্কুরোদগমে সুবিধা হয়।</p>
                        </div>
                        <div className="step">
                            <span className="step-num">৩</span>
                            <h4>পানি ও সেচ</h4>
                            <p>অঙ্কুরোদগমের সময় মাটি হালকা আর্দ্র রাখা দরকার। পরে আবহাওয়া ও মাটির ধরন অনুযায়ী সেচ দিন (অতিরিক্ত পানি জমে থাকলে ক্ষতি হতে পারে)।</p>
                        </div>
                        <div className="step">
                            <span className="step-num">৪</span>
                            <h4>সার ব্যবস্থাপনা</h4>
                            <p>মাটির উর্বরতা অনুযায়ী সার প্রয়োগ করুন। কাটা নেওয়ার পর টপ ড্রেসিং দিলে পুনরায় বৃদ্ধি ভালো হয়। সম্ভব হলে কৃষি অফিসের পরামর্শ নিন।</p>
                        </div>
                        <div className="step">
                            <span className="step-num">৫</span>
                            <h4>কাটিং (গুরুত্বপূর্ণ)</h4>
                            <p>গাছ পর্যাপ্ত বড় হলে প্রথম কাটিং নিন। একেবারে মাটির সাথে না কেটে কিছুটা স্টাবল (গোড়া) রেখে কাটলে দ্রুত পুনরায় গজায়।</p>
                        </div>
                    </div>
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
                    margin: 0 auto 50px;
                }
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
                .info-card.highlight {
                    background: #2d5a27;
                    color: #fff;
                }
                .info-card h3 {
                    font-size: 1.5rem;
                    margin-bottom: 20px;
                    border-bottom: 2px solid rgba(0,0,0,0.05);
                    padding-bottom: 10px;
                }
                .info-card.highlight h3 {
                    border-color: rgba(255,255,255,0.1);
                    color: #ffca28;
                }
                .info-card ul {
                    list-style: none;
                    padding: 0;
                }
                .info-card li {
                    margin-bottom: 12px;
                    padding-left: 20px;
                    position: relative;
                }
                .info-card li::before {
                    content: '✓';
                    position: absolute;
                    left: 0;
                    color: #4caf50;
                    font-weight: bold;
                }
                .info-card.highlight li::before {
                    color: #ffca28;
                }
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

                .section-header-alt { font-size: 2.2rem; color: #2d5a27; margin-bottom: 40px; font-weight: 800; }
                .guide-steps {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
                    gap: 25px;
                }
                .step {
                    background: #fff;
                    padding: 30px;
                    border-radius: 20px;
                    position: relative;
                    border: 1px solid #eee;
                }
                .step-num {
                    position: absolute;
                    top: -15px;
                    left: 20px;
                    background: #4caf50;
                    color: white;
                    width: 35px;
                    height: 35px;
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-weight: 900;
                }
                .step h4 { margin-bottom: 15px; color: #2d5a27; }
                .step p { font-size: 0.95rem; line-height: 1.6; color: #555; }

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
