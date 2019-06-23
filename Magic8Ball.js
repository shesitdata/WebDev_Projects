var userName = '';

userName ? console.log(`Hello ${userName} !`) : console.log('Hello!');

const userQuestion = 'Is web development right for me?';
console.log(`The user asked: ${userQuestion}`);

let randomNumber = Math.floor(Math.random() * 8);
console.log(randomNumber)

let eightBall = '';

switch (randomNumber) {
  case 0:
    eightBall = "It is certain";
    break;
  case 1:
    eigthBall = 'It is decidedly so';
    break;
  case 2:
    eightBall = 'Reply hazy try again';
    break;
  case 3:
    eightBall = 'Cannot predict now';
    break;
  case 4:
    eightBall = 'Do not count on it';
    break;
  case 5:
    eightBall = 'My sources says no';
    break;
  case 6:
    eightBall = 'Outlook not so good';
    break;
  case 7:
    eightBall = 'Signs point to yes';
    break;
    
}
console.log(eightBall)