function DoublyLinkedList(){
  this._head = null,
  this._length = 0;
}

DoublyLinkedList.prototype.put = function(val){
  var node = {
    value: val,
    prev: null,
    next: null
  }, current = this._head, previous = this._head;
  if(!this._head){
    //First element.
    this._head = node;
  }else{
    while(current && current.next){
      previous = current;
      current = current.next;
    }
    current.next = {value: val, prev:current, next:null};
  }
  return this._length++;
};


DoublyLinkedList.prototype.get = function(index){
  if(index > -1 && index < this._length){
    var current = this._head, i = 0;
    while(i++ < index){
      current = current.next;
    }
    return current.value;
  }else{
    return null;
  }
};


DoublyLinkedList.prototype.remove = function(index){
  if(index > -1 && index < this._length){
    var current = this._head, previous = this._head, i = 0;
    if(index === 0){
      this._head = current.next;
      this._head.prev = null;
    }else{
      while(i++ < index){
        current = current.next;
      }
      current.prev.next = current.next;
      if(current.next) current.next.prev = current.prev; //To handle removal of value at index === this._length - 1
    }
    this._length--;
    return current.value;
  }else{
    return null;
  }
};


DoublyLinkedList.prototype.reverse = function(){
  if(!this._head || !this._head.next){
    return this;
  }
  var current = this._head, previous = null, next = null;
  while(current){
    next = current.next;
    current.next = current.prev;
    current.prev = next;
    if(!next){
      this._head = current;
    }
    current = next;
  }
  return this;
};


DoublyLinkedList.prototype.deepCopy = function () {
  var current = this._head, temp = new LinkedList();
  while(current.next){
    temp.put(current.value);
    current = current.next;
  }
  return temp;
};
module.exports = DoublyLinkedList;
