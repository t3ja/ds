const BinaryTree = require('../lib/BinaryTree'),
    logger = require('../logger');
    
var tree = new BinaryTree();
tree.addChild(1);
logger.info(tree);
tree.addChild(2);
tree.addChild(3);
tree.addChild(4);
// tree.addChild('cfo', 'cto');
tree.addChild(5);
tree.addChild(6);
logger.info(tree); // => ceo | cto cfo cmo | dev1 dev2 dev3 accountant
// tree.printByLevel();  // => ceo \n cto cfo cmo \n dev1 dev2 dev3 accountant
// logger.info('tree contains dev1 is true:', tree.contains('dev1')); // => true
// logger.info('tree contains dev4 is false:', tree.contains('dev4')); // => false
// logger.info('--- BFS');
// tree.traverseBFS(function(node) { logger.info(node.data); }); // => ceo cto cfo cmo dev1 dev2 dev3 accountant
// logger.info('--- DFS preOrder');
// tree.traverseDFS(function(node) { logger.info(node.data); }, 'preOrder'); // => ceo cto dev1 dev2 dev3 cfo accountant cmo
// logger.info('--- DFS postOrder');
// tree.traverseDFS(function(node) { logger.info(node.data); }, 'postOrder'); // => dev1 dev2 dev3 cto accountant cfo cmo ceo
// tree.remove('cmo');
// tree.print(); // => ceo | cto cfo | dev1 dev2 dev3 accountant
// tree.remove('cfo');
// tree.print(); // => ceo | cto | dev1 dev2 dev3