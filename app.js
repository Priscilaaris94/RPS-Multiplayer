 // Initialize Firebase
    // This is the code we copied and pasted from our app page
    // Initialize Firebase
  var config = {
    apiKey: "AIzaSyDWRp4noR_YPeeTZ1YAVEBGhIgP0Io6jJY",
    authDomain: "rps-multiplayer-417ab.firebaseapp.com",
    databaseURL: "https://rps-multiplayer-417ab.firebaseio.com",
    projectId: "rps-multiplayer-417ab",
    storageBucket: "rps-multiplayer-417ab.appspot.com",
    messagingSenderId: "667175333124"
  };
  firebase.initializeApp(config);
  
      // Variables
      var userChoice = prompt("Do you choose rock, paper, sicssors?");
      var computerChoice = Math.random();
      if(computerChoice <= 0.33){
          computerChoice ="rock";
      }else if (0.34 <= computerChoice<=0.66){
          computerChoice ="paper";
      }else{
          computerChoice = "scissors";
      }
      
    //   test
    console.log(computerChoice);
      // Functions
    //  if choices are equal 
    function compare (choice1, choice2){
        if (choice1 === choice2){
            return("TIE!");
        }
    // if choice1 is rock
    if (choice1 === "rock"){
        if (choice2 === "scissors"){
            return ('rock wins!');
        }else {
            return ('paper wins!');
        }
    }
    // if choice1 is paper
    if (choice1 === "paper"){
        if (choice2 === "rock"){
            return ('paper wins!');
        }else {
            return ('scissors win!');
        }
    }
    if (choice1 === "scissors"){
        if (choice2 === "rock"){
            return ('rock wins!');
        }else {
            return ('scissors win!');
        }
    }
}
console.log(compare(choice1,choice2));
        

  
       