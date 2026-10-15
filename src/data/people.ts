import type { CommitteeGroup, FacultyMember, Person, Speaker } from '../types'

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
  { name: 'Prof. Tapas Mishra', category: 'International', role: 'Professor of Financial Economics', affiliation: 'University of Southampton, United Kingdom' },
  { name: 'Dr. Raj Kumar Singh', category: 'International', role: 'Professor of Management', affiliation: 'University of California, Riverside, United States' },
  { name: 'Dr. Suzan Dsouza', category: 'International', role: 'Associate Professor', affiliation: 'American University of the Middle East, College of Business Administration, Dasman, Kuwait' },
]

export const nationalSpeakers: Speaker[] = [
  { name: 'Prof. Arunabha Mukhopadhyay', category: 'National', role: 'Professor, Information Technology and Systems', affiliation: 'IIM Lucknow' },
  { name: 'Prof. Tanusree Dutta', category: 'National', role: 'Professor, OB & HR', affiliation: 'IIM Ranchi' },
  { name: 'Prof. Pratul Chandra Kalita', category: 'National', role: 'Professor & Head, Department of Design', affiliation: 'IIT Guwahati' },
  { name: 'Prof. Ganesh Prasad Sahu', category: 'National', role: 'Professor & Head, School of Management Studies', affiliation: 'MNNIT Allahabad, Prayagraj' },
  { name: 'Dr. Sanja Samirana Pattnayak', category: 'National', role: 'Professor, Economics and Business Environment', affiliation: 'IIM Sirmaur' },
  { name: 'Dr. Arun Kumar Giri', category: 'National', role: 'Professor, Department of Economics and Finance', affiliation: 'BITS Pilani, Pilani Campus' },
  { name: 'Prof. Pramod Kumar Naik', category: 'National', role: 'Associate Professor', affiliation: 'Indian Institute of Technology Madras' },
  { name: 'Dr. Pradip Kumar Mitra', category: 'National', role: 'Professor & Dean – Finance', affiliation: 'VES Institute of Management Studies & Research, Mumbai' },
]

export const faculty: FacultyMember[] = [
  { name: 'Dr. Abhinav Kumar Shandilya', designation: 'Associate Professor and In-charge', affiliation: 'Department of Management Studies, BIT Patna', qualification: 'Ph.D. – Management (Marketing), MBA', interests: 'Marketing, hospitality management and consumer behaviour', email: 'sabhinavkumar@bitmesra.ac.in', phone: '9472711951' },
  { name: 'Dr. Vijay Agrawal', designation: 'Associate Professor', affiliation: 'Department of Management Studies, BIT Patna', qualification: 'Ph.D. (Management), MBA (Finance), B.Sc. (Maths)', interests: 'Financial management, corporate finance and corporate accounting', email: 'vagarwal@bitmesra.ac.in', phone: '9431382607' },
  { name: 'Dr. Ashish Mohan Dubey', designation: 'Assistant Professor', affiliation: 'Department of Management Studies, BIT Patna', qualification: 'MBA, Ph.D. (MNNIT Allahabad)', interests: 'Human resource management, public administration and organizational learning', email: 'amdubey@bitmesra.ac.in', phone: '9412005502' },
  { name: 'Dr. M. Iftekhar Ahmad', designation: 'Assistant Professor', affiliation: 'Department of Management Studies, BIT Patna', qualification: 'Ph.D. (Management), MBA (Marketing), B.Sc. (Honours)', interests: 'Marketing, strategy, HRM, logistics and supply chain management', email: 'iftekhar@bitmesra.ac.in', phone: '+91 9006095647' },
  { name: 'Dr. Sohini Ghosh', designation: 'Assistant Professor', affiliation: 'Department of Management Studies, BIT Patna', qualification: 'MBA, M.Sc. (Human Development)', interests: 'Human resource management, consumer behaviour and social media marketing', email: 'sohinighosh@bitmesra.ac.in', phone: '9830828701' },
  { name: 'Dr. Monika Singh', designation: 'Assistant Professor', affiliation: 'Department of Management Studies, BIT Patna', qualification: 'Ph.D. (Management), MBA (IB & IT), B.Tech. (ECE)', interests: 'Business analytics, AI, green information systems and operations management', email: 'drmonika@bitmesra.ac.in', phone: '8765681041' },
]
