const string = ['taurusUi', 'taurusgui', 'taurus', 'taur'];

function longestCommonPrefix(string){
    if (string.length == 0) return ""
    if (string.length == 1) return string[0]
    string.sort();

    let end = Math.min(string[0].length, string[string.length - 1].length);

    let i = 0;
    while(i < end && string[0][i] == string[string.length - 1][i]){
        i++;
    }
    let prefix = string[0].substring(0, i);

    return prefix;
}

console.log(longestCommonPrefix(string))

