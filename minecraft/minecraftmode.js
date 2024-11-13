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
    switchTab('gameplay');

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

    // Système de traduction
    const translations = {
        fr: {
            title: "Mon Portfolio - Battle Royale Minecraft",
            projectTitle: "Battle Royale Minecraft",
            projectSubtitle: "Un plugin innovant pour une expérience de jeu unique",
            projectDescription: "Un mode de jeu Battle Royale aérien avec des éléments aléatoires et une stratégie d'adaptation",
            playersTitle: "2-16 Joueurs",
            playersDesc: "Affrontez vos amis dans des batailles épiques",
            timeTitle: "10 Secondes",
            timeDesc: "Entre chaque item aléatoire",
            rewardTitle: "Récompenses",
            rewardDesc: "Items spéciaux pour les éliminations",
            gameplayTab: "Gameplay",
            featuresTab: "Fonctionnalités",
            technicalTab: "Technique",
            step1Title: "Démarrage",
            step1Desc: "Utilisez /start pour lancer une partie. Les joueurs apparaissent sur des blocs de bedrock en cercle.",
            step2Title: "Items Aléatoires",
            step2Desc: "Recevez des items aléatoires toutes les 10 secondes pour construire ou combattre.",
            step3Title: "Combat",
            step3Desc: "Éliminez vos adversaires pour obtenir des items spéciaux et devenir le dernier survivant.",
            feature1Title: "Items Aléatoires",
            feature1Desc: "Distribution équitable d'items toutes les 10 secondes",
            feature2Title: "Mode Spectateur",
            feature2Desc: "Observez la partie après votre élimination",
            feature3Title: "Parties Automatiques",
            feature3Desc: "Nouvelle partie toutes les 30 secondes",
            techStackTitle: "Technologies Utilisées",
            implementationTitle: "Détails d'Implémentation",
            architectureTitle: "Architecture",
            architecture1: "Système de gestion d'événements pour le suivi des joueurs",
            architecture2: "Distribution périodique d'items via TaskScheduler",
            architecture3: "Gestion des états de jeu avec machine à états",
            challengesTitle: "Défis Techniques",
            challenge1: "Synchronisation des événements de jeu",
            challenge2: "Équilibrage des items aléatoires",
            challenge3: "Gestion de la génération de l'arène",
            performanceTitle: "Performance",
            performance1: "Optimisation des calculs de collision",
            performance2: "Mise en cache des données de jeu",
            performance3: "Gestion efficace des ressources serveur",
            contactTitle: "Contact",
            contactDesc: "Intéressé par mon travail ? N'hésitez pas à me contacter !",
            rightsReserved: "Tous droits réservés.",
            home: "Accueil",
            about: "À propos",
            projects: "Projets",
            skills: "Compétences",
            contact: "Contact",
            cv: "CV",
            codeShowcase: "Aperçu du Code"
        },
        en: {
            title: "My Portfolio - Minecraft Battle Royale",
            projectTitle: "Minecraft Battle Royale",
            projectSubtitle: "An innovative plugin for a unique gaming experience",
            projectDescription: "An aerial Battle Royale game mode with random elements and adaptation strategy",
            playersTitle: "2-16 Players",
            playersDesc: "Challenge your friends in epic battles",
            timeTitle: "10 Seconds",
            timeDesc: "Between each random item",
            rewardTitle: "Rewards",
            rewardDesc: "Special items for eliminations",
            gameplayTab: "Gameplay",
            featuresTab: "Features",
            technicalTab: "Technical",
            step1Title: "Start",
            step1Desc: "Use /start to begin a game. Players spawn on bedrock blocks in a circle.",
            step2Title: "Random Items",
            step2Desc: "Receive random items every 10 seconds to build or fight.",
            step3Title: "Combat",
            step3Desc: "Eliminate your opponents to get special items and become the last survivor.",
            feature1Title: "Random Items",
            feature1Desc: "Fair distribution of items every 10 seconds",
            feature2Title: "Spectator Mode",
            feature2Desc: "Watch the game after elimination",
            feature3Title: "Automatic Games",
            feature3Desc: "New game every 30 seconds",
            techStackTitle: "Technologies Used",
            implementationTitle: "Implementation Details",
            architectureTitle: "Architecture",
            architecture1: "Event management system for player tracking",
            architecture2: "Periodic item distribution via TaskScheduler",
            architecture3: "Game state management with state machine",
            challengesTitle: "Technical Challenges",
            challenge1: "Game event synchronization",
            challenge2: "Random item balancing",
            challenge3: "Arena generation management",
            performanceTitle: "Performance",
            performance1: "Collision calculation optimization",
            performance2: "Game data caching",
            performance3: "Efficient server resource management",
            contactTitle: "Contact",
            contactDesc: "Interested in my work? Feel free to contact me!",
            rightsReserved: "All rights reserved.",
            home: "Home",
            about: "About",
            projects: "Projects",
            skills: "Skills",
            contact: "Contact",
            cv: "Resume",
            codeShowcase: "Code Showcase"
        },
        jp: {
            title: "私のポートフォリオ - マインクラフトバトルロワイヤル",
            projectTitle: "マインクラフトバトルロワイヤル",
            projectSubtitle: "ユニークなゲーム体験のための革新的なプラグイン",
            projectDescription: "ランダム要素と適応戦略を備えた空中バトルロワイヤルゲームモード",
            playersTitle: "2-16プレイヤー",
            playersDesc: "友達と壮大な戦いに挑もう",
            timeTitle: "10秒",
            timeDesc: "ランダムアイテム間隔",
            rewardTitle: "報酬",
            rewardDesc: "撃破で特別アイテム獲得",
            gameplayTab: "ゲームプレイ",
            featuresTab: "機能",
            technicalTab: "技術",
            step1Title: "開始",
            step1Desc: "/startでゲームを開始。プレイヤーは円形に配置された岩盤の上にスポーン。",
            step2Title: "ランダムアイテム",
            step2Desc: "10秒ごとにランダムアイテムを受け取り、建築や戦闘に活用。",
            step3Title: "戦闘",
            step3Desc: "対戦相手を倒して特別アイテムを入手し、最後の生存者を目指せ。",
            feature1Title: "ランダムアイテム",
            feature1Desc: "10秒ごとの公平なアイテム配布",
            feature2Title: "観戦モード",
            feature2Desc: "敗退後も試合を観戦可能",
            feature3Title: "自動マッチ",
            feature3Desc: "30秒ごとに新しい試合",
            techStackTitle: "使用技術",
            implementationTitle: "実装の詳細",
            architectureTitle: "アーキテクチャ",
            architecture1: "プレイヤー追跡のためのイベント管理システム",
            architecture2: "TaskSchedulerによる定期的なアイテム配布",
            architecture3: "ステートマシンによるゲーム状態管理",
            challengesTitle: "技術的な課題",
            challenge1: "ゲームイベントの同期",
            challenge2: "ランダムアイテムのバランス調整",
            challenge3: "アリーナ生成の管理",
            performanceTitle: "パフォーマンス",
            performance1: "衝突計算の最適化",
            performance2: "ゲームデータのキャッシング",
            performance3: "効率的なサーバーリソース管理",
            contactTitle: "連絡先",
            contactDesc: "興味を持っていただけましたか？お気軽にご連絡ください！",
            rightsReserved: "全著作権所有",
            home: "ホーム",
            about: "紹介",
            projects: "プロジェクト",
            skills: "スキル",
            contact: "連絡先",
            cv: "履歴書",
            codeShowcase: "コードの概要"
        }
    };

    function applyTranslation(lang) {
        if (!translations[lang]) return;
        
        document.documentElement.lang = lang;
        
        // Mettre à jour tous les éléments avec data-translate
        document.querySelectorAll('[data-translate]').forEach(element => {
            const key = element.getAttribute('data-translate');
            if (translations[lang][key]) {
                // Si c'est un élément input ou textarea
                if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                    element.placeholder = translations[lang][key];
                } else {
                    element.textContent = translations[lang][key];
                }
            }
        });

        // Mettre à jour le titre de la page
        document.title = translations[lang].title || translations[lang].projectTitle;
        
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
        const elements = document.querySelectorAll('.implementation-card, .feature-card, .overview-card');
        
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

    // Appliquer la traduction par défaut
    applyTranslation('fr');
});