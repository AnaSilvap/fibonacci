let n
function fb(n) {
      if (n==1 ||n==0) {
          return 1
      } else {
          return fb(n-1)+fb(n-2);
      }
}
 do {
     n =Number(prompt("¿Escriba un número?"))
 }while(isNaN(n>0 || n<40))
 console.log("El número de fibonacci es " + fb(n))
