document.getElementById('toggleMode').addEventListener('click', function () {
    document.body.classList.toggle('dark');
});

document.getElementById('blogForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const title = document.getElementById('title').value;
    const content = document.getElementById('content').value;

    const postData = { username, title, content };

    let posts = JSON.parse(localStorage.getItem('posts')) || [];
    posts.push(postData);
    localStorage.setItem('posts', JSON.stringify(posts));

    window.location.href = `index.2.html`; });