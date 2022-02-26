/**
 * @param {string} s
 * @return {number}
 */
var romanToInt1 = function (s) {
    const romanMap = new Map();
    romanMap.set("I", 1);
    romanMap.set("V", 5);
    romanMap.set("X", 10);
    romanMap.set("L", 50);
    romanMap.set("C", 100);
    romanMap.set("D", 500);
    romanMap.set("M", 1000);

    let num = 0;
    let flag = false;
    for (let i = 0; i < s.length; i++) {
        if (flag) {
            num += romanMap.get(s.charAt(i)) - romanMap.get(s.charAt(i - 1));
            flag = false;
        } else if (romanMap.get(s.charAt(i + 1)) > romanMap.get(s.charAt(i))) {
            flag = true;
        } else {
            num += romanMap.get(s.charAt(i));
        }
    }
    return num;
};

var romanToInt = function (s) {
    const romanMap = new Map();
    romanMap.set("I", 1);
    romanMap.set("V", 5);
    romanMap.set("X", 10);
    romanMap.set("L", 50);
    romanMap.set("C", 100);
    romanMap.set("D", 500);
    romanMap.set("M", 1000);

    let num = 0;

    for (let i = 0; i < s.length; i++) {
        const current = romanMap.get(s.charAt(i));
        const next = romanMap.get(s.charAt(i + 1));
        if (next > current) {
            num -= current;
        } else {
            num += current;
        }
    }
    return num;
};

console.log(romanToInt("III")); //3
console.log(romanToInt("LVIII")); //58
console.log(romanToInt("MCMXCIV")); //1994
