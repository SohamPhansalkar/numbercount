console.log("This is JS file");

function set_count(){
    try{
        var returncount = localStorage.getItem('count');
        return returncount;
    }
    catch{
        return 0
    }
}

let countnow = set_count();
let num = parseInt(countnow);
document.getElementById("count").innerHTML = num;
setcolor();

function add(){
    console.log("add clicked");
    num = num + 1;
    document.getElementById("count").innerHTML = num;
    setcolor();
    let countnow = savecount();
    console.log(countnow);
}

function sub(){
    console.log("sub clicked");
    num = num-1;
    let countnow = savecount();
    document.getElementById("count").innerHTML = countnow;
    setcolor();
}

function reset(){
    console.log("reset clicked");
    num = 0;
    document.getElementById("count").innerHTML = num;
    setcolor();
    let countnow = savecount();
    console.log(countnow);
}

function setcolor(){
    counts = document.getElementById("count").value;
    if (num === 0){
        document.getElementById("count").style.color = "black";
    }else if(num > 0){
        document.getElementById("count").style.color = "green";
    }else {
        document.getElementById("count").style.color = "red";
    }
}

function savecount(){
    localStorage.setItem('count', num);
    var returncount = localStorage.getItem('count');
    return returncount;
}
