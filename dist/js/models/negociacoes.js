export class Negociacoes {
    constructor() {
        // private negociacoes: Array<Negociacao> = [];  <-- mesma coisa que:
        this.negociacoes = [];
    }
    adiciona(negociacao) {
        this.negociacoes.push(negociacao);
    }
    lista() {
        return this.negociacoes;
    }
}
