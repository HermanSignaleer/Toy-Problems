const convertTime = (normalTime) => {
  //create variable array for time and modifier(AM and PM)
    //split input time
  var [time, modifier] = normalTime.split(' ');
  //create variable array for time with hours and minutes
    //split time with colon
  var [hours, minutes] = time.split(':');
  //check conditions for if the hours equal 12 and the modifier equals AM
  if(hours === '12' && modifier === 'AM'){
    //if so, change hours to 00
    hours = 00;
    //modify hours by concatenating it to an empty string
    hours =  '' + hours;
  }
  //check conditions for if the modifier equals PM and the hours are greater than 12
  if(modifier === 'PM' && hours > '12'){
    //if so, change hours an interger and add 12
    hours = parseInt(hours, 10) + 12;
  }
  //check if the modifier alone is equal to AM
  if(modifier === 'AM'){
    //if so, change hours by adding hour to the interger 0
    hours =  0 + hours
  }
  //create a variable for military time in order to save the time; and it should be the concatanation of hours, colon, and minutes
  var militaryTime = hours + ":" + minutes;
  //return militaryTime
  return militaryTime; 
}

console.log(convertTime('12:00 AM'));//00:00
console.log(convertTime('7:47 PM'));//19:47
console.log(convertTime('12:01 AM'));//00:01
console.log(convertTime('9:15 AM'));//09:15
console.log(convertTime('1:23 AM'));//01:23
console.log(convertTime('3:00 PM'));//15:00
console.log(convertTime('12:00 PM'));//12:00
console.log(convertTime('04:00'));//04:00