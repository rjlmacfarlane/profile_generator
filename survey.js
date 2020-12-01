const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const profile = {};

// Welcome to callback hell...
rl.question('What\'s your name? Nicknames are also acceptable ', (answer) => {
  profile.name = answer;
  
  rl.question('What\'s an activity you like doing? ', (answer) => {
    profile.activity = answer;

    rl.question('What music do you listen to while doing that? ', (answer) => {
      profile.music = answer;

      rl.question('Which meal is your favourite (eg: dinner, brunch, etc.) ', (answer) => {
        profile.meal = answer;

        rl.question('What\'s your favourite thing to eat for that meal? ', (answer) => {
          profile.favFood = answer;

          rl.question('Which sport is your absolute favourite? ', (answer) => {
            profile.favSport = answer;

            rl.question('What is your superpower? In a few words, tell us what you are amazing at! ', (answer) => {
              profile.superPower = answer;

              console.log(`\nHello, ${profile.name}! Welcome to your profile! Other users will get to know that you enjoy listening to ${profile.music} while ${profile.activity}, and that you love to have ${profile.favFood} for ${profile.meal}. They will learn that your favourite sport is ${profile.favSport}, and that you're amazing at ${profile.superPower}.\n`);

              rl.close();
            });
          });
        });
      });
    });
  });
});