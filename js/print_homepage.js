$(document).keypress(function (event) {
  console.log(event.key);
  if (event.key == "p") {
    window.print();
  }
});
