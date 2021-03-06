//Prompts if Yes
var readyPrompt = "Climb the competency ladder to check your level. Ready?"
var cluelessPrompt = "Have you ever heard of this competency before?";
var awarePrompt = "Have you ever tried to perform or learn this competency before?";
var beginPrompt = "Are you comfortable performing this competency for someone else?";
var novicePrompt = "Are you comfortable being paid to perform this competency?";
var compPrompt = "Would you put this on your resume as one of your unique strengths?";
var proPrompt = "Do people you work with regularly seek out your advice on this?";
var expertPrompt = "Do you get paid to actually teach this competency to others?";
var teacherPrompt = "Do lots of strangers seek out your thoughts on this capability?";
var promptsYes = [readyPrompt, cluelessPrompt, awarePrompt, beginPrompt, novicePrompt, compPrompt, proPrompt, expertPrompt, teacherPrompt];

//Prompts if No
var notReady = "No problem. Just press reset when you're ready."
var urClueless = "No biggie, but you're probably CLUELESS on this one.";
var urAware = "You're most likely AWARE.";
var urBeginner = "Sounds like you're a BEGINNER.";
var urNovice = "Probably a NOVICE. Keep learning!";
var urCompetent = "I'm gonna say COMPETENT here.";
var urPro = "Hey hey... you're a PRO!";
var urExpert = "You are an EXPERT. Nice!";
var urTeacher = "Seems like you're a TEACHER with this one.";
var urThoughtLeader = "Wow! You're a genuine THOUGHT LEADER.";
var promptsNo = [notReady, urClueless, urAware, urBeginner, urNovice, urCompetent, urPro, urExpert, urTeacher, urThoughtLeader];

//My attempt at solving this with a loop
var levelCounter = 0;
var killSwitch = false;
document.getElementById("message").innerHTML = promptsYes[levelCounter];

function stepUp() {
	if(killSwitch === false) {
		levelCounter++;
		document.getElementById("message").innerHTML = promptsYes[levelCounter];
	}
}

function stepOff() {
	document.getElementById("message").innerHTML = promptsNo[levelCounter];
	killSwitch = true;
}

function startOver() {
	killSwitch = false;
	levelCounter = 0;
	document.getElementById("message").innerHTML = readyPrompt;
}

//Start the competency ladder using a switch statement instead
document.getElementById("message").innerHTML = readyPrompt;

function choseYes() {
	var currentText = document.getElementById("message").innerHTML.valueOf();
	var newText;
	switch(currentText) {
		case readyPrompt:
			newText = cluelessPrompt;
			break;
		case cluelessPrompt:
			newText = awarePrompt;
			break;
		case awarePrompt:
			newText = beginPrompt;
			break;
		case beginPrompt:
			newText = novicePrompt;
			break;
		case novicePrompt:
			newText = compPrompt;
			break;
		case compPrompt:
			newText = proPrompt;
			break;
		case proPrompt:
			newText = expertPrompt;
			break;
		case expertPrompt:
			newText = teacherPrompt;
			break;
		case teacherPrompt:
			newText = urThoughtLeader;
			break;
		case urThoughtLeader:
			newText = urThoughtLeader;
			break;

		default:
			newText	= "Something went wrong.";
		}
	document.getElementById("message").innerHTML = newText;
};

function choseNo() {
	var currentText = document.getElementById("message").innerHTML.valueOf();
	var newText;
	switch(currentText) {
		case readyPrompt:
			newText = notReady;
			break;
		case cluelessPrompt:
			newText = urClueless;
			break;
		case awarePrompt:
			newText = urAware;
			break;
		case beginPrompt:
			newText = urBeginner;
			break;
		case novicePrompt:
			newText = urNovice;
			break;
		case compPrompt:
			newText = urCompetent;
			break;
		case proPrompt:
			newText = urPro;
			break;
		case expertPrompt:
			newText = urExpert;
			break;
		case teacherPrompt:
			newText = urTeacher;
			break;
		case urThoughtLeader:
			newText = urThoughtLeader;
			break;
		default:
			newText	= "Something went wrong.";
		}
	document.getElementById("message").innerHTML = newText;
};

function startOver() {
	document.getElementById("message").innerHTML = readyPrompt;
}