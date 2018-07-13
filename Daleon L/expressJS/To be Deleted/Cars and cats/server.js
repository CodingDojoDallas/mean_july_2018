var express = require("express");
var app = express();

app.get('/', function (request, response) {
    response.send("<h1 style='text-align:center;font-size:200px';>Hello there,<br> Strange World</h1>");
    app.use(express.static(__dirname + "/static"));
    app.set('views', __dirname + '/views');
    app.set('view engine', 'ejs');
    app.get("/users", function (request, response) {
        // hard-coded user data
        var users_array = [{
            name: "Michael",
            email: "michael@codingdojo.com"
        },
        {
            name: "Jay",
            email: "jay@codingdojo.com"
        },
        {
            name: "Brendan",
            email: "brendan@codingdojo.com"
        },
        {
            name: "Andrew",
            email: "andrew@codingdojo.com"
        }
        ];
        response.render('users', {
            users: users_array
        });
    })
});

app.listen(8282, function () {
    console.log("Congrats \nYou are now listening \ninto port 8282");
});

//One of the prices of giving people free of choice, is that, sometimes, they would make the wrong choice.