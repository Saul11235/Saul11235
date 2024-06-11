// switch Text component for React - js
//
//console.log("switch react");

function switchTextReact(type="p",text1="",text2=undefined,options=null) {
  options={className:"switch-text"};

  if (text2 === undefined) {
    return (
      React.createElement(type,options,text1)
    );
  } else {
    return (
      React.createElement(type,options,text1,
	React.createElement("div",{style:{display:"none"}},text2)
      )
    );
  };
}

//----------------------------------

function switchTextButton(){
  return(
    React.createElement("button",{id:"switch-text-button"},"cambio")
  );
}

//----------------------------------

function switchMarkdown(path1,path2){
  let html1="";
  let html2="";
  try {
    html1=marked.parse(LJS_get(path1));
    html2=marked.parse(LJS_get(path2));
  } catch {
    console.log("error on read data")
  };
  let div1=React.createElement('div', {dangerouslySetInnerHTML: {__html: html1}});
  let div2=React.createElement('div', {dangerouslySetInnerHTML: {__html: html2}});
  return (
      React.createElement("div",{className:"switch-div"},div1,
	React.createElement("div",{style:{display:"none"}},div2)
      )
    );
}

