function buildIconHTML(link){
if(link.icon){
    return `<span class="${link.icon}"></span>`;
} else

return '';

};

function buildNavHTML(stateLinks){
    let linksHTML = '';

    stateLinks.forEach((link) => {
    linksHTML += `<li><a href ="">${buildIconHTML(link)}${link.text}</a></li>`;
    });


    return linksHTML;
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
