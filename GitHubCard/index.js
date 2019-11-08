/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/
//! Displays all cards needed -- don't delete!!!
const entryPoint = document.querySelector('.cards');

//? This only gets myPersonal data from the API
axios.get(`https://api.github.com/users/survani`)
.then(response => {
  console.log(response);
  const personalInfo = response.data;
  socialCard(personalInfo);
  entryPoint.appendChild(socialCard(personalInfo));
});

//? This gets only the data of the followers I have.

/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 


   Skip to Step 3.
*/

//Inspected the data[completed]......


/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

const followersArray = [
  'letanque',
  'msteele11101',
  'justsml',
  'luishrd',
  'bigknell',
];

/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>

*/

//! This must go anywhere besides on top of followersArray variable...
//? This gets only the data of the followers I have.
followersArray.forEach(p => {
  axios
  .get(`https://api.github.com/users/${p}`)
  .then(response => {
    console.log('response: ', response);
    entryPoint.appendChild(socialCard(response.data));
});

});

//* Function to hold everything for the DOM Elements and more!
const socialCard = data => {
  const mainCard = document.createElement('div');
  const imgInsideCard = document.createElement('img');
  const infoHolderInCard = document.createElement('div');
  const socialName = document.createElement('h3'); 
  const socialUsername = document.createElement('p');
  const userLocation = document.createElement('p');
  const userProfile = document.createElement('p');
  const userFollowers = document.createElement('p');
  const userFollowing = document.createElement('p');
  const userBio = document.createElement('p');


  //* Add classes to elements that need it created above. 
  mainCard.classList.add('card');
  infoHolderInCard.classList.add('card-info');
  socialName.classList.add('name');
  socialUsername.classList.add('username');

  //* Appending here...
  //? The start appends to mainCard bc of the card class div..
  mainCard.appendChild(imgInsideCard);
  mainCard.appendChild(infoHolderInCard);
  //? The rest append to infoHolderInCard because we want it to be inside the info div... look at the html... 
  //! If place out of order or appending in any other way will cause display errors.
  infoHolderInCard.appendChild(socialName);
  infoHolderInCard.appendChild(socialUsername);
  infoHolderInCard.appendChild(userLocation);
  infoHolderInCard.appendChild(userProfile);
  infoHolderInCard.appendChild(userFollowers);
  infoHolderInCard.appendChild(userFollowing);
  infoHolderInCard.appendChild(userBio);

  //* Add text to all elements that need it...
  imgInsideCard.src = data.avatar_url;
  socialName.textContent = data.name;
  socialUsername.textContent = data.login;
  userLocation.textContent = `Location: ${data.location}`;
  userProfile.href = `Link: ${data.url}`;
  userFollowers.textContent = `Followers: ${data.followers}`;
  userFollowing.textContent = `Following: ${data.following}`;
  userBio.textContent = `Bio: ${data.bio}`;

  return mainCard;
}

/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/
