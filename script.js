const URL = "https://jsonplaceholder.typicode.com/users";
fetch(URL)
  .then((res) => res.json())
  .then((res) => {
    console.log(res);
    const divElement = document.createElement("div");
    const x = res.map((data) => {
      return `<div>
      Name: ${data.name}<br>
      Email:${data.email}<br>
      Street:${data.address.street}<br>
      City:${data.address.city}
      </div>`;
    });
    divElement.innerHTML = x.join("");
    document.getElementById("dataContainer").appendChild(divElement);
  });
