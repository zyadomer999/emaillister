const allEmails = document.querySelector("#allEmails");

const emailContainer = document.createElement("div");
emailContainer.setAttribute("class", "emailContainer");

fetch("/server").then((response) => {
  response.text().then((e) => {
    data = JSON.parse(e);
    for (let a = 0; a < data.length; ++a) {
      if (data[a].created == "no") {
        emailContainer.innerHTML = `<div><h1>${data[a].email}</h1><h3 onclick='copy(this)'>Copy</h3></div><div><h1>${data[a].password}</h1><h3 onclick='copy(this)'>Copy</h3></div><div><h3 onclick=finish(this)>Finish</h3></div>`;
        let template = emailContainer.cloneNode(true);
        allEmails.insertAdjacentElement("beforeend", template);
      }
    }
  });
});

function copy(copyBtn) {
  copyBtn.style.backgroundColor = "rgb(233,47,47)";
  let email = copyBtn.previousElementSibling.textContent;
  let input = document.createElement("input");
  input.setAttribute("value", email);
  document.body.appendChild(input);
  input.select();
  document.execCommand("copy");
  document.body.removeChild(input);
}

function finish(finishBtn) {
  copyPasswordBtn =
    finishBtn.parentElement.previousElementSibling.children[1].style
      .backgroundColor;
  copyEmailBtn =
    finishBtn.parentElement.previousElementSibling
      .previousElementSibling.children[1].style.backgroundColor;
  if (
    copyPasswordBtn == "rgb(233, 47, 47)" &&
    copyEmailBtn == "rgb(233, 47, 47)"
  ) {
    finishBtn.textContent = "Created";
    finishBtn.style.backgroundColor = "#9019D1";
    fetch("/server", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email:
          finishBtn.parentElement.previousElementSibling
            .previousElementSibling.children[0].textContent,
        password:
          finishBtn.parentElement.previousElementSibling.children[0]
            .textContent,
        created: "yes",
      }),
    });
  }
}
