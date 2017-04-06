const LinkedList = require("./LinkedList");

//Given a sorted array as input, convert it to a balanced binary tree of minimum length
function TreeNode(data){
    this.data = data;
    this.left = this.right = null;
}

function bst(){
    this.root;
}

function createFromArray(arr, start, end){
    //arr = input array, start = 0, end = arr.length - 1
    if(start > end) return null;
    var mid = Math.floor((start + end)/2);
    console.log("Mid - ", mid);
    var root = new TreeNode(arr[mid]);
    root.left = createFromArray(arr, start, mid - 1);
    root.right = createFromArray(arr, mid + 1, end);
    return root;
}

function printPreOrder(node){
    if(!node) return null;
    // console.log(node.data);
    printPreOrder(node.left);
    console.log(node.data);
    printPreOrder(node.right);
    
}

var o = createFromArray([1,2,3,4,5,6,7], 0, 5);
console.log(o);
printPreOrder(o);
// console.dir(b.createFromArray([1, 2, 3, 4, 5], 0, 4));