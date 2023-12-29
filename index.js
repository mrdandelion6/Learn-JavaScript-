const store = new Map([
    ["t-shirt", 20], // subarrays within an array passed as an arg into Map()
    ["shorts", 15], // each subarray is a key value pair
    ["jeans", 30],
    ["socks", 5],
    ["underwear", 150],
]);

store.forEach((value, key) => console.log(`${key} costs $${value}`));
console.log(store.get("underwear"));
store.set("hat", 1);
console.log(store);