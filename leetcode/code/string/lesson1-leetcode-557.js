/**
 * leetcode 557
 * 题目要求: 给定一个字符串，你需要反转字符串中每个单词的字符顺序，同时仍保留空格和单词的初始顺序。
 * 示例：
 * 输入: "Let's take LeetCode contest"
 * 输出: "s'teL ekat edoCteeL tsetnoc" 
 * 注意：在字符串中，每个单词由单个空格分隔，并且字符串中不会有任何额外的空格。
 */

/**
 * 知识点
 * String.prototype.split 将字符串分割为字符串数组
 * Array.prototype.map  创建一个新数组，结果是该数组中的每一个元素都调用一个提供的函数后返回的结果
 * Array.prototype.reverse  颠倒数组中元素的顺序
 * Array.prototype.join  将所有元素放入一个字符串，元素通过指定的分隔符进行分割
 */

export default str => {
    // 字符串按空格进行分割，保存数组，数组的元素的先后顺序就是单词的顺序
    // 对数组进行遍历，然后每个元素进行反转
    return str
      .split(' ')
      .map(item => {
        return item
          .split('')
          .reverse()
          .join('');
      })
      .join(' ');
  };
  
  // export default str => {
  //   let arr = s.split(' ');
  //   let result = arr.map(item => {
  //     return item
  //       .split('')
  //       .reverse()
  //       .join('');
  //   });
  //   return result.join(' ');
  // };
  
  /* 比上面的方法更优
  let reverseWords = function(s) {
    let finalword = '';
    let spaceword = s.split(' ');
    for (let i in spaceword) {
      spaceword[i] = spaceword[i]
        .split('')
        .reverse()
        .join('');
      finalword = finalword + spaceword[i] + ' ';
    }
    return finalword.replace(/(\s*$)/g, '');
  };
  */
  
  /* leetcode 最优解
  const reverseWords = str => {
    return str
      .split('')
      .reverse()
      .join('')
      .split(' ')
      .reverse()
      .join(' ')
  }
  */
  