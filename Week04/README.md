学习笔记

/* title：字符串分析算法
2 KMP ：在长字符串里找模式
KMP就是模式匹配，要关注字符串本身的【自重复特性】；
关键是【搜索下标不要停留在已经比较过并且不匹配的位置】
所以需要一张 匹配表（跳转表格）
*/



let $ = Symbol("$");
//ES6 引入了一种新的原始数据类型 Symbol ，表示独一无二的值，最大的用法是用来定义对象的唯一属性名
//ES6 数据类型除了 Number 、 String 、 Boolean 、 Objec t、 null 和 undefined ，还新增了 Symbol
/*
let sy = Symbol("KK");
console.log(sy);   // Symbol(KK)
typeof(sy);        // "symbol"
// 相同参数 Symbol() 返回的值不相等
let sy1 = Symbol("kk"); 
sy === sy1;       // false
详细：https://www.runoob.com/w3cnote/es6-symbol.html
*/

WildCard方法感觉还不行，有点迷。还需要再找找资料。