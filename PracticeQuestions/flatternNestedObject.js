const obj = {
    name: 'Bhushan',
    phone: 9111086187,
    address: {
        street: '123 Main St',
        city: 'Pune',
        location: {
            lat: 18.5204,
            lng: 73.8567,
            region: 'Maharashtra'
        },
        email: {
            personal: 'bhushan.personal@example.com',
            company: 'bhushan@company.com'
        }
    },
    ride: '250 Gixxer'
};
console.log(obj);
const flattern = (obj) => {
    result = {};
    
    for(const val in obj)
    {
        if (typeof obj[val] === 'object' && obj[val] !== null && !Array.isArray(obj[val])) {
            const temp = flattern(obj[val]);
            for(const next in temp){
                result[val + '.' + next] = temp[next];
            }
        }
        else{
            result[val] = obj[val];
        }
    }
    
    return result;
}
console.log(flattern(obj));
