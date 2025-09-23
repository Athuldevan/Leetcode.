/**
 Do not return anything, modify s in-place instead.
 */
function reverseString(str: string[]): any {
    const halfLength: number = Math.floor(str.length/2);
    let pointer  : any = str.length - 1
    for(let i : number = 0; i<halfLength; i++) {
       const temp  : any = str[pointer] //temp means 
       str[pointer] = str[i];
       str[i] = temp
        pointer--

    }

    return str
    
};