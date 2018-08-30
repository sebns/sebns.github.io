$("#btn-submit").click(function (event) {
  event.preventDefault();
  var myModal = new bootstrap.Modal(document.getElementById("modal-main"), {});
  myModal.show();
});
