
// $('.child').on('click', (e)=>{
//     console.log(e.target);
//     // $(e.target).hide();
//     $(e.target).fadeOut();
// })

// $('button').first().on('click', ()=>{
//     $('.child').fadeIn();
// })

// $('button').last().on('click', ()=>{

//     $('.child').fadeToggle();
// })

// $('.child').on('click',(e)=>{
//     $(e.target).slideUp();
// })


$('button').on('click',(e)=>{
    $('.child').slideToggle();
})

