"use strict";
 

const user = {
  count: 0,
  actors: {},
  genres: [],
  privat: false,
  movies: {},
  status: null,
  init() {
  this.count= +prompt("Քանի՞ ֆիլմ եք դիտել");
  while (this.count==isNaN(this.count) || this.count== "" || this.count== null) {
    this.count= +prompt("Քանի՞ ֆիլմ եք դիտել");
  }
},
  rememberUserFilms() {
  for (let i = 1; i < 2; i++) {
    const filmName = prompt("Որ ֆիլմն եք վերջերս դիտել");
    const filmRate = +prompt(`Ինչքա՞ն եք գնահատում ${filmName} ֆիլմը`);
  
    if (filmName != null && filmName != '' && filmRate != '' && filmName.length < 50) {
      this.movies[filmName]= filmRate;
      console.log('Resolve');
    }else{
     console.log('Reject');
     i--
    }
  }
},
  userPersonalLevel() {
  if(this.count < 10){
    this.status='Դուք քիչ ֆիլմեր եք դիտում'
  }else if (this.count >= 10 && this.status < 30) {
    this.status='Դուք դասական ֆիլմ դիտող եք'
  } else if(this.count > 30){
    this.status='Դուք կինոման եք'
  }else{
    console.log("Տեղի է ունեցել խնդիր")
  }
},
   userPrivat(state) {
  state ? console.log("Sorry but this privat is not visible"): console.log(this);;
},
  useGenres() {
  for(let i = 0; i< 2; i++ ){
    this.genres.push(prompt(`Ձեր նախընտրելի ժանրը ${i+1} `))
  }
},
  startUp(){
   this.init();
   this.useGenres();
   this.rememberUserFilms();
   this.userPersonalLevel();
   this.userPrivat(this.privat)
  }
};  

user.startUp();


