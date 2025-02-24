document.addEventListener('DOMContentLoaded', function() {
    const cartItems = document.getElementById('cart-items');

    // 从本地存储中获取购物车数据
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    // 调试信息
    console.log('从本地存储中读取的购物车数据:', cart);

    // 渲染购物车商品列表
    cart.forEach(item => {
        const li = document.createElement('li');
        li.innerHTML = `
            <span>${item.name}</span>
            <span>${item.price}</span>
        `;
        cartItems.appendChild(li);
    });
});
