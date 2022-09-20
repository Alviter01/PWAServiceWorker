self.addEventListener('install',(event)=>{
    console.log('SW: Install');
});

self.addEventListener('fetch',(event)=>{
   /*if (event.request.url.includes('.css')) {
        console.log(event.request.url);
        //event.respondWith(fetch('images/gato.jpg'));

        const resp = new Response(
            `
            body{
                color:rgba(230, 8, 159, 0.852);
                background-color:pink;
            }
            `,
            {
                headers:{
                    'Content-Type':'text/css'
                },
            }
        );
        event.respondWith(resp);
    }*/

    if (event.request.url.includes('.jpg')) {
        event.respondWith(fetch('/images/gato.jpg'));
    }
    
});