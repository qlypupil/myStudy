var decodeString = function(s) {
    let res = '';
    let nums = []; // 翻倍的次数
    let strs = []; // 翻倍的内容
    let num = 0;
    let len = s.length;
    for(let i = 0; i < len; ++i) {
        if(s[i] >= 0 && s[i] <= 9) {
            num = num * 10 + parseInt(s[i]);
        } else if ((s[i] >= 'a' && s[i] <= 'z') || (s[i] >= 'A' && s[i] <= 'Z')) {
            res = res + s[i]
        } else if (s[i] == '[') {
            // 将 '[' 前面的数字存入 num 内，
            // 字符串存入 str 内，
            nums.push(num);
            num = 0;
            strs.push(res);
            res = '';
        } else {
            // 遇到 ']' 时，操作与之相匹配的 '[' 之间的字符，使用分配律
            console.log(nums);
            console.log(strs);
            let times = nums[nums.length - 1];
            console.log(times, 'times');
            nums.pop();
            console.log(res, 'ressss');
            console.log(nums, 'nums');
            for(let j = 0; j < times; ++j) {
                strs[strs.length - 1] += res;
            }
            console.log(strs, 'strs');
            res = strs[strs.length - 1];
            strs.pop();
            console.log(strs, 'strs');
            console.log(res, 'res');
        }
    }
    return res;
}

console.log(decodeString('12[3[a]2[b]]'))
