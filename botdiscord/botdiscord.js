document.addEventListener('DOMContentLoaded', () => {
    // Gestion des onglets
    const tabs = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');

    function switchTab(tabId) {
        // Masquer tous les contenus
        tabContents.forEach(content => {
            content.style.display = 'none';
            content.classList.remove('active');
        });

        // Désactiver tous les onglets
        tabs.forEach(tab => {
            tab.classList.remove('active');
        });

        // Activer l'onglet sélectionné
        const selectedTab = document.querySelector(`[data-tab="${tabId}"]`);
        const selectedContent = document.getElementById(tabId);
        
        if (selectedTab && selectedContent) {
            selectedTab.classList.add('active');
            selectedContent.style.display = 'block';
            selectedContent.classList.add('active');
        }
    }

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const tabId = tab.getAttribute('data-tab');
            switchTab(tabId);
        });
    });

    // Activer le premier onglet par défaut
    switchTab('commands');

    // Gestion des onglets de code
    const codeTabs = document.querySelectorAll('.code-tab-btn');
    const codeContents = document.querySelectorAll('.code-content');

    function switchCodeTab(tabId) {
        codeTabs.forEach(tab => tab.classList.remove('active'));
        codeContents.forEach(content => {
            content.style.display = 'none';
            content.classList.remove('active');
        });

        const selectedTab = document.querySelector(`[data-code="${tabId}"]`);
        const selectedContent = document.getElementById(tabId);
        
        if (selectedTab && selectedContent) {
            selectedTab.classList.add('active');
            selectedContent.style.display = 'block';
            selectedContent.classList.add('active');
        }
    }

    codeTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const tabId = tab.getAttribute('data-code');
            switchCodeTab(tabId);
        });
    });

    // Activer le premier onglet de code par défaut
    switchCodeTab('main');

    // Liste des rôles avec leurs icônes
    const ROLES = [
        { name: 'TOP', icon: './Champions/top.png' },
        { name: 'JUNGLE', icon: './Champions/jungle.png' },
        { name: 'MID', icon: './Champions/mid.png' },
        { name: 'ADC', icon: './Champions/botlane.png' },
        { name: 'SUPPORT', icon: './Champions/support.png' }
    ];

    // Liste complète des champions
    const CHAMPIONS = [
        'Aatrox', 'Ahri', 'Akali', 'Akshan', 'Alistar', 'Amumu', 'Anivia', 'Annie', 'Aphelios', 'Ashe', 
        'AurelionSol', 'Aurora', 'Azir', 'Bard', 'Bel\'Veth', 'Blitzcrank', 'Brand', 'Braum', 'Briar', 
        'Caitlyn', 'Camille', 'Cassiopeia', 'Cho\'Gath', 'Corki', 'Darius', 'Diana', 'Dr. Mundo', 'Draven', 
        'Ekko', 'Elise', 'Evelynn', 'Ezreal', 'Fiddlesticks', 'Fiora', 'Fizz', 'Galio', 'Gangplank', 'Garen', 
        'Gnar', 'Gragas', 'Graves', 'Gwen', 'Hecarim', 'Heimerdinger', 'Hwei', 'Illaoi', 'Irelia', 'Ivern', 
        'Janna', 'Jarvan IV', 'Jax', 'Jayce', 'Jhin', 'Jinx', 'K\'Sante', 'Kai\'Sa', 'Kalista', 'Karma', 
        'Karthus', 'Kassadin', 'Katarina', 'Kayle', 'Kayn', 'Kennen', 'Kha\'Zix', 'Kindred', 'Kled', 'Kog\'Maw', 
        'LeBlanc', 'Lee Sin', 'Leona', 'Lillia', 'Lissandra', 'Lucian', 'Lulu', 'Lux', 'Malphite', 'Malzahar', 
        'Maokai', 'Master Yi', 'Milio', 'Miss Fortune', 'Mordekaiser', 'Morgana', 'Naafiri', 'Nami', 'Nasus', 
        'Nautilus', 'Neeko', 'Nidalee', 'Nilah', 'Nocturne', 'Nunu', 'Olaf', 'Oriana', 'Ornn', 'Pantheon', 
        'Poppy', 'Pyke', 'Qiyana', 'Quinn', 'Rakan', 'Rammus', 'Rek\'Sai', 'Rell', 'Renata Glasc', 'Renekton', 
        'Rengar', 'Riven', 'Rumble', 'Ryze', 'Samira', 'Sejuani', 'Senna', 'Seraphine', 'Sett', 'Shaco', 'Shen', 
        'Shyvana', 'Singed', 'Sion', 'Sivir', 'Skarner', 'Smolder', 'Sona', 'Soraka', 'Swain', 'Sylas', 'Syndra', 
        'Tahm Kench', 'Taliyah', 'Talon', 'Taric', 'Teemo', 'Thresh', 'Tristana', 'Trundle', 'Tryndamere', 
        'Twisted Fate', 'Twitch', 'Udyr', 'Urgot', 'Varus', 'Vayne', 'Veigar', 'Vel\'Koz', 'Vex', 'Vi', 'Viego', 
        'Viktor', 'Vladimir', 'Volibear', 'Warwick', 'Wukong', 'Xayah', 'Xerath', 'Xin Zhao', 'Yasuo', 'Yone', 
        'Yorick', 'Yuumi', 'Zac', 'Zed', 'Zeri', 'Ziggs', 'Zilean', 'Zoe', 'Zyra'
    ];

    // Liste des champions avec vidéos
    const CHAMPIONS_WITH_VIDEOS = ['Ezreal', 'Samira', 'Seraphine', 'Miss Fortune', 'Udyr', 'Sona'];

    // Gestion de la démo
    const demoModal = document.getElementById('demoModal');
    const demoButton = document.getElementById('demoButton');
    const closeModal = document.querySelector('.close-modal');
    const generateBtn = document.querySelector('.generate-btn');

    let isGenerating = false;

    // Fonction pour obtenir un champion aléatoire
    function getRandomChampion() {
        return CHAMPIONS[Math.floor(Math.random() * CHAMPIONS.length)];
    }

    // Fonction pour obtenir un rôle aléatoire
    function getRandomRole() {
        return ROLES[Math.floor(Math.random() * ROLES.length)];
    }

    // Fonction pour générer une identité aléatoire
    async function generateIdentity() {
        if (isGenerating) return;
        isGenerating = true;

        // Activer l'animation du bouton
        generateBtn.classList.add('generating');

        // Récupérer les éléments
        const roleText = document.querySelector('.role-text');
        const roleIcon = document.querySelector('.role-icon');
        const championText = document.querySelector('.champion-text');
        const championImageContainer = document.querySelector('.champion-image-container');

        // Réinitialiser les classes active avec animation de fade out
        [roleText, championText].forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(-10px)';
        });
        [roleIcon, championImageContainer].forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'scale(0.8)';
        });

        // Attendre un court instant pour l'animation de fade out
        await new Promise(resolve => setTimeout(resolve, 300));

        // Générer un rôle et un champion aléatoires
        const randomRole = getRandomRole();
        const randomChampion = getRandomChampion();

        // Déterminer si le champion a une vidéo
        const hasVideo = CHAMPIONS_WITH_VIDEOS.includes(randomChampion);

        // Choisir aléatoirement entre l'image/vidéo 0 et 1
        const mediaIndex = Math.floor(Math.random() * 2);

        // Mettre à jour le rôle avec animation
        roleText.textContent = randomRole.name;
        roleIcon.src = randomRole.icon;
        roleIcon.alt = `${randomRole.name} Icon`;
        
        // Animation de fade in pour le rôle
        roleText.style.opacity = '1';
        roleText.style.transform = 'translateY(0)';
        roleIcon.style.display = 'block';
        roleIcon.style.opacity = '1';
        roleIcon.style.transform = 'scale(1)';

        // Mettre à jour le champion
        championText.textContent = randomChampion;
        
        // Vider le contenu du container
        championImageContainer.innerHTML = '';

        championImageContainer.style.width = '100%';
        championImageContainer.style.height = '300px';
        championImageContainer.style.overflow = 'hidden';

        // Fonction pour créer et ajouter le média
        const addMedia = (isVideo) => {
            const mediaElement = isVideo ? document.createElement('video') : document.createElement('img');
            mediaElement.src = `./Champions/${randomChampion}_${mediaIndex}.${isVideo ? 'mp4' : 'jpg'}`;
            mediaElement.alt = randomChampion;
            mediaElement.classList.add('champion-media');
            mediaElement.style.width = '100%';
            mediaElement.style.height = '100%';
            mediaElement.style.objectFit = 'cover';

            if (isVideo) {
                mediaElement.autoplay = true;
                mediaElement.loop = true;
                mediaElement.muted = true;
                mediaElement.playsInline = true;
            }

            championImageContainer.appendChild(mediaElement);

            // Gestion des erreurs de chargement
            mediaElement.onerror = () => {
                console.error(`Erreur de chargement du média pour ${randomChampion}`);
                if (isVideo) {
                    // Si la vidéo échoue, essayer de charger l'image
                    addMedia(false);
                }
            };

            // Animation de fade in pour le champion
            championText.style.opacity = '1';
            championText.style.transform = 'translateY(0)';
            championImageContainer.style.opacity = '1';
            championImageContainer.style.transform = 'scale(1)';
        };

        // Tenter de charger la vidéo si disponible, sinon charger l'image
        if (hasVideo) {
            addMedia(true);
        } else {
            addMedia(false);
        }

        // Réinitialiser l'état
        generateBtn.classList.remove('generating');
        isGenerating = false;
    }

    // Gestionnaires d'événements pour la modal
    demoButton.addEventListener('click', () => {
        demoModal.classList.add('active');
        document.body.style.overflow = 'hidden';
    });

    closeModal.addEventListener('click', () => {
        demoModal.classList.remove('active');
        document.body.style.overflow = '';
    });

    demoModal.addEventListener('click', (e) => {
        if (e.target === demoModal) {
            demoModal.classList.remove('active');
            document.body.style.overflow = '';
        }
    });

    generateBtn.addEventListener('click', generateIdentity);

    // Système de traduction
    const translations = {
        fr: {
            title: "Mon Portfolio - Bot Discord LoL",
            projectTitle: "Bot Discord LoL",
            projectSubtitle: "Un bot interactif pour des parties League of Legends uniques",
            projectDescription: "Créez des identités de jeu aléatoires et ajoutez une touche de fun à vos parties avec ce bot Discord en JavaScript",
            demoBtn: "Voir la Démo",
            githubBtn: "Code Source",
            feature1Title: "Personnages Aléatoires",
            feature1Desc: "Attribution aléatoire de champions et de rôles",
            feature2Title: "Intégration API",
            feature2Desc: "Images et informations des champions en temps réel",
            feature3Title: "Commandes Simples",
            feature3Desc: "Interface intuitive avec des commandes faciles",
            commandsTab: "Commandes",
            featuresTab: "Fonctionnalités",
            technicalTab: "Technique",
            command1Desc: "Génère une identité aléatoire avec champion et rôle",
            command2Desc: "Affiche les informations d'un champion spécifique",
            command3Desc: "Liste toutes les commandes disponibles",
            detailFeature1Title: "Génération Aléatoire",
            detailFeature1Desc: "Système sophistiqué de sélection aléatoire équilibrée",
            detailFeature2Title: "Mise à Jour Auto",
            detailFeature2Desc: "Synchronisation automatique avec les derniers champions",
            detailFeature3Title: "Multi-Serveur",
            detailFeature3Desc: "Fonctionne sur plusieurs serveurs Discord simultanément",
            techStackTitle: "Technologies Utilisées",
            implementationTitle: "Détails d'Implémentation",
            architectureTitle: "Architecture",
            architecture1: "Structure modulaire avec gestionnaire de commandes",
            architecture2: "Intégration API LoL pour données temps réel",
            architecture3: "Système de cache pour optimisation",
            challengesTitle: "Défis Techniques",
            challenge1: "Gestion des limites de l'API Discord",
            challenge2: "Synchronisation des données LoL",
            challenge3: "Optimisation des performances",
            performanceTitle: "Performance",
            performance1: "Temps de réponse < 1 seconde",
            performance2: "Cache intelligent des données",
            performance3: "Gestion efficace de la mémoire",
            contactTitle: "Contact",
            contactDesc: "Intéressé par mon travail ? N'hésitez pas à me contacter !",
            
            rightsReserved: "Tous droits réservés.",
            home: "Accueil",
            about: "À propos",
            projects: "Projets",
            skills: "Compétences",
            contact: "Contact",
            cv: "CV",
            codeShowcase: "Aperçu du Code",
            demoTitle: "Générateur d'Identité LoL",
            yourRole: "Votre rôle est :",
            yourChampion: "Votre champion est :",
            generateBtn: "Générer une identité"
        },
        en: {
            title: "My Portfolio - LoL Discord Bot",
            projectTitle: "LoL Discord Bot",
            projectSubtitle: "An interactive bot for unique League of Legends games",
            projectDescription: "Create random game identities and add a fun twist to your games with this JavaScript Discord bot",
            demoBtn: "View Demo",
            githubBtn: "Source Code",
            feature1Title: "Random Characters",
            feature1Desc: "Random assignment of champions and roles",
            feature2Title: "API Integration",
            feature2Desc: "Real-time champion images and information",
            feature3Title: "Simple Commands",
            feature3Desc: "Intuitive interface with easy commands",
            commandsTab: "Commands",
            featuresTab: "Features",
            technicalTab: "Technical",
            command1Desc: "Generates a random identity with champion and role",
            command2Desc: "Displays information about a specific champion",
            command3Desc: "Lists all available commands",
            detailFeature1Title: "Random Generation",
            detailFeature1Desc: "Sophisticated balanced random selection system",
            detailFeature2Title: "Auto Update",
            detailFeature2Desc: "Automatic synchronization with latest champions",
            detailFeature3Title: "Multi-Server",
            detailFeature3Desc: "Works on multiple Discord servers simultaneously",
            techStackTitle: "Technologies Used",
            implementationTitle: "Implementation Details",
            architectureTitle: "Architecture",
            architecture1: "Modular structure with command handler",
            architecture2: "LoL API integration for real-time data",
            architecture3: "Caching system for optimization",
            challengesTitle: "Technical Challenges",
            challenge1: "Managing Discord API limits",
            challenge2: "LoL data synchronization",
            challenge3: "Performance optimization",
            performanceTitle: "Performance",
            performance1: "Response time < 1 second",
            performance2: "Smart data caching",
            performance3: "Efficient memory management",
            contactTitle: "Contact",
            contactDesc: "Interested in my work? Feel free to contact me!",
            rightsReserved: "All rights reserved.",
            home: "Home",
            about: "About",
            projects: "Projects",
            skills: "Skills",
            contact: "Contact",
            cv: "Resume",
            codeShowcase: "Code Showcase",
            demoTitle: "LoL Identity Generator",
            yourRole: "Your role is:",
            yourChampion: "Your champion is:",
            generateBtn: "Generate Identity"
        },
        jp: {
            title: "私のポートフォリオ - LoL Discordボット",
            projectTitle: "LoL Discordボット",
            projectSubtitle: "ユニークなLeague of Legendsゲーム用の対話型ボット",
            projectDescription: "このJavaScript Discordボットでランダムなゲームアイデンティティを作成し、ゲームに楽しみを追加",
            demoBtn: "デモを見る",
            githubBtn: "ソースコード",
            feature1Title: "ランダムキャラクター",
            feature1Desc: "チャンピオンとロールのランダム割り当て",
            feature2Title: "API連携",
            feature2Desc: "リアルタイムのチャンピオン画像と情報",
            feature3Title: "シンプルなコマンド",
            feature3Desc: "使いやすいコマンドで直感的なインターフェース",
            commandsTab: "コマンド",
            featuresTab: "機能",
            technicalTab: "技術",
            command1Desc: "チャンピオンとロールでランダムなアイデンティティを生成",
            command2Desc: "特定のチャンピオンの情報を表示",
            command3Desc: "利用可能なすべてのコマンドを一覧表示",
            detailFeature1Title: "ランダム生成",
            detailFeature1Desc: "洗練されたバランスの取れたランダム選択システム",
            detailFeature2Title: "自動更新",
            detailFeature2Desc: "最新のチャンピオンと自動同期",
            detailFeature3Title: "マルチサーバー",
            detailFeature3Desc: "複数のDiscordサーバーで同時に動作",
            techStackTitle: "使用技術",
            implementationTitle: "実装の詳細",
            architectureTitle: "アーキテクチャ",
            architecture1: "コマンドハンドラーによるモジュラー構造",
            architecture2: "リアルタイムデータ用のLoL API連携",
            architecture3: "最適化のためのキャッシュシステム",
            challengesTitle: "技術的課題",
            challenge1: "Discord APIの制限管理",
            challenge2: "LoLデータの同期",
            challenge3: "パフォーマンスの最適化",
            performanceTitle: "パフォーマンス",
            performance1: "応答時間1秒未満",
            performance2: "スマートデータキャッシング",
            performance3: "効率的なメモリ管理",
            contactTitle: "連絡先",
            contactDesc: "興味を持っていただけましたか？お気軽にご連絡ください！",
            rightsReserved: "全著作権所有",
            home: "ホーム",
            about: "紹介",
            projects: "プロジェクト",
            skills: "スキル",
            contact: "連絡先",
            cv: "履歴書",
            codeShowcase: "コードの概要",
            demoTitle: "LoLアイデンティティジェネレーター",
            yourRole: "あなたのロール：",
            yourChampion: "あなたのチャンピオン：",
            generateBtn: "アイデンティティを生成"
        }
    };

    function applyTranslation(lang) {
        if (!translations[lang]) return;
        
        document.documentElement.lang = lang;
        
        // Mettre à jour tous les éléments avec data-translate
        document.querySelectorAll('[data-translate]').forEach(element => {
            const key = element.getAttribute('data-translate');
            if (translations[lang][key]) {
                if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                    element.placeholder = translations[lang][key];
                } else if (element.tagName === 'META' && element.getAttribute('name') === 'description') {
                    element.setAttribute('content', translations[lang][key]);
                } else {
                    element.textContent = translations[lang][key];
                }
            }
        });

        // Mettre à jour le titre de la page
        document.title = translations[lang].title;
        
        // Mettre à jour les attributs alt et title des images
        document.querySelectorAll('img[data-translate-alt]').forEach(img => {
            const key = img.getAttribute('data-translate-alt');
            if (translations[lang][key]) {
                img.alt = translations[lang][key];
            }
        });

        // Activer le bouton de langue correspondant
        document.querySelectorAll('.lang-btn').forEach(btn => {
            btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
        });
    }

    // Gestionnaire de changement de langue
    const langButtons = document.querySelectorAll('.lang-btn');
    langButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const lang = btn.getAttribute('data-lang');
            applyTranslation(lang);
        });
    });

    // Animation au scroll pour les cartes
    const animateOnScroll = () => {
        const elements = document.querySelectorAll('.implementation-card, .feature-card, .overview-card, .command-item');
        
        elements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const elementBottom = element.getBoundingClientRect().bottom;
            
            if (elementTop < window.innerHeight && elementBottom > 0) {
                element.classList.add('animate-fade-in-up');
            }
        });
    };

    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Appel initial

    // Initialisation de Prism.js pour la coloration syntaxique
    if (typeof Prism !== 'undefined') {
        Prism.highlightAll();
    }

    // Appliquer la traduction par défaut
    applyTranslation('fr');
});