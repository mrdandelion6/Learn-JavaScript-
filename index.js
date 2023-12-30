// we can pass arguments into promises as well.
const wait = time => new Promise(resolve => { // wait is now a FUNCTION that RETURNS a promise object
    // asynch code goes here
    setTimeout(resolve, time);
});

wait(4000).then(() => console.log("thanks for waiting!"));
