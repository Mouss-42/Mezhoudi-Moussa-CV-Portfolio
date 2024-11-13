
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
            number: {
                value: 80,
                density: {
                    enable: true,
                    value_area: 800
                }
            },
            color: {
                value: '#ffffff'
            },
            shape: {
                type: 'circle'
            },
            opacity: {
                value: 0.5,
                random: false,
                anim: {
                    enable: false
                }
            },
            size: {
                value: 3,
                random: true
            },
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
                onhover: {
                    enable: true,
                    mode: 'grab'
                },
                onclick: {
                    enable: true,
                    mode: 'push'
                },
                resize: true
            },
            modes: {
                grab: {
                    distance: 140,
                    line_linked: {
                        opacity: 1
                    }
                },
                push: {
                    particles_nb: 4
                }
            }
        },
        retina_detect: true
    });

    // Translations object
    const translations = {
        fr: {
            home: "Accueil",
            about: "À propos",
            projects: "Projets",
            skills: "Compétences",
            contact: "Contact",
            cv: "CV",
            name: "Mezhoudi Moussa",
            education: "Formation",
            degree: "BTS SIO",
            technicalSkills: "Compétences Techniques",
            softSkills: "Compétences Transversales",
            tools: "Outils et Systèmes",
            languages: "Langues",
            profile: "Profil Résumé",
            profileDesc: "Technophile et autodidacte, avec une expérience pratique en informatique et cybersécurité. Antécédents prouvés dans la mise à niveau de la sécurité des sites web (migration de HTTP à HTTPS) et le développement de fonctionnalités pour des sites orientés client. Compétent en Python, outils de sécurité réseau et services cloud, avec la capacité de s'adapter rapidement à des environnements de travail divers. Expérimenté dans des projets informatiques internationaux et collaboration, tirant parti de solides compétences en résolution de problèmes pour fournir des solutions techniques efficaces.",
            experience: "Expérience Professionnelle",
            developer: "Développeur",
            contract: "CDD",
            villars: "Mairie de Villars",
            guardian: "Gardien municipal",
            certifications: "Certifications",
            other: "Autres",
            drivingLicense: "Permis de conduire : Oui",
            downloadCV: "Télécharger le CV",
            french: "Français : Natif",
            english: "Anglais : C1",
            spanish: "Espagnol : Niveau basique",
            copyright: "© 2024 Mezhoudi Moussa. Tous droits réservés.",
            projectManagement: "Coordination de projets informatiques",
            agile: "Méthodologies Agile",
            database: "Gestion de bases de données",
            teamwork: "Travail d'équipe",
            problemSolving: "Résolution de problèmes",
            adaptability: "Adaptabilité",
            cybersecurity: "Cybersécurité",
            rgpd: "Formation RGPD / CNIL",
            pix: "Certification PIX",
            cae: "CAE (Cambridge English: Advanced)",
            phone: "+33 0749216729",
            email: "mezhoudimoussa.pro@gmail.com",
            lycee: "Lycée Simon Weil",
            btsSio: "BTS SIO",
            vilmarExp1: "Conduite de la refonte complète du site de support de l'entreprise, améliorant l'expérience utilisateur grâce à une fonctionnalité et une réactivité accrues.",
            vilmarExp2: "Gestion des mises à jour de la base de données et contribution à la migration du site de HTTP vers HTTPS, renforçant la sécurité.",
            vilmarExp3: "Développement d'un système simplifié de signalement des problèmes clients et d'une interface pour les employés afin de suivre et gérer les demandes des clients.",
            vilmarExp4: "Apprentissage d'un logiciel spécifique, compréhension de son fonctionnement et rédaction d'un rapport en trois langues (anglais, roumain et français) pour former les équipes.",
            vilmarExp5: "Apprentissage d'un logiciel, compréhension de son fonctionnement et rédaction d'un rapport en trois langues (anglais, roumain et français) pour former les équipes.",
            villarsExp1: "Collaboration avec une équipe pour entretenir et améliorer les espaces publics, y compris les parcs et les zones vertes.",
            villarsExp2: "Assistance dans des tâches d'aménagement paysager telles que la tonte, la taille et le déblaiement des débris pour garantir la sécurité et la propreté des zones municipales.",
            villarsExp3: "Soutien aux réparations et à l'entretien de l'infrastructure de la ville, contribuant à l'esthétique et à la fonctionnalité des espaces publics.",
            villarsExp4: "Travail efficace avec les collègues pour atteindre les objectifs quotidiens, favorisant un environnement orienté vers l'équipe.",
            date_2023_2025: "2023-2025",
            date_may_june_2024: "Mai - Juin 2024",
            date_october_2024: "Octobre 2024",
            date_may_june_2023: "Mai - Juin 2023",
            kungfu: "Ex Champion de France de Kung Fu"
        },
        en: {
            home: "Home",
            about: "About",
            projects: "Projects",
            skills: "Skills",
            contact: "Contact",
            cv: "Resume",
            name: "Mezhoudi Moussa",
            education: "Education",
            degree: "BTS SIO",
            technicalSkills: "Technical Skills",
            softSkills: "Soft Skills",
            tools: "Tools and Systems",
            languages: "Languages",
            profile: "Profile Summary",
            profileDesc: "Tech-savvy and self-taught, with hands-on experience in IT and cybersecurity. Proven track record in upgrading website security (HTTP to HTTPS migration) and developing features for client-oriented sites. Proficient in Python, network security tools, and cloud services, with the ability to quickly adapt to diverse work environments. Experienced in international IT projects and collaboration, leveraging strong problem-solving skills to deliver effective technical solutions.",
            experience: "Professional Experience",
            developer: "Developer",
            contract: "Fixed-term Contract",
            villars: "Villars City Hall",
            guardian: "Municipal Guardian",
            certifications: "Certifications",
            other: "Other",
            drivingLicense: "Driving License: Yes",
            downloadCV: "Download Resume",
            french: "French: Native",
            english: "English: C1",
            spanish: "Spanish: Basic Level",
            copyright: "© 2024 Mezhoudi Moussa. All rights reserved.",
            projectManagement: "IT Project Coordination",
            agile: "Agile Methodologies",
            database: "Database Management",
            teamwork: "Teamwork",
            problemSolving: "Problem Solving",
            adaptability: "Adaptability",
            cybersecurity: "Cybersecurity",
            rgpd: "GDPR / CNIL Training",
            pix: "PIX Certification",
            cae: "CAE (Cambridge English: Advanced)",
            phone: "+33 0749216729",
            email: "mezhoudimoussa.pro@gmail.com",
            lycee: "Simon Weil High School",
            btsSio: "BTS SIO",
            vilmarExp1: "Led the complete overhaul of the company's support site, improving user experience through enhanced functionality and responsiveness.",
            vilmarExp2: "Managed database updates and contributed to the site migration from HTTP to HTTPS, enhancing security.",
            vilmarExp3: "Developed a simplified customer issue reporting system and an interface for employees to track and manage customer requests.",
            vilmarExp4: "Learned specific software, understood its operation, and wrote a report in three languages (English, Romanian, and French) to train teams.",
            vilmarExp5: "Learned software, understood its operation, and wrote a report in three languages (English, Romanian, and French) to train teams.",
            villarsExp1: "Collaborated with a team to maintain and improve public spaces, including parks and green areas.",
            villarsExp2: "Assisted in landscaping tasks such as mowing, trimming, and debris removal to ensure the safety and cleanliness of municipal areas.",
            villarsExp3: "Supported repairs and maintenance of city infrastructure, contributing to the aesthetics and functionality of public spaces.",
            villarsExp4: "Worked effectively with colleagues to achieve daily objectives, fostering a team-oriented environment.",
            date_2023_2025: "2023-2025",
            date_may_june_2024: "May - June 2024",
            date_october_2024: "October 2024",
            date_may_june_2023: "May - June 2023",
            kungfu: "Former French Kung Fu Champion"
        },
        jp: {
            home: "ホーム",
            about: "私について",
            projects: "プロジェクト",
            skills: "スキル",
            contact: "連絡先",
            cv: "履歴書",
            name: "メズフディ・ムッサ",
            education: "学歴",
            degree: "BTS SIO",
            technicalSkills: "技術スキル",
            softSkills: "ソフトスキル",
            tools: "ツールとシステム",
            languages: "言語",
            profile: "プロフィール概要",
            profileDesc: "テクノロジーに精通し、独学で学んだ、ITとサイバーセキュリティの実践経験を持つ。ウェブサイトのセキュリティアップグレード（HTTPからHTTPSへの移行）とクライアント指向のサイトの機能開発の実績あり。Python、ネットワークセキュリティツール、クラウドサービスに精通し、多様な作業環境に迅速に適応する能力を持つ。国際的なITプロジェクトとコラボレーションの経験があり、強力な問題解決スキルを活かして効果的な技術ソリューションを提供。",
            experience: "職歴",
            developer: "開発者",
            contract: "有期契約",
            villars: "ヴィラール市役所",
            guardian: "市民ガーディアン",
            certifications: "資格",
            other: "その他",
            drivingLicense: "運転免許：あり",
            downloadCV: "履歴書をダウンロード",
            french: "フランス語：ネイティブ",
            english: "英語：C1",
            spanish: "スペイン語：基礎レベル",
            copyright: "© 2024 メズフディ・ムッサ。全著作権所有。",
            projectManagement: "ITプロジェクト調整",
            agile: "アジャイル方法論",
            database: "データベース管理",
            teamwork: "チームワーク",
            problemSolving: "問題解決",
            adaptability: "適応性",
            cybersecurity: "サイバーセキュリティ",
            rgpd: "GDPR / CNILトレーニング",
            pix: "PIX認証",
            cae: "CAE（ケンブリッジ英語：上級）",
            phone: "+33 0749216729",
            email: "mezhoudimoussa.pro@gmail.com",
            lycee: "シモン・ヴェイユ高校",
            btsSio: "BTS SIO",
            vilmarExp1: "会社のサポートサイトの完全な改修を主導し、機能性と応答性を向上させてユーザー体験を改善。",
            vilmarExp2: "データベースの更新を管理し、サイトのHTTPからHTTPSへの移行に貢献してセキュリティを強化。",
            vilmarExp3: "顧客の問題報告を簡素化するシステムと、従業員が顧客の要求を追跡・管理するためのインターフェースを開発。",
            vilmarExp4: "特定のソフトウェアを学習し、その操作を理解し、3つの言語（英語、ルーマニア語、フランス語）でレポートを作成してチームをトレーニング。",
            vilmarExp5: "ソフトウェアを学習し、その操作を理解し、3つの言語（英語、ルーマニア語、フランス語）でレポートを作成してチームをトレーニング。",
            villarsExp1: "公園や緑地を含む公共スペースの維持と改善のためにチームと協力。",
            villarsExp2: "市の地域の安全性と清潔さを確保するために、芝刈り、剪定、デブリ除去などの造園作業を支援。",
            villarsExp3: "市のインフラの修理とメンテナンスをサポートし、公共スペースの美観と機能性に貢献。",
            villarsExp4: "日々の目標を達成するために同僚と効果的に協力し、チーム指向の環境を育成。",
            date_2023_2025: "2023年-2025年",
            date_may_june_2024: "2024年5月-6月",
            date_october_2024: "2024年10月",
            date_may_june_2023: "2023年5月-6月",
            kungfu: "元フランスカンフー選手権者"
        }
    };

    let currentLanguage = 'fr';

    function updateContent(lang) {
        // Fade out all translatable elements
        const translatableElements = document.querySelectorAll('[data-translate]');
        translatableElements.forEach(element => {
            element.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
            element.style.opacity = '0';
            element.style.transform = 'translateY(10px)';
        });

        // Wait for fade out
        setTimeout(() => {
            // Update content
            translatableElements.forEach(element => {
                const key = element.getAttribute('data-translate');
                if (translations[lang][key]) {
                    element.textContent = translations[lang][key];
                }
            });

            // Fade in updated elements
            translatableElements.forEach(element => {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            });
        }, 300);

        // Update language buttons
        document.querySelectorAll('.lang-btn').forEach(btn => {
            btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
        });

        currentLanguage = lang;
    }

    // Language switcher
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const lang = btn.getAttribute('data-lang');
            updateContent(lang);
        });
    });

    // Initial content update
    updateContent(currentLanguage);

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Highlight active navigation link
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section');

    function highlightNavLink() {
        let index = sections.length;

        while(--index && window.scrollY + 50 < sections[index].offsetTop) {}
        
        navLinks.forEach((link) => link.classList.remove('active'));
        navLinks[index].classList.add('active');
    }

    highlightNavLink();
    window.addEventListener('scroll', highlightNavLink);

    // Add parallax effect to particles
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const parallaxBg = document.querySelector('#particles-js');
        parallaxBg.style.transform = `translateY(${scrolled * 0.5}px)`;
    });

    // Add hover effect to skill tags
    const skillTags = document.querySelectorAll('.skill-tag');
    skillTags.forEach(tag => {
        tag.addEventListener('mouseover', () => {
            tag.style.transform = 'scale(1.1)';
            tag.style.boxShadow = '0 5px 15px rgba(0,0,0,0.3)';
        });
        tag.addEventListener('mouseout', () => {
            tag.style.transform = 'scale(1)';
            tag.style.boxShadow = 'none';
        });
    });

    // Add animation to section titles
    const sectionTitles = document.querySelectorAll('.cv-section h2');
    sectionTitles.forEach(title => {
        title.addEventListener('mouseover', () => {
            title.style.transform = 'translateY(-5px)';
            title.style.textShadow = '2px 2px 4px rgba(0,0,0,0.3)';
        });
        title.addEventListener('mouseout', () => {
            title.style.transform = 'translateY(0)';
            title.style.textShadow = 'none';
        });
    });
});