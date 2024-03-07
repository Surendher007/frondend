alert("are you sure, delete");
let i = 0;
const id = setInterval(function () {
    console.log(i++);
    if(i > 10) {
        clearInterval(id);
    }
},1000);