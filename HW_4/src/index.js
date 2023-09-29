function reverse() {
    const str = '1234567' 
    const splitedstr = str.split ('')
    const reversedstr = splitedstr.reverse()
    let res = '';
    for (const iterator of reversedstr) {
        res = res + iterator
    }
    
    console.log(res)
}

reverse()