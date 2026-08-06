const signup = async () => {
    const username = document.getElementById('signup-username').value;
    const password = document.getElementById('signup-password').value;

    // using axios -> axios returns a promise so await is used.
    await axios.post("http://localhost:5000/signup", {

        username: username,
        password: password
    });


    alert('You are signed up');
}

const signin = async () => {
    const username = document.getElementById('signin-username');
    const password = document.getElementById('signin-password');

    const response = await axios.post('http://localhost:5000/signin', {
        username,
        password
    })

    localStorage.setItem("token", response.data.token);

    alert('You are signed in');
}

const getUserInformation = async () => {
    //NOTE: response have the promise and not the actual value.
    const response = await axios.get('http://localhost:5000/me', {
        headers: {
            token: localStorage.getItem("token")
        }
    })
    document.getElementById("information").innerHTML = "Username: " + response.data.username + "Password: " + response.data.password
}

getUserInformation();


const logout = () => {
    localStorage.removeItem("token");
}