//6. What string method can be used to check the occurrence of a specified text in a string?
// ans: includes() and replace() methods.


let st='hi aldcskfflhi nfinisenhi hihi';//5
// console.log(st.includes('hi'));
let count=0;
while(st.includes('hi')){
    count++;
    st=st.replace('hi','');
}
console.log(count);
