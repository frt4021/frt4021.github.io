var names = ["Ben", "Joel", "Judy", "Anne"];
var scores = [88, 98, 77, 88];

var $ = function (id) { return document.getElementById(id); };



window.onload = function () {
	$("display_results").onclick = displayResults;
	$("display_scores").onclick = displayScores;
	$("add").onclick = addScore;
	
	
};

function displayResults() {
    var average = 0;
    var highestScore = 0;

     for (var i = 0; i < scores.length; i++) {
        average = (average * i + scores[i]) / (i + 1);
    }

   
    for (var j = 0; j < scores.length; j++) {
        if (scores[j] > highestScore) {
            highestScore = scores[j];
        }
    }

    var resultsDiv = document.getElementById("results");
    resultsDiv.innerHTML = "<h2>Results</h2><br />" +
        "<p>Average score is " + average.toFixed(2) + "</p>" +
        "<p>Highest score is " + highestScore + "</p>";
}
function displayScores() {

    var table = document.getElementById("scores_table");


    table.innerHTML = "";
	if(names.length==0){
		"<p>there are no record </p>"

	}

    var headerRow = table.insertRow(0);
    var nameHeader = headerRow.insertCell(0);
    var scoreHeader = headerRow.insertCell(1);
    nameHeader.innerHTML = "<b>Name</b>";
    scoreHeader.innerHTML = "<b>Score</b>";

    for (var i = 0; i < names.length; i++) {
        var row = table.insertRow(i + 1);
        var nameCell = row.insertCell(0);
        var scoreCell = row.insertCell(1);
        nameCell.innerHTML = names[i];
        scoreCell.innerHTML = scores[i];
    }


}

function addScore() {
    var nameInput = $("name").value.trim();
    var scoreInput = parseInt($("score").value.trim());

    if (nameInput === "") {
        alert("Please enter a name.");
        return;
    }

    if (/\d/.test(nameInput)) {
        alert("Name cannot contain numeric characters.");
        return;
    }

  
    if (isNaN(scoreInput) || scoreInput < 0 || scoreInput > 100) {
        alert("Please enter a valid score (between 0 and 100).");
        return;
    }

    names.push(nameInput);
    scores.push(scoreInput);

    // Clear input fields
    $("name").value = "";
    $("score").value = "";

    $("name").focus();

    displayScores();
}
