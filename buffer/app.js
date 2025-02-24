// Different method to create Buffer
const buffer1 = Buffer.alloc(100);
const buffer2 = new Buffer("Prashant");
const buffer3 = Buffer([1,2,3,4]);

// Writing data to buffer 
const a = buffer1.write("Hello friends, let's give our soul to this world which give us a lot things.")

// create a 16-bytes buffer 

const buffer = new ArrayBuffer(16);
console.log(buffer.byteLength);

// create a 4-byte buffer
const newBuffer = new ArrayBuffer(4);
const view = new DataView(newBuffer);

console.log(newBuffer);