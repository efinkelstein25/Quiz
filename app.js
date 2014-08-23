$(document).ready(function() {

function Question(number, question, options, correct) {
	this.number = number;
	this.question = question;
	this.options = options;
	this.correct = correct;
}

count = 0;
score = 0;
var clicked = 0;
var moveFromLanding = false;
var restart = false;

var questions = [
new Question(1, "AAA", ["a", "b", "c", "d"], 0), 
new Question(2, "BBB", ["e", "f", "g", "h"], 1),
new Question(3, "CCC", ["i", "j", "k", "l"], 2),
new Question(4, "DDD", ["m", "n", "o", "p"], 3),
new Question(5, "EEE", ["q", "r", "s", "t"], 1)
]

$(".answers").hide();
/*setQuestion(questions, count);*/

/*on click, for the button .submit*/

$(".submit").click(function(){
	console.log("count at beg " + count);
	

	if (count === 6 )
	{
		console.log("IM HERE");
		restart =true;
	}

    if (count === 6 && restart == true){
		console.log("HELLO");
		clicked = 0;
		count = 0;
		score = 0;
		restart = false;
	}

	if (count === 0){
		$(".submit").text("Next Question");
		$(".answers").show();
		$("#counter").show();
		$(".question").show();
		if (clicked < 1){
		setQuestion(questions, count);
		}
		clicked++;
	}
	
	if (clicked > 1 && count < 5){
	checkIfCorrect(questions);
	count++;
	if(count < 5){
	setQuestion(questions, count);
	}
	}
	$("#score").text("Score: " + score);
	$('input[name=option]').attr('checked',false);

	if (count === 5){
		count++;
		$(".answers").hide();
		$("#counter").hide();
		$(".question").hide();
		$(".submit").text("Play Again!");
	}

	


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
	console.log("count " + count);
	console.log("Checked option " + $('input[name=option]:checked').val());
	console.log("Value in q " + q[count].correct);
	if ($('input[name=option]:checked').val() == q[count].correct){
		console.log("count "  + count);
		score++;
		console.log("score " + score);
	}

}