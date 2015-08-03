// Redis is an open-source data structure server that supports abstract data types

// Known as a key-value store, or NoSQL database

// Store value "avett" at key "server:name"
SET server:name "fido"

GET server:name

// Keys can be mapped to strings, lists of strings, sets of strings, and hash tables 

// Redis supports DEL, SETNX, and INCR operations
SET connections 10
INCR connections
INCR connections
DEL connections
INCR connections

// INCR is an example of an atomic operation that Redis provide

// This atomicity will prevent multiple clients from corrupting shared data

// The EXPIRE and TTL commands allow Redis to allow a key to only exist for a certain length of time
SET resource:lock "Redis Demo"
EXPIRE resource:lock 120

TTL resource:lock
TTL resource: lock
 
// Default TTL value is -1, which means the key won't expire

// Ordered lists are supported with several operations

// RPUSH puts a new value at the end of a list, while LPUSH puts it at the start
RPUSH friends "Bob"
RPUSH friends "Steve"
LPUSH friends "Sam"

// LRANGE returns a subset of the list
LRANGE friends 0 1
LRANGE friends 0 -1

// LLREN returns the current length of the list
LLEN friends

// LPOP returns the first element from the list and returns it
LPOP friends

// RPOP returns the last element from the list and returns it
RPOP friends

// Sets, or unordered lists, are supported too

// SADD adds a value to a set
SADD superpowers "perfect intelligence"
SADD superpowers "super strength"
SADD superpowers "flight"

// SREM removes the given value from the set
SREM superpowers "super strength"

// SISMEMBER tests if the given value is in the set
SISMEMBER superpowers "flight"
SISMEMBER "super strength"

// SMEMBERS returns a list of all the members in the set
SMEMBERS superpowers

// SUNION combines two or more sets and returns the list of all elements
SADD sharkpowers "super bite"
SADD sharkpowers "super swim"
SUNION superpowers sharkpowers

// Redis also supports Sorted Sets, which are like ordered lists except they use a "score" to sort elements
ZADD presidents 1789 "George Washington"
ZADD presidents 1797 "John Adams"
ZADD presidents 1801 "Thomas Jefferson"
ZADD presidents 1809 "James Madison"
ZADD presidents 1817 "James Monroe"

ZRANGE presidents 2 4

// Redis also supports hashes, which can be mapped like objects
HSET user:1000 name "Mike Kronk"
HSET user:1000 email "mkronk7@gmail.com"

HGETALL user:1000

HMSET user:1001 name "Nic Kronk" hair "brohawk"

HGET user:1001 name

HSET user:1000 visits 1
HINCRBY user:1000 visits 5







