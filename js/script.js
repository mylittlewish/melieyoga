(function() {
  const infos = {};

  window.addEventListener("load", () => {
    infos["Info1"] = document.getElementById("Info1");
    infos["Info2"] = document.getElementById("Info2");
    infos["Info3"] = document.getElementById("Info3");
  });

  window.toggleInfo = id => {
    Object.values(infos).forEach(info => {
      if (info.id !== id) info.classList.remove("visible");
    });
    infos[id].classList.toggle("visible");
  };
})();
