学习笔记
重点学习DOM API；自己对DOM API 除了几个常见的，其他一概不知，现在在W3C上学习了很多HTML DOM 参考手册上学了一些；参考地址防止忘记:https://www.w3school.com.cn/htmldom/htmldom_reference.asp


JS原生参考手册:https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference

JS标准内置对象

值属性 Infinity NaN undefined globalThis
函数属性
eval()
uneval()
isFinite()
isNaN()
parseFloat()
parseInt()
decodeURI()
decodeURIComponent()
encodeURI()
encodeURIComponent()
    已废弃
        escape()
        unescape()

基本对象 Object Function Boolean Symbol

错误对象
Error
AggregateError
EvalError
InternalError
RangeError
ReferenceError
SyntaxError
TypeError
URIError

数字日期对象 Number BigInt Math Date

字符串 String，RegExp

可索引的集合对象
Array
Int8Array
Uint8Array
Uint8ClampedArray
Int16Array
Uint16Array
Int32Array
Uint32Array
Float32Array
Float64Array
BigInt64Array
BigUint64Array

使用键的集合对象 Map Set WeakMap WeakSet

结构化数据  ArrayBuffer SharedArrayBuffer Atomics DataView JSON
控制抽象对象 Promise Generator GeneratorFunction AsyncFunction
反射 Reflect Proxy
国际化对象 Intl ECMAScript核心的附加功能，用于支持多语言处理
Intl
Intl.Collator
Intl.DateTimeFormat
Intl.ListFormat
Intl.NumberFormat
Intl.PluralRules
Intl.RelativeTimeFormat
Intl.Locale

WebAssembly:WebAssembly 是一种可以使用非 JavaScript 编程语言编写代码并且能在浏览器上运行的技术方案
参考文章:https://www.jianshu.com/p/bff8aa23fe4d
WebAssembly
WebAssembly.Module
WebAssembly.Instance
WebAssembly.Memory
WebAssembly.Table
WebAssembly.CompileError
WebAssembly.LinkError
WebAssembly.RuntimeError

其他 arguments： arguments 是一个对应于传递给函数的参数的类数组对象；
实例：
function func1(a, b, c) {
  console.log(arguments[0]);  // expected output: 1
  console.log(arguments[1]);  // expected output: 2
  console.log(arguments[2]);  // expected output: 3
}
func1(1, 2, 3);

