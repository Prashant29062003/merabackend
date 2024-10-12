## Blocking 
- basically when sycronous task is occurs then it is perform blocking operation which further goes to threads which are present in thread pool to execute it.
- ie. it blocks the code until its task is not completed
```js
// blocking... operation
console.log(1);
const data = fs.readFileSync("fileNotes.md","utf-8");
console.log(data);
console.log(2);
```
## Non-blocking
- ie. it is non blocking the operation as it requires less computing power is goes to a callback and for the mean time other task is completed and then this occus.
```js
// non-blocking... operation
console.log(1);
fs.readFile("fileNotes.md","utf-8",(err,data)=>{
    if(err){
        console.log(err);
    }
    console.log(data);
})
console.log(2);
```