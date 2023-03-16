class DisciplinaRepositorio {
    constructor() {
      this._disciplinas = [];
    }
  
    inserir(disciplina) {
      this._disciplinas.push(disciplina)
      return (disciplina);
    }
  
    pesquisar(codigo) {
      return this._disciplinaRepositorio.pesquisar;
    }
  
    remover(codigo) {
      const index = this._disciplinas.findIndex(disciplina => disciplina.codigo === codigo);
      if (index >= 0) {
        this._disciplinas.splice(index, 1);
        return true;
      }
      return false;
    }

    listar() {
      return this._disciplinas;
    }
  }