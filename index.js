let notify_btn = document.getElementById("notify_btn");
notify_btn.addEventListener("click", () => {
  let phoneNumber = "7440569391";
  var message = encodeURIComponent(
    "Hello, I would like to be notified when the website is ready."
  );
  window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
});
