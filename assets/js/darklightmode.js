function darkmode() {
  var elements = [
    { selector: "body", styles: { backgroundColor: "black" } },
    { selector: ".navbar", styles: { backgroundColor: "black" } },
    { selector: "#cart-icon", styles: { color: "white" } },
    { selector: ".navbar-toggler", styles: { backgroundColor: "white" } },
    { selector: ".offcanvas", styles: { backgroundColor: "black" } },
    { selector: ".nav-link", styles: { backgroundColor: "black", color: "white" } },
    { selector: ".specialise-heading", styles: { color: "white" } },
    { selector: ".order-procedure-heading", styles: { color: "white" } },
    { selector: ".orderdesc", styles: { color: "white" } },
    { selector: ".latest-projects-heading", styles: { color: "white" } },
    { selector: ".ct-heading", styles: { color: "white" } },
    { selector: ".username", styles: { color: "white" } },
    { selector: "#user-review", styles: { color: "white" } },
    { selector: ".footer-body", styles: { backgroundColor: "black" } },
    { selector: ".footer-desc", styles: { color: "white" } },
    { selector: ".useful-heading", styles: { color: "white" } },
    { selector: ".timing-heading", styles: { color: "white" } },
    { selector: ".carousel-control-next", styles: { backgroundColor: "grey" } },
    { selector: ".carousel-control-prev", styles: { backgroundColor: "grey" } },
    { selector: "#darkmode-btn", styles: { visibility: "hidden" } },
    { selector: "#lightmode-btn", styles: { visibility: "visible" } },
    { selector: ".feature-card", styles: { backgroundColor: "black", color: "white", boxShadow: "" } },
    { selector: ".specialise-card", styles: { backgroundColor: "black", color: "white" } },
    { selector: ".abtus-content", styles: { backgroundColor: "black", color: "white" } },
    { selector: ".vd-btn", styles: { backgroundColor: "black", color: "white" } },
    { selector: "#atc-btn", styles: { backgroundColor: "black", color: "white" } },
    { selector: "table tbody", styles: { backgroundColor: "black", color: "white" } },
    { selector: "table>:not(caption)>*>*", styles: { backgroundColor: "black", color: "white" } },
    { selector: "#darkmode-btn", styles: { visibility: "hidden" } },
    { selector: "#lightmode-btn", styles: { visibility: "visible" } },
  ];

  document.body.classList.add('dark-mode');
  localStorage.setItem('theme', 'dark');

  elements.forEach((element) => {
    var nodes = document.querySelectorAll(element.selector);
    nodes.forEach((node) => {
      Object.assign(node.style, element.styles);
      node.style.setProperty('background-color', element.styles.backgroundColor, 'important');
      node.style.setProperty('color', element.styles.color, 'important');
    });
  });
}

function lightmode() {
  var elements = [
    { selector: "body", styles: { backgroundColor: "white" } },
    { selector: ".navbar", styles: { backgroundColor: "white" } },
    { selector: "#cart-icon", styles: { color: "black" } },
    { selector: ".navbar-toggler", styles: { backgroundColor: "white" } },
    { selector: ".offcanvas", styles: { backgroundColor: "white" } },
    { selector: ".nav-link", styles: { backgroundColor: "white", color: "black" } },
    { selector: ".specialise-heading", styles: { color: "black" } },
    { selector: ".order-procedure-heading", styles: { color: "black" } },
    { selector: ".orderdesc", styles: { color: "black" } },
    { selector: ".latest-projects-heading", styles: { color: "black" } },
    { selector: ".ct-heading", styles: { color: "black" } },
    { selector: ".username", styles: { color: "black" } },
    { selector: "#user-review", styles: { color: "black" } },
    { selector: ".footer-body", styles: { backgroundColor: "white" } },
    { selector: ".footer-desc", styles: { color: "black" } },
    { selector: ".useful-heading", styles: { color: "black" } },
    { selector: ".timing-heading", styles: { color: "black" } },
    { selector: ".table", styles: { backgroundColor: "white" } },
    { selector: ".carousel-control-next", styles: { backgroundColor: "white" } },
    { selector: ".carousel-control-prev", styles: { backgroundColor: "white" } },
    { selector: "#lightmode-btn", styles: { visibility: "hidden" } },
    { selector: "#darkmode-btn", styles: { visibility: "visible" } },
    { selector: ".feature-card", styles: { backgroundColor: "white", color: "black" } },
    { selector: ".specialise-card", styles: { backgroundColor: "white", color: "black" } },
    { selector: ".abtus-content", styles: { backgroundColor:"transparent", color: "white" } },
    { selector: ".vd-btn", styles: { backgroundColor: "white", color: "red" } },
    { selector: "#atc-btn", styles: { backgroundColor: "white", color: "red" } },
    { selector: ".table", styles: { backgroundColor: "white", color: "black" } },
    { selector: "table>:not(caption)>*>*", styles: { backgroundColor: "white", color: "black" } },
    { selector: "#darkmode-btn", styles: { visibility: "visible" } },
    { selector: "#lightmode-btn", styles: { visibility: "hidden" } },
  ];

  document.body.classList.remove('dark-mode');
  localStorage.setItem('theme', 'light');

  elements.forEach((element) => {
    var nodes = document.querySelectorAll(element.selector);
    nodes.forEach((node) => {
      Object.assign(node.style, element.styles);
    });
  });
}

window.onload = function() {
  var theme = localStorage.getItem('theme');
  if (theme === 'dark') {
    darkmode();
  } else if (theme === 'light') {
    lightmode();
  } else {
    // Default to light mode if no theme is set
    lightmode();
  }

  // Set button visibility based on the current theme
  document.getElementById(theme === 'dark' ? 'darkmode-btn' : 'lightmode-btn').style.visibility = 'hidden';
  document.getElementById(theme === 'dark' ? 'lightmode-btn' : 'darkmode-btn').style.visibility = 'visible';
};
