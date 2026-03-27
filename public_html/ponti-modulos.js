const modulos = [
  {
    num: 1,
    titulo: "Introducción a la Dermatología Funcional",
    bloques: [
      {
        num: 1,
        titulo: "Apertura y Presentación",
        fecha: "25 abril",
        docente: "Dr. Lucas Ponti / Dra. Verónica Tosi / Edith Groshaus",
        claseHS: 3,
        asincHS: 6,
        tematicas: [
          "Presentación del equipo docente y modalidades de trabajo",
          "Presentación del campus y funcionamiento",
          "Anticipación de trabajo final",
          "Dermatología evolutiva: la piel como espejo del estado interno"
        ]
      },
      {
        num: 2,
        titulo: "Conceptos Básicos de Dermatología Funcional",
        fecha: "16 mayo",
        docente: "Dr. Lucas Ponti / Dra. Verónica Tosi",
        claseHS: 3,
        asincHS: 6,
        tematicas: [
          "Conceptos básicos de la dermatología funcional",
          "Introducción a la Psiconeuroinmunoendocrinología",
          "Interacciones entre el sistema nervioso, inmunológico y endocrino",
          "La piel como órgano y su conexión con otros sistemas del cuerpo"
        ]
      },
      {
        num: 3,
        titulo: "Microbioma",
        fecha: "30 mayo",
        docente: "Dr. Gabriel Vinderola",
        claseHS: 3,
        asincHS: 6,
        tematicas: [
          "Microbioma: concepto de microbiota vs microbioma",
          "Principales microorganismos cutáneos: bacterias, hongos, virus y ácaros",
          "Factores que modulan el microbioma: edad, sexo, genética, ambiente",
          "Microbioma e inmunidad innata y adaptativa",
          "Integración de herramientas terapéuticas tópicas y sistémicas basadas en microbioma"
        ]
      }
    ]
  },
  {
    num: 2,
    titulo: "El Rol de la Inflamación y el Estrés en las Enfermedades de la Piel",
    bloques: [
      {
        num: 4,
        titulo: "Inflamación, Estrés y Piel",
        fecha: "13 junio",
        docente: "Dr. Lucas Ponti / Dra. Verónica Tosi",
        claseHS: 3,
        asincHS: 6,
        tematicas: [
          "Mecanismos de la inflamación en la piel. Estrés y su impacto en enfermedades inflamatorias (psoriasis, eczema, acné)",
          "El eje HPA (hipótálamo-hipófisis-adrenal) y su relación con la piel",
          "Estrés crónico: inflamación de bajo grado"
        ]
      },
      {
        num: 5,
        titulo: "Neurología de Precisión Aplicada a Dermatología",
        fecha: "27 junio",
        docente: "Sara Setti",
        claseHS: 3,
        asincHS: 6,
        tematicas: [
          "Neurología de precisión aplicada a dermatología: eje cerebro/piel desde la Psiconeuroinmunología",
          "Sistema nervioso autónomo y eje HPA",
          "Neuroinflamación, prurito, dolor y reparación cutánea",
          "Estrés crónico y modulación de la respuesta cutánea",
          "Suplementación funcional neuroinmunomoduladora"
        ]
      }
    ]
  },
  {
    num: 3,
    titulo: "El Impacto de las Hormonas en la Salud de la Piel",
    bloques: [
      {
        num: 6,
        titulo: "Hormonas y Piel",
        fecha: "4 julio",
        docente: "Lucía de la Casa",
        claseHS: 3,
        asincHS: 6,
        tematicas: [
          "Efectos del estrógeno, progesterona, cortisol y otras hormonas sobre la salud dérmica",
          "Acné, melasma, rosácea y otras enfermedades hormono-dependientes",
          "El ciclo menstrual y su influencia en las patologías de la piel",
          "Estrategias para restaurar el equilibrio hormonal en la práctica profesional",
          "Ritmos circadianos y cronodisrupción: su impacto en la piel"
        ]
      },
      {
        num: 7,
        titulo: "Climaterio y Piel",
        fecha: "18 julio",
        docente: "Lucía de la Casa",
        claseHS: 3,
        asincHS: 6,
        tematicas: [
          "Climaterio y piel: climaterio como etapa de reprogramación neuroendocrina",
          "Ejes HPO-HPA y su impacto cutáneo",
          "Estrógenos, progesterona, andrógenos y envejecimiento de la piel",
          "Inflamación, barrera cutánea y síntomas neuropsíquicos",
          "Suplementación funcional en el climaterio"
        ]
      }
    ]
  },
  {
    num: 4,
    titulo: "Nutrición, Suplementación, Endovenosos, Micología",
    bloques: [
      {
        num: 8,
        titulo: "Nutrición, Suplementación y Micología",
        fecha: "AGO",
        docente: "Victoria Cruz · Lucas Ponti · Dra. Verónica Tosi · Marcelo Rodríguez",
        claseHS: 8,
        asincHS: 6,
        tematicas: [
          "Alimentos que promueven la salud de la piel: antioxidantes, ácidos grasos esenciales, vitaminas (A, C, D, E) y minerales",
          "Deficiencias nutricionales y su relación con las enfermedades dérmicas",
          "Suplementos útiles para tratar afecciones de la piel: probióticos, omega-3, zinc, biotina, etc.",
          "La importancia de la dieta antiinflamatoria en la prevención y tratamiento de enfermedades cutáneas",
          "Cómo potenciar resultados en tratamientos estéticos y regenerativos a través de una suplementación sinérgica y personalizada",
          "Ayuno intermitente y restricción calórica: aplicaciones seguras",
          "Hipotiroidismo",
          "Micología",
          "Resistencia a la insulina: diagnóstico, biomarcadores y manejo"
        ]
      }
    ]
  },
  {
    num: 5,
    titulo: "Diagnóstico Integral de Enfermedades de la Piel",
    bloques: [
      {
        num: 9,
        titulo: "Diagnóstico Integral y Casos Clínicos",
        fecha: "12 septiembre",
        docente: "Ponti & Tosi",
        claseHS: 3,
        asincHS: 6,
        tematicas: [
          "Cómo hacer un diagnóstico integral de la piel: historia clínica, análisis de factores hormonales, emocionales e inmunológicos",
          "Herramientas complementarias: análisis de sangre, pruebas hormonales, test de estrés, perfil de inflamación celular, etc.",
          "Casos clínicos: diagnóstico integral y propuesta de tratamiento funcional"
        ]
      },
      {
        num: 10,
        titulo: "Medicina Funcional y Pediatría",
        fecha: "26 septiembre",
        docente: "Ponti & Tosi",
        claseHS: 3,
        asincHS: 6,
        tematicas: [
          "Medicina Funcional y Pediatría: programación temprana del sistema nervioso, neuroendocrino y cutáneo",
          "PHI dura: apego, estrés temprano y eje HPA inmaduro",
          "Dermatología pediátrica como enfermedad sistémica",
          "Dermatitis atópica, urticaria, infecciones recurrentes"
        ]
      }
    ]
  },
  {
    num: 6,
    titulo: "Genética y Epigenética",
    bloques: [
      {
        num: 11,
        titulo: "Genética y Epigenética",
        fecha: "10 octubre",
        docente: "Ponti & Tosi",
        claseHS: 3,
        asincHS: 4,
        tematicas: [
          "Genética vs epigenética",
          "Edad cronológica vs edad biológica",
          "Regulación epigenética del envejecimiento cutáneo",
          "Plasticidad biológica y moduladores epigenéticos",
          "Tests genéticos y epigenéticos aplicables a consulta médica"
        ]
      }
    ]
  },
  {
    num: 7,
    titulo: "Dermatología Funcional & PNIE en el Manejo de Enfermedades Inflamatorias más Frecuentes de la Piel",
    bloques: [
      {
        num: 12,
        titulo: "Enfermedades Inflamatorias de la Piel",
        fecha: "24 octubre",
        docente: "Tosi & Ponti",
        claseHS: 3,
        asincHS: 6,
        tematicas: [
          "Psoriasis y Estrés: relación entre inflamación crónica, estrés y exacerbación de la psoriasis",
          "Estrategias para manejar el estrés y regular el sistema hormonal",
          "Acné y Hormonas: efectos de las hormonas (especialmente andrógenos y cortisol) en el acné",
          "Cómo abordar el acné desde el enfoque psiconeuroinmunoendocrinológico",
          "Dermatitis Atópica y Estrés Emocional",
          "El papel del estrés y las emociones en los brotes de dermatitis",
          "Técnicas de manejo emocional para mejorar la respuesta inmune",
          "Proponer un plan de tratamiento funcional integral que considere los aspectos emocionales, hormonales, inmunológicos y nutricionales en el manejo de enfermedades dermatológicas",
          "Tratamientos integrales: desde la alimentación y la suplementación hasta los enfoques terapéuticos psicoemocionales",
          "Terapias integradoras para patologías dermatológicas comunes",
          "Discusión sobre protocolos de tratamiento"
        ]
      }
    ]
  },
  {
    num: 8,
    titulo: "Detoxificación, Contaminantes y Piel",
    bloques: [
      {
        num: 13,
        titulo: "Detoxificación, Contaminantes y Piel",
        fecha: "14 noviembre",
        docente: "Dr. Cubrias",
        claseHS: 3,
        asincHS: 6,
        tematicas: [
          "Vías de detoxificación hepática (Fase I y Fase II)",
          "Toxinas ambientales y disrupción endocrina",
          "Metales pesados y su impacto inmuno-neuro-cutáneo",
          "Microplásticos, contaminantes emergentes y piel",
          "Relación detoxificación: inflamación crónica y envejecimiento cutáneo",
          "Suplementación funcional de soporte a vías de detoxificación",
          "Exposoma: concepto y relevancia clínica en dermatología funcional"
        ]
      }
    ]
  },
  {
    num: 9,
    titulo: "Módulo 9",
    bloques: [
      {
        num: 14,
        titulo: "Marketing Médico",
        fecha: "28 noviembre",
        docente: "Edith Groshaus",
        claseHS: 2,
        asincHS: 6,
        tematicas: [
          "Marketing médico"
        ]
      },
      {
        num: 15,
        titulo: "Dermatología Funcional y PNIE en Medicina Estética",
        fecha: "28 noviembre",
        docente: "Ponti & Tosi",
        claseHS: 1,
        asincHS: null,
        tematicas: [
          "Dermatología funcional y PNIE en medicina estética"
        ]
      }
    ]
  },
  {
    num: 10,
    titulo: "Casos Clínicos",
    bloques: [
      {
        num: 16,
        titulo: "Casos Clínicos Integradores",
        fecha: "12 diciembre",
        docente: "Tosi & Ponti",
        claseHS: 3,
        asincHS: null,
        tematicas: [
          "Casos clínicos: aplicar todos los conocimientos de la diplomatura en la práctica diaria"
        ]
      }
    ]
  }
];

const meses = {
  'enero': 'ENE', 'febrero': 'FEB', 'marzo': 'MAR', 'abril': 'ABR',
  'mayo': 'MAY', 'junio': 'JUN', 'julio': 'JUL', 'agosto': 'AGO',
  'septiembre': 'SEP', 'octubre': 'OCT', 'noviembre': 'NOV', 'diciembre': 'DIC'
};

function formatFecha(fecha) {
  return fecha.replace(/^(\w+)$/, (m) => meses[m.toLowerCase()] || m)
              .replace(/(\d+)\s+(\w+)/g, (_, d, m) => `${d} ${meses[m.toLowerCase()] || m}`);
}

function formatFechas(bloques) {
  const parsed = bloques.map(b => {
    const match = b.fecha.match(/(\d+)\s+(\w+)/);
    if (match) return { dia: match[1], mes: meses[match[2].toLowerCase()] || match[2] };
    return { dia: b.fecha, mes: '' };
  });
  return parsed.map((f, i) => {
    const next = parsed[i + 1];
    if (next && next.mes === f.mes) return f.dia;
    return `${f.dia} ${f.mes}`;
  }).join(' / ');
}

function renderModulos() {
  const container = document.getElementById('modulos-container');
  if (!container) return;

  container.innerHTML = modulos.map((mod, modIdx) => {
    const bloquesCount = mod.bloques.length;
    const fechas = formatFechas(mod.bloques);
    const bloquesLabel = bloquesCount === 1 ? '1 bloque' : `${bloquesCount} bloques`;
    const meta = `<span>${bloquesLabel}</span><span>${fechas}</span>`;

    const bloquesHTML = mod.bloques.map((bloque, bIdx) => {
      const expanded = modIdx === 0 && bIdx === 0;
      const chevron = expanded ? 'fa-chevron-up' : 'fa-chevron-down';
      const hiddenAttr = expanded ? '' : ' hidden';
      const asincHTML = bloque.asincHS
        ? `<span><i class="fa-light fa-book"></i> Asincónico: ${bloque.asincHS} HS</span>`
        : '';

      return `
                        <div class="bloque-item">
                          <button class="bloque-header" aria-expanded="${expanded}" onclick="toggleBloque(this)">
                            <span class="bloque-badge"><span class="d-none d-sm-inline">Bloque </span><span class="d-inline d-sm-none">BLQ </span>${bloque.num}</span>
                            <span class="bloque-titulo">${bloque.titulo}</span>
                            <i class="fa-light ${chevron} bloque-chevron"></i>
                          </button>
                          <div class="bloque-body"${hiddenAttr}>
                            <div class="bloque-body-inner">
                            <div class="bloque-meta">
                              <span><i class="fa-light fa-calendar"></i> ${bloque.fecha}</span>
                              <span><i class="fa-light fa-user"></i> ${bloque.docente}</span>
                              <span><i class="fa-light fa-clock"></i> Clase: ${bloque.claseHS} HS</span>
                              ${asincHTML}
                            </div>
                            <p class="bloque-tematica-title">Temáticas</p>
                            <ul class="bloque-tematica-list">
                              ${bloque.tematicas.map(t => `<li>${t}</li>`).join('\n                              ')}
                            </ul>
                            </div>
                          </div>
                        </div>`;
    }).join('\n');

    return `
              <div class="col-12 col-md-6 col-lg-4">
              <div class="modulo-item">
                <div class="modulo-header" aria-expanded="true">
                  <span class="display-4">${mod.num}</span>
                  <div class="modulo-info">
                    <span class="modulo-titulo">${mod.titulo}</span>
                    <span class="modulo-meta">${meta}</span>
                  </div>
                </div>
                <div class="modulo-body">
                  ${bloquesHTML}
                </div>
              </div>
              </div>`;
  }).join('\n');
}

document.addEventListener('DOMContentLoaded', renderModulos);
