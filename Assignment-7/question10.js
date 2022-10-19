// Given a String S, achieve following tasks
// a) Convert the String into upper case.
// b) Convert only the first character to uppercase.

// c) Convert the String into lower case.
// d) Break the string into two halves and swap them.
// e) Count the repeating characters.
// f) Reverse the string


function accept(st){
    console.log(st.toUpperCase());  
}
accept('Hii Hello')


let up=(st)=> st.charAt(0).toUpperCase()+st.substring(1);
console.log(up('hii Hello'));


let lower=(st)=> st.toLowerCase();
console.log(lower('Hii Hello'));


function half(st){
    return st.substring(Math.floor(st.length/2))+st.substring(0,Math.floor(st.length/2));

}
console.log(half('hello world'));


function count(st){
    for(let c of st){
        let result=0;
        while(st.includes(c)){
            result++;
            st=st.replace(c,'');
        }
        if(result>1)
            console.log(`${c} count is ${result}`);
    }
}
count('Hi Hello')



let rev=(st)=> st.split('').reverse().join('');
console.log(rev('Hii Hello'));


