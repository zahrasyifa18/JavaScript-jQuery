var kawasan = "tidak rawan banjir";
var luastanah = "800";
var luasbangunan = "400";
var fasilitas = "kolam renang";

	if(kawasan == "tidak rawan banjir" || kawasan == "tidak rawan longsor" || kawasan == "tidak dikawasan industri/pabrik") {
		if(luastanah >= 800 || luasbangunan >= 400) {
			if(fasilitas == "kolam renang" || fasilitas == "parkir luas" || fasilitas == "kebun") {
				console.log("sesuai kriteria");
			}
		}
	}	
		else{
			console.log("tidak sesuai kriteria");
		}