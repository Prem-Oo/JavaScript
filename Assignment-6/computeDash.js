// const computeDash=(num)=>{
//    const arr=num.split('');
//    const nums=arr.map(Number);
//     for(let i=0;i<(nums.length-1);i++){
//         if(nums[i]%2===0 && nums[i+1]%2===0){
//             nums.splice(i,0,'-');
//         }
//    }
//     return nums.join('');
// }
// console.log(computeDash('025468'));


const computeDash=(num)=>{
    const arr=num.split('');
    const nums=arr.map(Number);
     for(let i=0;i<nums.length;i++){
         if(nums[i-1]%2===0 && nums[i]%2===0){
             nums.splice(i,0,'-');
         }
    }
     return nums.join('');
 }
 console.log(computeDash('025468'));


 