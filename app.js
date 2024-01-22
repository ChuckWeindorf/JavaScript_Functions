console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

printOdds(20);
printOdds(-20);

function printOdds(count) {
  if (count < 0) {
    console.log("Incorrect count: " + count);
  } else {
    for (let vint = 1; vint <= count; vint++) {
      if (vint % 2) {
        console.log("Odd " + vint);
      }
    }
  }
}

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

nameAge("Chuck W", 62);
nameAge("Popeye", 5);
nameAge("", 12);
nameAge("cw", "moo");

function nameAge(userName, age) {
  if (userName.length == 0 || typeof age != "number") {
    console.log("Incorect parameters");
  } else {
    const aboveSixteen = `Congratulations ${userName}, you can drive!`;
    const belowSixteen = `Sorry ${userName}, but you need to wait until you're 16.`;
    if (age < 16) {
      console.log(belowSixteen);
    } else {
      console.log(aboveSixteen);
    }
  }
}
// Exercise 3 Section
console.log("EXERCISE 3:\n==========\n");
quadrant(1, 2);
quadrant(1, -1);
quadrant(-1, 1);
quadrant(-1, -1);
quadrant(1, 0);
quadrant(0, 1);
quadrant(0, 0);

function quadrant(xaxis, yaxis) {
  if (xaxis != 0 && yaxis != 0) {
    let quadrantLoc = "";
    if (xaxis > 0) {
      quadrantLoc = "N";
    } else {
      quadrantLoc = "S";
    }
    if (yaxis > 0) {
      quadrantLoc += "E";
    } else {
      quadrantLoc += "W";
    }
    if (quadrantLoc == "NE") {cartesian = "I"}
    else if (quadrantLoc == "NW") {cartesian = "II"}
    else if (quadrantLoc == "SW") {cartesian = "III"}
    else {cartesian = "IV"}
    console.log("quadrant " + cartesian, quadrantLoc);
  } else if (xaxis != 0) {
    console.log("Point on x axis");
  } else if (yaxis != 0) {
    console.log("Point on y axis");
  }
  else {console.log("Point on origin")};
}

// Exercise 4 Section
console.log("EXERCISE 4:\n==========\n");
triangle(1, 2, 1);
triangle(2, 2, 1);
triangle(1, 2, 2);
triangle(2, 2, 2);
triangle(3, 4, 5);

function triangle(side1, side2, side3) {
  if (
    side1 + side2 <= side3 ||
    side1 + side3 <= side2 ||
    side2 + side3 <= side1
  ) {
    console.log("Really weird non-triangle");
  } else if (side1 == side2 && side2 == side3) {
    console.log("Eqilateral triangle");
  } else if (side1 == side2 || side1 == side3 || side2 == side3) {
    console.log("Isosceles triangle");
  } else {
    console.log("Scalene triangle");
  }
}
// Exercise 5 Section
console.log("EXERCISE 5:\n==========\n");
checkCell(100, 15, 56);
checkCell(200, 17, 25);

function checkCell(planLimit, day, usage) {
  const thisMontDays = 30;
  let aveDaily = parseFloat(usage / day).toFixed(1);
  let daysLeft = thisMontDays - day;
  let aveMax = parseFloat(planLimit / thisMontDays).toFixed(1);
  let projected = thisMontDays * aveDaily;
  let pace = parseFloat((projected - planLimit) / thisMontDays).toFixed(1);

  console.log(`${day} days used, ${daysLeft} remaining.`);
  console.log(`You are using: ${aveDaily} GB per day on average.`);
  if (aveDaily > aveMax) {
    console.log(`You are EXCEEDING your average daily available of ${aveMax} GB.`
    );
    console.log(`You are projected to exceed your plan limt by ${projected - planLimit} GB`);
    console.log(`Try to use ${pace} GB each day to stay withing limits.`)
  } else {
    console.log(
      `Go ahead and browse away!  You have ${planLimit - usage} GB remaining.`
    );
  }
}
