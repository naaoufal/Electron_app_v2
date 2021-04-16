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
        //console.log(data)
        if(data.token) {
            fetch("http://localhost:3000/api/employees/getEmployee").then(res => {
                return res.json()
            }).then(data => {
                //console.log(data)
                data.map(i => {
                    if(i.mail == email && i.password == password){
                        localStorage.setItem('employeeData', JSON.stringify(i))
                        window.location.href = "employeeHome.html"
                    }
                })
            })
        } else {
            alert("Error Token")
            location.reload()
        }
    })
}

function logOut () {
    localStorage.clear()
    window.location.href = "employeeLogin.html"
}