// LOOPS EXERCISE
// 1
for (i = 1; i <= 7; i++){
    console.log(i);
  }
  // OR
  // for (i = 1; i < 8; i++){
  //   console.log(i);
  // }
  
  console.log('====================================');
  
  // 2
  for (c = 5; c <= 25; c += 4){
    console.log(c);
  }
  
  console.log('====================================');
  
  // 3a
  const wizards = [
    "Harry Potter",
    "Hermione Granger",
    "Ron Weasley"
  ];
  
  // 3b
  for (w of wizards){
    console.log(w);
  }
  
  console.log('====================================');
  
  // 4a
  let harryPotterMovies = 0;
  
  // 4b
  while (harryPotterMovies <= 7){
    // console.log(harryPotterMovies);
    harryPotterMovies++;
  }
  
  // 4c
  console.log(harryPotterMovies); // 8
  
  // BONUS
  // 5a
  const hogwartsHouses = [
    "Gryffindor",
    "Hufflepuff",
    "Ravenclaw",
    "Slytherin"
  ];
  
  // 5b
  for (houses of hogwartsHouses){
    for (char of houses){
      console.log(char);
    }
  }
  
  console.log('====================================');
  
  // 6a
  const quote = [
    "Yer",
    "A",
    "Wizard",
    "Harry"
  ];
  
  // 6b
  let quoteTwo = ``;
  for (char of quote){
    quoteTwo += char + ` `;
    // console.log(quoteTwo);
  }
  console.log(quoteTwo); // Yer A Wizard Harry 
  // console.log(quoteTwo.trim());
  
  console.log('====================================');
  
  // 7
  for (i = 1; i <= 25; i++){
    if (i % 3 === 0 && i % 5 === 0){
      console.log("Expecto Patronum");
    } else if (i % 3 === 0) {
      console.log("Expecto");
    } else if (i % 5 === 0){
      console.log("Patronum");
    } else {
      console.log(i);
    }
  }
