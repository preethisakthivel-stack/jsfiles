const array = ["11", "12", "13", "14", "15", "16"];
console.log(array[1]);
console.log(array.at(0));
console.log(array.concat("17"));
console.log(array.join(""));
console.log(array.length);
console.log(array.push("18"));
console.log(array.pop());
console.log(array.slice(3));
console.log(array.shift());
console.log(array.unshift("11"));

let arrtime = ["12", "10", "11", "-1"];

for (i = 0; i <= arrtime.length - 1; i++) {
    if (arrtime[i] <= arrtime.includes("-1")) {
        console.log(" Wrong time !");
    } else {
        console.log("correct time!");
    }
}

const arrayelement = ["11", "12", "13", "14", "15"];
for (i = 0; i <= arrayelement.length - 1; i++) {
    console.log(arrayelement[i]);
}

console.log(arrayelement.join(","));

const arraynum = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
for (i = 0; i <= arraynum.length - 1; i++) {
    if (arraynum[i] % 2 === 0) {
        console.log(arraynum[i], ": is EVEN ");
    } else {
        console.log(arraynum[i], ": is ODD");
    }
}

const arraystr = ["mango", "apple", "orange"];
console.log(arraystr.join("*"));

const arrfindlen = ["mango", "apple", "orange"];
let arrlen = [];
for (let i = 0; i <= arrfindlen.length - 1; i++) {
    arrlen.push(arrfindlen[i].length);
}
console.log(arrlen);

let maxlen = Math.max.apply(null, arrlen);
console.log(maxlen);

let indexarr = arrlen.indexOf(maxlen);
console.log(indexarr);

console.log(arrfindlen[indexarr]);

const arrval = ["first", "second", "third"];
let vallen = [];
for (i = 0; i <= arrval.length - 1; i++) {
    vallen.push(arrval[i].length);
}
console.log(vallen);
let arrmin = Math.min.apply(null, vallen);
console.log(arrmin);
let indval = vallen.indexOf(arrmin);
console.log(indval);

console.log(arrval[indval]);

const givarr = ["1", "2", "3", "4", "5", "6", "6", "7", "8", "9", "10"];
const eveval = [];
const oddval = [];

for (i = 0; i <= givarr.length - 1; i++) {
    if (givarr[i] % 2 === 0) {
        eveval.push(givarr[i]);
    } else {
        oddval.push(givarr[i]);
    }
}
console.log("Even", eveval);
console.log("Odd:", oddval);

const arrelem = [10, 20, 30, 40];

let sum = arrelem.at(0) + arrelem.at(arrelem.length - 1);
console.log(sum);

const getarr = [10, 20, 30];
let addval = 0;
for (i = 0; i <= getarr.length - 1; i++) {
    addval += getarr[i];
    let totval = addval / getarr.length;
    console.log(totval);
}

// const givenarr=[1,2,6];
// let value=[];
// value.push(givenarr)
//  value.sort(function(a,b){return(a-b)})
// if(value === givenarr)
// {
//     console.log("Sorted");
// }else
// {
//     console.log("Not Sorted");
// }

const isSortArray = [1, 3, 7, 8];
// let min = isSortArray[0],
isUnsort = false;

for (let i = 0; i <= isSortArray.length - 1; i++) {
    if (isSortArray[i] < isSortArray[i + 1]) {
        isUnsort = true;
        // min = isSortArray[i];
    } else {
        // isUnsort= false
        continue;
    }
}

if (!isUnsort) {
    console.log("Sorted");
} else console.log("UnSorted");

function given(arr) {
    return arr.slice(2);
}
let resul = given(["2", "3", "4", "5", "6", "7"]);
console.log("given arr:", resul);

function merge(arr1, arr2) {
    return [...arr1, ...arr2].sort((arr1, arr2) => arr1 - arr2);
}
const arr1 = ["4", "2", "5"];
const arr2 = ["1", "3"];

console.log("Merge:", merge(arr1, arr2));

function elmentofarr(arra, element) {
    for (i = 0; i <= arra.length ; i++) {
        if (arra[i] == element) {
            console.log(arra.indexOf());
            return arra.indexOf();
        }
    }
   
}
let arra = [1, 2, 3, 4, 5, 6];
let element = 4;
elmentofarr(arra,element)

function checkpassorfail(markarr)
{
    if(markarr>=40)
    {
        return "pass";
    }else{
        return "fail";
    }
}


const result=checkpassorfail([50])
console.log(result);

function Roundoff(num,digit)
{
 let resss=num.toFixed(digit);   
    return resss ;
}

let resuofRoundoff=Roundoff(8.23333,2);
console.log(resuofRoundoff)

function finddegree(degree)
{
    let radian=Math.PI/180*degree
    return radian.toFixed(4) ;
}
let valueofdegree=finddegree(270)
console.log(valueofdegree)


function tiltocapit(heading)
{
let head=heading.charAt(0).toUpperCase()
    let til=head+heading.slice(1);
    return til ;
}

let title=tiltocapit('hellow')
console.log(title);

let dashingnum=(variable)=>
{
   let dash= String(variable).split("").join("-");
return dash;
}
let applydash=dashingnum([12345])
console.log(applydash);

let addelement=(numss)=>
{
    let numval=numss[0]+numss[numss.length-1]
    return numval ;
}
let addnum=addelement([10,20,30,40,50])
console.log(addnum);

let evennum=(n)=>
{
    let nums=0
    for(i=0;i<=n;i++)
    {
        if(i%2===0)
        {
            console.log(i)
            nums+=i
        }
    }
    return nums;
}
let numvall=evennum(10)
console.log(numvall);

let smilyfaces=(face)=>
{
    return face.replaceAll(':)',':(');
}
let turnfacelike=smilyfaces(':) :) :) All Smiles are here :)');
console.log(turnfacelike);

let hidecreditcard=(cardnum)=>
{
   let change='*'.repeat(cardnum.length-4)+cardnum.slice(12)
    
   return change;
}
let hidecard=hidecreditcard("1231231234567328")
console.log(hidecard);


let ispronic=(numare)=>
{
   
        for(i=0;i*(i+1)<=numare;i++)
        {
            if((i*(i+1))===numare)
            {
            return 'Pronic';
            }
        }
         
         return 'Not Pronic';
    }
   

let pronicnum=ispronic(10)
console.log(pronicnum)


// let findmaxlenofbrok=(textarray,brokenchr)=>
// {
// let text=textarray[0]
//     let maxxlen=0
//     let curentlen=0
    
//     for(i=0;i<=text.length-1;i++)
//     {
//         if(brokenchr.includes(text[i])){
//           maxxlen=Math.max(maxlen,curentlen) 
//           return maxlen  
//         }else
//         {
//             curentlen++;
//         }
//    }
//    return curentlen;
// }
// let textarray=["javascript challenges is good for practise coding"];
// let brokenchr=['p'];
// let brokenchartext=findmaxlenofbrok(text,brokenchr);
// console.log(brokenchartext);


let largestval=(num1,num2)=>
{
    return Math.max(num1,num2);
}
let maxval=largestval(42,11)
console.log('Maxval is:',maxval);


let addsum=(n1,n2)=>
{
    return n1+n2;
}
let summofval=addsum(12,1)
console.log('add value is:',summofval)


let findmin=(time)=>
{
    return time*60;
}
let minofhour=findmin(3)
console.log(minofhour);

let greatnum=(numm)=>
{
    if(numm>=5)
    {
        return 'Yes';
    }
    return 'No';
}
let numis=greatnum(10)
console.log(numis)

let discountprice=(orgrate,disrate)=>
{
    return orgrate-disrate;
}
let rate=discountprice(500,100)
console.log(rate);

let doublevalue=(value)=>
{
 return value+=value;   
}
let addsumof=doublevalue(5)
console.log(addsumof);

let mintosec=(minval)=>
{
    return minval*60;
}
let secondsofmin=mintosec(5)
console.log(secondsofmin);





