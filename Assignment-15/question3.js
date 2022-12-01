// 3). Create a function that takes numbers b and m as arguments and
// returns the second derivative of the function f(x)=x^b +x* (e^(b*m))
// with respect to x evaluated at x=m, where b and m are constants.

//  2nd derivative :  f''(x)=b*(b-1)*x^b-2 


function derivative_2nd(b,m){
    return b*(b-1)*(Math.pow(m,b-2));
}
console.log(derivative_2nd(3,2));