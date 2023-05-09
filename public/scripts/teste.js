(async () => {
  const db = require("./db");
  console.log("Começou..");
  //console.log("INSERT INTO cadastros");
  //await db.insertCustomer({nome: "Zé", senha: 1212});
  console.log("SELECT * FROM cadastros;");
  const usuarios = await db.selectCustomers();
  console.log(usuarios);
  //console.log("UPDATE cadastros");
  //await db.updateCustomer(5, {nome: "Joao", senha: 1212});
  //console.log("DELETE cadastros");
  //await db.deleteCustomer(3);
})();