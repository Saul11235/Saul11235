//console.log("ad view v404");

function view_404() {
    setTitle("Error 404");

  //--------------------------------

    let contentPage=React.createElement("div",{id:"contentDiv",className:"col-12",style:{minHeight:"50vh"}},
      	  br,
	  React.createElement("h1",null,404),
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

