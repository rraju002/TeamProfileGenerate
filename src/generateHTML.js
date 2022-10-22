//create Coach card
const generateCoach = function (Coach) {
    return `
    <div class="col-4 mt-4">
        <div class="card h-100">
            <div class="card-header">
                <h3>${Coach.name}</h3>
                <h4>Coach</h4><i class="material-icons">content_paste</i>
            </div>
            <div class="card-body">
                <p class="position">Position: ${Coach.position}</p>
                <p class="email">Email: <a href="mailto:${Coach.email}">${Coach.email}</a></p>
                <p class="office">Office Number: ${Coach.officeNumber}</p>
            </div>
        </div>
    </div>
    `;


}

//create Manager card
const generateManager = function (manager) {
    return `
    <div class="col-4 mt-4">
        <div class="card h-100">
            <div class="card-header">
                <h3>${manager.name}</h3>
                <h4>Manager</h4>
            </div>
            <div class="card-body">
                <p class="position">position: ${manager.position}</p>
                <p class="email">Email: <a href="mailto:${manager.email}">${manager.email}</a></p>
                <p class="github">Github: <a href="https://github.com/${manager.github}">${manager.github}</a></p>
            </div>
        </div>
    </div>
    `
}

//create Player Card
const generatePlayer = function (Player) {
    return `
    <div class="col-4 mt-4">
        <div class="card h-100">
            <div class="card-header">
                <h3>${Player.name}</h3>
                <h4>Player</h4><i class="material-icons">assignment_ind</i>
            </div>
            <div class="card-body">
                <p class="position">position: ${Player.position}</p>
                <p class="height">Height: 6'4 </p>
                <p class="hometown">Hometown: ${Player.hometown}</p>
            </div>
    </div>
</div>
    `
};

//push array to page
generateHTML = (data) => {
    //array for cards
    pageArray = [];
    for (let i = 0; i < data.length; i++) {
        const staff = data[i];
        const role = staff.getRole();
        
        //call Coach function
        if (role === 'Coach') {
            const coachCard = generateCoach(staff);

            pageArray.push(coachCard);
        }
        //call Manager function
    if (role === 'Manager') {
        const managerCard = generateManager(staff);

        pageArray.push(managerCard);
    }

    //call Player function
    if (role=== 'Player') {
        const playerCard = generatePlayer(staff);
        pageArray.push(playerCard)
    }
}
    //joining strings 
const staffCards = pageArray.join ('')

//go back to generated page 
const generateTeam = generateTeamPage(staffCards) 
    return generateTeam;
} 


//create HTML page
const generateTeamPage = function (staffCards) {   
    return`
}
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Team Profile</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
        <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
        <link rel="stylesheet" href="style.css">
    </head>
    <body>
        <header>
            <nav class="navbar" id="navbar">
                <span class="navbar-brand mb-0 h1 w-100 text-center" id="navbar-text">Team Profile</span>
            </nav>
        </header>
        <main>
            <div class="container">
                <div class="row justify-content-center" id="team-cards">
                    <!--Team Cards-->
                    ${staffCards}
                </div>
            </div>
        </main>
        
    </body>
    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js" integrity="sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI" crossorigin="anonymous"></script>
    </html>
  `;
  }
  
  // export to index
  module.exports = generateHTML; 