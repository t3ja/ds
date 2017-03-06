function LinkedList(){
  this._head = null;
  this._length = 0;
}
 
LinkedList.prototype.put = function(val){
  var node = {
    value: val,
    next: null
  };
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
  console.log('Reaching here');
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