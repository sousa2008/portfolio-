const STORAGE_KEY = 'portfolioData';

let formCounters = { formacao: 0, projetos: 0, experiencias: 0, hobbies: 0, viagens: 0 };

// ===== HELPERS =====
function escapeHtml(str) {
    if (!str) return '';
    return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;').replace(/'/g, '&#39;');
}

// ===== RENDERIZAÇÃO DOS ITENS REPETÍVEIS =====

function renderFormacao(data) {
    const container = document.getElementById('formacaoContainer');
    container.innerHTML = '';
    if (data && data.length) {
        data.forEach(item => addFormacao(item));
    }
}

function addFormacao(data = null) {
    const container = document.getElementById('formacaoContainer');
    const idx = formCounters.formacao++;
    const html = `
        <div class="repeatable-group" data-idx="${idx}">
            <button type="button" class="btn btn-sm btn-outline-danger btn-remove" onclick="removeGroup(this)">
                <i class="bi bi-x-lg"></i>
            </button>
            <div class="row g-3">
                <div class="col-md-6">
                    <label class="form-label" for="formacao-${idx}-curso">Curso *</label>
                    <input type="text" class="form-control" id="formacao-${idx}-curso" name="formacao[${idx}][curso]" value="${escapeHtml(data?.curso || '')}">
                </div>
                <div class="col-md-6">
                    <label class="form-label" for="formacao-${idx}-instituicao">Instituição</label>
                    <input type="text" class="form-control" id="formacao-${idx}-instituicao" name="formacao[${idx}][instituicao]" value="${escapeHtml(data?.instituicao || '')}">
                </div>
                <div class="col-md-6">
                    <label class="form-label" for="formacao-${idx}-periodo">Período</label>
                    <input type="text" class="form-control" id="formacao-${idx}-periodo" name="formacao[${idx}][periodo]" value="${escapeHtml(data?.periodo || '')}" placeholder="Ex: 2022 – 2025">
                </div>
                <div class="col-md-6">
                    <label class="form-label" for="formacao-${idx}-descricao">Descrição</label>
                    <input type="text" class="form-control" id="formacao-${idx}-descricao" name="formacao[${idx}][descricao]" value="${escapeHtml(data?.descricao || '')}">
                </div>
            </div>
        </div>`;
    container.insertAdjacentHTML('beforeend', html);
}

function renderProjetos(data) {
    const container = document.getElementById('projetosContainer');
    container.innerHTML = '';
    if (data && data.length) {
        data.forEach(item => addProjeto(item));
    }
}

function addProjeto(data = null) {
    const container = document.getElementById('projetosContainer');
    const idx = formCounters.projetos++;
    const html = `
        <div class="repeatable-group" data-idx="${idx}">
            <button type="button" class="btn btn-sm btn-outline-danger btn-remove" onclick="removeGroup(this)">
                <i class="bi bi-x-lg"></i>
            </button>
            <div class="row g-3">
                <div class="col-md-6">
                    <label class="form-label" for="projetos-${idx}-nome">Nome do projeto *</label>
                    <input type="text" class="form-control" id="projetos-${idx}-nome" name="projetos[${idx}][nome]" value="${escapeHtml(data?.nome || '')}">
                </div>
                <div class="col-md-6">
                    <label class="form-label" for="projetos-${idx}-tecnologias">Tecnologias <small class="text-muted">(vírgula)</small></label>
                    <input type="text" class="form-control" id="projetos-${idx}-tecnologias" name="projetos[${idx}][tecnologias]" value="${escapeHtml(data?.tecnologias || '')}">
                </div>
                <div class="col-12">
                    <label class="form-label" for="projetos-${idx}-descricao">Descrição</label>
                    <textarea class="form-control" id="projetos-${idx}-descricao" name="projetos[${idx}][descricao]" rows="2">${escapeHtml(data?.descricao || '')}</textarea>
                </div>
                <div class="col-md-6">
                    <label class="form-label" for="projetos-${idx}-imagem">Imagem do projeto</label>
                    <input type="file" class="form-control" id="projetos-${idx}-imagem" name="projetos[${idx}][imagem]" accept="image/*">
                    <input type="hidden" name="projetos[${idx}][imagemAtual]" value="${escapeHtml(data?.imagem || '')}">
                </div>
                <div class="col-md-3">
                    <label class="form-label" for="projetos-${idx}-linkCodigo">Link do código</label>
                    <input type="url" class="form-control" id="projetos-${idx}-linkCodigo" name="projetos[${idx}][linkCodigo]" value="${escapeHtml(data?.linkCodigo || '')}">
                </div>
                <div class="col-md-3">
                    <label class="form-label" for="projetos-${idx}-linkDemo">Link da demo</label>
                    <input type="url" class="form-control" id="projetos-${idx}-linkDemo" name="projetos[${idx}][linkDemo]" value="${escapeHtml(data?.linkDemo || '')}">
                </div>
            </div>
        </div>`;
    container.insertAdjacentHTML('beforeend', html);
}

function renderExperiencias(data) {
    const container = document.getElementById('experienciasContainer');
    container.innerHTML = '';
    if (data && data.length) {
        data.forEach(item => addExperiencia(item));
    }
}

function addExperiencia(data = null) {
    const container = document.getElementById('experienciasContainer');
    const idx = formCounters.experiencias++;
    const html = `
        <div class="repeatable-group" data-idx="${idx}">
            <button type="button" class="btn btn-sm btn-outline-danger btn-remove" onclick="removeGroup(this)">
                <i class="bi bi-x-lg"></i>
            </button>
            <div class="row g-3">
                <div class="col-md-6">
                    <label class="form-label" for="experiencias-${idx}-cargo">Cargo / Função *</label>
                    <input type="text" class="form-control" id="experiencias-${idx}-cargo" name="experiencias[${idx}][cargo]" value="${escapeHtml(data?.cargo || '')}">
                </div>
                <div class="col-md-6">
                    <label class="form-label" for="experiencias-${idx}-empresa">Empresa / Organização</label>
                    <input type="text" class="form-control" id="experiencias-${idx}-empresa" name="experiencias[${idx}][empresa]" value="${escapeHtml(data?.empresa || '')}">
                </div>
                <div class="col-md-6">
                    <label class="form-label" for="experiencias-${idx}-periodo">Período</label>
                    <input type="text" class="form-control" id="experiencias-${idx}-periodo" name="experiencias[${idx}][periodo]" value="${escapeHtml(data?.periodo || '')}" placeholder="Ex: Jan/2024 – Atual">
                </div>
                <div class="col-md-6">
                    <label class="form-label" for="experiencias-${idx}-competencias">Competências utilizadas <small class="text-muted">(vírgula)</small></label>
                    <input type="text" class="form-control" id="experiencias-${idx}-competencias" name="experiencias[${idx}][competencias]" value="${escapeHtml(data?.competencias || '')}">
                </div>
                <div class="col-12">
                    <label class="form-label" for="experiencias-${idx}-descricao">Descrição</label>
                    <textarea class="form-control" id="experiencias-${idx}-descricao" name="experiencias[${idx}][descricao]" rows="2">${escapeHtml(data?.descricao || '')}</textarea>
                </div>
            </div>
        </div>`;
    container.insertAdjacentHTML('beforeend', html);
}

function renderHobbies(data) {
    const container = document.getElementById('hobbiesContainer');
    container.innerHTML = '';
    if (data && data.length) {
        data.forEach(item => addHobby(item));
    }
}

function addHobby(data = null) {
    const container = document.getElementById('hobbiesContainer');
    const idx = formCounters.hobbies++;
    const iconOptions = [
        'bi-controller','bi-music-note-beamed','bi-book','bi-bicycle','bi-camera',
        'bi-cup-hot','bi-palette','bi-film','bi-dribbble','bi-moon-stars',
        'bi-tree','bi-suitcase','bi-puzzle','bi-braces','bi-mic',
        'bi-emoji-laughing','bi-trophy','bi-heart','bi-lightning','bi-joystick'
    ];
    const iconsHtml = iconOptions.map(icon =>
        `<option value="${icon}" ${data?.icone === icon ? 'selected' : ''}>${icon.replace('bi-', '')}</option>`
    ).join('');

    const html = `
        <div class="repeatable-group" data-idx="${idx}">
            <button type="button" class="btn btn-sm btn-outline-danger btn-remove" onclick="removeGroup(this)">
                <i class="bi bi-x-lg"></i>
            </button>
            <div class="row g-3 align-items-end">
                <div class="col-md-4">
                    <label class="form-label" for="hobbies-${idx}-nome">Nome *</label>
                    <input type="text" class="form-control" id="hobbies-${idx}-nome" name="hobbies[${idx}][nome]" value="${escapeHtml(data?.nome || '')}">
                </div>
                <div class="col-md-4">
                    <label class="form-label" for="hobbies-${idx}-icone">Ícone (Bootstrap Icons)</label>
                    <select class="form-select" id="hobbies-${idx}-icone" name="hobbies[${idx}][icone]">
                        <option value="bi-star" ${!data?.icone ? 'selected' : ''}>Selecione...</option>
                        ${iconsHtml}
                    </select>
                </div>
                <div class="col-md-4">
                    <label class="form-label" for="hobbies-${idx}-descricao">Descrição (opcional)</label>
                    <input type="text" class="form-control" id="hobbies-${idx}-descricao" name="hobbies[${idx}][descricao]" value="${escapeHtml(data?.descricao || '')}">
                </div>
            </div>
        </div>`;
    container.insertAdjacentHTML('beforeend', html);
}

function renderViagens(data) {
    const container = document.getElementById('viagensContainer');
    container.innerHTML = '';
    if (data && data.length) {
        data.forEach(item => addViagem(item));
    }
}

function addViagem(data = null) {
    const container = document.getElementById('viagensContainer');
    const idx = formCounters.viagens++;
    const html = `
        <div class="repeatable-group" data-idx="${idx}">
            <button type="button" class="btn btn-sm btn-outline-danger btn-remove" onclick="removeGroup(this)">
                <i class="bi bi-x-lg"></i>
            </button>
            <div class="row g-3">
                <div class="col-md-4">
                    <label class="form-label" for="viagens-${idx}-destino">Destino *</label>
                    <input type="text" class="form-control" id="viagens-${idx}-destino" name="viagens[${idx}][destino]" value="${escapeHtml(data?.destino || '')}">
                </div>
                <div class="col-md-4">
                    <label class="form-label" for="viagens-${idx}-periodo">Período / Ano</label>
                    <input type="text" class="form-control" id="viagens-${idx}-periodo" name="viagens[${idx}][periodo]" value="${escapeHtml(data?.periodo || '')}">
                </div>
                <div class="col-md-4">
                    <label class="form-label" for="viagens-${idx}-imagem">Imagem da viagem</label>
                    <input type="file" class="form-control" id="viagens-${idx}-imagem" name="viagens[${idx}][imagem]" accept="image/*">
                    <input type="hidden" name="viagens[${idx}][imagemAtual]" value="${escapeHtml(data?.imagem || '')}">
                </div>
                <div class="col-12">
                    <label class="form-label" for="viagens-${idx}-descricao">Descrição</label>
                    <textarea class="form-control" id="viagens-${idx}-descricao" name="viagens[${idx}][descricao]" rows="2">${escapeHtml(data?.descricao || '')}</textarea>
                </div>
            </div>
        </div>`;
    container.insertAdjacentHTML('beforeend', html);
}

// ===== REMOVER GRUPO =====
function removeGroup(btn) {
    btn.closest('.repeatable-group').remove();
}

// ===== COLETAR DADOS DO FORMULÁRIO =====
function readImageFile(file) {
    if (!file || !file.size) return Promise.resolve('');
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result);
        reader.onerror = () => reject(reader.error);
        reader.readAsDataURL(file);
    });
}

async function getImageValue(container, fileName, currentName) {
    const file = container.querySelector(`[name="${fileName}"]`)?.files[0];
    return file ? readImageFile(file) : (container.querySelector(`[name="${currentName}"]`)?.value || '');
}

async function collectFormData() {
    const form = document.getElementById('portfolioForm');
    const fd = new FormData(form);

    const data = {
        dadosPessoais: {
            nome: fd.get('nome') || '',
            cargo: fd.get('cargo') || '',
            bio: fd.get('bio') || '',
            sobreMim: fd.get('sobreMim') || '',
            fotoPerfil: await getImageValue(form, 'fotoPerfil', 'fotoPerfilAtual'),
            fotoSobre: await getImageValue(form, 'fotoSobre', 'fotoSobreAtual'),
            localizacao: fd.get('localizacao') || '',
            nascimento: fd.get('nascimento') || '',
            idiomas: fd.get('idiomas') || '',
            email: fd.get('email') || '',
            telefone: fd.get('telefone') || '',
            whatsapp: fd.get('whatsapp') || '',
            github: fd.get('github') || '',
            linkedin: fd.get('linkedin') || ''
        },
        competencias: {
            linguagens: fd.get('linguagens') || '',
            ferramentas: fd.get('ferramentas') || '',
            softSkills: fd.get('softSkills') || ''
        },
        formacao: [],
        projetos: [],
        experiencias: [],
        hobbies: [],
        viagens: []
    };

    // Coletar itens repetíveis
    document.querySelectorAll('#formacaoContainer .repeatable-group').forEach(group => {
        const inputs = group.querySelectorAll('input, textarea, select');
        const item = {};
        inputs.forEach(input => {
            const name = input.getAttribute('name');
            if (name) {
                const key = name.split('[').pop().replace(']', '');
                item[key] = input.value;
            }
        });
        if (item.curso) data.formacao.push(item);
    });

    for (const group of document.querySelectorAll('#projetosContainer .repeatable-group')) {
        const inputs = group.querySelectorAll('input:not([type="file"]), textarea');
        const item = {};
        inputs.forEach(input => {
            const name = input.getAttribute('name');
            if (name) {
                const key = name.split('[').pop().replace(']', '');
                item[key] = input.value;
            }
        });
        if (item.nome) {
            item.imagem = await getImageValue(group, `projetos[${group.dataset.idx}][imagem]`, `projetos[${group.dataset.idx}][imagemAtual]`);
            data.projetos.push(item);
        }
    }

    document.querySelectorAll('#experienciasContainer .repeatable-group').forEach(group => {
        const inputs = group.querySelectorAll('input, textarea');
        const item = {};
        inputs.forEach(input => {
            const name = input.getAttribute('name');
            if (name) {
                const key = name.split('[').pop().replace(']', '');
                item[key] = input.value;
            }
        });
        if (item.cargo) data.experiencias.push(item);
    });

    document.querySelectorAll('#hobbiesContainer .repeatable-group').forEach(group => {
        const inputs = group.querySelectorAll('input, select');
        const item = {};
        inputs.forEach(input => {
            const name = input.getAttribute('name');
            if (name) {
                const key = name.split('[').pop().replace(']', '');
                item[key] = input.value;
            }
        });
        if (item.nome) data.hobbies.push(item);
    });

    for (const group of document.querySelectorAll('#viagensContainer .repeatable-group')) {
        const inputs = group.querySelectorAll('input, textarea');
        const item = {};
        inputs.forEach(input => {
            const name = input.getAttribute('name');
            if (name) {
                const key = name.split('[').pop().replace(']', '');
                item[key] = input.value;
            }
        });
        if (item.destino) {
            item.imagem = await getImageValue(group, `viagens[${group.dataset.idx}][imagem]`, `viagens[${group.dataset.idx}][imagemAtual]`);
            data.viagens.push(item);
        }
    }

    return data;
}

// ===== PREENCHER FORMULÁRIO COM DADOS EXISTENTES =====
function populateForm(data) {
    if (!data) return;

    const form = document.getElementById('portfolioForm');
    const dp = data.dadosPessoais || {};
    const comp = data.competencias || {};

    function setVal(name, val) {
        const el = form.querySelector(`[name="${name}"]`);
        if (el && val) el.value = val;
    }

    setVal('nome', dp.nome);
    setVal('cargo', dp.cargo);
    setVal('bio', dp.bio);
    setVal('sobreMim', dp.sobreMim);
    document.getElementById('form-fotoPerfilAtual').value = dp.fotoPerfil || '';
    document.getElementById('form-fotoSobreAtual').value = dp.fotoSobre || '';
    setVal('localizacao', dp.localizacao);
    setVal('nascimento', dp.nascimento);
    setVal('idiomas', dp.idiomas);
    setVal('email', dp.email);
    setVal('telefone', dp.telefone);
    setVal('whatsapp', dp.whatsapp);
    setVal('github', dp.github);
    setVal('linkedin', dp.linkedin);
    setVal('linguagens', comp.linguagens);
    setVal('ferramentas', comp.ferramentas);
    setVal('softSkills', comp.softSkills);

    renderFormacao(data.formacao);
    renderProjetos(data.projetos);
    renderExperiencias(data.experiencias);
    renderHobbies(data.hobbies);
    renderViagens(data.viagens);
}

// ===== VERIFICAR CAMPOS OBRIGATÓRIOS FALTANTES =====
function checkMissingFields() {
    const form = document.getElementById('portfolioForm');
    const requiredFields = form.querySelectorAll('[required]');
    const missing = [];

    requiredFields.forEach(field => {
        const value = field.value.trim();
        if (!value) {
            const label = field.closest('.mb-3, .col-md-6, .col-md-4, .col-12, .col-md-3')
                ?.querySelector('.form-label');
            const fieldName = label ? label.textContent.replace(' *', '').trim() : field.getAttribute('name');
            missing.push(fieldName);
        }
    });

    // Verificar itens repetíveis obrigatórios
    const repeatableRequired = [
        { container: '#formacaoContainer', label: 'Curso (Formação)', key: 'curso' },
        { container: '#projetosContainer', label: 'Nome do projeto', key: 'nome' },
        { container: '#experienciasContainer', label: 'Cargo/Função (Experiência)', key: 'cargo' },
        { container: '#hobbiesContainer', label: 'Nome do hobby', key: 'nome' },
        { container: '#viagensContainer', label: 'Destino (Viagem)', key: 'destino' },
    ];

    repeatableRequired.forEach(({ container, label, key }) => {
        const groups = document.querySelectorAll(`${container} .repeatable-group`);
        groups.forEach((group, i) => {
            const input = group.querySelector(`[name*="[${key}]"]`);
            if (input && !input.value.trim()) {
                missing.push(`${label} #${i + 1}`);
            }
        });
    });

    const alertEl = document.getElementById('missingFieldsAlert');
    const listEl = document.getElementById('missingFieldsList');

    if (missing.length > 0) {
        listEl.innerHTML = missing.map(f => `<li>${escapeHtml(f)}</li>`).join('');
        alertEl.classList.remove('d-none');
    } else {
        alertEl.classList.add('d-none');
    }

    return missing;
}

// ===== LIMPAR TODOS OS CAMPOS =====
function clearAllFields() {
    if (!confirm('Tem certeza que deseja apagar todas as informações? Isso irá voltar ao portfólio padrão.')) return;

    localStorage.removeItem(STORAGE_KEY);
    window.location.href = 'index.html';
}

// ===== INICIALIZAÇÃO =====
document.addEventListener('DOMContentLoaded', () => {
    let isEditing = null;
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
        try { isEditing = JSON.parse(raw); } catch (e) { localStorage.removeItem(STORAGE_KEY); }
    }

    if (isEditing) {
        document.getElementById('formTitle').innerHTML = '<i class="bi bi-pencil-square me-2"></i>Editar Portfólio';
        document.getElementById('formSubtitle').textContent = 'Altere seus dados e salve as atualizações';
        populateForm(isEditing);
    }

    // Adicionar items iniciais vazios se não houver dados
    if (!isEditing) {
        addFormacao();
        addProjeto();
        addExperiencia();
        addHobby();
        addViagem();
    }

    // Verificar campos faltantes ao carregar
    checkMissingFields();

    // Re-verificar ao digitar em campos obrigatórios
    document.querySelectorAll('[required]').forEach(field => {
        field.addEventListener('input', checkMissingFields);
    });

    // SUBMIT
    document.getElementById('portfolioForm').addEventListener('submit', async (e) => {
        e.preventDefault();

        const form = e.target;
        if (!form.checkValidity()) {
            form.classList.add('was-validated');
            checkMissingFields();
            return;
        }

        const data = await collectFormData();
        localStorage.setItem(STORAGE_KEY, JSON.stringify(data));

        const btn = form.querySelector('button[type="submit"]');
        btn.disabled = true;
        btn.innerHTML = '<span class="spinner-border spinner-border-sm me-2"></span>Salvando...';

        setTimeout(() => {
            window.location.href = 'index.html';
        }, 800);
    });
});
