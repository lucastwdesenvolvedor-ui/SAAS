async function carregarProdutos() {
  const res = await fetch("/api/produtos");
  const produtos = await res.json();
console.log(produtos);
  const container = document.getElementById("container");

  produtos.forEach(p => {
    const div = document.createElement("div");
    div.innerHTML = `<h3>${p.nome}</h3><p>R$ ${p.preco}</p>`;
    container.appendChild(div);
  });
}

carregarProdutos();

document.getElementById("btn-produtos").addEventListener("click", () => {
  document.getElementById("add").style.display = "block";
});
