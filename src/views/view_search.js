//console.log("ad view v404");

function view_search() {

    // title and make input
    let input=getDataPaginator();
    let tags2find=["projects","pubs","blog"];
    let keyPage="s";
     
    setTitle("search "+input[0]);

    // make titleWidget
    let titleW=switchTextReact("span",LJS_get("view_main/search0")+" "+input[0]+" ",LJS_get("view_main/search1")+" "+input[0]+" ");
    let iconTitle=React.createElement("span",{className:LJS_get("skills/"+input[0]+"/icon"),style:{paddingLeft:"18px"}});
    let arrayContentSKill=[];
    
    if (input[0]!="" && LJS_exists("skills/"+input[0])){
      arrayContentSKill.push(switchTextReact("p",LJS_get("skills/"+input[0]+"/skill0.md"),LJS_get("skills/"+input[0]+"/skill1.md")));
      let links=LJS_get("skills/"+input[0]+"/links");let linksArray=[];
      for (let i=0;i<links.length;i++){ linksArray.push(buttonReact(links[i]))};
      arrayContentSKill.push(React.createElement("div",null,linksArray));
    };
    let titleWidget=React.createElement("div",null,React.createElement("h1",null,titleW,iconTitle,),arrayContentSKill,hr);

    // make content
    let content=SortInfo(tags2find,input[0]);
    let max=content.length;
    let counter=input[1];
    // fix counter
    if (counter<1) {counter=1} else if (counter>max) {counter=max};
    
    let bodyExplorer=React.createElement("div",null,switchTextReact("h1",LJS_get("view_main/search2"),LJS_get("view_main/search3")),br, mainButton_allTags());

    console.log(content);
    if (content.length>=1){
      bodyExplorer=navigation_grid(content[counter-1]);
    };

    let contentPage=React.createElement("div",{id:"contentDiv",className:"col-12",style:{minHeight:"50vh"}},
          br,
          br,
          titleWidget,
          br,
          bodyExplorer,
          br,
          navigation_paginator(max,counter,keyPage,input[0]),
    );

    return (
        React.createElement('div', null,
	  widgetHeader(),
	  contentPage,
	   widgetFooter(),
        )
    );
};

//-------------------------------------------------------------------------

LJS_setMainFuncs("s",()=>{
  ReactDOM.render(React.createElement(view_search), document.getElementById('root'));
});

