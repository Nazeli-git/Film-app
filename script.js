"use strict";
 
 const countOfFilms= prompt("Քանի՞ ֆիլմ եք դիտել");

 const user = {
  count: countOfFilms,
  actors: {},
  gender: [],
  privat: false,
  movies: {},
  status: null
};

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
if(user.count < 10){
  user.status='Դուք քիչ ֆիլմեր եք դիտում'
}else if (user.count >= 10 && user.status < 30) {
  user.status='Դուք դասական ֆիլմ դիտող եք'
} else if(user.count > 30){
  user.status='Դուք կինոման եք'
}else{
  console.log("Տեղի է ունեցել խնդիր")
}

console.log(user);

