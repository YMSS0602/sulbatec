/* ═══════════════════════════════════════
   SUBATEC — main.js (Conexão e Busca Total)
═══════════════════════════════════════ */

const SUPABASE_URL = 'https://losshhmqmarerqzjchnx.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imxvc3NoaG1xbWFyZXJxempjaG54Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzgyMTYxMDMsImV4cCI6MjA5Mzc5MjEwM30.VmCgXUKAJjOtCh6-LwZ6KYUPc7hvy8YYU-Vl1DFdh5M';

let todosCursos = [];
let categoriaAtual = 'todos';

/* ── SISTEMA DE BUSCA INTEGRADO ── */
window.handleSearch = function() {
  const input = document.getElementById('searchInput');
  if (!input) return;

  const q = input.value.toLowerCase().trim();
  let found = 0;

  document.querySelectorAll('.cc').forEach(card => {
    const text = card.innerText.toLowerCase();
    const cardCat = card.getAttribute('data-category');

    // Verifica se o card pertence à categoria selecionada atualmente
    const pertenceCategoria = (categoriaAtual === 'todos' || cardCat === categoriaAtual);
    
    // Verifica se o texto condiz com a pesquisa digitada
    const condizComBusca = (!q || text.includes(q));

    // Exibe apenas se passar nos dois critérios simultaneamente
    if (pertenceCategoria && condizComBusca) {
      card.style.display = 'flex';
      card.classList.remove('hidden'); // Remove classe legada se houver
      found++;
    } else {
      card.style.display = 'none';
    }
  });

  // Rola a tela suavemente até a seção de cursos para exibição dos resultados
  const secaoCursos = document.getElementById('cursos');
  if (secaoCursos) secaoCursos.scrollIntoView({ behavior: 'smooth' });

  // Dispara feedbacks (toasts) visuais de validação
  if (q && typeof window.toast === 'function') {
    if (found > 0) {
      window.toast(`${found} curso(s) encontrado(s)!`, 's');
    } else {
      window.toast(`Nenhum resultado para "${q}"`, 'e');
    }
  }
};

// Vincula apelidos para cobrir tags onclick antigas presentes no HTML
window.doSearch = window.handleSearch;
window.buscar = window.handleSearch;

/* ── FILTROS DE CATEGORIA INTELIGENTES ── */
window.filterCat = function(el, cat) {
  categoriaAtual = cat;

  // Gerencia o estado visual ativo dos botões/cards de categoria superiores
  document.querySelectorAll('.cat-card, .cat-c, .ftab').forEach(c => c.classList.remove('active'));
  if (el) el.classList.add('active');

  // Sincroniza abas secundárias se o clique veio do topo
  document.querySelectorAll('.ftab').forEach(t => {
    const text = t.textContent.toLowerCase();
    if (text.includes(cat) || (cat === 'todos' && text === 'todos')) {
      t.classList.add('active');
    }
  });

  // Executa o handleSearch para refazer a filtragem aplicando a nova categoria e mantendo o texto se houver
  window.handleSearch();
};
window.setFtab = window.filterCat;


/* ── CARREGAMENTO DO SUPABASE (TABELA: CURSOS) ── */
async function carregarCursosSupabase() {
  const container = document.getElementById('coursesGrid') || document.getElementById('courseGrid'); 
  if (!container) return;

  // 1. Removi o "Carregando..." que apagava os cursos fixos da tela.

  try {
    const response = await fetch(`${SUPABASE_URL}/rest/v1/cursos?select=*`, {
      method: 'GET',
      headers: {
        'apikey': SUPABASE_KEY,
        'Authorization': `Bearer ${SUPABASE_KEY}`,
        'Content-Type': 'application/json'
      }
    });

    if (!response.ok) throw new Error(`Erro: ${response.status}`);
    
    todosCursos = await response.json();
    renderizarCursosCards(todosCursos);

  } catch (error) {
    console.error('Erro Supabase:', error);
    // Adiciona o erro sutilmente no final sem destruir os cursos que já estão lá
    container.insertAdjacentHTML('beforeend', `<div class="post-empty" style="width:100%; grid-column: 1/-1;">⚠️ Não foi possível carregar cursos adicionais.</div>`);
  }
}

function renderizarCursosCards(cursos) {
  const container = document.getElementById('coursesGrid') || document.getElementById('courseGrid');
  if (!container || !cursos || cursos.length === 0) return;

  const htmlDosNovosCursos = cursos.map(curso => {
    const titulo = curso.title || curso.titulo || 'Curso sem título';
    const link = curso.link || curso.url || '#';
    const descricao = curso.description || curso.descricao || 'Sem descrição disponível.';
    const categoria = curso.category || curso.categoria || 'Geral';
    const slug = curso.category_slug || curso.categoria_slug || 'todos';
    const nivel = curso.level || curso.nivel || 'Iniciante';
    const duracao = curso.duration || curso.duracao || 'Variável';
    const plataforma = curso.platform || curso.plataforma || 'Subatec';
    const icone = curso.icon || curso.icone || '💻';

    return `
      <a href="${link}" target="_blank" rel="noopener" class="cc" data-category="${slug}">
        <div class="cc-thumb" style="background: linear-gradient(135deg, #020b2a, #111f52)">
          ${icone}
          <div class="cc-bads">
            <span class="b-free">Gratuito</span>
            <span class="b-plat">${plataforma}</span>
          </div>
        </div>
        <div class="cc-body">
          <div class="cc-cat">${categoria}</div>
          <h3 class="cc-title">${titulo}</h3>
          <p class="cc-desc">${descricao}</p>
        </div>
        <div class="cc-foot">
          <span>⏱️ ${duracao}</span>
          <span class="lvl">${nivel}</span>
        </div>
      </a>
    `;
  }).join('');
  
  // 2. A MÁGICA: Em vez de usar "=", usamos insertAdjacentHTML para somar os novos ao HTML estático!
  container.insertAdjacentHTML('beforeend', htmlDosNovosCursos);
  
  // 3. Atualiza o contador do site para somar os cursos HTML + os do Banco
  const contadorGlobal = document.getElementById('total-courses-count') || document.querySelector('.hero-stats .stat-number');
  if (contadorGlobal) {
    const totalVisivel = document.querySelectorAll('.cc').length;
    contadorGlobal.innerText = totalVisivel;
  }
}

/* ── GESTÃO DE TEMA CENTRALIZADA (DARK/LIGHT) ── */
const ThemeManager = {
  init() {
    const saved = localStorage.getItem('subatec_theme') || 'dark';
    document.documentElement.setAttribute('data-theme', saved);
    this.updateIcon(saved);
    
    document.getElementById('theme-toggle')?.addEventListener('click', () => {
      const current = document.documentElement.getAttribute('data-theme') || 'dark';
      const next = current === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', next);
      localStorage.setItem('subatec_theme', next);
      this.updateIcon(next);
    });
  },
  updateIcon(theme) {
    const btn = document.getElementById('theme-toggle');
    if (btn) btn.textContent = theme === 'dark' ? '☀️' : '🌙';
  }
};

/* ── NOTIFICAÇÕES TOAST GLOBAL ── */
window.toast = function(msg, type = 's') {
  let container = document.getElementById('toasts') || document.getElementById('toast-container');
  if (!container) {
    container = document.createElement('div');
    container.id = 'toasts';
    container.className = 'toast-container';
    document.body.appendChild(container);
  }
  const t = document.createElement('div');
  t.className = `toast ${(type === 'success' || type === 's') ? 's' : 'e'}`;
  t.innerHTML = `<span>${(type === 'success' || type === 's') ? '✅' : '❌'}</span> ${msg}`;
  container.appendChild(t);
  
  setTimeout(() => { 
    t.style.opacity = '0'; 
    t.style.transform = 'translateX(20px)'; 
    t.style.transition = '.3s'; 
    setTimeout(() => t.remove(), 300); 
  }, 3000);
};

/* ── INICIALIZAÇÃO COMPLETA ── */
document.addEventListener('DOMContentLoaded', () => {
  ThemeManager.init();
  carregarCursosSupabase();

  // Escuta ativa para gatilho de busca ao pressionar a tecla Enter no input
  document.getElementById('searchInput')?.addEventListener('keydown', e => {
    if (e.key === 'Enter') window.handleSearch();
  });
});