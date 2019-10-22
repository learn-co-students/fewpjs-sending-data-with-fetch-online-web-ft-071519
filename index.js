function submitData(userName, userEmail) {
    let formData = {
        name: userName,
        email: userEmail
        };
        
    let configObj = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(formData)
        };
    
    return fetch("http://localhost:3000/users", configObj)
        .then(function(response) {
            return response.json();
        })
        .then(function(object) {
            let id = object.id;
            let div = document.createElement("div")
            div.innerText = id
            document.getElementsByTagName("body")[0].appendChild(div)
        })
        .catch(function(error) {
            if (error.message) {
                let errorNotice = document.createElement("div")
                errorNotice.innerText = error.message
                document.getElementsByTagName("body")[0].appendChild(errorNotice)
            }
        })
}