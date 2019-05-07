import Navigation from './components/Navigation';
import Animation from './components/Animation';
import Main from './components/Main';
import Footer from './components/Footer';

const state = {};

state.welcome = 'Welcome';
state.title = 'My Portfolio';
console.log(state);


document.querySelector('#root').innerHTML =
`
${Navigation(state)}
${Main(state)}
${Animation(state)}
${Footer(state)}
`;


