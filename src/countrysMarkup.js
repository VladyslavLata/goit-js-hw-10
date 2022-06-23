export function countrysMarkup({name, flags}) {
  return `<li class="item">
 <img class="countys-img" src="${flags.svg}" alt="flag ${name.official}" width="40px" />
  <p>${name.official}</p>
</li>`} 
