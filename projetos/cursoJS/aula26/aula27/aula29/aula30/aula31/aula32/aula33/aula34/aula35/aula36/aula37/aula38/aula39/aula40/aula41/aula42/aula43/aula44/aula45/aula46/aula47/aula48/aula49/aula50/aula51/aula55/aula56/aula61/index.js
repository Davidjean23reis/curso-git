function* geradorada1() {

yield ' valor 1 ';

yield ' valor 2 ';

yield ' valor 3 ';

} 
 function* geradora2(); {
 let  i = 0; 

  while(true) {
yield i;
ii++;
  }

}
 const g2 = geradora2();
 console.log(g2.next().value);