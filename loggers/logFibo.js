//Singly LinkedLists
var Fibonacci = require('../lib/Fibonacci'),
    logger = require('../logger');

var fb = new Fibonacci();
logger.info('6th element of fibonacci recursive :', fb.getRecursive(6));
logger.info('7th element of fibonacci recursive :', fb.getRecursive(7));
logger.info('8th element of fibonacci recursive :', fb.getRecursive(8));
console.time("Recursion Time");
logger.info('40th element of fibonacci recursive :', fb.getRecursive(40));
console.timeEnd("Recursion Time");

logger.info('6th element of fibonacci dp bottom up :', fb.getDP(6));
logger.info('7th element of fibonacci dp bottom up :', fb.getDP(7));
logger.info('8th element of fibonacci dp bottom up :', fb.getDP(8));
console.time("DP Time");
logger.info('40th element of fibonacci dp bottom up :', fb.getDP(40));
console.timeEnd("DP Time");

logger.info('6th element of fibonacci dp opti :', fb.getOpti(6));
logger.info('7th element of fibonacci dp opti :', fb.getOpti(7));
logger.info('8th element of fibonacci dp opti :', fb.getOpti(8));
console.time("Optimized Time");
logger.info('40th element of fibonacci dp opti :', fb.getOpti(40));
console.timeEnd("Optimized Time");
