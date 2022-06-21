export function countryMarkup({name, flags, capital, population, languages}) {
  return `<div class="country-box">
       <img src="${flags.svg}" alt="flag ${name.official}" width="300px" />
        <h1>${name.official}</h1>
      </div>
      <p><span class="header">Capital:</span>${capital[0]}</p>
      <p><span class="header">Population:</span>${population}</p>
      <p><span class="header">Languages:</span>${Object.values(languages).join(', ')}</p>`
}