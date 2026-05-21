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

// ============================================================
// FUNÇÕES AUXILIARES
// ============================================================

// filter — habilidades que o candidato possui na vaga
function calcularHabilidadesEncontradas(candidato, vaga) {
  return vaga.requisitos.filter((requisito) =>
    candidato.habilidades.includes(requisito),
  );
}

// filter — habilidades que o candidato NÃO possui na vaga
function calcularHabilidadesFaltantes(candidato, vaga) {
  return vaga.requisitos.filter(
    (requisito) => !candidato.habilidades.includes(requisito),
  );
}

function calcularPercentual(candidato, vaga) {
  const habEncontradas = calcularHabilidadesEncontradas(candidato, vaga);
  return Math.round((habEncontradas.length / vaga.requisitos.length) * 100);
}

function classificarCompatibilidade(percentual) {
  if (percentual >= 80) {
    return "Alta compatibilidade";
  } else if (percentual >= 50) {
    return "Média compatibilidade";
  } else {
    return "Baixa compatibilidade";
  }
}

// ============================================================
// FUNÇÕES PRINCIPAIS
// ============================================================

function calcularCompatibilidade(candidato, vaga) {
  let habEncontradas = calcularHabilidadesEncontradas(candidato, vaga);
  habEncontradas =
    habEncontradas.length === 0
      ? "Nenhuma. O candidato não possui nenhuma das habilidades exigidas."
      : habEncontradas.join(", ");

  let habFaltantes = calcularHabilidadesFaltantes(candidato, vaga);
  habFaltantes =
    habFaltantes.length === 0
      ? "Nenhuma. O candidato possui todas as habilidades exigidas."
      : habFaltantes.join(", ");

  const percentual = calcularPercentual(candidato, vaga);
  const classificacao = classificarCompatibilidade(percentual);

  console.log(`Empresa: ${vaga.empresa}`);
  console.log(`Cargo: ${vaga.cargo}`);
  console.log(`Compatibilidade: ${percentual}%`);
  console.log(`Habilidades Encontradas: ${habEncontradas}`);
  console.log(`Habilidades Faltantes: ${habFaltantes}`);
  console.log(`Classificação: ${classificacao}`);
}

function listarHabilidadesFaltantes(candidato, vaga) {
  let habFaltantes = calcularHabilidadesFaltantes(candidato, vaga);
  habFaltantes =
    habFaltantes.length === 0
      ? "0 habilidades. O candidato possui todas as habilidades exigidas."
      : `\n- ${habFaltantes.join("\n- ")}`;

  console.log(
    `Para a vaga da empresa ${vaga.empresa}, faltam: ${habFaltantes}`,
  );
}