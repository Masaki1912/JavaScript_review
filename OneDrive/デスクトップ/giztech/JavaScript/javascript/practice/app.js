let userA = '到着';
let userB = '到着';

if (userA === '到着' && userB === '到着') {
  console.log(userA === '到着' && userB === '到着');
} else {
  console.log(userA === '到着' && userB === '到着');
}

function doFunc(callback) {
  console.log('doFuncが呼び出されました');
  callback();
}

// 以下を追記
doFunc(function() {
  console.log('コールバック関数が呼び出されました');
});

for (let i = 0; i < 10; i++) {
  console.log(i + '回目のコンソール');
}


let text = 'JavaScriptの練習';
console.log(text);
// 以下を追記
text = 'JavaScriptをマスターした';
console.log(text);