const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let profile = ''

rl.question('What is your name?    ', (answer1) => {

  rl.question('What is an activity you like doing?    ', (answer2) => {

    rl.question('What do you listen to while doing that?    ', (answer3) => {

      rl.question('Which meal is your favorite?... Dinner, brunch... second breakfast?    ', (answer4) => {

        rl.question('What is your favorite thing to eat for that meal    ', (answer5) => {

          rl.question('Which sport is your absolutely favorite    ', (answer6) => {

            rl.question('What is your superpower? Tell us what you\'re amazing at!    ', (answer7) => {

              console.log(`${answer1} loves listening to ${answer3} while ${answer2}, devouring ${answer5} for ${answer4}, prefers ${answer6} over any other sport, and is amazing at ${answer7} at inopportune times.`)
              rl.close();
            })
          })
        })
      })
    })
  });
});


