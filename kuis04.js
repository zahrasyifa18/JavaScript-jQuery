var segitiga = "";
for(var a = 1; a <= 1; a++) {
	segitiga += "*";
}

segitiga += "\n";
for(var x = 1; x <= 4; x++) {
	for(var y = 5 - 1; y >= x; y--) {
		segitiga += " ";
	}
	for(var z = 0; z <= x; z++) {
		segitiga += "*";
	}
	segitiga += "\n";
}
	console.log(segitiga);
	
	


