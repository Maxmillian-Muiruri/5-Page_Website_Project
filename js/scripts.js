document.addEventListener("DOMContentLoaded", function () {
  const button = document.getElementById("js-button");
  const output = document.getElementById("js-output");

  button.addEventListener("click", function () {
    let a = 5;
    let b = 10;

    let sum = a + b;
    let comparison = a == b;
    let logical = a < b && b > a;

    output.innerHTML = `Sum: ${sum}<br>Comparison (a == b): ${comparison}<br>Logical (a < b && b > a): ${logical}`;
  });
});
