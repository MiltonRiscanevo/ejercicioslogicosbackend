function arrayOfMultiples (num, length) {
  
  let data =[]
  for (let i = 1; i <= length; i++) {
      const element =num*[i] ;
      data.push(element)
   }   
    return data;
}

module.exports = arrayOfMultiples;