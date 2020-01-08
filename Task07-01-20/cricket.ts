class team{
	wickets;
	overs;
 	teamScoreCard;
	constructor(){
		this.wickets = 10;
		this.overs = 2;
		this.teamScoreCard =[];
	}
}

class player{
	 balls;
	 runs;
	 total;
	 name;
	constructor(name){
		this.balls = 6;
		this.runs =[];
		this.total =0;
		this.name = name;
	}

	run(){
		let hit = Math.floor(Math.random() * 100 % 7);
		if(hit>0){
			return hit;
		}
		else{
			return -1;
		}
	}

}

//let team1ScoreCard =[];
let click =0;
let plyIndex =0;
let tem1 = new team();
let batsman=0;
let team1Result =[];
let team2Result =[];
let winner =[];

//let team2ScoreCard =[];
let tem2 = new team();
/*function run(){
	let hit = Math.floor(Math.random() * 100 % 7);
	if(hit>0){
		return hit;
	}
	else{
		return -1;
	}
}*/


function sumIt(total, num){ 
	return total + num;
}

function team1Play(){
	if(click <=12 && plyIndex <10){
		let chk = tem1["teamScoreCard"][plyIndex].run();
		if(chk > 0){
			batsman = tem1["teamScoreCard"][plyIndex];
			if(batsman["balls"] > 0){
				batsman["runs"].push(chk);
				batsman["balls"] -=1;
				document.getElementById("tem1Board").innerHTML += " "+batsman["runs"][batsman["runs"].length - 1];
				//alert(batsman.runs);
				alert("balls remaining: "+batsman["balls"]);
				if(batsman["balls"] == 0 || click == 12){
					plyIndex +=1;
					tem1["wickets"] -= 1;
					document.getElementById("tem1Board").innerHTML += "<br>";
					alert("Over Up");
				}
			}
		}
		else{
			batsman = tem1["teamScoreCard"][plyIndex];
			batsman["runs"].push(0);
			batsman["balls"] -=1;
			document.getElementById("tem1Board").innerHTML += " W ";
			document.getElementById("tem1Board").innerHTML += "<br>";
			//alert(batsman["runs"]);
			//alert(batsman.balls);
			plyIndex +=1;
			tem1["wickets"] -=1;
			alert("Batsman Out");
			alert("Next Batsman");
			
		}
		
	}
	else{
			for(let i=0; i< plyIndex; i++){
				tem1["teamScoreCard"][i]["total"] = tem1["teamScoreCard"][i]["runs"].reduce(sumIt);
				team1Result[i] = tem1["teamScoreCard"][i]["total"];
				
			}
			localStorage.setItem("team1Runs",JSON.stringify(team1Result));
			localStorage.setItem("team1Total",JSON.stringify(team1Result.reduce(sumIt)));
			localStorage.setItem("playerObj", JSON.stringify(tem1["teamScoreCard"]));
			document.getElementById("tem1Board").innerHTML += "Overs: 2<br>" +  "Total runs: "+team1Result.reduce(sumIt);
			//alert(team1Result);
			click =0;
			plyIndex =0;
			(<HTMLInputElement>document.getElementById("team1")).disabled = true;
			(<HTMLInputElement>document.getElementById("team2")).disabled = false;			
			alert("2 overs up");
	}
}

function team2Play(){
	if(click <=12 && plyIndex <10){
		let chk = tem2["teamScoreCard"][plyIndex].run();
		if(chk > 0){
			batsman = tem2["teamScoreCard"][plyIndex];
			if(batsman["balls"] > 0){
				batsman["runs"].push(chk);
				batsman["balls"] -=1;
				document.getElementById("tem2Board").innerHTML += " "+batsman["runs"][batsman["runs"].length - 1];
				//alert(batsman.runs);
				alert("balls remaining: "+batsman["balls"]);
				if(batsman["balls"] == 0 || click == 12){
					plyIndex +=1;
					tem2["wickets"] -= 1;
					document.getElementById("tem2Board").innerHTML += "<br>";
					alert("Over Up");
				}
			}
		}
		else{
			batsman = tem2["teamScoreCard"][plyIndex];
			batsman["runs"].push(0);
			batsman["balls"] -=1;
			document.getElementById("tem2Board").innerHTML += " W ";
			document.getElementById("tem2Board").innerHTML += "<br>";
			//alert(batsman.runs);
			//alert(batsman.balls);
			plyIndex +=1;
			tem2["wickets"] -=1;
			alert("Batsman Out");
			alert("Next Batsman");
			
		}
		
	}
	else{
			for(let i=0; i< plyIndex; i++){
				tem2["teamScoreCard"][i]["total"] = tem2["teamScoreCard"][i]["runs"].reduce(sumIt);
				team2Result[i] = tem2["teamScoreCard"][i]["total"];
				
			}
			localStorage.setItem("team2Runs",JSON.stringify(team2Result));
			localStorage.setItem("team2Total",JSON.stringify(team2Result.reduce(sumIt)));
			localStorage.setItem("player2Obj", JSON.stringify(tem2["teamScoreCard"]));
			document.getElementById("tem2Board").innerHTML += "Overs: 2<br>" + "Total runs: "+team2Result.reduce(sumIt);
			//alert(team2Result);
			click =0;
			plyIndex =0;
			(<HTMLInputElement>document.getElementById("team2")).disabled = true;
			alert("2 overs up");
			winner.push(team1Result.reduce(sumIt));
			winner.push(team2Result.reduce(sumIt));
			let res = "";
			if(winner[0] > winner[1]){
				res ="Team A is winner";
			}
			else if(winner[0] == winner[1]){
				res ="Draw Match";
			}
			else{
				res="Team B is winner";
			}
			localStorage.setItem("winner",res);	
			//alert(res);
			alert("Match over");

			let team1HighRun = team1Result[0];
			for(let i=0; i<team1Result.length - 1; i++){
				if( team1HighRun < team1Result[i+1] ){
				team1HighRun = team1Result[i+1];
				}
			}

			let team2HighRun = team2Result[0];
			for(let i=0; i<team2Result.length - 1; i++){
				if( team2HighRun < team2Result[i+1] ){
				team2HighRun = team2Result[i+1];
				}
			}

			let mofMatch = (team1HighRun > team2HighRun) ? team1HighRun : team2HighRun;
			localStorage.setItem("manofmatch",JSON.stringify(mofMatch));
			location.replace("result.html");
			
			
			
	}
}

function ballClick(idtity){
	click +=1;
	if(idtity.id == "team1"){
	  if(click == 1){
		for(let i=0; i< tem1["wickets"]; i++){
			let name = prompt("Player Name");
			tem1["teamScoreCard"][i] = new player(name);
			
		}

	  }

	  team1Play();
	}
	else{
	  if(click == 1){
		for(let i=0; i< tem2["wickets"]; i++){
			let name = prompt("Player Name");
			tem2["teamScoreCard"][i] = new player(name);
			
		}

	  }
	
	  team2Play();

	}
	
	

}