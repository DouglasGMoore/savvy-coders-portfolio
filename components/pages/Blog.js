function buildPostsHTML(posts){
    return posts.map((post) =>
        `<article>
    <h1>${post.title}</h1>
    <h2>${post.body}</h2>
    </article>`
    ).join('');
}
export default function(state){
    return `${buildPostsHTML(state.posts)}`;
}
