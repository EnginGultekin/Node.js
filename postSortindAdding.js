// Sort the posts, then create a new post and reorder the posts with the new post.

const posts = [
    { date: "21.10.1999", text: "No matter how painful life is, you deserve to live", number: 1 },
    { date: "21.10.2000", text: "Never play the victim role", number: 2 },
    { date: "21.10.2001", text: "It doesn't matter what anyone says, just be you.", number: 3 },
    { date: "21.10.2002", text: "trust no one no one loves you the way you do", number: 4 },
    { date: "21.10.2003", text: "Love yourself for who you are", number: 5 },
    { date: "21.10.2004", text: "Write, scratch, spoil, shout, but don't hurt yourself", number: 6 },
    { date: "21.10.2005", text: "Don't let this be the end always get up and start over", number: 7 },
]

const printPost = () => {
    posts.map((post) => {
        console.log(post.text + "\t" + post.date);
    })
    console.log("\n");
}

const addPost = (newPost) => {
    const oldPostLen = posts.length;
    const promise = new Promise((resolve, reject) => {
        posts.push(newPost);
        if (posts.length > oldPostLen) {
            resolve("Post successfully added");
        } else {
            reject("Insert failed");
        }
    });

    return promise;
}

printPost();
addPost({ date: "11.07.2023", text: "This is not the end it's the beginning of the end", number: 0 })
    .then(() => {
        console.log("New Post List");
        printPost();
    })
    .catch((error) => {
        console.log(error);
    })