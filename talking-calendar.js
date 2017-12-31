  function tensFn(day) {
    var output = 0;
    if (day.length > 1) {
      output = day[0];
    }
    return output
  }

  function getOrdinal(day) {
    var ones = day.toString().split('').pop();
    ones = parseInt(ones)
    var tens = parseInt(tensFn(day), 10);
    var ordinate = ''
    if (tens == 0  || tens == 2) {
      switch (ones) {
        case 1:
          ordinate = 'st';
          break;
        case 2:
          ordinate = 'nd';
          break;
        case 3:
          ordinate = 'rd';
          break;
        case 4: case 5: case 6: case 7: case 8: case 9:
          ordinate = 'th';
          break;
      }
    }
    if (tens == 1) {
      switch (ones) {
        case 1: case 2: case 3: case 4: case 5: case 6: case 7: case 8: case 9:
        ordinate = 'th';
      }
    }
    return ordinate
  }




var talkingCalendar = function(date) {
  // regex splitter into vars for year month day
  var spl = date.split('/')
  var year = spl[0];
  var month = parseInt(spl[1], 10);
  var day = parseInt(spl[2], 10);
  var monthword = ''
  switch(month) {
    case 1:
      monthword = 'January';
      break
    case 2:
      monthword = 'February';
      break
    case 3:
      monthword = 'March';
      break
    case 4:
      monthword = 'April';
      break;
    case 5:
      monthword = 'May';
      break;
    case 6:
      monthword = 'June';
      break;
    case 7:
      monthword = 'July';
      break;
    case 8:
      monthword = 'August';
      break;
    case 9:
      monthword = 'September';
      break;
    case 10:
      monthword = 'October';
      break;
    case 11:
      monthword = 'November';
      break;
    case 12:
      monthword = 'December';
  }
  // case switches for day suffix
  var ordinal = getOrdinal(day);
  var outputString = monthword+' '+day+ordinal+', '+year;
  return outputString




  }


console.log(talkingCalendar('2017/12/02'));
console.log(talkingCalendar('2007/11/11'));
console.log(talkingCalendar('1987/08/24'));