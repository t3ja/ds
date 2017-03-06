var DoublyLinkedList = require('../lib/DoublyLinkedList'),
    logger = require('../logger');

//Doubly LinkedLists
var dll = new DoublyLinkedList();
logger.info('Adding to DLL:');
logger.info('Putting 2 in the DLL at index: ', dll.put(2));
logger.info('Putting 4 in the DLL at index: ', dll.put(4));
logger.info('Putting 6 in the DLL at index: ', dll.put(6));
logger.info('Putting 8 in the DLL at index: ', dll.put(8));
logger.info('Putting 10 in the DLL at index: ', dll.put(10));
logger.info('DoublyLinkedList after put - ', dll);

logger.info('Retrieving from DLL:');
logger.info('Retrieving 0 - ', dll.get(0));
logger.info('Retrieving 1 - ', dll.get(1));
logger.info('Retrieving 2 - ', dll.get(2));
logger.info('Retrieving 3 - ', dll.get(3));
logger.info('Retrieving 4 - ', dll.get(4));

logger.info('Removing by index from DLL:');
logger.info('Removing 0 - ', dll.remove(0));
logger.info('Removing 3 - ', dll.remove(3));

logger.info('DoublyLinkedList after remove - ', dll);
logger.info('Reversed DoublyLinkedList - ', dll.reverse());
