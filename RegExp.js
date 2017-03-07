// 正则表达式 类似Perl的语法
// pattern 部分可以是任何简单或复杂的正则表达式，可以包含
// 字符串，限定符，分组，向前查找以及反向引用

// flags 每个正则表达式都可带有一或多个标志
// g: 表示全局模式，即模式将被应用于所有字符串，而非在发现第一个匹配项时立即停止；
// i: 表示不区分大小写模式
// m: 表示多行模式，即在到达一行文本末尾时还要继续查找下一行中是否存在与模式匹配的项。
var expression = / pattern / flags ;

// 匹配第一个“bat”或“cat”，不区分大小写
var pattern1 = /[bc]at/i;

// 匹配第一个“ [bc]at”，不区分大小写
var pattern2 = /\[bc\]at/i;

// 匹配所有以“at”结尾的3个字符的组合，不区分大小写
var pattern3 = /.at/gi;

// 匹配所有以“.at”，不区分大小写
var pattern4 = /\.at/gi;

// 双重转义
// 字面量模式：/\w\\hello\\123/
// 等价的字符串："\\w\\\\hello\\\\123"
var pattern5 = new RegExp('\\w\\\\hello\\\\123', 'i');