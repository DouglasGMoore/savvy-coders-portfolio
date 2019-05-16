import * as pages from '../pages';

export default (state) => {
    console.log('state pageContent is: ',state.pageContent);
    console.log('pages.stateContent is:', pages);

    return `
    ${pages[state.pageContent](state)}
`
    ;
};


