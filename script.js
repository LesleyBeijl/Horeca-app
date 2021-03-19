alert("Welkom bij Jacks Hutje!");




function drankje(){
	
	
	var drankje = prompt("Welk drankje wilt u bestellen? Fris, Bier of Koffie?");
								
drankje = drankje.toLowerCase();
if (drankje == "fris"){var fris = prompt("Cola of Sprite?");

fris = fris.toLowerCase();
if (fris == "cola"){document.write("Cola");} 

else if (fris == "sprite"){document.write("Sprite");}		}				

		

		if (drankje == "bier"){var bier = prompt("Heineken of Bavaria?");

		bier = bier.toLowerCase();
		if (bier == "heineken"){document.write("Heineken");}

		else if (bier == "bavaria"){document.write("Bavaria");}		}

		

						if (drankje == "koffie"){var koffie = prompt("Cappuccino of Zwart?");

						koffie = koffie.toLowerCase();
						if (koffie == "cappuccino"){document.write("Cappuccino");}

						else if (koffie == "zwart"){document.write("Koffie Zwart");}	}

}

function gerecht(){
	

	var gerecht = prompt("Welk gerecht wilt u bestellen? Vlees, Vis of Vegetarisch?");
		
		gerecht = gerecht.toLowerCase();
if (gerecht == "vlees"){var vlees = prompt("Spareribs of Kipsate?");

vlees = vlees.toLowerCase();
if (vlees == "spareribs"){document.write("Spareribs");} 

else if (vlees == "kipsate"){document.write("Kipsate");}	}	



			if (gerecht == "vis"){var vis = prompt("Zalmfilet of Kabeljauwfilet?");

			vis = vis.toLowerCase();
			if (vis == "zalmfilet"){document.write("Zalmfilet");}

			else if (vis == "kabeljauwfilet"){document.write("Kabeljauwfilet");}	}


				
						if (gerecht == "vegetarisch"){var vegetarisch = prompt("Shoarma of Tomatensoep?");

						vegetarisch = vegetarisch.toLowerCase();
						if (vegetarisch == "shoarma"){document.write("Vegetarische Shoarma");}

						else if (vegetarisch == "tomatensoep"){document.write("Vegetarische Tomatensoep");}	}
} 
						

function dessert(){
	
		var dessert = prompt("Welk dessert wilt u bestellen? Ijs, Eten of Koffie?");
		
dessert = dessert.toLowerCase();
if (dessert == "ijs"){var ijs = prompt("Dameblanche of Aardbeiensundae?");

ijs = ijs.toLowerCase();
if (ijs == "dameblanche"){document.write("Dameblanche");} 

else if (ijs == "aardbeiensundae"){document.write("Aardbeiensundae");}	}		



			if (dessert == "eten"){var eten = prompt("Warmewafel of Chocoladetaartje?");

			eten = eten.toLowerCase();
			if (eten == "warmewafel"){document.write("Warmewafel");} 

			else if (eten == "chocoladetaartje"){document.write("Chocoladetaartje");}	}



						if (dessert == "koffie"){var koffie = prompt("Cappuccino of Zwart?");

						koffie = koffie.toLowerCase();
						if (koffie == "cappuccino"){document.write("Cappuccino");}

						else if (koffie == "zwart"){document.write("Koffie Zwart");}	}				

}
					

function klaar(){
	var klaar = alert("Bedankt voor het bestellen bij Jacks Hutje!");
}
