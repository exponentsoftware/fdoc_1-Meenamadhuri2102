/*1.a. Write a function which count the number of occurrence of words in a paragraph or a sentence.
The function countWords takes a paragraph and two words as parameters. 
It compare which word is most frequently occurred in the paragraph. */
// const paragraph = `I love teaching. If you do not love teaching what else can you love.
// I love JavaScript if you do not love something which can give life to your application what else can you love`;
function countWords(paragraph ,word1, word2){
    let countWord1 = 0;
    let countWord2 = 0;

    res = paragraph.split(' ');
    for(let i=0;i<res.length;i++) {
        if(res[i] == word1) {countWord1++; };
        if(res[i] == word2) {countWord2++; };
    };
    
    if(countWord1>countWord2) {return word1;} else {return word2;};
};

console.log(countWords(paragraph,'love', 'you'));

/* 1.b. Write a function called cleanText. The function takes raw text as a parameter and returns the clean text.
const sentence = `%I $am@% a %tea@cher%, &and& I lo%#ve %tea@ching%;. There $is nothing; 
&as& mo@re rewarding as educa@ting &and& @emp%o@wering peo@ple. ;
I found tea@ching m%o@re interesting tha@n any other %jo@bs. %Do@es thi%s mo@tivate yo@u to be a tea@cher!?`;
    console.log(cleanText(sentence));
`I am a teacher and I love teaching. There is nothing as more rewarding as educating and empowering people. 
I found teaching more interesting than any other jobs. Does this motivate you to be a teacher?`*/

const sentence = `%I $am@% a %tea@cher%, &and& I lo%#ve %tea@ching%;. 
There $is nothing; &as& mo@re rewarding as educa@ting &and& @emp%o@wering peo@ple. ;
I found tea@ching m%o@re interesting tha@n any other %jo@bs. %Do@es thi%s mo@tivate yo@u to be a tea@cher!?`;

function cleanText(sentence) {
   return newsentence =sentence.replace(/[^\w\s]/gi, '');

}
console.log(cleanText(sentence));

/*1.c. After cleaning the text in the sentence from question number b you will get the following text. 
Count the number of words in this text. Don't include words with only one letter.

const sentence =  `I am a teacher and I love teaching. There is nothing as more rewarding as educating and empowering people. 
I found teaching more interesting than any other jobs. Does this motivate you to be a teacher?`
console.log(countWords(sentence));
31*/

function countWords(sentence) {
    let res = [];
    res1 =sentence.split(' ');
    for(let i=0;i<res1.length;i++) {
        if(res1[i].length > 1) {
            res.push(res1[i]);
        }
    }
    return res.length;
}
const sentence = `I am a teacher and I love teaching. 
There is nothing as more rewarding as educating and empowering people.
 I found teaching more interesting than any other jobs.
  Does this motivate you to be a teacher?`;
console.log(countWords(sentence));

/*1.d. How many words were used to construct this sentence. Now, don't exclude one letter words.

console.log(varietyOfWords(sentence))
28 */
/*
function varietyOfWords(sentence){
    let res = [];
 res1 =sentence.split(' ');
 for(let i=0;i<res1.length;i++) {
    res.push(res1[i]);
}
return res.length;
}
const sentence = `I am a teacher and I love teaching. 
There is nothing as more rewarding as educating and empowering people.
 I found teaching more interesting than any other jobs.
  Does this motivate you to be a teacher?`;
  console.log(varietyOfWords(sentence))
  */
  const sentence =  `I am a teacher and I love teaching . There is nothing as more rewarding as educating and empowering people . I found teaching more interesting than any other jobs . Does this motivate you to be a teacher ?`;
  function varietyOfWords(param) {
      answer = param.split(' ');
      function onlyUnique(value, index, self) { 
          return self.indexOf(value) === index;
      }
    
      var unique = answer.filter( onlyUnique );
    
      return unique.length;
    }
  
    console.log(varietyOfWords(sentence));