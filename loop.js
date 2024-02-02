const mobile={
    brand: 'samsung',
    price: 25000,
    color: 'black',
    camera: '12mp',
    isNew: true
}

// for(const keys in mobile){
//     // console.log(keys);
//     // console.log(mobile[keys]);
// }

const keys = object.keys(mobile);
console.log(keys);

for(const key of keys){
    console.log(key);
    console.log(mobile[key]);
}