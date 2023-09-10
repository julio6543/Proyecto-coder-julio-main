document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.querySelector("#loginForm");

    loginForm.addEventListener("submit", async (e) => {
        e.preventDefault();

        const email = document.querySelector("#email").value;
        const password = document.querySelector("#password").value;

        try {
            const response = await fetch("/api/sessions/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ email, password })
            });

            if (response.ok) {
                location.href = "/products";
            } else {
                console.error("Inicio de sesión fallido");
            }
        } catch (error) {
            console.error("Error al procesar la solicitud:", error);
        }
    });
});
