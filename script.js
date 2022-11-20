// Submitted or coded by Jagadeesh Kumar . S, 
//     you may contact me through my email address which is jagadeesh_2k17@proton.me,
//     kindly contribute some money to my Indian UPI address which is jagadeesh-kumar@ybl .


// Asyc function to fetch current cocation of ISS 
async function loadData001(){
    const url001 = 'http://api.open-notify.org/iss-now.json?callback=';
try {
    // Fetch the data
    const response = await fetch(url001);
    const data = await response.json();
    // console.log(data);
    render001(data);
    // document.write("Message :" + data.message + "<br>");
    // document.write(data.iss_position.latitude + "<br>");
}catch (error) {
    console.log(error);
}
setTimeout(loadData001, 5000);
}

// Function to display the data 
function render001(verse){
    
    container.innerHTML = `<h1>The following is the current location of International Space Station for every 5 or five seconds.</h1><br/><h6>
    Connection is Successful.<br/>
    Latitude: ${verse.iss_position.latitude}.<br/>
    Longitude: ${verse.iss_position.longitude}.<br/>
    Timestamp: ${verse.timestamp}.</h6><br/>`;
}

// Function to run the data 
loadData001();

// Asyc function to fetch number of people on ISS 
async function loadData002(){
    const url002 = 'http://api.open-notify.org/astros.json';
try {
    // Fetch the data
    const response = await fetch(url002);
    const data = await response.json();
    console.log(data);
    render002(data);
    // document.write("Message :" + data.message + "<br>");
    // document.write(data.iss_position.latitude + "<br>");
}catch (error) {
    console.log(error);
}
}

// Function to display the data 
function render002(verse){
    
    number.innerHTML = `<h1>The followings are the number of people with their details on ISS.</h1><br/><h6>
    Connection is Successful.<br/>
    Total number of people in space: ${verse.number}.<br/></h6>`;
    let num = `${verse.number}`;
    // console.log(num);
        people.innerHTML = `<h6>Number : 1 <br/>Name of Spacecraft: ${verse.people["0"].craft}<br/> Name: ${verse.people["0"].name} <br/>
        <h6>Number : 2 <br/>Name of Spacecraft: ${verse.people["1"].craft}<br/> Name: ${verse.people["1"].name} <br/>
        <h6>Number : 3 <br/>Name of Spacecraft: ${verse.people["2"].craft}<br/> Name: ${verse.people["2"].name} <br/>
        <h6>Number : 4 <br/>Name of Spacecraft: ${verse.people["3"].craft}<br/> Name: ${verse.people["3"].name} <br/>
        <h6>Number : 5 <br/>Name of Spacecraft: ${verse.people["4"].craft}<br/> Name: ${verse.people["4"].name} <br/>
        <h6>Number : 6 <br/>Name of Spacecraft: ${verse.people["5"].craft}<br/> Name: ${verse.people["5"].name} <br/>
        <h6>Number : 7 <br/>Name of Spacecraft: ${verse.people["6"].craft}<br/> Name: ${verse.people["6"].name} <br/>
        <h6>Number : 8 <br/>Name of Spacecraft: ${verse.people["7"].craft}<br/> Name: ${verse.people["7"].name} <br/>
        <h6>Number : 9 <br/>Name of Spacecraft: ${verse.people["8"].craft}<br/> Name: ${verse.people["8"].name} <br/>
        <h6>Number : 10 <br/>Name of Spacecraft: ${verse.people["9"].craft}<br/> Name: ${verse.people["9"].name} <br/>
        `;
}

// Function to run the data 
loadData002();

// Submitted or coded by Jagadeesh Kumar . S, 
//     you may contact me through my email address which is jagadeesh_2k17@proton.me,
//     kindly contribute some money to my Indian UPI address which is jagadeesh-kumar@ybl .
