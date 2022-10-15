var total = 0;


function changeCount(bool){
    let prevCount = document.getElementById("count-el").innerText;
    var newCount;
    if (bool) {
        newCount = parseInt(prevCount) + 1;
    } else{
        newCount = parseInt(prevCount) - 1;
    } 
    document.getElementById("count-el").innerText = newCount;
}

function addRow(){
    console.log("click")
    var date = document.getElementById("date").value
    console.log(date)
    
    var money = document.getElementById("money").value
    console.log(money)

    total+=parseInt(money);
    console.log(total) 

    var table = document.getElementById("table");

    var row = table.insertRow();

    var datecell = row.insertCell();
    datecell.innerHTML = date;

    var moneycell = row.insertCell();
    moneycell.innerHTML = money;

    var totalcell= row.insertCell();
    totalcell.innerHTML = total;
}

