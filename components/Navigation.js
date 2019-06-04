function buildIconHTML(link){
    if(link.icon){
        return `<span class="${link.icon}"></span>`;
    }

    return '';
}

// function buildNavHTML(stateLinks){
//     let linksHTML = '';

//     stateLinks.map((link) => {
//         linksHTML += `<li><a href ="/${link.text.toLowerCase()}" data-navigo>${buildIconHTML(
//             link
//         )}${link.text}</a></li>`;
//     });

//     return linksHTML;
// }
function buildNavHTML(stateLinks){
    return stateLinks
        .map(
            (link) =>
                `<li><a href="/${link.text.toLowerCase()}" data-navigo>${buildIconHTML(
                    link
                )}${link.text}</a></li>`
        )
        .join(' ');
}


export default (state) => `
<div class="container">
  <div class="header">
  <nav>
  <ul>
   <li class="portfolio"><a href="portfolio.html">Portfolio</a>
       <ul id="dropdown">
       ${buildNavHTML(state.links.dropdown)}
       </ul>
   </li>
   ${buildNavHTML(state.links.primary)}
  </ul>
  </nav>
  </div>

`;
