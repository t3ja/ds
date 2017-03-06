function Fibonacci(){
  this._temp = [1, 1];
}

Fibonacci.prototype.getRecursive = function (n) {
  //Get the nth number of a fibonacci series through recursion
  if(!n) return 0;
  if(n < 2){
    return 1;
  }else{
    return this.getRecursive(n - 2) + this.getRecursive(n - 1);
  }
};

Fibonacci.prototype.getDP = function (n) {
  //Get the nth number of a fibonacci series using an array/DP
  if(!n) return 0;
  if(!this._temp[n]){
    this._temp[n] = this.getDP(n - 2) + this.getDP(n - 1);
  }
  return this._temp[n];
};


Fibonacci.prototype.getOpti = function (n) {
  //Get the nth number of a fibonacci series through optimized
  if(!n) return 0;
  function fib(a, b, n) {
    return n === 1 ? b : fib(b, a + b, n-1);
  };
  return n === 0 ? 0 : fib(0, 1, n);
};

module.exports = Fibonacci
