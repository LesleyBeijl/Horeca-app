alert("Welkom bij Jacks Hutje!");
document.write("Als je klaar bent met bestellen type 'stop' in om te stoppen met de bestelling en af te ronden met betalen of om nog iets anders te bestellen");
//function hoi(){
	//document.write("Hallo wereld");}
//hoi();


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



}

function gerecht(){
	

	var gerecht = prompt("Welk gerecht wilt u bestellen? Vlees, Vis of Vegetarisch?");
								}
						

function dessert(){
	
	var dessert = prompt("Welk dessert wilt u bestellen? Ijs, Eten of nog een bakje Koffie?");
								}
					

function klaar(){
	var klaar = alert("Bedankt voor het bestellen bij Jacks Hutje!");
}
