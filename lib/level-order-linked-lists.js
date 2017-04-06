const LinkedList = require("./LinkedList"),
      Queue = require("./Queue");

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
    // console.log("Mid - ", mid);
    var root = new TreeNode(arr[mid]);
    root.left = createFromArray(arr, start, mid - 1);
    root.right = createFromArray(arr, mid + 1, end);
    return root;
}



function createLOLL(root, arr, level){
    if(!root) return;
    
    var l = new LinkedList();
    if(arr.length === level){
        arr.push(l);
    }else{
        l = arr[level];
    }
    l.put(root.data);
    createLOLL(root.left, arr, level+1);
    createLOLL(root.right, arr, level+1);
}

function printLevelOrderSum(root){
    if(!root) return; //base case
    var q = new Queue();
    var sumArr = [];
    q.enqueue(root);
    while(true){
        var numNodes = q.getLength();
        if(!numNodes) break;
        var sum = 0;
        while(numNodes > 0){
            var curr = q.dequeue();
            sum += curr.data;
            if(curr.left) q.enqueue(curr.left);
            if(curr.right) q.enqueue((curr.right));
            numNodes--;
        }
        sumArr.push(sum);
        // sum = 0;
    }
    console.log(sumArr);
}

function getLevelOrderSumRecursive(root, sumArr, level){
    if(!root) return; //base case
    sumArr[level] += root.data;
    console.log("Rec data ", root.data);
    if(root.left) getLevelOrderSumRecursive(root.left, sumArr, level+1);
    if(root.right) getLevelOrderSumRecursive(root.right, sumArr, level+1);
    // return sumArr;
}

function getMaxLevel(root){
    if(!root) return; //base case
    var q = new Queue();
    var height = 0;
    q.enqueue(root);
    q.enqueue(null);
    while(q.getLength()){
        var n = q.dequeue();
        if(!n){
            if(!q.isEmpty()){
					q.enqueue(null);
				}
				height++;
        }else{
            if(n.left) q.enqueue(n.left);
            if(n.right) q.enqueue(n.right);
        }
    }
    console.log(height);
}

function printLevelOrder(root){
    if(!root) return; //base case
    var q = new Queue();
    var out = '';
    q.enqueue(root);
    while(true){
        var numNodes = q.getLength();
        if(!numNodes) break;
        while(numNodes > 0){
            var curr = q.dequeue();
            out += ' ' + curr.data;
            if(curr.left) q.enqueue(curr.left);
            if(curr.right) q.enqueue((curr.right));
            numNodes--;
        }
        out += '\n';
    }
    console.log(out);
}

function recursiveHeight(root){
    if(!root) return 0;
    return (1 + Math.max(recursiveHeight(root.left), recursiveHeight(root.right)));
}
function test1(){
    var o = createFromArray([1,2,3,4,5,6,7], 0, 6);
    var arr = new Array();
    createLOLL(o, arr, 0);
    for(var i =0; i < arr.length; i++){
        console.log(JSON.stringify(arr[i]));
    }
    console.log(arr);
};

function test2(){
    var o = createFromArray([1,2,3,4,5,6,7], 0, 6);
    var arr = new Array();
    printLevelOrderSum(o, arr, 0);
    for(var i =0; i < arr.length; i++){
        console.log(JSON.stringify(arr[i]));
    }
    console.log(arr);
};

function test3(){
    var o = createFromArray([1,2,3,4,5,6,7], 0, 6);
    printLevelOrder(o);
    printLevelOrderSum(o)
};

function test4(){
    var o = createFromArray([1,2,3,4,5,6,7,8,9,10,11,12], 0, 11);
    printLevelOrder(o);
    printLevelOrderSum(o);
    var arr = [];
    getLevelOrderSumRecursive(o, arr, 0)
    console.log(arr);
    // console.log(recursiveHeight(o));
};

function recursivePower(x,n){
    //Return x^n
    if(n == 0) return 1;
    return x*recursivePower(x, n-1);
}


function recursiveOptimizedPOwer(x,n){
    if(n===0) return 1;
    if(n%2 === 0){
        var y = recursiveOptimizedPOwer(x, n/2);
        return y*y;
    }else{
        return x*recursiveOptimizedPOwer(x, n-1);
    }
}

function test5(){
    console.log(recursivePower(2, 6));
    console.log(recursiveOptimizedPOwer(2, 6));
}

test5();

