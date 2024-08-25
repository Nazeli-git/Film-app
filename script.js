"use strict";
 
let countOfFilms;

function init() {
  countOfFilms= +prompt("Քանի՞ ֆիլմ եք դիտել");
  while (countOfFilms==isNaN || countOfFilms== "" || countOfFilms== null) {
    countOfFilms= +prompt("Քանի՞ ֆիլմ եք դիտել");
  }
}

init();

const user = {
  count: countOfFilms,
  actors: {},
  gender: [],
  privat: false,
  movies: {},
  status: null
};

function rememberUserFilms() {
  for (let i = 0; i < 2; i++) {
    const filmName = prompt("Որ ֆիլմն եք վերջերս դիտել");
    const filmRate = +prompt(`Ինչքա՞ն եք գնահատում ${filmName} ֆիլմը`);
  
    if (filmName != null && filmName != '' && filmRate != '' && filmName.length < 50) {
      user.movies[filmName]= filmRate;
      console.log('Resolve');
    }else{
     console.log('Reject');
     i--
    }
  }
}

function userPersonalLevel() {
  if(user.count < 10){
    user.status='Դուք քիչ ֆիլմեր եք դիտում'
  }else if (user.count >= 10 && user.status < 30) {
    user.status='Դուք դասական ֆիլմ դիտող եք'
  } else if(user.count > 30){
    user.status='Դուք կինոման եք'
  }else{
    console.log("Տեղի է ունեցել խնդիր")
  }
}    

function userPrivat(state) {
  state ? console.log("Sorry but user privat is not visible"): console.log(user);;
}

rememberUserFilms();
userPersonalLevel();
userPrivat(user.privat)


