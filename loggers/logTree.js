const Tree = require('../lib/Tree'),
    logger = require('../logger');
    
var tree = new Tree();
tree.add('ceo');
tree.add('cto', 'ceo');
tree.add('dev1', 'cto');
tree.add('dev2', 'cto');
// tree.add('cfo', 'cto');
tree.add('cfo', 'ceo');
tree.add('accountant', 'cfo');
// tree.add('cmo', 'ceo');
tree.print(); // => ceo | cto cfo cmo | dev1 dev2 dev3 accountant
tree.printByLevel();  // => ceo \n cto cfo cmo \n dev1 dev2 dev3 accountant
logger.info('tree contains dev1 is true:', tree.contains('dev1')); // => true
logger.info('tree contains dev4 is false:', tree.contains('dev4')); // => false
logger.info('--- BFS');
tree.traverseBFS(function(node) { logger.info(node.data); }); // => ceo cto cfo cmo dev1 dev2 dev3 accountant
logger.info('--- DFS preOrder');
tree.traverseDFS(function(node) { logger.info(node.data); }, 'preOrder'); // => ceo cto dev1 dev2 dev3 cfo accountant cmo
logger.info('--- DFS postOrder');
tree.traverseDFS(function(node) { logger.info(node.data); }, 'postOrder'); // => dev1 dev2 dev3 cto accountant cfo cmo ceo
tree.remove('cmo');
tree.print(); // => ceo | cto cfo | dev1 dev2 dev3 accountant
tree.remove('cfo');
tree.print(); // => ceo | cto | dev1 dev2 dev3