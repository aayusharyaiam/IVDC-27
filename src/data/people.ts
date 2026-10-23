import type { CommitteeGroup, Person, Speaker } from '../types'

export const committeeGroups: CommitteeGroup[] = [
  {
    title: 'Leadership & Convening',
    members: [
      { name: 'Prof. (Dr.) Indranil Manna', role: 'Chief Patron', affiliation: 'Honourable Vice Chancellor, BIT Mesra, Ranchi' },
      { name: 'Dr. Dheeresh Kumar Mallick', role: 'Patron', affiliation: 'Director, BIT Mesra, Patna' },
      { name: 'Dr. Vijay Agarwal', role: 'Conference Convenor', affiliation: 'Associate Professor, BIT Patna' },
      { name: 'Dr. Monika Singh', role: 'Conference Convenor', affiliation: 'Assistant Professor, BIT Patna' },
      { name: 'Prof. Kumar Sanjay Sawarni', role: 'Program Chair', affiliation: 'HOD, Department of Management Studies, BIT Mesra, Ranchi' },
      { name: 'Dr. Ashish Mohan Dubey', role: 'Organizing Secretary', affiliation: 'Assistant Professor, BIT Patna' },
      { name: 'Dr. Ashish Gupta', role: 'Conference Chair', affiliation: 'Associate Professor, Faculty of Management, South Asian University, New Delhi' },
      { name: 'Dr. Sweta', role: 'Coordinator', affiliation: 'Assistant Professor, BIT Patna' },
    ],
  },
  {
    title: 'Organizing Committee',
    members: [
      { name: 'Dr. Amit Raghuvanshi', role: 'Organizing Committee', affiliation: 'Assistant Professor, BIT Patna' },
      { name: 'Mr. Sultan Khan', role: 'Organizing Committee', affiliation: 'Assistant Professor, BIT Patna' },
      { name: 'Dr. Kumar Abhimanyu Singh', role: 'Organizing Committee', affiliation: 'Assistant Professor, BIT Patna' },
      { name: 'Dr. Utsav', role: 'Organizing Committee', affiliation: 'Assistant Professor, BIT Patna' },
    ],
  },
]

export const executiveBoard: Person[] = [
  { name: 'Prof. Ashoke Sharon', affiliation: 'Dean of Faculty Affairs (DoFA), BIT Mesra, Ranchi' },
  { name: 'Dr. Raju Poddar', affiliation: 'Dean of Research, Innovation & Entrepreneurship (DRIE), BIT Mesra, Ranchi' },
  { name: 'Dr. Gautam Sarkhel', affiliation: 'Dean of Undergraduate Studies (DUGS), BIT Mesra, Ranchi' },
  { name: 'Prof. Sandeep Singh Solanki', affiliation: 'Dean of Post Graduate Studies (DPGS), BIT Mesra, Ranchi' },
  { name: 'Dr. Rajesh Jain', affiliation: 'Registrar, BIT Mesra, Ranchi' },
  { name: 'Dr. Ritesh Kumar Singh', affiliation: 'Controller of Examinations (CoE), BIT Mesra, Ranchi' },
]

export const advisoryCommittee: Person[] = [
  { name: 'Dr. Abhinav Kumar Shandilya', role: 'Advisory Committee', affiliation: 'Associate Professor & In-charge, BIT Patna' },
  { name: 'Dr. Sunil Kumar Pandey', role: 'Advisory Committee', affiliation: 'Assistant Professor, BIT Patna' },
  { name: 'Prof. Ranjan Aneja', affiliation: 'Professor & Dean, School of Business & Management Studies, Central University of Haryana' },
  { name: 'Prof. Pratul Chandra Kalita', affiliation: 'Professor & Head, Department of Design, IIT Guwahati' },
  { name: 'Prof. Ganesh Prasad Sahu', affiliation: 'Professor & Head, School of Management Studies, MNNIT Allahabad, Prayagraj' },
  { name: 'Prof. Pramod Kumar Naik', affiliation: 'Associate Professor, Indian Institute of Technology Madras' },
  { name: 'Dr. Swati Bisht', affiliation: 'Associate Professor, Doon University, Dehradun' },
  { name: 'Dr. Somya Gupta', affiliation: 'Assistant Professor, IIM Bodh Gaya' },
  { name: 'Dr. Kuttimani Tamilmani', affiliation: 'Associate Professor in Marketing, University of Bradford, England' },
  { name: 'Dr. Preeti Bhaskar', affiliation: 'Assistant Professor, College of Banking & Financial Studies, Muscat' },
  { name: 'Dr. Akanksha Shukla', affiliation: 'Assistant Professor, Department of Humanities, Social Sciences and Management, NIT Jamshedpur' },
  { name: 'Dr. Mohit Kumar Ojha', affiliation: 'Assistant Professor, NIT Kurukshetra, Haryana' },
  { name: 'Dr. Nitin Kishore Saxena', affiliation: 'Assistant Professor, Institute of Commerce, Nirma University, Ahmedabad, Gujarat' },
  { name: 'Dr. Naveen Kumar Singh', affiliation: 'Assistant Professor, School of Behavioural Sciences and Forensic Investigations, Rashtriya Raksha University, Gandhinagar, Gujarat' },
]

export const internationalSpeakers: Speaker[] = [
  { name: 'Prof. Weng Marc Lim', category: 'International', role: 'Professor and Dean', affiliation: 'Sunway Business School, Sunway University' },
  { name: 'Dr. Vinod Mishra', category: 'International', role: 'Professor & Director of Education, Economics', affiliation: 'Monash Business School, Monash University, Australia' },
  { name: 'Prof. Tapas Mishra', category: 'International', role: 'Professor', affiliation: 'University of Southampton, United Kingdom' },
  { name: 'Dr. Suzan Dsouza', category: 'International', role: 'Associate Professor', affiliation: 'American University of the Middle East, College of Business Administration, Dasman, Kuwait' },
]

export const nationalSpeakers: Speaker[] = [
  { name: 'Prof. Arunabha Mukhopadhyay', category: 'National', role: 'Professor, Information Technology and Systems', affiliation: 'IIM Lucknow' },
  { name: 'Prof. Ganesh Prasad Sahu', category: 'National', role: 'Professor & Head, School of Management Studies', affiliation: 'MNNIT Allahabad, Prayagraj' },
  { name: 'Prof. Pratul Chandra Kalita', category: 'National', role: 'Professor & Head, Department of Design', affiliation: 'IIT Guwahati' },
  { name: 'Prof. Pramod Kumar Naik', category: 'National', role: 'Associate Professor, Finance', affiliation: 'Department of Humanities and Social Sciences, IIT Madras' },
  { name: 'Prof. Medha Srivastava', category: 'National', role: 'Associate Professor', affiliation: 'Department of Management, IIM Bodhgaya' },
  { name: 'Shri Subrat Kumar Swain', category: 'National', role: 'General Manager and Zonal Head', affiliation: 'Bank of Baroda' },
  { name: 'Shri K D Gupta', category: 'National', role: 'Deputy General Manager', affiliation: 'Union Bank of India' },
]
