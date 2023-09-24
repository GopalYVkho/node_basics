// // console.log("Hello World");
// // console.log(global);

// const os = require("os")
// console.log(os.type())
// console.log(os.version())
// console.log(os.homedir())

// // Default Value Name
// console.log(__dirname)
// console.log(__filename)


// const path = require("path")
// console.log("_____")
// console.log(path.dirname(__filename))
// console.log(path.basename(__filename))
// console.log(path.extname(__filename))

// // Most Used get All object(root,dir,base,ext,name)
// console.log(path.parse(__filename))

// Way One
// const math = require("./math")
// console.log(math.add(3,3));
// console.log(math.sub(3,3));
// console.log(math.mul(3,3));
// console.log(math.div(3,3));

// Way Two (Destructer)
const {add,sub,mul,div} = require("./math")
console.log(add(3,3));
console.log(sub(3,3));
console.log(mul(3,3));
console.log(div(3,3));