$("#btn-submit").click(function (event) {
  //alert("Your form was submited");
  $("#flash-msg").text("Your form was submited").show("slow");
  event.preventDefault();
});
