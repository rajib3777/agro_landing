import React, { useEffect, useState } from 'react';
import { subscribeToOrders } from '../utils/db';
import { ref, remove } from "firebase/database";
import { db, auth } from '../firebase';
import {
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged
} from 'firebase/auth';

const OrderDashboard = () => {
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);
    const [dbError, setDbError] = useState(null);

    // Auth state
    const [user, setUser] = useState(null);
    const [authLoading, setAuthLoading] = useState(true);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loginError, setLoginError] = useState('');
    const [loginLoading, setLoginLoading] = useState(false);

    // Listen for auth state changes
    useEffect(() => {
        const unsub = onAuthStateChanged(auth, (u) => {
            setUser(u);
            setAuthLoading(false);
        });
        return () => unsub();
    }, []);

    // Subscribe to orders only when logged in
    useEffect(() => {
        if (!user) return;
        setLoading(true);
        const unsubscribe = subscribeToOrders(
            (data, error) => {
                setOrders([...data].reverse());
                setLoading(false);
                if (error) setDbError(error.message || 'Firebase connection failed');
                else setDbError(null);
            },
            (error) => {
                setLoading(false);
                setDbError(error.message || 'Firebase connection failed');
            }
        );
        return () => unsubscribe();
    }, [user]);

    const handleLogin = async (e) => {
        e.preventDefault();
        setLoginError('');
        setLoginLoading(true);
        try {
            await signInWithEmailAndPassword(auth, email, password);
        } catch (err) {
            setLoginError('ইমেইল বা পাসওয়ার্ড ভুল। আবার চেষ্টা করুন।');
        } finally {
            setLoginLoading(false);
        }
    };

    const handleLogout = async () => {
        await signOut(auth);
        setOrders([]);
    };

    const clearOrders = async () => {
        if (window.confirm('আপনি কি সব অর্ডারের তালিকা মুছে ফেলতে চান?')) {
            try {
                await remove(ref(db, 'orders'));
                setOrders([]);
            } catch (error) {
                alert('মুছতে পারেনি। Firebase Rules চেক করুন।');
                console.error("Clear orders error:", error);
            }
        }
    };

    // ── Auth checking ──
    if (authLoading) {
        return (
            <div className="auth-loading-screen">
                <div className="spinner"></div>
                <p>যাচাই করা হচ্ছে...</p>
                <style>{`
                    .auth-loading-screen {
                        min-height: 60vh;
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        justify-content: center;
                        color: #888;
                        gap: 16px;
                    }
                    .spinner {
                        width: 44px; height: 44px;
                        border: 4px solid #e8f5e9;
                        border-top-color: #4caf50;
                        border-radius: 50%;
                        animation: spin 0.8s linear infinite;
                    }
                    @keyframes spin { to { transform: rotate(360deg); } }
                `}</style>
            </div>
        );
    }

    // ── Login Screen ──
    if (!user) {
        return (
            <div className="login-screen">
                <div className="login-card">
                    <div className="login-logo">🌾</div>
                    <h2 className="login-title">Admin Login</h2>
                    <p className="login-subtitle">অর্ডার দেখতে লগইন করুন</p>

                    <form onSubmit={handleLogin} className="login-form">
                        <div className="login-field">
                            <label>ইমেইল</label>
                            <input
                                type="email"
                                required
                                placeholder="admin@example.com"
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                                autoComplete="email"
                            />
                        </div>
                        <div className="login-field">
                            <label>পাসওয়ার্ড</label>
                            <input
                                type="password"
                                required
                                placeholder="••••••••"
                                value={password}
                                onChange={e => setPassword(e.target.value)}
                                autoComplete="current-password"
                            />
                        </div>

                        {loginError && (
                            <div className="login-error">⚠️ {loginError}</div>
                        )}

                        <button type="submit" className="btn-login" disabled={loginLoading}>
                            {loginLoading ? 'লগইন হচ্ছে...' : '🔐 লগইন করুন'}
                        </button>
                    </form>
                </div>

                <style>{`
                    .login-screen {
                        min-height: 80vh;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        padding: 40px 20px;
                        background: #fdfaf5;
                    }
                    .login-card {
                        background: #fff;
                        border-radius: 30px;
                        padding: 50px 44px;
                        box-shadow: 0 20px 60px rgba(45,90,39,0.12);
                        width: 100%;
                        max-width: 420px;
                        text-align: center;
                    }
                    .login-logo { font-size: 3.5rem; margin-bottom: 10px; }
                    .login-title {
                        color: #2d5a27;
                        font-size: 1.8rem;
                        font-weight: 800;
                        margin: 0 0 6px;
                    }
                    .login-subtitle {
                        color: #888;
                        font-size: 0.95rem;
                        margin: 0 0 32px;
                    }
                    .login-form { text-align: left; }
                    .login-field { margin-bottom: 20px; }
                    .login-field label {
                        display: block;
                        font-weight: 600;
                        color: #444;
                        margin-bottom: 8px;
                        font-size: 0.95rem;
                    }
                    .login-field input {
                        width: 100%;
                        padding: 14px 16px;
                        border: 2px solid #f0f0f0;
                        border-radius: 14px;
                        font-size: 1rem;
                        transition: border-color 0.25s;
                        background: #fcfcfc;
                        box-sizing: border-box;
                    }
                    .login-field input:focus {
                        border-color: #4caf50;
                        outline: none;
                        background: #fff;
                    }
                    .login-error {
                        background: #fff3e0;
                        border: 1px solid #ff9800;
                        color: #e65100;
                        padding: 10px 14px;
                        border-radius: 12px;
                        font-size: 0.88rem;
                        margin-bottom: 16px;
                    }
                    .btn-login {
                        width: 100%;
                        background: #2d5a27;
                        color: #fff;
                        border: none;
                        padding: 16px;
                        border-radius: 50px;
                        font-size: 1.05rem;
                        font-weight: 700;
                        cursor: pointer;
                        transition: 0.3s;
                        margin-top: 4px;
                    }
                    .btn-login:hover:not(:disabled) {
                        background: #4caf50;
                        transform: translateY(-2px);
                        box-shadow: 0 10px 24px rgba(76,175,80,0.3);
                    }
                    .btn-login:disabled { opacity: 0.6; cursor: not-allowed; }
                `}</style>
            </div>
        );
    }

    // ── Dashboard (logged in) ──
    return (
        <div className="container section-padding animate-fade">
            <div className="admin-dashboard-card">
                <div className="dashboard-header">
                    <div className="header-left">
                        <span className="dash-icon">📊</span>
                        <div>
                            <h2>অর্ডার তালিকা</h2>
                            <span className="logged-in-as">✅ {user.email}</span>
                        </div>
                    </div>
                    <div className="header-actions">
                        <button onClick={clearOrders} className="btn-clear">🗑️ মুছুন</button>
                        <button onClick={handleLogout} className="btn-logout">🚪 লগআউট</button>
                    </div>
                </div>

                {/* Firebase Error Banner */}
                {dbError && (
                    <div className="error-banner">
                        <div className="error-icon">⚠️</div>
                        <div className="error-body">
                            <strong>Firebase DB সংযোগ ব্যর্থ!</strong>
                            <p>Firebase Console → Realtime Database → Rules-এ নিচের rules সেট করুন:</p>
                            <pre>{`{
  "rules": {
    "orders": {
      ".read": "auth != null",
      ".write": true
    }
  }
}`}</pre>
                            <span className="error-note">নিচের ডেটা local storage থেকে দেখানো হচ্ছে।</span>
                        </div>
                    </div>
                )}

                {/* Orders count badge */}
                {!loading && (
                    <div className="orders-count-bar">
                        মোট <strong>{orders.length}টি</strong> অর্ডার পাওয়া গেছে
                    </div>
                )}

                {/* Loading State */}
                {loading ? (
                    <div className="loading-state">
                        <div className="spinner"></div>
                        <p>অর্ডার লোড হচ্ছে...</p>
                    </div>
                ) : (
                    <div className="table-wrapper">
                        {orders.length > 0 ? (
                            <table className="orders-table">
                                <thead>
                                    <tr>
                                        <th>#</th>
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
                                            <td className="row-num">{i + 1}</td>
                                            <td>{o.date || 'N/A'}</td>
                                            <td className="bold">{o.name}</td>
                                            <td className="phone">
                                                <a href={`tel:${o.phone}`}>{o.phone}</a>
                                            </td>
                                            <td className="qty-cell">{o.quantity} কেজি</td>
                                            <td className="address-cell">{o.address}</td>
                                            <td className="total-cell">{o.grandTotal}৳</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        ) : (
                            <div className="no-orders">
                                <span className="no-orders-icon">📭</span>
                                <p>এখনো কোনো অর্ডার আসেনি।</p>
                            </div>
                        )}
                    </div>
                )}
            </div>

            <style>{`
                .admin-dashboard-card {
                    background: #fff;
                    border-radius: 30px;
                    padding: 40px;
                    box-shadow: 0 20px 50px rgba(0,0,0,0.08);
                }
                .dashboard-header {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    margin-bottom: 30px;
                    padding-bottom: 20px;
                    border-bottom: 2px solid #f0f0f0;
                    flex-wrap: wrap;
                    gap: 16px;
                }
                .header-left { display: flex; align-items: center; gap: 15px; }
                .dash-icon { font-size: 2.2rem; }
                .dashboard-header h2 { color: #2d5a27; font-weight: 800; margin: 0 0 2px; }
                .logged-in-as { font-size: 0.82rem; color: #4caf50; font-weight: 600; }
                .header-actions { display: flex; gap: 10px; flex-wrap: wrap; }

                .btn-clear {
                    background: #ffebee; color: #d32f2f;
                    border: none; padding: 8px 18px;
                    border-radius: 50px; font-weight: 600; cursor: pointer; transition: 0.25s;
                }
                .btn-clear:hover { background: #d32f2f; color: #fff; }
                .btn-logout {
                    background: #f5f5f5; color: #555;
                    border: none; padding: 8px 18px;
                    border-radius: 50px; font-weight: 600; cursor: pointer; transition: 0.25s;
                }
                .btn-logout:hover { background: #2d5a27; color: #fff; }

                /* Error Banner */
                .error-banner {
                    display: flex; gap: 15px;
                    background: #fff3e0; border: 1.5px solid #ff9800;
                    border-radius: 16px; padding: 20px 25px;
                    margin-bottom: 25px; align-items: flex-start;
                }
                .error-icon { font-size: 1.8rem; flex-shrink: 0; }
                .error-body strong { color: #e65100; font-size: 1rem; display: block; margin-bottom: 6px; }
                .error-body p { color: #555; font-size: 0.88rem; margin: 0 0 8px; }
                .error-body pre {
                    background: #1e1e1e; color: #80cbc4;
                    padding: 12px 16px; border-radius: 10px;
                    font-size: 0.82rem; margin: 0 0 8px; overflow-x: auto;
                }
                .error-note { font-size: 0.82rem; color: #888; font-style: italic; }

                /* Orders count */
                .orders-count-bar {
                    background: #e8f5e9; color: #2d5a27;
                    padding: 10px 20px; border-radius: 12px;
                    font-size: 0.92rem; margin-bottom: 20px;
                }

                /* Loading */
                .loading-state {
                    text-align: center; padding: 60px 20px; color: #888;
                }
                .spinner {
                    width: 40px; height: 40px;
                    border: 4px solid #e8f5e9; border-top-color: #4caf50;
                    border-radius: 50%;
                    animation: spin 0.8s linear infinite;
                    margin: 0 auto 15px;
                }
                @keyframes spin { to { transform: rotate(360deg); } }

                /* Table */
                .table-wrapper {
                    overflow-x: auto; border-radius: 15px; border: 1px solid #eee;
                }
                .orders-table { width: 100%; border-collapse: collapse; text-align: left; }
                .orders-table th {
                    background: #f9f9f9; padding: 14px 15px;
                    font-weight: 700; color: #555; border-bottom: 2px solid #eee;
                    white-space: nowrap;
                }
                .orders-table td {
                    padding: 13px 15px; border-bottom: 1px solid #f0f0f0; font-size: 0.93rem;
                }
                .orders-table tr:last-child td { border-bottom: none; }
                .orders-table tr:hover { background: #fdfaf5; }
                .row-num { color: #bbb; font-weight: 600; font-size: 0.85rem; }
                .bold { font-weight: 700; color: #2d5a27; }
                .phone a { font-family: monospace; font-weight: 600; color: #1976d2; text-decoration: none; }
                .phone a:hover { text-decoration: underline; }
                .qty-cell { color: #4caf50; font-weight: 800; white-space: nowrap; }
                .total-cell { font-weight: 900; color: #2d5a27; white-space: nowrap; }
                .address-cell { max-width: 220px; font-size: 0.88rem; color: #555; }

                .no-orders {
                    text-align: center; padding: 60px; color: #aaa; font-style: italic;
                }
                .no-orders-icon { font-size: 3rem; display: block; margin-bottom: 12px; }

                @media (max-width: 768px) {
                    .admin-dashboard-card { padding: 20px; border-radius: 20px; }
                    .dashboard-header { flex-direction: column; align-items: flex-start; }
                    .error-banner { flex-direction: column; }
                }
            `}</style>
        </div>
    );
};

export default OrderDashboard;
