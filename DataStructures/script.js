'use strict';

// Data needed for a later exercise
// const flights =
//   '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
// const restaurant = {
//   name: 'Classico Italiano',
//   location: 'Via Angelo Tavanti 23, Firenze, Italy',
//   categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
//   starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
//   mainMenu: ['Pizza', 'Pasta', 'Risotto'],

//   openingHours: {
//     thu: {
//       open: 12,
//       close: 22,
//     },
//     fri: {
//       open: 11,
//       close: 23,
//     },
//     sat: {
//       open: 0, // Open 24 hours
//       close: 24,
//     },
//   },
// };

// Data Structures, Modern Operators and Strings
// Coding Challenge #1
/*
We're building a football betting app (soccer for my American friends 😅)!
Suppose we get data from a web service about a certain game ('game' variable on
next page). In this challenge we're gonna work with that data.
Your tasks:
1. Create one player array for each team (variables 'players1' and
'players2')
2. The first player in any player array is the goalkeeper and the others are field
players. For Bayern Munich (team 1) create one variable ('gk') with the
goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
3. Create an array 'allPlayers' containing all players of both teams (22
players)
4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a
new array ('players1Final') containing all the original team1 players plus
'Thiago', 'Coutinho' and 'Perisic'
5. Based on the game.odds object, create one variable for each odd (called
'team1', 'draw' and 'team2')
6. Write a function ('printGoals') that receives an arbitrary number of player
names (not an array) and prints each of them to the console, along with the
number of goals that were scored in total (number of player names passed in)
7. The team with the lower odd is more likely to win. Print to the console which
team is more likely to win, without using an if/else statement or the ternary
operator.

Test data for 6.: First, use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'.
Then, call the function again with players from game.scored
*/
const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

console.log('Coding Challenge #1');

//task 1
console.log('Task1');
let [players1, players2] = game.players;
console.log(players1, players2);

//task2
console.log('Task2');
let [gk, ...fieldplayers] = players1;
console.log(gk, fieldplayers);

//task3
console.log('Task3');
let allplayers = [...players1, ...players2];
console.log(allplayers);

//task4
console.log('Task4');
let players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
console.log(players1Final);

//task5
console.log('Task5');
let {
  odds: { team1, x: draw, team2 },
} = game;
console.log(team1, draw, team2);

//task6
console.log('Task6');
let printGoals = function (...players) {
  console.log(players);
  console.log(`${players.length} goals were scored`);
  for (let i = 0; i <= players.length - 1; i++) {
    console.log(players[i]);
  }
};

printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
printGoals(...game.scored);

//task7
console.log('Task7');
team1 < team2 && console.log('Team 1 is more likely to win');
team1 > team2 && console.log('Team 2 is more likely to win');

// Coding Challenge #2
/*
Let's continue with our football betting app! Keep using the 'game' variable from
before.
Your tasks:
1. Loop over the game.scored array and print each player name to the console,
along with the goal number (Example: "Goal 1: Lewandowski")
2. Use a loop to calculate the average odd and log it to the console (We already
studied how to calculate averages, you can go check if you don't remember)
3. Print the 3 odds to the console, but in a nice formatted way, exactly like this:
Odd of victory Bayern Munich: 1.33
Odd of draw: 3.25
Odd of victory Borrussia Dortmund: 6.5
Get the team names directly from the game object, don't hardcode them
(except for "draw"). Hint: Note how the odds and the game objects have the
same property names 😉
4. Bonus: Create an object called 'scorers' which contains the names of the
players who scored as properties, and the number of goals as the value. In this game,
it will look like this:
{
Gnarby: 1,
Hummels: 1,
Lewandowski: 2
}
*/
console.log('Coding Challenge #2');

//task 1
console.log('Task1');
let scoredArr = game.scored.entries();
// console.log(scoredArr);
for (const [i, el] of scoredArr) console.log(`Goal ${i + 1}: ${el}`);

//task 2
console.log('Task2');
let avg = 0;
let odds = Object.values(game.odds);
for (let odd of odds) {
  console.log(odd);
  avg += odd;
}
avg /= odds.length;
console.log(`Average of odds is ${avg}`);

//task 3
console.log('Task3');
for (let [team, odd] of Object.entries(game.odds)) {
  let teamstr = team === 'x' ? 'draw' : `Victory ${game[team]}`;
  console.log(`Odd of ${teamstr}: ${odd}`);
}
//Bonus Task
console.log('Bonus Task');
let scorers = {};
for (let player of game.scored) {
  // console.log(player);
  scorers[player] ? scorers[player]++ : (scorers[player] = 1);
  // console.log(scorers[player]);
}
console.log(scorers);

// Coding Challenge #3
/*Let's continue with our football betting app! This time, we have a map called
'gameEvents' (see below) with a log of the events that happened during the
game. The values are the events themselves, and the keys are the minutes in which
each event happened (a football game has 90 minutes plus some extra time).
Your tasks:
1. Create an array 'events' of the different game events that happened (no
duplicates)
2. After the game has finished, is was found that the yellow card from minute 64
was unfair. So remove this event from the game events log.
3. Compute and log the following string to the console: "An event happened, on
average, every 9 minutes" (keep in mind that a game has 90 minutes)
4. Loop over 'gameEvents' and log each element to the console, marking
whether it's in the first half or second half (after 45 min) of the game, like this:
[FIRST HALF] 17: ⚽ GOAL
*/
const gameEvents = new Map([
  [17, '⚽ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽ GOAL'],
  [80, '⚽ GOAL'],
  [92, '🔶 Yellow card'],
]);

console.log('Coding Challenge #3');

//task 1
console.log('Task1');
let events = [...new Set(gameEvents.values())];
console.log(events);

//task 2
console.log('Task2');
gameEvents.delete(64);
console.log(gameEvents);

//task 3
console.log('Task3');
let minutes = [...gameEvents.keys()].pop() / gameEvents.size;
console.log(`An event happened, on average, every ${minutes} minutes`);

//task 4
console.log('Task4');
for (let [key, value] of gameEvents) {
  if (key <= 45) console.log(`[FIRST HALF] ${key}: ${value}`);
  else console.log(`[SECOND HALF] ${key}: ${value}`);
}

// Coding Challenge #4
/*Write a program that receives a list of variable names written in underscore_case
and convert them to camelCase.
The input will come from a textarea inserted into the DOM (see code below to
insert the elements), and conversion will happen when the button is pressed.
Test data (pasted to textarea, including spaces):
underscore_case
first_name
Some_Variable
calculate_AGE
delayed_departure

Should produce this output (5 separate console.log outputs):
underscoreCase ✅
firstName ✅✅
someVariable ✅✅✅
calculateAge ✅✅✅✅
delayedDeparture ✅✅✅✅✅
*/

console.log('Coding Challenge #4');

document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

document.querySelector('button').addEventListener('click', function () {
  let textArea = document.querySelector('textarea').value;
  // console.log(textArea);
  let words = textArea.split('\n');
  // console.log(words);
  for (let [i, word] of words.entries()) {
    // console.log(word);
    let [first, second] = word.toLowerCase().trim().split('_');
    // console.log(first, second);
    let newWord = `${first}${second.replace(
      second[0],
      second[0].toUpperCase()
    )}`;
    // console.log(newWord);
    console.log(`${newWord.padEnd(20)}${'✅'.repeat(i + 1)}`);
  }
});
