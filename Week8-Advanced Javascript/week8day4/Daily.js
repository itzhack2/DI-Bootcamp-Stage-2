// const gameInfo = [
//     {
//       username: "john",
//       team: "red",
//       score: 5,
//       items: ["ball", "book", "pen"]
//     },
//     {
//       username: "becky",
//       team: "blue",
//       score: 10,
//       items: ["tape", "backpack", "pen"]
//     },
//     {
//       username: "susy",
//       team: "red",
//       score: 55,
//       items: ["ball", "eraser", "pen"]
//     },
//     {
//       username: "tyson",
//       team: "green",
//       score: 1,
//       items: ["book", "pen"]
//     },
//    ];
// //    const usernames = ["john!", "becky!", "susy!", "tyson!"]
// const usernames = gameInfo.map((user) => user.username);
// console.log("usernames:",usernames);

// //    const winners = ["becky", "susy"]
// const winners = gameInfo.filter((player) => player.score > 5);
// console.log("winners:",winners);

// const totalScore = gameInfo.reduce((total,player) => total + player.score,0);
// console.log("totalScore:", totalScore);