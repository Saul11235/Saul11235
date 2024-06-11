
//-------------------------------------------------------------

function footer_content(path){
  return React.createElement("div",null,
    footer_tags(LJS_get(path+"/__tags__")),
  );
};

//-------------------------------------------------------------

function footer_tags(tags){
  if (tags===undefined){tags=[]};
  let arraySkills=[];
  let arrayTags=[];
  for (let i=0;i<tags.length;i++){
    if (LJS_exists("skills/"+tags[i])){
      arraySkills.push(buttonReact([
	LJS_get("skills/"+tags[i]+"/tit0"),
	LJS_get("skills/"+tags[i]+"/tit1"),
	LJS_makeUrl("s",tags[i]),
	LJS_get("skills/"+tags[i]+"/icon"),
      ]));
    } else {
      let urltag=LJS_makeUrl("s",tags[i]);
      let styleTag={
        paddingLeft: '12px',
        paddingRight: '12px',
      };
      arrayTags.push(React.createElement("a",{className:"btn rounded-5 bg-white text-dark",href:urltag,style:styleTag},tags[i]));
    };
  };
  let tagsComponent= React.createElement("div",{className:"col "},arraySkills,arrayTags,);
  return React.createElement("div",null,
    hr,
    br,
    tagsComponent,
  );
};


//-------------------------------------------------------------

function footer_tags_clean(tags){
  if (tags===undefined){tags=[]};
  let arraySkills=[];
  let arrayTags=[];
  for (let i=0;i<tags.length;i++){
    if (LJS_exists("skills/"+tags[i])){
      arraySkills.push(buttonReact([
	LJS_get("skills/"+tags[i]+"/tit0"),
	LJS_get("skills/"+tags[i]+"/tit1"),
	LJS_makeUrl("s",tags[i]),
	LJS_get("skills/"+tags[i]+"/icon"),
      ]));
    } else {
      let urltag=LJS_makeUrl("s",tags[i]);
      let styleTag={
        paddingLeft: '12px',
        paddingRight: '12px',
      };
      arrayTags.push(React.createElement("a",{className:"btn rounded-5 bg-white text-dark",href:urltag,style:styleTag},tags[i]));
    };
  };
  let tagsComponent= React.createElement("div",{className:"col "},arraySkills,arrayTags,);
  return React.createElement("div",null,
    tagsComponent,
  );
};



