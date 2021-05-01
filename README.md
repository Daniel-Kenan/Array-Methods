# Array-Methods
Provides Support and Python methods for Javascript. 

#### let fruits =  ['apple' , 'banana'  , 'cherry'] ; //example


const method = require('array-methods');
const {sample} = method ;


sample(fruits, 2) // returns 2 random items from the list
 
const {shuffle} = method ;

shuffle(fruits) // shuffles the order of the list ;  



const {randInt} =  method

randInt(1 , 6) // returns a random integer inclusive from the start to end ;



const {range} = method ; 

range( 0, 10) // returns a list starting from 0 to 9 . end number is exclusive ;
range( 0 , 100 , 5) // returns a list from 0 to 95 with a pattern of 5 ;

const {reverse} = method ;

reverse(fruit) // reverses the list 
