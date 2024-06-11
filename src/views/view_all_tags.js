

function view_all_tags() {

  let allkeys=Object.keys(LJS_getTags(""));
  let widgetAllTags=footer_tags_clean(allkeys);

  //--------------------------------

    let contentPage=React.createElement("div",{id:"contentDiv",className:"col-12",style:{minHeight:"50vh"}},
          br,
          switchTextReact("h1",LJS_get("view_main/alltags0"),LJS_get("view_main/alltags1")),
          br,
          switchTextReact("p",LJS_get("view_main/alltags2"),LJS_get("view_main/alltags3")),
          br,
          widgetAllTags,
          br,
          switchTextReact("p",LJS_get("view_main/alltags4"),LJS_get("view_main/alltags5")),
          mainButton_allContent(),
          br,
	  br,
    );

  //--------------------------------


    return (
        React.createElement('div',null,
	  widgetHeader(),
	  contentPage,
	  widgetFooter(),
        )
    );
};


//-------------------------------------------------------------------------

LJS_setMainFuncs("ss",()=>{
  ReactDOM.render(React.createElement(view_all_tags), document.getElementById('root'));
});

