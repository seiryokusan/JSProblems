const canConstructSlow = (target, wordbank) => {
    if (target === "") return true;

    for (const word of wordbank) {
        if (target.indexOf(word) === 0) {
            const suffix = target.slice(word.length);
            if (canConstruct(suffix, wordbank)) {
                return true;
            }
        }
    }

    return false;
};

//Brute Force
// m = target.length
// n = wordBank.length
// O(n^m*m) time
// O(m^2) space

const canConstruct = (target, wordbank, memo = {}) => {
    if (target === "") return true;
    if (target in memo) return memo[target];

    for (const word of wordbank) {
        if (target.indexOf(word) === 0) {
            const suffix = target.slice(word.length);
            if (canConstruct(suffix, wordbank, memo)) {
                memo[target] = true;
                return true;
            }
        }
    }
    memo[target] = false;
    return false;
};
//Memoization
// O(n * m^2) time
// O(m^2) space

console.log(canConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd"])); //true
console.log(canConstruct("skateboard", ["bo", "rd", "ate", "t", "ska", "sk", "boar"])); //false
console.log(canConstruct("enterapotentpot", ["a", "p", "ent", "enter", "ot", "o", "t"])); //true
console.log(
    canConstruct("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef", [
        "e",
        "ee",
        "eee",
        "eeee",
        "eeeee",
        "eeeeee",
        "eeeeeee",
    ]) //false
);
