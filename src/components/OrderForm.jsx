import { useState } from 'react';
import { saveOrder } from '../utils/db';

export default function OrderForm() {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        address: '',
        quantity: 1,
        location: 'inside'
    });

    const SEED_PRICE = 370;
    const DELIVERY_FEES = {
        inside: 80,
        outside: 110
    };

    const productTotal = formData.quantity * SEED_PRICE;
    const deliveryCharge = DELIVERY_FEES[formData.location];
    const grandTotal = productTotal + deliveryCharge;

    const handleSubmit = (e) => {
        e.preventDefault();

        const orderData = {
            ...formData,
            productTotal,
            deliveryCharge,
            grandTotal,
            product: 'Hybrid Sorghum Sudan Grass Seeds',
            date: new Date().toLocaleString()
        };

        (async () => {
            try {
                await saveOrder(orderData);
            } catch (error) {
                console.error("Order save temporary error", error);
            }
        })();

        const whatsappMessage = `*নতুন অর্ডার*\n\n` +
            `নাম: ${formData.name}\n` +
            `ফোন: ${formData.phone}\n` +
            `ঠিকানা: ${formData.address}\n` +
            `পরিমাণ: ${formData.quantity} কেজি\n` +
            `লোকেশন: ${formData.location === 'inside' ? 'ঢাকার ভিতরে' : 'ঢাকার বাইরে'}\n` +
            `ডেলিভারি চার্জ: ${deliveryCharge} টাকা\n` +
            `সর্বমোট: ${grandTotal} টাকা`;

        const whatsappUrl = `https://wa.me/8801784292432?text=${encodeURIComponent(whatsappMessage)}`;
        window.location.href = whatsappUrl;
    };

    return (
        <section id="order" className="order-section section-padding">
            <div className="container">
                <div className="order-header text-center animate-fade">
                    <h2 className="section-title">অর্ডার ফর্ম পূরণ করুন</h2>
                    <p className="section-subtitle">নিচের সঠিক তথ্য দিয়ে এখনই আপনার অর্ডারটি কনফার্ম করুন।</p>
                </div>

                <div className="order-content-wrapper">
                    <div className="order-form-container">
                        <form className="order-main-form" onSubmit={handleSubmit}>
                            <h3 className="form-card-title">আপনার তথ্য</h3>
                            <div className="form-group">
                                <label>আপনার নাম <span className="req">*</span></label>
                                <input
                                    type="text" required placeholder="নাম লিখুন"
                                    value={formData.name}
                                    onChange={e => setFormData({ ...formData, name: e.target.value })}
                                />
                            </div>
                            <div className="form-group">
                                <label>মোবাইল নাম্বার <span className="req">*</span></label>
                                <input
                                    type="tel" required placeholder="০১XXXXXXXXX"
                                    value={formData.phone}
                                    onChange={e => setFormData({ ...formData, phone: e.target.value })}
                                />
                            </div>
                            <div className="form-group">
                                <label>বিস্তারিত ঠিকানা <span className="req">*</span></label>
                                <textarea
                                    required placeholder="গ্রাম, থানা, জেলা"
                                    value={formData.address}
                                    onChange={e => setFormData({ ...formData, address: e.target.value })}
                                ></textarea>
                            </div>
                            <div className="form-row">
                                <div className="form-group half">
                                    <label>পরিমাণ (কেজি)</label>
                                    <div className="qty-input-wrapper">
                                        <input
                                            type="number" min="1" required
                                            value={formData.quantity}
                                            onChange={e => setFormData({ ...formData, quantity: parseInt(e.target.value) || 1 })}
                                        />
                                        <span className="qty-unit">কেজি</span>
                                    </div>
                                </div>
                                <div className="form-group half">
                                    <label>লোকেশন</label>
                                    <select
                                        value={formData.location}
                                        onChange={e => setFormData({ ...formData, location: e.target.value })}
                                    >
                                        <option value="inside">ঢাকার ভিতরে (৮০৳)</option>
                                        <option value="outside">ঢাকার বাইরে (১১০৳)</option>
                                    </select>
                                </div>
                            </div>
                            <button type="submit" className="btn-order-submit">
                                <span className="btn-icon">📦</span> অর্ডার কনফার্ম করুন
                            </button>
                        </form>
                    </div>

                    <div className="order-summary-container">
                        <div className="order-summary-card-modern">
                            <div className="summary-header">
                                <span className="summary-icon">🧾</span>
                                <h3 className="summary-title">অর্ডার সামারি</h3>
                            </div>
                            <div className="summary-body">
                                <div className="summary-row">
                                    <span className="label">পণ্যের নাম</span>
                                    <span className="value">সুদান ঘাসের বীজ</span>
                                </div>
                                <div className="summary-row">
                                    <span className="label">মূল্য (১ কেজি)</span>
                                    <span className="value">৩৭০ টাকা</span>
                                </div>
                                <div className="summary-row">
                                    <span className="label">পরিমাণ</span>
                                    <span className="value highlight">{formData.quantity} কেজি</span>
                                </div>
                                <div className="summary-divider-modern"></div>
                                <div className="summary-row">
                                    <span className="label">মোট পণ্যের দাম</span>
                                    <span className="value">{productTotal} টাকা</span>
                                </div>
                                <div className="summary-row">
                                    <span className="label">ডেলিভারি চার্জ</span>
                                    <span className="value">{deliveryCharge} টাকা</span>
                                </div>
                                <div className="summary-total-modern">
                                    <span className="total-label">সর্বমোট মূল্য</span>
                                    <span className="total-amount">{grandTotal} <small>টাকা</small></span>
                                </div>
                            </div>
                            <div className="cod-badge-modern">
                                <span className="cod-icon">🚚</span>
                                <div className="cod-text">
                                    <strong>ক্যাশ অন ডেলিভারি</strong>
                                    <span>পণ্য হাতে পেয়ে টাকা পরিশোধ করুন</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
                .order-section {
                    background: #fdfaf5;
                    overflow: hidden;
                }
                .order-content-wrapper {
                    display: grid;
                    grid-template-columns: 1.1fr 0.9fr;
                    gap: 30px;
                    margin-top: 50px;
                    max-width: 1000px;
                    margin-left: auto;
                    margin-right: auto;
                }
                .order-main-form {
                    background: #fff;
                    padding: 40px;
                    border-radius: 30px;
                    box-shadow: 0 15px 40px rgba(0,0,0,0.05);
                }
                .form-card-title {
                    font-size: 1.5rem;
                    color: #2d5a27;
                    margin-bottom: 25px;
                    font-weight: 700;
                    border-left: 5px solid #4caf50;
                    padding-left: 15px;
                }
                .form-group {
                    margin-bottom: 20px;
                }
                .form-group label {
                    display: block;
                    margin-bottom: 8px;
                    font-weight: 600;
                    color: #444;
                    font-size: 0.95rem;
                }
                .req { color: #f44336; }
                .form-group input, .form-group textarea, .form-group select {
                    width: 100%;
                    padding: 15px;
                    border: 2px solid #f0f0f0;
                    border-radius: 15px;
                    font-size: 1rem;
                    transition: all 0.3s;
                    background: #fcfcfc;
                }
                .form-group input:focus, .form-group textarea:focus, .form-group select:focus {
                    border-color: #4caf50;
                    background: #fff;
                    outline: none;
                }
                .qty-input-wrapper {
                    position: relative;
                }
                .qty-unit {
                    position: absolute;
                    right: 15px;
                    top: 50%;
                    transform: translateY(-50%);
                    color: #888;
                    font-weight: 600;
                }
                .form-row {
                    display: flex;
                    gap: 20px;
                }
                .half { flex: 1; }
                .btn-order-submit {
                    width: 100%;
                    background: #2d5a27;
                    color: white;
                    border: none;
                    padding: 18px;
                    border-radius: 50px;
                    font-size: 1.15rem;
                    font-weight: 800;
                    cursor: pointer;
                    margin-top: 10px;
                    transition: 0.3s;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: 10px;
                    box-shadow: 0 10px 20px rgba(45, 90, 39, 0.2);
                }
                .btn-order-submit:hover {
                    background: #4caf50;
                    transform: translateY(-3px);
                    box-shadow: 0 15px 30px rgba(76, 175, 80, 0.3);
                }

                /* Summary Card */
                .order-summary-card-modern {
                    background: #2d5a27;
                    color: #fff;
                    padding: 40px;
                    border-radius: 30px;
                    box-shadow: 0 20px 50px rgba(45, 90, 39, 0.2);
                    position: sticky;
                    top: 120px;
                }
                .summary-header {
                    display: flex;
                    align-items: center;
                    gap: 12px;
                    margin-bottom: 25px;
                    padding-bottom: 15px;
                    border-bottom: 1px solid rgba(255,255,255,0.1);
                }
                .summary-icon { font-size: 1.8rem; }
                .summary-title { font-size: 1.6rem; margin: 0; font-weight: 800; }
                .summary-body { margin-bottom: 25px; }
                .summary-row {
                    display: flex;
                    justify-content: space-between;
                    margin-bottom: 15px;
                    font-size: 1.05rem;
                }
                .summary-row .label { opacity: 0.8; }
                .summary-row .value { font-weight: 600; }
                .summary-row .value.highlight { color: #ffca28; font-size: 1.2rem; }
                .summary-divider-modern {
                    height: 1px;
                    background: rgba(255,255,255,0.1);
                    margin: 20px 0;
                }
                .summary-total-modern {
                    display: flex;
                    justify-content: space-between;
                    align-items: flex-end;
                    margin-top: 10px;
                }
                .total-label { font-size: 1.2rem; font-weight: 700; color: #ffca28; }
                .total-amount { font-size: 2.2rem; font-weight: 900; line-height: 1; }
                .total-amount small { font-size: 1rem; font-weight: 600; }
                
                .cod-badge-modern {
                    background: rgba(255,255,255,0.08);
                    padding: 20px;
                    border-radius: 20px;
                    display: flex;
                    gap: 15px;
                    align-items: center;
                    border: 1px dashed rgba(255,255,255,0.2);
                }
                .cod-icon { font-size: 1.5rem; }
                .cod-text { display: flex; flex-direction: column; }
                .cod-text strong { font-size: 0.95rem; }
                .cod-text span { font-size: 0.8rem; opacity: 0.7; }

                @media (max-width: 992px) {
                    .order-content-wrapper { grid-template-columns: 1fr; }
                    .order-summary-card-modern { position: static; }
                }

                @media (max-width: 600px) {
                    .order-main-form, .order-summary-card-modern {
                        padding: 25px 20px;
                        border-radius: 20px;
                    }
                    .form-row { flex-direction: column; gap: 0; }
                    .form-card-title { font-size: 1.25rem; }
                    .summary-title { font-size: 1.4rem; }
                    .total-amount { font-size: 1.8rem; }
                    .section-title { font-size: 1.8rem; }
                }
            `}</style>
        </section>
    );
}
