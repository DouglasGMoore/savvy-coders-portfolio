import Navigation from './components/Navigation';
import Animation from './components/Animation';
import Main from './components/Main';
import Footer from './components/Footer';

document.querySelector('#root').innerHTML = 
`
${Navigation}
${Main}
${Animation}
${Footer}
`;