$(()=>{
    const server = "http://localhost:3000";

    const xmenListEndpoint = server + "/xmen"; 

    const $xmenListDiv = $(".xmen-list");

    $.getJSON(xmenListEndpoint, function( data ) {
        data.forEach(xmen => {
            const xmenText = "Nombre: " + xmen.name + 
                            " initialHP: " + xmen.initialHP +
                            " initialATK: " + xmen.initialATK + 
                            " initialDEF: " + xmen.initialDEF;

            $("<div/>").text(xmenText).appendTo($xmenListDiv);
        }); 
        });


});