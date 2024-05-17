$(document).ready(function() {
    $("#nav_list a").click(function(event) {
        event.preventDefault();
        let speakerTitle = $(this).attr("title"); 
        let jsonFile = speakerTitle + ".json";
        jsonFile = "json_files/" + jsonFile; 

        $.getJSON(jsonFile, function(data) {
            let speaker = data.speakers[0]; 
            let newContent = `
                <h1>The Supreme Nine: Black Robed Secrets</h1>
                <img src="${speaker.image}" alt="${speaker.speaker}">
                <h2>${speaker.month}<br>${speaker.speaker}</h2>
                <p>${speaker.text}</p>
            `;

            $("main").empty().html(newContent);
        }).fail(function() {
            alert("Error loading speaker data.");
        });
    });
});
