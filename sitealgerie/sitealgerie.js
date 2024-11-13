document.addEventListener('DOMContentLoaded', () => {
    // Initialize AOS
    AOS.init({
        duration: 1000,
        once: true,
        offset: 100,
        easing: 'ease-out-cubic'
    });

    // Initialize particles.js
    particlesJS('particles-js', {
        particles: {
            number: { value: 80, density: { enable: true, value_area: 800 } },
            color: { value: '#ffffff' },
            shape: { type: 'circle' },
            opacity: { value: 0.5, random: false, anim: { enable: false } },
            size: { value: 3, random: true },
            line_linked: {
                enable: true,
                distance: 150,
                color: '#ffffff',
                opacity: 0.4,
                width: 1
            },
            move: {
                enable: true,
                speed: 2,
                direction: 'none',
                random: false,
                straight: false,
                out_mode: 'out',
                bounce: false
            }
        },
        interactivity: {
            detect_on: 'canvas',
            events: {
                onhover: { enable: true, mode: 'grab' },
                onclick: { enable: true, mode: 'push' },
                resize: true
            },
            modes: {
                grab: { distance: 140, line_linked: { opacity: 1 } },
                push: { particles_nb: 4 }
            }
        },
        retina_detect: true
    });

    // Translations object
    const translations = {
        fr: {
            title: "Projet: Site Web Click and Collect - Import Export Franco-Algérien",
            home: "Accueil",
            about: "À propos",
            projects: "Projets",
            skills: "Compétences",
            contact: "Contact",
            cv: "CV",
            inProgress: "En cours de développement",
            projectFeatures: "Fonctionnalités du Projet",
            projectOverview: "Aperçu du Projet",
            projectTimeline: "Chronologie du Projet",
            technologies: "Technologies Utilisées",
            summary: "Ce projet vise à créer un site web de click and collect pour une entreprise d'import-export franco-algérienne, facilitant la commande et la livraison de fruits et légumes frais d'Algérie en France.",
            features: [
                "Interface utilisateur intuitive pour la sélection des produits",
                "Système de panier et de commande en ligne",
                "Gestion des stocks en temps réel",
                "Intégration de moyens de paiement sécurisés",
                "Système de suivi des commandes pour les clients"
            ],
            phase1: "Phase 1",
            phase2: "Phase 2",
            phase3: "Phase 3",
            phase4: "Phase 4",
            phase1Title: "Conception et Design",
            phase2Title: "Développement Frontend",
            phase3Title: "Développement Backend",
            phase4Title: "Tests et Déploiement",
            phase1Date: "Novembre 2024",
            phase2Date: "Décembre 2024",
            phase3Date: "Janvier 2025",
            phase4Date: "Février 2025",
            statsCode: "Lignes de Code",
            statsProgress: "Progression",
            statsUsers: "Utilisateurs Potentiels",
            contactTitle: "Contact",
            footerText: "Tous droits réservés."
        },
        en: {
            title: "Project: Click and Collect Website - Franco-Algerian Import Export",
            home: "Home",
            about: "About",
            projects: "Projects",
            skills: "Skills",
            contact: "Contact",
            cv: "Resume",
            inProgress: "In development",
            projectFeatures: "Project Features",
            projectOverview: "Project Overview",
            projectTimeline: "Project Timeline",
            technologies: "Technologies Used",
            summary: "This project aims to create a click and collect website for a Franco-Algerian import-export company, facilitating the ordering and delivery of fresh fruits and vegetables from Algeria to France.",
            features: [
                "Intuitive user interface for product selection",
                "Online shopping cart and ordering system",
                "Real-time inventory management",
                "Integration of secure payment methods",
                "Order tracking system for customers"
            ],
            phase1: "Phase 1",
            phase2: "Phase 2",
            phase3: "Phase 3",
            phase4: "Phase 4",
            phase1Title: "Design and Conception",
            phase2Title: "Frontend Development",
            phase3Title: "Backend Development",
            phase4Title: "Testing and Deployment",
            phase1Date: "November 2024",
            phase2Date: "December 2024",
            phase3Date: "January 2025",
            phase4Date: "February 2025",
            statsCode: "Lines of Code",
            statsProgress: "Progress",
            statsUsers: "Potential Users",
            contactTitle: "Contact",
            footerText: "All rights reserved."
        },
        jp: {
            title: "プロジェクト：クリック＆コレクトウェブサイト - フランス・アルジェリア輸出入",
            home: "ホーム",
            about: "紹介",
            projects: "プロジェクト",
            skills: "スキル",
            contact: "連絡先",
            cv: "履歴書",
            inProgress: "開発中",
            projectFeatures: "プロジェクトの特徴",
            projectOverview: "プロジェクト概要",
            projectTimeline: "プロジェクトのタイムライン",
            technologies: "使用技術",
            summary: "このプロジェクトは、フランス・アルジェリアの輸出入企業向けのクリック＆コレクトウェブサイトを作成し、アルジェリアから新鮮な果物や野菜をフランスに注文・配送することを容易にすることを目的としています。",
            features: [
                "製品選択のための直感的なユーザーインターフェース",
                "オンラインショッピングカートと注文システム",
                "リアルタイムの在庫管理",
                "安全な支払い方法の統合",
                "顧客向け注文追跡システム"
            ],
            phase1: "フェーズ1",
            phase2: "フェーズ2",
            phase3: "フェーズ3",
            phase4: "フェーズ4",
            phase1Title: "設計とデザイン",
            phase2Title: "フロントエンド開発",
            phase3Title: "バックエンド開発",
            phase4Title: "テストと展開",
            phase1Date: "2024年11月",
            phase2Date: "2024年12月",
            phase3Date: "2025年1月",
            phase4Date: "2025年2月",
            statsCode: "コード行数",
            statsProgress: "進捗状況",
            statsUsers: "潜在的なユーザー",
            contactTitle: "連絡先",
            footerText: "全著作権所有。"
        }
    };

    let currentLang = 'fr';
    let titleInitialized = false;

    function updateContent(lang) {
        const t = translations[lang];

        document.title = t.title;
        const projectTitle = document.getElementById("project-title");
        if (!titleInitialized) {
            projectTitle.textContent = t.title;
            addTypewriterEffect(projectTitle);
            titleInitialized = true;
        } else {
            projectTitle.textContent = t.title;
        }

        document.getElementById("status-text").textContent = t.inProgress;
        document.getElementById("project-summary").textContent = t.summary;

        document.querySelectorAll('.timeline-item').forEach((item, index) => {
            const phase = index + 1;
            const phaseTitle = item.querySelector('h3');
            const phaseDesc = item.querySelector('p');
            const phaseDate = item.querySelector('.timeline-date');
            
            if (phaseTitle) phaseTitle.textContent = t[`phase${phase}`];
            if (phaseDesc) phaseDesc.textContent = t[`phase${phase}Title`];
            if (phaseDate) phaseDate.textContent = t[`phase${phase}Date`];
        });

        const statLabels = document.querySelectorAll('.stat-label');
        if (statLabels.length >= 3) {
            statLabels[0].textContent = t.statsCode;
            statLabels[1].textContent = t.statsProgress;
            statLabels[2].textContent = t.statsUsers;
        }

        const featureList = document.getElementById("feature-list");
        featureList.innerHTML = "";
        t.features.forEach(feature => {
            const li = document.createElement("li");
            li.textContent = feature;
            featureList.appendChild(li);
        });

        document.querySelectorAll('[data-translate]').forEach(el => {
            const key = el.getAttribute('data-translate');
            if (t[key]) {
                if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                    el.placeholder = t[key];
                } else {
                    el.textContent = t[key];
                }
            }
        });

        document.querySelectorAll('.lang-btn').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.lang === lang);
        });

        document.documentElement.lang = lang;
        currentLang = lang;
    }

    function addTypewriterEffect(element) {
        const text = element.textContent;
        element.textContent = '';
        let i = 0;
        const timer = setInterval(() => {
            if (i < text.length) {
                element.textContent += text.charAt(i);
                i++;
            } else {
                clearInterval(timer);
            }
        }, 50);
    }

    function animateFadeIn() {
        const fadeElements = document.querySelectorAll('.fade-in');
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, { threshold: 0.1 });

        fadeElements.forEach(el => observer.observe(el));
    }

    function animateStats() {
        const stats = document.querySelectorAll('.stat-number');
        const values = [1000, 80, 50];
        const suffixes = ['+', '%', '+'];

        stats.forEach((stat, index) => {
            let current = 0;
            const target = values[index];
            const increment = target / 50;
            
            const timer = setInterval(() => {
                current += increment;
                if (current >= target) {
                    current = target;
                    clearInterval(timer);
                }
                stat.textContent = Math.round(current) + suffixes[index];
            }, 40);
        });
    }

    function initializeTimeline() {
        const timelineItems = document.querySelectorAll('.timeline-item');
        timelineItems.forEach(item => {
            item.addEventListener('mouseenter', () => {
                const content = item.querySelector('.timeline-content');
                if (content) {
                    content.style.transform = 'scale(1.05)';
                    content.style.boxShadow = '0 10px 30px rgba(0,0,0,0.2)';
                }
            });
            
            item.addEventListener('mouseleave', () => {
                const content = item.querySelector('.timeline-content');
                if (content) {
                    content.style.transform = 'scale(1)';
                    content.style.boxShadow = 'none';
                }
            });
        });
    }

    function initializeTechStack() {
        const techItems = document.querySelectorAll('.tech-item');
        techItems.forEach(item => {
            item.addEventListener('mouseenter', () => {
                const icon = item.querySelector('i');
                if (icon) {
                    icon.style.transform = 'scale(1.2) rotate(360deg)';
                }
            });
            
            item.addEventListener('mouseleave', () => {
                const icon = item.querySelector('i');
                if (icon) {
                    icon.style.transform = 'scale(1) rotate(0)';
                }
            });
        });
    }

    function initialize() {
        updateContent(currentLang);
        animateFadeIn();
        animateStats();
        initializeTimeline();
        initializeTechStack();

        document.querySelectorAll('.lang-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const selectedLang = btn.dataset.lang;
                if (selectedLang !== currentLang) {
                    updateContent(selectedLang);
                }
            });
        });

        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
    }

    initialize();
});

console.log('Site algerie script loaded successfully.');