$(document).ready(function() {
	createGrid(16);
});

function btnClear_onClick() {
	$('.row div').removeClass('highlight');

	var nDim = prompt("Enter dimensions for new grid:");
	createGrid(nDim);
}

function createGrid(nDim) {
	var nWidth = $('#wrapper').width();
	var nResolution = nWidth / nDim;
	
	$('#wrapper div').remove();

	for (var i = 0; i < nDim; i++) {
		addRow(nDim, nResolution);
		console.log("added row ", i + 1);
	}

	//Color the cells as you move the mouse
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

	console.log('done');
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