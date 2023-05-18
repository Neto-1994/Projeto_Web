(async () => {
  const db = require("./dbacqua");
  console.log("Começou..");
  //console.log("INSERT INTO cadastros");
  //await db.insertCustomer({nome: "Zé", senha: 1212});
  console.log("SELECT");
  const usuarios = await db.selectCustomers();
  console.log(usuarios);
  //console.log("UPDATE cadastros");
  //await db.updateCustomer(5, {nome: "Joao", senha: 1212});
  //console.log("DELETE cadastros");
  //await db.deleteCustomer(3);
})();