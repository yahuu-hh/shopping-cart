document.addEventListener('DOMContentLoaded', function() {
    const addToCartButtons = document.querySelectorAll('.add-to-cart-btn');

    addToCartButtons.forEach(button => {
        button.addEventListener('click', function() {
            const item = button.closest('.item');
            const itemName = item.querySelector('.item-name').textContent;
            const itemPrice = item.querySelector('.item-price').textContent;

            // 从本地存储中获取购物车数据
            let cart = JSON.parse(localStorage.getItem('cart')) || [];

            // 将商品信息添加到购物车数组中
            cart.push({ name: itemName, price: itemPrice });

            // 将更新后的购物车数据存储回本地存储
            localStorage.setItem('cart', JSON.stringify(cart));

            // 调试信息
            console.log('购物车数据已更新:', cart);

            // 提示用户商品已添加到购物车
            alert('商品已添加到购物车！');
        });
    });
});
