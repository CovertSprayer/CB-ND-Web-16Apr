let menu = ['Kadhai Paneer', 'Butter Chicken', 'Chole Bhature', 'Fish Curry', 'Sandwich', 'Chicken Momos', 'Pizza', 'Gulab Jamun', 'Malai Chaap', 'Mutton', 'Chicken Biryani', 'Pulav', 'Rosted Chicken'];

let vegMenu = menu.filter(isVeg);
// let nonVegMenu = [];

function isVeg(item){
    
    if(item.toLowerCase().indexOf('chicken') === -1 &&
        item.toLowerCase().indexOf('mutton') === -1 &&
        item.toLowerCase().indexOf('egg') === -1 &&
        item.toLowerCase().indexOf('fish') === -1) {
            return true;
    }
    else{
        return false;
    }  
}

console.log(vegMenu);


