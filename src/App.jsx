import { useState } from "react";

const S = {
  bg: "#0d1117",
  bgCard: "#161b22",
  bgCard2: "#1c2128",
  border: "#30363d",
  text: "#e6edf3",
  textMuted: "#7d8590",
  textDim: "#484f58",
  blue: "#58a6ff",
  blueD: "#1f6feb",
  violet: "#a371f7",
  green: "#3fb950",
  greenBg: "#0d2519",
  red: "#f85149",
  redBg: "#2d1317",
  yellow: "#d29922",
  orange: "#e3b341",
  cyan: "#39c5c5",
  pink: "#f778ba",
};

const MODS = [
  {
    id: "M1",
    title: "1. Generalidades",
    color: S.blue,
    secs: [
      {
        t: "Concepto y elementos",
        v: `Los medios de impugnacion son acciones destinadas a obtener el saneamiento de la incorreccion de un acto procesal, ante el mismo tribunal o el superior.

Recurso procesal: acto impugnativo que busca invalidar (vicio formal) o enmendar (injusticia) una resolucion que cause AGRAVIO.

Elementos: resolucion judicial · acto de impugnacion · tribunal a quo · tribunal ad quem · parte recurrente · nueva resolucion · agravio.`,
      },
      {
        t: "Agravio y fundamento",
        v: `El AGRAVIO es la diferencia perjudicial entre lo pedido y lo concedido, situada principalmente en la parte RESOLUTIVA. Sin agravio no hay recurso.

Fundamento: tension entre
• Inmutabilidad / certeza juridica
• Impugnabilidad / justicia`,
      },
      {
        t: "Errores y clasificacion",
        v: `• Error in procedendo: vicio del procedimiento -> remedio: casacion en la forma
• Error in iudicando: error de juzgamiento -> remedio: apelacion, casacion en el fondo

Clasificacion:
• ORDINARIOS (reposicion, apelacion): proceden por agravio generico
• EXTRAORDINARIOS (casacion, queja): requieren causales especificas y taxativas`,
      },
    ],
  },
  {
    id: "M2",
    title: "2. Aclaracion, Rectificacion o Enmienda",
    color: S.cyan,
    secs: [
      {
        t: "Concepto y objeto",
        v: `Arts. 182-185 y 190 CPC. Permite:
• Aclarar puntos oscuros o dudosos
• Salvar omisiones
• Rectificar errores de copia, referencia o calculo numerico manifiestos

Procede respecto de sentencia definitiva e interlocutoria. Es EXCEPCION al desasimiento del tribunal.`,
      },
      {
        t: "Tramitacion y efectos",
        v: `• A peticion de parte: en cualquier momento
• De oficio: dentro de 5 dias desde la notificacion de la sentencia
• Tramitacion: de plano o incidentalmente

No suspende por si sola el plazo de apelacion.
Compatible con otros recursos.
El fallo es apelable cuando lo sea la sentencia aclarada.
No altera sustancialmente el juzgamiento.`,
      },
      {
        t: "Naturaleza juridica",
        v: `Naturaleza discutida: recurso o incidente dentro del proceso de formacion de la sentencia.

Postura mayoritaria: no es recurso propiamente tal. No busca invalidar ni enmendar lo decidido, solo aclarar o corregir defectos formales manifiestos.`,
      },
    ],
  },
  {
    id: "M3",
    title: "3. Reposicion",
    color: S.violet,
    secs: [
      {
        t: "Concepto y clases",
        v: `Art. 181 CPC. Permite pedir al mismo tribunal que dicto un auto o decreto que lo modifique o revoque. A quo = ad quem. Fundamento: economia procesal.

1. Ordinaria sin nuevos antecedentes
Contra autos y decretos. Plazo: 5 dias. Se resuelve de plano.

2. Ordinaria con nuevos antecedentes
Contra autos y decretos. Mientras no esten ejecutoriados. Se tramita incidentalmente.

3. Especial
Contra interlocutorias expresamente senaladas. Plazo: 3 dias.`,
      },
      {
        t: "Reposicion especial: resoluciones procedentes",
        v: `Procede contra interlocutorias que:
• Reciben la causa a prueba
• Citan a oir sentencia
• Declaran desierta o inadmisible la apelacion
• Declaran prescrita la apelacion
• Declaran inadmisible la casacion
• Rechazan casacion en el fondo por manifiesta falta de fundamento`,
      },
      {
        t: "Apelacion en subsidio",
        v: `Si procede reposicion y apelacion contra la misma resolucion, la apelacion se interpone en subsidio de la reposicion, en el mismo escrito.

Si se rechaza la reposicion: en general inapelable.
Si se acoge la reposicion: puede ser apelable si la nueva resolucion lo admite.`,
      },
    ],
  },
  {
    id: "M4",
    title: "4. Apelacion",
    color: S.green,
    secs: [
      {
        t: "Concepto y procedencia",
        v: `Arts. 186-230 CPC. Recurso ordinario por el cual la parte agraviada solicita al superior jerarquico que enmiende conforme a derecho la resolucion del inferior. Constituye segunda instancia.

Procede contra:
• Sentencias definitivas e interlocutorias de primera instancia, salvo norma que lo deniegue.
• Autos y decretos solo subsidiariamente de reposicion, si alteran la sustanciacion regular o recaen sobre tramites no ordenados por la ley.

No procede contra resoluciones de unica instancia, segunda instancia o declaradas inapelables.`,
      },
      {
        t: "Plazos y requisitos",
        v: `Plazos:
• 5 dias: regla general
• 10 dias: sentencia definitiva de primera instancia
• 15 dias: laudo y ordenata de particion
• 3 dias: apelacion subsidiaria en ciertos casos

Requisitos del escrito: fundamentos de hecho, fundamentos de derecho y peticiones concretas. La apelacion subsidiaria no requiere ser fundada.`,
      },
      {
        t: "Efectos de la apelacion",
        v: `• Devolutivo: efecto esencial, siempre presente. Transfiere competencia al ad quem.
• Suspensivo: efecto accidental. Suspende jurisdiccion del a quo y ejecucion de la resolucion.

Regla general: ambos efectos.
Excepcion: solo efecto devolutivo, especialmente art. 194 CPC.

Orden de no innovar: resolucion fundada del superior que suspende los efectos o cumplimiento cuando la apelacion fue concedida solo en efecto devolutivo.`,
      },
      {
        t: "Limites del tribunal ad quem",
        v: `1. Congruencia: solo puede pronunciarse sobre lo impugnado.
2. Tantum appellatum quantum devolutum: el ad quem solo conoce lo que el apelante somete a su competencia.
3. Personalidad de la apelacion: solo beneficia al apelante.
4. Prohibicion de reformatio in peius: si solo apela una parte, el superior no puede empeorar su situacion.`,
      },
    ],
  },
  {
    id: "M5",
    title: "5. Tramitacion y Recurso de Hecho",
    color: S.orange,
    secs: [
      {
        t: "Tramitacion ante el a quo",
        v: `1. Interposicion del escrito de apelacion.
2. Examen de admisibilidad formal: plazo, forma y fundamentos.
3. Resolucion que concede, deniega e indica efectos.
4. Si concede, envio de expediente o antecedentes al ad quem.`,
      },
      {
        t: "Tramitacion ante el ad quem",
        v: `1. Ingreso y certificacion.
2. Examen en cuenta.
3. Autos en relacion o dese cuenta.
4. Comparecencia de las partes.
5. Vista de la causa: relacion y alegatos.
6. Fallo.

Plazos de comparecencia:
• 5 dias: a quo y ad quem en la misma comuna
• 8 dias: comunas distintas dentro del territorio jurisdiccional
• 8 dias mas tabla: fuera del territorio del ad quem`,
      },
      {
        t: "Recurso de hecho",
        v: `Recurso extraordinario ligado a la apelacion. Se interpone directamente ante el superior.

Verdadero recurso de hecho: el a quo deniega una apelacion legalmente procedente.

Falso recurso de hecho: el a quo concede una apelacion improcedente o la concede en efecto equivocado.

En ambos puede pedirse orden de no innovar.`,
      },
    ],
  },
  {
    id: "M6",
    title: "6. Casacion en la Forma",
    color: S.red,
    secs: [
      {
        t: "Concepto y procedencia",
        v: `Arts. 764-809 CPC. Recurso extraordinario, de nulidad y de derecho estricto. No constituye instancia.

Objeto: anular sentencia dictada con omision de formalidades legales o en procedimiento viciado.

Procede contra:
• Sentencias definitivas de unica, primera o segunda instancia.
• Interlocutorias que ponen termino al juicio o hacen imposible su continuacion.
• Interlocutorias de segunda instancia dictadas sin emplazamiento o sin senalar dia para vista.`,
      },
      {
        t: "Causales art. 768 CPC",
        v: `1. Tribunal incompetente o mal integrado.
2. Juez implicado o recusacion pendiente/declarada.
3. Menor numero de votos o jueces que la ley requiere.
4. Ultra petita o extra petita.
5. Omision de requisitos del art. 170 CPC.
6. Cosa juzgada alegada oportunamente.
7. Decisiones contradictorias.
8. Apelacion desierta, prescrita o desistida.
9. Omision de tramite o diligencia esencial.`,
      },
      {
        t: "Tramites esenciales",
        v: `En primera instancia: emplazamiento de las partes, conciliacion cuando sea obligatoria, recepcion de causa a prueba, diligencias probatorias cuya omision cause indefension, agregacion de instrumentos bajo citacion y citacion a oir sentencia.

En segunda instancia: emplazamiento, inclusion en tabla, vista de la causa y prueba cuando proceda.`,
      },
      {
        t: "Preparacion, plazos y efectos",
        v: `Preparacion (art. 769): el recurrente debe haber reclamado oportunamente el vicio usando todos los recursos disponibles.

No se exige si la ley no admite recurso, el vicio ocurre en el pronunciamiento, se conocio despues o en ciertas causales de segunda instancia.

Plazos: 10 dias (SD primera instancia), 5 dias (interlocutoria primera instancia), 15 dias (unica o segunda instancia), 5 dias (minima cuantia).

Efecto: no suspende ejecucion, salvo art. 773 CPC. Puede haber casacion de oficio.`,
      },
    ],
  },
  {
    id: "M7",
    title: "7. Casacion en el Fondo",
    color: S.pink,
    secs: [
      {
        t: "Concepto y competencia",
        v: `Recurso extraordinario que busca anular sentencia dictada con infraccion de ley que haya influido sustancialmente en lo dispositivo del fallo.

Fundamento: nomofilaxis, igualdad ante la ley y uniformidad jurisprudencial.

Competencia exclusiva: Corte Suprema. No es instancia. No revisa hechos, salvo infraccion de leyes reguladoras de la prueba.`,
      },
      {
        t: "Procedencia y concepto de ley",
        v: `Procede contra sentencias definitivas o interlocutorias que ponen termino al juicio o hacen imposible su continuacion, inapelables, pronunciadas por Corte de Apelaciones o tribunal arbitral de derecho de segunda instancia.

Ley comprende: ley formal, CPR, tratados internacionales, DFL, DL y normas con rango legal.

No procede normalmente por jurisprudencia, reglamentos, actos administrativos, autos acordados ni ley extranjera como cuestion de hecho.`,
      },
      {
        t: "Infraccion de ley e influencia sustancial",
        v: `Formas de infraccion:
• Contravencion formal
• Erronea interpretacion
• Falsa aplicacion

Influencia sustancial: sin la infraccion, el fallo habria sido distinto. El escrito debe expresar errores de derecho y el modo en que influyen en lo dispositivo.`,
      },
      {
        t: "Plazos, fianza y sentencias",
        v: `Plazos: 15 dias regla general, 5 dias minima cuantia, plazo convenido en arbitraje.

Efecto: no suspende ejecucion, salvo art. 773 y fianza de resultas.

Si se acoge: sentencia de casacion y sentencia de reemplazo, manteniendo los hechos fijados en la instancia salvo excepcion probatoria.`,
      },
    ],
  },
  {
    id: "M8",
    title: "8. Queja y Nulidad Procesal",
    color: "#56d364",
    secs: [
      {
        t: "Recurso de queja",
        v: `COT arts. 545, 548 y 549. Finalidad exclusiva: corregir faltas o abusos graves en la dictacion de resoluciones jurisdiccionales.

Caracteristicas: extraordinario, disciplinario, no constituye instancia, se interpone directamente ante el superior contra el juez que dicto la resolucion.

Procede contra sentencia definitiva o interlocutoria que ponga termino al juicio o haga imposible su continuacion, siempre que no sea susceptible de recurso ordinario o extraordinario.

Excepcion: arbitros arbitradores, donde puede coexistir con casacion en la forma.`,
      },
      {
        t: "Tramitacion del recurso de queja",
        v: `Plazo: 5 dias habiles desde notificacion, aumentable por tabla, con maximo de 15 dias habiles.

Escrito: individualizar jueces, proceso, resolucion, fecha, foja y acompanar certificado.

Efecto: no suspende cumplimiento, salvo orden de no innovar. La ONI puede pedirse al interponer o durante la tramitacion y radica el recurso en la sala que la concede.`,
      },
      {
        t: "Nulidad procesal",
        v: `Sancion de ineficacia de los actos procesales viciados.

Principios:
• Solo puede alegarse dentro del proceso.
• Solo la parte inocente puede alegarla.
• Requiere declaracion judicial.
• Trascendencia: no hay nulidad sin perjuicio reparable solo con la nulidad.
• Convalidacion expresa o tacita.
• Efectos extensivos posibles.
• Conservacion de actos no dependientes del viciado.`,
      },
      {
        t: "Medios e incidentes de nulidad",
        v: `Medios directos: nulidad de oficio, incidente ordinario, incidentes especiales y casacion en la forma.

Medios indirectos: reposicion, apelacion, casacion en el fondo, revision y queja.

Incidente ordinario (art. 83 CPC): plazo de 5 dias desde conocimiento del vicio, salvo incompetencia absoluta.

Incidentes especiales: art. 55 nulidad de notificacion; art. 79 fuerza mayor; art. 80 falta de emplazamiento.`,
      },
    ],
  },
];

const FC = [
  { cat: "G", q: "¿Qué es un recurso procesal?", a: "Acto impugnativo que busca invalidar (vicio formal) o enmendar (injusticia) una resolución que cause agravio. Elementos: resolución, impugnación, a quo, ad quem, recurrente, nueva resolución y agravio." },
  { cat: "G", q: "¿Qué es el agravio?", a: "Diferencia perjudicial entre lo pedido y lo concedido, situada en lo RESOLUTIVO de la sentencia. Sin agravio no existe recurso procedente." },
  { cat: "G", q: "Error in procedendo vs. error in iudicando", a: "In procedendo: vicio del procedimiento → remedio: casación en la forma. In iudicando: error de juzgamiento → remedio: apelación, casación en el fondo." },
  { cat: "G", q: "Recursos ordinarios vs. extraordinarios", a: "Ordinarios (reposición, apelación): proceden por agravio genérico. Extraordinarios (casación, queja): requieren causales específicas y taxativas." },
  { cat: "A", q: "¿Qué permite la ARE? Arts. 182-185 CPC", a: "Aclarar puntos oscuros/dudosos, salvar omisiones y rectificar errores de copia, referencia o cálculo numérico manifiestos. Procede respecto de SD e interlocutorias." },
  { cat: "A", q: "¿Cuándo actúa el juez de oficio en la ARE?", a: "Dentro de los 5 días desde la notificación de la sentencia. A petición de parte puede pedirse en cualquier momento." },
  { cat: "A", q: "¿Suspende la ARE el plazo de apelación?", a: "NO. La ARE no suspende por sí sola el plazo de apelación. Es compatible con otros recursos y no altera sustancialmente el juzgamiento." },
  { cat: "A", q: "¿Cuál es la naturaleza jurídica de la ARE?", a: "Naturaleza discutida. Postura mayoritaria: NO es recurso propiamente tal, sino incidente dentro del proceso de formación de la sentencia. No cambia lo sustancialmente resuelto." },
  { cat: "R", q: "¿Qué es la reposición? Art. 181 CPC", a: "Medio para pedir al mismo tribunal que dictó un auto o decreto que lo modifique o revoque. A quo = ad quem. Fundamento: economía procesal y celeridad." },
  { cat: "R", q: "Plazo reposición ordinaria sin nuevos antecedentes", a: "5 días desde la notificación del auto o decreto. Se resuelve DE PLANO por el tribunal." },
  { cat: "R", q: "Reposición con nuevos antecedentes — plazo y tramitación", a: "Mientras el auto o decreto NO esté ejecutoriado. Se tramita INCIDENTALMENTE (no de plano)." },
  { cat: "R", q: "Plazo de la reposición especial contra interlocutorias", a: "3 días. Procede contra: resolución que recibe la causa a prueba, que cita a oír sentencia, que declara desierta/inadmisible/prescrita la apelación, que declara inadmisible o rechaza por manifiesta falta de fundamento la casación." },
  { cat: "R", q: "¿Cuándo se interpone apelación en subsidio?", a: "Cuando la resolución admite reposición y apelación: la apelación se deduce EN SUBSIDIO de la reposición, en el mismo escrito." },
  { cat: "AP", q: "¿Qué es la apelación? Arts. 186-230 CPC", a: "Recurso ordinario por el cual la parte agraviada solicita al superior jerárquico que enmiende conforme a derecho la resolución del inferior. Constituye segunda instancia." },
  { cat: "AP", q: "Plazos de la apelación", a: "5 días (regla general) · 10 días (SD de 1ª instancia) · 15 días (laudo y ordenata de partición) · 3 días (apelación subsidiaria en ciertos casos)." },
  { cat: "AP", q: "Requisitos del escrito de apelación", a: "Fundamentos de hecho + fundamentos de derecho + peticiones concretas. La apelación subsidiaria no requiere ser fundada." },
  { cat: "AP", q: "Efecto devolutivo", a: "Efecto ESENCIAL, siempre presente. Transfiere la competencia al ad quem para conocer del recurso." },
  { cat: "AP", q: "Efecto suspensivo", a: "Efecto ACCIDENTAL. Suspende la jurisdicción del a quo y la ejecución de la resolución mientras tramita la apelación." },
  { cat: "AP", q: "Regla general y excepción en efectos de la apelación", a: "Regla general: AMBOS efectos. Excepción: solo efecto devolutivo → art. 194 CPC (ej: SD condenatoria en juicio ejecutivo, resoluciones en alimentos)." },
  { cat: "AP", q: "¿Qué es el “tantum appellatum quantum devolutum”?", a: "El ad quem SOLO puede pronunciarse sobre lo que el apelante somete a su conocimiento. No puede ir más allá ni pronunciarse sobre lo no apelado." },
  { cat: "AP", q: "¿Qué es la prohibición de reformatio in peius?", a: "Si solo apela una parte, el superior NO puede empeorar su situación respecto de la sentencia de primera instancia." },
  { cat: "AP", q: "¿Qué es la orden de no innovar (ONI)?", a: "Resolución fundada del superior que suspende los efectos o el cumplimiento de la resolución apelada, cuando la apelación fue concedida SOLO en efecto devolutivo." },
  { cat: "AP", q: "Plazos de comparecencia en 2ª instancia", a: "5 días: a quo y ad quem en la misma comuna. 8 días: comunas distintas dentro del territorio. 8 días más tabla: fuera del territorio del ad quem." },
  { cat: "H", q: "¿Qué es el verdadero recurso de hecho?", a: "El a quo DENIEGA una apelación legalmente procedente. El superior puede admitir la apelación y ordenar remitir los antecedentes." },
  { cat: "H", q: "¿Qué es el falso recurso de hecho?", a: "El a quo CONCEDE una apelación improcedente O la concede en efecto equivocado. El superior puede dejar sin efecto la concesión o corregir el efecto." },
  { cat: "CF", q: "¿Qué es la casación en la forma?", a: "Recurso extraordinario de NULIDAD y de derecho estricto. Busca anular sentencias por vicio de procedimiento (error in procedendo). No constituye instancia." },
  { cat: "CF", q: "¿Cuántas causales tiene el art. 768 CPC?", a: "9 causales TAXATIVAS: incompetencia/mala integración · implicancia/recusación · menor quórum · ultra/extra petita · omisión art. 170 · cosa juzgada · decisiones contradictorias · apelación desierta · trámite esencial." },
  { cat: "CF", q: "¿Qué son los trámites esenciales?", a: "Actuaciones cuya omisión funda la casación en la forma. En 1ª instancia: emplazamiento, conciliación, recepción a prueba, diligencias probatorias con indefensión, agregación de instrumentos y citación a oír sentencia." },
  { cat: "CF", q: "¿Qué es la preparación de la casación? Art. 769 CPC", a: "Requisito de admisibilidad: el recurrente debe haber reclamado oportunamente el vicio durante el proceso, usando todos los recursos disponibles. Sin preparación → inadmisible." },
  { cat: "CF", q: "Plazos para la casación en la forma", a: "10 días (SD 1ª instancia) · 5 días (interlocutoria 1ª instancia) · 15 días (única o 2ª instancia) · 5 días (mínima cuantía)." },
  { cat: "CF", q: "Efecto de la casación en la forma sobre la ejecución", a: "NO suspende la ejecución, salvo art. 773 CPC. CASACIÓN DE OFICIO: el superior puede invalidar cuando advierte un vicio manifiesto conociendo por apelación u otro medio." },
  { cat: "CD", q: "¿Qué es la casación en el fondo?", a: "Recurso extraordinario que busca anular sentencias por infracción de ley que haya influido sustancialmente en lo dispositivo. Competencia exclusiva de la Corte Suprema. No es instancia." },
  { cat: "CD", q: "¿Qué significa nomofilaxis?", a: "Función de velar por la correcta observancia de la ley, asegurando igualdad ante la ley y uniformidad jurisprudencial. Es el fundamento principal de la casación en el fondo." },
  { cat: "CD", q: "¿Contra qué procede la casación en el fondo?", a: "SD o interlocutorias que ponen término al juicio o hacen imposible su continuación, INAPELABLES, pronunciadas por CA o tribunal arbitral de derecho de 2ª instancia." },
  { cat: "CD", q: "¿Qué abarca “ley” en la casación en el fondo?", a: "Ley formal, CPR, tratados internacionales, DFL, DL y normas con rango legal. NO procede por jurisprudencia, reglamentos, actos administrativos, autos acordados ni ley extranjera como cuestión de hecho." },
  { cat: "CD", q: "¿Qué es la influencia sustancial en lo dispositivo?", a: "Sin la infracción, el fallo habría sido DISTINTO. Es requisito esencial: debe existir nexo causal entre el error de derecho y el resultado del fallo." },
  { cat: "CD", q: "Plazos para la casación en el fondo", a: "15 días desde notificación (regla general) · 5 días (mínima cuantía) · plazo convenido (arbitraje)." },
  { cat: "CD", q: "¿Qué es la fianza de resultas?", a: "Mecanismo por el cual el ejecutado solicita la suspensión del cumplimiento de la sentencia durante la tramitación de la casación, rindiendo caución." },
  { cat: "CD", q: "Sentencia de casación vs. sentencia de reemplazo", a: "Sentencia de CASACIÓN: anula la sentencia impugnada. Sentencia de REEMPLAZO: la CS la dicta en su lugar, manteniendo los hechos fijados en la instancia, salvo leyes reguladoras de la prueba." },
  { cat: "Q", q: "¿Qué es el recurso de queja?", a: "Recurso extraordinario DISCIPLINARIO (COT arts. 545, 548, 549). Finalidad exclusiva: corregir faltas o abusos graves en la dictación de resoluciones jurisdiccionales. No constituye instancia." },
  { cat: "Q", q: "¿Contra qué procede el recurso de queja?", a: "SD o interlocutoria que ponga término al juicio o haga imposible su continuación, que NO sea susceptible de recurso ordinario o extraordinario. Excepción: árbitros arbitradores." },
  { cat: "Q", q: "Plazo del recurso de queja", a: "5 días hábiles desde la notificación · aumentable por tabla · máximo 15 días hábiles." },
  { cat: "N", q: "Principio de trascendencia en la nulidad procesal", a: "No hay nulidad sin perjuicio: el vicio debe haber causado un perjuicio real reparable SOLO con la nulidad. Sin perjuicio efectivo, no procede la nulidad." },
  { cat: "N", q: "¿Qué es la convalidación de la nulidad?", a: "La nulidad se sana expresa (la parte la confirma) o tácitamente (la parte conoce el vicio y no lo alega oportunamente). Convalidada, no puede alegarse." },
  { cat: "N", q: "Incidente ordinario de nulidad — art. 83 CPC", a: "Procede cuando la ley lo dispone o existe vicio que causa perjuicio reparable solo con la nulidad. Plazo: 5 días desde conocimiento del vicio, salvo incompetencia absoluta." },
  { cat: "N", q: "Nulidad por falta de emplazamiento — art. 80 CPC", a: "Procede cuando el demandado no fue emplazado y no pudo ejercer su defensa. Puede alegarse en los términos del art. 80 CPC si demuestra falta de conocimiento del proceso." },
  { cat: "N", q: "Diferencia nulidad procesal vs. casación en la forma", a: "Nulidad/incidente art. 83: dentro del proceso, ante el mismo tribunal, antes de sentencia firme. Casación en la forma: post-sentencia, ante el superior, por causales taxativas del art. 768." },
];

const QZ = [
  { q: "¿En qué parte de la sentencia se sitúa principalmente el agravio?", opts: ["En los considerandos", "En la parte expositiva", "En lo resolutivo", "En los fundamentos de derecho"], correct: 2, exp: "El agravio se sitúa en lo resolutivo: allí el tribunal decide sobre las pretensiones y se produce la diferencia perjudicial entre lo pedido y lo concedido." },
  { q: "El error in procedendo es remediado principalmente por:", opts: ["La apelación", "La casación en el fondo", "La casación en la forma", "El recurso de queja"], correct: 2, exp: "La casación en la forma remedia los vicios del procedimiento, que afectan la validez formal del proceso o de la sentencia." },
  { q: "¿Cuál de los siguientes NO es un recurso ordinario?", opts: ["Reposición", "Apelación", "Casación en la forma", "Aclaración, rectificación o enmienda"], correct: 2, exp: "La casación en la forma es un recurso extraordinario que requiere causales específicas y taxativas del art. 768 CPC." },
  { q: "¿En qué plazo puede el juez actuar de oficio en la ARE?", opts: ["3 días desde la dictación", "5 días desde la notificación", "10 días desde la notificación", "En cualquier momento"], correct: 1, exp: "El art. 182 CPC permite al tribunal actuar de oficio en la ARE dentro de los 5 días desde la notificación de la sentencia." },
  { q: "La ARE no puede:", opts: ["Aclarar puntos oscuros", "Salvar omisiones", "Alterar sustancialmente lo resuelto", "Rectificar errores de cálculo manifiestos"], correct: 2, exp: "La ARE puede aclarar, corregir y salvar omisiones, pero no puede alterar lo sustancialmente decidido en el fallo." },
  { q: "¿Contra qué resoluciones procede directamente la reposición ordinaria?", opts: ["Sentencias definitivas", "Sentencias interlocutorias", "Autos y decretos", "Todas las resoluciones"], correct: 2, exp: "La reposición ordinaria procede directamente contra autos y decretos. Solo excepcionalmente contra interlocutorias específicamente señaladas." },
  { q: "La reposición ordinaria sin nuevos antecedentes debe interponerse dentro de:", opts: ["3 días", "5 días", "10 días", "15 días"], correct: 1, exp: "Art. 181 CPC: 5 días. Se resuelve de plano por el mismo tribunal." },
  { q: "¿Cuándo debe interponerse la apelación de una sentencia definitiva de primera instancia?", opts: ["5 días", "10 días", "15 días", "20 días"], correct: 1, exp: "El art. 189 CPC establece un plazo especial de 10 días para apelar sentencias definitivas de primera instancia." },
  { q: "¿Cuál es el efecto esencial de la apelación?", opts: ["Efecto suspensivo", "Efecto devolutivo", "Ambos efectos necesariamente", "Solo devolutivo siempre"], correct: 1, exp: "El efecto devolutivo es el efecto esencial: siempre presente, transfiere la competencia al tribunal superior." },
  { q: "La prohibición de reformatio in peius significa que:", opts: ["El ad quem no puede modificar la sentencia", "El superior no puede mejorar al apelante", "El superior no puede empeorar la situación del único apelante", "La apelación no puede desistirse"], correct: 2, exp: "Si solo una parte apela, el tribunal superior no puede empeorar su situación respecto de la sentencia de primera instancia." },
  { q: "¿Cuándo procede la orden de no innovar?", opts: ["Siempre que se apela una sentencia", "Solo en casación", "Cuando la apelación fue concedida solo en efecto devolutivo", "Cuando el ad quem lo estima conveniente"], correct: 2, exp: "La ONI procede cuando la apelación fue concedida solo en efecto devolutivo, pues la sentencia puede cumplirse mientras tramita el recurso." },
  { q: "El “tantum appellatum quantum devolutum” implica que:", opts: ["El ad quem conoce de todo el juicio", "El ad quem solo conoce lo que el apelante somete", "El apelado puede ampliar el objeto del recurso", "El superior resuelve puntos no apelados de oficio"], correct: 1, exp: "El ad quem solo puede conocer y resolver sobre lo que fue materia de la apelación." },
  { q: "Los plazos de comparecencia en segunda instancia son:", opts: ["3, 5 y 8 días", "5, 8 y 8 días más tabla", "5, 10 y 15 días", "3, 8 y 15 días"], correct: 1, exp: "5 días si a quo y ad quem están en la misma comuna; 8 días si están en comunas distintas dentro del territorio; 8 días más tabla si está fuera del territorio." },
  { q: "¿Cuándo procede el verdadero recurso de hecho?", opts: ["Cuando se concede en efecto equivocado", "Cuando se concede una apelación improcedente", "Cuando se deniega una apelación legalmente procedente", "Cuando la apelación es extemporánea"], correct: 2, exp: "El verdadero recurso de hecho procede cuando el a quo deniega indebidamente una apelación que legalmente debía concederse." },
  { q: "El falso recurso de hecho procede cuando:", opts: ["Se deniega una apelación procedente", "Se concede apelación improcedente o en efecto equivocado", "Se declara desierta la apelación", "No comparece el apelante"], correct: 1, exp: "Cubre la concesión de apelación improcedente o la concesión en efecto equivocado." },
  { q: "¿Cuántas causales contempla el art. 768 CPC?", opts: ["6", "7", "8", "9"], correct: 3, exp: "El art. 768 CPC contempla 9 causales taxativas de casación en la forma." },
  { q: "¿Qué implica “preparar” la casación en la forma?", opts: ["Presentar un escrito previo al recurso", "Reclamar oportunamente el vicio dentro del proceso", "Acompañar documentos al recurso", "Notificar previamente al tribunal"], correct: 1, exp: "La preparación exige haber reclamado oportunamente el vicio usando todos los recursos disponibles." },
  { q: "¿Cuál es el plazo para la casación en la forma en segunda instancia?", opts: ["5 días", "10 días", "15 días", "20 días"], correct: 2, exp: "Cuando se trata de sentencias de única o segunda instancia, el plazo es de 15 días desde la notificación." },
  { q: "¿Cuándo procede la casación de oficio?", opts: ["Cuando la parte no interpuso recurso", "Cuando el superior advierte un vicio manifiesto conociendo por apelación u otro medio", "Siempre que haya un vicio de procedimiento", "Cuando la CS lo estima conveniente"], correct: 1, exp: "Procede cuando el tribunal superior, conociendo un asunto por apelación u otro medio, advierte un vicio manifiesto que amerita nulidad." },
  { q: "¿Qué tribunal tiene competencia exclusiva en la casación en el fondo?", opts: ["Corte de Apelaciones", "Cualquier tribunal superior", "Corte Suprema", "Juzgado de Letras"], correct: 2, exp: "La casación en el fondo es de competencia exclusiva de la Corte Suprema." },
  { q: "¿Revisa la Corte Suprema los hechos en la casación en el fondo?", opts: ["Sí, siempre", "No, salvo infracción de leyes reguladoras de la prueba", "Solo en casos de arbitraje", "Sí, si hay error manifiesto"], correct: 1, exp: "La casación en el fondo no es instancia y no revisa hechos, salvo infracción de leyes reguladoras de la prueba." },
  { q: "La “nomofilaxis” se refiere a:", opts: ["La revisión de los hechos por la CS", "Uniformar jurisprudencia y conservar la correcta aplicación de la ley", "El control de admisibilidad de los recursos", "La anulación de sentencias viciadas de procedimiento"], correct: 1, exp: "Nomofilaxis es velar por la correcta observancia de la ley, asegurando igualdad y uniformidad jurisprudencial." },
  { q: "¿Qué es la sentencia de reemplazo?", opts: ["La sentencia que anula el proceso", "La sentencia que el tribunal a quo dicta nuevamente", "La sentencia que la CS dicta en lugar de la casada", "La nueva sentencia de la CA tras el reenvío"], correct: 2, exp: "Cuando la CS acoge la casación en el fondo, dicta sentencia de reemplazo manteniendo los hechos fijados en la instancia, salvo excepciones probatorias." },
  { q: "¿Cuál es la finalidad exclusiva del recurso de queja?", opts: ["Revisar el fondo del asunto", "Constituir segunda instancia", "Corregir faltas o abusos graves en la dictación de resoluciones", "Anular resoluciones por vicio de procedimiento"], correct: 2, exp: "El recurso de queja tiene por finalidad exclusiva corregir faltas o abusos graves cometidos en la dictación de resoluciones jurisdiccionales." },
  { q: "¿Cuál es el plazo máximo del recurso de queja?", opts: ["5 días hábiles", "10 días hábiles", "15 días hábiles", "15 días corridos"], correct: 2, exp: "El plazo base es de 5 días hábiles desde la notificación, aumentable según tabla, con máximo de 15 días hábiles." },
  { q: "El principio de trascendencia en la nulidad procesal significa:", opts: ["Toda nulidad es trascendente", "No hay nulidad sin perjuicio reparable solo con la nulidad", "La nulidad afecta a todos los actos del proceso", "La nulidad siempre la declara de oficio el tribunal"], correct: 1, exp: "No hay nulidad sin perjuicio. El vicio debe causar perjuicio real que solo pueda repararse mediante nulidad." },
  { q: "¿En qué plazo debe alegarse el incidente ordinario de nulidad?", opts: ["En cualquier momento", "5 días desde conocimiento del vicio", "10 días desde notificación", "Antes de la sentencia definitiva siempre"], correct: 1, exp: "Art. 83 CPC: 5 días desde que la parte tomó conocimiento del vicio, salvo incompetencia absoluta." },
  { q: "La convalidación tácita de la nulidad se produce cuando:", opts: ["El tribunal la declara válida", "La parte conoce el vicio y no lo alega en la primera oportunidad", "Las partes acuerdan mantener el acto", "El actor y el demandado son conformes"], correct: 1, exp: "La convalidación tácita ocurre cuando la parte conocía el vicio pero no lo alegó oportunamente." },
  { q: "¿La ARE suspende el plazo de apelación?", opts: ["Sí, siempre", "No, nunca", "Solo si el juez así lo dispone", "Solo respecto de la parte que la solicitó"], correct: 1, exp: "La ARE no suspende por sí sola el plazo de apelación." },
  { q: "¿Contra qué procede el recurso de queja principalmente?", opts: ["Contra toda sentencia definitiva", "Contra SD o interlocutoria sin recurso ordinario ni extraordinario disponible", "Siempre que hay falta o abuso grave", "Contra todo acto procesal del tribunal"], correct: 1, exp: "Procede respecto de sentencias definitivas o interlocutorias que pongan término al juicio o hagan imposible su continuación, siempre que no sean susceptibles de otro recurso." },
];

const ORAL = [
  {
    q: "Que es un recurso procesal? Defina, clasifique y explique el rol del agravio.",
    struct: ["Definicion", "Elementos", "Agravio", "Clasificacion", "Errores que corrige"],
    ans: `Un recurso procesal es el acto impugnativo que la parte agraviada deduce para obtener que una resolucion judicial sea invalidada o enmendada. Sus elementos son resolucion, acto de impugnacion, tribunal a quo, tribunal ad quem, recurrente, nueva resolucion y agravio.

El agravio es central: sin perjuicio entre lo pedido y lo concedido no hay interes recursivo.

Los recursos pueden ser ordinarios, si proceden por agravio generico, o extraordinarios, si requieren causales especificas.`,
    errs: ["Omitir el agravio", "Confundir medio de impugnacion con recurso", "No distinguir ordinarios y extraordinarios"],
  },
  {
    q: "Diferencie casacion en la forma y casacion en el fondo.",
    struct: ["Objeto", "Causal", "Tribunal", "Hechos", "Efecto del fallo"],
    ans: `La casacion en la forma anula por vicios de procedimiento o de sentencia, se funda en causales taxativas del art. 768 CPC y conoce el superior jerarquico.

La casacion en el fondo anula por infraccion de ley con influencia sustancial en lo dispositivo del fallo y es de competencia exclusiva de la Corte Suprema.

Ambas son extraordinarias, de derecho estricto y no constituyen instancia.`,
    errs: ["Decir que ambas revisan hechos", "Omitir la influencia sustancial", "Confundir tribunal competente"],
  },
  {
    q: "Explique los efectos de la apelacion y la orden de no innovar.",
    struct: ["Efecto devolutivo", "Efecto suspensivo", "Regla general", "ONI"],
    ans: `El efecto devolutivo es esencial: entrega conocimiento al tribunal superior. El suspensivo es accidental: paraliza la competencia del inferior y la ejecucion.

La regla general es que la apelacion se conceda en ambos efectos; en ciertos casos procede solo en efecto devolutivo. La ONI permite suspender los efectos o cumplimiento mientras se conoce el recurso.`,
    errs: ["Invertir devolutivo y suspensivo", "Olvidar que el devolutivo es esencial", "No explicar la ONI"],
  },
  {
    q: "Explique verdadero y falso recurso de hecho.",
    struct: ["Concepto comun", "Verdadero", "Falso", "ONI"],
    ans: `El recurso de hecho controla la concesion o denegacion de la apelacion.

Verdadero: el tribunal inferior deniega una apelacion que legalmente debia concederse.

Falso: el tribunal inferior concede una apelacion improcedente o en efecto equivocado.

Se interpone directamente ante el superior y puede pedirse orden de no innovar.`,
    errs: ["Invertir verdadero y falso", "Olvidar el efecto equivocado", "Decir que se interpone ante el a quo"],
  },
  {
    q: "Explique la preparacion de la casacion en la forma.",
    struct: ["Concepto", "Fundamento", "Regla", "Excepciones"],
    ans: `Preparar la casacion en la forma significa reclamar oportunamente el vicio durante el proceso, usando todos los recursos disponibles. Es requisito de admisibilidad.

No se exige cuando la ley no admite recurso, cuando el vicio ocurre en el pronunciamiento, cuando se conocio despues o en ciertas causales de segunda instancia.`,
    errs: ["Confundir preparacion con redaccion", "No mencionar inadmisibilidad", "Olvidar excepciones"],
  },
  {
    q: "Que es la nulidad procesal y cuales son sus principios?",
    struct: ["Concepto", "Trascendencia", "Convalidacion", "Declaracion judicial", "Efectos"],
    ans: `La nulidad procesal es la sancion de ineficacia de los actos procesales viciados. Requiere declaracion judicial, solo puede alegarla la parte inocente y debe hacerse dentro del proceso.

Rige el principio de trascendencia: no hay nulidad sin perjuicio reparable solo con nulidad. Tambien rige la convalidacion expresa o tacita y la conservacion de actos no dependientes del vicio.`,
    errs: ["Decir que opera de pleno derecho", "Omitir perjuicio", "Confundir con nulidad civil"],
  },
  {
    q: "Compare queja y casacion en la forma.",
    struct: ["Naturaleza", "Finalidad", "Procedencia", "Causales", "Plazos"],
    ans: `La queja es extraordinaria y disciplinaria; busca corregir falta o abuso grave en la dictacion de resoluciones y procede si no hay otro recurso disponible.

La casacion en la forma es extraordinaria de nulidad; busca invalidar por causales taxativas del art. 768 CPC.

La queja tiene plazo de 5 dias habiles, aumentable con maximo de 15; la casacion se rige por 10, 5 o 15 dias segun el caso.`,
    errs: ["Confundir finalidad disciplinaria con nulidad", "Olvidar inexistencia de otro recurso en queja", "No mencionar causales taxativas"],
  },
  {
    q: "Explique infraccion de ley e influencia sustancial en casacion en el fondo.",
    struct: ["Infraccion", "Formas", "Influencia", "Consecuencia"],
    ans: `La casacion en el fondo exige infraccion de ley y que esa infraccion influya sustancialmente en lo dispositivo del fallo.

La infraccion puede consistir en contravencion formal, errada interpretacion o falsa aplicacion.

La influencia sustancial significa que, sin el error de derecho, el fallo habria sido distinto.`,
    errs: ["Omitir nexo causal", "Confundir con causal de forma", "Decir que basta cualquier error de derecho"],
  },
];

const COMPS = [
  {
    title: "Reposicion vs. Apelacion",
    headers: ["Aspecto", "Reposicion", "Apelacion"],
    rows: [
      ["Naturaleza", "Ordinario", "Ordinario"],
      ["Tribunal", "Mismo tribunal", "Superior jerarquico"],
      ["Resoluciones", "Autos y decretos; excepcionalmente interlocutorias", "SD e interlocutorias de primera instancia"],
      ["Plazo", "5 dias / 3 dias especial", "5 dias / 10 dias SD"],
      ["Instancia", "No", "Si, segunda instancia"],
    ],
  },
  {
    title: "Verdadero vs. Falso Recurso de Hecho",
    headers: ["Aspecto", "Verdadero", "Falso"],
    rows: [
      ["Hipotesis", "A quo deniega apelacion procedente", "A quo concede apelacion improcedente o en efecto equivocado"],
      ["Titular", "Apelante perjudicado", "Parte perjudicada por concesion"],
      ["Resultado", "Se concede apelacion", "Se deja sin efecto o corrige efecto"],
      ["ONI", "Puede pedirse", "Puede pedirse"],
    ],
  },
  {
    title: "Casacion Forma vs. Fondo",
    headers: ["Aspecto", "Forma", "Fondo"],
    rows: [
      ["Objeto", "Vicio procesal", "Infraccion de ley"],
      ["Causal", "9 taxativas art. 768", "Generica: infraccion de ley influyente"],
      ["Tribunal", "Superior jerarquico", "Corte Suprema"],
      ["Hechos", "No revisa", "No revisa, salvo prueba"],
      ["Resultado", "Reenvio o reemplazo", "Casacion y reemplazo"],
    ],
  },
  {
    title: "Apelacion vs. Casacion",
    headers: ["Aspecto", "Apelacion", "Casacion"],
    rows: [
      ["Naturaleza", "Ordinaria", "Extraordinaria"],
      ["Instancia", "Si", "No"],
      ["Causal", "Agravio", "Causales especificas"],
      ["Revision", "Hechos y derecho", "Derecho"],
      ["Efecto", "Suspende por regla general", "No suspende por regla general"],
    ],
  },
  {
    title: "Queja vs. Casacion",
    headers: ["Aspecto", "Queja", "Casacion"],
    rows: [
      ["Naturaleza", "Disciplinaria", "Nulidad"],
      ["Finalidad", "Falta o abuso grave", "Invalidar sentencia"],
      ["Procedencia", "Sin otro recurso disponible", "Segun tipo y causal"],
      ["Normas", "COT 545, 548, 549", "CPC 764-809"],
    ],
  },
  {
    title: "Nulidad Procesal vs. Incidente vs. Casacion Forma",
    headers: ["Aspecto", "Nulidad", "Incidente", "Casacion Forma"],
    rows: [
      ["Naturaleza", "Sancion", "Incidente", "Recurso"],
      ["Momento", "Dentro del proceso", "Antes de firmeza", "Post sentencia"],
      ["Causal", "Vicio con perjuicio", "Art. 83 CPC", "Art. 768 CPC"],
      ["Tribunal", "El que conoce", "El que conoce", "Superior"],
    ],
  },
];

const TOPICS = [
  "Generalidades y clasificacion de recursos",
  "Agravio como requisito",
  "ARE",
  "Reposicion ordinaria",
  "Reposicion especial",
  "Apelacion: concepto",
  "Efectos de la apelacion",
  "Limites del ad quem",
  "Tramitacion de apelacion",
  "Recurso de hecho",
  "Casacion en la forma",
  "Causales art. 768",
  "Preparacion de casacion",
  "Casacion en el fondo",
  "Infraccion de ley",
  "Influencia sustancial",
  "Recurso de queja",
  "Nulidad procesal",
  "Incidentes de nulidad",
  "Comparativos",
];

function Btn({ children, onClick, style = {}, disabled = false }) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      style={{
        padding: "7px 14px",
        borderRadius: 8,
        border: `1px solid ${S.border}`,
        backgroundColor: S.bgCard2,
        color: S.text,
        cursor: disabled ? "not-allowed" : "pointer",
        opacity: disabled ? 0.45 : 1,
        fontSize: 13,
        ...style,
      }}
    >
      {children}
    </button>
  );
}

function Card({ children, style = {} }) {
  return (
    <div style={{ background: S.bgCard, border: `1px solid ${S.border}`, borderRadius: 12, padding: 16, ...style }}>
      {children}
    </div>
  );
}

function Tag({ children, color = S.blue }) {
  return (
    <span style={{ fontSize: 11, padding: "2px 8px", borderRadius: 6, background: `${color}22`, color, border: `1px solid ${color}44` }}>
      {children}
    </span>
  );
}

function Sec({ title, sub, icon, children }) {
  return (
    <div>
      <div style={{ marginBottom: 20 }}>
        <h2 style={{ color: S.text, fontSize: 22, fontWeight: 700, margin: "0 0 4px" }}>
          {icon} {title}
        </h2>
        {sub && <p style={{ color: S.textMuted, fontSize: 13, margin: 0 }}>{sub}</p>}
      </div>
      {children}
    </div>
  );
}

function Dashboard({ go }) {
  const cards = [
    { id: "modulos", l: "8 Modulos de Estudio", d: "Todos los recursos procesales civiles", c: S.blue, i: "M" },
    { id: "flash", l: "Flashcards", d: `${FC.length} tarjetas categorizadas`, c: S.violet, i: "F" },
    { id: "quiz", l: "Quiz Interactivo", d: `${QZ.length} preguntas con alternativas`, c: S.green, i: "Q" },
    { id: "oral", l: "Examen Oral", d: "8 preguntas con respuesta modelo", c: S.orange, i: "O" },
    { id: "comp", l: "Cuadros Comparativos", d: "6 comparaciones entre recursos", c: S.cyan, i: "C" },
    { id: "prog", l: "Mi Progreso", d: "20 temas para seguimiento", c: S.pink, i: "P" },
  ];

  return (
    <div>
      <div style={{ background: "linear-gradient(135deg,#0d1926,#1a1035)", border: `1px solid ${S.blueD}`, borderRadius: 16, padding: 24, marginBottom: 24 }}>
        <div style={{ fontSize: 28, fontWeight: 800, color: S.text, marginBottom: 6 }}>Recursos Civiles PUCV</div>
        <div style={{ color: "#79c0ff", fontSize: 15, marginBottom: 4 }}>Plataforma de Estudio: Recursos Procesales Civiles</div>
        <div style={{ color: S.textMuted, fontSize: 12 }}>Derecho Procesal Civil · PUCV · Preparacion Examen de Grado Oral</div>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(190px,1fr))", gap: 12, marginBottom: 20 }}>
        {cards.map((c) => (
          <button
            type="button"
            key={c.id}
            onClick={() => go(c.id)}
            style={{ textAlign: "left", padding: 16, background: S.bgCard, border: `1px solid ${S.border}`, borderLeft: `4px solid ${c.c}`, borderRadius: 12, cursor: "pointer" }}
          >
            <div style={{ width: 30, height: 30, borderRadius: 8, border: `1px solid ${c.c}66`, color: c.c, display: "grid", placeItems: "center", fontWeight: 800, marginBottom: 10 }}>{c.i}</div>
            <div style={{ color: S.text, fontWeight: 700, fontSize: 13, marginBottom: 4 }}>{c.l}</div>
            <div style={{ color: S.textMuted, fontSize: 11 }}>{c.d}</div>
          </button>
        ))}
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(130px,1fr))", gap: 10 }}>
        {[
          ["8", S.blue, "Modulos"],
          [String(FC.length), S.violet, "Flashcards"],
          [String(QZ.length), S.green, "Preguntas quiz"],
          [String(ORAL.length), S.orange, "Examen oral"],
        ].map(([n, c, l]) => (
          <Card key={l} style={{ textAlign: "center" }}>
            <div style={{ fontSize: 24, fontWeight: 800, color: c }}>{n}</div>
            <div style={{ color: S.textMuted, fontSize: 11, marginTop: 2 }}>{l}</div>
          </Card>
        ))}
      </div>
    </div>
  );
}

function Modulos() {
  const [selMod, setSelMod] = useState("M1");
  const [openSec, setOpenSec] = useState(null);
  const mod = MODS.find((m) => m.id === selMod) || MODS[0];

  return (
    <Sec title="Modulos de Estudio" sub="Selecciona un modulo y expande las secciones" icon="M">
      <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginBottom: 16 }}>
        {MODS.map((m) => (
          <button
            type="button"
            key={m.id}
            onClick={() => {
              setSelMod(m.id);
              setOpenSec(null);
            }}
            style={{
              padding: "6px 12px",
              borderRadius: 8,
              border: `1px solid ${selMod === m.id ? m.color : S.border}`,
              background: selMod === m.id ? `${m.color}22` : S.bgCard2,
              color: selMod === m.id ? m.color : S.textMuted,
              cursor: "pointer",
              fontSize: 12,
              fontWeight: selMod === m.id ? 700 : 400,
            }}
          >
            {m.id}
          </button>
        ))}
      </div>
      <div style={{ marginBottom: 12, paddingBottom: 12, borderBottom: `1px solid ${S.border}` }}>
        <span style={{ color: mod.color, fontWeight: 700, fontSize: 15 }}>{mod.title}</span>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        {mod.secs.map((s, i) => (
          <div key={s.t} style={{ background: S.bgCard, border: `1px solid ${openSec === i ? mod.color : S.border}`, borderRadius: 12, overflow: "hidden" }}>
            <button
              type="button"
              style={{ width: "100%", textAlign: "left", padding: "12px 16px", background: "none", border: "none", color: S.text, cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center", gap: 12, fontSize: 13, fontWeight: 700 }}
              onClick={() => setOpenSec(openSec === i ? null : i)}
            >
              {s.t}
              <span style={{ color: S.textMuted }}>{openSec === i ? "▲" : "▼"}</span>
            </button>
            {openSec === i && (
              <div style={{ padding: "12px 16px 16px", color: "#c9d1d9", fontSize: 13, whiteSpace: "pre-line", lineHeight: 1.75, borderTop: `1px solid ${S.border}` }}>
                {s.v}
              </div>
            )}
          </div>
        ))}
      </div>
    </Sec>
  );
}

function Flashcards() {
  const cats = ["Todas", "G", "A", "R", "AP", "H", "CF", "CD", "Q", "N"];
  const catLabels = { G: "Generalidades", A: "ARE", R: "Reposicion", AP: "Apelacion", H: "Rec. de Hecho", CF: "Casacion Forma", CD: "Casacion Fondo", Q: "Queja", N: "Nulidad" };
  const catColors = { G: S.blue, A: S.cyan, R: S.violet, AP: S.green, H: S.orange, CF: S.red, CD: S.pink, Q: "#56d364", N: S.yellow };
  const [cat, setCat] = useState("Todas");
  const [i, setI] = useState(0);
  const [flip, setFlip] = useState(false);
  const filtered = cat === "Todas" ? FC : FC.filter((c) => c.cat === cat);
  const card = filtered[Math.min(i, filtered.length - 1)];

  const go = (n) => {
    setI(Math.max(0, Math.min(filtered.length - 1, n)));
    setFlip(false);
  };

  return (
    <Sec title="Flashcards" sub={`${filtered.length} tarjetas · Tarjeta ${Math.min(i + 1, filtered.length)} de ${filtered.length}`} icon="F">
      <div style={{ display: "flex", gap: 4, flexWrap: "wrap", marginBottom: 14 }}>
        {cats.map((c) => (
          <button
            type="button"
            key={c}
            onClick={() => {
              setCat(c);
              setI(0);
              setFlip(false);
            }}
            style={{
              padding: "5px 10px",
              borderRadius: 6,
              border: `1px solid ${cat === c ? catColors[c] || S.blue : S.border}`,
              background: cat === c ? `${catColors[c] || S.blue}22` : S.bgCard2,
              color: cat === c ? catColors[c] || S.blue : S.textMuted,
              cursor: "pointer",
              fontSize: 11,
              fontWeight: cat === c ? 700 : 400,
            }}
          >
            {c === "Todas" ? "Todas" : catLabels[c]}
          </button>
        ))}
      </div>

      {card && (
        <>
          <button
            type="button"
            onClick={() => setFlip(!flip)}
            style={{ width: "100%", textAlign: "left", cursor: "pointer", minHeight: 170, padding: 20, background: flip ? S.greenBg : S.bgCard, border: `2px solid ${flip ? S.green : S.border}`, borderRadius: 16, marginBottom: 12 }}
          >
            {!flip ? (
              <>
                <div style={{ display: "flex", gap: 8, alignItems: "center", marginBottom: 12 }}>
                  <Tag color={catColors[card.cat] || S.blue}>{catLabels[card.cat]}</Tag>
                  <span style={{ fontSize: 11, color: S.textMuted }}>Click para revelar respuesta</span>
                </div>
                <p style={{ color: S.text, fontSize: 16, margin: 0 }}>{card.q}</p>
              </>
            ) : (
              <>
                <div style={{ fontSize: 11, color: S.green, fontWeight: 800, marginBottom: 12, letterSpacing: 1 }}>RESPUESTA</div>
                <p style={{ color: "#c9d1d9", fontSize: 14, lineHeight: 1.7, margin: 0 }}>{card.a}</p>
              </>
            )}
          </button>
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
            <Btn onClick={() => go(i - 1)} disabled={i === 0}>Anterior</Btn>
            <Btn onClick={() => go(Math.floor(Math.random() * filtered.length))} style={{ borderColor: S.violet, color: S.violet }}>Aleatoria</Btn>
            <Btn onClick={() => go(i + 1)} disabled={i >= filtered.length - 1}>Siguiente</Btn>
          </div>
        </>
      )}
    </Sec>
  );
}

function Quiz() {
  const [qi, setQi] = useState(0);
  const [sel, setSel] = useState(null);
  const [ans, setAns] = useState(false);
  const [score, setScore] = useState(0);
  const [done, setDone] = useState(false);
  const q = QZ[qi];
  const pct = Math.round((qi / QZ.length) * 100);

  const answer = (idx) => {
    if (ans) return;
    setSel(idx);
    setAns(true);
    if (idx === q.correct) setScore((s) => s + 1);
  };

  const next = () => {
    if (qi === QZ.length - 1) {
      setDone(true);
      return;
    }
    setQi((j) => j + 1);
    setSel(null);
    setAns(false);
  };

  const reset = () => {
    setQi(0);
    setSel(null);
    setAns(false);
    setScore(0);
    setDone(false);
  };

  if (done) {
    return (
      <Sec title="Quiz: Resultado Final" icon="Q">
        <Card style={{ textAlign: "center", padding: 32 }}>
          <div style={{ fontSize: 34, fontWeight: 800, color: score >= Math.ceil(QZ.length * 0.8) ? S.green : score >= Math.ceil(QZ.length * 0.6) ? S.yellow : S.red, marginBottom: 4 }}>
            {score}/{QZ.length}
          </div>
          <div style={{ color: S.textMuted, fontSize: 14, marginBottom: 16 }}>{Math.round((score / QZ.length) * 100)}% de respuestas correctas</div>
          <Btn onClick={reset} style={{ background: S.blueD, borderColor: S.blue, color: "white", fontWeight: 700 }}>Volver a intentar</Btn>
        </Card>
      </Sec>
    );
  }

  return (
    <Sec title="Quiz Interactivo" sub={`Pregunta ${qi + 1} de ${QZ.length} · Puntaje: ${score}`} icon="Q">
      <div style={{ marginBottom: 12 }}>
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 11, color: S.textMuted, marginBottom: 4 }}>
          <span>Progreso</span>
          <span>{pct}%</span>
        </div>
        <div style={{ background: S.bgCard2, borderRadius: 8, height: 6, overflow: "hidden" }}>
          <div style={{ background: S.blue, height: "100%", width: `${pct}%`, borderRadius: 8 }} />
        </div>
      </div>

      <Card style={{ borderColor: S.blueD, marginBottom: 12 }}>
        <div style={{ fontSize: 11, color: S.blue, fontWeight: 800, marginBottom: 8 }}>PREGUNTA {qi + 1}</div>
        <p style={{ color: S.text, fontSize: 15, fontWeight: 600, margin: 0 }}>{q.q}</p>
      </Card>

      <div style={{ display: "flex", flexDirection: "column", gap: 8, marginBottom: 12 }}>
        {q.opts.map((opt, idx) => {
          let bg = S.bgCard;
          let border = S.border;
          let color = S.text;
          if (ans) {
            if (idx === q.correct) {
              bg = S.greenBg;
              border = S.green;
              color = S.green;
            } else if (idx === sel) {
              bg = S.redBg;
              border = S.red;
              color = S.red;
            } else {
              color = S.textMuted;
            }
          }
          return (
            <button key={opt} type="button" onClick={() => answer(idx)} style={{ textAlign: "left", padding: "11px 14px", background: bg, border: `1px solid ${border}`, borderRadius: 10, cursor: ans ? "default" : "pointer", color, fontSize: 13 }}>
              <span style={{ marginRight: 8, color: S.textDim }}>{["A", "B", "C", "D"][idx]}.</span>
              {opt}
            </button>
          );
        })}
      </div>

      {ans && (
        <Card style={{ borderColor: "#388bfd", marginBottom: 12 }}>
          <div style={{ fontSize: 11, color: S.blue, fontWeight: 800, marginBottom: 6 }}>EXPLICACION</div>
          <p style={{ color: "#c9d1d9", fontSize: 13, margin: 0 }}>{q.exp}</p>
        </Card>
      )}
      {ans && <Btn onClick={next} style={{ background: S.blueD, borderColor: S.blue, color: "white", fontWeight: 700 }}>{qi === QZ.length - 1 ? "Ver resultado" : "Siguiente pregunta"}</Btn>}
    </Sec>
  );
}

function OralExam() {
  const [open, setOpen] = useState(null);
  const [showAns, setShowAns] = useState({});

  return (
    <Sec title="Modo Examen Oral" sub="Preguntas con estructura de respuesta y errores comunes" icon="O">
      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        {ORAL.map((o, i) => (
          <div key={o.q} style={{ background: S.bgCard, border: `1px solid ${open === i ? S.orange : S.border}`, borderRadius: 12, overflow: "hidden" }}>
            <button
              type="button"
              style={{ width: "100%", textAlign: "left", padding: "12px 16px", background: "none", border: "none", cursor: "pointer", display: "flex", justifyContent: "space-between", gap: 12, alignItems: "center" }}
              onClick={() => {
                setOpen(open === i ? null : i);
                setShowAns((p) => ({ ...p, [i]: false }));
              }}
            >
              <span style={{ color: S.text, fontWeight: 700, fontSize: 13 }}>{o.q}</span>
              <span style={{ color: S.textMuted }}>{open === i ? "▲" : "▼"}</span>
            </button>
            {open === i && (
              <div style={{ padding: "0 16px 16px", borderTop: `1px solid ${S.border}` }}>
                <div style={{ marginTop: 12, marginBottom: 12 }}>
                  <div style={{ fontSize: 11, color: S.orange, fontWeight: 800, marginBottom: 8 }}>ESTRUCTURA DE RESPUESTA</div>
                  {o.struct.map((s) => (
                    <div key={s} style={{ fontSize: 12, color: "#c9d1d9", marginBottom: 4 }}>• {s}</div>
                  ))}
                </div>
                {!showAns[i] ? (
                  <Btn onClick={() => setShowAns((p) => ({ ...p, [i]: true }))} style={{ marginBottom: 12 }}>Mostrar respuesta modelo</Btn>
                ) : (
                  <div style={{ marginBottom: 12 }}>
                    <div style={{ fontSize: 11, color: S.green, fontWeight: 800, marginBottom: 8 }}>RESPUESTA MODELO</div>
                    <pre style={{ color: "#c9d1d9", fontSize: 13, whiteSpace: "pre-wrap", fontFamily: "inherit", lineHeight: 1.7, margin: 0 }}>{o.ans}</pre>
                  </div>
                )}
                <div style={{ padding: "10px 12px", background: S.redBg, border: `1px solid ${S.red}44`, borderRadius: 8 }}>
                  <div style={{ fontSize: 11, color: S.red, fontWeight: 800, marginBottom: 6 }}>ERRORES COMUNES</div>
                  {o.errs.map((e) => (
                    <div key={e} style={{ fontSize: 12, color: "#f0a0a0", marginBottom: 3 }}>• {e}</div>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </Sec>
  );
}

function Comparativos() {
  const [sel, setSel] = useState(0);
  const comp = COMPS[sel];
  const colors = [S.blue, S.violet, S.red, S.green, S.orange, S.yellow];

  return (
    <Sec title="Cuadros Comparativos" sub="Comparaciones entre recursos" icon="C">
      <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginBottom: 16 }}>
        {COMPS.map((c, i) => (
          <button
            type="button"
            key={c.title}
            onClick={() => setSel(i)}
            style={{
              padding: "6px 12px",
              borderRadius: 8,
              border: `1px solid ${sel === i ? colors[i] : S.border}`,
              background: sel === i ? `${colors[i]}22` : S.bgCard2,
              color: sel === i ? colors[i] : S.textMuted,
              cursor: "pointer",
              fontSize: 11,
              fontWeight: sel === i ? 700 : 400,
            }}
          >
            C{i + 1}
          </button>
        ))}
      </div>
      <div style={{ marginBottom: 12, color: colors[sel], fontWeight: 700, fontSize: 14 }}>{comp.title}</div>
      <div style={{ overflowX: "auto" }}>
        <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 12, minWidth: 560 }}>
          <thead>
            <tr style={{ background: S.bgCard2 }}>
              {comp.headers.map((h, i) => (
                <th key={h} style={{ padding: "9px 10px", textAlign: "left", color: i === 0 ? S.textMuted : colors[sel] || S.blue, border: `1px solid ${S.border}`, fontWeight: 700 }}>
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {comp.rows.map((r) => (
              <tr key={r[0]}>
                {r.map((c, j) => (
                  <td key={`${r[0]}-${j}`} style={{ padding: "8px 10px", color: j === 0 ? S.textMuted : "#c9d1d9", border: `1px solid ${S.border}`, fontWeight: j === 0 ? 600 : 400 }}>
                    {c}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div style={{ display: "flex", gap: 8, marginTop: 12 }}>
        <Btn onClick={() => setSel(Math.max(0, sel - 1))} disabled={sel === 0}>Anterior</Btn>
        <Btn onClick={() => setSel(Math.min(COMPS.length - 1, sel + 1))} disabled={sel === COMPS.length - 1}>Siguiente</Btn>
      </div>
    </Sec>
  );
}

function Progreso() {
  const [prog, setProg] = useState(() => Object.fromEntries(TOPICS.map((t) => [t, "none"])));
  const states = [
    { id: "none", l: "No estudiado", color: "#484f58", bg: S.bgCard },
    { id: "prog", l: "En progreso", color: S.yellow, bg: "#271d08" },
    { id: "done", l: "Dominado", color: S.green, bg: S.greenBg },
  ];
  const cycle = (t) => {
    const order = ["none", "prog", "done"];
    setProg((p) => ({ ...p, [t]: order[(order.indexOf(p[t]) + 1) % order.length] }));
  };
  const counts = states.map((s) => ({ ...s, n: Object.values(prog).filter((v) => v === s.id).length }));
  const pct = Math.round(((counts.find((c) => c.id === "done")?.n || 0) / TOPICS.length) * 100);

  return (
    <Sec title="Mi Progreso" sub="Haz click en un tema para cambiar su estado" icon="P">
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(130px,1fr))", gap: 10, marginBottom: 16 }}>
        {counts.map((c) => (
          <Card key={c.id} style={{ textAlign: "center", background: c.bg }}>
            <div style={{ fontSize: 22, fontWeight: 800, color: c.color }}>{c.n}</div>
            <div style={{ color: S.textMuted, fontSize: 11, marginTop: 2 }}>{c.l}</div>
          </Card>
        ))}
      </div>
      <div style={{ padding: "12px 16px", background: S.bgCard, borderRadius: 12, border: `1px solid ${S.border}`, marginBottom: 14 }}>
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 12, color: S.textMuted, marginBottom: 6 }}>
          <span>Progreso general</span>
          <span style={{ color: S.green, fontWeight: 700 }}>{pct}%</span>
        </div>
        <div style={{ background: S.bgCard2, borderRadius: 8, height: 10, overflow: "hidden" }}>
          <div style={{ background: S.green, height: "100%", width: `${pct}%`, borderRadius: 8 }} />
        </div>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 5 }}>
        {TOPICS.map((t) => {
          const s = states.find((state) => state.id === prog[t]);
          return (
            <button
              type="button"
              key={t}
              onClick={() => cycle(t)}
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                gap: 12,
                padding: "10px 14px",
                background: s.bg,
                border: `1px solid ${s.color}44`,
                borderRadius: 10,
                cursor: "pointer",
                color: s.color,
                fontWeight: 600,
                fontSize: 12,
                textAlign: "left",
              }}
            >
              <span>{t}</span>
              <span>{s.id === "none" ? "○" : s.id === "prog" ? "◑" : "●"}</span>
            </button>
          );
        })}
      </div>
    </Sec>
  );
}

const NAV = [
  { id: "dash", l: "Inicio", i: "I" },
  { id: "modulos", l: "Modulos", i: "M" },
  { id: "flash", l: "Flashcards", i: "F" },
  { id: "quiz", l: "Quiz", i: "Q" },
  { id: "oral", l: "Examen Oral", i: "O" },
  { id: "comp", l: "Comparativos", i: "C" },
  { id: "prog", l: "Progreso", i: "P" },
];

export default function App() {
  const [sec, setSec] = useState("dash");
  const [nav, setNav] = useState(false);
  const pages = { dash: Dashboard, modulos: Modulos, flash: Flashcards, quiz: Quiz, oral: OralExam, comp: Comparativos, prog: Progreso };
  const Page = pages[sec] || Dashboard;

  return (
    <div style={{ background: S.bg, minHeight: "100vh", color: S.text, fontFamily: "system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,sans-serif", display: "flex", flexDirection: "column" }}>
      <div style={{ background: S.bgCard, borderBottom: `1px solid ${S.border}`, padding: "10px 16px", display: "flex", justifyContent: "space-between", alignItems: "center", position: "sticky", top: 0, zIndex: 100 }}>
        <button type="button" onClick={() => { setSec("dash"); setNav(false); }} style={{ background: "none", border: "none", color: S.text, fontWeight: 800, fontSize: 13, cursor: "pointer" }}>
          Recursos Civiles PUCV
        </button>
        <button type="button" onClick={() => setNav(!nav)} style={{ background: "none", border: "none", color: S.textMuted, cursor: "pointer", fontSize: 18, lineHeight: 1 }}>
          {nav ? "Cerrar" : "Menu"}
        </button>
      </div>

      {nav && (
        <div style={{ background: S.bgCard, borderBottom: `1px solid ${S.border}`, padding: "8px 12px", display: "flex", flexWrap: "wrap", gap: 6 }}>
          {NAV.map((n) => (
            <button
              type="button"
              key={n.id}
              onClick={() => {
                setSec(n.id);
                setNav(false);
              }}
              style={{
                padding: "6px 12px",
                borderRadius: 8,
                border: `1px solid ${sec === n.id ? S.blue : S.border}`,
                background: sec === n.id ? "#0d1926" : S.bgCard2,
                color: sec === n.id ? S.blue : S.textMuted,
                cursor: "pointer",
                fontSize: 12,
                display: "flex",
                alignItems: "center",
                gap: 6,
              }}
            >
              <span style={{ fontWeight: 800 }}>{n.i}</span>
              <span>{n.l}</span>
            </button>
          ))}
        </div>
      )}

      <main style={{ flex: 1, padding: "24px 16px", maxWidth: 900, margin: "0 auto", width: "100%", boxSizing: "border-box" }}>
        <Page go={setSec} />
      </main>
    </div>
  );
}
