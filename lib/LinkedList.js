function Node(data) {
  this.value = data;
  this.next = null;
}

function LinkedList(){
  this._head = null;
  this._length = 0;
}
 
LinkedList.prototype.put = function(val){
  var node = new Node(val);
  if(!this._head){
    this._head = node;
  }else{
    var current = this._head;
    while(current.next){
      current = current.next;
    }
    current.next = node;
  }
  return this._length++;
};
 
 
LinkedList.prototype.get = function(index){
  if(index >= 0 && index < this._length){
    var i = 0, current = this._head;
    while(i++ < index){
      current = current.next;
    }
    return current.value;
  }else{
    return null;
  }
};
 
 
LinkedList.prototype.getFromBehind = function(k){
  if(k > 0 && k <= this._length){
    console.log('Length - ', this._length);
    var current = this._head, kth = this._head;
    for(var i = 0; i < k - 1; i++){
      if(!kth) return 'k larger than size';
      kth = kth.next;
    };
    if(!kth){
      //k is the length of linkelist
      console.log('k === _length');
      return this._head;
    }
 
    while(kth.next){
      current = current.next;
      kth = kth.next;
    }
    return current.value;
  }else{
    return null;
  }
};
 
 
LinkedList.prototype.remove = function(index){
  if(index >= 0 && index < this._length){
    var i = 0, current = this._head, previous = null;
    if(index === 0){
      //Remove _head
      this._head = current.next;
    }else{
      //Find and remove index
      while(i++ < index){
        previous = current;
        current = current.next;
      }
      previous.next = current.next;
    }
    this._length--;
    return current.value;
 
  }else{
    return null;
  }
};

LinkedList.prototype.reverseN = function(n, k1, k2){
    var current = n, temp = n;
    for(var i = 0; i < k1 - 2; i++){
      if(!temp) return 'k larger than size';
      temp = temp.next;
    };
    var k1th = temp.next;
    console.log('Reverse N - ', k1th.value);
    var current = k1th, previous = temp, next = null;
    while(current && (k2-k1 > 0)){
      
      next = current.next;
      current.next = previous;
      previous = current;
      current = next;
      console.log('LogLL - ', JSON.stringify(n));
      console.log('Reverse loop - ', k1, k2, current.value, previous.value, next.value);
      k1++;
    }
    // k1th.next = previous;
    return n;
  
};
 
 
LinkedList.prototype.reverse = function(){
  if(!this._head || !this._head.next){
    return this;
  }
  var current = this._head, previous = null, next = null;
  while(current){
    next = current.next;
    current.next = previous;
    previous = current;
    current = next;
  }
  this._head = previous;
  return this;
};
 
 
LinkedList.prototype.deepCopy = function(){
  var copy = new LinkedList(), current = this._head;
  while(current){
    copy.put(current.value);
    current = current.next;
  }
  return copy;
};
 
 
LinkedList.prototype.isPalindrome = function(){
  var current = this;
  var rev = current.deepCopy();
  rev = rev.reverse();
  current = this._head;
  rev = rev._head;
  while(current){
    if(current.value !== rev.value){
      return false;
    }
    current = current.next;
    rev = rev.next;
  }
  return true;
}

// LinkedList.prototype.isPalindromeRecursive = function(forward, backward){
//   if(!backward) return true;
    
//     /*we are recursing moving backward pointer ahead. 
//         Backward pointer will start moving backward once 
//         we hit above terminal condition of recursion */
//     var isPalindrome = this.isPalindromeRecursive(forward, backward.next);
  
//     if(!isPalindrome) return isPalindrome;
//     /*At this point forward is n nodes ahead from start 
//         and backward n nodes away from end n varies from 0 to n 
//     Compare forward and backward
//     */
//     console.log("Recursive palindrome data - ", forward.value, backward.value);
//     if(forward.value != backward.value){
//         return false;
//     }
//     /*Move ahead forward pointer, backward will move back 
//         automatically due to recursion */
//     forward = forward.next;
//     console.log('FOrward - ', forward.value);
  
//     return isPalindrome;
// }
/* global left */
// var left;

LinkedList.prototype.isPalindromeRecursive = function(right){
        // Note: Using global var here 
        left = this._head;
         
        /* stop recursion when right becomes NULL */
        if (right == null)
            return true;
 
        /* If sub-list is not palindrome then no need to
           check for current left and right, return false */
        var isp = this.isPalindromeRecursive(right.next);
        if (isp == false) return false;
 
        /* Check values at current left and right */
        var isp1 = (right.value == left.value);
        // console.log("in rexursion - ", left.value, right.value);
        /* Move left to next node */
        left = left.next;
 
        return isp1;
}
 
 
LinkedList.prototype.isLoop = function () {
  //Check if there is a loop in the LL
  var current = this._head, next = this._head;
  while(current && next && next.next){
    current = current.next;
    next = next.next.next;
    if(current == next){
      return true;
    }
  }
  return false;
};
 
 
LinkedList.prototype.printAlternateTwice = function (current) {
  //Check if there is a loop in the LL
  if(!current) return;
  console.log('Logging alternates', current.value);
  if(current.next){
    this.printAlternateTwice(current.next.next);
  }
  console.log('Logging alternates', current.value);
};
 
 
LinkedList.prototype.getLoopStart = function () {
  //Check if there is a loop in the LL
  var current = this._head, next = this._head;
  while(current && next){
    if(!next.next){
      return null;//Not a loop
    }
    current = current.next;
    next = next.next.next;
    console.log('DATAA - ', current.value, next.value);
    if(current == next){
      return current;
    }
  }
};

module.exports = LinkedList;