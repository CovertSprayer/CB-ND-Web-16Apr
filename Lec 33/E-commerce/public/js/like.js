

async function likeProduct(productId) {
    try {
        const res = await axios({
            method: 'post',
            url: `/products/${productId}/like`,
            headers: {'X-Requested-With': 'XMLHttpRequest'}
        });
    
        console.log(res);
    } 
    catch (e) {
        // window.location.replace('/login');
    }
}


window.document.addEventListener('click', (e) => {
    const btn = e.target;
    if (btn.classList.contains('product-like-btn')) {
        const productId = btn.getAttribute('product-id');
        likeProduct(productId);
    }

})