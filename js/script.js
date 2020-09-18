var ceil1 = document.getElementById("ceil1"),
    floor1 = document.getElementById("floor1"),
    round1 = document.getElementById("round1"),
    min1 = document.getElementById("min1"),
    max1 = document.getElementById("max1"),
    random1 = document.getElementById("random1"),
    input100 = document.getElementById("input100"),
    success = document.getElementById("success"),
    failed = document.getElementById("failed"),
    affiche_princ = document.getElementById("affiche_princ"),
    reset1 = document.getElementById("reset1"),
    date1 = document.getElementById("date1");


function resetFun() {
    affiche_princ.innerHTML = null;
    success.innerHTML = null;
    failed.innerHTML = null;
    date1.innerHTML = null;
}

function dateFun() {
    var x = ("<i class='far fa-clock'></i>")
    var Mydate = new Date();
    var MyNewDate = Mydate.toLocaleString();
    date1.innerHTML = (x + MyNewDate);
};

function successFun() {
    var z = ("<i class='fas fa-check'></i>");
    success.innerHTML = (z);
    failed.innerHTML = "";
};

function failedFun() {
    var z = ("<i class='fas fa-times'></i>");
    failed.innerHTML = (z);
    success.innerHTML = "";
};

function ceil1Fun() {
    var x = Math.ceil(input100.value);
    affiche_princ.innerHTML = ("Number " + input100.value + " in Ceil is : " + x );
}

function floor1Fun() {
    var x = Math.floor(input100.value);
    affiche_princ.innerHTML = ("Number " + input100.value + " in floor is : " + x );
}

function round1Fun() {
    var x = Math.round(input100.value);
    affiche_princ.innerHTML = ("Number " + input100.value + " in round is : " + x );
}

function random1Fun() {
    var x = Math.random() * input100.value + 1;
    var z = Math.floor(x);
    affiche_princ.innerHTML = ("Number " + input100.value + " in random is : " + z );
}

function min1Fun() {
    var list = [];
    var q1 = prompt("Enter How much element you add in this list :");
    var i;
    for (i=1 ; i <= q1 ; i++) {
        var y = prompt("Enter Item Number " + i);
        list.push(y);
    } 
    var message = ("The Small Value in this Array is : " + Math.min(...list));
    affiche_princ.innerHTML = (message);
}

function max1Fun() {
    var list = [];
    var q1 = prompt("Enter How much element you add in this list :");
    var i;
    for (i=1 ; i <= q1 ; i++) {
        var y = prompt("Enter Item Number " + i);
        list.push(y);
    } 
    var message = ("The Larger Value in this Array is : " + Math.max(...list));
    affiche_princ.innerHTML = (message);
}

ceil1.onclick = function() {
    if(input100.value != ""){
        ceil1Fun();
        successFun();
        dateFun();
    }else{
        alert("The Input Is vide");
        failedFun();
        dateFun();
    }
}


floor1.onclick = function() {
    if(input100.value != ""){
        floor1Fun();
        successFun();
        dateFun();
    }else{
        alert("The Input Is vide");
        failedFun();
        dateFun();
    }
}

round1.onclick = function() {
    if(input100.value != ""){
        round1Fun();
        successFun();
        dateFun();
    }else{
        alert("The Input Is vide");
        failedFun();
        dateFun();
    }
}

min1.onclick = function() {
    if(input100.value != ""){
        min1Fun();
        successFun();
        dateFun();
    }else{
        alert("The Input Is vide");
        failedFun();
        dateFun();
    }
}

max1.onclick = function() {
    if(input100.value != ""){
        max1Fun();
        successFun();
        dateFun();
    }else{
        alert("The Input Is vide");
        failedFun();
        dateFun();
    }
}

random1.onclick = function() {
    if(input100.value != ""){
        random1Fun();
        successFun();
        dateFun();
    }else{
        alert("The Input Is vide");
        failedFun();
        dateFun();
    }
}

reset1.onclick = function () {
    resetFun();
}