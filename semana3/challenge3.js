function mcd (a,b){
  a= Math.abs(a);
  b=Math.abs(b)
  let z

  while (b) {
      z=b
      b=a%b
      a=z   
  }
  return a
}

function mcm (a, b) {
  return Math.abs(a*b)/mcd(a,b)
}

module.exports = mcm;