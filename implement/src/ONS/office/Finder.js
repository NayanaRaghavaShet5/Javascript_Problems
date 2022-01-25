const stringReplacer = (str, needle, replacer) => {
    if (str) {
        let findNeedle = str.split(needle);
        console.log('findNeedle', findNeedle);
        console.log('length', findNeedle.length);
        if (findNeedle.length > 0) {
            let converted = findNeedle.join(replacer);
            console.log('converted', converted);
            return converted;
        }
    }
    return str;
}

stringReplacer('abhjd/dsfj', '/', '555555');