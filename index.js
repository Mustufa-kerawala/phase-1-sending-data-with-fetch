// Add your code here

// fetch("http://localhost:3000/dogs", configurationObject)
// .then(response => response.json())
// .then(object => console.log(object))
// .catch(error => {
//     alert("Bad things! Ragnarők!");
//     console.log(error.message);
// });

function submitData(userName, userEmail) {
    const configurationObject = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        body: JSON.stringify({
            name: userName,
            email: userEmail,
          }),
    };
    return fetch("http://localhost:3000/users", configurationObject)
    .then(response => response.json())
    .then(object => {
        document.body.append(object["id"]);
        console.log(object);
    })
    .catch(error => {
        document.body.append(error.message);
        console.error(error);

    });

    
}

// submitData("Jim", "jim@jim.com");