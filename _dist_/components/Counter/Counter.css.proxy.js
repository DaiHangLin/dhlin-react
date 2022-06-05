// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = ".Counter-container {\r\n    display: flex;\r\n    flex-direction: row;\r\n    width: 500px;\r\n    height: 200px;\r\n    background-color: aliceblue;\r\n    justify-content: space-around;\r\n    align-self: center;\r\n    align-items: center;\r\n}\r\n\r\n.counter-btn {\r\n    min-width: 100px;\r\n    height: 40px;\r\n    background-color: darksalmon;\r\n    text-align: center;\r\n    font-size: 20px;\r\n    line-height: 40px;\r\n}\r\n.counter-btn:hover {\r\n    background-color: indianred;\r\n    cursor: pointer;\r\n} ";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}