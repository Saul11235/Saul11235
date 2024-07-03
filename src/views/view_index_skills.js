

function view_index_skills() {

  let list_input=LJS_getSort("skills");
  let widgets=[];

  for (let i=0;i<list_input.length;i++){widgets.push( make_widget_skills(list_input[i]) )};

  let row=React.createElement("div",{className:"row"},widgets)

  //--------------------------------

    let contentPage=React.createElement("div",{id:"contentDiv",className:"col-12",style:{minHeight:"50vh"}},
          br,
          switchTextReact("h1",LJS_get("view_main/skills0"),LJS_get("view_main/skills1")),
          row,
          br,
          mainButton_allTags(),
          br,
	  br,
    );

  //--------------------------------


    return (
        React.createElement('div', null,
	  widgetHeader(),
	  contentPage,
	  widgetFooter(),
        )
    );
};


//-----------------------------------------------------------------
function make_widget_skills(path) {
  let styleCard={
    marginLeft:"-4px",
    marginTop:"12px",
    padding:"20px",
    height:"200px",
    textDecoration:"none",
    overflow:"hidden",
    "text-overflow":"ellipsis",
  };
  //......
  let link=LJS_makeUrl("s",LJS_formatPath(path)[1]);
  let card=React.createElement("a",{className:"card bg-gradient estiloCard",style:styleCard,href:link},
    React.createElement("h5",null,
      React.createElement("i",{className:LJS_get(path+"/icon"),style:{"margin":"6px"}}),
      React.createElement("span",{style:{"margin":"6px"}},
         switchTextReact("span",LJS_get(path+"/tit0"),LJS_get(path+"/tit1")),
      ),
    ),
    React.createElement("p",{style:{"font-size":"0.85rem"}},
      switchTextReact("span",LJS_get(path+"/skill0.md"),LJS_get(path+"/skill1.md")),
    ),
    tag_div(path),
  );
  //......
  let column=React.createElement("div",{className:"col-sm-12 col-md-6 col-lg-4"},card);

  return column;
};



//-------------------------------------------------------------------------

LJS_setMainFuncs("skills",()=>{
  ReactDOM.render(React.createElement(view_index_skills), document.getElementById('root'));
});

