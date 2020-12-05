
var greetings = true;
$('.openChatBtn').click(function () {
	document.querySelector(".openChat").style.display = "block";
});
/*
* used to close the bot window
*/
$('.close').click(function () {
	document.querySelector(".openChat").style.display = "none";
});
$(document).ready(function () {
	$('.btn').click(function () {
		reply = read_message();
		$('#msg').val("");
		/*
		*this fuction is used to implement for the first greeting to the user                
		*/
		if (greetings) {
            name_of_the_user = reply;
            $.post("greeting",{key:"name",message:reply})
            .done(function(response){
            $('.chat-body').append(response);
			});
			// $('.chat-body').append('<p class="chat-reply">' + reply + '</p><br>');
			// $('.chat-body').append('<p class="chat-send">' + greeting_message() + '</p><br>');
			// $('.chat-body').append('<p class="chat-send">' + get_time_greet() + " " + reply + '</p><br>');
			// $('.chat-body').append('<p class="chat-send"> What information do you want from me ? </p><br>');
			// $('.chat-body').append('<p class="chat-send">' + show_menu_buttons() + '</p>');
        }
    });
});
function read_message() {
	return document.getElementById('msg').value;
}
function get_time_greet() {
	var d = new Date();
	var hour = d.getHours();
	return hour;
}