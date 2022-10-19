// Give a correct verdict to users input if he enters "yes", "YES","Yes" ,etc
// (any combination) using string methods.
// How will you handle that ?

// ans : using toUpper() or toLower() and trim().

function func(st){
    if(st.trim().toUpperCase()==='YES'){
        console.log('user entered yes')
    }
}
func('yes');
func('yEs');
func('YES');
func('  yEs   ');