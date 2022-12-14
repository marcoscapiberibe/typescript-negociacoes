export class Negociacao {
    // private _data: Date;
    // private _quantidade: number;
    // private _valor: number;

    constructor(
        // private _data: Date, 
        // private _quantidade: number,  <-- Mesma coisa que: 
        // private _valor: number) {} 
        private _data: Date, 
        public readonly quantidade: number, 
        public readonly valor: number) {}
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

    get volume(): number {
        return this.quantidade * this.valor;
    }

    get data(): Date {
        const data = new Date(this._data.getTime()); // Programação Defensiva
        return this._data;
    }

}