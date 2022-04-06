(async=>{
    const db = require("./db");
    console.log('SELECT * FROM USUARIO');
    const usuarios =  db.selectUsuario();
    console.log(usuarios);
})();
// função main assíncrona