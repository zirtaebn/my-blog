document.addEventListener('DOMContentLoad', () => {

    updatePosts();

})

function updatePosts() {

    fetch('http://localhost/all')
    .then( res => res.json() )
    .then( json => {

        console.log(json);

        let postElements = '';

        let posts = JSON.parse(json);
        posts.forEach(post => {

            let postElement = 
            `
            <div id = "${post.id}" class="card mb-4">
                <div class="card-header">
                    <h3 class="card-tile">${post.title}</h3>
                </div>

                <div class="card-body">
                    <div class="card-text">${post.description}</div>
                </div>
            </div>
            `

            postElements += postElement;
            
        });

        document.getElementById('posts').innerHTML = postElements;
    })

}

function newPost() {

    let title = document.getElementById('title').value;
    let description = document.getElementById('description').value;

    if(title && description) {

            let post = 
        {
            title, 
            description
        }

        const options = 
        {
            method : 'POST',
            headers: new Headers ({'content-type': 'application/json'}),
            body: JSON.stringify(post)

        }


        fetch('http://localhost/new', options)
        .then( res => {

            console.log(res);
            updatePosts()


        })
    }



}