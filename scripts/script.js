function clearCheck(){
	var check = document.getElementsByName("check");
	for(i=0; i<check.length; i++){
		check[i].checked = false;
		if(check[i].id == "gjallardoodles"){
			document.getElementById("zavala").style.backgroundColor = 'rgba(0,0,0, 0.5)';
		}
		else if(check[i].id == "travelerDonutHoles"){
			document.getElementById("ikora").style.backgroundColor = 'rgba(0,0,0, 0.5)';
		}
		else if(check[i].id == "chocolateShipCookies"){
			document.getElementById("amanda").style.backgroundColor = 'rgba(0,0,0, 0.5)';
		}
		else if(check[i].id == "telemetryTapioca"){
			document.getElementById("banshee").style.backgroundColor = 'rgba(0,0,0, 0.5)';
		}
		else if(check[i].id == "eliksniBirdseed"){
			document.getElementById("hawthorn").style.backgroundColor = 'rgba(0,0,0, 0.5)';
		}
		else if(check[i].id == "gentlemansShortbread"){
			document.getElementById("devrim").style.backgroundColor = 'rgba(0,0,0, 0.5)';
		}
		else if(check[i].id == "infiniteForestCake"){
			document.getElementById("failsafe").style.backgroundColor = 'rgba(0,0,0, 0.5)';
		}
		else if(check[i].id == "vanillaBlades"){
			document.getElementById("shaxx").style.backgroundColor = 'rgba(0,0,0, 0.5)';
		}
		else if(check[i].id == "darkChocolateMotes"){
			document.getElementById("drifter").style.backgroundColor = 'rgba(0,0,0, 0.5)';
		}
		else if(check[i].id == "candyDeadGhosts"){
			document.getElementById("spider").style.backgroundColor = 'rgba(0,0,0, 0.5)';
		}
		else if(check[i].id == "illFortuneCookies"){
			document.getElementById("petra").style.backgroundColor = 'rgba(0,0,0, 0.5)';
		}
		else if(check[i].id == "strangeCookies"){
			document.getElementById("xur").style.backgroundColor = 'rgba(0,0,0, 0.5)';
		}
		else if(check[i].id == "thousandLayerCookie"){
			document.getElementById("riven").style.backgroundColor = 'rgba(0,0,0, 0.5)';
		}
		else if(check[i].id == "lavenderRibbonCookies"){
			document.getElementById("saint").style.backgroundColor = 'rgba(0,0,0, 0.5)';
		}
		else if(check[i].id == "ascendantOatmealRasinCookies"){
			document.getElementById("eris").style.backgroundColor = 'rgba(0,0,0, 0.5)';
		}
		else if(check[i].id == "ethericColdsnaps"){
			document.getElementById("variks").style.backgroundColor = 'rgba(0,0,0, 0.5)';
		}
		else if(check[i].id == "blueberryCrumblers"){
			document.getElementById("shaw").style.backgroundColor = 'rgba(0,0,0, 0.5)';
		}
		else if(check[i].id == "bittersweetBiscotti"){
			document.getElementById("crow").style.backgroundColor = 'rgba(0,0,0, 0.5)';
		}
		else if(check[i].id == "brightDustedSnowballs"){
			document.getElementById("tess").style.backgroundColor = 'rgba(0,0,0, 0.5)';
		}
		else if(check[i].id == "classicButterCookies"){
			document.getElementById("eva").style.backgroundColor = 'rgba(0,0,0, 0.5)';
		}
		else if(check[i].id == "starwortThins"){
			document.getElementById("elsie").style.backgroundColor = 'rgba(0,0,0, 0.5)';
		}
		else if(check[i].id == "ascendantAppleTart"){
			document.getElementById("mara").style.backgroundColor = 'rgba(0,0,0, 0.5)';
		}
	}
}

function toggleLabel(check,label){
	if(document.getElementById(check).checked == true){
		document.getElementById(label).style.backgroundColor = 'rgba(0,50,0, 0.5)';
	}
	else{
		document.getElementById(label).style.backgroundColor = 'rgba(0,0,0, 0.5)';
	}
}