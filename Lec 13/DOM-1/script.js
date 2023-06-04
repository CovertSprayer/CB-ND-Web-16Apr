const h1 = document.getElementsByTagName('h1')[0];
console.log(h1);
console.dir(h1);

// to apply style
// h1.style.backgroundColor = 'teal';
// h1.style.border = '2px solid black';
console.dir(h1);


const favMovies = document.getElementsByClassName('fav-movies')

for(let movie of favMovies){
    movie.style.color = 'lightgreen';
}

const para = document.getElementById('special');
para.style.border = '2px solid green'

const heading = document.querySelector('h1');
// heading.style.color = 'white';

const p = document.querySelector('#special');
p.style.padding = '15px';

const favouriteMovies = document.querySelectorAll('.fav-movies')
console.log(favouriteMovies);

for(let movie of favouriteMovies){
    movie.style.border = '2px solid red'
}


// innerText vs innerHTML

console.log(para.innerText) // as getter
para.innerText = 'This is a paragraph'; // as setter

console.log(heading.innerHTML) // as getter
heading.innerHTML = '<em>This is a Heading</em>'; // as setter


const img = document.querySelector('img');
img.setAttribute('class', 'one')
img.setAttribute('class', 'one two')
img.setAttribute('src', 'https://images.unsplash.com/photo-1685511021127-ea8f746b76df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE4fDZzTVZqVExTa2VRfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=700&q=60')

// setAttribute(), getAttribute(), removeAttribute()
heading.setAttribute('class', 'one');
heading.setAttribute('class', 'two');
heading.setAttribute('class', 'one two');
heading.removeAttribute('class');
console.log(heading.getAttribute('class'));

// classList -> add(), remove(), toggle(), contains()
heading.classList.add('one');
heading.classList.add('two');
heading.classList.remove('two');
console.log(heading.classList.contains('two'));
console.log(heading.classList.contains('one'));
heading.classList.toggle('two');
heading.classList.toggle('two');
heading.classList.toggle('two');





