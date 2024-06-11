// Definición del componente App

function buttonReact(array) {
    const buttonStyle = {
        paddingLeft: '12px',
        paddingRight: '12px',
        backgroundColor:principalBlue,
        borderColor: principalBlue,
        "box-shadow":"0 0 0",
    };
    return (
        React.createElement('a', {className:"btn btn-primary rounded-5",href:array[2],style:buttonStyle},
	    React.createElement("i", {className:array[3]}, ),
            switchTextReact("span",array[0],array[1])
        )
    );
}
