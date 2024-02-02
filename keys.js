const computer={
    brand: 'Dell',
    price: 40000,
    processor: 'Intel',
    hdd: {
        hdd1: '512GB',
        hdd2: '1TB',
        hdd3: '2TB'
    }

}

console.log(computer);

console.log(Object.keys(computer));
console.log(Object.values(computer));
console.log(computer.hdd.hdd1);
delete computer.processor;
console.log(computer);