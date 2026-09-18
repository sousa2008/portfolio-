const STORAGE_KEY = 'portfolioData';

function escapeHtml(str) {
    if (!str) return '';
    return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;').replace(/'/g, '&#39;');
}

function storageGet(key) {
    try { return window.localStorage.getItem(key); } catch (e) { return null; }
}

function storageRemove(key) {
    try { window.localStorage.removeItem(key); } catch (e) { /* sem suporte a localStorage */ }
}

function safeUrl(value) {
    const raw = String(value || '').trim();
    if (!raw) return '';
    try {
        const parsed = new URL(raw, window.location.href);
        if ((parsed.protocol === 'http:' || parsed.protocol === 'https:') && /^https?:\/\//i.test(raw)) {
            return raw;
        }
    } catch (e) { /* ignore */ }
    return '';
}

function safeEmail(value) {
    return String(value || '').replace(/[\s;"'`<>\\]+/g, '').trim();
}

function cleanWhatsApp(value) {
    return String(value || '').replace(/\D/g, '').replace(/^0+/, '');
}

const SMOOTH = !window.matchMedia('(prefers-reduced-motion: reduce)').matches;

function makeBadges(csv, cls) {
    if (!csv) return '';
    return csv.split(',').map(s => s.trim()).filter(Boolean)
        .map(s => `<span class="badge ${cls} m-1">${escapeHtml(s)}</span>`).join('');
}

const BADGE_LINGUAGENS = 'bg-primary bg-opacity-10 text-primary';
const BADGE_FERRAMENTAS = 'bg-secondary bg-opacity-10 text-secondary';
const BADGE_SOFTSKILLS = 'bg-success bg-opacity-10 text-success';
const BADGE_PROJETOS = 'bg-primary bg-opacity-10 text-primary';
const BADGE_EXP_COMPETENCIAS = 'bg-secondary bg-opacity-10 text-secondary';

// ===== CARREGAR DADOS E POPULAR PÁGINA =====
function loadPortfolioData() {
    const raw = storageGet(STORAGE_KEY);
    if (!raw) return null;
    try { return JSON.parse(raw); } catch { return null; }
}

function hideSectionAndNav(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) section.style.display = 'none';
    const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);
    if (navLink) navLink.closest('.nav-item').style.display = 'none';
}

function renderPortfolio(data) {
    const dp = data.dadosPessoais || {};
    const comp = data.competencias || {};

    // --- HERO ---
    const hero = document.getElementById('home');
    const heroFoto = document.querySelector('.foto-perfil');
    const heroNome = document.getElementById('home-title');
    const heroCargo = document.querySelector('.hero-subtitle');
    const heroBio = document.querySelector('.hero-description');

    hero.setAttribute('aria-labelledby', 'home-title');
    if (heroFoto && dp.fotoPerfil) {
        heroFoto.src = dp.fotoPerfil;
        heroFoto.parentElement.classList.remove('no-image');
    }
    if (heroFoto) {
        heroFoto.alt = dp.nome ? `Foto de perfil de ${dp.nome}` : 'Foto de perfil';
    }
    if (heroNome) heroNome.textContent = dp.nome || '';
    if (heroCargo) heroCargo.textContent = dp.cargo || '';
    if (heroBio) heroBio.textContent = dp.bio || '';

    const heroSocial = document.querySelector('.hero-social');
    let socialHtml = '';
    const gh = safeUrl(dp.github);
    const li = safeUrl(dp.linkedin);
    const em = safeEmail(dp.email);
    if (gh) socialHtml += `<a href="${escapeHtml(gh)}" class="text-light fs-4 me-3" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><i class="bi bi-github"></i></a>`;
    if (li) socialHtml += `<a href="${escapeHtml(li)}" class="text-light fs-4 me-3" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><i class="bi bi-linkedin"></i></a>`;
    if (em) socialHtml += `<a href="mailto:${escapeHtml(em)}" class="text-light fs-4" aria-label="E-mail"><i class="bi bi-envelope-fill"></i></a>`;
    heroSocial.innerHTML = socialHtml;

    // --- SOBRE MIM ---
    const sobreFoto = document.getElementById('sobreFoto');
    if (sobreFoto) {
        if (dp.fotoSobre || dp.fotoPerfil) {
            sobreFoto.src = dp.fotoSobre || dp.fotoPerfil;
            sobreFoto.parentElement.classList.remove('no-image');
        } else {
            sobreFoto.removeAttribute('src');
            sobreFoto.parentElement.classList.add('no-image');
        }
        sobreFoto.alt = dp.nome ? `Foto pessoal de ${dp.nome}` : 'Foto pessoal';
    }
    document.getElementById('sobreTexto').textContent = data.sobreMim || dp.sobreMim || dp.bio || '';

    const safeEmailDisplay = em || '[seu@email.com]';
    document.getElementById('sobreDados1').innerHTML = `
        <li class="mb-2"><i class="bi bi-person-fill me-2 text-primary" aria-hidden="true"></i><strong>Nome:</strong> ${escapeHtml(dp.nome) || '—'}</li>
        <li class="mb-2"><i class="bi bi-geo-alt-fill me-2 text-primary" aria-hidden="true"></i><strong>Localização:</strong> ${escapeHtml(dp.localizacao) || '—'}</li>
        <li class="mb-2"><i class="bi bi-calendar-fill me-2 text-primary" aria-hidden="true"></i><strong>Nascimento:</strong> ${escapeHtml(dp.nascimento) || '—'}</li>`;
    document.getElementById('sobreDados2').innerHTML = `
        <li class="mb-2"><i class="bi bi-envelope-fill me-2 text-primary" aria-hidden="true"></i><strong>E-mail:</strong> ${escapeHtml(safeEmailDisplay)}</li>
        <li class="mb-2"><i class="bi bi-phone-fill me-2 text-primary" aria-hidden="true"></i><strong>Telefone:</strong> ${escapeHtml(dp.telefone) || '—'}</li>
        <li class="mb-2"><i class="bi bi-translate me-2 text-primary" aria-hidden="true"></i><strong>Idiomas:</strong> ${escapeHtml(dp.idiomas) || '—'}</li>`;

    // --- FORMAÇÃO ---
    const formacaoEl = document.getElementById('formacaoTimeline');
    formacaoEl.innerHTML = '';
    if (data.formacao && data.formacao.length) {
        formacaoEl.innerHTML = data.formacao.map(f => `
            <div class="timeline-item">
                <div class="timeline-dot"></div>
                <div class="timeline-content">
                    <h3>${escapeHtml(f.curso)}</h3>
                    <span class="text-muted">${escapeHtml(f.instituicao)}${f.periodo ? ' — ' + escapeHtml(f.periodo) : ''}</span>
                    ${f.descricao ? `<p class="mt-2">${escapeHtml(f.descricao)}</p>` : ''}
                </div>
            </div>`).join('');
    } else {
        hideSectionAndNav('formacao');
    }

    // --- COMPETÊNCIAS ---
    const tagLinguagens = document.getElementById('tagLinguagens');
    const tagFerramentas = document.getElementById('tagFerramentas');
    const tagSoftSkills = document.getElementById('tagSoftSkills');
    tagLinguagens.innerHTML = comp.linguagens ? makeBadges(comp.linguagens, BADGE_LINGUAGENS) : '';
    tagFerramentas.innerHTML = comp.ferramentas ? makeBadges(comp.ferramentas, BADGE_FERRAMENTAS) : '';
    tagSoftSkills.innerHTML = comp.softSkills ? makeBadges(comp.softSkills, BADGE_SOFTSKILLS) : '';
    if (!comp.linguagens) tagLinguagens.closest('.col-md-6').style.display = 'none';
    if (!comp.ferramentas) tagFerramentas.closest('.col-md-6').style.display = 'none';
    if (!comp.softSkills) tagSoftSkills.closest('.col-md-6').style.display = 'none';
    if (!comp.linguagens && !comp.ferramentas && !comp.softSkills) {
        hideSectionAndNav('competencias');
    }

    // --- PROJETOS ---
    const projetosGrid = document.getElementById('projetosGrid');
    projetosGrid.innerHTML = '';
    if (data.projetos && data.projetos.length) {
        projetosGrid.innerHTML = data.projetos.map(p => {
            const badges = makeBadges(p.tecnologias, BADGE_PROJETOS);
            const links = [];
            const codigo = safeUrl(p.linkCodigo);
            const demo = safeUrl(p.linkDemo);
            if (codigo) links.push(`<a href="${escapeHtml(codigo)}" class="btn btn-sm btn-outline-primary me-2" target="_blank" rel="noopener noreferrer"><i class="bi bi-github me-1" aria-hidden="true"></i>Código</a>`);
            if (demo) links.push(`<a href="${escapeHtml(demo)}" class="btn btn-sm btn-primary" target="_blank" rel="noopener noreferrer"><i class="bi bi-box-arrow-up-right me-1" aria-hidden="true"></i>Demo</a>`);
            const imgHtml = `<div class="card-img-top img-placeholder project-img-placeholder${p.imagem ? '' : ' no-image'}">${p.imagem ? `<img src="${escapeHtml(p.imagem)}" alt="${escapeHtml(p.nome)}" loading="lazy" decoding="async" onerror="this.parentElement.classList.add('no-image')">` : ''}<span class="img-fallback">Sem imagem selecionada</span></div>`;
            return `
                <div class="col-md-6 col-lg-4">
                    <div class="card h-100 project-card">
                        ${imgHtml}
                        <div class="card-body">
                            <h3 class="card-title">${escapeHtml(p.nome)}</h3>
                            <p class="card-text">${escapeHtml(p.descricao)}</p>
                            ${badges ? `<div class="skill-tags mb-3">${badges}</div>` : ''}
                        </div>
                        ${links.length ? `<div class="card-footer"><div class="d-flex flex-wrap gap-2">${links.join('')}</div></div>` : ''}
                    </div>
                </div>`;
        }).join('');
    } else {
        hideSectionAndNav('projetos');
        const heroVerProjetos = document.querySelector('.hero-links a[href="#projetos"]');
        if (heroVerProjetos) heroVerProjetos.style.display = 'none';
    }

    // --- EXPERIÊNCIAS ---
    const expLista = document.getElementById('experienciasLista');
    expLista.innerHTML = '';
    if (data.experiencias && data.experiencias.length) {
        expLista.innerHTML = data.experiencias.map(e => `
            <div class="experience-item mb-4 p-4 rounded shadow-sm">
                <div class="d-flex justify-content-between align-items-start flex-wrap">
                    <div>
                        <h3>${escapeHtml(e.cargo)}</h3>
                        <h4 class="text-primary">${escapeHtml(e.empresa)}</h4>
                    </div>
                    ${e.periodo ? `<span class="badge bg-primary bg-opacity-10 text-primary">${escapeHtml(e.periodo)}</span>` : ''}
                </div>
                ${e.descricao ? `<p class="mt-3 mb-1">${escapeHtml(e.descricao)}</p>` : ''}
                ${e.competencias ? `<div class="skill-tags mt-2">${makeBadges(e.competencias, BADGE_EXP_COMPETENCIAS)}</div>` : ''}
            </div>`).join('');
    } else {
        hideSectionAndNav('experiencias');
    }

    // --- HOBBIES ---
    const hobbiesGrid = document.getElementById('hobbiesGrid');
    hobbiesGrid.innerHTML = '';
    if (data.hobbies && data.hobbies.length) {
        hobbiesGrid.innerHTML = data.hobbies.map(h => `
            <div class="col-6 col-md-3 text-center">
                <div class="hobby-item h-100">
                    <i class="bi ${escapeHtml(h.icone || 'bi-star')} hobby-icon" aria-hidden="true"></i>
                    <p class="mt-3 mb-0">${escapeHtml(h.nome)}</p>
                    ${h.descricao ? `<p class="mt-1 mb-0 hobby-description">${escapeHtml(h.descricao)}</p>` : ''}
                </div>
            </div>`).join('');
    } else {
        hideSectionAndNav('hobbies');
    }

    // --- VIAGENS ---
    const viagensGrid = document.getElementById('viagensGrid');
    viagensGrid.innerHTML = '';
    if (data.viagens && data.viagens.length) {
        document.getElementById('viagensIntro').textContent = 'Lugares que visitei e experiências que me marcaram...';
        viagensGrid.innerHTML = data.viagens.map(v => {
            const imgHtml = `<div class="card-img-top img-placeholder project-img-placeholder${v.imagem ? '' : ' no-image'}">${v.imagem ? `<img src="${escapeHtml(v.imagem)}" alt="${escapeHtml(v.destino)}" loading="lazy" decoding="async" onerror="this.parentElement.classList.add('no-image')">` : ''}<span class="img-fallback">Sem imagem selecionada</span></div>`;
            return `
            <div class="col-md-6 col-lg-4">
                <div class="card h-100">
                    ${imgHtml}
                    <div class="card-body">
                        <h3 class="card-title">${escapeHtml(v.destino)}</h3>
                        ${v.periodo ? `<span class="text-muted">${escapeHtml(v.periodo)}</span>` : ''}
                        ${v.descricao ? `<p class="card-text mt-2">${escapeHtml(v.descricao)}</p>` : ''}
                    </div>
                </div>
            </div>`;
        }).join('');
    } else {
        hideSectionAndNav('viagens');
    }

    // --- CONTATO ---
    document.getElementById('contatoEmail').textContent = em || '[seu@email.com]';
    document.getElementById('contatoTelefone').textContent = dp.telefone || '[(XX) XXXXX-XXXX]';
    document.getElementById('contatoLocal').textContent = dp.localizacao || '[Cidade, Estado]';

    const contatoSocial = document.getElementById('contatoSocial');
    let cSocial = '';
    if (gh) cSocial += `<a href="${escapeHtml(gh)}" class="btn btn-outline-dark btn-sm me-2" target="_blank" rel="noopener noreferrer"><i class="bi bi-github me-1" aria-hidden="true"></i>GitHub</a>`;
    if (li) cSocial += `<a href="${escapeHtml(li)}" class="btn btn-outline-primary btn-sm me-2" target="_blank" rel="noopener noreferrer"><i class="bi bi-linkedin me-1" aria-hidden="true"></i>LinkedIn</a>`;
    if (dp.whatsapp) {
        let wppNum = cleanWhatsApp(dp.whatsapp);
        if (wppNum.length >= 10) {
            if (!wppNum.startsWith('55')) wppNum = '55' + wppNum;
            cSocial += `<a href="https://wa.me/${escapeHtml(wppNum)}" class="btn btn-outline-success btn-sm" target="_blank" rel="noopener noreferrer"><i class="bi bi-whatsapp me-1" aria-hidden="true"></i>WhatsApp</a>`;
        }
    }
    contatoSocial.innerHTML = cSocial;

    // --- FOOTER ---
    const footerSocial = document.getElementById('footerSocial');
    let fSocial = '';
    if (gh) fSocial += `<a href="${escapeHtml(gh)}" class="text-light me-3" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><i class="bi bi-github fs-5"></i></a>`;
    if (li) fSocial += `<a href="${escapeHtml(li)}" class="text-light me-3" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><i class="bi bi-linkedin fs-5"></i></a>`;
    if (em) fSocial += `<a href="mailto:${escapeHtml(em)}" class="text-light" aria-label="Enviar e-mail"><i class="bi bi-envelope-fill fs-5"></i></a>`;
    footerSocial.innerHTML = fSocial;

    document.getElementById('footerNome').textContent = dp.nome || '';
}

// ===== INICIALIZAÇÃO =====
document.addEventListener('DOMContentLoaded', () => {
    const data = loadPortfolioData();
    if (data) {
        renderPortfolio(data);
        const curriculoOriginal = document.getElementById('curriculoOriginal');
        if (curriculoOriginal) curriculoOriginal.style.display = 'none';
        const demoFlag = document.getElementById('demoModeFlag');
        if (demoFlag) demoFlag.classList.remove('d-none');
    }

    // ===== MODO DEMONSTRAÇÃO: restaurar o portfólio original =====
    const demoRestore = document.getElementById('demoModeRestore');
    if (demoRestore) {
        demoRestore.addEventListener('click', () => {
            storageRemove(STORAGE_KEY);
            window.location.reload();
        });
    }

    // ===== NAVBAR: scroll effect =====
    const navbar = document.getElementById('navbar');

    function handleNavbarScroll() {
        navbar.classList.toggle('scrolled', window.scrollY > 50);
    }

    window.addEventListener('scroll', handleNavbarScroll);
    handleNavbarScroll();

    // ===== NAVBAR: active link highlight =====
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');

    function highlightNavLink() {
        const scrollPos = window.scrollY + 120;
        sections.forEach(section => {
            const top = section.offsetTop;
            const height = section.offsetHeight;
            const id = section.getAttribute('id');
            if (scrollPos >= top && scrollPos < top + height) {
                navLinks.forEach(link => {
                    link.classList.toggle('active', link.getAttribute('href') === '#' + id);
                });
            }
        });
    }

    window.addEventListener('scroll', highlightNavLink);

    // ===== NAVBAR: close menu on mobile =====
    const navCollapse = document.getElementById('navMenu');
    const bsCollapse = (typeof bootstrap !== 'undefined' && bootstrap.Collapse) ? new bootstrap.Collapse(navCollapse, { toggle: false }) : null;

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (navCollapse.classList.contains('show') && bsCollapse) bsCollapse.hide();
        });
    });

    // ===== SCROLL ANIMATION: fade-in =====
    const animatedElements = document.querySelectorAll(
        '.card, .timeline-item, .experience-item, .hobby-item, .contact-info, #formContato'
    );
    animatedElements.forEach(el => el.classList.add('fade-in'));

    if (!('IntersectionObserver' in window)) {
        animatedElements.forEach(el => el.classList.add('visible'));
    } else {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });

        animatedElements.forEach(el => observer.observe(el));
    }

    // ===== FORM CONTATO: submit (abre o cliente de e-mail preenchido) =====
    const form = document.getElementById('formContato');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            if (!form.checkValidity()) { form.classList.add('was-validated'); return; }

            const destinatario = document.getElementById('contatoEmail').textContent.trim();
            const nome = document.getElementById('nomeContato').value.trim();
            const email = document.getElementById('emailContato').value.trim();
            const assunto = document.getElementById('assuntoContato').value.trim();
            const mensagem = document.getElementById('mensagemContato').value.trim();

            const corpo = `Nome: ${nome}\nE-mail de resposta: ${email}\n\n${mensagem}`;
            const mailtoUrl = `mailto:${destinatario}?subject=${encodeURIComponent(assunto)}&body=${encodeURIComponent(corpo)}`;

            const btn = form.querySelector('button[type="submit"]');
            const originalText = btn.innerHTML;
            btn.disabled = true;
            btn.innerHTML = '<span class="spinner-border spinner-border-sm me-2"></span>Abrindo e-mail...';

            window.location.href = mailtoUrl;

            setTimeout(() => {
                btn.innerHTML = '<i class="bi bi-check-circle me-2"></i>Cliente de e-mail aberto!';
                btn.classList.remove('btn-primary');
                btn.classList.add('btn-success');
                form.reset();
                form.classList.remove('was-validated');
                setTimeout(() => {
                    btn.disabled = false;
                    btn.innerHTML = originalText;
                    btn.classList.remove('btn-success');
                    btn.classList.add('btn-primary');
                }, 3000);
            }, 800);
        });
    }

    // ===== SMOOTH SCROLL =====
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', (e) => {
            const targetId = anchor.getAttribute('href');
            if (targetId === '#') return;
            const target = document.querySelector(targetId);
            if (target) {
                e.preventDefault();
                const offset = navbar.offsetHeight + 10;
                window.scrollTo({ top: target.offsetTop - offset, behavior: SMOOTH ? 'smooth' : 'auto' });
            }
        });
    });
});
