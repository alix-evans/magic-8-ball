$(document).ready(function(){  

var magic8Ball = {};
	magic8Ball.listOfAnswers = ["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely", "You may rely on it", "As I see it", "Yes", "Most likely", "Outlook good", "Signs point to yes", "Reply hazy try again", "Ask again later", "Better not tell you now", "Cannot predict now", "Concentrate and ask again", "Don't count on it", "My reply is no", "My sources say no", "Outlook not so good", "Very doubtful"];
	magic8Ball.ask = function(question)
	{
		$("#8ball").effect( "shake" );
		$("#answer").fadeIn(4000);
		var answerIndex = Math.floor(Math.random() * this.listOfAnswers.length);
		var answerText = this.listOfAnswers[answerIndex];
		$("#answer").text( answerText );
		console.log(question);
		console.log(answerText);
	};
var onClick = function() {
	$("#answer").hide();
	$("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/8side.png");
	var question = prompt("Ask me a yes or no question.");
	magic8Ball.ask(question);
	setTimeout(
			function () {
		$("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/answerside.png");
			}, 500);
}

$("#answer").hide();
$("#questionButton").click( onClick );
	
});