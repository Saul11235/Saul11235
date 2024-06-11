function main_blog() {

    let titleBlog=switchTextReact("h2",LJS_get("view_main/blog0"),LJS_get("view_main/blog1"));
    return (
        React.createElement('div', null,
	  br,
	  br,
	  titleBlog,
	  widgets_blog(),
	  br2,
	  mainButton_blog(),
	  br,
	  br,
        )
    );
}

//-------------------------------------
//
function widgets_blog() {
  let entries=getLastBlogEntries();
  let widgets=[]
  for (let i=0;i<entries.length;i++){
     widgets.push(createCardGrid(entries[i],"col-sm-6"));
  };
  return React.createElement("div",{className:"row"},widgets);
}
