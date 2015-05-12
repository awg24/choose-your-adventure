function* chooseYourAdventure() {


	yield adventure.say("You're walking down a long corridor... you see a door to your right, a door to your left, and a door in front of you.");

	var doorChoice = yield adventure.choose("Which door do you choose?", "right","left","front");

	if(doorChoice === "right") {
		yield adventure.say("You enter the right door, and notice that it's a little jammed...");
		var strengthCheck = yield adventure.choose("Are you strong enough to open it?", "yes","no");
		if(strengthCheck === "yes"){
			yield adventure.say("You force the door open with your mighty strength! However, once you finish congratulating yourself you notice there's blood all over the floor.. ");
			yield adventure.say("A monster jumps out at you and tries to kill you, luckily you dodge out of the way and grab the first 'weapon' you see..");
			var weaponChoice = yield adventure.choose("Which 'weapon' did you grab?", "banana", "nokia phone","small mirror");
			switch(weaponChoice) {
				case "banana":
					yield adventure.say("At the very moment the monster is going to eat you whole, you wonder why you grabbed the banana... You die.");
				break;
				case "nokia phone":
					yield adventure.say("A fine weapon choice, you bash the monster over the head and you hear the crack of a skull splitting.. You live to tell the tale.");
				break;
				case "small mirror":
					yield adventure.say("You point the mirror in the direction of the monster.. The monster sees himself and starts to cry because it's so ugly.. You survive, but feel a little bad for the monster.")
				break;
				default: "just.. go"
			}
		} else {
			yield adventure.say("You walk away from the door.. that wasn't very interesting.. Refresh yourself and start again.");
		}
	} else if(doorChoice === "left") {
				var intelligenceCheck = yield adventure.ask("You enter the left door, and you see a piece of paper laying on the table. You approach the table and carefully read the paper. It has only one question.. Solve this equation (3+4)/7+3-4*3-4(4)");
				console.log(typeof intelligenceCheck);
				if(intelligenceCheck != -24){
					yield adventure.say("Your terrible math skills have finally caught up to you... A monster jumps out and brutally murders you.");
				} else {
					yield adventure.say("6th grade math has finally proved useful as it just saved your life... A monster walks out of the shadows and opens a door to freedom.")
				}
	} else if(doorChoice === "front"){
				var skillCheck = yield adventure.choose("You notice the door is locked.. are you skilled enough to pick the lock?", "yes", "no");
				if(skillCheck === "yes") {
					yield adventure.say("You open the door with you expert lockpicking skills.. You notice a monster ahead of you blocking the way out.");
					var fight = yield adventure.choose("How do you fight the monster?", "kick it in the head", "jump over it and run for the door");
					if(fight =="kick it in the head"){
						yield adventure.say("Your well aimed kick knocks the monster unconscious and you casually walk to the exit.. You survive.");
					} else {
						yield adventure.say("As you try to jump over the monster it grabs you and tears you in half... You die.")
					}
				} else {
					yield adventure.say("That wasn't very interesting.. Refresh yourself and try again")
				}

			}
}