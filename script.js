/* ============================================================
   script.js — Instituto Ayó
   Menu, tema, entrada das seções, contadores, lightbox
   e a montagem das páginas movidas a dados.
   ============================================================ */
(function () {
  'use strict';
  var doc = document;
  var reduzido = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function esc(s) {
    return String(s == null ? '' : s)
      .replace(/&/g, '&amp;').replace(/</g, '&lt;')
      .replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  }

  function ano() {
    var hoje = new Date().getFullYear();
    doc.querySelectorAll('.ano-atual').forEach(function (el) { el.textContent = hoje; });
  }

  function tema() {
    var btn = doc.querySelector('.tema-btn');
    if (!btn) return;
    function pinta() {
      var atual = doc.documentElement.getAttribute('data-tema');
      btn.innerHTML = atual === 'escuro'
        ? '<i class="fas fa-sun" aria-hidden="true"></i>'
        : '<i class="fas fa-moon" aria-hidden="true"></i>';
      btn.setAttribute('aria-label', atual === 'escuro' ? 'Mudar para o tema claro' : 'Mudar para o tema escuro');
    }
    pinta();
    btn.addEventListener('click', function () {
      var novo = doc.documentElement.getAttribute('data-tema') === 'escuro' ? 'claro' : 'escuro';
      doc.documentElement.setAttribute('data-tema', novo);
      try { localStorage.setItem('ayo-tema', novo); } catch (e) {}
      pinta();
    });
  }

  function menu() {
    var btn = doc.querySelector('.menu-btn');
    var nav = doc.querySelector('.menu');
    if (!btn || !nav) return;
    btn.addEventListener('click', function () {
      var aberto = nav.classList.toggle('aberto');
      btn.setAttribute('aria-expanded', aberto ? 'true' : 'false');
    });
    nav.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () {
        nav.classList.remove('aberto');
        btn.setAttribute('aria-expanded', 'false');
      });
    });
    doc.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && nav.classList.contains('aberto')) {
        nav.classList.remove('aberto');
        btn.setAttribute('aria-expanded', 'false');
        btn.focus();
      }
    });
  }

  function topo() {
    var el = doc.querySelector('.topo');
    if (!el) return;
    var limite = doc.querySelector('.abertura') ? 90 : 10;
    function ajusta() { el.classList.toggle('solido', window.scrollY > limite); }
    ajusta();
    window.addEventListener('scroll', ajusta, { passive: true });
  }

  function surge() {
    var alvos = doc.querySelectorAll('.surge');
    if (!alvos.length) return;
    if (reduzido || !('IntersectionObserver' in window)) {
      alvos.forEach(function (el) { el.classList.add('visivel'); });
      return;
    }
    var obs = new IntersectionObserver(function (ent) {
      ent.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add('visivel'); obs.unobserve(e.target); }
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.06 });
    alvos.forEach(function (el) { obs.observe(el); });
    setTimeout(function () { alvos.forEach(function (el) { el.classList.add('visivel'); }); }, 4000);
  }

  function contadores() {
    var nums = doc.querySelectorAll('[data-conta]');
    if (!nums.length) return;
    function anima(el) {
      var alvo = parseFloat(el.getAttribute('data-conta'));
      var sufixo = el.getAttribute('data-sufixo') || '';
      if (reduzido) { el.textContent = alvo.toLocaleString('pt-BR') + sufixo; return; }
      var ini = null, dur = 1600;
      function passo(t) {
        if (!ini) ini = t;
        var p = Math.min((t - ini) / dur, 1);
        var suave = 1 - Math.pow(1 - p, 3);
        el.textContent = Math.round(alvo * suave).toLocaleString('pt-BR') + (p === 1 ? sufixo : '');
        if (p < 1) requestAnimationFrame(passo);
      }
      requestAnimationFrame(passo);
    }
    if (!('IntersectionObserver' in window)) { nums.forEach(anima); return; }
    var obs = new IntersectionObserver(function (ent) {
      ent.forEach(function (e) { if (e.isIntersecting) { anima(e.target); obs.unobserve(e.target); } });
    }, { threshold: 0.4 });
    nums.forEach(function (el) { el.textContent = '0'; obs.observe(el); });
  }

  function lightbox() {
    var caixa = doc.querySelector('.lightbox');
    if (!caixa) return;
    var img = caixa.querySelector('img');
    var leg = caixa.querySelector('figcaption');
    var ultimo = null;
    function abre(src, texto, origem) {
      ultimo = origem; img.src = src; img.alt = texto || '';
      leg.textContent = texto || '';
      caixa.classList.add('aberto');
      doc.body.style.overflow = 'hidden';
      caixa.querySelector('.lightbox-fechar').focus();
    }
    function fecha() {
      caixa.classList.remove('aberto');
      doc.body.style.overflow = '';
      if (ultimo) ultimo.focus();
    }
    doc.addEventListener('click', function (e) {
      var alvo = e.target.closest('.gal-item');
      if (alvo && !alvo.classList.contains('sem-foto')) {
        var f = alvo.querySelector('img');
        if (!f || !f.getAttribute('src')) return;
        abre(f.getAttribute('src'), alvo.getAttribute('data-legenda') || f.alt, alvo);
        return;
      }
      if (e.target.closest('.lightbox-fechar') || e.target === caixa) fecha();
    });
    doc.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && caixa.classList.contains('aberto')) fecha();
    });
  }

  function fotoSegura() {
    doc.querySelectorAll('img').forEach(function (im) {
      if (im.dataset.vigiada) return;
      im.dataset.vigiada = '1';
      im.addEventListener('error', function () {
        var pai = im.closest('.gal-item, .curso, .programa, .linha-foto-media, .parceiro');
        if (pai) pai.classList.add('sem-foto');
        im.style.display = 'none';
      });
    });
  }

  function normaliza(t) {
    return String(t || '').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  }

  function paginaProgramas() {
    var alvo = doc.getElementById('lista-programas');
    if (!alvo || typeof PROGRAMAS === 'undefined') return;
    alvo.innerHTML = PROGRAMAS.map(function (p) {
      var figura = p.semFoto
        ? '<figure></figure>'
        : '<figure><img src="' + esc(p.foto) + '" alt="' + esc(p.alt) + '" loading="lazy"></figure>';
      return '<article class="programa' + (p.semFoto ? ' sem-foto' : '') + '">' + figura +
        '<span class="tag">' + esc(p.tag) + '</span>' +
        '<h3>' + esc(p.nome) + '</h3>' +
        '<p>' + esc(p.texto) + '</p></article>';
    }).join('');
    fotoSegura();
  }

  function paginaCursos() {
    var grade = doc.getElementById('grade-cursos');
    if (!grade || typeof CURSOS === 'undefined') return;
    var busca = doc.getElementById('busca-curso');
    var contagem = doc.getElementById('contagem-cursos');
    var eixo = 'todos';
    function desenha() {
      var termo = normaliza(busca ? busca.value : '');
      var lista = CURSOS.filter(function (c) {
        var okEixo = eixo === 'todos' || c.eixo === eixo;
        var okTermo = !termo || normaliza(c.nome + ' ' + c.resumo + ' ' + c.eixo).indexOf(termo) > -1;
        return okEixo && okTermo;
      });
      if (contagem) contagem.textContent = lista.length === 1 ? '1 curso encontrado' : lista.length + ' cursos encontrados';
      if (!lista.length) {
        grade.innerHTML = '<p class="vazio">Nenhum curso com esse nome. Tente buscar por trança, crochê ou letramento.</p>';
        return;
      }
      grade.innerHTML = lista.map(function (c) {
        return '<article class="curso">' +
          '<figure><img src="' + esc(c.foto) + '" alt="' + esc(c.alt) + '" loading="lazy">' +
          '<span class="eixo">' + esc(c.eixo) + '</span></figure>' +
          '<h3>' + esc(c.nome) + '</h3>' +
          '<p>' + esc(c.resumo) + '</p>' +
          '<span class="selo">' + esc(c.selo) + '</span></article>';
      }).join('');
      fotoSegura();
    }
    var escolha = doc.getElementById('eixo-curso');
    if (escolha) escolha.addEventListener('change', function () { eixo = escolha.value; desenha(); });
    if (busca) busca.addEventListener('input', desenha);
    desenha();
  }

  function paginaProjetos() {
    var alvo = doc.getElementById('lista-projetos');
    if (!alvo || typeof PROJETOS === 'undefined') return;
    alvo.innerHTML = PROJETOS.map(function (p, i) {
      var inv = i % 2 === 1 ? ' linha-foto--invertida' : '';
      var texto = '<div><span class="olho">' + esc(p.ano) + '</span>' +
        '<h2 class="titulo-secao">' + esc(p.nome) + '</h2>' +
        '<p class="projeto-linha" style="font-size:12.5px;font-weight:800;letter-spacing:.1em;text-transform:uppercase;color:var(--ouro-tinta);margin-bottom:14px">' + esc(p.linha) + '</p>' +
        '<p>' + esc(p.texto) + '</p></div>';
      var foto = p.semFoto
        ? '<figure class="linha-foto-media sem-foto" style="background:var(--sol);aspect-ratio:4/3"></figure>'
        : '<figure class="linha-foto-media"><img src="' + esc(p.foto) + '" alt="' + esc(p.alt) + '" loading="lazy"></figure>';
      return '<article class="linha-foto projeto' + inv + '">' + (inv ? foto + texto : texto + foto) + '</article>';
    }).join('');
    fotoSegura();
  }

  function paginaGaleria() {
    var grade = doc.getElementById('grade-galeria');
    if (!grade || typeof GALERIA === 'undefined') return;
    var contagem = doc.getElementById('contagem-galeria');
    var grupo = 'todos';
    function desenha() {
      var lista = GALERIA.filter(function (f) { return grupo === 'todos' || f.grupo === grupo; });
      if (contagem) contagem.textContent = lista.length + (lista.length === 1 ? ' foto' : ' fotos');
      grade.innerHTML = lista.map(function (f) {
        return '<button type="button" class="gal-item' + (f.retrato ? ' gal-item--retrato' : '') +
          '" data-legenda="' + esc(f.legenda) + '">' +
          '<img src="' + esc(f.arq) + '" alt="' + esc(f.legenda) + '" loading="lazy">' +
          '<figcaption>' + esc(f.legenda) + '</figcaption></button>';
      }).join('');
      fotoSegura();
    }
    var escolha = doc.getElementById('grupo-galeria');
    if (escolha) escolha.addEventListener('change', function () { grupo = escolha.value; desenha(); });
    desenha();
  }

  function paginaImprensa() {
    var alvo = doc.getElementById('lista-clipping');
    if (!alvo || typeof CLIPPING === 'undefined') return;
    alvo.innerHTML = CLIPPING.map(function (m) {
      var miolo = '<div><span class="veiculo">' + esc(m.veiculo) +
        '<span class="data">' + esc(m.data) + '</span></span></div>' +
        '<h3>' + esc(m.titulo) + '</h3>';
      if (m.link) {
        return '<a class="materia" href="' + esc(m.link) + '" target="_blank" rel="noopener">' + miolo +
          '<span class="botao botao--linha botao--pequeno">Ler a matéria</span></a>';
      }
      return '<div class="materia materia--sem-link">' + miolo +
        '<span class="sem-link">Link em confirmação</span></div>';
    }).join('');
  }


  function copiaManual(txt, pronto) {
    var c = doc.createElement('textarea');
    c.value = txt;
    c.setAttribute('readonly', '');
    c.style.position = 'fixed';
    c.style.top = '-1000px';
    c.style.opacity = '0';
    doc.body.appendChild(c);
    c.select();
    try { doc.execCommand('copy'); pronto(); } catch (e) {}
    doc.body.removeChild(c);
  }

  function copiar() {
    doc.querySelectorAll('[data-copiar]').forEach(function (bt) {
      bt.addEventListener('click', function () {
        var alvo = doc.querySelector(bt.getAttribute('data-copiar'));
        if (!alvo) return;
        var txt = (alvo.textContent || '').trim();
        var antes = bt.textContent;
        var pronto = function () {
          bt.textContent = 'Copiado';
          bt.classList.add('feito');
          setTimeout(function () { bt.textContent = antes; bt.classList.remove('feito'); }, 2200);
        };
        if (navigator.clipboard && navigator.clipboard.writeText) {
          navigator.clipboard.writeText(txt).then(pronto, function () { copiaManual(txt, pronto); });
        } else {
          copiaManual(txt, pronto);
        }
      });
    });
  }

  doc.addEventListener('DOMContentLoaded', function () {
    ano(); tema(); menu(); topo(); contadores(); lightbox(); fotoSegura(); copiar();
    paginaProgramas(); paginaCursos(); paginaProjetos(); paginaGaleria(); paginaImprensa();
    surge();
  });
})();
