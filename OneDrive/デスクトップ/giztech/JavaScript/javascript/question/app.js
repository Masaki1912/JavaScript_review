//Q1
let nickname ='ごっしー';
let age = 28;
let greet ='私のニックネームは' + nickname + 'です。' + '年齢は' + age + '歳です。'

console.log(greet); 


//Q2//配列の番号(インデックス),配列型の英語版（array）
let names = [
  'JavaScript',
  'PHP',
  'Ruby',
  'Python',
  'Go'
]; 

console.log(`私の好きな言語は${names[0]}です。次は${names[3]} を勉強してみたいです。`);


//Q3//キーとバリューのセット(プロパティ)
let user = {
  name: 'John',
  age: 26,
  bloodType: 'A',
  favorite: 'card',
};

console.log(user.age);


//Q4
let playerList = [
  {
    name: 'John',
    age: 26,
    favorites: ['Card Game', 'Basket Ball', 'Programming'],
  },
  {
    name: 'Bob',
    age: 33,
    favorites: ['Tinder', 'The Legend of Zelda'],
  },
  {
    name: 'Michael',
    age: 22,
    favorites: ['Football', 'Smash Bros.'],
  },
];

console.log(playerList[1].favorites[1]);


//Q5
let AverageAge = (playerList[0].age + playerList[1].age + playerList[2].age);

console.log(AverageAge / 3);


//Q6
function sayHello() {
  console.log('Hello')
}
sayHello();

sayWord = function() {
  console.log('World');
}
sayWord();


//Q7 メソッド　解きなおし
user.birthday = '2000-09-27';
user.sayHello = function() {
  console.log('Hello')
};

sayHello();


//Q8
let calc = {
  add:function(x,y) {
    let add = x + y;
    console.log(add);
  },

  subtract:function(x,y) {
    let subtract = x - y;
    console.log(subtract);
  },

  multiply:function(x,y) {
    let multiply = x * y;
    console.log(multiply);
  },
  
  divide:function(x,y) {
    let divide = x / y;
    console.log(divide);
  }
};
//定義の引数と実行時の引数
calc.add(3,4);
calc.subtract(20,10);
calc.multiply(7,7);
calc.divide(25,5);


//Q9
function remainder(x,y) {
  let remainder = x % y;
  console.log(x + 'を' + y + 'で割った余りは' + remainder + 'です。');
  return remainder
};

console.log(remainder(5,3));


//Q10
//[回答]xの変数のスコープ(有効範囲)が｛｝の関数内のみのためエラーが発生、事前に関数外に紐づいている変数を定義すれば関数の中からでも参照することが可能となる。


//Q2-1
let random = Math.floor(Math.random() * 10);
console.log(random);


//Q2-2
setTimeout(function() {
  console.log('Hello World!');
},
3000);


//Q2-3
let num = 0;
if (num > 0) {
  console.log('num is greater than 0');
} else if (num < 0) {
  console.log('num is less than 0');
} else if (num === 0) {
  console.log('num is 0');
}


//Q2-4
let numbers = [];
for (let i = 0; i < 100; i++) {
  numbers.push(i)
};
console.log(numbers);


//Q2-5
let mixed = [4, '2', 5, '8', '9', 0, 1];
  for (let i = 0; i < mixed.length; i++) {
    let numbers = mixed[i];
    if (typeof numbers === 'number') {
      if ( numbers % 2 === 0) {
        console.log('even');
      } else {
        console.log('odd');
      }
    } else {
        console.log('not number');
    }
  };

//Number であり偶数の時は even
//Number であり奇数の時は odd
//Number 以外の時は not number