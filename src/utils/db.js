import { db } from '../firebase';
import { ref, push, set, onValue, get } from "firebase/database";

export const saveOrder = async (order) => {
    try {
        const orderListRef = ref(db, 'orders');
        const newOrderRef = push(orderListRef);
        await set(newOrderRef, {
            ...order,
            id: Date.now(),
            date: new Date().toLocaleString('bn-BD')
        });
        // Also keep a local backup for session persistence if needed
        const orders = JSON.parse(localStorage.getItem('alif_agro_orders') || '[]');
        localStorage.setItem('alif_agro_orders', JSON.stringify([...orders, order]));
    } catch (error) {
        console.error("Firebase save error, falling back to local:", error);
        const orders = JSON.parse(localStorage.getItem('alif_agro_orders') || '[]');
        localStorage.setItem('alif_agro_orders', JSON.stringify([...orders, { ...order, id: Date.now() }]));
    }
};

export const getOrders = async () => {
    try {
        const orderRef = ref(db, 'orders');
        const snapshot = await get(orderRef);
        if (snapshot.exists()) {
            return Object.values(snapshot.val());
        }
        return [];
    } catch (error) {
        console.error("Firebase get error, falling back to local:", error);
        return JSON.parse(localStorage.getItem('alif_agro_orders') || '[]');
    }
};

// Real-time listener version
export const subscribeToOrders = (callback) => {
    const orderRef = ref(db, 'orders');
    return onValue(orderRef, (snapshot) => {
        const data = snapshot.val();
        const orders = data ? Object.values(data) : [];
        callback(orders);
    });
};
