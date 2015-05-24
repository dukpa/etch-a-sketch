$(document).ready(function() {
	//Initial grid is 16x16
	createGrid(16);
});

function btnClear_onClick() {
	//Create a new grid per user input
	var nDim = prompt("Enter dimensions for new grid:");
	createGrid(nDim);
}

function createGrid(nDim) {
	//The grid wrapper is always the same px size
	var nWidth = $('#wrapper').width();
	var nResolution = nWidth / nDim;
	
	//Remove current grid
	$('#wrapper div').remove();

	//Add nDim # of rows
	for (var i = 0; i < nDim; i++) {
		addRow(nDim, nResolution);
		console.log("added row ", i + 1);
	}

	//Color the cells random colors as you move the mouse
	$('.row div').hover(
		function() {
			var rgb = "rgb("
				+ Math.floor(Math.random()*255) + ","
				+ Math.floor(Math.random()*255) + ","
				+ Math.floor(Math.random()*255) + ")";
			$(this).css("background-color", rgb);
		},
		function() {
			//No exit hover
		}
	);

	console.log("done creating grid");
}

function addRow(nDim, nResolution) {
	var $row = $('<div class="row"></div>');
	$('#wrapper').append($row);

	$row.css("height", nResolution);

	//Create a nDim div row
	for (var i = 0; i < nDim; i++) {
		$cell = $('<div></div>');
		$cell.css("height", nResolution);
		$cell.css("width", nResolution);
		$row.append($cell);
	}
}