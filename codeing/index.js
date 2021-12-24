function pradeep(num1,num2,ravi){
    let sum = num1 + num2;
    ravi(sum); 
}
function display(data){
    console.log("sum="+data);
}

pradeep(10,20,display);
 
function guvi(n1,n2,php){
    let a= n1+n2;
    php(a); 
}

function geek(data){
    console.log("sum="+data);

}

guvi(2,3,geek);