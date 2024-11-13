document.addEventListener('DOMContentLoaded', function() {
    // Initialisation AOS
    AOS.init({
        duration: 1000,
        once: true,
    });

    // Cursor management
    const cursor = document.querySelector('.cursor');
    const cursorFollower = document.querySelector('.cursor-follower');

    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
        cursorFollower.style.left = e.clientX + 'px';
        cursorFollower.style.top = e.clientY + 'px';
    });

    document.addEventListener('mousedown', () => {
        cursor.classList.add('expand');
    });

    document.addEventListener('mouseup', () => {
        cursor.classList.remove('expand');
    });

    // New title animation
    const title = document.querySelector('.typing-effect');
    if (title) {
        const text = title.textContent;
        title.innerHTML = '';
        const words = text.split(' ');
        words.forEach((word, wordIndex) => {
            const wordSpan = document.createElement('nobr');
            word.split('').forEach((char, charIndex) => {
                const span = document.createElement('span');
                span.textContent = char;
                span.style.opacity = '0';
                span.style.transition = `opacity 0.3s ease ${(wordIndex * 3 + charIndex) * 0.03}s`;
                wordSpan.appendChild(span);
            });
            title.appendChild(wordSpan);
            if (wordIndex < words.length - 1) {
                title.appendChild(document.createTextNode(' '));
            }
        });

        // Trigger the animation after a short delay
        title.classList.add('animating');
        setTimeout(() => {
            title.querySelectorAll('span').forEach(span => {
                span.style.opacity = '1';
            });
            title.classList.remove('animating');
        }, 50);
    }

    // Improved about section card animations
    const skillCards = document.querySelectorAll('.skill-card');
    skillCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            anime({
                targets: card,
                scale: 1.05,
                boxShadow: '0 0 30px rgba(52, 152, 219, 0.3)',
                duration: 300,
                easing: 'easeOutQuad'
            });
        });
        card.addEventListener('mouseleave', () => {
            anime({
                targets: card,
                scale: 1,
                boxShadow: '0 8px 32px rgba(31, 38, 135, 0.15)',
                duration: 300,
                easing: 'easeOutQuad'
            });
        });
    });

    // Scroll animations
    const animateOnScroll = () => {
        const elements = document.querySelectorAll('.animate');
        elements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            if (elementTop < windowHeight - 100) {
                element.classList.add('visible');
            }
        });
    };

    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Initial check on page load

    // Project image slider
    const projectSliders = document.querySelectorAll('.project-slider');
    projectSliders.forEach(slider => {
        const images = slider.querySelectorAll('.project-image');
        let currentIndex = 0;

        const showNextImage = () => {
            images[currentIndex].classList.remove('active');
            currentIndex = (currentIndex + 1) % images.length;
            images[currentIndex].classList.add('active');
        };

        setInterval(showNextImage, 3000); // Change image every 3 seconds
    });

    // Language switching functionality
    const languageButtons = document.querySelectorAll('.lang-btn');
    const elementsToTranslate = document.querySelectorAll('[data-translate]');

    const translations = {
        fr: {
            home: "Accueil",
            about: "À propos",
            projects: "Projets",
            skills: "Compétences",
            contact: "Contact",
            cv: "CV",
            title: "Innover et Créer : Mon Voyage Professionnel",
            motivation: "Motivation",
            motivationDesc: "Passionné et déterminé à relever de nouveaux défis",
            determination: "Détermination",
            determinationDesc: "Persévérant face aux obstacles pour atteindre mes objectifs",
            creativity: "Créativité",
            creativityDesc: "Approche innovante pour résoudre des problèmes complexes",
            adaptability: "Adaptabilité",
            adaptabilityDesc: "Capable de trouver des solutions efficaces avec les ressources disponibles",
            teamwork: "Travail d'équipe",
            teamworkDesc: "Collaborateur efficace et communicatif dans des équipes diverses",
            vilmarTitle: "Site de Vilmar SA",
            vilmarDesc: "Refonte complète du site, correction des failles, intégration d'une base de données SQL et création de formulaires de support.",
            minecraftTitle: "Mode de jeu Minecraft",
            minecraftDesc: "Développement d'un plugin Java pour un mode de jeu battle royale, rendant l'expérience plus dynamique.",
            discordTitle: "Bot Discord",
            discordDesc: "Création d'un bot utilisant des API pour apporter des images et rechercher des informations, ajoutant une touche aléatoire aux sessions de jeu.",
            groceryTitle: "Sites Web pour des épiceries en Algérie",
            groceryDesc: "Conception de sites web simples à naviguer et esthétiquement agréables pour des clients algériens.",
            comingSoon: "Bientôt disponible",
            futureProject: "Projet Futur",
            comingSoonDesc: "Un nouveau projet passionnant est en cours de développement. Restez à l'écoute !",
            comingSoonDesc2: "Une nouvelle aventure technologique se prépare. Bientôt disponible !",
            innovation: "Innovation",
            technology: "Technologie",
            future: "Futur",
            html: "HTML",
            css: "CSS",
            javascript: "JavaScript",
            sql: "SQL",
            python: "Python",
            php: "PHP",
            english: "Anglais",
            french: "Français",
            copyright: "© 2024 Mezhoudi Moussa. Tous droits réservés.",
            learnMore: "En savoir plus",
            java: "Java",
            japanese: "Japonais",
            aboutDescription: "Passionné par la technologie et l'innovation, je suis un développeur polyvalent avec une solide expérience dans la création de solutions web et logicielles. Mon approche combine créativité et rigueur technique pour relever les défis les plus complexes."
        },
        en: {
            home: "Home",
            about: "About",
            projects: "Projects",
            skills: "Skills",
            contact: "Contact",
            cv: "Resume",
            title: "Innovate and Create: My Professional Journey",
            motivation: "Motivation",
            motivationDesc: "Passionate and determined to take on new challenges",
            determination: "Determination",
            determinationDesc: "Persevering in the face of obstacles to achieve my goals",
            creativity: "Creativity",
            creativityDesc: "Innovative approach to solving complex problems",
            adaptability: "Adaptability",
            adaptabilityDesc: "Able to find effective solutions with available resources",
            teamwork: "Teamwork",
            teamworkDesc: "Effective and communicative collaborator in diverse teams",
            vilmarTitle: "Vilmar SA Website",
            vilmarDesc: "Complete website redesign, security flaw fixes, SQL database integration, and creation of support forms.",
            minecraftTitle: "Minecraft Game Mode",
            minecraftDesc: "Development of a Java plugin for a battle royale game mode, making the experience more dynamic.",
            discordTitle: "Discord Bot",
            discordDesc: "Creation of a bot using APIs to fetch images and search for information, adding a random touch to gaming sessions.",
            groceryTitle: "Websites for Grocery Stores in Algeria",
            groceryDesc: "Design of easy-to-navigate and aesthetically pleasing websites for Algerian clients.",
            comingSoon: "Coming Soon",
            futureProject: "Future Project",
            comingSoonDesc: "An exciting new project is in development. Stay tuned!",
            comingSoonDesc2: "A new technological adventure is on the way. Coming soon!",
            innovation: "Innovation",
            technology: "Technology",
            future: "Future",
            html: "HTML",
            css: "CSS",
            javascript: "JavaScript",
            sql: "SQL",
            python: "Python",
            php: "PHP",
            english: "English",
            french: "French",
            copyright: "© 2024 Mezhoudi Moussa. All rights reserved.",
            learnMore: "Learn More",
            java: "Java",
            japanese: "Japanese",
            aboutDescription: "Passionate about technology and innovation, I am a versatile developer with solid experience in creating web and software solutions. My approach combines creativity and technical rigor to tackle the most complex challenges."
        },
        jp: {
            home: "ホーム",
            about: "私について",
            projects: "プロジェクト",
            skills: "スキル",
            contact: "お問い合わせ",
            cv: "履歴書",
            title: "革新と創造：私のプロフェッショナルな旅",
            motivation: "モチベーション",
            motivationDesc: "新しい挑戦に情熱的で決意を持って取り組む",
            determination: "決意",
            determinationDesc: "目標達成のために障害に直面しても粘り強く取り組む",
            creativity: "創造性",
            creativityDesc: "複雑な問題を解決するための革新的なアプローチ",
            adaptability: "適応力",
            adaptabilityDesc: "利用可能なリソースで効果的な解決策を見つける能力",
            teamwork: "チームワーク",
            teamworkDesc: "多様なチームで効果的かつコミュニケ―ション豊かな協力者",
            vilmarTitle: "Vilmar SA ウェブサイト",
            vilmarDesc: "ウェブサイトの完全なリデザイン、セキュリティの修正、SQLデータベースの統合、サポートフォームの作成。",
            minecraftTitle: "Minecraft ゲームモード",
            minecraftDesc: "バトルロワイヤルゲームモード用のJavaプラグイン開発、より動的な体験を実現。",
            discordTitle: "Discord ボット",
            discordDesc: "APIを使用して画像を取得し情報を検索するボットの作成、ゲームセッションにランダムな要素を追加。",
            groceryTitle: "アルジェリアの食料品店向けウェブサイト",
            groceryDesc: "アルジェリアのクライアント向けに、ナビゲーションが簡単で美しいウェブサイトをデザイン。",
            comingSoon: "近日公開",
            futureProject: "将来のプロジェクト",
            comingSoonDesc: "エキサイティングな新プロジェクトを開発中です。お楽しみに！",
            comingSoonDesc2: "新しい技術的冒険が始まります。乞うご期待！",
            innovation: "イノベーション",
            technology: "テクノロジー",
            future: "未来",
            html: "HTML",
            css: "CSS",
            javascript: "JavaScript",
            sql: "SQL",
            python: "Python",
            php: "PHP",
            english: "英語",
            french: "フランス語",
            copyright: "© 2024 Mezhoudi Moussa. 全著作権所有。",
            learnMore: "詳細を見る",
            java: "Java",
            japanese: "日本語",
            aboutDescription: "技術革新に情熱を持つ多才な開発者として、ウェブやソフトウェアソリューションの創造に豊富な経験があります。創造性と技術的厳密さを組み合わせたアプローチで、最も複雑な課題に取り組みます。"
        }
    };

    function changeLanguage(lang) {
        elementsToTranslate.forEach(element => {
            const key = element.getAttribute('data-translate');
            if (translations[lang] && translations[lang][key]) {
                if (element.tagName.toLowerCase() === 'input' && element.type === 'submit') {
                    element.value = translations[lang][key];
                } else {
                    element.textContent = translations[lang][key];
                }
            }
        });

        languageButtons.forEach(button => {
            button.classList.remove('active');
            if (button.getAttribute('data-lang') === lang) {
                button.classList.add('active');
            }
        });

        localStorage.setItem('preferredLanguage', lang);

        // Re-initialize the title animation after language change
        const title = document.querySelector('.typing-effect');
        if (title) {
            const text = title.textContent;
            title.innerHTML = '';
            const words = text.split(' ');
            words.forEach((word, wordIndex) => {
                const wordSpan = document.createElement('nobr');
                word.split('').forEach((char, charIndex) => {
                    const span = document.createElement('span');
                    span.textContent = char;
                    span.style.opacity = '0';
                    span.style.transition = `opacity 0.3s ease ${(wordIndex * 3 + charIndex) * 0.03}s`;
                    wordSpan.appendChild(span);
                });
                title.appendChild(wordSpan);
                if (wordIndex < words.length - 1) {
                    title.appendChild(document.createTextNode(' '));
                }
            });

            title.classList.add('animating');
            setTimeout(() => {
                title.querySelectorAll('span').forEach(span => {
                    span.style.opacity = '1';
                });
                title.classList.remove('animating');
            }, 50);
        }
    }

    languageButtons.forEach(button => {
        button.addEventListener('click', () => {
            const lang = button.getAttribute('data-lang');
            changeLanguage(lang);
        });
    });

    // Set initial language based on user's preference or default to French
    const preferredLanguage = localStorage.getItem('preferredLanguage') || 'fr';
    changeLanguage(preferredLanguage);

    // Skill progress bar animation
    const skillBars = document.querySelectorAll('.skill-progress');
    const animateSkillBars = () => {
        skillBars.forEach(bar => {
            const percentage = bar.style.width;
            bar.style.width = '0%';
            setTimeout(() => {
                bar.style.width = percentage;
            }, 100);
        });
    };

    // Trigger skill bar animation when the skills section is in view
    const skillsSection = document.getElementById('competences');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateSkillBars();
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    observer.observe(skillsSection);

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Background parallax effect
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const background = document.querySelector('body');
        background.style.backgroundPositionY = -(scrolled * 0.5) + 'px';
    });

    // Animate projects on scroll
    function animateProjects() {
        const projectCards = document.querySelectorAll('.project-card');
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, { threshold: 0.1 });

        projectCards.forEach(card => {
            observer.observe(card);
        });
    }

    animateProjects();

    // Smooth scrolling for scroll indicator button
    const scrollIndicator = document.querySelector('.scroll-indicator');
    if (scrollIndicator) {
        scrollIndicator.addEventListener('click', () => {
            const nextSection = document.querySelector('#a-propos');
            if (nextSection) {
                nextSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    }
});