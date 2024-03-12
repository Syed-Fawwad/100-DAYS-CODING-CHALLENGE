/*DAY 2/100: START CODING 
Question 1: Famous Quote: Find a quote from a famous person you admire. Print the quote and the name of its author. Your output should look something like the following, including the

quotation marks:

"Albert Einstein once said, "A person who never made a mistake never tried anything new.*/
console.log('Albert Einestein once said,"A person who never made a mistake never tried anything new."');

/*Question 2: Famous Quote 2: Repeat Exercise 1, but this time store the famous person's name in a variable called famous_person. 
Then compose your message and store it in a new variable called message. Print your message.*/
let quote: string="A PERSON WHO NEVER MADE A MISTAKE NEVER TRIED ANYTHING NEW";
let famous_person: string="Albert Einestien";
let message=`${famous_person} once said,${quote}`;
console.log(message);
/*Question 3: Stripping Names: Store a person's name, and include some whitespace 
. Use "\t" (tab) and "\n" (new line) at least once.
 Print the name once, so the whitespace around the name is displayed. Then print the name after stripping the white spaces.*/
 let personName:string="\t\n FAWWAD \t\n";
 console.log(personName);//shows name with whitespace
 console.log(personName.trim());
 