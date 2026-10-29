const produtos = [
    {
      nome: "Iphone 13",
      categoria: "Avançado",
      quantidade: 35,
      preco: 2999.00
    },
    {
        nome: "Galaxy A15",
      categoria: "Intermediário",
      quantidade: 40,
      preco: 998.00
    },
    {
        nome: "Moto G24",
      categoria: "Básico",
      quantidade: 25,
      preco: 799.00
    },
    {
        nome: "Redmi Note 13",
      categoria: "Intermediário",
      quantidade: 30,
      preco: 1199.00
    },
    {
        nome: "Nova 12i",
      categoria: "Intermediário",
      quantidade: 15,
      preco: 1499.00
    },
    {
        nome: "C55",
      categoria: "Intermediário",
      quantidade: 23,
      preco: 999.00
    },
    {
        nome: "Zenfone 10",
      categoria: "Premium",
      quantidade: 20,
      preco: 3499.90
    },
    {
      nome: "Pixel 8a",
    categoria: "Intermediário premium",
    quantidade: 32,
    preco: 2499.90
    },
    {
      nome: "Nord CE 4 Lite",
    categoria: "Intermediário",
    quantidade: 15,
    preco: 2499.00
    },
    {
      nome: "Reno 11 F",
    categoria: "Intermediário",
    quantidade: 20,
    preco: 1799.00
    }
 
  ];

  const corpoTabela = document.getElementById("corpoTabela")

  for (let produto of produtos){
    const linha = document.createElement("tr")

    linha.innerHTML = `
        <td>${produto.nome}</td>
        <td>${produto.categoria}</td>
        <td>${produto.quantidade}</td>
        <td class="preco">${produto.preco.toLocaleString("pt-BR",{
            style: "currency",
            currency: "BRL"
        })}</td>
    `

    corpoTabela.appendChild(linha)
  }