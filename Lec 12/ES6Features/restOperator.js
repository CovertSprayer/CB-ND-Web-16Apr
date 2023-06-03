
function add(a,b, ...c){
    console.log(a);
    console.log(b);
    console.log(c);

    let z = c.reduce((total, num)=>{
        return total+num;
    },0)
    return a+b+z;
}


let ans = add(1,2,3,4,5,6,7,8,9);
console.log(ans);

