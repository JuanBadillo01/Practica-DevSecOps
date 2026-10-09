// Practica DevSecOps - Remediacion de secretos
// Las credenciales se obtienen de variables de entorno.

const config = {
    usuario: process.env.APP_USER,
    password: process.env.APP_PASSWORD,
    github_token: process.env.GITHUB_TOKEN
};

console.log("Aplicacion iniciada");
console.log("Usuario configurado:", config.usuario);
