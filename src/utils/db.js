export const saveOrder = (order) => {
    const orders = JSON.parse(localStorage.getItem('alif_agro_orders') || '[]');
    localStorage.setItem('alif_agro_orders', JSON.stringify([...orders, { ...order, id: Date.now() }]));
};

export const getOrders = () => JSON.parse(localStorage.getItem('alif_agro_orders') || '[]');
