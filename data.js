const courseIndustryMap = {};

Object.assign(courseIndustryMap, {
  "African Languages": ["Translation", "Cultural Heritage", "Linguistics"],
  "English": ["Literary Studies", "Creative Writing", "Publishing"],
  "Afrikaans": ["Translation", "Language Studies", "Education"],
  "History": ["Museums", "Heritage", "Research"],
  "Philosophy": ["Ethics", "Academia", "Research"],
  "Psychology": ["Clinical Psychology", "Counselling", "Research"],
  "Social Work": ["Community Development", "Child Protection", "Therapeutic Services"],
  "Sociology": ["Urban Sociology", "Social Research", "Criminology"],
  "Communication Studies": ["Public Relations", "Media", "Corporate Communication"],
  "Journalism": ["Newsrooms", "Publishing", "Broadcasting"],
  "Religion Studies": ["Academia", "Religious Organizations", "Counselling"],
  "Fine Arts": ["Art Galleries", "Museum Curation", "Creative Industries"],
  "Music": ["Music Production", "Performance", "Music Therapy"],
  "Natural Sciences": ["Laboratory Research", "Environmental Consultancy", "Biotechnology"],
  "Physics": ["Astrophysics", "Quantum Physics", "Engineering"]
});

Object.assign(courseIndustryMap, {
  "Chemistry": ["Chemical Engineering", "Pharmaceuticals", "Environmental Science"],
  "Biology": ["Ecology", "Research", "Conservation"],
  "Mathematics": ["Finance", "Data Science", "Teaching"],
  "Statistics": ["Data Analytics", "Market Research", "Government Statistics"],
  "Environmental Studies": ["Sustainability", "Climate Change", "Policy Advocacy"],
  "Earth Sciences": ["Geology", "Geophysics", "Environmental Consultancy"],
  "Biomedical Sciences": ["Healthcare", "Research", "Pharmaceuticals"],
  "Biokinetics": ["Sports Science", "Rehabilitation", "Healthcare"],
  "Health Systems Sciences": ["Healthcare Administration", "Policy", "Consulting"],
  "Civil Engineering": ["Construction", "Infrastructure", "Urban Planning"],
  "Electrical Engineering": ["Power Systems", "Electronics", "Automation"],
  "Mechanical Engineering": ["Automotive", "Manufacturing", "Aerospace"],
  "Chemical Engineering": ["Petrochemicals", "Pharmaceuticals", "Energy"],
  "Industrial Engineering": ["Manufacturing", "Operations Research", "Logistics"]
});

Object.assign(courseIndustryMap, {
  "Mining Engineering": ["Mining Operations", "Environmental Impact", "Safety Management"],
  "Computer Science": ["Software Development", "Cybersecurity", "Data Science"],
  "Information Technology": ["IT Services", "Software Solutions", "Network Administration"],
  "Accounting Sciences": ["Finance", "Audit", "Taxation"],
  "Actuarial Science": ["Insurance", "Risk Management", "Investment"],
  "Business Administration": ["Management", "Operations", "Human Resources"],
  "Marketing": ["Brand Management", "Market Research", "Digital Marketing"],
  "Finance": ["Corporate Finance", "Banking", "Investment Management"],
  "Human Resource Management": ["Talent Management", "Recruitment", "Training and Development"],
  "Entrepreneurship": ["Startups", "Business Development", "Consulting"],
  "Supply Chain Management": ["Logistics", "Procurement", "Operations Management"],
  "Operations Management": ["Manufacturing", "Process Optimization", "Business Consulting"]
});

Object.assign(courseIndustryMap, {
  "Law": ["Corporate Law", "Criminal Law", "International Law"],
  "Medicine": ["General Practice", "Surgery", "Emergency Care"],
  "Dentistry": ["Orthodontics", "General Dentistry", "Oral Surgery"],
  "Nursing": ["Community Health", "Critical Care", "Pediatrics"],
  "Pharmacy": ["Pharmaceutical Sciences", "Clinical Pharmacy", "Pharmacology"],
  "Physiotherapy": ["Sports Rehabilitation", "Orthopedic Care", "Physical Therapy"],
  "Occupational Therapy": ["Therapeutic Services", "Rehabilitation", "Mental Health"],
  "Education": ["Primary Education", "Secondary Education", "Special Needs Education", "Tertiary Education"],
  "Agriculture and Forestry": ["Farming", "Agribusiness", "Environmental Conservation"],
  "Political Science": ["Public Policy", "International Relations", "Political Consulting"],
  "Economics": ["Macroeconomics", "Microeconomics", "Economic Research"],
  "Anthropology": ["Cultural Anthropology", "Archaeology", "Social Research"],
  "Geography": ["Urban Planning", "Environmental Studies", "Cartography"]
});

Object.assign(courseIndustryMap, {
  "Public Administration": ["Government", "Public Policy", "Local Government"],
  "International Relations": ["Diplomacy", "Human Rights", "Global Studies"],
  "Legal Secretary": ["Law Firms", "Courts", "Legal Services"],
  "Medical Secretary": ["Hospitals", "Clinics", "Healthcare Administration"],
  "Management Assistant": ["Corporate Offices", "Project Management", "Operations"],
  "Public Procurement Management": ["Government Agencies", "Public Sector", "Procurement"],
  "Quantitative Management": ["Data Analytics", "Finance", "Market Research"],
  "Digital Marketing": ["Social Media", "Advertising", "SEO/SEM"],
  "Corporate Communication": ["Public Relations", "Media", "Internal Communication"],
  "Real Estate": ["Property Development", "Real Estate Investment", "Sales"],
  "Strategy": ["Business Strategy", "Consulting", "Market Research"],
  "Agribusiness": ["Farming", "Agriculture Management", "Agricultural Consultancy"],
  "Customer Relations": ["Customer Service", "Sales", "Account Management"],
  "Digital Business": ["E-commerce", "Online Marketing", "Business Technology"],
  "General Management": ["Operations Management", "Corporate Management", "Leadership"],
  "Management Control": ["Corporate Strategy", "Risk Management", "Consulting"],
  "Public Relations": ["Corporate Communications", "Media Relations", "Brand Management"],
  "Sales": ["Sales Management", "Retail", "Business Development"],
  "Healthcare Studies": ["Healthcare Administration", "Policy", "Clinical Studies"],
  "Nutritional Science": ["Nutritionist", "Health Consultant", "Research"],
  "Information Systems": ["Software Development", "IT Services", "Data Analysis"],
  "Regional Planning": ["Urban Planning", "Land Development", "Sustainability"],
  "Urban Planning": ["City Planning", "Architecture", "Government Agencies"],
  "Theology": ["Religious Studies", "Counselling", "Ministry"],
  "Business Law Studies": ["Corporate Law", "Contract Law", "International Business Law"],
  "Human Settlements Management": ["Housing Development", "Urban Development", "Public Administration"]
});

const provinceTowns = {
  "Gauteng": [
    "Johannesburg", "Pretoria", "Soweto", "Benoni", "Boksburg", "Krugersdorp", "Vereeniging",
    "Alberton", "Roodepoort", "Centurion", "Randburg", "Midrand", "Tembisa", "Germiston", "Springs", "Brakpan"
  ],
  "Western Cape": [
    "Cape Town", "Stellenbosch", "Paarl", "George", "Mossel Bay", "Worcester", "Beaufort West",
    "Knysna", "Oudtshoorn", "Malmesbury", "Vredenburg", "Ceres", "Caledon", "Robertson", "Langebaan"
  ],
  "KwaZulu-Natal": [
    "Durban", "Pietermaritzburg", "Richards Bay", "Newcastle", "Port Shepstone", "Ladysmith", "Ulundi",
    "Empangeni", "Howick", "Eshowe", "Mtubatuba", "Margate", "KwaDukuza (Stanger)", "Vryheid", "Estcourt"
  ],
  "Eastern Cape": [
    "Gqeberha (Port Elizabeth)", "East London", "Mthatha", "Queenstown", "Uitenhage", "Bhisho", "Aliwal North",
    "Butterworth", "Grahamstown (Makhanda)", "King William's Town", "Jeffreys Bay", "Komani", "Cradock",
    "Graaff-Reinet", "Mount Frere"
  ],
  "Free State": [
    "Bloemfontein", "Welkom", "Bethlehem", "Sasolburg", "Kroonstad", "Harrismith", "Phuthaditjhaba",
    "Parys", "Virginia", "Ficksburg", "Senekal", "Thaba Nchu", "Heilbron", "Ladybrand", "Bothaville"
  ],
  "Limpopo": [
    "Polokwane", "Thohoyandou", "Tzaneen", "Lebowakgomo", "Mokopane", "Musina", "Giyani",
    "Phalaborwa", "Modimolle", "Makhado", "Bela-Bela", "Jane Furse", "Groblersdal", "Marble Hall", "Burgersfort"
  ],
  "Mpumalanga": [
    "Mbombela (Nelspruit)", "Witbank (eMalahleni)", "Secunda", "Middelburg", "Lydenburg", "Ermelo", "Sabie",
    "Delmas", "White River", "Barberton", "Komatipoort", "Standerton", "Bethal", "Hazyview", "Carolina"
  ],
  "North West": [
    "Mahikeng", "Klerksdorp", "Rustenburg", "Potchefstroom", "Brits", "Zeerust", "Vryburg",
    "Lichtenburg", "Orkney", "Mmabatho", "Taung", "Schweizer-Reneke", "Mogwase", "Delareyville", "Stilfontein"
  ],
  "Northern Cape": [
    "Kimberley", "Upington", "Springbok", "De Aar", "Kathu", "Kuruman", "Colesberg",
    "Douglas", "Postmasburg", "Calvinia", "Keimoes", "Kakamas", "Victoria West", "Hartswater", "Warrenton"
  ]
};