export class Negociacao {
    // private _data: Date;
    // private _quantidade: number;
    // private _valor: number;
    constructor(
    // private _data: Date, 
    // private _quantidade: number,  <-- Mesma coisa que: 
    // private _valor: number) {} 
    _data, quantidade, valor) {
        this._data = _data;
        this.quantidade = quantidade;
        this.valor = valor;
    }
    //     {
    //     this._data = data;
    //     this._quantidade = quantidade;
    //     this._valor = valor;
    // }
    // get data(): Date {
    //     return this.data;
    // }
    // get quantidade(): number {
    //     return this.quantidade;
    // }
    // get valor(): number {
    //     return this.valor;
    // }
    get volume() {
        return this.quantidade * this.valor;
    }
    get data() {
        const data = new Date(this._data.getTime()); // Programação Defensiva
        return this._data;
    }
}
