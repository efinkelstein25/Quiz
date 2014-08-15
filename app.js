$(document).ready(function() {

function Question(number, question, options, correct) {
	this.number = number;
	this.question = question;
	this.options = options;
	this.correct = correct;
}

count = 0;
score = 0;

var questions = [
new Question(1, "AAA", ["a", "b", "c", "d"], 0), 
new Question(2, "BBB", ["e", "f", "g", "h"], 1),
new Question(3, "CCC", ["i", "j", "k", "l"], 2),
new Question(4, "DDD", ["m", "n", "o", "p"], 3),
new Question(5, "EEE", ["q", "r", "s", "t"], 1)
]


/*setQuestion(questions, count);*/

/*on click, for the button .submit*/

$(".submit").click(function(){
	console.log(count);
	/*
	if ($('input[name=option]').attr('checked',false))
	{
		alert("Please select an answer!");
	}*/
	if (count < 5){
	alert($('input[name=option]:checked').val());
	checkIfCorrect(questions);
	setQuestion(questions, count);
	count++;
	}
	$('input[name=option]').attr('checked',false);
});




});/*close document ready*/

function setQuestion(q, number){
	$("#counter").text("Question " + (count+1));
	$(".question").text(q[number].question);
	$(".answer1").text(q[number].options[0]);
	$(".answer2").text(q[number].options[1]);
	$(".answer3").text(q[number].options[2]);
	$(".answer4").text(q[number].options[3]);
}

function checkIfCorrect(q){
	if ($('input[name=option]:checked').val() == q[count].correct){
		score++;
	}
}