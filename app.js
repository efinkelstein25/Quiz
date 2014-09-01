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
new Question(1, "Which player won the Golden Boot award?", ["James Rodriguez", "Arjen Robben", "Neymar", "Lionel Messi"], 0), 
new Question(2, "Which team suffered the worst loss by a defending champion?", ["Italy","Brazil" , "England", "Spain"], 3),
new Question(3, "Which player got banned for biting an Italian player in the penalty box?", ["Wayne Rooney", "Mario Balotelli", "Luis Suarez", "Hulk"], 2),
new Question(4, "Who won the third place title?", ["Brazil", "Argentina", "Costa Rica", "Netherlands"], 3),
new Question(5, "What was the score of the disasterous Germany-Brazil game?", ["4-0", "7-1", "6-2", "5-3"], 1)
]

$(".answers").hide();
$("#score").hide();
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
		$("#score").show();
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
		/*
		$("#counter").hide();
		$(".question").hide();*/
		$("#score").hide();
		$("#counter").text("");
		$(".question").text("Congrats! You got " + score + " out of 5 correct!");
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