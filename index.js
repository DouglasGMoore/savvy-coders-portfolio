import Navigation from './components/Navigation';
import Animation from './components/Animation';
import Main from './components/Main';
import Footer from './components/Footer';


console.log('hello');
console.log(Navigation, Animation, Main, Footer);

document.body.innerHTML = `
${Navigation}
${Animation}
${Main}
${Footer}
`;
