// leetcode 394
let str1 = '2[3[a]2[b]]';
var decodeString = function(s) {
  let res = '';
  // console.log(s)
  for (let i = 0; i < s.length; ) {
    console.log(s[i], isNaN(s[i]));
    if (isNaN(s[i])) {
      res += s[i++];
    } else {
      let k = 0;
      while (!isNaN(s[i])) {
        k = k * 10 + parseInt(s[i++]);
      }

      // 另开一个指针来遍历!
      console.log(i, 'ssss');
      let j = i + 1;
      console.log(j, 'j');
      let sum = 1;

      while (sum > 0) {
        console.log(j, 'jjj');
        console.log(sum, 'sum');
        if (s[j] === '[') sum++;
        if (s[j] === ']') sum--;
        j++;
      }

      let r = decodeString(s.substr(i + 1, j - i - 2));
      // console.log(r);
      while (k--) {
        res += r;
      }
      i = j;
    }
  }

  return res;
};

var decodeStrings = function(s) {
  function cusConcat(num, str) {
    let res = '';
    for (let i = 0; i < Number(num); ++i) {
      res += str;
    }
    return res;
  }
  const regexp = /(\d+)\[(\w+)\]/;
  let string = s,
    cache;
  let arr = string.match(regexp);

  while (arr) {
    console.log(arr);
    // match 结果 arr
    // [ '10[a]', '10', 'a', index: 2, input: '2[10[a]2[b]]' ]
    // [ '2[b]', '2', 'b', index: 12, input: '2[aaaaaaaaaa2[b]]' ]
    // [ '2[aaaaaaaaaabb]', '2', 'aaaaaaaaaabb', index: 0, input: '2[aaaaaaaaaabb]' ]
    cache = cusConcat(arr[1], arr[2]);
    console.log(cache);
    string = string.replace(regexp, cache);
    console.log(string);
    arr = string.match(regexp);
  }
  return string;
};

// console.log(decodeString(str1));
/**
 * String.prototype.match() 检索返回一个字符串匹配正则表达式的结果
 * 语法：str.match(regexp)
 * 参数：
 *    regexp,一个正则表达式对象。如果传入一个非正则表达式对象，会隐式的调用New RegExp(obj)，将其转换为一个RegExp。
 *    如果没有给出任何参数并直接使用 match() 方法，你将会得到一个包含空字符串的 Array: [""]
 * 返回值：
 *    如果正则使用 g 标志，则返回与完整正则表达式匹配的所有结果（Array），但不会返回捕获组或者未匹配 null
 *    如果未使用 g 标志，则返回第一个完整匹配及其相关的捕获组（Array）。在这种情况下，返回的结果将会有如下属性，
 *    或者未匹配 null。
 * 附加属性：
 *    groups： 一个捕获组数组或者undefined
 *    index：匹配的结果开始的位置
 *    input：搜索的字符串
 *
 */

/**
 * 正则捕获组
 * 捕获组就是把正则表达式中子表达式匹配的内容，保存到内存中以数字标号或者显式命名的组里，方便以后引用。
 * 这种引用既可以在正则表达式内部也可以在正则表达式外部。
 * 捕获组有两种形式，一种是普通捕获组，一种是命名捕获组。通常所说的捕获组是普通捕获组。语法如下：
 * 普通捕获组：(Expression)
 * 命名捕获组：(?<name>ExPression)
 */

var decodeStringBest = function(s) {
  let reg = /\d+\[\w+\]/g;
  while (s.match(reg)) {
    let arr = s.match(reg);
    arr.forEach(item => {
      let rep = parseInt(item.match(/\d+/g), 10);
      let str = item
        .replace(/\d+/g, '')
        .replace('[', '')
        .replace(']', '');
      s = s.replace(item, str.repeat(rep));
    });
  }
  return s;
};
console.log(decodeStringBest(str1));

var decodeStr = function(s) {
  let reg = /\d+\[\w+\]/g;
  while (s.match(reg)) {
    let arr = s.match(reg);
    arr.forEach(item => {
      let rep = parseInt(item.match(/\d+/g), 10); // 获取重复倍数
      // let str = item
      //   .replace(/\d+/g, '')
      //   .replace('[', '')
      //   .replace(']', ''); // 获取重复的字符
      // let str = item.replace(/\d+|\[|\]/g, ''); // 获取重复的字符
      let str = item.match(/[a-zA-Z]/g);
      console.log(str, 'str')
      s = s.replace(item, str.repeat(rep));
    });
  }
  return s;
};
