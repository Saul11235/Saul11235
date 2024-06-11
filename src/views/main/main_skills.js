function main_skills() {
    let titleSkills=switchTextReact("h2",LJS_get("view_main/skills0"),LJS_get("view_main/skills1"));
    let skills=get_info_main_skills();
    let widgets=[];
    for (let i=0;i<skills.length;i++){
      widgets.push(make_widget_main_skills(skills[i]));
    }
    let row_widget_skills=React.createElement("div",{className:"row"},widgets);
    return (
        React.createElement('div', null,
	  br,
	  br,
	  titleSkills,
	  row_widget_skills,
	  br5,
	  mainButton_skills(),
	  br,
	  br,
        )
    );
};

//------------------------------------------------------------


function get_info_main_skills() {
  let rawData=LJS_getSort("skills");
  let visibleSkills=[];
  for (let i=0;i<rawData.length;i++){
    let skill=rawData[i];
    if (LJS_get(skill+"/hidden")===false ) {
      visibleSkills.push(skill);
    };
  };
  return visibleSkills;
};


//-----------------------------------------------------------------
function make_widget_main_skills(path) {
  let styleCard={
    marginLeft:"-4px",
    marginTop:"12px",
    padding:"20px",
    height:"130px",
    textDecoration:"none",
    overflow:"hidden",
    "text-overflow":"ellipsis",
  };
  //......
  let link=LJS_makeUrl("s",LJS_formatPath(path)[1]);
  let card=React.createElement("a",{className:"card bg-white bg-gradient text-black",style:styleCard,href:link},
    React.createElement("h5",null,
      React.createElement("i",{className:LJS_get(path+"/icon"),style:{"margin":"6px"}}),
      React.createElement("span",{style:{"margin":"6px"}},
         switchTextReact("span",LJS_get(path+"/tit0"),LJS_get(path+"/tit1")),
      ),
    ),
    React.createElement("p",{style:{"font-size":"0.85rem"}},
      switchTextReact("span",LJS_get(path+"/skill0.md"),LJS_get(path+"/skill1.md")),
    ),
  );
  //......
  let column=React.createElement("div",{className:"col-sm-6 col-md-4 col-lg-3"},card);

  return column;
};

