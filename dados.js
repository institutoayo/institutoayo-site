/* ============================================================
   dados.js, Instituto Ayó de Desenvolvimento Social e Cultural

   Todo o conteúdo variável do site mora aqui. As páginas de
   cursos, projetos, galeria e imprensa montam sozinhas a partir
   destes arrays, então dá para atualizar sem abrir o HTML.

   Regras da casa ao acrescentar um item:
   1. Nenhum card fica sem imagem
   2. Toda imagem precisa de texto alternativo descritivo
   3. Nenhuma foto aparece duas vezes com legendas diferentes
   4. Só escrever gratuito onde for verdade
   ============================================================ */

var PROGRAMAS = [
  { nome: 'Programa Mulheres', tag: 'Qualificação e renda',
    foto: 'img/institucional/turma-tranca-2026.jpg',
    alt: 'Turma de tranças do Instituto Ayó reunida na sala de parede roxa da sede, na Gamboa',
    texto: 'A frente mais antiga da casa. Cursos de qualificação profissional em beleza, estética, artesanato e negócios, com turmas de dois meses, certificado e encaminhamento depois da formatura.' },

  { nome: 'Empower Cultura', tag: 'Gestão cultural e tecnologia',
    foto: 'img/institucional/camera-formacao.jpg',
    alt: 'Câmera fotográfica em primeiro plano durante uma atividade de formação do Instituto Ayó',
    texto: 'Formação de jovens em gestão cultural e programação. Elaboração de projeto, gestão de projeto cultural, prestação de contas e introdução ao desenvolvimento front-end. Cultura e tecnologia na mesma sala.' },

  { nome: 'Programa Mulekes', tag: 'Infância e juventude', semFoto: true,
    foto: '', alt: '',
    texto: 'Habilidades socioemocionais em crianças, adolescentes e jovens por meio do esporte e da cultura. Futebol, jiu-jitsu, ballet, vôlei, basquete e encaminhamento de jovem aprendiz.' }
];

var CURSOS = [
  { nome: 'Tranças', eixo: 'Beleza e identidade', selo: 'Turma gratuita',
    foto: 'img/cursos/trancas.jpg',
    alt: 'Aluna de camiseta rosa do Instituto Ayó tranca o cabelo de outra mulher durante a aula prática',
    resumo: 'O curso que mudou o rumo do Instituto. Abre por contexto histórico e cultural das tranças africanas e só depois entra na técnica, no cuidado com o couro cabeludo e na precificação do serviço.' },

  { nome: 'Trança Avançada', eixo: 'Beleza e identidade', selo: 'Turma gratuita',
    foto: 'img/cursos/tranca-avancada.jpg',
    alt: 'Instrutora de colete roxo conduz a aula de trança avançada com as alunas trabalhando em cabeças de treino',
    resumo: 'Para quem já passou pelo básico. Trançado em cabeça de treino, dreadlocks, megahair e atendimento de cliente do começo ao fim, com preço fechado.' },

  { nome: 'Cabelos Crespos e Cacheados', eixo: 'Beleza e identidade', selo: 'Turma gratuita',
    foto: 'img/cursos/cabelos-crespos.jpg',
    alt: 'Instrutora de camiseta lilás cuida do cabelo cacheado de uma aluna durante a aula, com o quadro branco ao fundo',
    resumo: 'Leitura de curvatura, hidratação, finalização e transição capilar. A sala vira consultório e roda de conversa ao mesmo tempo, porque cabelo aqui nunca é só cabelo.' },

  { nome: 'Designer de Sobrancelhas', eixo: 'Beleza e identidade', selo: 'Turma gratuita',
    foto: 'img/cursos/designer-de-sobrancelhas.jpg',
    alt: 'Profissional de luvas rosa desenha a sobrancelha de uma aluna sorridente durante a aula prática',
    resumo: 'Visagismo, paquímetro, epilação com pinça, henna e ficha de anamnese. Trinta e duas horas que terminam com a aluna fazendo atendimento com hora marcada.' },

  { nome: 'Nails Designer', eixo: 'Beleza e identidade', selo: 'Turma gratuita',
    foto: 'img/cursos/nails-designer.jpg',
    alt: 'Turma reunida à mesa durante a aula prática de nails designer, com materiais espalhados sobre a toalha colorida',
    resumo: 'Alongamento em fibra, curvatura C, todos os formatos, decoração encapsulada e manutenção. Entra também a conta que quase ninguém faz, quanto custa cada unha antes de virar preço.' },

  { nome: 'Maquiagem', eixo: 'Beleza e identidade', selo: 'Turma gratuita',
    foto: 'img/cursos/maquiagem.jpg',
    alt: 'Modelo de cabelo liso e longo com maquiagem de olhos marcados e batom vermelho, resultado da aula de maquiagem',
    resumo: 'Pele negra e retinta no centro do estudo, não no capítulo final. Anatomia da pele, profilaxia, gestual, produto e maquiagem social para festa e formatura.' },

  { nome: 'Extensão de Cílios', eixo: 'Beleza e identidade', selo: 'Turma gratuita',
    foto: 'img/institucional/cilios-aula.jpg',
    alt: 'Aluna aplica extensão de cílios em uma modelo deitada na maca, acompanhada de perto pela instrutora',
    resumo: 'O primeiro curso do Instituto, de 2021. Biossegurança, mapping, fio a fio, volume, treino na boneca e remoção química e mecânica.' },

  { nome: 'Depilação', eixo: 'Beleza e identidade', selo: 'Turma gratuita',
    foto: 'img/cursos/depilacao.jpg',
    alt: 'Instrutora prepara a cera quente na panela elétrica durante a aula de depilação, com as alunas ao lado',
    resumo: 'Cera quente e fria, biossegurança e atendimento. Aula prática com modelo a partir da segunda semana.' },

  { nome: 'Estética Facial', eixo: 'Estética e bem-estar', selo: 'Turma gratuita',
    foto: 'img/cursos/estetica-facial.jpg',
    alt: 'Profissional de luvas rosa realiza procedimento facial em uma cliente deitada na maca da sala de aula',
    resumo: 'Limpeza de pele, esfoliação, máscara e protocolo de atendimento, com foco em pele negra, que ainda é pouco estudada nos cursos de estética.' },

  { nome: 'Estética Corporal', eixo: 'Estética e bem-estar', selo: 'Turma gratuita',
    foto: 'img/cursos/estetica-corporal.jpg',
    alt: 'Instrutora de blusa rosa aplica técnica de estética corporal na perna de uma modelo durante a aula',
    resumo: 'Drenagem, modelagem e uso de aparelhos. A aluna aprende a montar pacote de sessões em vez de vender atendimento avulso.' },

  { nome: 'Massoterapia', eixo: 'Estética e bem-estar', selo: 'Turma gratuita',
    foto: 'img/cursos/massoterapia.jpg',
    alt: 'Aluna realiza massagem nas costas de uma modelo deitada na maca durante a aula de massoterapia',
    resumo: 'Massagem relaxante, modeladora e pedras quentes, com noção de anatomia e cuidado com a própria postura de quem atende.' },

  { nome: 'Barbearia', eixo: 'Estética e bem-estar', selo: 'Turma gratuita',
    foto: 'img/cursos/barbearia.jpg',
    alt: 'Turma em volta da cadeira acompanha o corte de cabelo feito pela instrutora durante a aula de barbearia',
    resumo: 'Corte na máquina e na tesoura, degradê, barba e cabelo crespo. Turma mista, com homens e mulheres na mesma sala.' },

  { nome: 'Costura Criativa', eixo: 'Artesanato e economia criativa', selo: 'Turma gratuita',
    foto: 'img/cursos/costura-criativa.jpg',
    alt: 'Aluna corta tecido africano estampado sobre a mesa durante a aula de costura criativa',
    resumo: 'Tecido africano, corte, máquina reta e acabamento. Sai bolsa, turbante e peça de vestuário pronta para vender em feira.' },

  { nome: 'Crochê', eixo: 'Artesanato e economia criativa', selo: 'Turma gratuita',
    foto: 'img/cursos/croche.jpg',
    alt: 'Turma de crochê reunida à mesa com novelos coloridos, na sala de parede roxa do Instituto',
    resumo: 'Do ponto básico ao acabamento, com peças pensadas para virar produto. A turma mistura idades, das adolescentes às senhoras do morro.' },

  { nome: 'Crochê na Rocinha', eixo: 'Artesanato e economia criativa', selo: 'Turma gratuita',
    foto: 'img/cursos/croche-rocinha.jpg',
    alt: 'Turma numerosa da oficina de crochê da Rocinha, sentada em volta das mesas da sala',
    resumo: 'A mesma formação, fora do território de origem. Desde 2026 o Instituto leva o crochê para a Rocinha, com turma própria e sala cheia.' },

  { nome: 'Macramê', eixo: 'Artesanato e economia criativa', selo: 'Turma gratuita',
    foto: 'img/cursos/macrame.jpg',
    alt: 'Mãos trabalham nós de macramê em fio branco sobre uma toalha africana colorida',
    resumo: 'Nós, tramas e peças de decoração. Um curso barato de montar e que vira renda rápido em feira de artesanato.' },

  { nome: 'Confeitaria', eixo: 'Artesanato e economia criativa', selo: 'Turma gratuita',
    foto: 'img/cursos/confeitaria.jpg',
    alt: 'Bandeja com cupcakes e docinhos finalizados pela turma de confeitaria do Instituto Ayó',
    resumo: 'Bolo de pote, docinho de festa e cupcake. Entra precificação, embalagem e como responder encomenda pelo WhatsApp sem se enrolar.' },

  { nome: 'Letramento Racial Favelado', eixo: 'Cultura, educação e cidadania', selo: 'Turma gratuita',
    foto: 'img/institucional/aula-teorica.jpg',
    alt: 'Sala cheia de alunas sentadas acompanhando uma aula teórica na sede do Instituto Ayó',
    resumo: 'Trinta e duas horas de formação em identidade racial, com linguagem construída a partir do território. Autorreconhecimento, história do povo negro e o que a favela tem a dizer sobre isso.' },

  { nome: 'Fotografia', eixo: 'Cultura, educação e cidadania', selo: 'Turma gratuita',
    foto: 'img/cursos/fotografia.jpg',
    alt: 'Alunas do curso de fotografia em roda de conversa diante do mural pintado com a paisagem do Rio',
    resumo: 'Fotografia com celular, luz, enquadramento e registro de território. As fotos das nossas turmas saem daqui, feitas por quem mora aqui.' },

  { nome: 'Ritmos', eixo: 'Cultura, educação e cidadania', selo: 'Turma gratuita',
    foto: 'img/cursos/ritmos.jpg',
    alt: 'Grupo dançando em roda durante a aula de ritmos, num salão amplo',
    resumo: 'Dança em roda, corpo e ancestralidade. A turma da Tijuca mistura idades e é a porta de entrada de quem chega no Instituto pela cultura antes de chegar pela formação.' },

  { nome: 'Inglês', eixo: 'Cultura, educação e cidadania', selo: 'Turma gratuita',
    foto: 'img/cursos/ingles.jpg',
    alt: 'Professor conduz a oficina de inglês diante do quadro branco com frases escritas à mão',
    resumo: 'Inglês do dia a dia e do atendimento. Turma aberta também às alunas migrantes que chegam pelo CRAI.' },

  { nome: 'Empreendedorismo', eixo: 'Cultura, educação e cidadania', selo: 'Turma gratuita',
    foto: 'img/cursos/empreendedorismo.jpg',
    alt: 'Participantes em roda de conversa durante a oficina de empreendedorismo na sede do Instituto',
    resumo: 'Como formalizar, quanto cobrar e para quem vender. Trinta e duas horas feitas em parceria com o Sebrae RJ.' },

  { nome: 'Marketing Digital', eixo: 'Cultura, educação e cidadania', selo: 'Turma gratuita',
    foto: 'img/cursos/marketing-digital.jpg',
    alt: 'Turma sentada em círculo acompanha a aula de marketing digital na sala do Instituto',
    resumo: 'Perfil comercial, foto de produto, legenda e atendimento. Sai com o Instagram do próprio negócio no ar.' }
];

var PROJETOS = [
  { nome: 'Trançando Cultura', ano: '2023 a 2025',
    foto: 'img/institucional/tranca-atendimento.jpg',
    alt: 'Instrutora de colete roxo da Mulher Cidadã faz a trança de uma cliente na sede do Instituto, na Rua Bento Ribeiro',
    linha: 'Edital SMC nº 03/2023, Ações Locais, edição Paulo Gustavo',
    texto: 'A trança tratada como patrimônio cultural imaterial brasileiro, com apoio na Constituição Federal e em reconhecimentos do IPHAN. Cem mulheres cis e trans em cinco turmas, com sessenta e quatro horas de trançado e dezesseis de letramento racial e contação de histórias. O ciclo termina em dois desfiles públicos no MUHCAB, o Julho das Pretas e o Novembro Negro, e num catálogo digital com o retrato e a história das trancistas da Pequena África.' },

  { nome: 'Tramas da Pequena África', ano: '2024 e 2025',
    foto: 'img/projetos/tramas-pequena-africa.jpg',
    alt: 'Participante do Tramas da Pequena África trabalha uma peça de artesanato na sede do Instituto, junto à janela',
    linha: 'Formação, economia criativa e memória',
    texto: 'Cursos de beleza, artes manuais, comunicação, estética e empreendedorismo no território histórico da Pequena África. O saber ancestral vira produto, feira e renda sem deixar de ser memória.' },

  { nome: 'Arraiá das Pretas', ano: '2026',
    foto: 'img/projetos/arraia-das-pretas.jpg',
    alt: 'Festa junina do Arraiá das Pretas com bandeirinhas coloridas e participantes reunidos no pátio',
    linha: 'Política Nacional Cultura Viva, Lei nº 13.018/2014',
    texto: 'Contação de histórias, ancestralidade e autoestima de crianças negras numa festa junina que virou trabalho em rede com o CEAM, o NEAP Chiquinha Gonzaga, a Casa da Mulher Cidadã e o MUHCAB.' },

  { nome: 'Programa Excelência', ano: '2026',
    foto: 'img/projetos/programa-excelencia.jpg',
    alt: 'Grupo do Programa Excelência caminha pelas ruas da Pequena África durante a imersão territorial',
    linha: 'Com a Associação Prover e a rede Gerando Falcões',
    texto: 'Imersão pela Pequena África e pelo MUHCAB, guiada por Fernando Zulu, diretor do museu. Formação de lideranças com o patrimônio afrodiaspórico no centro da conversa.' },

  { nome: 'Brota Cria', ano: '2026',
    foto: 'img/projetos/brota-cria.jpg',
    alt: 'Jovens do encontro Brota Cria erguem plaquinhas com a frase Brota comigo no pátio do MUHCAB',
    linha: 'Com o Sebrae RJ e a ONG Sim, Eu Sou do Meio',
    texto: 'Encontro de empreendedorismo para jovens de 15 a 29 anos no MUHCAB. Ideia de negócio, painel de sonhos e caminho prático para sair do papel.' },

  { nome: 'Ayó Day e DIVAS', ano: 'Permanente',
    foto: 'img/projetos/divas-encontro.jpg',
    alt: 'Grupo de mulheres reunidas e sorrindo na sede do Instituto Ayó durante uma ação comunitária',
    linha: 'Dias de beleza gratuitos, ao menos cinco por ano',
    texto: 'Cílios, trança, maquiagem, unha e sobrancelha de graça para a comunidade, feitos pelas próprias formadas. Acontece na sede e também fora do Morro da Providência. É onde a turma estreia no atendimento e onde a vizinhança descobre o Instituto.' },

  { nome: 'Oficina de Escrita Criativa', ano: 'Em desenho', semFoto: true,
    foto: '', alt: '',
    linha: 'Crianças de 8 a 14 anos, no Morro da Providência',
    texto: 'Conto, poesia, prosa, quadrinho e texto informativo, com um livro coletivo no fim do ano reunindo o que o projeto chama de Afrovivências. Nasce de um dado duro. A Providência registrou 32,8% de analfabetismo funcional e média de 5,8 anos de estudo entre adultos, a pior marca entre nove favelas pesquisadas.' }
];

var GALERIA = [
  { arq: 'img/institucional/trancas-aula.jpg', grupo: 'Formação',
    legenda: 'Aula prática de tranças na sede da Gamboa' },
  { arq: 'img/institucional/trancas-retrato.jpg', grupo: 'Formação',
    legenda: 'Penteado finalizado na oficina de tranças' },
  { arq: 'img/institucional/tranca-cabeca-treino.jpg', grupo: 'Formação', retrato: true,
    legenda: 'Trançado em cabeça de treino, na turma avançada de 2026' },
  { arq: 'img/institucional/tranca-atendimento.jpg', grupo: 'Projetos', retrato: true,
    legenda: 'Trança feita em cliente na sede, dentro do Trançando Cultura' },
  { arq: 'img/institucional/turma-tranca-2026.jpg', grupo: 'Formação', retrato: true,
    legenda: 'Turma de tranças de abril de 2026' },
  { arq: 'img/institucional/cabelos-atendimento.jpg', grupo: 'Formação', retrato: true,
    legenda: 'Atendimento a moradoras na oficina de cabelos crespos e cacheados' },
  { arq: 'img/institucional/turma-cabelos.jpg', grupo: 'Formação', retrato: true,
    legenda: 'Turma de cabelos crespos e cacheados reunida na sede' },
  { arq: 'img/institucional/cuidado-capilar.jpg', grupo: 'Formação', retrato: true,
    legenda: 'Aula sobre produtos e cuidado capilar' },
  { arq: 'img/institucional/cilios-aula.jpg', grupo: 'Formação', retrato: true,
    legenda: 'Aula de extensão de cílios, o primeiro curso do Instituto' },
  { arq: 'img/institucional/confeitaria-turma.jpg', grupo: 'Formação', retrato: true,
    legenda: 'Turma de confeitaria reunida ao fim da aula' },
  { arq: 'img/institucional/sala-roda.jpg', grupo: 'Formação', retrato: true,
    legenda: 'Roda de conversa que abre cada módulo de formação' },
  { arq: 'img/institucional/formacao-integrada.jpg', grupo: 'Formação',
    legenda: 'Alunas acompanham a aula de formação profissional integrada' },
  { arq: 'img/projetos/eventos-territorio.jpg', grupo: 'Formação', retrato: true,
    legenda: 'Oficina de artesanato na sede, com as alunas em volta da mesa' },
  { arq: 'img/institucional/croche-rocinha-sala.jpg', grupo: 'Território', retrato: true,
    legenda: 'Turma de crochê na Rocinha, abril de 2026' },
  { arq: 'img/institucional/croche-rocinha-turma.jpg', grupo: 'Território', retrato: true,
    legenda: 'Mesas cheias na oficina de crochê da Rocinha' },
  { arq: 'img/institucional/ritmos-roda.jpg', grupo: 'Território',
    legenda: 'Roda de dança da turma de ritmos, na Tijuca' },
  { arq: 'img/institucional/territorio-centro.jpg', grupo: 'Território', retrato: true,
    legenda: 'Caminhada pela Pequena África, com a Central do Brasil ao fundo' },
  { arq: 'img/institucional/migrantes-crai.jpg', grupo: 'Território', retrato: true,
    legenda: 'Acolhimento de mulheres migrantes em parceria com o CRAI, na Gamboa' },
  { arq: 'img/institucional/fotografia-campo.jpg', grupo: 'Território', retrato: true,
    legenda: 'Trabalho de campo da turma de fotografia' },
  { arq: 'img/institucional/turma-camisetas.jpg', grupo: 'Território',
    legenda: 'Equipe e alunas diante do mural da comunidade' },
  { arq: 'img/institucional/roda-de-conversa.jpg', grupo: 'Território',
    legenda: 'Encontro de articulação na sede do Instituto' },
  { arq: 'img/projetos/divas-encontro.jpg', grupo: 'Território', retrato: true,
    legenda: 'Mulheres reunidas na sede durante ação comunitária do Instituto' },
  { arq: 'img/institucional/mocao-camara.jpg', grupo: 'Território', retrato: true,
    legenda: 'Moção de Reconhecimento e Aplausos da Câmara Municipal do Rio' },
  { arq: 'img/institucional/formatura-turma.jpg', grupo: 'Formatura',
    legenda: 'Turma formada com certificado em mãos' },
  { arq: 'img/institucional/formatura-trio.jpg', grupo: 'Formatura',
    legenda: 'Formandas diante do painel do Instituto Ayó' },
  { arq: 'img/institucional/formatura-diploma.jpg', grupo: 'Formatura',
    legenda: 'Certificado erguido no dia da formatura' },
  { arq: 'img/institucional/formatura-painel.jpg', grupo: 'Formatura',
    legenda: 'Formanda no painel Transformando realidades, potencializando sonhos' },
  { arq: 'img/institucional/formatura-grupo.jpg', grupo: 'Formatura',
    legenda: 'Convidados e formandas na cerimônia' },
  { arq: 'img/institucional/auditorio-turma.jpg', grupo: 'Formatura', retrato: true,
    legenda: 'Plateia cheia no dia da entrega dos certificados' },
  { arq: 'img/projetos/trancando-cultura-cartaz.jpg', grupo: 'Projetos', retrato: true,
    legenda: 'Cartaz do Trançando Cultura, aprovado no Edital SMC nº 03/2023' },
  { arq: 'img/projetos/trancando-cultura-turma.jpg', grupo: 'Projetos', retrato: true,
    legenda: 'Prática de trança em cabeça de treino, no Trançando Cultura' },
  { arq: 'img/projetos/arraia-das-pretas.jpg', grupo: 'Projetos', retrato: true,
    legenda: 'Arraiá das Pretas, festa junina no território' },
  { arq: 'img/projetos/arraia-crianca.jpg', grupo: 'Projetos', retrato: true,
    legenda: 'Criança brinca no Arraiá das Pretas' },
  { arq: 'img/projetos/arraia-roda.jpg', grupo: 'Projetos', retrato: true,
    legenda: 'Apresentação cultural no Arraiá das Pretas' },
  { arq: 'img/projetos/programa-excelencia.jpg', grupo: 'Projetos', retrato: true,
    legenda: 'Imersão territorial do Programa Excelência' },
  { arq: 'img/projetos/programa-excelencia-banner.jpg', grupo: 'Projetos', retrato: true,
    legenda: 'Programa Excelência, com a Associação Prover e a rede Gerando Falcões' },
  { arq: 'img/projetos/programa-excelencia-muhcab.jpg', grupo: 'Projetos', retrato: true,
    legenda: 'Visita ao MUHCAB durante o Programa Excelência' },
  { arq: 'img/projetos/brota-cria.jpg', grupo: 'Projetos', retrato: true,
    legenda: 'Jovens do Brota Cria no MUHCAB' },
  { arq: 'img/projetos/brota-cria-sonhos.jpg', grupo: 'Projetos', retrato: true,
    legenda: 'Painel de sonhos do encontro Brota Cria' },
  { arq: 'img/projetos/brota-cria-roda.jpg', grupo: 'Projetos', retrato: true,
    legenda: 'Fala de abertura do encontro Brota Cria' },
  { arq: 'img/projetos/tramas-estudio.jpg', grupo: 'Projetos', retrato: true,
    legenda: 'Ensaio fotográfico do Tramas da Pequena África' }
];

var CLIPPING = [
  { veiculo: 'Prefeitura do Rio', data: '31 de outubro de 2024',
    link: 'https://prefeitura.rio/casa-civil/prefeitura-anuncia-calendario-de-eventos-do-novembro-negro-rio-2024/',
    titulo: 'Prefeitura anuncia calendário de eventos do Novembro Negro Rio 2024, com o Trançando Cultura no MUHCAB' },
  { veiculo: 'Diário do Rio', data: 'Novembro de 2024',
    link: 'https://diariodorio.com/rio-tera-programacao-especial-em-novembro-para-celebrar-mes-da-consciencia-negra-veja-o-calendario/',
    titulo: 'Rio terá programação especial em novembro para celebrar o mês da Consciência Negra' },
  { veiculo: 'Cultura Preta', data: '3 de novembro de 2023',
    link: 'https://culturapreta.com/2023/11/03/morro-da-providencia-sediara-festival-cultural-em-homenagem-ao-novembro-negro-e-aos-126-anos-da-comunidade/',
    titulo: 'Morro da Providência sediará festival cultural em homenagem ao Novembro Negro e aos 126 anos da comunidade' },
  { veiculo: 'G1', data: '9 de março de 2024', link: '',
    titulo: 'Mulheres ganham dia de beleza e homenagens na quadra da Vizinha Faladeira' }
];
