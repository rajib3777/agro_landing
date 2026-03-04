import React from 'react';

const FloatingHotline = () => {
    const phoneNumber = "01334642219"; // Updated number

    return (
        <div className="hotline-wrapper">
            <a href={`tel:${phoneNumber}`} className="hotline-btn" title="Call for Hotline">
                <div className="hotline-icon">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M6.62,10.79C8.06,13.62 10.38,15.94 13.21,17.38L15.41,15.18C15.69,14.9 16.08,14.82 16.43,14.93C17.55,15.3 18.75,15.5 20,15.5A1,1 0 0,1 21,16.5V20A1,1 0 0,1 20,21A17,17 0 0,1 3,4A1,1 0 0,1 4,3H7.5A1,1 0 0,1 8.5,4C8.5,5.25 8.7,6.45 9.07,7.57C9.18,7.92 9.1,8.31 8.82,8.59L6.62,10.79Z" />
                    </svg>
                </div>
                <div className="hotline-info">
                    <span className="label">হটলাইন</span>
                    <span className="number">কল করুন</span>
                </div>
            </a>

            <style jsx>{`
                .hotline-wrapper {
                    position: fixed;
                    bottom: 30px;
                    right: 30px;
                    z-index: 1000;
                    display: flex;
                    flex-direction: column;
                    align-items: flex-end;
                }
                .hotline-btn {
                    background: #2d5a27;
                    color: white;
                    text-decoration: none;
                    display: flex;
                    align-items: center;
                    gap: 8px;
                    padding: 8px 16px 8px 8px;
                    border-radius: 50px;
                    box-shadow: 0 8px 20px rgba(0,0,0,0.15);
                    transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
                    border: 1px solid rgba(255,255,255,0.1);
                }
                .hotline-btn:hover {
                    transform: scale(1.05) translateY(-3px);
                    background: #4caf50;
                    box-shadow: 0 12px 25px rgba(76, 175, 80, 0.3);
                }
                .hotline-icon {
                    background: #fff;
                    color: #2d5a27;
                    width: 32px;
                    height: 32px;
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    padding: 7px;
                }
                .hotline-info {
                    display: flex;
                    flex-direction: column;
                    line-height: 1.1;
                }
                .label {
                    font-size: 0.65rem;
                    opacity: 0.8;
                    font-weight: 500;
                }
                .number {
                    font-size: 0.85rem;
                    font-weight: 800;
                }

                @media (max-width: 768px) {
                    .hotline-wrapper {
                        bottom: 20px;
                        right: 20px;
                    }
                    .hotline-info { display: none; }
                    .hotline-btn { 
                        padding: 10px;
                        width: 50px;
                        height: 50px;
                        justify-content: center;
                        border-radius: 50%;
                    }
                    .hotline-icon {
                        width: 100%;
                        height: 100%;
                    }
                }

                @keyframes pulse {
                    0% { transform: scale(1); }
                    50% { transform: scale(1.05); }
                    100% { transform: scale(1); }
                }
                .hotline-btn {
                    animation: pulse 2s infinite ease-in-out;
                }
            `}</style>
        </div>
    );
};

export default FloatingHotline;
