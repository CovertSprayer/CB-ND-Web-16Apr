const express = require('express');
const router = express.Router();
const { isLoggedIn } = require('../middlewares');
const User = require('../models/user');
const Product = require('../models/product');


router.post('/user/:productId/cart/add', isLoggedIn, async (req, res) => {
    const { productId } = req.params;
    const product = await Product.findById(productId);

    const userId = req.user._id;
    const user = await User.findById(userId);

    let ind = -1;
    const item = user.cart.find((item, index)=>{
        if(item.productId.equals(product._id)){
            ind = index;
            return item;
        }
    });

    if(item){
        user.cart[ind].quantity++;
    }else{
        user.cart.push({productId:product._id});
    }

    await user.save();

    req.flash('success', 'Item added to cart');
    res.redirect('back');
});

router.post('/user/:productId/remove', isLoggedIn, async (req, res) => {
    const { productId } = req.params;
    const userId = req.user._id;

    const user = await User.findById(userId);

    const cartItem = user.cart.find((item) => {
        return item.productId.toString() === productId
    });

    if (cartItem && cartItem.quantity > 1) {
        cartItem.quantity--;
    }

    await user.save();

    res.redirect('back');
});

router.delete('/user/:productId', isLoggedIn, async (req, res) => {
    const { productId } = req.params;
    const userId = req.user._id;

    const user = await User.findById(userId);
    
    const itemIndex = user.cart.findIndex((item)=>{
        return item.productId.toString() === productId;
    });

    if(itemIndex !== -1){
        user.cart.splice(itemIndex, 1);
    }

    await user.save();

    res.redirect('back');
});

router.get('/user/cart', isLoggedIn, async (req, res) => {
    const userId = req.user._id;
    const user = await User.findById(userId).populate('cart.productId');

    let totalAmount = 0;
    user.cart.forEach(item => {
        totalAmount += item.quantity * item.productId.price;
    });

    res.render('cart/index', { cart: user.cart, totalAmount });
})


module.exports = router;