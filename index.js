//page creation
const generateHTML = require('./src/generateHTML');

//profiles
const Coach = require('./lib/Coach');
const Manager = require('./lib/Manager');
const Player = require('./lib/Player'); 

//node modules
const fs = require('fs');
const inquirer = require('inquirer');

//team array 
const teamArray = [];

//begin coach prompt 
const addCoach = () => {
    console.log(`
    =================
    Adding Coach to the team
    =================
    `);
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
            message: "Coach is the ____ coach!",
            validate: nameInput => {
                if  (nameInput) {    
                    return true; 
                } else 
                { console.log ("Please enter coach's position!")
                    return false;
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
        
    ])
    .then(coachInput => {
        const  { name, position, email } = coachInput; 
        const coach = new Coach (name, position, email );

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
                if  (nameInput) {
                    return true; 
                } else {
                    console.log ("Please enter the manager's position!")
                    
                    return false;
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
            message: "What year is the Head Manager?",
            validate: nameInput => {
                if  (nameInput) {
                    return true; 
                } else {
                    console.log ('Please enter his academic year!')
                    return false;
                }
            }
        }
    ])
    .then(managerInput => {
        const  { name, position, email, year } = managerInput; 
        const manager = new Manager (name, position, email, year);

        teamArray.push(manager); 
        console.log(manager); 
    })
};

const addPlayer = () => {
    console.log(`
    =================
    Adding player to the team
    =================
    `);

    return inquirer.prompt ([
        {
            type: 'input',
            name: 'name',
            message: 'Who wears #5 at UC Riverisde?', 
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
            message: "He is the starting ____ Guard for UC Riverside.",
            validate: nameInput => {
                if  (nameInput) {
                    return true; 
                } else {
                    console.log ("Please enter the Zyon's position!")
                    
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'height',
            message: "Please enter Zyon's height.",
            validate: nameInput => {
                if  (nameInput) {
                    return true;
                } else {
                    console.log ('Please enter a height!')
                    return true; 
                }
            }
        },
        {
            type: 'input',
            name: 'weight',
            message: "How much does Pullin weigh?",
            validate: nameInput => {
                if  (nameInput) {
                    return true; 
                } else {
                    console.log ('Please enter his academic year!')
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'hometown',
            message: "Zyon is from ________ Hill, CA",
            validate: nameInput => {
                if  (nameInput) {
                    return true; 
                } else {
                    console.log ('He is from the ___ Area!')
                    return false;
                }
            }
        },

    ])
    .then(playerInput => {
        const  { name, position, height, weight, hometown } = playerInput; 
        const player = new Player (name, position, height, weight, hometown);

        teamArray.push(player); 
        console.log(player); 
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
  .then(addManager)
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
