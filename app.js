let name = 'Byron Baldwin';

function capitalizeMyname(name) {
    console.log('Name: ' + name.toUpperCase())
}

capitalizeMyname(name);

let myCareer = 'Hotel General Manager';

function toDisplayCareerName(myCareer) {
    console.log('Career: ' + myCareer);
}

toDisplayCareerName(myCareer);

let myCareerDescription = 'Train, manage, and lead fifty hourly employees and four department managers';


function toDisplayCareerDescription(myCareerDescription) {
    console.log('Description: ' + myCareerDescription);
}

toDisplayCareerDescription(myCareerDescription);

let space = '  ';

function displaySpace(space) {
    console.log('  ' + space);
}

displaySpace(space);


let interests = ['Sports', 'Fishing', 'Dining Out', 'Web Development', ];

function displayMyInterests(interests) {
    console.log(interests);
}

displayMyInterests('My Interests:');

displayMyInterests(' * ' + interests[0]);
displayMyInterests(' * ' + interests[1]);
displayMyInterests(' * ' + interests[2]);
displayMyInterests(' * ' + interests[3]);


displaySpace(space);

let experience = 'My Previous Experience:';

function myExperience(experience) {
    console.log(experience);
}

myExperience(experience);

let previousExperience = ['General Manager of the Fairfield Inn & Suites Birmingham/Fultondale', 'Assistant General Manager of the Hampton Inn Galleria Parkway Hoover Alabama', 'Guest Service Representative at the Hampton Inn Galleria Parkway Hoover Alabama', 'Night Auditor at the Holiday Inn Express Inverness Birmingham Alabama'];

function myPreviousExperience(previousExperience) {
    console.log(previousExperience);
}

myPreviousExperience(' * ' + previousExperience[0]);
myPreviousExperience(' * ' + previousExperience[1]);
myPreviousExperience(' * ' + previousExperience[2]);
myPreviousExperience(' * ' + previousExperience[3]);

displaySpace(space);


let mySkills = 'My Skills:';


console.log(mySkills);

let skill = ['Leadership', 'Public Speaking', 'Revenue Management', 'Javascript', 'Data Analytics', 'Payroll', 'HTML', 'CSS', 'Data Analytics'];


function displayMySkills(skill, cool) {
    if (cool === true) {
        console.log(' * BAM!:' + skill);
    } else {
        console.log(' * ' + skill);
    }
}


displayMySkills('Leadership', true);
displayMySkills('Public Speaking');
displayMySkills('Revenue Management', true);
displayMySkills('Javascript', true);
displayMySkills('Data Analytics', true);
displayMySkills('Payroll');
displayMySkills('HTML');
displayMySkills('CSS');




displaySpace(space);

let bsbPositions = ' My Positions:';

function myPositions(bsbPositions) {
    console.log(bsbPositions);
}

myPositions(bsbPositions);


let companyName = ['Homewood Suites by Hilton Near U.A.B.', 'Fairfield Inn & Suites Birmingham/Fultondale',  'Hampton Inn & Suites Galleria Parkway, Hoover', 'At&t'];

let jobTitle = ['General Manager', 'Assistant General Manager', 'Sales Representative'];

let description = ['Recruit, hire, train, and lead fifty hourly employees and four department managers for a 105 room extended stay hotel',
                    'Recruited, hired, and trained twenty-five hourly employees for a 75 room hotel', 
                    'Assisted the General Manager in training front desk and breakfast employees on Hilton standards, employee scheduling, and customer satisfaction',
                    'Sold mobile handset devices, data plans, accessories, and handset upgrades'];

 function displayPosition(companyName, jobTitle, description) {
     console.log(' * Company Name: ' + companyName + '\n' + ' * Job Title:', jobTitle + '\n' + ' * Job Description:', description);
 }

displayPosition(companyName[0], jobTitle[0], description[0]);

displayPosition(companyName[1], jobTitle[0], description[1]);

displayPosition(companyName[2], jobTitle[1], description[2]);

displayPosition(companyName[3], jobTitle[2], description[3]);
























