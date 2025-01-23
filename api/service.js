import simg from '/public/images/service-single/img-1.jpg';
import simg2 from '/public/images/service-single/img-2.jpg';
import simg3 from '/public/images/service-single/img-3.jpg';
import simg4 from '/public/images/service-single/img-4.jpg';
import simg5 from '/public/images/service-single/img-5.jpg';
import simg6 from '/public/images/service-single/img-3.jpg';

const Services = [
    // 1) Branding & Rebranding
    {
        Id: '1',
        sImg: simg,
        sTitle: 'Branding & Rebranding',
        slug: 'branding-rebranding',
        description: 'We specialize in creating memorable and professional branding for medical practices, ensuring your identity resonates with patients and sets you apart from competitors.',
        des2: 'Our branding solutions include logo design, practice naming, and cohesive visual identity development, all tailored to the healthcare industry.',
        des3: 'We help you establish trust and authority in your field through a compelling brand that reflects your values and mission.',
        icon: 'flaticon-gift',
        additionalContent: [
            {
                title1: 'Practice Identity Design',
                paragraph: 'We craft logos, taglines, and brand styles that convey professionalism and care, tailored for medical professionals.',
                subParagraph: 'Your brand will communicate your expertise and connect emotionally with your patients.'
            },
            {
                title2: 'Rebranding Strategies',
                paragraph: 'We guide you through comprehensive rebranding processes to modernize your practice while honoring your legacy.',
            },
        ],
        features: [
            'Custom logo and tagline creation',
            'Cohesive visual identity across all platforms',
            'Patient-focused branding strategies',
            'Rebranding for modern and established practices',
        ],
        serviceFeatures: [
            'Tailored branding solutions',
            'Industry-specific expertise',
            'Seamless brand integration',
            'Enhanced patient trust and loyalty',
        ],
        serviceTabs: [
            {
                id: '1',
                title: 'Logo Design',
                content: 'We design distinctive logos that reflect your practice’s mission and vision.'
            },
            {
                id: '2',
                title: 'Visual Identity',
                content: 'We ensure consistency across all branding materials, from business cards to websites.'
            },
            {
                id: '3',
                title: 'Rebranding',
                content: 'Modernize your practice’s image to align with current healthcare trends and patient expectations.'
            },
        ],
    },

    // 2) Website Development & Online Presence
    {
        Id: '2',
        sImg: simg2,
        sTitle: 'Website Development & Online Presence',
        slug: 'website-development-online-presence',
        description: 'A professionally designed website is crucial for showcasing your practice and attracting new patients.',
        des2: 'Our websites are not only visually appealing but also optimized for functionality, accessibility, and search engine performance.',
        des3: 'We create online experiences that build trust and encourage patient engagement.',
        icon: 'flaticon-suitcase',
        additionalContent: [
            {
                title1: 'Custom Website Design',
                paragraph: 'Our team develops custom websites tailored to your practice’s unique needs and specialties.',
                subParagraph: 'From patient portals to service pages, every feature is designed with usability and professionalism in mind.'
            },
            {
                title2: 'SEO Optimization',
                paragraph: 'We ensure your website ranks high in search engine results, helping patients find you easily online.',
            },
        ],
        features: [
            'Mobile-friendly design',
            'Search engine optimization',
            'Easy-to-navigate structure',
            'Secure patient portals and forms',
        ],
        serviceFeatures: [
            'Custom development',
            'SEO optimization',
            'Secure hosting and maintenance',
            '24/7 support',
        ],
        serviceTabs: [
            {
                id: '1',
                title: 'Planning & Strategy',
                content: 'We analyze your practice’s goals and develop a detailed website strategy.'
            },
            {
                id: '2',
                title: 'Design & Development',
                content: 'We build websites that are both aesthetically pleasing and functionally robust.'
            },
            {
                id: '3',
                title: 'Optimization & Maintenance',
                content: 'Our team provides ongoing support and optimization to ensure peak performance.'
            }
        ],
    },

    // 3) Social Media
    {
        Id: '3',
        sImg: simg3,
        sTitle: 'Social Media',
        slug: 'social-media',
        description: 'Build a strong social media presence to connect with your patients and keep your practice top-of-mind.',
        des2: 'We manage your accounts, create engaging content, and run targeted ad campaigns tailored to your practice’s goals.',
        des3: 'Our strategies focus on increasing patient engagement and fostering trust.',
        icon: 'flaticon-stats',
        additionalContent: [
            {
                title1: 'Platform Management',
                paragraph: 'We handle all aspects of your social media accounts, ensuring consistent and professional representation.',
                subParagraph: 'From Instagram to LinkedIn, we tailor your content to each platform’s audience.'
            },
            {
                title2: 'Ad Campaigns',
                paragraph: 'We create and manage targeted ads that drive patient inquiries and appointments.',
            },
        ],
        features: [
            'Professional account setup and optimization',
            'Custom graphics and videos',
            'Targeted advertising campaigns',
            'Monthly performance reporting',
        ],
        serviceFeatures: [
            'Dedicated social media manager',
            'Engaging content calendar',
            'Audience growth strategies',
            'Real-time feedback monitoring',
        ],
        serviceTabs: [
            {
                id: '1',
                title: 'Strategy Development',
                content: 'We craft a personalized strategy that aligns with your practice’s goals.'
            },
            {
                id: '2',
                title: 'Content Creation',
                content: 'Our team develops compelling posts, stories, and ads tailored to your audience.'
            },
            {
                id: '3',
                title: 'Analytics & Optimization',
                content: 'We track metrics and continuously refine your strategy for maximum impact.'
            },
        ],
    },

    // Additional services remain similar in structure but adjusted to match the medical professional audience.
];

export default Services;
