
function mostrarCategoria(categoria, botao) {
    document.querySelectorAll(".menu-categorias button")
        .forEach(b => b.classList.remove("ativo"));

    botao.classList.add("ativo");

    const areaDemonstracao =
        document.getElementById("areaDemonstracao");

    if (categoria === "demonstracao") {
        document.getElementById("listaProdutos").classList.add("hidden");
        areaDemonstracao.classList.remove("hidden");
        return;
    }

    areaDemonstracao.classList.add("hidden");
    document.getElementById("listaProdutos").classList.remove("hidden");

    carregarProdutos(categoria);
}
