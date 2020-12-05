name_of_the_user = "";
contact_number = "08816251333";
address = "Vishnupur, Kovvada Rd, Kovvada, Andhra Pradesh 534202";
var reply = "";

/*
* creat the menu user defind object which contains the functionality belongs to the college bot
*/
var Menu_data = {
	about_college: "Vishnu Institute of Technology, was established in 2008 by Sri Vishnu Educational Society (SVES)," +
		"a leading educational trust to promote quality education, under the aegis of eminent philanthropist Padma Bhushan Dr. B.V.Raju (Late)." +
		"The institute is approved by AICTE and is permanently affiliated to JNTUK, Kakinada. It is also accredited by NBA and NAAC 'A++' with 3.51 CGPA.",
	courses_offered: "1. Computer Science & Engineering. " + '<br>' +
		" 2. Electronics & Communication Engineering. " + '<br>' +
		" 3. Electrical & Electronics Engineering. " + '<br>' +
		" 4. Mechanical Engineering. " + '<br>' +
		"5. Information Technology. " + '<br>' +
		"6. Civil Engineering. " + '<br>' +
		"7. Basic Sciences " + '<br>' +
		"8. Business Administration",
	fee_structure: "General college fee for B.Tech is 95,000. If you want to know about NRI fee details contact - " + contact_number + '<br>' + "For personal assistance you can visit " + address,
	placement_offered: "Our students are being placed at major companies like TCS, Capegemini, Amazon, Amdocs, SenecaGlobal, Infosys etc..with 100% placements every year. ",
	sports_and_NCC: "Our students are encouraged to particpate in different tournments for Cricket, volleyball, BasketBall," +
		"Throwball,Badminton etc..We have special sports club to maintain all these.",
	internships_and_projects: "Every year our students are doing Interships at different Multi-National Companies and few are being recruited directly after the internships.",
	research: "We have a separate research department to sponsor the prestigious projects like R&D,DRDO etc. We have an Innovation centre to enhance students skills and to implement new ideas",
	miscellaneous: "Apart from academic subjects,our college provides various additional courses like Pega,Game Development,Android App Development etc.. for students career development",
	Extracurricular_activities: "We have Different clubs to support students interests like Music, Dance, Photography, Astronomy, Coding etc..",
	Notification: "Right now we don't have any new notifications",

	display_about_college: function () {
		$('.chat-body').append('<p class="chat-reply">About Our College </p><br>');
		$('.chat-body').append('<p class="chat-send">' + Menu_data.about_college + '</a></p><br>');
	},
	display_courses_offered: function () {
		$('.chat-body').append('<p class="chat-reply">About Courses Offered</p><br>');
		$('.chat-body').append('<p class="chat-send">' + Menu_data.courses_offered + '</p><br>');
	},
	display_fee_structure: function () {
		$('.chat-body').append('<p class="chat-reply">About Fee Structure</p><br>');
		$('.chat-body').append('<p class="chat-send">' + Menu_data.fee_structure + '</p><br>');
	},
	display_placements_offered: function () {
		$('.chat-body').append('<p class="chat-reply">About Placements Offered</p><br>');
		$('.chat-body').append('<p class="chat-send">' + Menu_data.placement_offered + '</p><br>');
	},
	display_sports_NCC: function () {
		$('.chat-body').append('<p class="chat-reply">Sports and NCC</p><br>');
		$('.chat-body').append('<p class="chat-send">' + Menu_data.sports_and_NCC + '</p><br>');
	},
	display_internships_and_projects: function () {
		$('.chat-body').append('<p class="chat-reply">About Internships&projects</p><br>');
		$('.chat-body').append('<p class="chat-send">' + Menu_data.internships_and_projects + '</p><br>');
	},
	disaplay_miscellaneous: function () {
		$('.chat-body').append('<p class="chat-reply">About Miscellaneous Fee</p><br>');
		$('.chat-body').append('<p class="chat-send">' + Menu_data.miscellaneous + '</p><br>');
	},
	display_Extracurricular_activities: function () {
		$('.chat-body').append('<p class="chat-reply">About Extracurricular Activities</p><br>');
		$('.chat-body').append('<p class="chat-send">' + Menu_data.Extracurricular_activities + '</p><br>');
	},
	display_Notification: function () {
		$('.chat-body').append('<p class="chat-reply">About Notification</p><br>');
		$('.chat-body').append('<p class="chat-send">' + Menu_data.Notification + '</p><br>');
	},
	display_research: function () {
		$('.chat-body').append('<p class="chat-reply">About Research</p><br>');
		$('.chat-body').append('<p class="chat-send">' + Menu_data.research + '</p><br>');
	}

};

/*
* it will execute when the enter key is press on your keybord
* when the enter key pressed it automatically calls the button onClick event  
*/

$("#msg").keyup(function (event) {
	if (event.keyCode === 13) {
		$(".btn").click();
	}
});
/*
* this function returns the block or array of buttons on bot window
*/
function show_menu_buttons() {
	return '<button type="button" class="about_college">About College</button>' +
		'<button type="button" class="Courses_offered">Courses offered </button>' +
		'<button type="button" class="placements">Placements</button>' +
		'<button type="button" class="Fee">Fee Structure</button>' +
		'<button type="button" class="sports">Sports & NCC</button>' +
		'<button type="button" class="projects">Internships&projects</button>' +
		'<button type="button" class="research">Research Work</button>' +
		'<button type="button" class="mfee">Miscellaneous</button>' +
		'<button type="button" class="EActivities">Extracurricular Activities</button>' +
		'<button type="button" class="notification">Notifications</button>';
}
/*
* used to open the bot window
*/
$('.openChatBtn').click(function () {
	document.querySelector(".openChat").style.display = "block";
});
/*
* used to close the bot window
*/
$('.close').click(function () {
	document.querySelector(".openChat").style.display = "none";
});
var greetings = true;
$(document).ready(function () {
	$('.btn').click(function () {
		reply = read_message();
		$('#msg').val("");
		/*
		*this fuction is used to implement for the first greeting to the user                
		*/
		if (greetings) {
			name_of_the_user = reply;
			$('.chat-body').append('<p class="chat-reply">' + reply + '</p><br>');
			$('.chat-body').append('<p class="chat-send">' + greeting_message() + '</p><br>');
			$('.chat-body').append('<p class="chat-send">' + get_time_greet() + " " + reply + '</p><br>');
			$('.chat-body').append('<p class="chat-send"> What information do you want from me ? </p><br>');
			$('.chat-body').append('<p class="chat-send">' + show_menu_buttons() + '</p>');
		}

		/*
		* the block of if statements exexute after the greeting variable is false
		*/
		if (!greetings) {
			if (ignore_case(reply, "About college")) {
				Menu_data.display_about_college();
				$('.chat-body').append('<p class="chat-send">' + "To see the main menu enter the keyword MENU" + '</p>');
			} else if (ignore_case(reply, "Courses offered")) {
				Menu_data.display_courses_offered();
				$('.chat-body').append('<p class="chat-send">' + "To see the main menu enter the keyword MENU" + '</p>');
			} else if (ignore_case(reply, "Placements")) {
				Menu_data.display_placements_offered();
				$('.chat-body').append('<p class="chat-send">' + "To see the main menu enter the keyword MENU" + '</p>');
			} else if (ignore_case(reply, "Fee structure")) {
				Menu_data.display_fee_structure();
				$('.chat-body').append('<p class="chat-send">' + "To see the main menu enter the keyword MENU" + '</p>');
			} else if (ignore_case(reply, "Sports and NCC")) {
				Menu_data.display_sports_NCC();
				$('.chat-body').append('<p class="chat-send">' + "To see the main menu enter the keyword MENU" + '</p>');
			} else if (ignore_case(reply, "Internships and projects")) {
				Menu_data.display_internships_and_projects();
				$('.chat-body').append('<p class="chat-send">' + "To see the main menu enter the keyword MENU" + '</p>');
			} else if (ignore_case(reply, "Research Work")) {
				Menu_data.display_research();
				$('.chat-body').append('<p class="chat-send">' + "To see the main menu enter the keyword MENU" + '</p>');
			} else if (ignore_case(reply, "Miscellaneous")) {
				Menu_data.disaplay_miscellaneous();
				$('.chat-body').append('<p class="chat-send">' + "To see the main menu enter the keyword MENU" + '</p>');
			} else if (ignore_case(reply, "Extracurricular Activities")) {
				Menu_data.display_Extracurricular_activities();
				$('.chat-body').append('<p class="chat-send">' + "To see the main menu enter the keyword MENU" + '</p>');
			} else if (ignore_case(reply, "Notification")) {
				Menu_data.display_Notification();
				$('.chat-body').append('<p class="chat-send">' + "To see the main menu enter the keyword MENU" + '</p>');
			}
			else if (ignore_case(reply, 'Menu')) {
				$('.chat-body').append('<p class="chat-reply">' + reply + '</p>');
				$('.chat-body').append('<p class="chat-send">' + show_menu_buttons() + '</p>');
			}
			else {
				$('.chat-body').append('<p class="chat-reply">' + reply + '</p>');
				$('.chat-body').append('<p class="chat-send">' + name_of_the_user + " Sorry for the inconvenience please enter a valid keyword or use button Menu to interact with this Bot" + '</p>');
				$('.chat-body').append('<p class="chat-send">' + show_menu_buttons() + '</p>');
			}
		}

		/*
		* button events corrsponding implementation
		*/
		$('.about_college').click(function () {
			Menu_data.display_about_college();
			$('.chat-body').append('<p class="chat-send">' + "To see the main menu enter the keyword MENU" + '</p>');
		});
		$('.Courses_offered').click(function () {
			Menu_data.display_courses_offered();
			$('.chat-body').append('<p class="chat-send">' + "To see the main menu enter the keyword MENU" + '</p>');
		});
		$('.placements').click(function () {
			Menu_data.display_placements_offered();
			$('.chat-body').append('<p class="chat-send">' + "To see the main menu enter the keyword MENU" + '</p>');
		});
		$('.Fee').click(function () {
			Menu_data.display_fee_structure();
			$('.chat-body').append('<p class="chat-send">' + "To see the main menu enter the keyword MENU" + '</p>');
		});
		$('.sports').click(function () {
			Menu_data.display_sports_NCC();
			$('.chat-body').append('<p class="chat-send">' + "To see the main menu enter the keyword MENU" + '</p>');
		});
		$('.projects').click(function () {
			Menu_data.display_internships_and_projects();
			$('.chat-body').append('<p class="chat-send">' + "To see the main menu enter the keyword MENU" + '</p>');
		});
		$('.research').click(function () {
			Menu_data.display_research();
			$('.chat-body').append('<p class="chat-send">' + "To see the main menu enter the keyword MENU" + '</p>');
		});
		$('.mfee').click(function () {
			Menu_data.disaplay_miscellaneous();
			$('.chat-body').append('<p class="chat-send">' + "To see the main menu enter the keyword MENU" + '</p>');
		});
		$('.EActivities').click(function () {
			Menu_data.display_Extracurricular_activities();
			$('.chat-body').append('<p class="chat-send">' + "To see the main menu enter the keyword MENU" + '</p>');
		});
		$('.notification').click(function () {
			Menu_data.display_Notification();
			$('.chat-body').append('<p class="chat-send">' + "To see the main menu enter the keyword MENU" + '</p>');
		});
		greetings = false;
	});

});

/* 
*this function returns true/false by ignoring the LowerCase & UpperCase of the string
*/

function ignore_case(str, c_str) {
	return str.toUpperCase() == c_str.toUpperCase() || str.toLowerCase() == c_str.toLowerCase();
}

/* 
*this function returns the greeting message randomly.
*/

function greeting_message() {
	greeting_messages = ["I am here to help you with college Information", "A very warm welcome to our college I will help you to give information about this college"]
	index = Math.floor(Math.random() * 2);
	return greeting_messages[index];
}

/* 
*find the current time to greet the  user like good moring,good afternoon like....
*this function returns the wishes message.
*/

function get_time_greet() {
	var d = new Date();
	var hour = d.getHours();
	var msg;
	if (hour < 12)
		msg = "Good Morning";
	if (hour > 12 && hour <= 17)
		msg = "Good Afternoon";
	else if (hour > 17 && hour <= 21)
		msg = "Good Evening";
	else
		msg = "hey it's late Night";
	return msg;
}
function read_message() {
	return document.getElementById('msg').value;
}