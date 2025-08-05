<script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>

    <script></script>
        function validar() {
            alert("BOTON DE UNA FUNCION");
        }

        function loadpage() {
            Swal.fire({
                title: "Bienvenido",
                text: "A mi sitio web",
                icon: "success",
                ShowConfirmButtom: false,
                timer: 3000
            });
        }
        //Declaracion de variables 
        const toggle_password = document.getElementById("toggle_password");
        const password = document.getElementById("password");

        //Logica del show/hide password
        toggle_password.addEventListener("click", () => {
            const type = password.type === "password" ? "text" : "password";
            password.type = type;
            toggle_password.classList.toggle("fa-eye")
            toggle_password.classList.toggle("fa-eye-slash")
        });

        function validar() {
            let password = document.getElementById("password").value;
            let lowercase = /[a-z]/.test(password);
            let uppercase = /[A-Z]/.test(password);
            let number = /\d/.test(password);
            let specialchar = /[\W_]/.test(password);
            if (password.length < 8) {
                Swal.fire(
                    "Error",
                    "La contraseña debe tener al menos 8 caracteres.",
                    "error"
                );
            }
            if (specialchar && lowercase && uppercase && number) {
                Swal.fire(
                    "Correcto",
                    "La contraseña cumple con las condiciones.",
                    "success"
                );
            }
            else {
                Swal.fire({
                    icon: "error",
                    title: "Contraseña Invalida",
                    html: `
                                <ul style="text-aling:start;">
                                    <li>${number ? "✅" : "❌"} Al menos un número</li>
                                    <li>${lowercase ? "✅" : "❌"} Al menos una minúscula</li>
                                    <li>${uppercase ? "✅" : "❌"} Al menos una mayúscula</li>
                                    <li>${specialchar ? "✅" : "❌"} Al menos un caracter especial</li>
                                </ul>
                            `
                });
            }
        }        
    script >
