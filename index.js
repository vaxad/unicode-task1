
const n=parseInt(prompt('enter n'))
let arr=[];
let ind=[];
let max=-1;
for(let i=0;i<n;i++){
    const str=prompt('enter'+(i+1)+' element')
    if(!arr.includes(str)){
        ind[i]=1
        arr.push(str)
    }else{
        ind[arr.indexOf(str)]++
        if(ind[arr.indexOf(str)]>max){
            max=ind[arr.indexOf(str)]
        }
    }
}

console.log('number of distinct words: '+arr.length)

max!==-1?console.log('maximum occurence: '+arr[ind.indexOf(max)]+' '+max+' times'):console.log('all elements occured same times')