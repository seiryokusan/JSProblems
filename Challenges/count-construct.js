const countConstruct = (target, wordbank, memo = {}) => {
    if (target === "") return 1;
    if (target in memo) return memo[target];

    let totalCount = 0;
    for (const word of wordbank) {
        if (target.indexOf(word) === 0) {
            const numWaysForRest = countConstruct(target.slice(word.length), wordbank, memo);
            totalCount += numWaysForRest;
        }
    }
    memo[target] = totalCount;
    return totalCount;
};

console.log(countConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd"])); //1
console.log(countConstruct("purple", ["purp", "p", "ur", "le", "purpl"])); //2
console.log(countConstruct("skateboard", ["bo", "rd", "ate", "t", "ska", "sk", "boar"])); //0
console.log(countConstruct("enterapotentpot", ["a", "p", "ent", "enter", "ot", "o", "t"])); //4
console.log(
    countConstruct("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef", [
        "e",
        "ee",
        "eee",
        "eeee",
        "eeeee",
        "eeeeee",
        "eeeeeee",
    ]) //0
);
