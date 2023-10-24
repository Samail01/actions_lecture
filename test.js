const x = 10;
const y = 15;

function test() {
    if(x == y) {
    console.log("test running, no issues");
    } else {
       throw new Error("numbers are not equal")
    }
}
test()