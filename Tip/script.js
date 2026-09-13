 function tot(){
    let bill=Number(document.getElementById("bill").value);
    let tip=Number(document.getElementById("tip").value);
    let total=bill+tip;
    document.getElementById("total").innerHTML="Total: $"+total.toFixed(2);
}