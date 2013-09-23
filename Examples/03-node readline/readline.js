var rl = require('readline');

var prompts = rl.createInterface(process.stdin, process.stdout);

prompts.question("How many years of working experience you have in corporate? ",function(experience){
	
	var msg="";

if(experience < 5)
	msg="Your need " + (5-experience) +" more years of experince to appy for senior position";
else
	msg= "You can apply for this position";
	
console.log(msg);
process.exit();	
	
});


		
