function doubleLetter(str) {
    const splitedstr = str.split('');
    let res = ''
    for (const iterator of splitedstr) {
        res = res + iterator + iterator;
    }
    console.log(res)
}

doubleLetter('Hello, Valentyn')