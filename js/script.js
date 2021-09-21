const randomFolks = document.querySelector(".random-peeps");
const selectUserNumber = document.querySelector("#users");

const getData = async function(numUsers){
  const userRequest = await fetch(`https://randomuser.me/api?results=${numUsers}`);
  //console.log(userRequest);
  const data = await userRequest.json();
  const userResults = data.results;
  displayUsers(userResults);
};

getData(1);
//console.log(getData);
const displayUsers = function (userResults) {
  randomFolks.innerHTML=(" ");

  for (user of userResults) {
    const country = user.location.country;
    const name = user.name.first;
    const imageUrl= user.picture.medium;
    const userDiv= document.createElement("div");
      userDiv.innerHTML=`
      <h3> ${name}</h3>
      <p>${country}</p>
      <img src=${imageUrl} alt="User Avatar" />`;
      randomFolks.append(userDiv);
  }
};

const numUsers = document.querySelector(".num-users");
numUsers.classList.remove("hide");

selectUserNumber.addEventListener("change", function (e){
  const numUsers = e.target.value;
  getData(numUsers);
});
