console.log("hello,world");

var dcClass = [
  "Sean",
  "Drew",
  "Daniel",
  "Kyle",
  "Rishi",
  "Ryan",
  "Casey",
  "Connie",
  "Sarah",
  "Andy",
  "Micheal",
  "Paul",
  "Mason"
];

console.log(dcClass[3]);
dcClass.push("Rob");
dcClass.map((member,index)=> {
  console.log(member,index);
})
