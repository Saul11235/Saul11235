// create tag cloud for tags

function tag_div(path) {
  let links=LJS_get(path+"/links");
  if (links===undefined){return null;};
  if (links.length==0){return null;};
  let subButtons=[];
  let max=links.length;
  for (let i=0;i<max;i++){
    subButtons.push(buttonReact(links[i]));
  };
  let tagDiv= React.createElement("div",null,subButtons);
  return tagDiv;
}


function tag_link(path) {
  let links=LJS_get(path);
  if (links===undefined){return null;};
  if (links.length==0){return null;};
  let subButtons=[];
  let max=links.length;
  for (let i=0;i<max;i++){
    subButtons.push(buttonReact(links[i]));
  };
  let tagDiv= React.createElement("div",null,subButtons);
  return tagDiv;
}
