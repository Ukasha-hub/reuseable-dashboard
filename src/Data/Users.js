// data/users.js

const users = [
    {
      name: "John Doe",
      image: "https://i.pravatar.cc/300",
      jobTitle: "Software Engineer",
      phone: "+1 (555) 123-4567",
      email: "john.doe@example.com",
      address: "123 Market St, San Francisco, CA"
    },
    {
      name: "Jane Smith",
      image: "https://i.pravatar.cc/300",
      jobTitle: "Product Manager",
      phone: "+1 (555) 234-5678",
      email: "jane.smith@example.com",
      address: "456 Broadway Ave, New York, NY"
    },
    {
      name: "Emily Johnson",
      image: "https://i.pravatar.cc/300",
      jobTitle: "UX Designer",
      phone: "+1 (555) 345-6789",
      email: "emily.johnson@example.com",
      address: "789 Lakeview Dr, Austin, TX"
    },
    {
      name: "Michael Brown",
      image: "https://i.pravatar.cc/300",
      jobTitle: "Data Analyst",
      phone: "+1 (555) 456-7890",
      email: "michael.brown@example.com",
      address: "321 Ocean Blvd, Miami, FL"
    },
    {
      name: "Sophia Davis",
      image: "https://i.pravatar.cc/300",
      jobTitle: "Frontend Developer",
      phone: "+1 (555) 567-8901",
      email: "sophia.davis@example.com",
      address: "654 Sunset Rd, Los Angeles, CA"
    },
    {
      name: "Liam Wilson",
      image: "https://i.pravatar.cc/300",
      jobTitle: "Backend Developer",
      phone: "+1 (555) 678-9012",
      email: "liam.wilson@example.com",
      address: "12 River St, Denver, CO"
    },
    {
      name: "Olivia Martinez",
      image: "https://i.pravatar.cc/300",
      jobTitle: "DevOps Engineer",
      phone: "+1 (555) 789-0123",
      email: "olivia.martinez@example.com",
      address: "77 Elm St, Portland, OR"
    },
    {
      name: "Noah Anderson",
      image: "https://i.pravatar.cc/300",
      jobTitle: "Mobile Developer",
      phone: "+1 (555) 890-1234",
      email: "noah.anderson@example.com",
      address: "33 Maple Rd, Seattle, WA"
    },
    {
      name: "Ava Thomas",
      image: "https://i.pravatar.cc/300",
      jobTitle: "QA Engineer",
      phone: "+1 (555) 901-2345",
      email: "ava.thomas@example.com",
      address: "18 Birch Ln, Chicago, IL"
    },
    {
      name: "Elijah Moore",
      image: "https://i.pravatar.cc/300",
      jobTitle: "Cloud Architect",
      phone: "+1 (555) 012-3456",
      email: "elijah.moore@example.com",
      address: "48 Cedar Ave, Phoenix, AZ"
    },
    {
      name: "Isabella Taylor",
      image: "https://i.pravatar.cc/300",
      jobTitle: "Database Admin",
      phone: "+1 (555) 111-2233",
      email: "isabella.taylor@example.com",
      address: "11 Oak St, Dallas, TX"
    },
    {
      name: "William Lee",
      image: "https://i.pravatar.cc/300",
      jobTitle: "Full Stack Developer",
      phone: "+1 (555) 222-3344",
      email: "william.lee@example.com",
      address: "27 Pine Ct, Atlanta, GA"
    },
    {
      name: "Mia Harris",
      image: "https://i.pravatar.cc/300",
      jobTitle: "Security Specialist",
      phone: "+1 (555) 333-4455",
      email: "mia.harris@example.com",
      address: "39 Lake St, Raleigh, NC"
    },
    {
      name: "James White",
      image: "https://i.pravatar.cc/300",
      jobTitle: "Business Analyst",
      phone: "+1 (555) 444-5566",
      email: "james.white@example.com",
      address: "50 Greenway Blvd, Nashville, TN"
    },
    {
      name: "Charlotte Martin",
      image: "https://i.pravatar.cc/300",
      jobTitle: "AI Engineer",
      phone: "+1 (555) 555-6677",
      email: "charlotte.martin@example.com",
      address: "61 Ivy Ln, Boulder, CO"
    },
    {
      name: "Benjamin Hall",
      image: "https://i.pravatar.cc/300",
      jobTitle: "Tech Lead",
      phone: "+1 (555) 666-7788",
      email: "benjamin.hall@example.com",
      address: "72 Rose St, Salt Lake City, UT"
    },
    {
      name: "Amelia Allen",
      image: "https://i.pravatar.cc/300",
      jobTitle: "Machine Learning Engineer",
      phone: "+1 (555) 777-8899",
      email: "amelia.allen@example.com",
      address: "83 Summit Dr, San Jose, CA"
    },
    {
      name: "Lucas Young",
      image: "https://i.pravatar.cc/300",
      jobTitle: "Technical Writer",
      phone: "+1 (555) 888-9900",
      email: "lucas.young@example.com",
      address: "94 Willow Ln, Minneapolis, MN"
    },
    {
      name: "Harper King",
      image: "https://i.pravatar.cc/300",
      jobTitle: "Support Engineer",
      phone: "+1 (555) 999-0011",
      email: "harper.king@example.com",
      address: "105 Valley Rd, Tampa, FL"
    },
    {
      name: "Henry Wright",
      image: "https://i.pravatar.cc/300",
      jobTitle: "System Administrator",
      phone: "+1 (555) 000-1122",
      email: "henry.wright@example.com",
      address: "116 Forest Path, Cincinnati, OH"
    },
    {
      name: "Evelyn Scott",
      image: "https://i.pravatar.cc/300",
      jobTitle: "Scrum Master",
      phone: "+1 (555) 123-4561",
      email: "evelyn.scott@example.com",
      address: "127 Ridge View, Albuquerque, NM"
    },
    {
      name: "Daniel Green",
      image: "https://i.pravatar.cc/300",
      jobTitle: "IT Consultant",
      phone: "+1 (555) 234-5672",
      email: "daniel.green@example.com",
      address: "138 Crystal Ln, Indianapolis, IN"
    },
    {
      name: "Abigail Baker",
      image: "https://i.pravatar.cc/300",
      jobTitle: "UI Developer",
      phone: "+1 (555) 345-6783",
      email: "abigail.baker@example.com",
      address: "149 Horizon Blvd, Las Vegas, NV"
    },
    {
      name: "Matthew Nelson",
      image: "https://i.pravatar.cc/300",
      jobTitle: "Network Engineer",
      phone: "+1 (555) 456-7894",
      email: "matthew.nelson@example.com",
      address: "160 Park Ave, Kansas City, MO"
    },
    {
      name: "Chloe Adams",
      image: "https://i.pravatar.cc/300",
      jobTitle: "Digital Marketer",
      phone: "+1 (555) 567-8905",
      email: "chloe.adams@example.com",
      address: "171 Beacon St, Boston, MA"
    }
  ];
  
  export default users;
  