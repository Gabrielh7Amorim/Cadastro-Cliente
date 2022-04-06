(async=>{
    const db = require("./db");
    console.log('SELECT * FROM USUARIO');
    const usuarios = await db.selectUsuario();
    console.log(usuarios);
})();
// função main assíncrona