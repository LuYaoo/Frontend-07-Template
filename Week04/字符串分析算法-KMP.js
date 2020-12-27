/* title：字符串分析算法
2 KMP ：在长字符串里找模式
KMP就是模式匹配，要关注字符串本身的【自重复特性】；
关键是【搜索下标不要停留在已经比较过并且不匹配的位置】
所以需要一张 匹配表（跳转表格）
*/
function KMP(source,pattern){
    //计算跳转表格 table
    let table =new Array(pattern.length).fill(0);
    {
        let i =1,j =0;
        while(i<pattern.length){
            if(pattern[i]===pattern[j]){
                //匹配上了，i和j 下标先自增
                ++j , ++i;
                table[i]=j;
            }else{
                if(j > 0) 
                    j=table[j];
                else {
                    ++i;
                }
            }
        }
    }
    //console.log(table);
    //匹配
    {
        let i =1,j =0;
        while(i<source.length){
            if(pattern[j]===source[i]){
                //匹配上，前进一格
                ++j,++i;
            }else{
                if(j > 0) 
                    j=table[j];
                else {
                    ++i;
                }
                if(j===pattern.length){
                    return true;
                }
            }
            return false;
        }
    }
}

// KMP("","abcdabce")
// KMP("","abcdabc")
// KMP("","aabaaac")
/*
    a a b a a a c
    0 0 1 0 1 2 2
*/
console.log(KMP("abcdabcdabcex","abcdabce"));


