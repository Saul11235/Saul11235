//console.log("ad view v404");

function view_404() {
    setTitle("Error 404","Error 404");

  //--------------------------------

    let contentPage=React.createElement("div",{id:"contentDiv",className:"col-12",style:{minHeight:"50vh","display":"flex","justify-content":"center","align-items":"center"}},
      	  br,
	  React.createElement("h1",{style:{"font-size":"5em"}},"404 Error"),
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

//-------------------------------------------------------------------------

LJS_setMainFuncs("v404",()=>{
  ReactDOM.render(React.createElement(view_404), document.getElementById('root'));
});

