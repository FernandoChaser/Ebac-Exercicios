// abstracao
class Animal {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }

    emitirSom() {
        console.log(`${this.nome} fez um som.`);
    }
}

// classes herdeiras
class Cachorro extends Animal {
    emitirSom() {
        console.log(`${this.nome} latiu: Au Au!`);
    }
}

class Gato extends Animal {
    emitirSom() {
        console.log(`${this.nome} miou: Miau!`);
    }
}

// objetos
const cachorro1 = new Cachorro("Rex", 5);
const cachorro2 = new Cachorro("Thor", 3);
const gato1 = new Gato("Mia", 2);


cachorro1.emitirSom(); 
cachorro2.emitirSom(); 
gato1.emitirSom();    
