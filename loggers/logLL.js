//Singly LinkedLists
const LinkedList = require('../lib/LinkedList'),
    logger = require('../logger');
 
var ll = new LinkedList();
logger.info('Adding to LL:');
logger.info('Putting 2 in the LL at index: ', ll.put(2));
logger.info('Putting 4 in the LL at index: ', ll.put(4));
logger.info('Putting 6 in the LL at index: ', ll.put(6));
logger.info('Putting 8 in the LL at index: ', ll.put(8));
logger.info('Putting 10 in the LL at index: ', ll.put(10));
logger.info('LinkedList after put - ', JSON.stringify(ll));
 
logger.info('Retrieving from LL:');
logger.info('Retrieving 0 - ', ll.get(0));
logger.info('Retrieving 1 - ', ll.get(1));
logger.info('Retrieving 2 - ', ll.get(2));
logger.info('Retrieving 3 - ', ll.get(3));
logger.info('Retrieving 4 - ', ll.get(4));
 
logger.info('Removing by index from LL:');
logger.info('Removing 0 - ', ll.remove(0));
logger.info('Removing 3 - ', ll.remove(3));
 
logger.info('LinkedList after remove - ', JSON.stringify(ll));
logger.info('Reversed LinkedList - ', JSON.stringify(ll.reverse()));
 
logger.info('Retrieving 3rd from behind - ', JSON.stringify(ll.getFromBehind(3)));
logger.info('Is Palindrome ? ', JSON.stringify(ll.isPalindrome()));
logger.info('Putting 3 in the LL: ', ll.put(3));
logger.info('Putting 4 in the LL: ', ll.put(4));
logger.info('Putting 6 in the LL: ', ll.put(6));
logger.info('Putting 8 in the LL: ', ll.put(8));
logger.info('LinkedList after making it palindrome :) - ', JSON.stringify(ll));
logger.info('Is Palindrome now ? ', JSON.stringify(ll.isPalindrome()));
logger.info('Print alternates twice - ', ll.printAlternateTwice(ll._head.next));
logger.info('Is loop ? ', ll.isLoop());
ll._head.next.next.next.next.next.next = ll._head.next.next;
logger.info('After loop - ', ll);
logger.info('Is loop now? ', ll.isLoop());
logger.info('Get the loop start ', ll.getLoopStart());