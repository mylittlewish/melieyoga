(function() {
  const blk_infos = {};
  const nav_infos = {};

  window.addEventListener("load", () => {
    blk_infos["Info1"] = document.getElementById("Info1");
    blk_infos["Info2"] = document.getElementById("Info2");
    blk_infos["Info3"] = document.getElementById("Info3");
    nav_infos["Info1"] = document.getElementById("NavItem1");
    nav_infos["Info2"] = document.getElementById("NavItem2");
    nav_infos["Info3"] = document.getElementById("NavItem3");
  });

  window.toggleInfo = infoId => {
    Object.values(blk_infos).forEach(blk_info => {
      blk_info.classList.remove("visible");
    });
    Object.values(nav_infos).forEach(nav_info => {
      nav_info.classList.add("disabled");
    });
    blk_infos[infoId].classList.add("visible");
    nav_infos[infoId].classList.remove("disabled");
  };
})();
