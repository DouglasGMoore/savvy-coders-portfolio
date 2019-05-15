function buildNavHTML(stateLinks){
    let linksHTML = '';

    stateLinks.forEach((link) => {
        linksHTML += `<li><a href ="">${link}</a></li>`;
    });

    return linksHTML;
}

export default (state) => `
<div class="container">
  <div class="header">

  <nav>
  <ul>
   <li class="portfolio"><a href="portfolio.html">${state.links[3]}</a>
       <ul id="dropdown">
           <li><a href="portfolio.html">${state.links[3]}</a></li>
           <li><a href="portfolio.html">${state.links[3]}</a></li>
           <li><a href="DemoDay.html"></a></li>
           <li><a href="DemoDay.html">Web Store</a></li>
           <li><a href="DemoDay.html">Demo Day Project</a></li>
       </ul>
   </li>
   ${buildNavHTML(state.links)}
  </ul>
  </nav>
  </div>
`;

