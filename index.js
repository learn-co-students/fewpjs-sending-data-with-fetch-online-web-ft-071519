// Add your code
function submitData(name, email) { 
    return fetch("http://localhost:3000/users", {
        method: "POST", 
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({ name, email })
    })
        .then(function(response) {
            return response.json();
        })
        .then(function (object) {
            // adding our data object's id to the DOM
            document.body.innerHTML = object["id"]
        })
        .catch(function (error) {
            // notifying our user of any errors by displaying error messages in the body of the page
        document.body.innerHTML = error.message
    })
    
};