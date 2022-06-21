export function countrysMarkup({name, flags}) {
  return `<li>
 <img src="${flags.svg}" alt="flag ${name.official}" width="40px" />
  <p>${name.official}</p>
</li>`} 
