var friendData = require("../data/friends");

module.exports = function (app) {
    app.get("/api/friends", function (request, response) {
        response.json(friendData);
    });

    app.post("/api/friends", function (request, response) {
        friendData.push(request.body);

        var match = ["N/A", "N/A"];
        var worstScore = 40;

        for (var k = 0; k < friendData.length; k++) {
            var score = 0;

            if (friendData[k].photo !== request.body.photo) {

                for (var j = 0; j < friendData[k].answers.length; j++) {
                    score += Math.abs(request.body.answers[j] - friendData[k].answers[j]);
                };

                if (score < worstScore) {
                    match[0] = friendData[k].name;
                    match[1] = friendData[k].photo;
                };
            };
        };
        response.json((match));
    });
};

