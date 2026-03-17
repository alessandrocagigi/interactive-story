const story = {

start:{
text:`You're at your locker during lunch at your high school in the US Your friend Jake looks around and pulls a joint from his hoodie
“Come on” he says quietly “Just one hit Its not a big deal”
 After all around 51% of people in America have tried weed
What do you do?`,
choices:[
{text:"Refuse", next:"scene2"},
{text:"Accept", next:"scene3"}
]
},
scene2:{
text:`You refused the joint Jake looks at you weird “Alright fine.” he says then quickly turns away and goes into the bathroom. You smell the smoke from outside and then head to class. You then hear later in the day that Jake got caught with red eyes and got sent home. You have avoided that and you feel pretty relived about it.`,
choices:[
{text:"Finish", next:"start"},
]
},

scene3:{
text:`You said yes Jake quickly takes you into the bathroom and he lights the joint and takes a few drags then he looks at you. “Here you go bro.” as you hold the joint in your hands you think if you should take big deep puffs like Jake or take little Drags.`,
choices:[
{text:"Big drags", next:"scene4"},
{text:"Little drags", next:"scene5"}
]
},

scene4:{
text:`You take a few big drags and you start coughing like hell so much so that it brings you to tears then you start feeling calmer like suddenly your problems dont matter as much. You like this but you want more of it do you take more big drags or should you slow it down a bit`,
choices:[
{text:"Big Drags", next:"scene6"},
{text:"Little Drags", next:"scene7"}
]
},

scene5:{
text:`You finish smoking the joint after takeing little drags and you feel great, your problems feel like they dont matter so much anymore and you feel like you are at peace, you have to go to class so you go to class`,
choices:[
{text:"go to class", next:"scene9"}
]
},

scene6:{
text:`You Take more big drags “Slow down bro this your first time take it easy.” you dont listen and you cough so much that you cant speak without it hurting and you coughing more. Then you check the time you have 5 minutes to lock in the joint is almost finished and Jake is already ripping it. Should you go to class or skip to stay in the bathroom`,
choices:[
{text:"Skip", next:"scene10"},
{text:"Go to class", next:"scene11"}
]
},

scene7:{
text:`You take smaller drags and you feel weak and paranoid  “You took a little much for a first timer but you should be fine.” Jake says, you feel scared and very paranoid but you can move and you only feel a little nauseous Should you go to class? `,
choices:[
{text:"skip", next:"scene12"},
{text:"Go to class", next:"scene13"}
]
},

scene8:{
text:`You start smoking a lot to the point where you smoke every day, your grades drop and you are caught a few times but you dont care. Months go by and the feeling is replaced by a comfortable numbness, then Jake comes to you with something else. “Yo bro I got some X do you want it?” You really want the ecstasy because you barley feel a thing from weed How much X should you take?`,
choices:[
{text:"Half a Pill", next:"scene15"},
{text:"A Full Pill", next:"scene16"}
]
},

scene9:{
text:`You go to class and the hallway looks unaturally long, you sit down at your desk and you cant get any work done. But you dont care because you are overcome with a wave of unreal calm. Jake comes to you after school and says “what do you think?”`,
choices:[
{text:"“It was great but I think I should not do this again or at the very least not do it often cause I want to get good grades and stuff.”", next:"scene14"},
{text:"“Im smoking again, no question bro.”", next:"scene8"}
]
},

scene10:{
text:`You skip class to stay in the bathroom. And it was the right call you feel your muscles relaxing but a little too much and you feel like puking when you turn your head. Then Jake notices “Dude you smoked way too much for a first timer, tell you what sit down on the toilet and stay there until school ends I will tell Mrs Rachel that you are sick and had to go home.” You try to speak but then you feel yourself falling  and you drop to the toilet and start puking Jake tells you to lock yourself in and stay there so you do for the next 2 and a half hours you feel horrible and you cant move your head or stand up without falling and you are plagued with anxious thoughts and paranoia. You tell yourself that you will never do this again`,
choices:[
{text:"Finish", next:"start"}
]
},

scene11:{
text:`You go to class and you can barley stand, you sit down at you desk and put your head down the whole time you are having a horrible panic attack. Then you lift up your head and puke everywhere. You are suspended from school and chewed out by your parents`,
choices:[
{text:"Finish", next:"start"}
]
},

scene12:{
text:`You ride it out in the bathroom and you feel paranoid the whole time but you make it through and you go home without getting caught`,
choices:[
{text:"Finish", next:"start"}
]
},

scene13:{
text:`You go to class and you are terrified, you sit down and then some time goes by. Suddenly your teacher calls you out and sees that your eyes are really red, you get caught and suspended then scolded by your parents`,
choices:[
{text:"Finish", next:"start"}
]
},

scene14:{
text:`Jake looks at you weird “Fair enough you dont gotta smoke often.” He sounds disappointed but you stick to what you think is best. You get decent grades and you smoke with Jake once a month, then once every two months then never.`,
choices:[{text:"Finish", next:"start"}]
},

scene15:{
text:`You take half a pill and you love it, it is the best feeling you have ever felt and you need to feel this again. Months go by and you are hooked on X but even that starts to feel dull so you search for higher and higher doses until you can barley feel the strongest pill. Then your plug tells you he has some meth, you want it so you go to your plug he hands you the Meth, you dont have much to lose you wasted your youth and you now work in a Walmart and you live in a 30 square meter crack house you dont have much else to ruin, you are addicted, you have no choice`,
choices:[{text:"Take the Meth", next:"scene17"}]
},

scene16:{
text:`You take a full pill you feel great but more scared then you should be, your heart beats really really fast and you start freaking out. Then you start seeing stars and you fall to the ground, your chest hurts like hell and Jake calls the ambulance. You overdosed on X and you wake up in a hospital and your parents force you into a rehabilitation organization to try and get your life straight, you decide that you want to get better and have a normal life so you go to rehab and try your best to quit the drugs`,
choices:[{text:"Finish", next:"start"}]
},

scene17:{
text:`You take the meth and its even better than the first time you took X you love it. You buy more of it. 13% of Americans have ended up in your situation. You threw your carrer, your grades, friendships, family ties. Everything for this you feel like you cant go back and you are stuck here and you dont have a choice but to take these substances. You take harder and harder stuff until you have nothing left other than the drugs.`,
choices:[{text:"Finish", next:"start"}]
},


};


function showScene(scene){

const storyText = document.getElementById("storyText");
const choices = document.getElementById("choices");

storyText.innerText = story[scene].text;

choices.innerHTML = "";

story[scene].choices.forEach(choice => {

const button = document.createElement("button");

button.innerText = choice.text;

button.onclick = () => showScene(choice.next);

choices.appendChild(button);

});

}

showScene("start");