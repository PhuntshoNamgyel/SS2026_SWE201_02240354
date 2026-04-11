export type Contact = {
  id: string;
  name: string;
  role: string;
  phone: string;
  email: string;
  office: string;
};

export type ClassItem = {
  id: string;
  module: string;
  code: string;
  day: string;
  time: string;
  room: string;
};

export type Notice = {
  id: string;
  title: string;
  date: string;
  description: string;
};

export const contacts: Contact[] = [
  { id: '1', name: 'IT Helpdesk', role: 'Technical Support', phone: '+975-17482910', email: 'ithelp.cst@rub.edu.bt', office: 'Admin Block' },
  { id: '2', name: 'Student Services', role: 'Student Support', phone: '+975-17374821', email: 'studentservices.cst@rub.edu.bt', office: 'Architecture Block' },
  { id: '3', name: 'Library', role: 'Library Services', phone: '+975-17293847', email: 'library.cst@.edu.bt', office: 'Library Building' },
  { id: '4', name: 'Dean of Student Affairs', role: 'Student Affairs', phone: '+975-17830471', email: 'dsa.cst@rub.edu.bt', office: 'Admin Block' },
  { id: '5', name: 'Exam Cell', role: 'Exams & Results', phone: '+975-17920384', email: 'examcell.cst@rub.edu.bt', office: 'Admin Block' },
];

export const schedule: ClassItem[] = [
  // Monday
  { id: '1', module: 'Discrete Mathematics', code: 'MAT110', day: 'Monday', time: '9:00 AM - 11:00 AM', room: 'IT-01' },
  { id: '2', module: 'Database System Fundamentals', code: 'DBS101', day: 'Monday', time: '11:15 AM - 12:15 PM', room: 'IT-01' },
  { id: '3', module: 'Programming Methodology', code: 'CSF101', day: 'Monday', time: '1:15 PM - 3:15 PM', room: 'IT-01' },

  // Tuesday
  { id: '4', module: 'Academic Skills', code: 'ACS101', day: 'Tuesday', time: '9:00 AM - 11:00 AM', room: 'IT-01' },
  { id: '5', module: 'Computer Communications Network', code: 'NWC201', day: 'Tuesday', time: '11:15 AM - 12:15 PM', room: 'IT-01' },
  { id: '6', module: 'Database System Fundamentals', code: 'DBS101', day: 'Tuesday', time: '1:15 PM - 3:15 PM', room: 'IT-01' },

  // Wednesday
  { id: '7', module: 'Discrete Mathematics', code: 'MAT110', day: 'Wednesday', time: '9:00 AM - 11:00 AM', room: 'IT-01' },
  { id: '8', module: 'Computer Communications Network', code: 'NWC201', day: 'Wednesday', time: '11:15 AM - 12:15 PM', room: 'IT-01' },
  { id: '9', module: 'Database System Fundamentals', code: 'DBS101', day: 'Wednesday', time: '1:15 PM - 3:15 PM', room: 'IT-01' },

  // Thursday
  { id: '10', module: 'Academic Skills', code: 'ACS101', day: 'Thursday', time: '9:00 AM - 11:00 AM', room: 'IT-01' },
  { id: '11', module: 'Computer Communications Network (Practical)', code: 'NWC201', day: 'Thursday', time: '1:15 PM - 4:15 PM', room: 'Lab 1' },

  // Friday
  { id: '12', module: 'Programming Methodology', code: 'CSF101', day: 'Friday', time: '9:00 AM - 11:00 AM', room: 'IT-01' },
  { id: '13', module: 'Computer Communications Network', code: 'NWC201', day: 'Friday', time: '11:15 AM - 12:15 PM', room: 'IT-01' },
];

export const notices: Notice[] = [
  { id: '1', title: 'Best of CST 2026', date: 'April 8, 2026', description: 'The annual Best of CST event will be held on April 25, 2026. Students are encouraged to participate and showcase their talents. More details will be announced soon.' },
];