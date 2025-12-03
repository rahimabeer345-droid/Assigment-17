var a =prompt("Enter your first name:");
var b =prompt("Enter your last name:");
alert("Fullname" + a + b);

var c =prompt("Enter your favorite mobile phone model.");
var d =c.length
alert("length of String" + d)

var e =("pakistan");
var f =e.indexOf("n");
alert("The index of letter 'n' is: " + f);

var g = "Hello World";
var h = g.lastIndexOf("l");
alert("The last index of letter 'l' is: " + h);


var e =("pakistan");
var f = Word[3];
alert("The index of letter '3' is: " + f);



var f = prompt("Enter your first name:");
var l = prompt("Enter your last name:");
var f = f.concat(" ", l);
alert("Hello " + f + "! Welcome.");


var y = "Hyderabad";
var t = y.slice(0, 5); 
var s = y.slice(5);
var ny = "Islam" + s;
alert("After replacement (using slice): " + ny);




var m = "Ali and Sami are best friends. They play cricket and football together.";
var ne = m.split("and").join("&");
alert(ne);


var r = "472";            
var nm = Number(str);      
alert("Value: " + r + ", Type: " + typeof(r) + "<br>");
alert("Value: " + nm + ", Type: " + typeof(nm));

var ut = prompt("Enter any text:");
var ct = ut.toUpperCase();
alert("Your text in capital letters: " + ct);


var st = prompt("Enter any text:");
var ws = st.toLowerCase().split(" ");
for (var i = 0; i < ws.length; i++) {
    ws[i] = ws[i].charAt(0).toUpperCase() + ws[i].slice(1);
}
var rt = ws.join(" ");
alert("Title Case: " + rt);


var um = 35.36;
var tr = um.toString();
var lt = tr.replace(".", "");
alert("Result: " + lt);




var ue = prompt("Enter your username:");
var is = [33, 44, 46, 64]; 
var id = true;
for (var i = 0; i < ue.length; i++) {
    var ce = ue.charCodeAt(i);
    if (is.includes(ce)) {
        id = false;
        break;
    }
}
if (!id) {
    alert("Please enter a valid username without @ . , !");
} else {
    alert("Username accepted: " + ue);
}




var A = ["cake", "apple pie", "cookie", "chips", "patties"];
var ut = prompt("Enter an item to search:");
var sm = ut.toLowerCase();
var ix = A.indexOf(sm);
if (ix !== -1) {
    alert(ut + " is AVAILABLE at index " + ix);
} else {
    alert(ut + " is NOT available in the list");
}



var password = prompt("Enter your password:");
function isValidPassword(pwd) {
    if (pwd.length < 6) {
        return false;
    }
    var fe = pwd.charCodeAt(0);
    if (fe >= 48 && fe <= 57) { 
        return false;
    }
    var ht = false;
    var hr = false;
    for (var i = 0; i < pwd.length; i++) {
        var code = pwd.charCodeAt(i);
        if ((code >= 65 && code <= 90) || (code >= 97 && code <= 122)) {
            ht = true;
        }
        if (code >= 48 && code <= 57) {
            hr = true;
        }
    }
    if (ht && hr) {
        return true;
    } else {
        return false;
    }
}
if (isValidPassword(password)) {
    alert("Password accepted!");
} else {
    alert("Invalid password! Enter a valid password.");
}




var uy = "University of Karachi";
var uy = uy.split(""); 
alert("Array elements:");
for (var i = 0; i < uy.length; i++) {
    alert(uy[i] + "<br>");
}


var ut = prompt("Enter any text:");
var lr = ut.charAt(ut.length - 1);
alert("The last character of your input is: " + lr);


var te = "The quick brown fox jumps over the lazy dog";
var lt = te.toLowerCase();
var ws = lt.split(" ");
var ct = 0;
for (var i = 0; i < ws.length; i++) {
    if (ws[i] === "the") {
        ct++;
    }
}
alert('The word "the" occurs ' + ct + ' times in the given string.');





