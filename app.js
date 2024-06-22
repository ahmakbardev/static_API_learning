let searchBtn = document.getElementById("search-btn");
let countryInp = document.getElementById("country-input");
let result = document.getElementById("result"); // Tambahkan baris ini

searchBtn.addEventListener("click", () => {
  let countryName = countryInp.value;
    let finalUrl = `https://restcountries.com/v3.1/name/${countryName}?fullText=true`;
//   let finalUrl = `https://restcountries.com/v3.1/name/Indonesia?fullText=true`;
  console.log(finalUrl);

  fetch(finalUrl)
    .then((response) => response.json())
    .then((data) => {
      console.log(data[0]);
      console.log(data[0].capital[0]);
      console.log(data[0].continents[0]);
      console.log(Object.keys(data[0].currencies)[0]);
      console.log(data[0].currencies[Object.keys(data[0].currencies)[0]].name);
      console.log(data[0].flags.svg);
      console.log(data[0].population);
      console.log(data[0].languages[Object.keys(data[0].languages)[0]]);
      result.innerHTML = `
        <img
          src="${data[0].flags.svg}"
          alt="Logo"
          class="my-5 flex mx-auto drop-shadow-md"
          style="height: 200px; display: block"
        />
        <div class="grid grid-cols-3">
          <h1 class="header col-span-2">Capital</h1>
          <p>: ${data[0].capital[0]}</p>
        </div>
        <div class="grid grid-cols-3">
          <h1 class="header col-span-2">Continent</h1>
          <p>: ${data[0].continents[0]}</p>
        </div>
        <div class="grid grid-cols-3">
          <h1 class="header col-span-2">Population</h1>
          <p>: ${data[0].population.toLocaleString()}</p>
        </div>
        <div class="grid grid-cols-3">
          <h1 class="header col-span-2">Currency</h1>
          <p>: ${
            data[0].currencies[Object.keys(data[0].currencies)[0]].name
          }</p>
        </div>
        <div class="grid grid-cols-3">
          <h1 class="header col-span-2">Currency Symbols</h1>
          <p>: ${
            data[0].currencies[Object.keys(data[0].currencies)[0]].symbol
          }</p>
        </div>
        <div class="grid grid-cols-3">
          <h1 class="header col-span-2">Common Languages</h1>
          <p>: ${data[0].languages[Object.keys(data[0].languages)[0]]}</p>
        </div>
      `;
    });
});
