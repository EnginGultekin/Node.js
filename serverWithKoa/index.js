import Koa from 'koa';
const app = new Koa();


// Response
app.use(ctx => {
    if(ctx.url == '/'){
        ctx.body = '<h1>Welcome Home Page<h1>';
    } else if(ctx.url == '/about'){
        ctx.body = '<h1>Welcome About Page<h1>';
    } else if(ctx.url == '/contact'){
        ctx.body = '<h1>Welcome Contact Page<h1>';
    }else {
        ctx.body = '<h1>404 Not Found<h1>';
    }
});


const port = 3000
app.listen(port, () => {
    console.log(`Server started working on port ${port}...`);
})

