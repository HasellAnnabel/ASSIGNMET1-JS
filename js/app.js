// Assignment 1 | COMP1073 Client-Side JavaScript

/* Variables
-------------------------------------------------- */
const paras = document.querySelectorAll('p');
const first = document.getElementById('first');
const second = document.getElementById('second');
const third = document.getElementById('third');
const fourth = document.getElementById('fourth');
const fifth = document.getElementById('fifth');
const say = document.getElementById("say");
var selectedFirst;
var selectedSecond;
var selectedThird;
var selectedFourth;
var selectedFifth;

var temp1;
var temp2;
var temp3;
var temp4;
var temp5;	

var final = ['','','','','']

var textToSpeak;

alert("Instructions:\nSelect an option and then press the white confirm button under. Hit \"SAY\" button to listen");
// Create a new speechSynthesis object
const synth = window.speechSynthesis;
// Learn more about SpeechSynthesis.speak() at https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis/speak
// const speakButton = document.querySelector('button');
// let textToSpeak = 'This is the text string that you will generate with your script';

/* Functions
-------------------------------------------------- */
function speakNow(string) {
	// Create a new speech object, attaching the string of text to speak
	const utterThis = new SpeechSynthesisUtterance(string);
	// Actually speak the text
	synth.speak(utterThis);
}

/* Event Listeners
-------------------------------------------------- */
// The click event handler for the button that speaks the text contained in the above var textToSpeak
// speakButton.addEventListener('click', function () {
// 	speakNow(textToSpeak);
// });

paras.forEach(p => {
	p.addEventListener('click',function(){
		speakNow(p.textContent);
		if(['Pooh','Tigger','Eeyere','Piglet'].includes(p.textContent)){
			temp1 = p.textContent;
			selectedFirst = p;
		}
		
		if(['bounce','fly','dance','skip'].includes(p.textContent)){
			temp2 = p.textContent;
			selectedSecond = p;

		}
		
		if(['speckled','lucky','giant','delightful','green'].includes(p.textContent)){
			temp3 = p.textContent;
			selectedThird = p;

		}
		
		if(['heffalump','honey pot','birthday cake','butterfly','grasshopper'].includes(p.textContent)){
			temp4 = p.textContent;
			selectedFourth = p;

		}
		
		if(['to the north pole','to the moon','to Christopher Robin\'s house','to Owl\'s house'].includes(p.textContent)){
			temp5 = p.textContent;
			selectedFifth = p;
		}
	})
});

first.addEventListener('click', function(){
	final[0] = temp1;
	textToSpeak = final[0] + ' ' + final[1] + ' ' + final[2] + ' ' + final[3] + ' ' + final[4];
	var i = 0;
	paras.forEach(p=>{
		i++;
		if(i <= 4){
			p.style.color = "black";
		}
	});
	if(selectedFirst != null){
		selectedFirst.style.color = 'red';
	}
});

second.addEventListener('click', function(){
	final[1] = temp2;
	var i = 0;
	paras.forEach(p=>{
		i++;
		if(i>4 && i<9){
			p.style.color = "black";
		}
	});
	if(selectedSecond != null){
		selectedSecond.style.color = 'red'
	}
	textToSpeak = final[0] + ' ' + final[1] + ' ' + final[2] + ' ' + final[3] + ' ' + final[4];
});

third.addEventListener('click', function(){
	final[2] = temp3;
	textToSpeak = final[0] + ' ' + final[1] + ' ' + final[2] + ' ' + final[3] + ' ' + final[4];
	var i = 0;
	paras.forEach(p=>{
		i++;
		if(i>8 && i<14){
			p.style.color = "black";
		}
	});
	if(selectedThird != null){
		selectedThird.style.color = 'red'
	}
});

fourth.addEventListener('click', function(){
	final[3] = temp4;
	textToSpeak = final[0] + ' ' + final[1] + ' ' + final[2] + ' ' + final[3] + ' ' + final[4];
	var i = 0;
	paras.forEach(p=>{
		i++;
		if(i>13 && i<19){
			p.style.color = "black";
		}
	});
	if(selectedFourth != null){
		selectedFourth.style.color = 'red'
	}
});

fifth.addEventListener('click', function(){
	final[4] = temp5;
	textToSpeak = final[0] + ' ' + final[1] + ' ' + final[2] + ' ' + final[3] + ' ' + final[4];
	var i = 0;
	paras.forEach(p=>{
		i++;
		if(i>18){
			p.style.color = "black";
		}
	});
	if(selectedFifth != null){
		selectedFifth.style.color = 'red'
	}
});


say.addEventListener('click',function(params) {
	speakNow(textToSpeak);
	if(final.includes('')){
		alert("Incomplete Story!")
	}
})
