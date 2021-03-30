// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = ".Counter-container {\n    display: flex;\n    flex-direction: row;\n    width: 500px;\n    height: 200px;\n    background-color: aliceblue;\n    justify-content: space-around;\n    align-self: center;\n    align-items: center;\n}\n\n.counter-btn {\n    min-width: 100px;\n    height: 40px;\n    background-color: darksalmon;\n    text-align: center;\n    font-size: 20px;\n    line-height: 40px;\n}\n.counter-btn:hover {\n    background-color: indianred;\n    cursor: pointer;\n} ";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}