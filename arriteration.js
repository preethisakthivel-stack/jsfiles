const arr=[1,2,3,4,5,6,7,8,9,10]

//for each
arr.forEach((num,i)=>{
    if(num%2!==0)
    {
        console.log("ODD numbers:",num)
    }
})

//filter
let newfil=arr.filter((val,i) => val%2===0 )
console .log('Even numbers:',newfil);

//find
let newfin=arr.find((sum,i)=> sum%2===0 )
console.log('Even is:',newfin);

//map
let newmap=arr.map((ar,i)=>Math.pow(ar,i))
console.log("Maping values are:",newmap)

let newmapin=arr.map((ary,i)=> ary+=i)
console.log("Maping values are:",newmapin)

//reduce and some and every
let newredu=arr.reduce((toltal,arval,i)=>toltal+arval)
console.log(newredu)

//some
let newsome=arr.some((artot,i)=>artot>5)
console.log(newsome)

let changecaps=(sentencename)=>
{
let  newvar=sentencename.split(" ").map(text=>text.charAt(0).toUpperCase()+text.slice(1)).join(' ')
return newvar;
}
let sentencename='hellow world'
const makesentence=changecaps(sentencename)
console.log(makesentence)

let variable=[2,4,6,18,20,8,4,13,15]
let pushele=[];
let newnum=variable.filter((elem,i)=>elem % Math.min.apply(null,variable)===0)
console.log(newnum)
pushele.push(newnum)
let sortofresult=pushele.map((ass,i)=>ass.sort((ass,i)=>(ass-i)))
console.log(sortofresult)

let arrvar=['arrow','parrot','well','something','letter','soft'];
let newarr=arrvar.filter(valof=>{
    return valof.split('').some((value,index,array)=>array.indexOf(value)!==index);
})
console.log(newarr)


let gratestvalue=(numb=>{
    return Math.max.apply(null,numb);
})
let numb=[22,31,43,52,89,95]
let summ=gratestvalue(numb)
console.log(summ)

let metertocm=(meter=>{
    return meter*100;
})
let cmval=metertocm(5.2)
console.log(cmval);

let negativenum=((negat,i)=>
{
    if(negat<=0)
    {
        return 'Negative';
    }
    return 'Not Negative';
})
let negativeval=negativenum([-8])
console.log(negativeval)

let sumof=[5,2,6]
let newsumval=sumof.reduce((vall,i)=>vall+=i)
console.log(newsumval)

//add sales tax
let price=[5,10,25,35,50,150]
let newtaxrate=price.map(priceof=>{
    let taxrate=0;
    if(priceof>=60 && priceof<=500){
        taxrate=0.60;
    }else if(priceof>=40 && priceof<60){
        taxrate=0.30;
    }else if(priceof>=0 && priceof< 40){
        taxrate=0.10;
    }
    return priceof+(priceof*taxrate)
    
})
console.log(newtaxrate)

//find the first match
let stringvar=['apple','mango','pappaya','apple'];
let newmatching=stringvar.find(matchword=>{
    let givenstr='apple'
    if(matchword.includes(givenstr)){
        return matchword;
    }
})
console.log(newmatching)

//find odd nums and print only prime nums of max
let numare=[1,2,3,4,5,6,7,8,9,10]

let oddofnumare=numare.filter(oddval=>oddval%2!==0)
console.log(oddofnumare)

let primeis=(numare)=>{
    if(numare<2){
        return false;
    }
    for(i=2;i<=Math.sqrt(numare);i++)
    {
        if(numare%i===0)
            return false;
    }return true;
}
 const primenumbers=oddofnumare.filter(primeis)
 console.log(primenumbers)

 let maxprime=Math.max.apply(primenumbers)
 
 for(i=0;i<primenumbers.length;i++)
 {
    if(primenumbers[i]>maxprime){
        maxprime=primenumbers[i]
    }
 }
console.log(maxprime)

//move zero to the end

let movezeroatend=(movearr)=>{
    let insert=0;
    for(i=0;i<movearr.length;i++){
        if(movearr[i]!==0){
            let temparr=movearr[i]
            movearr[i]=movearr[insert]
            movearr[insert]=temparr;
            insert++;

        }
    }return movearr;
}
let zeroatend=movezeroatend([1,0,4,0,5,0,2,0,9,0,])
console.log(zeroatend)


let disariumnum=(numtofind)=>{
    let sumof=String(numtofind);
    let disnum=0;
    for(i=0;i<sumof.length;i++){
        disnum+=Math.pow(parseInt(sumof[i]),i+1);
    }
    return disnum===numtofind?"disarium":"Not disarium";
}
let  numtofind=175;
let disariumnumis=disariumnum(numtofind);
console.log(disariumnumis);
    
let hypoteneousat=(a,b)=>{
    return Math.sqrt(a*a+b*b);
}
let hypoteneousvalue=hypoteneousat(3,4)
console.log(hypoteneousvalue)

let raiseofpow=(raise,exponent)=>
{
    return Math.pow(raise,exponent);
}
let raiseofvalue=raiseofpow(2,3);
console.log(raiseofvalue);


let sortedarr=(sortval)=>{
    for(i=0;i<=sortval.length-1;i++)
    {
        if(sortval[i]>sortval[i+1]){
            return 'Not Sorted';
        }
    }
    return 'Sorted';
}
let sortval=[1,2,3,4,5,6];
let issorted=sortedarr(sortval)
console.log(issorted)


let wordis=['hellow world'];
let wordhasspace=wordis.map(word=>{
    if(word.includes(' ')){
        return 'Space';
    }
return 'No Space'
})
console.log(wordhasspace);


let rangeval=[1]
let rangeofnum=rangeval.map(numof=>{
    if(numof>=1 && numof<=10){
        return 'Yes';
    }
    return 'No';
})
console.log(`The ${rangeval} is within the range of 1 and 10, ${rangeofnum}`);


let addelementof=(arradd)=>{
    return arradd[0]+arradd[arradd.length-1];
}
let arradd=[20,30,40,50];
let addfirstandlast=addelementof(arradd)
console.log(addfirstandlast)

let moveelemlast=(movenum)=>{
    let adds=0;
    for(i=0;i<movenum.length;i++)
    {
        if(movenum[i]!==0){
            let setnum=movenum[i]
            movenum[i]=movenum[adds]
            movenum[adds]=setnum;
            adds++;
        }
    }return movenum;
}
let zerotolast=moveelemlast([1,0,0,7,0,5,0,4])
console.log(zerotolast)

//array of objects
let person1={
    name:"Menmathi",
    email:"menmathi@gmail.com",
    age:24
}
console.log(person1.name)
console.log(person1.email)
console.log(person1.age)

let persons=[{
    name:"Menmathi",
    email:"menmathi@gmail.com",
    age:24
},
{
    name:"Suriya",
    email:"suriya@gmail.com",
    age:25
},
{
    name:"Vishvak",
    email:"vishvak@gmail.com",
    age:23
}
]
console.log(persons[2].name)

persons.forEach(pers=>{
    console.log(pers.name);
    console.log(pers.email);
    console.log(pers.age);
})


let arrva=[1,23,34,42,20,43]
let nums=43;
let showofindex=(valis,numis)=>{
    let firstindex=-1;
    let lastindex=-1;
    for(i=0;i<valis.length;i++){
        if(valis[i]===numis){
            if(-1===firstindex){
        firstindex=valis[0];
        valis[0]=i;
            }
        lastindex=i;
        }
    }
    return [firstindex,lastindex];
}
let indexis=showofindex(arrva,nums);
console.log(indexis)


// regex:regular expretions
const nameis=/^[A-Z]\w*$/
const usernameis="Preethi";
if(nameis.test(usernameis)){
    console.log(true);
}else{
    console.log(false)
}

const emailis=/^[a-zA-Z0-9]*@gmail\.com$/
const useremailis="preethi@gmail.com"
if(emailis.test(useremailis)){
    console.log(true)
}else{
    console.log(false)
}

const phonnum=/^[6-9]\d{9}$/
const usersnum='9080470337'
if(phonnum.test(usersnum)){
    console.log(true)
}else{
    console.log(false)
}

const password=/[^A-Z]*\w$/
const userpasswd='Preethi'
if(password.test(userpasswd)){
    console.log(true)
}else{
    console.log(false)
}


let  arr1=[1,2,4,2,3,6];
let arr2=[8,9,6,7,5];
let mer=[];
let mergeof=(val1,val2)=>{
mer=val1.concat(val2)
return mer.sort((val1,val2)=>val1-val2);
}
let sorting=mergeof(arr1,arr2);
console.log(sorting)

let arrof=[1,23,12,11,23,23];
let maxval=Math.max.apply(null,arrof)
let newtalcandle=arrof.filter(height=>height===maxval)
console.log(newtalcandle.length)

let sumofval=[1,2,3,4,5];
let newat=sumofval.reduce((summs,i)=>summs+=i)
console.log(newat)


let repeatval=[1,1,1];
let identalornot=(reval)=>{
    for(i=1;i<reval.length;i++){
        if(reval[i]!==reval[0]){
            return 'not identical';
        }
    }
     return ' identical';
}
let ifitis=identalornot(repeatval)
console.log(ifitis)

let arare=[1,12,13,15]
let larg=[];
let secondlarg=(sec1,sec2)=>{
 larg=arare.sort((sec1,sec2)=>sec2-sec1);
 return larg[1]
}
let seclarger=secondlarg(arare)
console.log(seclarger)

let elemofarr=[3,2,3,2,3,2,2];
let valgreaterof=elemofarr.length/2;
let findmajarity=(elemare)=>{
 let counts={};
    for(i=0;i<=elemare.length-1;i++){
        let valnum=elemare[i];
        counts[valnum]=(counts[valnum] || 0)+1;
        if(counts[valnum] > valgreaterof){
            return valnum;
        }
    }
    return 'No Majority displayed';
    
}
let majorityof=findmajarity(elemofarr)
console.log(majorityof)


let arrayis=[2,2,3,3,4,4,8];
let newatnorepeating=arrayis.find((numiss,i,arrayy)=>{
return arrayy.indexOf(numiss) === arrayy.lastIndexOf(numiss)
})
if(newatnorepeating===undefined){
    return '-1';
}
console.log(newatnorepeating)

let calarr=[1,2,3,4,5,1];
let falcurum=(calarris)=>{
    let totasum=calarris.reduce((valoff,calar)=>valoff+calar,0);
    let leftsum=0;
    for(i=0;i<=calarris.length-1;i++){
        let currval=calarris[i];
        let rightsum=totasum-leftsum-currval;
        if(leftsum===rightsum){
            return currval;
        }
        leftsum+=currval;
    }
    return '-1';
}
let falcurumis=falcurum(calarr);
console.log(falcurumis,'is Falcrum.')

let array1=[1,2,3,4];
let array2=[3,4,5,6];
let symmitric=(ar1,ar2)=>{
let dif1=ar1.filter(item=>!ar2.includes(item))
let dif2=ar2.filter(items=>!ar1.includes(items))
return[...dif1,...dif2];
}
let symetricdiff=symmitric(array1,array2);
console.log(symetricdiff);

let numoffruits=[1,2,3,4,5];
let newatsumoffruits=numoffruits.reduce((fruits,i)=>fruits+=i)
console.log(newatsumoffruits);


let ars1=[1,2,3,4,5]
let ars2=[1,2,3,4,5]
let concatof=(aa1,aa2)=>{
    return aa1.concat(aa2)
}
let coancatis=concatof(ars1,ars2);
console.log(coancatis)

let absar=[4,5,6,8];
let abspair=(pairs)=>{
    let totalsum=0;
    for(i=0;i<=pairs.length-1;i++){
        for(j=i+1;j<=pairs.length-1;j++){
            totalsum+=Math.abs(pairs[i]-pairs[j])
        }

    }
    return totalsum;
    
}
let absvalue=abspair(absar);
console.log(absvalue)


