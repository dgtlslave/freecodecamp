
function truncateString(str, num) {
  var length = (num-2) - str.length;
  var dots = '...';
  var array = str.split('').splice(length, num-2);
  
  console.log(length);
  console.log(array);

};

truncateString("A-tisket a-tasket A green and yellow basket", 11);

// Усечь строку (первый аргумент),
// если она длиннее заданной максимальной длины строки (второй аргумент).
// Верните усеченную строку с завершением.
//
// Обратите внимание, что добавление трех точек в конец добавит к длине строки.
//
// Однако, если заданная максимальная длина строки num меньше или равна 3,
// добавление трех точек не добавляет к длине строки при определении усеченной строки.
