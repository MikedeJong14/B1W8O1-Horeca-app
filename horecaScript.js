const PRIJSFRIS = 200;
const PRIJSBIER = 300;
const PRIJSWIJN = 500;
var antwoordPrompt = "";
var rekeningText = "";
var bevestiging = "";
var totaalBestelling = 0;
var aantalDrinken = 0;


function startMenu() {
	promptStartmenu = prompt("Welke bestelling wilt u toevoegen?");
	if (promptStartmenu == "fris" || promptStartmenu == "bier" || promptStartmenu == "wijn") {
		bestelDrinken(promptStartmenu);
	} else if (promptStartmenu == "stop"){
		rekening();
	} else {
		alert("U heeft een ongeldige invoer gedaan. Uw bestelling kan niet worden toegevoegd.");
		startMenu();
	}
}

function bestelDrinken(drinken) {
	aantalDrinken = prompt("Hoeveel " + drinken + " wilt u toevoegen aan uw bestelling? type 'annuleer' om iets anders te kiezen");
	aantalDrinken = parseInt(aantalDrinken);
	if (aantalDrinken == "annuleer") {
		startMenu();
		return;
	}
	bevestiging = prompt("U gaat " + aantalDrinken + " " + drinken + " toevoegen aan uw bestelling, klopt dit? Type 'ja' om te bevestigen of type 'annuleer' om terug te gaan.");
	if (bevestiging == "ja") {
		if (drinken == "fris") {
			totaalBestelling = ((aantalDrinken * PRIJSFRIS) / 100);
		} else if (drinken == "bier") {
			totaalBestelling = ((aantalDrinken * PRIJSBIER) / 100);
		} else if (drinken == "wijn") {
			totaalBestelling = ((aantalDrinken * PRIJSWIJN) / 100);
		}
		rekeningText += (aantalDrinken + " " + drinken + " €" + totaalBestelling);
		startMenu();
	} else if (bevestiging == "annuleer") {
		bestelDrinken(drinken);
	} else {
		alert("U heeft een ongeldige invoer gedaan.");
		bestelDrinken(drinken);
	}
}

function rekening() {
	document.write("rekening <br><br>");
	document.write(rekeningText);
}

startMenu();