class DisciplinaServico {
    constructor() {
      this._disciplinaRepositorio = new DisciplinaRepositorio();
    }
  
    inserir(nome, codigo) {
      const disciplina = new Disciplina(codigo, nome);
      return this._disciplinaRepositorio.inserir(disciplina);
    }
  
  
    pesquisar(codigo) {
      return this.repositorio.pesquisar(codigo);
    }
  
    atualizar(disciplina) {
      this.repositorio.atualizar(disciplina);
    }
  
    remover(codigo) {
      this._disciplinaRepositorio.remover(codigo);
    }
  
  //   inserirAlunoNaDisciplina(aluno, codigoDisciplina) {
  //     const disciplina = this.pesquisar(codigoDisciplina);
  //     if (disciplina) {
  //       const alunos = disciplina.getAlunos();
  //       alunos.push(aluno);
  //       disciplina.setAlunos(alunos);
  //       this.atualizar(disciplina);
  //     } else {
  //       console.log(`Disciplina com código ${codigoDisciplina} não encontrada`);
  //     }
  //   }
}