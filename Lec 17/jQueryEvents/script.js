

$('form').on('submit', function (e) {
    e.preventDefault();
    console.log(this);
})

$('h2').on('click', function (e) {
   
})

$('.container').on('click', function(e){
    // console.log(e.target);
    console.log(this);
    // $(e.target).css('background-color', 'teal');
})

// const container = document.querySelector('.container');
// container.addEventListener('click', function(e){
//     e.target.style.backgroundColor = 'teal';
// })



