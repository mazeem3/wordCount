$("document").ready(function timeToRead() {
    var text = $("body").text();

    var word_arr = text.split(" ");

    var word_count = word_arr.length;

    var wpm = 230;

    var read_time = (word_count / wpm);
    var time = Math.round(read_time);
    var message = ("Approximately " + time + " minutes to read.");

    $(".time-to-read-view").append("<p>" + message + "</p>");


});
