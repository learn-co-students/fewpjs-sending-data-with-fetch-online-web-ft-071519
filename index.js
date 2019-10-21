function submitData(userName, userEmail) {
    let configObj = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({name: userName, email: userEmail})
    };

    return fetch('http://localhost:3000/users', configObj)
        .then(function (response) {
            return response.json();
        })
        .then(function (object) {
            console.log(object)
            document.body.innerHTML = object["id"];

        })
        .catch(function (error) {
            alert("Houston, we've got a problem");
            console.log(error.message);
            document.body.innerHTML = error.message
        })
}