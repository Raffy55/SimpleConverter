function kb () {
    let x = document.getElementById("firstnum").value;
    const kbresult = x * 1000;

    document.getElementById('answer').innerHTML = kbresult + " kilobytes";
}

function gb () {
    let x = document.getElementById("firstnum").value;
    const gbresult = x / 1000;

    document.getElementById('answer').innerHTML = gbresult + " gigabytes";
}

function tb () {
    let x = document.getElementById("firstnum").value;
    const tbresult = x / 1000000;
    
    document.getElementById('answer').innerHTML = tbresult + " terabytes";
}