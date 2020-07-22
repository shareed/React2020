#React Router 
[Video](https://www.youtube.com/watch?time_continue=291&v=OrBKbQbobC0&feature=emb_logo)
* **Routing** is accessing information based on a url
* **Servers** are physical devices, usually housed with other servers in large warehouses, that run the “behind the scenes” work of the internet like data storage.
* **Network Request**, when you type a url in a browser and hit enter a network request fires, HTTP request happens on top of a TCPIP connection

####Server-side
* When a browser's URL is changed, it will send a new request for a new page from the server. 
* A new document is served to the user.
* Causes the whole page to refresh, a new GET request is sent to the server which responds with a new document



####Client-side
* When Routing is handled internally by the JavaScript that is already on the page, we achieve what is known as **Client-side routing**. 
* Client-side routing is a JavaScript managed routing option. It offers control over your site URL & content without necessarily having to wait for a server to respond with content. It is designed to mimic the appearance of traditional multi page websites.
* Javascript manipulates the url and changes it without causing actual request, we can then conditionally render things depending on the url, SO NO ACTUAL NETWORK REQUEST ARE BEING MADE (FrontEnd)





#React Router
##Link Component
[Video](https://www.youtube.com/watch?time_continue=247&v=nbwHVhkXuVk&feature=emb_logo)
* takes a to prop
* programatically changes the url in the browser, allowing us to render different components. 
[link prop](basic-routing/src/images/link1.png)
[link prop](basic-routing/src/images/link2.png)
[link prop](basic-routing/src/images/link3.png)
[link prop](basic-routing/src/images/link4.png)

##BrowserRouter Component
* Must be used with Link or you will get an [error](basic-routing/src/images/link.png)
* Only needs to be used once in the application, you can wrap the entire application in the BrowserRouter in the index.js file
            
            ReactDOM.render(
                <BrowserRouter>
                    <App />
                </BrowserRouter>,
                document.getElementById('root')
                );

##Route Component
[Video](https://www.youtube.com/watch?time_continue=45&v=ZLpRLXsPNHs&feature=emb_logo)

* Used to allow only one component to be rendered at a time. Takes a path and a component props
` <Route path = '/about' component = {About} />`
* Route can also take an exact prop that allows only the exact path to be rendered `<Route exact path = '/' component = {Home} />`
* Componenets rendered `<Route></Route>`, come with some location, history, and match related props
    * Location: about where you are in the app
    * History:provide methods we can use to change locations imparatively [history prop](basic-routing/src/images/historyprop.png)
    * Match: conatins information about a particular Route matched the cuerrent location, can also be used to pull dynamic parameters from a url
* Render prop is used to inline things, when using it you will not use the component prop
[render prop](basic-routing/src/images/renderprop1.png)
[render prop](basic-routing/src/images/renderprop2.png)
* Childern prop makes the childern render with the path or not
[childern prop](basic-routing/src/images/childernprop.png)


##Switch Component
* Render routes excuslively
[Switch Component](basic-routing/src/images/renderprop2.png)

#Dynamic Routes
[Dynamic Routes](basic-routing/src/images/link1.png)