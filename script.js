 

 do{
    var name = prompt('введите свое имя');
  
 }while(!isNaN(name));

 do{
    var gr = prompt('введите ваше год рождения');

 }while(isNaN(gr) );

 do{
    var ng = +prompt('введите нынешний год');
 }while(isNaN(ng));




function age( name , g, ng ) {
   var str = name  + ', вам ' + (ng - gr) + ' лет ';
   return str;
}

alert(age( name, gr, ng ));







