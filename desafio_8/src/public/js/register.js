const registerUser = async () => {
    const firstNameInput = document.getElementById("first_name");
    const lastNameInput = document.getElementById("last_name");
    const emailInput = document.getElementById("email");
    const ageInput = document.getElementById("age");
    const passwordInput = document.getElementById("password");

    const user = {
        first_name: firstNameInput.value,
        last_name: lastNameInput.value,
        email: emailInput.value,
        age: ageInput.value,
        password: passwordInput.value
    };

    try {
        const response = await fetch("/api/sessions/register", {
            method: "POST",
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            },
            body: JSON.stringify(user),
        });

        const data = await response.json();
        
        if (data.status === "OK") {

            console.log("Registration successful!");
        } else {
            console.error("Registration failed:", data.message);
        }
    } catch (error) {
        console.error("An error occurred during registration:", error);
    }
}

document.getElementById("btnRegister").addEventListener("click", registerUser);
