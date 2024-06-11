function main_conditional() {
    if (LJS_get("view_conditional/use")==false){return null};
    let titleSkills=switchTextReact("h2",LJS_get("view_conditional/tit0"),LJS_get("view_conditional/tit1"));
    let markdown=switchMarkdown("view_conditional/conditional0.md","view_conditional/conditional1.md");
    return (
        React.createElement('div', null,
	  br,
	  br,
	  titleSkills,
	  markdown,
	  br,
	  br,
        )
    );
}


