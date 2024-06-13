# HOW DOES THIS FULL STACK APP WORKS
from my understanding

## Definitions
### Frontend
- **Action**
    - an action is a request to the server through an API request to be able to do something on the server
- **API Request**
    - an API requests communicates to the server to perform an action
- **Component**
    - essentially a feature wherein you can perform actions on it
    - your actions are also reflected on these components
    - these will be shown on the web app
- **Reducer**
    - they essentially update your states when an action is performed so that the action is reflected on your components

### Backend
- **Controller**
    - Performs the action invoked by the client through the HTTP request on the database
- **Model**
    - Transmits the action performed by the controller to the database so that the data in the database will be updated
- **Route**
    - This is where the HTTP requests are redirected to depending on what action is performed

### Others
- **Dispatch**
    - a Redux function that allows the reducer to update states
- **Fetch**
    - Receives data sent from the server
    - Fetch posts means that we're getting the posts from the server
- **Router**
    - Basically a bridge between the client and the server i think

## Flow
Let's say the user wants to create a post
- The user clicks the submit button on the Form component once they are contented with the information of the post they want to upload
- Once the button is clicked, a dispatch function is called, which runs the reducer
- The reducer updates the new states, in this case, adding the information inputted by the user into the array of posts (i think)
- Once the new states are updated, the action is called to perform, in this case, uploading the post to the app
- To be able to post it to the app, the post information needs to be stored in the database. This is when the action makes an API request in the form of an HTTP request
- The HTTP request is then sent to the server through a router
- The HTTP request is delivered to the action's designated route
- Once the HTTP request is routed, a controller is called to perform the HTTP request. Since the action called is uploading the new post,
the HTTP request is handled by a controller who stores the new post info to the database
- Once the HTTP request has been processed, the controller communicates to the database through a model to store the post information. Now the newly created post is stored in the database
- After all that, the controller sends a response to the client in the form of a json file, indicating the status of the action. In this case,
since the post has been successfully uploaded, the controller sends a response that the post has been uploaded
