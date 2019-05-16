import * as pages from '../pages';

export default (state) => {

    return `
    ${pages[state.pageContent](state)}
`
    ;
};


