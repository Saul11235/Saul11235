function main_contact() {
    let titleContact=switchTextReact("h2",LJS_get("view_main/contact0"),LJS_get("view_main/contact1"));
    return (
        React.createElement('div', null,
	  br,
	  br,
	  titleContact,
	  br,
	  br,
        )
    );
}


