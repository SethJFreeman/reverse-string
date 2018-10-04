function reverseString(str) {

$("#output").val(str.split("").reverse().join(""));
}

$("#submit").on("click", function() {

reverseString($("input").val());
});
