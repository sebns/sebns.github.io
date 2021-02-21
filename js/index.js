$("#btn-submit").click(function (event) {
  var myModal = new bootstrap.Modal(document.getElementById("modal-main"), {});
  myModal.show();
  event.preventDefault();
});
