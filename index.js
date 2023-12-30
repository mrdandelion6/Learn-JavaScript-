//start
console.time("response time");

alert("CLICK OK");
setTimeout(() => console.log("hello"), 10000);

// end
console.timeEnd("response time"); // prints time elapsed

// of course, we don't wait for asynch code (it's asynchronous! we skip ahead)

