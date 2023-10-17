const restorePassword = async () => {
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");

    const email = emailInput.value;
    const password = passwordInput.value;

    try {
        const response = await fetch(`/api/sessions/restore?user=${email}&pass=${password}`);
        const data = await response.json();
        
        if (data.status === "OK") {

            console.log("Password restored successfully!");
            location.href = "/login";
        } else {
            console.error("Password restoration failed:", data.message);
        }
    } catch (error) {
        console.error("An error occurred during password restoration:", error);
    }
}

document.getElementById("btnRestore").addEventListener("click", restorePassword);
