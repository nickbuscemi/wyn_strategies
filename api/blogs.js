// images
import blogImg1 from "/public/images/blog/img-1.jpg";
import blogImg2 from "/public/images/blog/img-2.jpg";
import blogImg3 from "/public/images/blog/img-3.jpg";

import blogSingleImg1 from "/public/images/blog/img-4.jpg";
import blogSingleImg2 from "/public/images/blog/img-6.jpg";
import blogSingleImg3 from "/public/images/blog/img-5.jpg";

const blogs = [ 
  {
    id: '1',
    title: 'January Spine Newsletter: Start the New Year with Better Spine Health',
    slug: 'january-spine-newsletter-start-the-new-year-with-better-spine-health',
    screens: blogImg1,
    description: 
      'Your spine is the cornerstone of your body, and caring for it can lead to a healthier, more comfortable life. Learn how to reduce back pain and improve spinal health this new year with these simple strategies: strengthen your core, optimize your sleep posture, and improve workspace ergonomics.',
    author: 'George Kakoulides, MD',
    authorTitle: 'Neurosurgeon & Spine Specialist',
    create_at: 'Jan 14, 2025',
    create_day: '14',
    create_month: 'Jan',
    create_year: '2025',
    blogSingleImg: blogSingleImg1, 
    comment: '35',
    blClass: 'format-standard-image',
    
  },
  {
    id: '2',
    title: 'Fields works with individual consult and consulting firms across',
    slug: 'Fields-works-with-individual-consult-and-consulting-firms-across',
    screens: blogImg2,
    description: 'Consectetur adipiscing elit. Purusout phasellus malesuada lectus.',
    author: 'Konal Biry',
    authorTitle:'Creative Director',
    create_at: 'March 17, 2024',
    create_day: '17',
    create_month: 'March',
    create_year: '2024',
    blogSingleImg: blogSingleImg2, 
    comment:'80',
    blClass:'format-standard-image',
  },
  {
    id: '3',
    title: 'Proven advice on how to grow your consulting practice.',
    slug: 'Proven-advice-on-how-to-grow-your-consulting-practice.',
    screens: blogImg3,
    description: 'Consectetur adipiscing elit. Purusout phasellus malesuada lectus.',
    author: 'Aliza Anny',
    authorTitle:'Art Director',
    create_at: 'Jan 18, 2024',
    create_day: '18',
    create_month: 'Jan',
    create_year: '2024',
    blogSingleImg: blogSingleImg3,
    comment:'95',
    blClass:'format-video',
  },
];

export default blogs;
