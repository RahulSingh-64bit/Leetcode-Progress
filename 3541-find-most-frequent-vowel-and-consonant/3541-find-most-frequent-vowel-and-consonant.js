const maxFreqSum = function(s) {
    const vowels = new Set(['a', 'e', 'i', 'o', 'u']);
    const counts = {};

    for (const char of s) {
        counts[char] = (counts[char] || 0) + 1;
    }

    let maxVowelCount = 0;
    let maxConsonantCount = 0;

    for (const char in counts) {
        if (vowels.has(char)) {
            maxVowelCount = Math.max(maxVowelCount, counts[char]);
        } else {
            maxConsonantCount = Math.max(maxConsonantCount, counts[char]);
        }
    }

    return maxVowelCount + maxConsonantCount;
    
    
};