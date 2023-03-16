class Disciplina {
    constructor(codigo, nome) {
      this._codigo = codigo;
      this._nome = nome;
      this._alunos = [];
    }
  
    // getters e setters para o código
    get codigo() {
      return this._codigo;
    }
    set codigo(codigoNovo) {
      this._codigo = codigoNovo;
    }
  
    // getters e setters para o nome
    get nome() {
      return this._nome;
    }
    set nome(nomeNovo) {
      this._nome = nomeNovo;
    }
  
    // getters e setters para o array de alunos
    get alunos() {
      return this._alunos;
    }
    set alunos(alunos) {
      this._alunos = alunos;
    }
  }
  