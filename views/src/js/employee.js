// login function
function employeeLogin () {
    
    const email = document.querySelector('#em').value
    const password = document.querySelector('#ps').value

    fetch("http://localhost:3000/api/employees/login", {
        method : 'POST',
        headers : {
            'Content-Type' : 'application/json'
        },
        body : JSON.stringify({
            mail : email
        })
    }).then(res => {
        return res.json()
    }).then(data => {
        if(data.token) {
            fetch("")
        }
    })
}