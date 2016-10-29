function random(a, x, c, m) {
	return (a*x + c) % m;
}

function show_error(message){
		alert(message);
}

function getModulus(max) {
	var e = Math.ceil(Math.log2(max));

	return Math.pow(2, e)
}

function getMiltiplierValue(m){
	for (var i = 1; i < m; i++) {
		var k = 1 + 4*i;
		if (k < m) {
			return k;
		}
	}

	return -1;
}

function getSeed(m) {
	var d = new Date();
	var n = d.getTime();

	return n%m;
}

function getIncrement(m){
	return 1 + m/2;
}

function generate() {
	var min = 1 *  document.getElementById('min').value;
	var max = 1 * document.getElementById('max').value;

	if (min >= max) {
		show_error("Error: mín >= max detectado");
		return 0;
	}
	
	var total = 1 * document.getElementById('total').value;

	if (total < 1) {
		show_error("Error: la cantidad debe ser mayo que cero.");
		return 0;
	}


	var m = getModulus(max - min);
	var a = getMiltiplierValue(m);
	var c = getIncrement(m);
	var seed = getSeed(m);

	console.log("Valores: m = " + m + " a = " + a +" seed = " + seed );

	var output_numbers = "";

	for (var i = 0; i < total; ) {
		if (seed >= min && seed <= max){
			output_numbers += seed + "	";
			i++
		}

		seed = min + random(a, seed, c, m);
	}

	var outBox = document.getElementById("output");

	outBox.innerHTML = output_numbers;
	outBox.style.display = "block";


}