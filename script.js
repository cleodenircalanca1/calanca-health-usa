document.addEventListener("DOMContentLoaded", function () {
  const links = document.querySelectorAll(".affiliate-link");

  links.forEach(function (link) {
    link.addEventListener("click", function (event) {
      if (link.getAttribute("href") === "AFFILIATE_LINK_HERE") {
        event.preventDefault();
        alert("O link de afiliado ainda precisa ser inserido antes da publicação.");
      }
    });
  });
});
