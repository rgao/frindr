var path = require("path");

function domain(app) {

    app.get("/survey.html", function(request, response) {
        response.sendFile(path.join(__dirname, "../public/survey.html"));
    });

    app.get("/survey", function(request, response) {
        response.sendFile(path.join(__dirname, "../public/survey.html"));
    });

    app.get("/", function(request, response) {
        response.sendFile(path.join(__dirname, "../public/home.html"));
    });
}

module.exports = domain;