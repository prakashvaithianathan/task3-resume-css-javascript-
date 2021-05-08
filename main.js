var mainContainer = document.createElement('div');
mainContainer.setAttribute('class','container')
var topBox = document.createElement('div');
topBox.setAttribute('class','top')
var imageDiv = document.createElement('div');
imageDiv.setAttribute('class','image')
var image = document.createElement('img');
image.setAttribute('src',"./profile.png")
imageDiv.appendChild(image);



mainContainer.appendChild(topBox);

var whiteLine = document.createElement('div');
whiteLine.setAttribute('class','whiteLine');
var names = document.createElement('div');
names.setAttribute('class','name');
var h3= document.createElement('h3');
h3.innerHTML="brian dudey";
names.appendChild(h3);
whiteLine.appendChild(names);


topBox.appendChild(imageDiv);


mainContainer.appendChild(whiteLine);

console.log(mainContainer);

topBox.appendChild(whiteLine);



var topLine = document.createElement('div');
topLine.setAttribute('class','topLine');
var topLineParagraph = document.createElement('p');
topLineParagraph.innerHTML="N.Damen Avenue, Chicago 99999 | 999-999-9999 | hello@kickresume.com | www.kickresume.com";
topLine.appendChild(topLineParagraph);
mainContainer.appendChild(topLine);

var line = document.createElement('div');
line.setAttribute('class','line')
mainContainer.appendChild(line);



document.body.appendChild(mainContainer);


var mainBox = document.createElement('div');
mainBox.setAttribute('class','mainBox');
var box  = document.createElement('div');
box.setAttribute('class','box');
var leftBox = document.createElement('div');
leftBox.setAttribute('class','leftBox');
var profile = document.createElement('div');
profile.setAttribute('class','profile');
var profileIcon = document.createElement('img');  //!Change it icon
profileIcon.setAttribute('class','fas fa-user-circle')
profileIcon.setAttribute('src','profileIcon.png')
console.log(profileIcon);
profile.appendChild(profileIcon);

var profileh2 = document.createElement('h2');
profileh2.innerHTML="Profile"
profile.appendChild(profileh2);
var profilePara = document.createElement('p');
profilePara.innerHTML = "Innovative optimuzed solutoin seeker. Excited to be at the deployment phase of my new career as a web developer. I ma ambitious, adventurous, assidous, animated, and an aliteration advocate.";
profile.appendChild(profilePara)

leftBox.appendChild(profile);
box.appendChild(leftBox);
mainBox.appendChild(box);
mainContainer.appendChild(mainBox);


var skills = document.createElement('div');
skills.setAttribute('class','skills')
var skillsIcon = document.createElement('img'); //! change icon
skillsIcon.setAttribute('class','fas fa-flask');
skillsIcon.setAttribute('src','skills.png')
skills.appendChild(skillsIcon);
var skillsh2 = document.createElement('h2');
skillsh2.innerHTML="Skills";
skills.appendChild(skillsh2)
var skillsBox = document.createElement('div');
skillsBox.setAttribute('class','skillsBox');
var skillsBold = document.createElement('b');
skillsBold.innerHTML = "Technical Skills";
skillsBox.appendChild(skillsBold);
var technicalSkills = document.createElement('div');
technicalSkills.setAttribute('class','technicalSkills');
skillsBox.appendChild(technicalSkills);
var name1 = document.createElement('div');
name1.setAttribute('class','name1');



var technicalSkillsNamesList = ["Javascript","HTML","React","Redux","Mongo","CSS","Deployement"];

technicalSkillsNamesList.forEach((value,i) => {
    var technicalSkillsNames = document.createElement('p');
    technicalSkillsNames.innerHTML=value;
    name1.appendChild(technicalSkillsNames);
});

technicalSkills.appendChild(name1);


var range1 = document.createElement('div');
range1.setAttribute('class','range1');

var technicalSkillsRangeValue = [85,75,90,80,95,85,100];

technicalSkillsRangeValue.forEach((value)=>{
    var technicalSkillsRange = document.createElement('input');
    technicalSkillsRange.setAttribute('type','range');
    technicalSkillsRange.disabled=true;
    technicalSkillsRange.setAttribute('value',value);
    range1.appendChild(technicalSkillsRange);
})
technicalSkills.appendChild(range1)
skillsBox.appendChild(technicalSkills);
skills.appendChild(skillsBox);

var additionalBold = document.createElement('b');
additionalBold.innerHTML = "Additional Skills";

skillsBox.appendChild(additionalBold);
var additionalSkills =document.createElement('div');
additionalSkills.setAttribute('class','additionalSkills');
var name2 = document.createElement('div');
name2.setAttribute('class','name2');

var additonalSkillsNamesList = ["Project Management","Recruitment","Business Development","Editing","Fundraising"];
additonalSkillsNamesList.forEach((value)=>{
    var additionalSkillsNames = document.createElement('p');
    additionalSkillsNames.innerHTML = value;
name2.appendChild(additionalSkillsNames);
})
additionalSkills.appendChild(name2);


var range2 = document.createElement('div');
range2.setAttribute('class','range2');
var additionalSkillsRangeValue = [80,87,95,75,83];

additionalSkillsRangeValue.forEach((value)=>{
    var additionalSkillsRange = document.createElement('input');
    additionalSkillsRange.setAttribute('type','range');
    additionalSkillsRange.disabled=true;
    additionalSkillsRange.setAttribute("value",value);
     range2.appendChild(additionalSkillsRange);
})



additionalSkills.appendChild(range2)
skillsBox.appendChild(additionalSkills);
skills.appendChild(skillsBox);
leftBox.appendChild(skills)

var workExperience = document.createElement('div');
workExperience.setAttribute('class','workExperience');

var workIcon = document.createElement('img');  //! change icon
workIcon.setAttribute('class','fas fa-briefcase');
workIcon.setAttribute('src','workExperience.png')
workExperience.appendChild(workIcon);
var workExperienceh2 = document.createElement('h2');
workExperienceh2.innerHTML="Work Experience";
workExperience.appendChild(workExperienceh2);

var eventManagement = document.createElement('div');
eventManagement.setAttribute('class','eventManagement');

var workExperienceBold = document.createElement('b');
workExperienceBold.innerHTML="Event Manager";
var dateSpan = document.createElement('span');
dateSpan.innerHTML="03/2014 - 02/2017 </span> <br> <span>C3 Presents, Washington DC ";
dateSpan.setAttribute('class','dateRight');
eventManagement.appendChild(workExperienceBold);
eventManagement.appendChild(dateSpan);
workExperience.appendChild(eventManagement);
var workExperienceUl = document.createElement('ul');
var workExperience1List = document.createElement('li');
workExperience1List.innerHTML='Lead and execute all phase of event planning and production spanning committee recruitment training, vendor relationships and on-site facilitaition';

var workExperience2List = document.createElement('li');
workExperience2List.innerHTML='Brought new business to the organization through relentless networking and steqardship which helped the compan witn the bid for the State Department Summit on the Middle East and, the companies largest civic event to date, the United State of Women.';

var workExperience3List = document.createElement('li');
workExperience3List.innerHTML='Exercise fiscal control over budger creation, tracking and reporting. Collaborate with employees at all organizational levels to advance cohesive opertaions.';

workExperienceUl.appendChild(workExperience1List);
workExperienceUl.appendChild(workExperience2List);
workExperienceUl.appendChild(workExperience3List);


workExperience.appendChild(workExperienceUl);
leftBox.appendChild(workExperience);



var rightBox = document.createElement('div');
rightBox.setAttribute('class','rightBox');

var workExperience2 = document.createElement('div');
workExperience2.setAttribute('class','workExperience2');

var workExperience2Icon = document.createElement('img'); //! change icon
workExperience2Icon.setAttribute('class','fas fa-briefcase2');
workExperience2Icon.setAttribute('src','workExperience.png')
workExperience2.appendChild(workExperience2Icon);
var workExperience2h2 = document.createElement('h2');
workExperience2h2.innerHTML='Work Experience';
workExperience2.appendChild(workExperience2h2);

var communityManagement = document.createElement('div');
communityManagement.setAttribute('class','communityManagement');

var cRM = document.createElement('b');
cRM.innerHTML="Community Relations <br>Manager ";
cRM.setAttribute('class','cRM');
var span1 = document.createElement('span');
span1.innerHTML="06/2011 - 01/2014 <br/>"
span1.setAttribute('class','span1');
var span2 = document.createElement('span');
span2.innerHTML="Gay & Lesbian Elder Housing, Los Angeles";
span2.setAttribute('class','span2');
communityManagement.appendChild(cRM);
communityManagement.appendChild(span1);
communityManagement.appendChild(span2);
var communityManagementUl = document.createElement('ul');

communityManagement1List = document.createElement('li');
communityManagement1List.innerHTML="Arranging presentations an pitch deck.";
communityManagement2List = document.createElement('li');
communityManagement2List.innerHTML="Designing a PR plan and establishing important focus points";
communityManagement3List = document.createElement('li');
communityManagement2List.innerHTML="Designing, creating and managing content across multiple communication platforms.";
communityManagement4List = document.createElement('li');
communityManagement4List.innerHTML="Building relationships with key media players.";

communityManagementUl.appendChild(communityManagement1List);
communityManagementUl.appendChild(communityManagement2List);
communityManagementUl.appendChild(communityManagement3List);
communityManagementUl.appendChild(communityManagement4List);

communityManagement.appendChild(communityManagementUl);
workExperience2.appendChild(communityManagement);
rightBox.appendChild(workExperience2);

box.appendChild(rightBox);

var education = document.createElement('div');
education.setAttribute('class', 'education');

var educationIcon = document.createElement('img'); //! change icon
educationIcon.setAttribute('class','fas fa-graduation-cap');
educationIcon.setAttribute('src','education.png')
education.appendChild(educationIcon);
var educationh3 = document.createElement('h3');
educationh3.innerHTML='Education';
education.appendChild(educationh3);
var educationBold = document.createElement('b');
educationBold.setAttribute('class','edu');
educationBold.innerHTML="Engineering Immersion <br>Program";
var span3 = document.createElement('span');
span3.setAttribute('class','span3');
span3.innerHTML="11/2018 - 06/2018 <br/>" ;
var span4 = document.createElement('span');
span4.setAttribute('class','span4');
span4.innerHTML="Thinkful, Chicago, IL";
education.appendChild(educationBold);
education.appendChild(span3);
education.appendChild(span4);


var educationP = document.createElement('p');
educationP.innerHTML="Project-focused intensive program with emphasis on Mongo, Express, React, and Javascript(MERN) technical stack";
education.appendChild(educationP);

var educationUl =document.createElement('ul');
var education1List = document.createElement('li');
education1List.innerHTML=`Developed a full-stack web applion,renewu;using react that allows users to explore varlore a spects of meditation. user's progress is stored on a backend created using node and mongo db `;
var education2List = document.createElement('li');
education2List.innerHTML=`Developed a language learing app ,"foodie phonetice"using spaced repetition and a linked list date struncture.react was used to create the front end components while node and mongo were used to create a backend that stores used date.`;
var education3List = document.createElement('li');
education3List.innerHTML =`Developed a concierge app, "Pley", for individual looking for curated suggestion when visiting a new place. React was used to develop the fromt end which includes real-time chat, drag and drop and variety of advanced features. the backend, built using Node, Express, mongo, takes advantage of well-developed RESTful API, Geopatial searching, and user authentication with JWT. `;

educationUl.appendChild(education1List);
educationUl.appendChild(education2List);
educationUl.appendChild(education3List);
education.appendChild(educationUl);
rightBox.appendChild(education);

var baEnglish = document.createElement('b');
baEnglish.innerHTML ='BA, English';
var span5 = document.createElement('span');
span5.setAttribute('class','span5');
span5.innerHTML="09/2001 - 09/2005";
var span6 = document.createElement('span');
span6.setAttribute('class','span6');
span6.innerHTML="<br/> University of California, Los Angles";
education.appendChild(baEnglish);
education.appendChild(span5);
education.appendChild(span6);
console.log(education);




