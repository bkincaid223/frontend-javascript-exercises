module.exports.createCourse = function(courseTitle,courseDuration,courseStudents){

var course = {
  title: courseTitle,
  duration: courseDuration,
  students: courseStudents
}
return course
};

module.exports.addProperty = function(object,newProp,newValue){
  if (object[newProp] === undefined)
  {object[newProp] = newValue}
return object
};

module.exports.formLetter = function(letter){
  return "Hello " + letter.recipient + ",\n\n" +letter.msg + "\n\nSincerely,\n" + letter.sender;
};

module.exports.canIGet = function(item, money){
if (item == 'MacBook Air' && money >= 999)
  {return true;}
else if (item == 'MacBook Pro' && money >=  1299)
  {return true;}
else if (item == 'Mac Pro' && money >= 2499)
  {return true;}
else if (item == 'Apple Sticker' && money >= 1)
  {return true;}
else
  {return false;}
};
