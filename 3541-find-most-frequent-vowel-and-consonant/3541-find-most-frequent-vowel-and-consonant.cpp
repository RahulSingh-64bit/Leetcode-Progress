class Solution {
public:
    int maxFreqSum(std::string s) {
        std::map<char, int> vowels;
        std::map<char, int> consonants;
        const std::set<char> vowelSet = {'a', 'e', 'i', 'o', 'u'};

        for (char ch : s) {
            if (vowelSet.count(ch)) {
                vowels[ch]++;
            } else {
                consonants[ch]++;
            }
        }

        int maxVowelFreq = 0;
        if (!vowels.empty()) {
            int max_val = 0;
            for (const auto& pair : vowels) {
                max_val = std::max(max_val, pair.second);
            }
            maxVowelFreq = max_val;
        }

        int maxConsonantFreq = 0;
        if (!consonants.empty()) {
            int max_val = 0;
            for (const auto& pair : consonants) {
                max_val = std::max(max_val, pair.second);
            }
            maxConsonantFreq = max_val;
        }

        return maxVowelFreq + maxConsonantFreq;
    }
};