import pimg1 from '/public/images/projects/img-1.jpg'
import pimg2 from '/public/images/projects/img-2.jpg'
import pimg3 from '/public/images/projects/img-3.jpg'
import pimg4 from '/public/images/projects/img-4.jpg'
import pimg5 from '/public/images/projects/img-7.jpg'
import pimg6 from '/public/images/projects/img-10.jpg'

const Projects = [
  {
    Id: '1',
    pImg: pimg1,
    title: 'Market Research',
    slug: 'Market-Research',
    subTitle: 'Consulting',

    // New fields below:
    client: 'Acme Corp',
    location: 'Dream City, Main Street',
    status: 'Completed',
    duration: '2 Months',
    tags: ['Consulting', 'Analytics'],
    description: `Market research project description goes here. 
      This is your main body text describing the project context, 
      goals, and any background information relevant to your audience.`,
    challenge: `
      Our biggest challenge was understanding the changing patient demographics 
      and how to position the practice in a competitive market.
    `,
    solution: `
      We conducted in-depth surveys, analyzed demographic data, and provided 
      strategic recommendations to enhance patient acquisition and retention.
    `
  },
  {
    Id: '2',
    pImg: pimg2,
    title: 'Investment planning',
    slug: 'Investment-planning',
    subTitle: 'Marketing',

    client: 'Global Finance Inc.',
    location: 'Metro City, Finance District',
    status: 'In Progress',
    duration: '1 Month',
    tags: ['Finance', 'Wealth'],
    description: `Detailed overview of the investment planning project 
      for a mid-sized healthcare group. Includes objectives, timeline, 
      and stakeholders involved.`,
    challenge: `
      The key challenge was to map out a sustainable investment 
      strategy in a volatile market.
    `,
    solution: `
      We developed a comprehensive portfolio strategy balancing risk 
      and growth to safeguard long-term practice profitability.
    `
  },
  // ...Repeat for each project
];

export default Projects;
