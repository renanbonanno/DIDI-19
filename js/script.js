/**
 * ============================================================================
 * SCRIPT PRINCIPAL - LANDING PAGE DE ANIVERSÁRIO (REVISADO E CORRIGIDO)
 * Contém:
 * 1. Contador em tempo real ("Celebrando seus dias de vida" - 23/11/2007)
 * 2. Player de Música HTML5 Audio interativo (com fallback sonoro inteligente)
 * 3. Retrospectiva de 19 Anos Intercalada + Modal de Foto Ampliada e Texto Completo
 * 4. Carrossel Rotativo Multi-Card das Amigas (3 por vez + Stories + Swipe)
 * 5. Scroll Reveal suave via IntersectionObserver
 * 6. Modal da Carta de Aniversário + Chuva de Corações, Brilhos e Confetes
 * ============================================================================
 */

// ============================================================================
// 1. DATA DE NASCIMENTO DELA (23 de Novembro de 2007)
// Formato: 'AAAA-MM-DDTHH:MM:SS'
// ============================================================================
const DATA_NASCIMENTO = '2007-11-23T00:00:00';

// ============================================================================
// 2. [EDITAR AQUI] LISTA DE MÚSICAS DO PLAYER (5 FAIXAS)
// ============================================================================
const songs = [
    {
        title: "Não é assim com as outras pessoas", // Pessoas Normais
        artist: "Ivy - Frank Ocean",
        src: "assets/music/musica01.mp3",
        cover: "assets/img/capa01.png"
    },
    {
        title: "Eu sou seu há mais tempo do que você poderia imaginar", // Quarta Asa
        artist: "invisible string - Taylor Swift",
        src: "assets/music/musica02.mp3",
        cover: "assets/img/capa02.png"
    },
    {
        title: "Um brinde aos que sonham", // La La Land
        artist: "City of Stars - La La Land",
        src: "assets/music/musica03.mp3",
        cover: "assets/img/capa03.png"
    },
    {
        title: "Eu quero tudo de você. O bom, o ruim, o complicado", // Amor, Teoricamente
        artist: "Stupid Song - Olivia Rodrigo", 
        src: "assets/music/musica04.mp3",
        cover: "assets/img/capa04.png"
    },
    {
        title: "Eu só quero passar cada minuto do resto da minha vida com você", // Jogos Vorazes
        artist: "Timeless - Taylor Swift",
        src: "assets/music/musica05.mp3",
        cover: "assets/img/capa05.png"
    }
];

// ============================================================================
// 3. [EDITAR AQUI] RETROSPECTIVA (2007 A 2026 - DO NASCIMENTO AOS 19 ANOS)
// Fotos em "assets/img/" por ano: 2007.jpeg até 2026.jpeg
// ============================================================================
const RETROSPECTIVA_19_ANOS = [
  {
    ano: 'Nascimento • 2007',
    subtitulo: '23 de Novembro de 2007 - Pai',
    titulo: 'Bem-vinda ao mundo real. Ele é uma bagunça, mas você vai amar.',
    foto: './assets/img/pai.jpeg',
    texto: 'Em 23 de novembro de 2007 o mundo ganhou você! O começo da história mais linda, trazendo luz, amor e alegria desde o primeiro instante.',
    // [EDITAR AQUI] Múltiplas fotos e textos para 2007 (passe para o lado ao ampliar!)
    slides: [
      {
        foto: './assets/img/pai.jpeg',
        titulo: 'O Dia em que o Mundo Ficou Mais Bonito',
        texto: 'No dia em que você nasceu, eu também nasci de uma forma diferente. Descobri um amor que eu jamais imaginava seria capaz de sentir. Vc me fez enxergar a vida com outros olhos e um motivo a mais para lutar, sorrir e seguir em frente. Ser seu pai é um dos maiores privilégios da minha vida.'
      },
      {
        foto: './assets/img/Mãe.jpeg',
        subtitulo: '23 de Novembro de 2007 - Mãe',
        titulo: 'Bem-vinda ao mundo real. Ele é uma bagunça, mas você vai amar.',
        texto: 'Todo momento maravilhoso da minha vida eu podia resumir meu sentimento numa única palavra: FELICIDADE. Porém no dia 23/11/07 as 08h11 felicidade não foi o suficiente para resumir o que eu estava sentindo, ao ver aquela pessoinha pesando apenas 2,810 kg e medindo 48,5 cm, meu coração disparou, minhas pernas amoleceram, chorei de soluçar, nascia ali junto com a Isabela o mais puro e completo de todos os sentimentos: o AMOR MATERNO Foi a sensação mais emocionante de toda minha vida, ter a Isabela em meu peito, poder chamá-la e de filha e sentir que minha voz fazia toda a diferença pra ela naquela sala de parto. Ela chegou e ocupou um vazio na minha vida que eu nem sabia que existia'
      }
    ]
  },
  {
    ano: '1º Ano • 2008',
    subtitulo: '2008 ',
    titulo: 'O amor que permanece',
    foto: './assets/img/2008.jpeg',
    texto: '"primeiro aninho de vida da Isa, papai e mamãe estavam super felizes", foi a frase que a sua mãe me disse quando me mandou essa foto, eles estavam felizes por ver você crescendo, não é nada diferente de agora, eles estão muito felizes por presenciar esse momento novamente, ver a mulher que você se tornou deixa eles muito orgulhosos, e estranho pensar que nesse mesmo ano eu também estava nascendo, apenas alguns anos atras de te conhcer.'
  },
  {
    ano: '2 Anos • 2009',
    subtitulo: '2009 ',
    titulo: 'Fofoqueira desde sempre',
    foto: './assets/img/2009.jpeg',
    texto: 'acho que não veio de agora seu amor por livro, desde sempre você sempre mostrou em ser curiosa e esforçada para ir atras de informação que você queira (ama fofoca).'
  },
  {
    ano: '3 Anos • 2010',
    subtitulo: '2010 ',
    titulo: 'DIDI tomando banho???',
    foto: './assets/img/2010.jpeg',
    texto: 'eu tinha em minha mente que 2010 era logo ali, é estranho ver que já já vai fazer duas décadas, é estranho ver que naquela época você tinha 2/3 anos e hoje você esta fazendo 19, sera que a Didi daquela época imaginava como era virar adulto.'
  },
  {
    ano: '4 Anos • 2011',
    subtitulo: '2011 ',
    titulo: 'A verdadeira princesa não espera o conto de fadas acontecer: ela faz acontecer',
    foto: './assets/img/2011.jpeg',
    texto: 'você e suas bonecas, pela as coisas que me falaram, você não largava elas por nada, sonhava em ser uma princesa da Disney, isso tornava tudo tão fofo, anos se passa e você ainda vai ser essa eterna princesa. '
  },
  {
    ano: '5 Anos • 2012',
    subtitulo: '2012 Samia',
    titulo: 'Eu estou totalmente dentro',
    foto: './assets/img/2012.jpeg',
    texto: 'Aos 5 anos, cada festinha e apresentação era motivo de orgulho. Seu sorriso banguela e espontâneo deixava qualquer dia mais feliz.'
  },
  {
    ano: '6 Anos • 2013',
    subtitulo: '2013 ',
    titulo: 'Nunca perca de vista o que realmente importa.',
    foto: './assets/img/2013.jpeg',
    texto: 'A gente sempre foi bem próximo desde pequeno, então não faltam histórias dessa época. Era bem comum um dormir na casa do outro, passar os dias juntos e inventar alguma coisa pra fazer. Fico feliz por ter crescido ao seu lado e vivido tantos momentos bons, desde as coisas mais simples até a nossa viagem pro Chile. Essa foto é de mais de 10 anos atrás, quando a gente ainda era criança e tinha muito tempo livre pra aproveitar.'
  },
  {
    ano: '7 Anos • 2014',
    subtitulo: '2014 - Narita',
    titulo: 'Um amigo de verdade te ajuda a voar quando você acha que não consegue.',
    foto: './assets/img/2014.jpeg',
    texto: 'Amiga lembro do dia que nos conhecemos, no primeiro aninho da escola em 2014, eu estava chorando por que tava com medo da escola grande e você veio falar comigo e viramos amigas dês de então, você sempre foi uma pessoa com um coração maravilhoso, gentil e atenciosa, sempre esteve ao meu lado e espero ter a alegria de estar ao seu lado em todas as outras fases da nossa vida, te amo'
  },
  {
    ano: '8 Anos • 2015',
    subtitulo: '2015 ',
    titulo: 'Existe uma princesa em cada garota.',
    foto: './assets/img/2015.jpeg',
    texto: 'Essa sua foto de 2015, você parecia estar bem feliz, e esse mesmo sorriso ainda encanta as pessoas hoje em dia, o seu jeito se ser (bobinha) aparentemente sempre foi o mesmo.'
  },
  {
    ano: '9 Anos • 2016',
    subtitulo: '2016 Marcela',
    titulo: 'Se você não está com medo, não está arriscando. E se não está arriscando, o que você está fazendo da vida?',
    foto: './assets/img/2016.jpeg',
    texto: 'O ano que eu, você e a samia não desgrudavamos por nadaa. Viviamos uma na casa da outra, gravando musica.ly o dia todoo e não tinha pausa não em, so trabalhando sem fim. Amavamos ficar andando de hoverboard e não podemos esquecer que viviamos brigando tbm kkkkk (pré-adolescente né mores, tenho pavorrrr). Foi o ano que nos aproximou e nós fez sentir todo esse carinho e admiração que temos uma pela outra❤️‍🩹🫶🏻Uma observação, jamais vou esquecer seu video falando dos 100 fãs kkkkkkk ANO HISTÓRICO!Obrigada isa, por cada momento e por todos esse anos! Te amooo muitoo🤍🤍❤️‍🩹'
  },
  {
    ano: '10 Anos • 2017',
    subtitulo: '2017 - Anna Clara',
    titulo: 'Ela é a sua lagosta.',
    foto: './assets/img/2017.jpeg',
    texto: 'Isa, são tantos anos sendo sua amiga e não me arrependo de nenhum, tudo ao seu lado ficar mais colorido e divertido, assim como os filtros que nós usávamos no snapchat. Você é como uma irmã de outra mãe para mim, desde pequenininha vivendo ao seu lado, sempre serei grata pela sua companhia e quero que saiba que pode contar comigo sempre, te amo demais!'
  },
  {
    ano: '11 Anos • 2018',
    subtitulo: '2018 - Vó Rose',
    titulo: 'Ohana quer dizer família. Família quer dizer nunca abandonar ou esquecer',
    foto: './assets/img/2018.jpeg',
    texto: 'Que foto linda cheia de amor e carinho !Que alegria fazer parte da sua história e guardar momentos tão especiais ao seu lado. Que a vida seja generosa com você, que nunca faltem motivos pra sorrir, coragem para realizar seus sonhos e amor para iluminar seus caminhos. Feliz 19 anos Isa! Que Deus abençoe cada passo da sua caminhada. Com todo amor da vó Rose. Parabéns e um feliz aniversário!'
  },
  {
    ano: '12 Anos • 2019',
    subtitulo: '2019 ',
    titulo: 'Segurem as memórias, elas vão segurar vocês.',
    foto: './assets/img/2019.jpeg',
    texto: 'já se passou 7 anos dessa foto, em 2019 foi o ultimo ano antes da pandemia, e analisando todas as fotos e historias que me falaram, você aproveitou bastante, e não deveria nunca parar de aproveitar.'  },
  {
    ano: '13 Anos • 2020',
    subtitulo: '2020 ',
    titulo: 'Queria ter te conhecido antes.',
    foto: './assets/img/2020.jpeg',
    texto: 'O meu 2020 foi bem conturbado, tudo o que eu queria naquela época era uma amizade verdadeira e depois de anos eu encontrei você, a sua amizade mudaria muitas pessoas, todo mundo precisa ter uma isabela degaspare do seu lado, as pessoas seriam mais felizes.'
  },
  {
    ano: '14 Anos • 2021',
    subtitulo: '2021 ',
    titulo: 'A aventura está lá fora!',
    foto: './assets/img/2021.jpeg',
    texto: 'A isabela de 2021 eu não conhecia, mas eu tenho certeza que se tivesse robux infinito e um kindle naquela época, você iria nunca sair daquela quarentena (talvez seria isso até hoje). '
  },
  {
    ano: '15 Anos • 2022',
    subtitulo: '2022 - seu grupo de amigos favorito',
    titulo: 'Eu queria que houvesse um jeito de saber que estamos nos bons velhos tempos antes mesmo de eles acabarem.',
    foto: './assets/img/2022.jpeg',
    texto: 'texto do riccardo',
    slides: [
      {
        foto: './assets/img/2022.jpeg',
        subtitulo: '2022 - Riccardo',
        titulo: 'Eu queria que houvesse um jeito de saber que estamos nos bons velhos tempos antes mesmo de eles acabarem.',
        texto: 'Então em 2022 eu e a Isa a gente se aproximou mais né, porque quando a gente éramos menores crianças a gente tipo assim meio que brigar, mas aí depois a gente tipo assim consolidou um grupinho eu Marina e o Paulo e a Isa e a gente teve momentos excelente né, momentos gostosos que marcaram bastante e eu amo muito.'
      },
      {
        foto: './assets/img/2022-2.jpeg',
        subtitulo: '2022 - Paulo',
        titulo: 'Isa de todos os momentos da nossa amizade, 2022 foi o ano que mais nos aproximamos, e honestamente ter conhecido a pessoa incrível que você, uma das melhores amigas, muito atenciosa, gentil, carismatica e com seu "jeitinho" (KSKSSKKSK) e seus gostos, foi um dos maiores privilégios que ja tive. Muito obrigado por nossos momentos juntos, nossas saídas com o pessoal do prédio, quando escutou meus desabafos, quando jogamos juntos; foram todos momentos que vou guardar pra toda minha vida, te amo amiga (figurinha da taylor fazendo <3)',
        texto: 'texto do paulo'
      },
      {
        foto: './assets/img/2022-3.jpeg',
        subtitulo: '2022 - Marina',
        titulo: 'em 2022 a gente começou a se ver mais, era praticamente todo dia, a gente tentava sair sempre os quatro juntos, para fazer qualquer coisa tipo conhecer um lugar novo ou acompanhar em momentos importantes. a Isa sempre estava topando qualquer lugar que a gente fosse ir, conhecemos muitas coisas novas e foi muito importante',
        texto: 'texto da marina'
      }
    ]
  },
  {
    ano: '16 Anos • 2023',
    subtitulo: '2023 - rere e sisi',
    titulo: 'Eu acho que você é a melhor pessoa que eu já conheci.',
    foto: './assets/img/2023.jpeg',
    texto: 'E finalmente chegou o ano que eu te conheci, nunca fui tão grato por conhecer alguém, neste ano você me fez eu me tornar uma outra pessoa simplesmente existindo e sendo você mesma, pelo o seu jeito fofa e simpática de ser, eu faria de tudo para sentir aquela sensação novamente de perceber que eu estou amando uma pessoa.',
    slides: [
      {
        foto: './assets/img/2023.jpeg',
        subtitulo: '2023 - rere',
        titulo: 'Eu acho que você é a melhor pessoa que eu já conheci.',
        texto: 'E finalmente chegou o ano que eu te conheci, nunca fui tão grato por conhecer alguém, neste ano você me fez eu me tornar uma outra pessoa simplesmente existindo e sendo você mesma, pelo o seu jeito fofa e simpática de ser, eu faria de tudo para sentir aquela sensação novamente de perceber que eu estou amando uma pessoa.'
      },
      {
        foto: './assets/img/2023-2.jpeg',
        subtitulo: '2023 - sisi',
        titulo: 'Amigos de verdade são aqueles que descem até o submundo com você.',
        texto: 'já nos conhecíamos a um tempo, mas em 2023 nos aproximamos de vdd, sou grata por vc ter se tornado uma pessoa tão importante em minha vida didi. n poderia ter uma melhor amg melhor q vc 💖'
      }
    ]
  },
  {
    ano: '17 Anos • 2024',
    subtitulo: '2024 ',
    titulo: 'Você é a pessoa mais teimosa e mais linda que eu conheço.',
    foto: './assets/img/2024.jpeg',
    texto: 'Aqui eu posso falar que eu posso que eu convivi o ano inteiro do seu lado, e aquela pessoa que eu me apaixonei em 2023 era muito mais do que eu imaginava, eu não sabia o quanto você se importava com as pessoas o quanto você planejava e pensava, todo dia naquela época eu descobria algo novo de você.'
  },
  {
    ano: '18 Anos • 2025',
    subtitulo: '2025 ',
    titulo: 'De todos os meus planos malignos, me apaixonar por você foi o único que eu não previ.',
    foto: './assets/img/2025.jpeg',
    texto: 'Este ano de 2025 foi muito diferente dos outros, nos estávamos encontrando o que nos queremos para a nossa vida adulta e fico feliz de ver o quanto nos mudamos e amadurecemos juntos'
  },
  {
    ano: '19 Anos • 2026 ✨',
    subtitulo: '2026',
    titulo: 'Verdadeiro ou Falso?',
    foto: './assets/img/2026.jpeg',
    texto: 'Eu gosto muito dessa foto, eu vejo dois jovens apaixonados olhando um horizonte, um dia novo, experiencia nova e eu acho que ela descreve bem como nos terminamos a escola, como ainda tem muita coisa para viver, e ter experiencias novas fora dela, pela a primeira vez eu não tinha você andando pelo os mesmos corredores que eu.'  }
];

document.addEventListener('DOMContentLoaded', () => {
  initSmartImageFallback();
  initLifeCounter();
  initMusicPlayer();
  initTimeline19Years();
  initFriendsCarousel();
  initScrollReveal();
  initLetterModalAndCelebration();
});

// ============================================================================
// FUNÇÃO AUXILIAR: SUPORTE AUTOMÁTICO A .JPG / .JPEG / .PNG / .WEBP
// Caso uma foto seja salva como .jpeg (padrão do WhatsApp) em vez de .jpg,
// carrega automaticamente a extensão correta!
// ============================================================================
function initSmartImageFallback() {
  const extensions = ['.jpeg', '.jpg', '.png', '.webp'];

  document.addEventListener(
    'error',
    (e) => {
      const target = e.target;
      if (!target || target.tagName !== 'IMG') return;

      const currentSrc = target.getAttribute('src') || '';
      if (currentSrc.startsWith('data:image/')) return;

      const dotIdx = currentSrc.lastIndexOf('.');
      if (dotIdx === -1) return;

      const base = currentSrc.substring(0, dotIdx);
      const triedIdx = parseInt(target.getAttribute('data-ext-try') || '0', 10);

      if (triedIdx < extensions.length) {
        target.setAttribute('data-ext-try', String(triedIdx + 1));
        target.src = base + extensions[triedIdx];
      } else {
        // Se a foto daquele ano ainda não foi adicionada na pasta assets/img/, exibe um card elegante sem ícone quebrado
        const fileName = base.split('/').pop() || 'Foto';
        const svgPlaceholder = `<svg xmlns="http://www.w3.org/2000/svg" width="600" height="420" viewBox="0 0 600 420"><rect width="600" height="420" fill="#0f172a"/><rect x="16" y="16" width="568" height="388" rx="16" fill="none" stroke="#1e293b" stroke-width="2"/><circle cx="300" cy="175" r="28" fill="#020617" stroke="#be123c" stroke-width="2"/><text x="300" y="182" text-anchor="middle" fill="#be123c" font-family="Georgia, serif" font-size="18" font-weight="bold">✦</text><text x="300" y="245" text-anchor="middle" fill="#e2e8f0" font-family="Georgia, serif" font-size="26" font-weight="bold">Ano ${fileName}</text><text x="300" y="278" text-anchor="middle" fill="#64748b" font-family="sans-serif" font-size="14">Adicione assets/img/${fileName}.jpeg</text></svg>`;
        target.src = 'data:image/svg+xml;utf8,' + encodeURIComponent(svgPlaceholder);
      }
    },
    true
  );
}

// ============================================================================
// FUNÇÃO 1: CONTADOR EM TEMPO REAL ("CELEBRANDO SEUS DIAS DE VIDA")
// ============================================================================
function initLifeCounter() {
  const daysEl = document.getElementById('counter-days');
  const hoursEl = document.getElementById('counter-hours');
  const minutesEl = document.getElementById('counter-minutes');
  const secondsEl = document.getElementById('counter-seconds');
  const ageSummaryEl = document.getElementById('counter-age-summary');
  const counterContainer = document.getElementById('life-counter-box');

  if (!daysEl || !hoursEl || !minutesEl || !secondsEl) return;

  const defaultDate = '2007-11-23T00:00:00';
  const customAttrDate = counterContainer?.getAttribute('data-birthdate');
  let birthDateString = DATA_NASCIMENTO;
  if (DATA_NASCIMENTO === defaultDate && customAttrDate && customAttrDate !== defaultDate) {
    birthDateString = customAttrDate;
  }
  const birthDate = new Date(birthDateString);

  function updateCounter() {
    const now = new Date();
    const diffMs = Math.max(0, now - birthDate);

    const totalSeconds = Math.floor(diffMs / 1000);
    const totalDays = Math.floor(totalSeconds / 86400);
    const hours = Math.floor((totalSeconds % 86400) / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    daysEl.textContent = totalDays.toLocaleString('pt-BR');
    hoursEl.textContent = String(hours).padStart(2, '0');
    minutesEl.textContent = String(minutes).padStart(2, '0');
    secondsEl.textContent = String(seconds).padStart(2, '0');

    if (ageSummaryEl && !isNaN(birthDate.getTime())) {
      const totalHoursFormatted = Math.floor(totalSeconds / 3600).toLocaleString('pt-BR');
      ageSummaryEl.textContent = `Celebrando 19 anos iluminando o mundo • ${totalHoursFormatted} horas de história ✨`;
    }
  }

  updateCounter();
  setInterval(updateCounter, 1000);
}

// ============================================================================
// FUNÇÃO 2: PLAYER DE MÚSICA PERSONALIZADO (HTML5 AUDIO)
// ============================================================================
function initMusicPlayer() {
  const audio = document.getElementById('audio-player');
  const coverImg = document.getElementById('player-cover');
  const coverWrapper = document.getElementById('player-cover-wrapper');
  const titleEl = document.getElementById('player-title');
  const artistEl = document.getElementById('player-artist');
  const statusBadgeEl = document.getElementById('player-status-text');
  const eqContainer = document.getElementById('player-equalizer');

  const playBtn = document.getElementById('btn-play-pause');
  const playIcon = document.getElementById('icon-play');
  const pauseIcon = document.getElementById('icon-pause');
  const prevBtn = document.getElementById('btn-prev');
  const nextBtn = document.getElementById('btn-next');

  const progressBar = document.getElementById('player-progress');
  const currentTimeEl = document.getElementById('player-current-time');
  const durationEl = document.getElementById('player-duration');
  const playlistContainer = document.getElementById('playlist-items');

  if (!audio || !playlistContainer) return;

  let currentTrackIndex = 0;
  let isPlaying = false;

  function formatTime(sec) {
    if (!sec || isNaN(sec) || !isFinite(sec)) return '0:00';
    const m = Math.floor(sec / 60);
    const s = Math.floor(sec % 60);
    return `${m}:${String(s).padStart(2, '0')}`;
  }

  function updateRangeFill(percent) {
    const safePercent = Math.min(100, Math.max(0, percent || 0));
    progressBar.style.background = `linear-gradient(to right, #be123c 0%, #be123c ${safePercent}%, #1e293b ${safePercent}%, #1e293b 100%)`;
  }

    function refreshSongMarquees() {
    requestAnimationFrame(() => {
      document.querySelectorAll('.marquee-wrapper').forEach((wrapper) => {
        const inner = wrapper.querySelector('.marquee-inner');
        if (!inner) return;
        wrapper.classList.remove('is-overflowing');
        const overflow = inner.scrollWidth - wrapper.clientWidth;
        if (overflow > 6) {
          const distance = overflow + 18;
          const durationSec = Math.max(6.5, distance / 28 + 3.5);
          wrapper.style.setProperty('--marquee-distance', `${distance}px`);
          wrapper.style.setProperty('--marquee-duration', `${durationSec.toFixed(1)}s`);
          wrapper.classList.add('is-overflowing');
        }
      });
    });
  }

  window.addEventListener('resize', refreshSongMarquees);
  if (document.fonts && document.fonts.ready) {
    document.fonts.ready.then(refreshSongMarquees);
  }

  function renderPlaylist() {
    playlistContainer.innerHTML = '';

    songs.forEach((track, idx) => {
      const isCurrent = idx === currentTrackIndex;
      const itemBtn = document.createElement('button');
      itemBtn.type = 'button';
      itemBtn.className = `w-full flex items-center gap-3.5 p-3 rounded-xl text-left transition-colors duration-200 border ${
        isCurrent
          ? 'bg-slate-950 border-rose-700'
          : 'bg-slate-900 hover:bg-slate-950/60 border-slate-800'
      }`;

      itemBtn.innerHTML = `
        <div class="relative w-12 h-12 rounded-lg overflow-hidden flex-shrink-0 border ${
          isCurrent ? 'border-rose-700' : 'border-slate-800'
        }">
          <img src="${track.cover}" alt="${track.title}" class="w-full h-full object-cover" />
          <div class="absolute inset-0 flex items-center justify-center bg-slate-950/60 ${
            isCurrent ? 'opacity-100' : 'opacity-0 hover:opacity-100'
          } transition-opacity">
            <span class="w-6 h-6 rounded-full bg-rose-700 text-slate-100 flex items-center justify-center text-xs font-bold">
              ${isCurrent && isPlaying ? '❚❚' : '▶'}
            </span>
          </div>
        </div>

        <div class="flex-1 min-w-0">
          <div class="flex items-center gap-2 min-w-0">
            <span class="text-xs font-bold px-2 py-0.5 rounded-full flex-shrink-0 ${
              isCurrent ? 'bg-rose-700 text-slate-100' : 'bg-slate-800 text-slate-300'
            }">
              0${idx + 1}
            </span>
            <div class="marquee-wrapper flex-1 min-w-0">
              <p class="marquee-inner font-semibold text-sm ${
                isCurrent ? 'text-slate-100' : 'text-slate-200'
              }">
                ${track.title}
              </p>
            </div>
          </div>
          <p class="text-xs text-slate-400 truncate mt-0.5">${track.artist}</p>
        </div>

        <div class="flex items-center gap-2 flex-shrink-0">
          ${
            isCurrent && isPlaying
              ? `<span class="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-rose-700 text-slate-100 text-[11px] font-semibold">
                   Tocando
                 </span>`
              : `<span class="text-xs font-medium text-slate-400" id="playlist-duration-${idx}">${track.duracaoTexto || ''}</span>`
          }
        </div>
      `;

      itemBtn.addEventListener('click', () => {
        if (currentTrackIndex === idx) {
          togglePlayPause();
        } else {
          loadTrack(idx, true);
        }
      });

      playlistContainer.appendChild(itemBtn);
    });

    refreshSongMarquees();
  }

  // Pré-carrega a duração real de cada um dos 5 arquivos MP3 para exibir na lista
  songs.forEach((track, idx) => {
    const tempAudio = new Audio();
    tempAudio.preload = 'metadata';
    tempAudio.src = track.src;
    tempAudio.addEventListener('loadedmetadata', () => {
      if (tempAudio.duration && isFinite(tempAudio.duration)) {
        track.duracaoTexto = formatTime(tempAudio.duration);
        const durBadge = document.getElementById(`playlist-duration-${idx}`);
        if (durBadge) durBadge.textContent = track.duracaoTexto;
        if (idx === currentTrackIndex && durationEl) {
          durationEl.textContent = track.duracaoTexto;
        }
      }
    });
  });

  function loadTrack(index, shouldPlay = false) {
    currentTrackIndex = (index + songs.length) % songs.length;
    const track = songs[currentTrackIndex];

    audio.src = track.src;
    audio.load();

    coverImg.src = track.cover;
    coverImg.alt = track.title;
    titleEl.textContent = track.title;
    artistEl.textContent = track.artist;
    currentTimeEl.textContent = '0:00';
    durationEl.textContent = track.duracaoTexto || '0:00';
    progressBar.value = 0;
    updateRangeFill(0);

    renderPlaylist();

    if (shouldPlay) {
      playAudio();
    }
  }

  function updatePlayingUI(playing) {
    isPlaying = playing;
    if (playing) {
      playIcon.classList.add('hidden');
      pauseIcon.classList.remove('hidden');
      statusBadgeEl.textContent = 'Tocando agora';
      eqContainer?.classList.add('is-playing');
      coverWrapper?.classList.add('cover-playing');
    } else {
      playIcon.classList.remove('hidden');
      pauseIcon.classList.add('hidden');
      statusBadgeEl.textContent = 'Pausado';
      eqContainer?.classList.remove('is-playing');
      coverWrapper?.classList.remove('cover-playing');
    }
    renderPlaylist();
  }

  function playAudio() {
    const playPromise = audio.play();
    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          updatePlayingUI(true);
        })
        .catch((err) => {
          console.warn('Erro ao reproduzir áudio:', err);
          updatePlayingUI(false);
        });
    }
  }

  function pauseAudio() {
    audio.pause();
    updatePlayingUI(false);
  }

  function togglePlayPause() {
    if (isPlaying) {
      pauseAudio();
    } else {
      playAudio();
    }
  }

  playBtn?.addEventListener('click', togglePlayPause);

  prevBtn?.addEventListener('click', () => {
    if (audio.currentTime > 3) {
      audio.currentTime = 0;
    } else {
      loadTrack(currentTrackIndex - 1, true);
    }
  });

  nextBtn?.addEventListener('click', () => {
    loadTrack(currentTrackIndex + 1, true);
  });

  audio.addEventListener('loadedmetadata', () => {
    if (audio.duration && isFinite(audio.duration)) {
      const formatted = formatTime(audio.duration);
      durationEl.textContent = formatted;
      songs[currentTrackIndex].duracaoTexto = formatted;
      const durBadge = document.getElementById(`playlist-duration-${currentTrackIndex}`);
      if (durBadge) durBadge.textContent = formatted;
    }
  });

  audio.addEventListener('timeupdate', () => {
    if (!audio.duration || !isFinite(audio.duration)) return;
    const percent = (audio.currentTime / audio.duration) * 100;
    progressBar.value = percent;
    updateRangeFill(percent);
    currentTimeEl.textContent = formatTime(audio.currentTime);
  });

  progressBar?.addEventListener('input', (e) => {
    const percent = parseFloat(e.target.value);
    updateRangeFill(percent);
    if (audio.duration && isFinite(audio.duration)) {
      currentTimeEl.textContent = formatTime((percent / 100) * audio.duration);
    }
  });

  progressBar?.addEventListener('change', (e) => {
    const percent = parseFloat(e.target.value);
    if (audio.duration && isFinite(audio.duration)) {
      audio.currentTime = (percent / 100) * audio.duration;
    }
  });

  audio.addEventListener('ended', () => {
    loadTrack(currentTrackIndex + 1, true);
  });

  loadTrack(0, false);
}

// ============================================================================
// FUNÇÃO 3: RETROSPECTIVA DE 19 ANOS (LINHA NO MEIO + CARDS INTERCALADOS
// ESQUERDA/DIREITA + MODAL INTERATIVO COM FOTO AMPLIADA E TEXTO COMPLETO)
// ============================================================================
function initTimeline19Years() {
  const container = document.getElementById('timeline-19-items');
  const modal = document.getElementById('timeline-modal');
  const modalImg = document.getElementById('timeline-modal-img');
  const modalBgBlur = document.getElementById('timeline-modal-bg-blur');
  const modalBadge = document.getElementById('timeline-modal-badge');
  const modalSub = document.getElementById('timeline-modal-sub');
  const modalTitle = document.getElementById('timeline-modal-title');
  const modalText = document.getElementById('timeline-modal-text');
  const modalCounter = document.getElementById('timeline-modal-counter');
  const closeBtn = document.getElementById('close-timeline-modal-btn');
  const prevBtn = document.getElementById('timeline-prev-btn');
  const nextBtn = document.getElementById('timeline-next-btn');

  // Controles de múltiplas fotos/textos dentro do mesmo ano
  const slidePrevBtn = document.getElementById('timeline-slide-prev');
  const slideNextBtn = document.getElementById('timeline-slide-next');
  const slideBar = document.getElementById('timeline-slide-bar');
  const slideDots = document.getElementById('timeline-slide-dots');
  const slideLabel = document.getElementById('timeline-slide-label');

  if (!container) return;

  const totalYears = RETROSPECTIVA_19_ANOS.length;
  let currentYearIdx = 0;
  let currentSlideIdx = 0;

  // Normaliza qualquer ano para retornar sua lista de slides (1 ou mais fotos + textos)
  function getYearSlides(item) {
    if (Array.isArray(item.slides) && item.slides.length > 0) {
      return item.slides;
    }
    return [
      {
        foto: item.foto,
        titulo: item.titulo,
        texto: item.texto
      }
    ];
  }

  container.innerHTML = '';

  RETROSPECTIVA_19_ANOS.forEach((item, idx) => {
    const isLeft = idx % 2 === 0; // Ímpares à esquerda; Pares à direita
    const slides = getYearSlides(item);
    const firstSlide = slides[0];
    const hasMultiple = slides.length > 1;

    const row = document.createElement('div');
    row.className = `relative flex items-center w-full pointer-events-none reveal ${
      isLeft ? 'justify-start' : 'justify-end'
    } ${idx > 0 ? '-mt-6 sm:-mt-10' : ''}`;

    row.innerHTML = `
      <!-- Marcador circular Vermelho Rubi sólido no meio da linha central -->
      <div
        class="absolute left-1/2 -translate-x-1/2 w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full bg-rose-700 border-2 border-slate-950 z-10 pointer-events-none"
      ></div>

      <!-- Card Compacto Flat Clicável (Esquerda ou Direita) com pointer-events-auto -->
      <article
        role="button"
        tabindex="0"
        aria-label="Ver ${item.ano} ampliado: ${firstSlide.titulo}"
        class="timeline-year-card pointer-events-auto relative z-20 w-[calc(50%-14px)] sm:w-[calc(50%-20px)] bg-slate-900 rounded-xl overflow-hidden border ${
          idx === totalYears - 1 ? 'border-rose-700' : 'border-slate-800'
        } text-left"
      >
        <!-- Foto do Ano -->
        <div class="relative h-28 sm:h-36 bg-slate-950 overflow-hidden group">
          <img
            src="${firstSlide.foto}"
            alt="${item.ano} - ${firstSlide.titulo}"
            loading="lazy"
            class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <!-- Selo do Ano Flat Rubi -->
          <span class="absolute top-2 left-2 px-2 py-0.5 rounded-full bg-rose-700 text-slate-100 text-[10px] sm:text-xs font-bold">
            ${item.ano}
          </span>
          ${
            hasMultiple
              ? `<span class="absolute bottom-2 right-2 px-2 py-0.5 rounded-full bg-slate-950/90 text-slate-100 border border-slate-700 text-[10px] font-semibold">
                   ${slides.length} fotos
                 </span>`
              : ''
          }
        </div>

        <!-- Resumo do Ano -->
        <div class="p-2.5 sm:p-3.5">
          <h3 class="font-bold text-xs sm:text-sm text-slate-200 line-clamp-1">
            ${firstSlide.titulo}
          </h3>
          <p class="text-[11px] sm:text-xs text-slate-400 leading-snug mt-1 line-clamp-2">
            ${firstSlide.texto}
          </p>
          <span class="inline-block mt-1.5 text-[10px] sm:text-[11px] font-semibold text-rose-500">
            ${hasMultiple ? `Ver ${slides.length} fotos →` : 'Ver completo →'}
          </span>
        </div>
      </article>
    `;

    const cardEl = row.querySelector('.timeline-year-card');
    cardEl.addEventListener('click', () => openYearModal(idx));
    cardEl.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        openYearModal(idx);
      }
    });

    container.appendChild(row);
  });

  function renderCurrentSlide() {
    const item = RETROSPECTIVA_19_ANOS[currentYearIdx];
    const slides = getYearSlides(item);
    currentSlideIdx = ((currentSlideIdx % slides.length) + slides.length) % slides.length;
    const activeSlide = slides[currentSlideIdx];
    const hasMultiple = slides.length > 1;

    if (modalImg) {
      modalImg.removeAttribute('data-ext-try');
      modalImg.src = activeSlide.foto;
      modalImg.alt = `${item.ano} - ${activeSlide.titulo}`;
    }
    if (modalBgBlur) {
      modalBgBlur.removeAttribute('data-ext-try');
      modalBgBlur.src = activeSlide.foto;
    }
    if (modalBadge) modalBadge.textContent = item.ano;
    if (modalSub) {
      const baseSub = activeSlide.subtitulo || item.subtitulo || `Ano ${currentYearIdx + 1} de ${totalYears}`;
      modalSub.textContent = hasMultiple
        ? `${baseSub} • Foto ${currentSlideIdx + 1} de ${slides.length}`
        : baseSub;
    }
    if (modalTitle) modalTitle.textContent = activeSlide.titulo;
    if (modalText) modalText.textContent = activeSlide.texto;
    if (modalCounter) modalCounter.textContent = `${currentYearIdx + 1} / ${totalYears}`;

    // Mostra ou esconde as setas e bolinhas internas quando o ano tem mais de 1 foto
    if (hasMultiple) {
      slidePrevBtn?.classList.remove('hidden');
      slidePrevBtn?.classList.add('flex');
      slideNextBtn?.classList.remove('hidden');
      slideNextBtn?.classList.add('flex');
      slideBar?.classList.remove('hidden');
      slideBar?.classList.add('flex');

      if (slideLabel) {
        slideLabel.textContent = `Foto ${currentSlideIdx + 1} de ${slides.length}`;
      }

      if (slideDots) {
        slideDots.innerHTML = '';
        slides.forEach((_, sIdx) => {
          const dot = document.createElement('button');
          dot.type = 'button';
          dot.setAttribute('aria-label', `Ir para foto ${sIdx + 1}`);
          dot.className = `h-1.5 rounded-full transition-all ${
            sIdx === currentSlideIdx ? 'w-4 bg-rose-600' : 'w-1.5 bg-slate-600 hover:bg-slate-400'
          }`;
          dot.addEventListener('click', (e) => {
            e.stopPropagation();
            currentSlideIdx = sIdx;
            renderCurrentSlide();
          });
          slideDots.appendChild(dot);
        });
      }
    } else {
      slidePrevBtn?.classList.add('hidden');
      slidePrevBtn?.classList.remove('flex');
      slideNextBtn?.classList.add('hidden');
      slideNextBtn?.classList.remove('flex');
      slideBar?.classList.add('hidden');
      slideBar?.classList.remove('flex');
    }
  }

  function updateModalContent(yearIdx, slideIdx = 0) {
    currentYearIdx = (yearIdx + totalYears) % totalYears;
    currentSlideIdx = slideIdx;
    renderCurrentSlide();
  }

  function openYearModal(idx) {
    if (!modal) return;
    updateModalContent(idx, 0);
    modal.classList.add('is-open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeYearModal() {
    if (!modal) return;
    modal.classList.remove('is-open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  function goNextSlideOrYear() {
    const slides = getYearSlides(RETROSPECTIVA_19_ANOS[currentYearIdx]);
    if (currentSlideIdx < slides.length - 1) {
      currentSlideIdx++;
      renderCurrentSlide();
    } else {
      updateModalContent(currentYearIdx + 1, 0);
    }
  }

  function goPrevSlideOrYear() {
    if (currentSlideIdx > 0) {
      currentSlideIdx--;
      renderCurrentSlide();
    } else {
      const prevYear = (currentYearIdx - 1 + totalYears) % totalYears;
      const prevSlides = getYearSlides(RETROSPECTIVA_19_ANOS[prevYear]);
      updateModalContent(prevYear, prevSlides.length - 1);
    }
  }

  closeBtn?.addEventListener('click', closeYearModal);

  // Setas laterais na foto passam entre as fotos e textos daquele ano
  slidePrevBtn?.addEventListener('click', (e) => {
    e.stopPropagation();
    currentSlideIdx--;
    renderCurrentSlide();
  });

  slideNextBtn?.addEventListener('click', (e) => {
    e.stopPropagation();
    currentSlideIdx++;
    renderCurrentSlide();
  });

  // Botões do rodapé mudam de Ano
  prevBtn?.addEventListener('click', () => {
    updateModalContent(currentYearIdx - 1, 0);
  });

  nextBtn?.addEventListener('click', () => {
    updateModalContent(currentYearIdx + 1, 0);
  });

  modal?.addEventListener('click', (e) => {
    if (e.target === modal) {
      closeYearModal();
    }
  });

  // Suporte a Swipe lateral no modal: passa para a próxima foto/texto do mesmo ano (e depois próximo ano)
  let modalTouchStartX = 0;
  modal?.addEventListener(
    'touchstart',
    (e) => {
      modalTouchStartX = e.changedTouches[0].screenX;
    },
    { passive: true }
  );

  modal?.addEventListener(
    'touchend',
    (e) => {
      const diffX = modalTouchStartX - e.changedTouches[0].screenX;
      if (Math.abs(diffX) > 45) {
        if (diffX > 0) {
          goNextSlideOrYear();
        } else {
          goPrevSlideOrYear();
        }
      }
    },
    { passive: true }
  );

  document.addEventListener('keydown', (e) => {
    if (!modal || !modal.classList.contains('is-open')) return;
    if (e.key === 'Escape') closeYearModal();
    if (e.key === 'ArrowLeft') goPrevSlideOrYear();
    if (e.key === 'ArrowRight') goNextSlideOrYear();
  });
}

// ============================================================================
// FUNÇÃO 4: CARROSSEL DE AMIGOS (3 POR VEZ) + MODAL COM FOTO AMPLIADA AO CLICAR
// - Exibe 3 círculos de fotos no topo e os 3 cards correspondentes abaixo
// - Ao clicar em qualquer mensagem (ou na foto), abre o modal com a foto ampliada!
// ============================================================================
function initFriendsCarousel() {
  const track = document.getElementById('friends-cards-track');
  const avatarsBar = document.getElementById('friends-avatars-bar');
  const prevBtn = document.getElementById('friend-prev-btn');
  const nextBtn = document.getElementById('friend-next-btn');
  const counterBadge = document.getElementById('friend-counter-badge');
  const autoplayToggleBtn = document.getElementById('friend-autoplay-toggle');
  const progressBar = document.getElementById('friends-autoplay-progress');
  const progressWrapper = document.getElementById('friends-progress-wrapper');
  const controlsWrapper = document.getElementById('friends-carousel-controls');
  const viewAllBtn = document.getElementById('friend-view-all-btn');

  // Elementos do Modal de Foto Ampliada + Mensagem do Amigo
  const friendModal = document.getElementById('friend-modal');
  const friendModalImg = document.getElementById('friend-modal-img');
  const friendModalBgBlur = document.getElementById('friend-modal-bg-blur');
  const friendModalName = document.getElementById('friend-modal-name');
  const friendModalText = document.getElementById('friend-modal-text');
  const friendModalCounter = document.getElementById('friend-modal-counter');
  const closeFriendModalBtn = document.getElementById('close-friend-modal-btn');
  const prevFriendModalBtn = document.getElementById('friend-modal-prev');
  const nextFriendModalBtn = document.getElementById('friend-modal-next');

  if (!track || !avatarsBar) return;

  const cards = Array.from(track.querySelectorAll('.friend-card-item'));
  const total = cards.length;
  if (total === 0) return;

  const CARDS_PER_VIEW = Math.min(3, total);
  let startIndex = 0;
  let currentModalFriendIdx = 0;
  let isAutoPlaying = true;
  let isPausedByTouch = false;
  let isGridMode = false;
  const ROTATION_DURATION_MS = 7500;
  const TICK_MS = 75;
  let elapsedMs = 0;

  // Extrai os dados (foto, nome e parágrafos da mensagem) de cada card
  const friendsData = cards.map((card, index) => {
    const imgEl = card.querySelector('.friend-avatar-img');
    const nameEl = card.querySelector('.friend-name');
    const paragraphs = Array.from(card.querySelectorAll('p')).map((p) => p.innerHTML);

    // Adiciona um selo discreto no rodapé de cada card
    if (!card.querySelector('.expand-hint')) {
      const hint = document.createElement('div');
      hint.className = 'expand-hint mt-2.5 pt-2 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-semibold text-rose-500';
      hint.innerHTML = '<span>Toque na mensagem para abrir e ampliar a foto</span><span>→</span>';
      card.appendChild(hint);
    }

    return {
      imgSrc: imgEl ? imgEl.getAttribute('src') : './assets/img/Alice.jpeg',
      name: nameEl ? nameEl.textContent.trim() : `Amigo ${index + 1}`,
      paragraphs
    };
  });

  avatarsBar.innerHTML = '';

  // Botão seta esquerda ao lado dos 3 círculos
  const prevCircleGroupBtn = document.createElement('button');
  prevCircleGroupBtn.type = 'button';
  prevCircleGroupBtn.setAttribute('aria-label', 'Grupo anterior de amigos');
  prevCircleGroupBtn.className =
    'w-8 h-8 rounded-full bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-800 flex items-center justify-center text-sm font-bold transition-colors active:scale-95 flex-shrink-0';
  prevCircleGroupBtn.innerHTML = '‹';
  avatarsBar.appendChild(prevCircleGroupBtn);

  // Palco central dos 3 círculos do grupo atual
  const circlesStage = document.createElement('div');
  circlesStage.className = 'flex items-center justify-center gap-5 sm:gap-7';
  avatarsBar.appendChild(circlesStage);

  // Botão seta direita ao lado dos 3 círculos
  const nextCircleGroupBtn = document.createElement('button');
  nextCircleGroupBtn.type = 'button';
  nextCircleGroupBtn.setAttribute('aria-label', 'Próximo grupo de amigos');
  nextCircleGroupBtn.className =
    'w-8 h-8 rounded-full bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-800 flex items-center justify-center text-sm font-bold transition-colors active:scale-95 flex-shrink-0';
  nextCircleGroupBtn.innerHTML = '›';
  avatarsBar.appendChild(nextCircleGroupBtn);

  const avatarButtons = friendsData.map((friend, index) => {
    const firstName = friend.name.split(' ')[0];
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'hidden flex-col items-center gap-1.5 flex-shrink-0 group focus:outline-none';
    btn.innerHTML = `
      <div class="avatar-ring p-0.5 rounded-full transition-all duration-300 bg-rose-700 group-hover:scale-105">
        <img
          src="${friend.imgSrc}"
          alt="${friend.name}"
          class="rounded-full object-cover border-2 border-slate-950"
          style="width: 56px; height: 56px;"
        />
      </div>
      <span class="avatar-label text-xs font-semibold truncate max-w-[74px] transition-colors text-slate-200">
        ${firstName}
      </span>
    `;

    // Ao clicar no círculo da foto no topo, abre o modal da pessoa com a foto ampliada!
    btn.addEventListener('click', () => {
      openFriendModal(index);
    });

    circlesStage.appendChild(btn);
    return btn;
  });

  function getVisibleIndices(start) {
    const indices = [];
    for (let i = 0; i < CARDS_PER_VIEW; i++) {
      indices.push((start + i) % total);
    }
    return indices;
  }

  function showGroupStartingAt(newStartIndex) {
    startIndex = ((newStartIndex % total) + total) % total;
    const visibleIndices = getVisibleIndices(startIndex);

    cards.forEach((card) => {
      card.classList.remove('is-active', 'stagger-1', 'stagger-2');
    });

    visibleIndices.forEach((cardIdx, pos) => {
      const card = cards[cardIdx];
      card.classList.add('is-active');
      if (pos === 1) card.classList.add('stagger-1');
      if (pos === 2) card.classList.add('stagger-2');
    });

    avatarButtons.forEach((btn, idx) => {
      if (visibleIndices.includes(idx)) {
        btn.classList.remove('hidden');
        btn.classList.add('flex');
      } else {
        btn.classList.add('hidden');
        btn.classList.remove('flex');
      }
    });

    if (counterBadge) {
      const firstNum = visibleIndices[0] + 1;
      const lastNum = visibleIndices[visibleIndices.length - 1] + 1;
      counterBadge.textContent = `Mostrando ${firstNum}–${lastNum} de ${total}`;
    }

    elapsedMs = 0;
    if (progressBar) {
      progressBar.style.width = '0%';
    }
  }

  // Funções do Modal de Foto Ampliada + Mensagem Completa do Amigo
  function updateFriendModalContent(idx) {
    currentModalFriendIdx = ((idx % total) + total) % total;
    const friend = friendsData[currentModalFriendIdx];

    if (friendModalImg) {
      friendModalImg.src = friend.imgSrc;
      friendModalImg.alt = `Foto com ${friend.name}`;
    }
    if (friendModalBgBlur) {
      friendModalBgBlur.src = friend.imgSrc;
    }
    if (friendModalName) {
      friendModalName.textContent = friend.name;
    }
    if (friendModalText) {
      friendModalText.innerHTML = friend.paragraphs.map((p) => `<p>${p}</p>`).join('');
    }
    if (friendModalCounter) {
      friendModalCounter.textContent = `${currentModalFriendIdx + 1} / ${total}`;
    }
  }

  function openFriendModal(idx) {
    if (!friendModal) return;
    updateFriendModalContent(idx);
    friendModal.classList.add('is-open');
    friendModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeFriendModal() {
    if (!friendModal) return;
    friendModal.classList.remove('is-open');
    friendModal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  closeFriendModalBtn?.addEventListener('click', closeFriendModal);

  prevFriendModalBtn?.addEventListener('click', () => {
    updateFriendModalContent(currentModalFriendIdx - 1);
  });

  nextFriendModalBtn?.addEventListener('click', () => {
    updateFriendModalContent(currentModalFriendIdx + 1);
  });

  friendModal?.addEventListener('click', (e) => {
    if (e.target === friendModal) {
      closeFriendModal();
    }
  });

  // Suporte a Swipe lateral dentro do modal do amigo
  let modalTouchStartX = 0;
  friendModal?.addEventListener(
    'touchstart',
    (e) => {
      modalTouchStartX = e.changedTouches[0].screenX;
    },
    { passive: true }
  );

  friendModal?.addEventListener(
    'touchend',
    (e) => {
      const diffX = modalTouchStartX - e.changedTouches[0].screenX;
      if (Math.abs(diffX) > 45) {
        if (diffX > 0) {
          updateFriendModalContent(currentModalFriendIdx + 1);
        } else {
          updateFriendModalContent(currentModalFriendIdx - 1);
        }
      }
    },
    { passive: true }
  );

  document.addEventListener('keydown', (e) => {
    if (!friendModal || !friendModal.classList.contains('is-open')) return;
    if (e.key === 'Escape') closeFriendModal();
    if (e.key === 'ArrowLeft') updateFriendModalContent(currentModalFriendIdx - 1);
    if (e.key === 'ArrowRight') updateFriendModalContent(currentModalFriendIdx + 1);
  });

  // Timer de rotação automática de 3 em 3
  setInterval(() => {
    if (
      !isAutoPlaying ||
      isPausedByTouch ||
      isGridMode ||
      total <= CARDS_PER_VIEW ||
      friendModal?.classList.contains('is-open')
    ) {
      return;
    }

    elapsedMs += TICK_MS;
    const percent = Math.min(100, (elapsedMs / ROTATION_DURATION_MS) * 100);
    if (progressBar) {
      progressBar.style.width = `${percent}%`;
    }

    if (elapsedMs >= ROTATION_DURATION_MS) {
      showGroupStartingAt(startIndex + CARDS_PER_VIEW);
    }
  }, TICK_MS);

  prevCircleGroupBtn.addEventListener('click', () => showGroupStartingAt(startIndex - CARDS_PER_VIEW));
  nextCircleGroupBtn.addEventListener('click', () => showGroupStartingAt(startIndex + CARDS_PER_VIEW));
  prevBtn?.addEventListener('click', () => showGroupStartingAt(startIndex - CARDS_PER_VIEW));
  nextBtn?.addEventListener('click', () => showGroupStartingAt(startIndex + CARDS_PER_VIEW));

  autoplayToggleBtn?.addEventListener('click', () => {
    isAutoPlaying = !isAutoPlaying;
    autoplayToggleBtn.textContent = isAutoPlaying ? 'Pausar' : 'Girar';
  });

  track.addEventListener('touchstart', () => {
    isPausedByTouch = true;
  }, { passive: true });

  track.addEventListener('touchend', () => {
    isPausedByTouch = false;
  }, { passive: true });

  // Clique em qualquer card de mensagem abre o modal com a foto ampliada (exceto se clicar apenas no botão Amei)
  cards.forEach((card, idx) => {
    card.addEventListener('click', (e) => {
      if (e.target.closest('.friend-like-btn')) return;
      openFriendModal(idx);
    });

    const likeBtn = card.querySelector('.friend-like-btn');
    const likeLabel = card.querySelector('.like-label');
    if (!likeBtn) return;

    likeBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      likeBtn.classList.add('bg-rose-700', 'text-slate-100', 'border-rose-700');
      likeBtn.classList.remove('bg-slate-950', 'text-slate-300', 'border-slate-800');
      if (likeLabel) likeLabel.textContent = 'Amei!';

      const popHeart = document.createElement('span');
      popHeart.textContent = '❤️';
      popHeart.className = 'reaction-heart-pop absolute -top-2 right-2 text-base pointer-events-none';
      likeBtn.appendChild(popHeart);
      setTimeout(() => popHeart.remove(), 900);
    });
  });

  viewAllBtn?.addEventListener('click', () => {
    isGridMode = !isGridMode;
    if (isGridMode) {
      track.classList.add('friends-grid-mode');
      progressWrapper?.classList.add('hidden');
      controlsWrapper?.classList.add('hidden');
      viewAllBtn.innerHTML = '<span>Voltar para Rotação (3 por vez)</span>';
    } else {
      track.classList.remove('friends-grid-mode');
      progressWrapper?.classList.remove('hidden');
      controlsWrapper?.classList.remove('hidden');
      viewAllBtn.innerHTML = '<span>Ver Todos os Recados de Uma Vez</span>';
      showGroupStartingAt(startIndex);
    }
  });

  showGroupStartingAt(0);
}

// ============================================================================
// FUNÇÃO 5: SCROLL REVEAL (ANIMAÇÕES DE ENTRADA COM INTERSECTIONOBSERVER)
// ============================================================================
function initScrollReveal() {
  const revealElements = document.querySelectorAll('.reveal');

  if (!('IntersectionObserver' in window)) {
    revealElements.forEach((el) => el.classList.add('is-visible'));
    return;
  }

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          obs.unobserve(entry.target);
        }
      });
    },
    {
      root: null,
      threshold: 0.05,
      rootMargin: '0px 0px -15px 0px'
    }
  );

  revealElements.forEach((el) => observer.observe(el));
}

// ============================================================================
// FUNÇÃO 6: MODAL DA CARTA DE ANIVERSÁRIO + CHUVA DE CORAÇÕES, BRILHOS E CONFETES
// ============================================================================
function initLetterModalAndCelebration() {
  const openBtn = document.getElementById('open-letter-btn');
  const closeBtn = document.getElementById('close-letter-btn');
  const closeFooterBtn = document.getElementById('close-letter-footer-btn');
  const moreCelebrationBtn = document.getElementById('more-celebration-btn');
  const modal = document.getElementById('letter-modal');
  const canvas = document.getElementById('celebration-canvas');

  if (!openBtn || !modal || !canvas) return;

  const ctx = canvas.getContext('2d');
  let particles = [];
  let animationFrameId = null;

  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }

  window.addEventListener('resize', resizeCanvas);
  resizeCanvas();

  // Paleta Rubi & Prata Editorial para a chuva de celebração
  const colors = [
    '#be123c', // rose-700 (Rubi principal)
    '#e11d48', // rose-600
    '#f43f5e', // rose-500
    '#fda4af', // rose-300
    '#e2e8f0'  // slate-200 (Branco-gelo)
  ];

  function createParticles(amount = 95) {
    const types = ['heart', 'sparkle', 'confetti'];

    for (let i = 0; i < amount; i++) {
      const type = types[Math.floor(Math.random() * types.length)];
      particles.push({
        x: Math.random() * canvas.width,
        y: -20 - Math.random() * (canvas.height * 0.65),
        size: type === 'heart' ? 11 + Math.random() * 11 : 7 + Math.random() * 9,
        speedY: 1.6 + Math.random() * 2.8,
        speedX: (Math.random() - 0.5) * 1.6,
        swingAngle: Math.random() * Math.PI * 2,
        swingSpeed: 0.02 + Math.random() * 0.04,
        rotation: Math.random() * Math.PI * 2,
        rotationSpeed: (Math.random() - 0.5) * 0.05,
        color: colors[Math.floor(Math.random() * colors.length)],
        opacity: 0.85 + Math.random() * 0.15,
        type
      });
    }

    if (!animationFrameId) {
      animateParticles();
    }
  }

  function drawHeart(ctx, size) {
    ctx.beginPath();
    const topCurveHeight = size * 0.3;
    ctx.moveTo(0, topCurveHeight);
    ctx.bezierCurveTo(0, 0, -size / 2, 0, -size / 2, topCurveHeight);
    ctx.bezierCurveTo(-size / 2, (size + topCurveHeight) / 2, 0, (size + topCurveHeight) / 1.4, 0, size);
    ctx.bezierCurveTo(0, (size + topCurveHeight) / 1.4, size / 2, (size + topCurveHeight) / 2, size / 2, topCurveHeight);
    ctx.bezierCurveTo(size / 2, 0, 0, 0, 0, topCurveHeight);
    ctx.closePath();
    ctx.fill();
  }

  function drawSparkle(ctx, size) {
    ctx.beginPath();
    for (let i = 0; i < 4; i++) {
      ctx.lineTo(Math.cos((i * Math.PI) / 2) * size, Math.sin((i * Math.PI) / 2) * size);
      ctx.lineTo(
        Math.cos(((i + 0.5) * Math.PI) / 2) * (size * 0.35),
        Math.sin(((i + 0.5) * Math.PI) / 2) * (size * 0.35)
      );
    }
    ctx.closePath();
    ctx.fill();
  }

  function animateParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particles.forEach((p) => {
      p.swingAngle += p.swingSpeed;
      p.y += p.speedY;
      p.x += p.speedX + Math.sin(p.swingAngle) * 0.9;
      p.rotation += p.rotationSpeed;

      if (p.y > canvas.height * 0.82) {
        p.opacity -= 0.012;
      }

      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate(p.rotation);
      ctx.globalAlpha = Math.max(0, p.opacity);
      ctx.fillStyle = p.color;

      if (p.type === 'heart') {
        drawHeart(ctx, p.size);
      } else if (p.type === 'sparkle') {
        drawSparkle(ctx, p.size);
      } else {
        ctx.fillRect(-p.size / 2, -p.size / 4, p.size, p.size * 0.55);
      }

      ctx.restore();
    });

    particles = particles.filter((p) => p.y < canvas.height + 40 && p.opacity > 0.02);

    if (particles.length > 0) {
      animationFrameId = requestAnimationFrame(animateParticles);
    } else {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      animationFrameId = null;
    }
  }

  function openModal() {
    modal.classList.add('is-open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    createParticles(110);
  }

  function closeModal() {
    modal.classList.remove('is-open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  openBtn.addEventListener('click', openModal);
  closeBtn?.addEventListener('click', closeModal);
  closeFooterBtn?.addEventListener('click', closeModal);

  moreCelebrationBtn?.addEventListener('click', () => {
    createParticles(90);
  });

  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      closeModal();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('is-open')) {
      closeModal();
    }
  });
}
