// Code your solution in this file!

function distanceFromHqInBlocks(distance) {
  return Math.abs(distance-42);
}

function distanceFromHqInFeet(distance) {
  distanceFromHqInBlocks(distance) * 264;
}
