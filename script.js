const URL = "https://jsonplaceholder.typicode.com/users";
fetch(URL)
  .then((res) => res.json())
  .then((res) => {
    console.log(res);

    const x = res.map((data) => {
      return `<div>
      <b>Name: ${data.name}</b><br>
      Email:${data.email}<br>
      Street:${data.address.street}<br>
      City:${data.address.city}
      </div>`;
    });

    document.getElementById("dataContainer").innerHTML = x.join("");
  });
