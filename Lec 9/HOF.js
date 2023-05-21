

// function MOVIES(x){

//     let marvel = 'Marvel Movies';
//     let DC = 'DC Movies';
//     let avatar = 'Avatar Movies';

//     if(x===1){
//         return marvel;
//     }
//     else if(x===2) return DC;
//     else return avatar;

// }

// let str = MOVIES(1);
// console.log(str);





function movies(x, fun){

    // fun();

    function marvel(){
        // console.log('Marvel Movies');
        // return "returning this string";
    }

    function DC(){
        console.log('DC Movie');
    }

    function avatar(){
        console.log('Avatar Movie');
    }

    if(x===1){
        return marvel;
    }
    else if(x===2) return DC;
    else return avatar;

}

function print(){
    console.log("I'm Print funtion");
}
// let str = 'print';


let movie = movies(1);
console.log(movie());

