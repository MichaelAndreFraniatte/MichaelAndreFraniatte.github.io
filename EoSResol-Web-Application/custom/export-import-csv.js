
function handleFilename() {
    var filename = document.getElementById('filename').value;
	exportTableToCSV(null, filename);
}

function exportTableToCSV(html, filename) {
    var csv = [];
    var rows = document.querySelectorAll("#output table tr");
    for(var i = 0; i < rows.length; i++){
        var row = [], cols = rows[i].querySelectorAll("td, th");
        for(var j = 0; j < cols.length; j++){
            row.push(cols[j].innerText);
        }
        csv.push(row.join(","));
    }
    downloadCSV(csv.join("\n"), filename);
}

function downloadCSV(csv, filename) {
    var csvFile;
    var downloadLink;
	if (window.Blob == undefined || window.URL == undefined || window.URL.createObjectURL == undefined) {
		alert("Your browser doesn't support Blobs");
		return;
	}
    csvFile = new Blob([csv], {type:"text/csv"});
    downloadLink = document.createElement("a");
    downloadLink.download = filename;
    downloadLink.href = window.URL.createObjectURL(csvFile);
    downloadLink.style.display = "none";
    document.body.appendChild(downloadLink);
    downloadLink.click();
}

$(function() {
    $("#csvFileInput").click(function(){
        $(this).val("");
    });
});

function handleFiles(files) {
    $("#sub-output").css('display','none');
	getAsText(files[0]);
}

function getAsText(fileToRead) {
	var reader = new FileReader();
	reader.onload = loadHandler;
	reader.onerror = errorHandler;   
	reader.readAsText(fileToRead);
}

function loadHandler(event) {
	var csv = event.target.result;
	processData(csv);             
}

function processData(csv) {
    var allTextLines = csv.split(/\r\n|\n/);
    var lines = [];
    while (allTextLines.length) {
        lines.push(allTextLines.shift().split(','));
    }
	drawOutput(lines);
}

function errorHandler(evt) {
	if(evt.target.error.name == "NotReadableError") {
		alert("Canno't read file !");
	}
}

function drawOutput(lines){
	document.getElementById("output").innerHTML = "";
	var table = document.createElement("table");
	table.setAttribute("contenteditable", "true"); 
	for (var i = 0; i < lines.length; i++) {
		var row = table.insertRow(-1);
		for (var j = 0; j < lines[i].length; j++) {
			var firstNameCell = row.insertCell(-1);
			firstNameCell.style.textAlign = "center";
			firstNameCell.id = i.toString() + "-" + j.toString();
			firstNameCell.appendChild(document.createTextNode(lines[i][j]));
		}
	}
	document.getElementById("output").appendChild(table);
	document.getElementById("0-2").style.borderBottom="1px solid white";
	document.getElementById("0-3").style.borderBottom="1px solid white";
	document.getElementById("0-4").style.borderBottom="1px solid white";
	document.getElementById("0-5").style.borderBottom="1px solid white";
	document.getElementById("0-6").style.borderBottom="1px solid white";
	document.getElementById("0-7").style.borderBottom="1px solid white";
	document.getElementById("0-8").style.borderBottom="1px solid white";
	document.getElementById("0-9").style.borderBottom="1px solid white";
	document.getElementById("0-10").style.borderBottom="1px solid white";
	document.getElementById("0-11").style.borderBottom="1px solid white";
	document.getElementById("0-12").style.borderBottom="1px solid white";
	document.getElementById("0-13").style.borderBottom="1px solid white";
	document.getElementById("0-1").style.borderRight="1px solid white";
	document.getElementById("1-1").style.borderRight="1px solid white";
	document.getElementById("2-1").style.borderRight="1px solid white";
	document.getElementById("3-1").style.borderRight="1px solid white";
	document.getElementById("4-1").style.borderRight="1px solid white";
	document.getElementById("5-1").style.borderRight="1px solid white";
	document.getElementById("6-1").style.borderRight="1px solid white";
	document.getElementById("7-1").style.borderRight="1px solid white";
	document.getElementById("8-1").style.borderRight="1px solid white";
}
