const express = require('express');
const { v4: uuidv4 } = require('uuid');
const app = express();
const fs = require("fs");
const port = 3000;
app.use(express.json());
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});
app.get('/', (req, res) => {
   // TODO
   res.json({status: 200, message: "Api is working", "endpoint": "/api/posts"});
})
/**
 * Description: CRUD posts
 * Endpoint: /api/posts
 */

function save(posts){
    fs.writeFileSync("./database/posts.json",JSON.stringify(posts))
}

// Get posts
let posts = JSON.parse(fs.readFileSync("database/posts.json"));
app.get('/api/posts', (req, res) => {
   // TODO
   res.send({message: "get all posts", data: posts})
});

// Get post
app.get('/api/posts/:id', (req, res) => {
    // TODO
    let id = req.params.id;
    let index = posts.findIndex(post => post.id === id);
    let post = posts[index];
    if (index != -1){
        res.json({message: "Get a post", data: post})
    }else{
        res.json({message: "Post not found"});
    }
});

// Create a new post
app.post('/api/posts', (req, res) => {
    // TODO
    let id = uuidv4();
    let title = req.body.title;
    let description = req.body.description;
    let isExpired = req.body.isExpired;
    let post = {"id": id, "title": title, "description": description, "isExpired": isExpired };
    posts.push(post)
    save(posts);
    res.send({message: "Create a post", data: post});
});

// Delete post
app.delete('/api/posts/:id', (req, res) => {
    // TODO
    let id = req.params.id;
    let index = posts.findIndex(post => post.id == id);
    if (index != -1){
        posts.splice(index, 1);
        save(posts);
        res.json({message: "Delete a post in database"});
    }else{
        res.json({message: "Post not found"});
    }
});


// Update a post
app.put('/api/posts/:id', (req, res) => {
    // TODO
    let id = req.params.id;
    let title = req.body.title;
    let description = req.body.description;
    let isExpired = req.body.isExpired;
    let index = posts.findIndex(post=> post.id == id);
    let updatePost = {"id" : id, "title": title, "description": description, "isExpired": isExpired};
    if (index != -1){
        posts[index] = {...posts[index],...updatePost}
        save(posts)
        res.json({message: "Update a post in the database"})
    }else{
        res.json({message: "Post not found"});
    }
});