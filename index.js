let class1 = ["Spongebob", "Patrick", "Sandy"];
let class2 = ["Squidward", "Mr. Krabs", "Plankton"];
class1.push(...class2); // same as class1.extend(class2) from python

console.log(class1);