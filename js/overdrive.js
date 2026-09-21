/* ============================================================
   OVERDRIVE — "Cidade-Código"
   O portfólio é um sistema vivo: boot do terminal, cidade que
   se energiza com o scroll, nome que desmonta em cacos de sinal,
   linha de vida da formação, títulos que entram online e um
   retrato holográfico. Degrada com elegância: sem estas regras,
   o portfólio continua inteiro.
   ============================================================ */
(function () {
    'use strict';

    var REDUCED = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    var FINE_POINTER = window.matchMedia('(pointer: fine)').matches;
    var docEl = document.documentElement;

    docEl.classList.add('od-ready');

    function storageGet(key) {
        try { return window.sessionStorage.getItem(key); } catch (e) { return null; }
    }
    function storageSet(key, value) {
        try { window.sessionStorage.setItem(key, value); } catch (e) { /* ignora */ }
    }

    function sleep(ms) {
        return new Promise(function (resolve) { setTimeout(resolve, ms); });
    }

    function clamp01(v) {
        return v < 0 ? 0 : (v > 1 ? 1 : v);
    }

    function frac(v) {
        return v - Math.floor(v);
    }

    function cssVar(name, fallback) {
        var v = getComputedStyle(docEl).getPropertyValue(name).trim();
        return v || fallback;
    }

    /* ============================================================
       MÁQUINA VIVA — boot do terminal (uma vez por sessão)
       ============================================================ */
    var boot = document.getElementById('odBoot');
    if (boot && !REDUCED && !storageGet('odBootSeen')) {
        runBoot(boot);
    } else if (boot) {
        boot.parentNode.removeChild(boot);
    }

    function runBoot(bootEl) {
        var body = document.getElementById('odBootBody');
        var bar = document.getElementById('odBootBar');
        var lines = [
            'inicializando portfólio...',
            'cidade-código · sistema online'
        ];
        var skipped = false;

        function exit() {
            if (skipped) return;
            skipped = true;
            bootEl.classList.add('od-boot--exit');
            setTimeout(function () {
                if (bootEl.parentNode) bootEl.parentNode.removeChild(bootEl);
                storageSet('odBootSeen', '1');
            }, 320);
        }

        ['pointerdown', 'keydown', 'wheel', 'touchstart'].forEach(function (ev) {
            bootEl.addEventListener(ev, exit, { passive: true });
        });

        (async function sequence() {
            var lastP = null;
            for (var j = 0; j < lines.length && !skipped; j++) {
                var p = document.createElement('p');
                p.className = 'od-boot__line' + (j < lines.length - 1 ? ' od-boot__line--dim' : '');
                body.appendChild(p);
                for (var i = 0; i <= lines[j].length && !skipped; i++) {
                    p.textContent = lines[j].slice(0, i);
                    await sleep(24);
                }
                lastP = p;
                await sleep(340);
            }
            if (skipped || !lastP) return;

            bar.style.transition = 'transform 0.6s ' + cssVar('--ease-out-expo', 'cubic-bezier(0.16, 1, 0.3, 1)');
            bar.style.transform = 'scaleX(1)';
            await sleep(480);
            if (skipped) return;
            exit();
        })();
    }

    /* ============================================================
       CIDADE-CODIGO — estado compartilhado do scroll
       ============================================================ */
    var scrollY = window.scrollY;
    var maxScroll = 0;
    var progress = 0;

    var hero = document.getElementById('home');
    var progressBar = document.getElementById('odProgressBar');
    var lampEl = hero ? hero.querySelector('.od-hero-lamp') : null;
    var heroImage = hero ? hero.querySelector('.hero-image') : null;
    var heroPhoto = hero ? hero.querySelector('.foto-perfil-placeholder') : null;
    var photoElement = hero ? hero.querySelector('.foto-perfil') : null;
    var ripEl = hero ? hero.querySelector('.od-rip') : null;

    var heroDrain = [];
    if (hero) {
        heroDrain = hero.querySelectorAll('.hero-subtitle, .hero-description, .hero-buttons, .hero-social');
    }

    var SECTIONS = ['home', 'sobre', 'formacao', 'competencias', 'projetos', 'experiencias', 'hobbies', 'viagens', 'contato'];
    var SECTION_NAMES = {
        home: 'Início',
        sobre: 'Sobre',
        formacao: 'Formação',
        competencias: 'Competências',
        projetos: 'Projetos',
        experiencias: 'Experiências',
        hobbies: 'Hobbies',
        viagens: 'Viagens',
        contato: 'Contato'
    };
    var nodes = [];
    var telemetryWrap = document.getElementById('odTelemetry');
    var telemetryEl = document.getElementById('odTelemetryText');
    var activeName = 'Início';

    var timeline = document.getElementById('formacaoTimeline');
    var timelineCharge = null;
    var heroH = hero ? hero.offsetHeight : 0;

    /* ============================================================
       CIDADE-CODIGO — o nome desmonta em cacos de sinal (ghost)
       ============================================================ */
    var ghostEl = null;
    var ghostChars = [];
    var heroTitle = document.getElementById('home-title');

    function buildGhost() {
        if (!heroTitle || heroTitle.dataset.odGhost) return;
        heroTitle.dataset.odGhost = '1';
        var text = heroTitle.textContent;
        if (!text) return;

        var old = heroTitle.querySelector('.od-ghost');
        if (old) old.parentNode.removeChild(old);

        ghostEl = document.createElement('span');
        ghostEl.className = 'od-ghost';
        ghostEl.setAttribute('aria-hidden', 'true');
        ghostChars = [];

        var chars = Array.prototype.slice.call(text);
        var n = chars.length;
        for (var i = 0; i < n; i++) {
            var c = chars[i];
            var s = document.createElement('span');
            s.className = 'od-g';
            s.textContent = c;
            if (c === ' ') s.setAttribute('style', 'white-space: pre;');
            ghostEl.appendChild(s);
            ghostChars.push(s);
        }
        heroTitle.appendChild(ghostEl);
    }

    function ghostFrame(u) {
        if (!ghostEl || !ghostChars.length) return;
        var n = ghostChars.length;
        ghostEl.style.opacity = u > 0.001 ? '1' : '0';
        for (var i = 0; i < n; i++) {
            var phase = n > 1 ? i / (n - 1) : 0;
            var gu = clamp01((u - phase * 0.3) * 1.75);
            if (gu <= 0) {
                ghostChars[i].style.opacity = '0';
                ghostChars[i].style.transform = 'none';
                continue;
            }
            var tx = (frac(i * 0.618) - 0.5) * 46 * gu;
            var ty = (26 + frac(i * 0.37) * 34) * gu;
            var rot = (frac(i * 0.213) - 0.5) * 22 * gu;
            var sc = 1 - 0.22 * gu;
            ghostChars[i].style.opacity = String(gu);
            ghostChars[i].style.transform =
                'translate3d(' + tx.toFixed(2) + 'px,' + ty.toFixed(2) + 'px,0) rotate(' + rot.toFixed(2) + 'deg) scale(' + sc.toFixed(3) + ')';
        }
    }

    /* ============================================================
       CIDADE-CODIGO — atualização por frame / scroll
       ============================================================ */
    var measureTimer = 0;

    function measureNodes() {
        var sc = Math.max(0, window.scrollY);
        nodes = SECTIONS.map(function (id) {
            var el = document.getElementById(id);
            if (!el) return null;
            var hidden = el.style.display === 'none' || el.offsetParent === null;
            var r = el.getBoundingClientRect();
            return {
                id: id,
                el: el,
                docY: r.top + sc,
                h: r.height,
                hidden: hidden
            };
        }).filter(Boolean);
    }

    function refreshScrollState() {
        scrollY = window.scrollY;
        maxScroll = Math.max(1, docEl.scrollHeight - window.innerHeight);
        progress = clamp01(scrollY / maxScroll);

        if (progressBar) progressBar.style.transform = 'scaleX(' + progress.toFixed(4) + ')';

        var probe = scrollY + window.innerHeight * 0.5;
        var found = 'Início';
        for (var i = 0; i < nodes.length; i++) {
            nodes[i].active = false;
            if (!nodes[i].hidden && probe >= nodes[i].docY && probe < nodes[i].docY + nodes[i].h) {
                found = SECTION_NAMES[nodes[i].id] || nodes[i].id;
            }
        }
        activeName = found;

        if (telemetryEl) {
            telemetryEl.textContent = activeName + ' · ' + Math.round(progress * 100) + '%';
        }
        if (telemetryWrap) {
            telemetryWrap.classList.toggle('is-on', scrollY > heroH * 0.85);
        }

        if (timelineCharge && timeline) {
            var tr = timeline.getBoundingClientRect();
            if (tr.height > 0) {
                var charge = clamp01((window.innerHeight - tr.top) / tr.height);
                timelineCharge.style.transform = 'scaleY(' + charge.toFixed(4) + ')';
            }
        }

        if (!REDUCED) updateHeroLeave();
    }

    function onScroll() {
        refreshScrollState();
        clearTimeout(measureTimer);
        measureTimer = setTimeout(measureNodes, 200);
    }

    window.addEventListener('scroll', onScroll, { passive: true });

    /* ============================================================
       HERO — animações que acompanham a saída da primeira dobra
       O campo de partículas e as luzes de cidade (canvas full-screen)
       foram removidos; só restam os efeitos confinados ao hero.
       ============================================================ */
    function updateHeroLeave() {
        if (!hero) return;
        var u = heroH > 0 ? clamp01(window.scrollY / heroH) : 0;
        ghostFrame(u);
        if (u > 0.001) {
            var drain = clamp01(u * 1.25);
            for (var di = 0; di < heroDrain.length; di++) {
                heroDrain[di].style.opacity = String(1 - drain);
            }
            if (heroTitle) {
                heroTitle.style.opacity = String(1 - u * 0.6);
                heroTitle.style.transform = 'translate3d(0,' + (-u * 14).toFixed(2) + 'px,0)';
            }
            if (heroImage) {
                heroImage.style.transform = 'translate3d(0,' + (-u * 20).toFixed(2) + 'px,0)';
            }
            var rip = Math.min(1, u * 1.1);
            if (ripEl) ripEl.style.opacity = (rip * 0.55).toFixed(3);
            if (photoElement) {
                photoElement.style.filter =
                    'brightness(' + (1 - u * 0.22).toFixed(3) + ') saturate(' + (1 - u * 0.35).toFixed(3) + ')';
            }
        } else if (u === 0 && heroTitle && heroTitle.style.opacity) {
            heroTitle.style.opacity = '';
            heroTitle.style.transform = '';
            if (heroImage) heroImage.style.transform = '';
            if (ripEl) ripEl.style.opacity = '0';
            if (photoElement) photoElement.style.filter = '';
            for (var di2 = 0; di2 < heroDrain.length; di2++) heroDrain[di2].style.opacity = '';
        }
    }

    function onViewportChange() {
        if (hero) heroH = hero.offsetHeight;
        if (!REDUCED) updateHeroLeave();
    }

    window.addEventListener('resize', onViewportChange, { passive: true });

    /* ============================================================
       CIDADE-CODIGO — lâmpada que segue o cursor no hero
       ============================================================ */
    if (hero && lampEl && FINE_POINTER && !REDUCED) {
        hero.classList.add('od-ambient');
        hero.addEventListener('pointermove', function (e) {
            var rect = hero.getBoundingClientRect();
            lampEl.style.setProperty('--od-sx', ((e.clientX - rect.left) / rect.width) * 100 + '%');
            lampEl.style.setProperty('--od-sy', ((e.clientY - rect.top) / rect.height) * 100 + '%');
        }, { passive: true });
    }

    /* ============================================================
       CIDADE-CODIGO — retrato holográfico
       ============================================================ */
    if (heroImage && heroPhoto && FINE_POINTER && !REDUCED) {
        heroImage.classList.add('od-tilt');
        heroImage.addEventListener('pointermove', function (e) {
            var rect = heroImage.getBoundingClientRect();
            var nx = (e.clientX - rect.left) / rect.width;
            var ny = (e.clientY - rect.top) / rect.height;
            var rx = ((0.5 - ny) * -9).toFixed(2);
            var ry = ((nx - 0.5) * 12).toFixed(2);
            heroPhoto.style.transform = 'translate3d(0, -2px, 0) rotateX(' + rx + 'deg) rotateY(' + ry + 'deg)';
        }, { passive: true });
        heroImage.addEventListener('pointerleave', function () {
            heroPhoto.style.transform = '';
        });
        if (photoElement) photoElement.style.willChange = 'transform';
    }

    /* ============================================================
       CIDADE-CODIGO — linha de vida da formação carrega
       ============================================================ */
    if (timeline && !REDUCED) {
        timelineCharge = document.createElement('span');
        timelineCharge.className = 'od-charge';
        timelineCharge.setAttribute('aria-hidden', 'true');
        timeline.appendChild(timelineCharge);
    }

    /* ============================================================
       REVELAÇÃO — atrasos escalonados para listas (uma linguagem)
       ============================================================ */
    if (!REDUCED) {
        var revealItems = document.querySelectorAll('.fade-in');
        for (var r = 0; r < revealItems.length; r++) {
            (function (el) {
                var pos = Array.prototype.indexOf.call(el.parentElement.children, el);
                el.style.transitionDelay = Math.min(pos * 65, 340) + 'ms';
                el.addEventListener('transitionend', function (ev) {
                    if (ev.propertyName === 'opacity') el.style.transitionDelay = '';
                });
            })(revealItems[r]);
        }
    }

    /* ============================================================
       INICIALIZAÇÃO
       ============================================================ */
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

    function init() {
        refreshScrollState();
        measureNodes();
        setTimeout(measureNodes, 1200);
        window.addEventListener('load', measureNodes);

        /* Títulos de seção entram online */
        if (!REDUCED) {
            var titles = document.querySelectorAll('.section-title');
            var observer = ('IntersectionObserver' in window) ? new IntersectionObserver(function (entries) {
                entries.forEach(function (entry) {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('od-title--on');
                        observer.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.35 }) : null;

            for (var ti = 0; ti < titles.length; ti++) {
                var t = titles[ti];
                var ttext = t.textContent;
                if (!ttext) continue;
                t.classList.add('od-title--split');
                t.innerHTML = '';
                var tchars = Array.prototype.slice.call(ttext);
                for (var ci = 0; ci < tchars.length; ci++) {
                    var csp = document.createElement('span');
                    csp.className = 'od-tchar';
                    csp.style.setProperty('--td', (ci * 38) + 'ms');
                    csp.textContent = tchars[ci];
                    t.appendChild(csp);
                }
                if (observer) observer.observe(t);
                else t.classList.add('od-title--on');
            }
        }

        /* Nome em cacos de sinal — construído após a renderização dos dados */
        buildGhost();

        /* Power-on: a onda acende cada bloco quando ele fica visível */
        if (!REDUCED) {
            var blocks = document.querySelectorAll('.fade-in');
            var sweepDelay = function (el) {
                var pos = Array.prototype.indexOf.call(el.parentNode.children, el);
                el.style.setProperty('--od-wave-delay', Math.min(pos * 55, 300) + 'ms');
            };
            if ('MutationObserver' in window) {
                for (var bi = 0; bi < blocks.length; bi++) {
                    (function (el) {
                        sweepDelay(el);
                        var obs = new MutationObserver(function () {
                            if (el.classList.contains('visible')) {
                                el.classList.add('od-swept');
                                obs.disconnect();
                            }
                        });
                        obs.observe(el, { attributes: true, attributeFilter: ['class'] });
                        if (el.classList.contains('visible')) el.classList.add('od-swept');
                    })(blocks[bi]);
                }
            } else if ('IntersectionObserver' in window) {
                var sweptObs = new IntersectionObserver(function (entries) {
                    entries.forEach(function (en) {
                        if (en.isIntersecting) {
                            en.target.classList.add('od-swept');
                            sweptObs.unobserve(en.target);
                        }
                    });
                }, { threshold: 0.15 });
                for (var si = 0; si < blocks.length; si++) {
                    sweepDelay(blocks[si]);
                    sweptObs.observe(blocks[si]);
                }
            } else {
                for (var fj = 0; fj < blocks.length; fj++) {
                    sweepDelay(blocks[fj]);
                    blocks[fj].classList.add('od-swept');
                }
            }
        }
    }
})();