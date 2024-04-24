document.getElementById('toggleMode').addEventListener('click', function () {
    document.body.classList.toggle('dark');
});

function displayPosts() {
    const posts = JSON.parse(localStorage.getItem('posts')) || [];
    const mainContent = document.getElementById('mainContent');

    mainContent.innerHTML = '';

    posts.forEach(post => {
        const postDiv = document.createElement('div');
        postDiv.classList.add('post');

        const title = document.createElement('h2');
        title.textContent = post.title;

        const author = document.createElement('p');
        author.textContent = `By: ${post.username}`;

        const content = document.createElement('p');
        content.textContent = post.content;

        postDiv.appendChild(title);
        postDiv.appendChild(author);
        postDiv.appendChild(content);

        mainContent.appendChild(postDiv);
    });
}

displayPosts();