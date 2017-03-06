function Sorter(arr){
  this._arr = arr;  //Initialize with an array
};

Sorter.prototype.bubbleSort = function () {
  var len = this._arr.length,
       i, j, stop;

   for (i=0; i < len; i++){
       for (j=0, stop=len-i; j < stop; j++){
           if (this._arr[j] > this._arr[j+1]){
               swap(this._arr, j, j+1);
           }
       }
   }

   return this._arr;
};


module.exports = Sorter;
