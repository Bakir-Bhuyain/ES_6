// write a arrow function where it will do the following :\\
/**
 * 1. it will take an array where the array elements will be the name off your  friends
 * 2. check if the length of each element is even, push element in the even length to a new array and return the  result
 */

const filterEvenLengthFriends = (friends) => {
  const evenFriends = [];
  for (const friend of friends) {
    if (friend.length % 2 === 0) {
      evenFriends.push(friend);
    }
  }
  return evenFriends;
};
const myFriends = [
  "Bakir",
  "bhuiyan",
  "hemal",
  "Emon",
  "mimi",
  "nazmun",
  "shopna",
];
const result = filterEvenLengthFriends(myFriends);
console.log(result);
