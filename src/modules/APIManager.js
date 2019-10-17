const remoteURL = "http://localhost:5002";

export default {
    addUser(newUser) {
        return fetch(`${remoteURL}/users`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newUser)
        }).then(data => data.json())
    },
    searchUsername(email) {
        return fetch(`${remoteURL}/users?email=${email}`)
            .then(data => data.json()
            )
    },

    getAllTacos() {
        return fetch(`${remoteURL}/tacos`)
            .then(response => response.json())
    },
    getAllOrders(userId) {
        return fetch(`${remoteURL}/orders?userId=${userId}&_expand=taco`)
            .then(response => response.json())

    },
    orderTaco(tacoObj) {
        return fetch(`${remoteURL}/orders`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(tacoObj)
        }).then(response => response.json())
    }
}