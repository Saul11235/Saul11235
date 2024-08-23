

function view_main() {

    setTitle("Edwin Saul","Edwin Saul");

  //--------------------------------
  //
    let contentPage=React.createElement("div",
      {id:"contentDiv",className:"col-12",style:{minHeight:"30vh"}},
	  main_about(),
  	  main_projects(),
          main_conditional(),
	  main_skills(),
	  main_blog(),
	  main_pubs(),
//	  main_game(),
	  main_contact(),
	  //main_apendix(),
	  //mainButton_404(),
	  br,
	  br2,
    );
  //--------------------------------
  //


    return (
        React.createElement('div',  null,
	  main_autowriter(),
	  contentPage,
          widgetFooter(),
        )
    );
};


//-------------------------------------------------------------------------

LJS_setMainFuncs("",()=>{
  ReactDOM.render(React.createElement(view_main), document.getElementById('root'));
});

