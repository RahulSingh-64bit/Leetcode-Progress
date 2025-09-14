/**
 * @param {string} s
 * @return {number}
 */
var maxFreqSum = function(s) {
    let vow= new Map();
    let cons=new Map();

    for(let ch of s){
        if("aeiou".includes(ch)){
            vow.set(ch,(vow.get(ch)|| 0) + 1)
        }

        else{
            cons.set(ch,(cons.get(ch)||0) + 1)
        }
    }
    
    let maxV = vow.size > 0 ? Math.max(...vow.values()) : 0;
    let maxC = cons.size > 0 ? Math.max(...cons.values()) : 0;

    return maxV + maxC;
};