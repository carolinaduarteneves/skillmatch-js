// ============================================================
// DADOS PRINCIPAIS
// ============================================================

const candidato = {
  nome: "Carolina",
  area: "Front-End",
  habilidades: [
    "HTML",
    "CSS",
    "JavaScript",
    "DOM",
    "GitHub",
    "Responsividade",
    "Arrays",
    "Kanban",
  ],
  experienciaMeses: 4,
};

const vagas = [
  {
    id: 1,
    empresa: "Dev Solutions",
    cargo: "Desenvolvedor Front-End Júnior",
    requisitos: [
      "HTML",
      "CSS",
      "JavaScript",
      "DOM",
      "GitHub",
      "Responsividade",
      "Arrays",
      "Kanban",
    ],
    salario: 2000,
    modalidade: "Remoto",
  },
  {
    id: 2,
    empresa: "PixelCode",
    cargo: "Estagiário em Desenvolvimento Web",
    requisitos: ["HTML", "CSS", "Objetos", "Funções", "Bootstrap"],
    salario: 2500,
    modalidade: "Híbrido",
  },
  {
    id: 3,
    empresa: "Tech Systems",
    cargo: "Assistente de Suporte Técnico",
    requisitos: [
      "Hardware",
      "Algoritmos",
      "Noções de Redes",
      "Resolução de Problemas",
    ],
    salario: 2200,
    modalidade: "Presencial",
  },
  {
    id: 4,
    empresa: "PixelWave Studio",
    cargo: "Desenvolvedor Web Trainee",
    requisitos: [
      "JavaScript",
      "DOM",
      "Arrays",
      "Responsividade",
      "React",
      "Lógica de Programação",
      "Node.js",
    ],
    salario: 3100,
    modalidade: "Remoto",
  },
];

// ============================================================
// CLASSES
// ============================================================

class Vaga {
  constructor(id, empresa, cargo, requisitos, salario, modalidade) {
    this.id = id;
    this.empresa = empresa;
    this.cargo = cargo;
    this.requisitos = requisitos;
    this.salario = salario;
    this.modalidade = modalidade;
  }

  exibirResumo() {
    return `${this.cargo} na empresa ${this.empresa}`;
  }
}

class VagaFrontEnd extends Vaga {
  constructor(id, empresa, cargo, requisitos, salario, modalidade, nivel) {
    super(id, empresa, cargo, requisitos, salario, modalidade);
    this.nivel = nivel;
  }

  exibirNivel() {
    return `Nível da vaga: ${this.nivel}`;
  }
}
