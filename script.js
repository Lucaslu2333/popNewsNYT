$(document).ready(function(){
    console.log("loaded");
    app.initialize();
})

var app = {
    nyturl: "https://api.nytimes.com/svc/mostpopular/v2/viewed/",
    key: ".json?api-key=JoifMfxGlsWgNU3OPA2ZHHiYWo9TwDMx",

    initialize() {
        $("#search").click(function() {
            console.log("clicked");
            app.searchPopNews();
        })
    },

    searchPopNews() {
        let time = $("#select option:selected").val();
        $.ajax ({
            url: this.nyturl + time + this.key,
            type: 'GET',
            dataType: 'json',
            error: function(data) {
                console.log(this.nyturl + this.time + this.key)
                console.log("Oops!");
                console.log(data.status);
            },
            success: function(data) {
                console.log(data.results[0].title);
                app.presentNews(data);
            }
        });
    },

    presentNews(data) {
        $("#p1t").html(data.results[0].title);
        $("#p1a").html(data.results[0].abstract);
        $("#p1h").attr("href",data.results[0].url);
        $("#p1h").html("Read this")


        $("#p2t").html(data.results[1].title);
        $("#p2a").html(data.results[1].abstract)
        $("#p2h").attr("href",data.results[1].url);
        $("#p2h").html("Read this")

        $("#p3t").html(data.results[2].title);
        $("#p3a").html(data.results[2].abstract)
        $("#p3h").attr("href",data.results[2].url);
        $("#p3h").html("Read this")
    }
}