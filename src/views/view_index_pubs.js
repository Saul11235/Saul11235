
function view_index_pubs() {
    // title and make input
    let input=getDataPaginator();
    let tags2find=["pubs"];
    let keyPage="pub";
     
    setTitle("publications");

    // make titleWidget
    let titleWidget=switchTextReact("h1",LJS_get("view_main/pubs0"),LJS_get("view_main/pubs1"));

    // make content
    let content=SortInfo(tags2find,"");
    let max=content.length;
    let counter=input[1];
    // fix counter
    if (counter<1) {counter=1} else if (counter>max) {counter=max};
    
    let bodyExplorer=React.createElement("div",null,switchTextReact("h1",LJS_get("view_main/search2"),LJS_get("view_main/search3")),br, mainButton_allTags());

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

LJS_setMainFuncs("pub",()=>{
  ReactDOM.render(React.createElement(view_index_pubs), document.getElementById('root'));
});

