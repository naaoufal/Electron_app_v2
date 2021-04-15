// login function 
function loginIn() {
    const email = document.querySelector('#em').value
    const password = document.querySelector('#ps').value

    fetch("http://localhost:3000/api/admins/login", {
        method : 'POST',
        headers : {
            'Content-Type' : 'application/json'
        },
        body : JSON.stringify({
            email : email
        })
    }).then(res => {
        return res.json()
    }).then(data => {
        //console.log(data.token)
        if(data.token) {
            fetch("http://localhost:3000/api/admins/all").then(res => {
                return res.json()
            }).then(data => {
                data.map(i => {
                    if(i.email == email && i.password == password) {
                        window.location.href = "agentHome.html"
                    } else {
                        alert("Mot de Passe ou Email Inccorect")
                    }
                })
            })
        } else {
            alert("Error")
        }
        // data.map(i => {
        //     if(i.email == email && i.password == password) {
        //         console.log(i)
        //         window.location.href = "agentHome.html"
        //     } else {
        //         alert("Error !!!")
        //     }
        // })
    })
}

function logOut () {
    localStorage.clear()
    window.location.href = "index.html"
}