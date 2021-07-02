function isPalindromo(chain) {
 let array = chain.split('');
 let reverse = array.reverse();

 return chain == reverse.join('') ? 'Si es' : 'No es'
}

console.log(isPalindromo(oso));