const usuario = "FernandoChaser"; 
const url = `https://api.github.com/users/${usuario}`;

async function carregarGitHub() {
    try {
        const resposta = await fetch(url);
        if (!resposta.ok) throw new Error("Erro ao carregar dados");

        const dados = await resposta.json();

        // preenche o HTML com os dados
        document.getElementById("avatar").src = dados.avatar_url;
        document.getElementById("name").textContent = dados.name || "Nome não informado";
        document.getElementById("username").textContent = `@${dados.login}`;
        document.getElementById("repos").textContent = dados.public_repos;
        document.getElementById("followers").textContent = dados.followers;
        document.getElementById("following").textContent = dados.following;
        document.getElementById("github-link").href = dados.html_url;
    } catch (erro) {
        console.error("Erro:", erro);
    }
}

carregarGitHub();
