import React, { useEffect, useState } from 'react';
import { getOrders } from '../utils/db';

const OrderDashboard = () => {
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        setOrders(getOrders().reverse()); // Show latest orders first
    }, []);

    const clearOrders = () => {
        if (window.confirm('আপনি কি সব অর্ডারের তালিকা মুছে ফেলতে চান?')) {
            localStorage.removeItem('alif_agro_orders');
            setOrders([]);
        }
    };

    return (
        <div className="container section-padding animate-fade">
            <div className="admin-dashboard-card">
                <div className="dashboard-header">
                    <div className="header-left">
                        <span className="dash-icon">📊</span>
                        <h2>অর্ডার তালিকা (Admin)</h2>
                    </div>
                    <button onClick={clearOrders} className="btn-clear">মুছে ফেলুন</button>
                </div>

                <div className="table-wrapper">
                    {orders.length > 0 ? (
                        <table className="orders-table">
                            <thead>
                                <tr>
                                    <th>তারিখ</th>
                                    <th>নাম</th>
                                    <th>ফোন</th>
                                    <th>পরিমাণ</th>
                                    <th>ঠিকানা</th>
                                    <th>মোট টাকা</th>
                                </tr>
                            </thead>
                            <tbody>
                                {orders.map((o, i) => (
                                    <tr key={i}>
                                        <td>{o.date || 'N/A'}</td>
                                        <td className="bold">{o.name}</td>
                                        <td className="phone">{o.phone}</td>
                                        <td className="qty-cell">{o.quantity}kg</td>
                                        <td className="address-cell">{o.address}</td>
                                        <td className="total-cell">{o.grandTotal}৳</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    ) : (
                        <div className="no-orders">
                            <p>এখনো কোনো অর্ডার আসেনি।</p>
                        </div>
                    )}
                </div>
            </div>

            <style jsx>{`
                .admin-dashboard-card {
                    background: #fff;
                    border-radius: 30px;
                    padding: 40px;
                    box-shadow: 0 20px 50px rgba(0,0,0,0.1);
                }
                .dashboard-header {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    margin-bottom: 30px;
                    padding-bottom: 20px;
                    border-bottom: 2px solid #f0f0f0;
                }
                .header-left {
                    display: flex;
                    align-items: center;
                    gap: 15px;
                }
                .dash-icon { font-size: 2rem; }
                .dashboard-header h2 { color: #2d5a27; font-weight: 800; margin: 0; }
                
                .btn-clear {
                    background: #ffebee;
                    color: #d32f2f;
                    border: none;
                    padding: 8px 20px;
                    border-radius: 50px;
                    font-weight: 600;
                    cursor: pointer;
                    transition: 0.3s;
                }
                .btn-clear:hover { background: #d32f2f; color: #fff; }

                .table-wrapper {
                    overflow-x: auto;
                    border-radius: 15px;
                    border: 1px solid #eee;
                }
                .orders-table {
                    width: 100%;
                    border-collapse: collapse;
                    text-align: left;
                }
                .orders-table th {
                    background: #f9f9f9;
                    padding: 15px;
                    font-weight: 700;
                    color: #555;
                    border-bottom: 2px solid #eee;
                }
                .orders-table td {
                    padding: 15px;
                    border-bottom: 1px solid #f0f0f0;
                    font-size: 0.95rem;
                }
                .orders-table tr:hover { background: #fdfaf5; }
                .bold { font-weight: 700; color: #2d5a27; }
                .phone { font-family: monospace; font-weight: 600; }
                .qty-cell { color: #4caf50; font-weight: 800; }
                .total-cell { font-weight: 900; color: #000; }
                .address-cell { max-width: 250px; }
                
                .no-orders {
                    text-align: center;
                    padding: 50px;
                    color: #888;
                    font-style: italic;
                }

                @media (max-width: 768px) {
                    .admin-dashboard-card { padding: 20px; }
                    .dashboard-header { flex-direction: column; gap: 15px; align-items: flex-start; }
                }
            `}</style>
        </div>
    );
};

export default OrderDashboard;
