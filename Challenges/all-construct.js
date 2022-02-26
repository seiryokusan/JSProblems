// m = target.length
// n = wordbank.length
// O(n^m) time
// O(m) space
const allConstruct = (target, wordbank, memo = {}) => {
    if (target === "") return [[]];
    if (target in memo) return memo[target];

    const result = [];

    for (const word of wordbank) {
        if (target.indexOf(word) === 0) {
            const suffix = target.slice(word.length);
            const suffixWays = allConstruct(suffix, wordbank, memo);
            const targetWays = suffixWays.map(way => [word, ...way]);
            result.push(...targetWays);
        }
    }
    memo[target] = result;
    return result;
};

console.log(allConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd"])); //1
console.log(allConstruct("purple", ["purp", "p", "ur", "le", "purpl"])); //2
console.log(allConstruct("skateboard", ["bo", "rd", "ate", "t", "ska", "sk", "boar"])); //0
console.log(allConstruct("enterapotentpot", ["a", "p", "ent", "enter", "ot", "o", "t"])); //4
console.log(
    allConstruct("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee", [
        "e",
        "ee",
        "eee",
        "eeee",
        "eeeee",
        "eeeeee",
        "eeeeeee",
    ]) //0
);
