/* ═══════════════════════════════════════
   SUBATEC — roadmap.js
   Roadmaps interativos por carreira
═══════════════════════════════════════ */

const ROADMAPS = {
  programacao: {
    label: '💻 Programação', color: '#A78BFA',
    phases: [
      {
        label: 'Fase 1 — Fundamentos', cls: 'p1',
        nodes: [
          {
            id: 'logica', title: 'Lógica de Programação', icon: '🧠',
            desc: 'Base de tudo. Aprenda algoritmos, estruturas condicionais, loops e estruturas de dados básicas.',
            tags: ['Algoritmos', 'Pseudocódigo', 'Fluxograma'],
            resources: [
              { name: 'Curso Lógica de Programação (Curso em Vídeo) — Gratuito', url: 'https://www.cursoemvideo.com/curso/curso-de-algoritmos/' },
              { name: 'Visualgo — visualize estruturas de dados', url: 'https://visualgo.net/' },
            ]
          },
          {
            id: 'git', title: 'Git & GitHub', icon: '🔧',
            desc: 'Controle de versão é fundamental desde o início. Use no primeiro dia de código.',
            tags: ['Versionamento', 'Colaboração', 'Open Source'],
            resources: [
              { name: 'Git & GitHub (Curso em Vídeo) — Gratuito', url: 'https://www.cursoemvideo.com/curso/curso-de-git-e-github/' },
              { name: 'Learn Git Branching — interativo', url: 'https://learngitbranching.js.org/?locale=pt_BR' },
            ]
          },
        ]
      },
      {
        label: 'Fase 2 — Linguagem & Web', cls: 'p2',
        nodes: [
          {
            id: 'python', title: 'Python (ou JavaScript)', icon: '🐍',
            desc: 'Escolha Python para dados/back-end ou JavaScript para web full-stack. Ambos têm mercado enorme.',
            tags: ['Python', 'JavaScript', 'POO', 'Funções'],
            resources: [
              { name: 'Python (Curso em Vídeo) — Gratuito', url: 'https://www.cursoemvideo.com/curso/python-3-mundo-1/' },
              { name: 'JavaScript (freeCodeCamp) — Gratuito', url: 'https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/' },
            ]
          },
          {
            id: 'html-css', title: 'HTML & CSS', icon: '🌐',
            desc: 'Estrutura e estilo da web. Aprenda semântica, responsividade, Flexbox e CSS Grid.',
            tags: ['HTML5', 'CSS3', 'Flexbox', 'Responsivo'],
            resources: [
              { name: 'HTML & CSS (Curso em Vídeo) — Gratuito', url: 'https://www.cursoemvideo.com/curso/html5-css3-modulo1/' },
              { name: 'CSS Tricks — guia de referência', url: 'https://css-tricks.com/' },
            ]
          },
          {
            id: 'sql', title: 'SQL & Banco de Dados', icon: '🗄️',
            desc: 'Todo sistema precisa de banco. Aprenda SQL com MySQL ou PostgreSQL.',
            tags: ['MySQL', 'PostgreSQL', 'Joins', 'Modelagem'],
            resources: [
              { name: 'MySQL (Curso em Vídeo) — Gratuito', url: 'https://www.cursoemvideo.com/curso/mysql/' },
              { name: 'SQLZoo — exercícios interativos', url: 'https://sqlzoo.net/' },
            ]
          },
        ]
      },
      {
        label: 'Fase 3 — Framework & Back-end', cls: 'p3',
        nodes: [
          {
            id: 'react', title: 'React (Front-end)', icon: '⚛️',
            desc: 'O framework front-end mais utilizado do mercado. Components, hooks, estado e rotas.',
            tags: ['React', 'Hooks', 'SPA', 'TypeScript'],
            resources: [
              { name: 'Documentação oficial React — Gratuito', url: 'https://react.dev/learn' },
              { name: 'CS50 Web (Harvard) — Gratuito', url: 'https://cs50.harvard.edu/web/2020/' },
            ]
          },
          {
            id: 'backend', title: 'Back-end + API REST', icon: '⚙️',
            desc: 'Node.js (JavaScript) ou Django/Flask (Python). Crie APIs REST com autenticação JWT.',
            tags: ['Node.js', 'Express', 'JWT', 'REST API'],
            resources: [
              { name: 'NodeJS (freeCodeCamp) — Gratuito', url: 'https://www.freecodecamp.org/learn/back-end-development-and-apis/' },
              { name: 'Django Girls — Gratuito', url: 'https://tutorial.djangogirls.org/pt/' },
            ]
          },
        ]
      },
      {
        label: 'Fase 4 — Deploy & Carreira', cls: 'p3',
        nodes: [
          {
            id: 'docker', title: 'Docker & Deploy', icon: '🐳',
            desc: 'Containerize sua aplicação e faça deploy na AWS, Vercel, Railway ou Heroku.',
            tags: ['Docker', 'CI/CD', 'AWS', 'Vercel'],
            resources: [
              { name: 'Docker — Get Started (Oficial)', url: 'https://docs.docker.com/get-started/' },
              { name: 'AWS Free Tier — praticar cloud', url: 'https://aws.amazon.com/free/' },
            ],
            optional: false
          },
          {
            id: 'portfolio', title: 'Portfólio + GitHub', icon: '🚀',
            desc: 'Construa 3-5 projetos reais. Seu portfólio vale mais que qualquer certificado para o primeiro emprego.',
            tags: ['GitHub', 'Portfolio', 'LinkedIn', 'Open Source'],
            resources: [
              { name: 'GitHub (como criar portfólio)', url: 'https://docs.github.com/pt/account-and-profile/setting-up-and-managing-your-github-profile' },
            ]
          },
        ]
      }
    ]
  },

  redes: {
    label: '🌐 Redes', color: '#337DFF',
    phases: [
      {
        label: 'Fase 1 — Base', cls: 'p1',
        nodes: [
          {
            id: 'r-fundamentos', title: 'Fundamentos de Redes', icon: '📡',
            desc: 'Modelo OSI, TCP/IP, endereçamento IPv4/IPv6, sub-redes e cálculo de CIDR.',
            tags: ['OSI', 'TCP/IP', 'IPv4', 'Subnetting'],
            resources: [
              { name: 'Cisco NetAcad (Gratuito) — Introdução às Redes', url: 'https://www.netacad.com/' },
              { name: 'Calculadora de Subnet online', url: 'https://www.subnet-calculator.com/' },
            ]
          },
          {
            id: 'r-linux', title: 'Linux Essencial', icon: '🐧',
            desc: 'Comandos básicos do terminal, gerenciamento de processos, permissões e rede no Linux.',
            tags: ['Linux', 'Bash', 'Terminal', 'SSH'],
            resources: [
              { name: 'Linux (LPI Essentials) — Gratuito', url: 'https://learning.lpi.org/pt/learning-materials/010-160/' },
              { name: 'OverTheWire Bandit — praticar Linux', url: 'https://overthewire.org/wargames/bandit/' },
            ]
          },
        ]
      },
      {
        label: 'Fase 2 — CCNA', cls: 'p2',
        nodes: [
          {
            id: 'r-switching', title: 'Switching & VLANs', icon: '🔀',
            desc: 'Switches, Spanning Tree Protocol, VLANs, EtherChannel e inter-VLAN routing.',
            tags: ['Switch', 'VLAN', 'STP', 'Trunk'],
            resources: [
              { name: 'Cisco Packet Tracer (Gratuito)', url: 'https://www.netacad.com/courses/packet-tracer' },
            ]
          },
          {
            id: 'r-routing', title: 'Routing Protocols', icon: '🗺️',
            desc: 'OSPF, EIGRP, BGP básico, roteamento estático e dinâmico.',
            tags: ['OSPF', 'BGP', 'Routing', 'Static'],
            resources: [
              { name: 'CCNA 200-301 (Jeremy IT Lab) — YouTube Gratuito', url: 'https://www.youtube.com/playlist?list=PLxbwE86jKRgMpuZuLBivzlM8s2Dk5lXBQ' },
            ]
          },
          {
            id: 'r-wireshark', title: 'Wireshark & Análise', icon: '🔬',
            desc: 'Capture e analise tráfego de rede. Essencial para diagnóstico e segurança.',
            tags: ['Wireshark', 'Packet Analysis', 'PCAP'],
            resources: [
              { name: 'Wireshark Tutorial (Oficial) — Gratuito', url: 'https://www.wireshark.org/docs/wsug_html_chunked/' },
            ]
          },
        ]
      },
      {
        label: 'Fase 3 — Segurança e Cloud', cls: 'p3',
        nodes: [
          {
            id: 'r-security', title: 'Segurança de Redes', icon: '🛡️',
            desc: 'Firewalls, ACLs, VPN, IDS/IPS e hardening de dispositivos.',
            tags: ['Firewall', 'VPN', 'ACL', 'pfSense'],
            resources: [
              { name: 'pfSense (Netgate Docs) — Gratuito', url: 'https://docs.netgate.com/pfsense/en/latest/' },
            ]
          },
          {
            id: 'r-cloud', title: 'Cloud Networking', icon: '☁️',
            desc: 'AWS VPC, subnets na cloud, Security Groups, peering de VPCs.',
            tags: ['AWS VPC', 'Azure VNet', 'SDN', 'Cloud'],
            resources: [
              { name: 'AWS Networking Fundamentals — Gratuito', url: 'https://aws.amazon.com/training/classroom/aws-networking-fundamentals/' },
            ]
          },
        ]
      }
    ]
  },

  seguranca: {
    label: '🔐 Segurança', color: '#EF4444',
    phases: [
      {
        label: 'Fase 1 — Base de Segurança', cls: 'p1',
        nodes: [
          {
            id: 's-linux', title: 'Linux + Redes', icon: '🐧',
            desc: 'Pré-requisito fundamental: linha de comando Linux e protocolos de rede.',
            tags: ['Kali Linux', 'Bash', 'TCP/IP', 'SSH'],
            resources: [
              { name: 'Kali Linux Revealed (Gratuito)', url: 'https://kali.training/downloads/Kali-Linux-Revealed-1st-edition.pdf' },
            ]
          },
          {
            id: 's-security-plus', title: 'CompTIA Security+', icon: '🏅',
            desc: 'Certificação de entrada em segurança. Cobre criptografia, ameaças, controles e políticas.',
            tags: ['Certificação', 'Criptografia', 'Ameaças', 'Conformidade'],
            resources: [
              { name: 'Security+ (Professor Messer) — Gratuito', url: 'https://www.professormesser.com/security-plus/' },
              { name: 'TryHackMe PreSecurity — Gratuito', url: 'https://tryhackme.com/path/outline/presecurity' },
            ]
          },
        ]
      },
      {
        label: 'Fase 2 — Ofensivo & Defensivo', cls: 'p2',
        nodes: [
          {
            id: 's-pentest', title: 'Pentest & Ethical Hacking', icon: '🔓',
            desc: 'Metodologia de teste de invasão: reconhecimento, escaneamento, exploração e relatório.',
            tags: ['Metasploit', 'Nmap', 'OWASP', 'Burp Suite'],
            resources: [
              { name: 'TryHackMe (Jr Penetration Tester) — Gratuito/pago', url: 'https://tryhackme.com/path/outline/jrpenetrationtester' },
              { name: 'Hack The Box Academy — Gratuito (básico)', url: 'https://academy.hackthebox.com/' },
            ]
          },
          {
            id: 's-blue', title: 'Blue Team / SOC', icon: '🔵',
            desc: 'Defesa ativa: SIEM, análise de logs, resposta a incidentes e threat hunting.',
            tags: ['SIEM', 'Splunk', 'ELK Stack', 'SOC'],
            resources: [
              { name: 'TryHackMe SOC Level 1 — Gratuito', url: 'https://tryhackme.com/path/outline/soclevel1' },
            ]
          },
        ]
      },
      {
        label: 'Fase 3 — Especialização', cls: 'p3',
        nodes: [
          {
            id: 's-web', title: 'Web Application Security', icon: '🌐',
            desc: 'OWASP Top 10, SQL Injection, XSS, CSRF, autenticação e autorização.',
            tags: ['OWASP', 'SQLi', 'XSS', 'CSRF'],
            resources: [
              { name: 'OWASP Testing Guide (Gratuito)', url: 'https://owasp.org/www-project-web-security-testing-guide/' },
              { name: 'PortSwigger Web Academy — Gratuito', url: 'https://portswigger.net/web-security' },
            ]
          },
          {
            id: 's-oscp', title: 'OSCP / CEH', icon: '🎯',
            desc: 'Certificações avançadas de pentest. OSCP é a mais respeitada do mercado.',
            tags: ['OSCP', 'CEH', 'Pentest avançado'],
            resources: [
              { name: 'Offensive Security PEN-200', url: 'https://www.offsec.com/courses/pen-200/' },
            ],
            optional: true
          },
        ]
      }
    ]
  },

  dados: {
    label: '📊 Dados', color: '#F59E0B',
    phases: [
      {
        label: 'Fase 1 — Fundamentos', cls: 'p1',
        nodes: [
          {
            id: 'd-python', title: 'Python para Dados', icon: '🐍',
            desc: 'Pandas, NumPy, Matplotlib. A linguagem padrão da área de dados.',
            tags: ['Python', 'Pandas', 'NumPy', 'Jupyter'],
            resources: [
              { name: 'Kaggle Python Course — Gratuito', url: 'https://www.kaggle.com/learn/python' },
              { name: 'Kaggle Pandas — Gratuito', url: 'https://www.kaggle.com/learn/pandas' },
            ]
          },
          {
            id: 'd-sql', title: 'SQL Avançado', icon: '🗄️',
            desc: 'CTEs, window functions, otimização de queries, modelagem dimensional.',
            tags: ['SQL', 'CTE', 'Window Functions', 'PostgreSQL'],
            resources: [
              { name: 'Mode SQL Tutorial — Gratuito', url: 'https://mode.com/sql-tutorial/' },
              { name: 'SQLZoo — Gratuito', url: 'https://sqlzoo.net/' },
            ]
          },
        ]
      },
      {
        label: 'Fase 2 — Análise & BI', cls: 'p2',
        nodes: [
          {
            id: 'd-viz', title: 'Visualização de Dados', icon: '📈',
            desc: 'Matplotlib, Seaborn, Plotly para Python. Power BI para o ambiente corporativo.',
            tags: ['Power BI', 'Seaborn', 'Plotly', 'Dashboard'],
            resources: [
              { name: 'Power BI (Microsoft Learn) — Gratuito', url: 'https://learn.microsoft.com/pt-br/training/powerplatform/power-bi' },
              { name: 'Kaggle Data Visualization — Gratuito', url: 'https://www.kaggle.com/learn/data-visualization' },
            ]
          },
          {
            id: 'd-stats', title: 'Estatística & Probabilidade', icon: '📐',
            desc: 'Distribuições, testes de hipóteses, correlação, regressão linear.',
            tags: ['Estatística', 'Probabilidade', 'Regressão', 'A/B Test'],
            resources: [
              { name: 'Statistics and Probability (Khan Academy) — Gratuito', url: 'https://www.khanacademy.org/math/statistics-probability' },
            ]
          },
        ]
      },
      {
        label: 'Fase 3 — Machine Learning', cls: 'p3',
        nodes: [
          {
            id: 'd-ml', title: 'Machine Learning', icon: '🤖',
            desc: 'Scikit-learn, modelos supervisionados e não-supervisionados, avaliação de modelos.',
            tags: ['Scikit-learn', 'Random Forest', 'SVM', 'Clustering'],
            resources: [
              { name: 'Kaggle Intro to ML — Gratuito', url: 'https://www.kaggle.com/learn/intro-to-machine-learning' },
              { name: 'Google ML Crash Course — Gratuito', url: 'https://developers.google.com/machine-learning/crash-course' },
            ]
          },
          {
            id: 'd-dl', title: 'Deep Learning (opcional)', icon: '🧬',
            desc: 'TensorFlow, Keras, redes neurais. Área de IA generativa e LLMs.',
            tags: ['TensorFlow', 'Keras', 'CNN', 'LLM'],
            resources: [
              { name: 'Deep Learning Specialization (Coursera/DeepLearning.AI)', url: 'https://www.deeplearning.ai/' },
            ],
            optional: true
          },
        ]
      }
    ]
  },

  cloud: {
    label: '☁️ Cloud & DevOps', color: '#06B6D4',
    phases: [
      {
        label: 'Fase 1 — Linux & Redes', cls: 'p1',
        nodes: [
          {
            id: 'c-linux', title: 'Linux & Linha de Comando', icon: '🐧',
            desc: 'Bash scripting, gerenciamento de processos, systemd, cron jobs, SSH.',
            tags: ['Linux', 'Bash', 'Shell Script', 'SSH'],
            resources: [
              { name: 'Linux Command Line (The Odin Project) — Gratuito', url: 'https://www.theodinproject.com/paths/foundations/courses/foundations' },
            ]
          },
          {
            id: 'c-git', title: 'Git + CI/CD Básico', icon: '🔧',
            desc: 'Git avançado, GitHub Actions, pipelines básicas de automação.',
            tags: ['Git', 'GitHub Actions', 'CI/CD', 'YAML'],
            resources: [
              { name: 'GitHub Actions (Documentação) — Gratuito', url: 'https://docs.github.com/en/actions' },
            ]
          },
        ]
      },
      {
        label: 'Fase 2 — Containers & Cloud', cls: 'p2',
        nodes: [
          {
            id: 'c-docker', title: 'Docker & Containers', icon: '🐳',
            desc: 'Imagens, containers, volumes, redes Docker, Docker Compose.',
            tags: ['Docker', 'Dockerfile', 'Compose', 'Registry'],
            resources: [
              { name: 'Play with Docker — Gratuito', url: 'https://labs.play-with-docker.com/' },
              { name: 'Docker Documentation (Oficial)', url: 'https://docs.docker.com/' },
            ]
          },
          {
            id: 'c-aws', title: 'AWS Cloud Practitioner', icon: '☁️',
            desc: 'EC2, S3, RDS, IAM, VPC, Lambda, conceitos de cloud computing.',
            tags: ['AWS', 'EC2', 'S3', 'IAM', 'Lambda'],
            resources: [
              { name: 'AWS Cloud Practitioner Essentials — Gratuito', url: 'https://aws.amazon.com/training/digital/aws-cloud-practitioner-essentials/' },
              { name: 'AWS Free Tier (praticar)', url: 'https://aws.amazon.com/free/' },
            ]
          },
        ]
      },
      {
        label: 'Fase 3 — Orquestração & IaC', cls: 'p3',
        nodes: [
          {
            id: 'c-k8s', title: 'Kubernetes', icon: '⚓',
            desc: 'Orquestração de containers: pods, deployments, services, ingress, helm.',
            tags: ['Kubernetes', 'Pods', 'Helm', 'k8s'],
            resources: [
              { name: 'Kubernetes (Oficial) — Gratuito', url: 'https://kubernetes.io/docs/tutorials/' },
              { name: 'Play with Kubernetes — Gratuito', url: 'https://labs.play-with-k8s.com/' },
            ]
          },
          {
            id: 'c-terraform', title: 'Terraform (IaC)', icon: '🏗️',
            desc: 'Infrastructure as Code: provisione AWS, Azure e GCP com código versionável.',
            tags: ['Terraform', 'HCL', 'IaC', 'Ansible'],
            resources: [
              { name: 'Terraform Tutorials (HashiCorp) — Gratuito', url: 'https://developer.hashicorp.com/terraform/tutorials' },
            ]
          },
        ]
      }
    ]
  }
};

/* ── STATE ── */
const PROGRESS_KEY = 'subatec_roadmap_progress';
function getProgress() { return JSON.parse(localStorage.getItem(PROGRESS_KEY) || '{}'); }
function saveProgress(p) { localStorage.setItem(PROGRESS_KEY, JSON.stringify(p)); }

/* ── CURRENT PATH ── */
let currentPath = 'programacao';

/* ── RENDER ROADMAP ── */
function renderRoadmap(path) {
  currentPath = path;
  const data = ROADMAPS[path];
  if (!data) return;
  const progress = getProgress();
  const pathKey = path + '_';

  // Clear previous
  document.querySelectorAll('.rmap-track').forEach(t => t.classList.remove('active'));

  let track = document.getElementById('rmap-' + path);
  if (!track) {
    track = document.createElement('div');
    track.className = 'rmap-track';
    track.id = 'rmap-' + path;
    document.getElementById('roadmap-canvas').appendChild(track);
  }
  track.innerHTML = '';
  track.classList.add('active');

  // Count total nodes for progress
  let totalNodes = 0, doneNodes = 0;

  data.phases.forEach(phase => {
    const phaseEl = document.createElement('div');
    phaseEl.className = 'rmap-phase';

    const labelEl = document.createElement('div');
    labelEl.className = 'phase-label ' + phase.cls;
    labelEl.textContent = phase.label;
    phaseEl.appendChild(labelEl);

    const rowEl = document.createElement('div');
    rowEl.className = 'rmap-row';

    phase.nodes.forEach((node, ni) => {
      totalNodes++;
      const isDone = !!progress[pathKey + node.id];
      if (isDone) doneNodes++;

      const delay = ni * 80;
      const nodeEl = document.createElement('div');
      nodeEl.className = 'rmap-node' + (isDone ? ' done' : '') + (node.optional ? ' optional' : '');
      nodeEl.style.animationDelay = delay + 'ms';
      nodeEl.style.borderLeftColor = isDone ? data.color : '';
      nodeEl.style.borderLeftWidth = isDone ? '3px' : '';

      nodeEl.innerHTML = `
        <div class="node-header">
          <span class="node-icon">${node.icon}</span>
          <span class="node-title">${node.title}</span>
        </div>
        <div class="node-desc">${node.desc}</div>
        <div class="node-tags">
          ${node.tags.map(t => `<span class="node-tag">${t}</span>`).join('')}
          ${node.optional ? `<span class="node-optional-tag">⬦ Opcional</span>` : ''}
        </div>
        <button class="node-expand-btn" onclick="toggleNodeDetail(this)">▾ Ver recursos</button>
        <div class="node-detail">
          <div class="node-resources">
            <div style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:.06em;color:var(--muted);margin-bottom:4px">📚 Recursos gratuitos</div>
            ${node.resources.map(r => `
              <div class="node-resource">
                <a href="${r.url}" target="_blank" rel="noopener">↗ ${r.name}</a>
              </div>`).join('')}
          </div>
          <button class="node-done-btn ${isDone ? 'marked' : ''}" onclick="toggleDone('${path}','${node.id}', this)">
            ${isDone ? '✓ Concluído' : '○ Marcar como concluído'}
          </button>
        </div>`;

      rowEl.appendChild(nodeEl);
    });

    phaseEl.appendChild(rowEl);
    track.appendChild(phaseEl);
  });

  // Update progress bar
  const pct = totalNodes ? Math.round((doneNodes / totalNodes) * 100) : 0;
  document.getElementById('rp-bar').style.width = pct + '%';
  document.getElementById('rp-pct').textContent = pct + '% completo';
  document.getElementById('rp-progress-label').textContent =
    doneNodes + ' de ' + totalNodes + ' etapas';

  // Update path tab styles
  document.querySelectorAll('.path-tab').forEach(t => {
    const active = t.dataset.path === path;
    t.classList.toggle('active', active);
    if (active) {
      t.style.background = 'linear-gradient(135deg, ' + data.color + 'cc, ' + data.color + '88)';
      t.style.color = '#020B2A';
      t.style.borderColor = data.color;
    } else {
      t.style.background = '';
      t.style.color = '';
      t.style.borderColor = '';
    }
  });
}

function toggleNodeDetail(btn) {
  const detail = btn.nextElementSibling;
  const isOpen = detail.classList.contains('open');
  detail.classList.toggle('open', !isOpen);
  btn.textContent = isOpen ? '▾ Ver recursos' : '▴ Fechar';
}

function toggleDone(path, nodeId, btn) {
  const progress = getProgress();
  const key = path + '_' + nodeId;
  const isDone = !progress[key];
  if (isDone) progress[key] = true; else delete progress[key];
  saveProgress(progress);
  btn.textContent = isDone ? '✓ Concluído' : '○ Marcar como concluído';
  btn.classList.toggle('marked', isDone);
  const nodeEl = btn.closest('.rmap-node');
  nodeEl.classList.toggle('done', isDone);
  // Refresh progress bar
  renderRoadmap(currentPath);
  // Re-expand the node
  const detail = btn.closest('.node-detail');
  if (detail) detail.classList.add('open');
  const expandBtn = detail?.previousElementSibling;
  if (expandBtn) expandBtn.textContent = '▴ Fechar';
}

function resetProgress() {
  if (!confirm('Resetar todo o progresso deste roadmap?')) return;
  const progress = getProgress();
  Object.keys(progress).forEach(k => { if (k.startsWith(currentPath)) delete progress[k]; });
  saveProgress(progress);
  renderRoadmap(currentPath);
  toast('Progresso resetado!', 'success');
}

function selectPath(path) { renderRoadmap(path); }

/* ── TOAST (local fallback) ── */
function toast(msg, type = 'success') {
  let c = document.getElementById('toast-container');
  if (!c) { c = document.createElement('div'); c.id='toast-container'; c.className='toast-container'; document.body.appendChild(c); }
  const t = document.createElement('div');
  t.className = `toast ${type}`;
  t.innerHTML = `<span>${type==='success'?'✅':'❌'}</span> ${msg}`;
  c.appendChild(t);
  setTimeout(()=>{ t.style.opacity='0'; t.style.transition='.3s'; setTimeout(()=>t.remove(),300); },3000);
}

/* ── INIT ── */
document.addEventListener('DOMContentLoaded', () => {
  // Theme
  const saved = localStorage.getItem('subatec_theme') || 'dark';
  document.documentElement.setAttribute('data-theme', saved);
  const tBtn = document.getElementById('theme-toggle');
  if (tBtn) {
    tBtn.textContent = saved === 'dark' ? '☀️' : '🌙';
    tBtn.addEventListener('click', () => {
      const c = document.documentElement.getAttribute('data-theme') || 'dark';
      const n = c === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', n);
      localStorage.setItem('subatec_theme', n);
      tBtn.textContent = n === 'dark' ? '☀️' : '🌙';
    });
  }
  // Mobile nav
  const ham = document.getElementById('hamburger');
  const menu = document.getElementById('mobile-menu');
  ham?.addEventListener('click', () => { ham.classList.toggle('open'); menu?.classList.toggle('open'); });

  renderRoadmap('programacao');
});
