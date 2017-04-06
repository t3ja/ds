

function maxSubArray(A){
    if(!Array.isArray(A)) return 'Pls use an arrray';
    var bestNow = 0,bestSoFar = 0;
 var startIndexNow = -1, startIndexSoFar = -1, endIndex = -1;

 for (var i = 0; i < A.length; i++) {
   var value = bestNow + A[i]
   if (value > bestNow) {
     if (bestNow == 0) startIndexNow = i
     bestNow = value
   } else
     bestNow = 0

  if (bestNow > bestSoFar) {
    bestSoFar = bestNow
    startIndexSoFar = startIndexNow
    endIndex = i
    } 
  }

  return {
      maxSum : bestSoFar,
      maxSubArray : A.slice(startIndexSoFar, endIndex)
  };
 }
    
console.log(maxSubArray([-7, -6, -5, -4 -3 -2, -1, 1, 2]))

module.exports = maxSubArray;