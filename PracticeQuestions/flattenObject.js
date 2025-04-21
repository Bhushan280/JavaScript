/*
Write a function flattenObject that takes a nested object and converts it
into a flat object,where keys represent the path to each value in the
original object.
The function should handle nested objects, arrays, and primitive types and
null.
*/

const user = {
    name: " Kashi",
    age: null,
    address: {
        city: "Maheshwar",
        state: "MP",
        zip: {
            code: 451224,
            area: "Ambedkar Nagar",
        },
        secondary: null,
    },
    phone: [
        { type: "home", number: "1234567890" },
        { type: "work", number: "null" },
    ],
    prefrences: null,
};



const flattenObject = (obj, parentKey = "", result = {}) => {
    for (const key in obj) {
        const newKey = parentKey ? `${parentKey}.${key}` : key;
        const value = obj[key];

        if (value && typeof value === "object" && !Array.isArray(value)) {
            flattenObject(value, newKey, result);
        } else if (Array.isArray(value)) {
            value.forEach((item, index) => {
                flattenObject(item, `${newKey}[${index}]`, result);
            });
        } else {
            result[newKey] = value;
        }
    }

    return result;
}

console.log(flattenObject(user));