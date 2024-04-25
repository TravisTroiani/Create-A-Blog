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
        title.textContent = `Title: ${post.title}`;
        
        const author = document.createElement('p');
        author.textContent = `Posted By: ${post.username}`;
        
        const content = document.createElement('p');
        content.textContent = `Content: ${post.content}`;
        
        postDiv.appendChild(title);
        postDiv.appendChild(author);
        postDiv.appendChild(content);
        
        mainContent.appendChild(postDiv);
        function clearData() {
            localStorage.removeItem('posts');
            displayPosts(); 
        }
        
        const clearButton = document.getElementById('clearButton');
        clearButton.addEventListener('click', clearData);
    });
}
const clearButton = document.getElementById('clearButton');


displayPosts();
