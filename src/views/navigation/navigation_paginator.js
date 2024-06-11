// create widget paginator
//
function navigation_paginator(total,currentNum,key1="k1",key2="k2"){
  //-------------------------------
  if (currentNum<1){currentNum=1};
  if (currentNum>total){currentNum=total};
  let input=[];
  let range=3;    //<----------- range to paginator
  let min=currentNum-range;
  let counter=1;
  if (min>1){
    counter=min;
    input.push(["<",1]);
  };
  let maxIteration=counter+2*range;
  for (counter;counter<maxIteration;counter++){
    if (counter<=total){
    input.push([counter,counter]);};
  };
  if (counter<total+1){
    input.push([">",total]);
  };
  if (total<2){input=[];};
  //-------------------------------
  let array=[];
  for (let i=0;i<input.length;i++){
    let current=input[i];
    let link=LJS_makeUrl(key1,key2+"/"+current[1]);
    let nameClass="page-item";
    let styleB={}; // color:principalBlue,backgroundColor:"white"};
    if (current[1]==currentNum){
      nameClass="page-item active";
      styleB={
        backgroundColor:principalBlue,
	borderColor:principalBlue,
	color:"white",
      };
    };
    array.push(React.createElement("li",{className:nameClass},
      React.createElement("a",{className:"page-link",href:link,style:styleB},current[0])
    ));
  };
  //-------------------------------
  return React.createElement("div",{className:"row"},
    React.createElement("div",{className:"col"},
      React.createElement("ul",{className:"pagination pagination-sm justify-content-center"},array),
    )
  );
  //-------------------------------
};


function getDataPaginator(){
  let dataArray=LJS_formatPath(LJS_getUrlParams()[1]);
  if (dataArray.length==1){
    if (!isNaN(Number(dataArray[0]))){
      let key1="";
      let num1=Number(dataArray[0]);
      num1=Math.trunc(num1);
      console.log(key1,num1)
      return [key1,num1];
    }
  };
  let key="";let num=1;
  if (dataArray.length>=1){key=dataArray[0]};
  try {
    if (!isNaN(Number(dataArray[1]))) {num=Number(dataArray[1])};
  } catch{};
  num=Math.trunc(num);
  return [key,num];
};
