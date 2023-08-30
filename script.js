// Fiz a numeração de cada desáfio e o que pedia, além de uma pequena
// descrição de cada código abaixo dles já que me ajudar a fixar além
// de mostrar meu penasmento por trás do código.

// 01 - Condição composta

let periodo = "dia"

if(periodo == "dia") {
    console.log("claro")
} else {
    console.log("de noite")
}
// Se for dia, mostrar "claro", se não, "de noite"


// 02 -Loop

for(let pares = 0; pares <= 20; pares += 2) {
    console.log(pares)
}
// Usando da variavel pares com o valor 0, até que seja um número
// menor ou igual a 50, fique adcionando 2, o que sempre manterá
// ele par, e por fim mostre no console


// 03 - Função que mostre no console

function meFale() {
    console.log("Eu estou falando blablablablablablablablablabla")
} meFale()

// Criando a função me fale, tenha como ação falar o que está dentro
// do console.log, e logo em seguida a execute


// 04 - Função com meu nome no parâmetro

function maisLegal(nome) {
    console.log(`Mano, aquele tal de ${nome} é super gente boa`)
} maisLegal("Rafael")

// Criando a função maisLegal, crie o parâmetro nome e no console.log
// quando esse nome for citado ele irá ser substituido
// logo em seguida execute a função com o parâmentro sendo Rafael


// 05 - Função de nome, idade e estilo músical

function pessoaAleatoria(nome, idade, estilo) {
    console.log(`Olá, meu nome é ${nome}, eu tenho ${idade} anos, e não consigo viver sem escutar músicas do estilo ${estilo}`)
} pessoaAleatoria("Jubriscrelson", 23, "sertanejo universitário")

// É basicamente o próximo desafio


// 06 - Função de filme e música

function filme_e_musica(filme, musica, artista) {
    console.log(`O filme ${filme} tem estado na minha cabeça, só não tanto quanto a música ${musica} cantada por ${artista}`)
} filme_e_musica("O Rei do Show", "Morto", "Terno")

// Criando a função filme_e_musica, crie o parâmetro filme, musica e 
// artista e no console.log
// quando esses parâmetros forem citados eles irão ser substituidos
// logo em seguida execute a função com os paramêtros sendo
// "O Rei do Show", "Morto" e "Terno"


// 07 - Triplo do número

function calculo(numero) {
    console.log(`O seu número, ${numero}, é bom, mas o triplo dele, que é ${numero * 3}, é bem mais bacana`)
} calculo(15)

// Criando a função calculo, crie o parâmetro numero e logo em seguida
// no console.log faça esse parâmetro ser multiplicado por 3 dentro
// da região feita para variaveis
// logo em seguinda execute a função com o parâmetro sendo 15


// 08 - Função de true ou false

let verdadeiro = true
let falso = false

function verificarVericidade(verdade) {
    if(verdade) {
        console.log("realmente, é verdade")
    } else {
        console.log("é vErDaDE eSsE bIlHEtE (não é não)")
    }
} verificarVericidade(verdadeiro)

// Crie as varaiveis verdadeiro e falso e quando a função
// verificarVericidade com o parametro verdade for executada
// verifique se o parametro é True, se for, mostre o primeiro resultado
// caso não seja, mostre o segundo


// 09 - Array com 5 itens

let produtos = ['celular', 'computador', 'feijão', 'laptop', 'fogão']
console.log(produtos)

// Crie uma variável com seu valor sendo um array de 5 itens
// logo em seguida mostre esse array


// 10 - Método para adcionar um nome no início

produtos.unshift('PS5')
console.log(produtos)
// Adcine no começo do array a string "PS5"


// 11 - Método para remover o último nome

produtos.pop()
console.log(produtos)
// Remova a última string do array


// 12 - Método para adcionar dois nomes ao fim

produtos.push("bola", "armário")
console.log(produtos)
// Adcione esses dois itens ao fim do array

// ou

produtos.splice(6, 0, "caneta", "fones de ouvido")
console.log(produtos)
// A partir do item de valor 6, não remova nenhum item, e adcione 
//essas duas strings


// 13 - Método par remover o primeiro nome

produtos.shift()
console.log(produtos)
// Retire o primeiro item do array


// 14 - Organizar

let numbers = [7,5,6,3,8,9,2,1,4]
console.log(numbers.sort())
// Mostre esse array de númeroas de forma crescente


// 15 - Adcionar propriedade a um objeto

let aplicativos = {
    filmes: ["netflix", "prime video", "HBO Max"],
    jogos: ["HayDay", "Tetris", "Clash Royale"]
}
// Crie um objeto com duas propriedades, filmes e jogos
// com ambas possuindo como seus valores, arrays.

aplicativos.saude = ["Alarme", "App de treino", "Night time"]
console.log(aplicativos)
// Adcione uma nova propriedade e me mostre


// 16 - Remover uma propriedade

delete aplicativos.saude
console.log(aplicativos)
// remova a propriedade saude e me mostre


// 17 - Mostre nos console todas as propriedades do objeto

// Eu meio que ja fiz isso kkkkkkkkkkk 
// mas eu vou fazer de forma individual

console.log(aplicativos.filmes)
console.log(aplicativos.jogos)

// 18 - Criar array com diversos itens

let cadastro = [
    {
     nome: "Thiago",
     idade: 24,
     telefone: 71956345218,
     amigos: ["Cícera", "Luke", "Álvaro", "Adílson", "Albina"]  
    },
    {
     nome: "Ronaldo",
     idade: 62,
     telefone: 71672323678,
     amigos: ["Baltazar", "Melanie", "Isadora", "Luis", "Andrea"]  
    },
    {
     nome: "Bianca",
     idade: 23,
     telefone: 71962335639,
     amigos: ["Cássia", "Gustavo", "Bete", "Manuela", "Eduardo"]  
    },
    {
     nome: "Giovanna",
     idade: 35,
     telefone: 71952345758,
     amigos: ["Batista", "Fátima", "Gustavo", "Emília", "Gustavo"]  
    }
]

// Crie um array chamado "cadastro" contendo 5 objetos.
// Cada objeto possui 5 propriedades: nome, idade, telfone e amigos.
// Na propriedade amigos, existe um array com 5 amigos em cada.


// 19 - Mostre no console o nome de um amigo de cada lista

console.log(cadastro[0].amigos[3])
console.log(cadastro[1].amigos[1])
console.log(cadastro[2].amigos[4])
console.log(cadastro[3].amigos[0])

// Esse desafio foi bastante divertido, com suas facilidades do começo
// e com uma gradual dificuldade que no fim nos fez testar coisas
// que não foram exatamente dadas em aulas porém com certeza
// possíveis de fazer com o que foi dado até o momento

// Como alguém que n tem mt expêriencia com Js, esse desafio ajudou 
// bastante!! <3