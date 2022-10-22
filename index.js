//page creation
const generateHTML = require('./src/generateHTML');

//profiles
const Coach = require('./lib/Coach');
const Engineer = require('./lib/Manager');
const Player = require('./lib/Player'); 

//node modules
const fs = require('fs');
const inquirer = require('inquirer');
const path = require('path');

//team array 
const teamArray = []

//begin coach prompt 
const addCoach = () => {
    return inquirer.prompt ([
        {
            type: 'input',
            name: 'name',
            message: 'Who coaches UC Riverside?', 
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log ("Please enter Coach _________ name!");
                    return false; 
                }
            }
        },
        {
            type: 'input',
            name: 'position',
            message: "Coach is the ____ coach.",
            validate: nameInput => {
                if  (isNaN(nameInput)) {
                    console.log ("Please enter coach's position!")
                    return false; 
                } else {
                    return true;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "Please enter the Coach's email.",
            validate: email => {
                valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
                if (valid) {
                    return true;
                } else {
                    console.log ('Please enter an email!')
                    return false; 
                }
            }
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: "Where is Coach's office located?",
            validate: nameInput => {
                if  (isNaN(nameInput)) {
                    console.log ('Please enter his office location!')
                    return false; 
                } else {
                    return true;
                }
            }
        }
    ])
    .then(coachInput => {
        const  { name, id, email, officeNumber } = coachInput; 
        const coach = new Coach (name, id, email, officeNumber);

        teamArray.push(coach); 
        console.log(coach); 
    })
};

const addManager = () => {
    console.log(`
    =================
    Adding manager to the team
    =================
    `);

    return inquirer.prompt ([
        {
            type: 'input',
            name: 'name',
            message: 'Who is the Head Manager at UC Riverside?', 
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log ("Please enter his name!");
                    return false; 
                }
            }
        },
        {
            type: 'input',
            name: 'position',
            message: "He is the ____ Manager of UC Riverside.",
            validate: nameInput => {
                if  (isNaN(nameInput)) {
                    console.log ("Please enter the manager's position!")
                    return false; 
                } else {
                    return true;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "Please enter the manager's email.",
            validate: email => {
                valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
                if (valid) {
                    return true;
                } else {
                    console.log ('Please enter an email!')
                    return false; 
                }
            }
        },
        {
            type: 'input',
            name: 'year',
            message: "Where year is the Head Manager?",
            validate: nameInput => {
                if  (isNaN(nameInput)) {
                    console.log ('Please enter his academic year!')
                    return false; 
                } else {
                    return true;
                }
            }
        }
    ])
    .then(managerInput => {
        const  { name, id, email, year } = managerInput; 
        const manager = new Manager (name, id, email, year);

        teamArray.push(manager); 
        console.log(manager); 
    })
};


// function to generate HTML page file using file system 
const writeFile = data => {
    fs.writeFile('./index.html', data, err => {
        // if there is an error 
        if (err) {
            console.log(err);
            return;
        // when the profile has been created 
        } else {
            console.log("Your team profile has been successfully created! Please check out the index.html")
        }
    })
}; 

addCoach()
  .then(addPlayer)
  .then(teamArray => {
    return generateHTML(teamArray);
  })
  .then(pageHTML => {
    return writeFile(pageHTML);
  })
  .catch(err => {
 console.log(err);
  });