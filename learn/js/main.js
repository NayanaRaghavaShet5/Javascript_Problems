
const search = document.getElementById("search");
const data = document.getElementById("match-list");

searchData = async (searchTxt) => {
   const res = await fetch('../data/states.json'); 
   const results = await res.json();
  let matches = results.filter((res) => {
      return res.name !== searchTxt || res.abbr !== searchTxt
  });
  if(searchTxt.length === 0){
    let matches = [];
  }
  outputHtml();
  console.log('results', JSON.stringify(matches));
}

const outputHtml = matches => {
if(matches.length > 0){
    const html = matches.map(match => 
    <div class = "card card-body mb-1">
        <h4></h4>
         </div>)
}
}

search.addEventListener('input', () => searchData(search.value));