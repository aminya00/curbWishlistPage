//////////////// insert "," to price ///////////////
function createPriceInterFace(reverseNumArr){
    let loopRepetition=Math.ceil((reverseNumArr.length)/3)
    let commaPlace=3
    for (let i = 0; i <(loopRepetition-1) ; i++) {
       reverseNumArr.splice(commaPlace,0,",")
       commaPlace+=4
    }
    return (reverseNumArr.reverse())
 }
 //////////////// END insert "," to price ///////////////
 
 //////////////// convert EN number to PER number ///////////////
 let perNumbers=["۰","۱","۲","۳","۴","۵","۶","۷","۸","۹"]
 function enNumToPerNum(enNum){
    let tempNum=0
    let enNumArr=(String(enNum)).split("")
    enNumArr.forEach(singleNum=>{
       enNumArr[tempNum]=perNumbers[+(singleNum)]
       tempNum++
    })
    return createPriceInterFace(enNumArr.reverse()).join("")
 }
 //////////////// END convert EN number to PER number ///////////////
 
 
 //////////////// calculate off price percent ///////////////
 function offPercent(realPrice,offPrice){
   let offPricePercent=100-((offPrice/realPrice)*100)
   return offPricePercent
 }
  //////////////// END calculate off price percent ///////////////
