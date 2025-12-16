function logInBox(str) {
  const len = str.length;
  let messageArr = str.split('');
  const topLineArr = ['+'];
  const botomLineArr = ['+'];
  const middleLineArr = ['|'];

  messageArr.unshift('|' , ' ');
  messageArr.push(' ', '|');

  for (let i = 0; i < str.length + 2; i += 1) {
    topLineArr.push('-');
    botomLineArr.push('-');
    middleLineArr.push(' ');
  }

  topLineArr.push('+');
  botomLineArr.push('+');
  middleLineArr.push('|');
  
  console.log(topLineArr.join(''));
  console.log(middleLineArr.join(''));
  console.log(messageArr.join(''));
  console.log(middleLineArr.join(''));
  console.log(botomLineArr.join(''));
}

logInBox('To boldly go where no one has gone before.');