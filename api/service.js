import simg from '/public/images/service-single/img-1.jpg'
import simg2 from '/public/site-images/dev1.jpg'
import simg3 from '/public/images/service-single/img-3.jpg'
import simg4 from '/public/site-images/paul1.jpg'
import simg4b2b from '/public/site-images/Services/contract/contract.jpg'
import simg5 from '/public/images/service-single/img-5.jpg'
import simg6 from '/public/images/service-single/img-3.jpg'


const Services = [
    // 2) Marketing, Digital Presence & Website Optimization
    {
        Id: '2',
        sImg: simg2,
        sTitle: 'Marketing, Digital Presence & Website Optimization',
        slug: 'marketing-digital-presence-website-optimization',
        description: 'A well-designed website is often the first impression prospective patients have of your practice, and first impressions last forever.',
        des2: 'We ensure your site not only looks amazing but also works effectively, captivating visitors from the moment they arrive.',
        des3: 'Our team builds a credible and reliable online presence that is mobile-friendly, SEO-optimized, and easily navigable for the best user experience.',
        icon: 'flaticon-suitcase',
        pageTitle: '/site-images/Heros/dev2.jpg',
        additionalContent: [
            {
                title1: 'We help practices strengthen visibility while ensuring their digital presence supports—not undermines—growth.',
                paragraph: '',
                subParagraph: ''
            },
            {
                title2: 'We act as a strategic extension of your team to ensure marketing efforts remain effective and competitive.',
                paragraph: '',
            },
        ],
        features: [
            'Healthcare and legal marketing strategy',
            'Website performance and SEO evaluation',
            'Ongoing optimization guidance',
            'Liaison with existing web and digital vendors to ensure alignment, rankings, and performance',
            'Scalability for future growth',
        ],
        serviceFeatures: [
            'Bespoke website solutions crafted by experts',
            'Minimal downtime and fast loading times',
            'Real-time analytics and reporting',
            'Dedicated support team 24/7',
        ],
        serviceTabs: [
            {
                id: '1',
                title: 'Strategy',
                content: 'We act as a strategic liason between practices and web developers, ensuring websites perform, rank, and support growth.'
            },
            {
                id: '2',
                title: 'Oversight',
                content: 'We act as a strategic liason between practices and web developers, ensuring websites perform, rank, and support growth.'
            },
            {
                id: '3',
                title: 'Optimization',
                content: 'We act as a strategic liason between practices and web developers, ensuring websites perform, rank, and support growth.'
            },
        ],
    },

    // 4) Business to Business
    {
        Id: '4',
        sImg: simg4b2b,
        sTitle: 'Business to Business',
        slug: 'business-to-business',
        description: 'B2B marketing is about opening doors and forming strong partnerships—an essential component for your practice’s long-term growth.',
        des2: 'We identify and foster new referral sources, facilitate face-to-face introductions, and help create collaborative marketing opportunities.',
        des3: 'Our approach ensures your practice expands its network, builds trust with potential partners, and sustains successful alliances.',
        icon: 'flaticon-start',
        pageTitle: '/images/page-titles/btob-title.png',
        additionalContent: [
            {
                title1: 'B2B Referral Development',
                paragraph: 'We build targeted referral networks through hands-on, field based out-each, that cannot be replicated through digital efforts alone.',
                subParagraph: ''
            },
            {
                title2: 'This includes;',
                paragraph: '',
            },
        ],
        features: [
            'Physician liaison outreach and relationship development',
            'In person, busines-to-business engagement',
            'Identification of strategic referral partners',
            'Longterm relationship management that drives consistent reciprication',
        ],
        serviceFeatures: [
            'Robust B2B marketing expertise',
            'Seamless networking opportunities',
            'Mutually beneficial partnerships',
            'Long-term growth strategies',
        ],
        serviceTabs: [
            {
                id: '1',
                title: 'Discovery & Research',
                content: 'Our approach focuses on trusted, personal relationships that create durable referral pathways over time.'
            },
            {
                id: '2',
                title: 'Outreach & Connection',
                content: 'Our approach focuses on trusted, personal relationships that create durable referral pathways over time.'
            },
            {
                id: '3',
                title: 'Collaboration & Growth',
                content: 'Our approach focuses on trusted, personal relationships that create durable referral pathways over time.'
            },
        ],
    },
    // 1) Branding & Rebranding (unchanged)
    /*{
        Id: '1',
        sImg: simg,
        sTitle: 'Branding & Rebranding',
        slug: 'branding-rebranding',
        description: 'Your brand is more than just a logo—it’s the foundation of your business identity. We craft compelling brand strategies that establish credibility, resonate with your audience, and differentiate you in a competitive market.',
        des2: 'Whether you’re building a brand from scratch or revitalizing an existing one, our team ensures consistency across all touchpoints, reinforcing trust and recognition.',
        des3: 'We combine market research, creative design, and strategic messaging to develop a brand that reflects your vision and drives engagement.',
        icon: 'flaticon-gift',
        pageTitle: '/images/page-titles/branding-title.png',
        additionalContent: [
            {
                title1: 'Market Research & Positioning',
                paragraph: 'We analyze industry trends, target demographics, and competitor landscapes to position your brand effectively.',
                subParagraph: 'By understanding your unique value proposition, we develop a brand strategy that connects with your ideal audience.'
            },
            {
                title2: 'Visual Identity & Messaging',
                paragraph: 'Our team creates stunning logos, color palettes, and typography paired with compelling messaging that aligns with your brand’s core values.',
            },
        ],
        features: [
            'Data-driven brand positioning',
            'Custom logo and identity design',
            'Consistent messaging across platforms',
            'Comprehensive brand guidelines',
            'Storytelling that resonates with your audience',
            'Brand audits and refinement strategies',
        ],
        serviceFeatures: [
            'Strategic brand development',
            'Market-tested design concepts',
            'Full-service rebranding solutions',
            'Long-term brand growth strategies',
        ],
        serviceTabs: [
            {
                id: '1',
                title: 'Brand Discovery',
                content: 'We conduct in-depth research and brand audits to define your brand’s mission, values, and target market.'
            },
            {
                id: '2',
                title: 'Design & Development',
                content: 'From logos to typography and messaging, we build a visual and verbal identity that communicates your brand’s essence.'
            },
            {
                id: '3',
                title: 'Launch & Implementation',
                content: 'We ensure a seamless brand rollout across digital and print assets, helping you maintain consistency and recognition.'
            },
        ],
    },*/
    

    // 6) Contract Consulting
    {
        Id: '6',
        sImg: simg4,  // You can change this to any image import you prefer
        sTitle: 'Contract Consulting',
        slug: 'contract-consulting',
        description: 'With over 25 years of experience in provider contracting, network management, and strategic planning, we offer proven expertise in negotiating and managing complex agreements between providers and insurance companies.',
        des2: 'We excel at building strong provider relationships and ensuring operational success. Our services help you align with organizational goals, regulatory standards, and modern healthcare trends.',
        des3: 'From negotiating fee-for-service, capitation, and value-based agreements to analyzing performance metrics for cost-saving opportunities, we guide your transition to innovative reimbursement models while maintaining the highest quality of care.',
        icon: 'flaticon-gift', // Replace with an appropriate icon if available
        pageTitle: '/images/page-titles/contract-title.png',
        additionalContent: [
            {
                title1: 'Payer strategy & Contracting',
                paragraph: 'We support practices in navigating complex payer environments to improve positioning, reimbursement, and long-term stability.',
                subParagraph: ''
            },
            {
                title2: 'Strategic Planning & Compliance',
                paragraph: 'We align your contracts with current healthcare regulations, ensuring they are both lucrative and compliant.',
            },
        ],
        features: [
            'Expert negotiation with insurance payers',
            'Deep knowledge of regulatory compliance',
            'Tailored contracts aligned to organizational goals',
            'Data-driven approach for cost-saving opportunities',
            'Streamlined provider onboarding processes',
            'Transparent reporting and documentation',
        ],
        serviceFeatures: [
            'In-depth contract audits',
            'Regulatory compliance checks',
            'Ongoing performance evaluations',
            'Long-term relationship management',
        ],
        serviceTabs: [
            {
                id: '1',
                title: 'Assessment & Analysis',
                content: 'We review your existing contracts and procedures to pinpoint inefficiencies and areas for improvement.'
            },
            {
                id: '2',
                title: 'Negotiation & Restructuring',
                content: 'Our experts negotiate on your behalf to secure more favorable terms and ensure compliance with current guidelines.'
            },
            {
                id: '3',
                title: 'Implementation & Monitoring',
                content: 'We oversee contract execution and continuously monitor performance metrics, making adjustments as needed.'
            },
        ],
    },

    // 3) Social Media
    /*{
        Id: '3',
        sImg: simg3,
        sTitle: 'Social Media and Video Production',
        slug: 'social-media',
        description: 'We build social media strategies that attract patients and foster long-term trust, ultimately generating sustainable revenue.',
        des2: 'From creating social presence to sharing relevant content across multiple platforms weekly, we keep your audience engaged and informed.',
        des3: 'Our social media solutions help elevate brand awareness, maximize patient loyalty, and drive new referrals to your practice.',
        icon: 'flaticon-stats',
        pageTitle: '/images/page-titles/social-title.png',
        additionalContent: [
            {
                title1: 'Platform Selection & Branding',
                paragraph: 'We help you choose the right social media platforms that align with your brand and audience, ensuring maximum reach.',
                subParagraph: 'By maintaining a cohesive brand identity across platforms, you reinforce your message and establish trust.'
            },
            {
                title2: 'Content Creation & Curation',
                paragraph: 'Our team develops engaging visuals, captions, and stories that capture attention and spark conversation.',
            },
        ],
        features: [
            'Professional profile setup & optimization',
            'Consistent brand messaging across platforms',
            'Custom graphics and caption strategies',
            'Regular engagement through comments & DMs',
            'Growth-focused campaigns to expand reach',
            'Detailed monthly analytics & reporting',
        ],
        serviceFeatures: [
            'Dedicated social media manager',
            'Custom content calendar',
            'Instant audience feedback',
            'Targeted ad campaigns',
        ],
        serviceTabs: [
            {
                id: '1',
                title: 'Strategy & Planning',
                content: 'We develop a custom social media strategy based on your practice goals and target demographic.'
            },
            {
                id: '2',
                title: 'Content & Posting',
                content: 'Our content team creates and schedules regular posts to keep your audience engaged and informed.'
            },
            {
                id: '3',
                title: 'Analytics & Optimization',
                content: 'We monitor performance metrics to refine future campaigns and boost overall social media ROI.'
            },
        ],
    },*/

    /* 5) Video Production
    {
        Id: '5',
        sImg: simg6,
        sTitle: 'Video Production',
        slug: 'video-production',
        description: 'Bring your practice to life with professional video production designed to captivate and resonate with your audience.',
        des2: 'We use the latest technology and cinematic techniques to produce compelling narratives—whether corporate videos, testimonials, or educational content.',
        des3: 'From concept through final cut, our team delivers exceptional results that help you connect with patients and clients in an impactful way.',
        icon: 'flaticon-green-energy',
        additionalContent: [
            {
                title1: 'Concept & Storyboarding',
                paragraph: 'Our creative team works with you to develop a clear, concise narrative that reflects your brand identity and resonates with your target audience.',
                subParagraph: 'We plan every detail, from scriptwriting to visual style, ensuring a coherent and high-impact story.'
            },
            {
                title2: 'Production & Post-Production',
                paragraph: 'We handle shooting, lighting, sound design, and meticulous editing to create polished videos ready for distribution.',
            },
        ],
        features: [
            'High-definition filming with advanced equipment',
            'Professional on-site crew & directors',
            'Engaging motion graphics and animation',
            'Studio-quality sound design & editing',
            'Color grading for a cinematic look',
            'Multiple format outputs for various platforms',
        ],
        serviceFeatures: [
            'Creative scripting and storyboarding',
            'Professional filming and editing',
            'On-time delivery and revisions',
            'Flexible packages for all budgets',
        ],
        serviceTabs: [
            {
                id: '1',
                title: 'Pre-Production',
                content: 'Scripting, storyboarding, and scheduling all happen here to ensure the shoot runs smoothly.'
            },
            {
                id: '2',
                title: 'Production',
                content: 'Our videographers capture your vision using high-end equipment and proven techniques.'
            },
            {
                id: '3',
                title: 'Post-Production',
                content: 'Editing, sound mixing, color grading, and final touches to deliver a polished, professional video.'
            },
        ],
    },*/

    // 7) Other Relevant Marketing Services
    /*{
        Id: '7',
        sImg: simg5,
        sTitle: 'Other Relevant Marketing Services',
        slug: 'other-marketing-services',
        description: 'We offer a variety of additional services to enhance your brand presence and meet your practice’s specific needs.',
        des2: 'From concierge-style operational support and virtual assistance to ad campaigns and TV/radio spots, we tailor solutions to your objectives.',
        des3: 'Our comprehensive approach ensures maximum brand visibility, consistent messaging, and tangible results across multiple platforms.',
        icon: 'flaticon-chess-piece',
        pageTitle: '/images/page-titles/other-title.png',
        additionalContent: [
            {
                title1: 'Concierge-Style Operational Support',
                paragraph: 'We provide hands-on assistance with day-to-day tasks, process improvements, and administrative workflows so you can focus on patient care.',
                subParagraph: 'From scheduling to inventory management, our solutions help keep your practice running smoothly.'
            },
            {
                title2: 'Broad-Spectrum Marketing Solutions',
                paragraph: 'Whether online or offline, we craft cohesive campaigns that include pay-per-click ads, local TV/radio spots, and more.',
            },
        ],
        features: [
            'Custom ad campaign development',
            'Tailored broadcast advertising strategies',
            'Virtual assistance for daily operational tasks',
            'Branded promotional materials and merchandise',
            'Cross-platform consistency in messaging',
            'Detailed performance tracking and analytics',
        ],
        serviceFeatures: [
            'Integrated marketing approach',
            'Scalable services to match your practice growth',
            'Hands-on operational guidance',
            'Dedicated account manager',
        ],
        serviceTabs: [
            {
                id: '1',
                title: 'Consultation & Strategy',
                content: 'We examine your unique needs and develop a multi-faceted marketing plan that aligns with your goals.'
            },
            {
                id: '2',
                title: 'Execution & Management',
                content: 'Our team oversees campaign launches and operational support, ensuring every element runs without a hitch.'
            },
            {
                id: '3',
                title: 'Review & Adapt',
                content: 'Through regular analytics reviews, we tweak and improve strategies, guaranteeing sustainable, long-term success.'
            },
        ],
    },*/
];

export default Services;
