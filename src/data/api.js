const DATA = "https://dummyjson.com/recipes?utm_source=chatgpt.com";

export const MenuData = async () => {
  const response = await fetch(DATA);
  const data = await response.json();

  return data.recipes;
};

export const StoreData = [
  {
    id: 1,
    city: "Satna",
    name: "Crevio Satna",
    address: "Civil Lines, Satna, Madhya Pradesh",
    phone: "9876500001",
    image: "/public/delivery.png",
    timing: "10:00 AM - 11:00 PM",
    status: "Open",
  },

  {
    id: 2,
    city: "Jabalpur",
    name: "Crevio Jabalpur",
    address: "Vijay Nagar, Jabalpur, Madhya Pradesh",
    phone: "9876500002",
    image: "/public/delivery.png",
    timing: "10:00 AM - 11:00 PM",
    status: "Open",
  },

  {
    id: 3,
    city: "Bhopal",
    name: "Crevio Bhopal",
    address: "MP Nagar, Bhopal, Madhya Pradesh",
    phone: "9876500003",
    image:  "/public/delivery.png",
    timing: "11:00 AM - 10:30 PM",
    status: "Open",
  },

  {
    id: 4,
    city: "Indore",
    name: "Crevio Indore",
    address: "Vijay Nagar, Indore, Madhya Pradesh",
    phone: "9876500004",
    image:  "/public/delivery.png",
    timing: "10:00 AM - 11:00 PM",
    status: "Open",
  },

  {
    id: 5,
    city: "Rewa",
    name: "Crevio Rewa",
    address: "University Road, Rewa, Madhya Pradesh",
    phone: "9876500005",
    image:  "/public/delivery.png",
    timing: "11:00 AM - 10:00 PM",
    status: "Closed",
  },

  {
    id: 6,
    city: "Delhi",
    name: "Crevio Delhi",
    address: "Connaught Place, New Delhi",
    phone: "9876500006",
    image:  "/public/delivery.png",
    timing: "10:00 AM - 11:30 PM",
    status: "Open",
  },

  {
    id: 7,
    city: "Mumbai",
    name: "Crevio Mumbai",
    address: "Andheri West, Mumbai, Maharashtra",
    phone: "9876500007",
    image:  "/public/delivery.png",
    timing: "10:00 AM - 11:30 PM",
    status: "Open",
  },

  {
    id: 8,
    city: "Pune",
    name: "Crevio Pune",
    address: "Kothrud, Pune, Maharashtra",
    phone: "9876500008",
    image:  "/public/delivery.png",
    timing: "11:00 AM - 11:00 PM",
    status: "Open",
  },

  {
    id: 9,
    city: "Nagpur",
    name: "Crevio Nagpur",
    address: "Dharampeth, Nagpur, Maharashtra",
    phone: "9876500009",
    image:  "/public/delivery.png",
    timing: "10:30 AM - 10:30 PM",
    status: "Closed",
  },

  {
    id: 10,
    city: "Lucknow",
    name: "Crevio Lucknow",
    address: "Hazratganj, Lucknow, Uttar Pradesh",
    phone: "9876500010",
    image:  "/public/delivery.png",
    timing: "10:00 AM - 11:00 PM",
    status: "Open",
  },

  {
    id: 11,
    city: "Kanpur",
    name: "Crevio Kanpur",
    address: "Swaroop Nagar, Kanpur, Uttar Pradesh",
    phone: "9876500011",
    image:  "/public/delivery.png",
    timing: "11:00 AM - 10:30 PM",
    status: "Open",
  },

  {
    id: 12,
    city: "Varanasi",
    name: "Crevio Varanasi",
    address: "Lanka, Varanasi, Uttar Pradesh",
    phone: "9876500012",
    image:  "/public/delivery.png",
    timing: "10:00 AM - 11:00 PM",
    status: "Open",
  },

  {
    id: 13,
    city: "Jaipur",
    name: "Crevio Jaipur",
    address: "C-Scheme, Jaipur, Rajasthan",
    phone: "9876500013",
    image:  "/public/delivery.png",
    timing: "10:00 AM - 11:00 PM",
    status: "Closed",
  },

  {
    id: 14,
    city: "Kota",
    name: "Crevio Kota",
    address: "Talwandi, Kota, Rajasthan",
    phone: "9876500014",
    image:  "/public/delivery.png",
    timing: "11:00 AM - 10:00 PM",
    status: "Open",
  },

  {
    id: 15,
    city: "Ahmedabad",
    name: "Crevio Ahmedabad",
    address: "Navrangpura, Ahmedabad, Gujarat",
    phone: "9876500015",
    image:  "/public/delivery.png",
    timing: "10:00 AM - 11:00 PM",
    status: "Open",
  },

  {
    id: 16,
    city: "Surat",
    name: "Crevio Surat",
    address: "Vesu, Surat, Gujarat",
    phone: "9876500016",
    image:  "/public/delivery.png",
    timing: "10:30 AM - 11:00 PM",
    status: "Open",
  },

  {
    id: 17,
    city: "Hyderabad",
    name: "Crevio Hyderabad",
    address: "Madhapur, Hyderabad, Telangana",
    phone: "9876500017",
    image:  "/public/delivery.png",
    timing: "10:00 AM - 11:30 PM",
    status: "Open",
  },

  {
    id: 18,
    city: "Bangalore",
    name: "Crevio Bangalore",
    address: "Indiranagar, Bangalore, Karnataka",
    phone: "9876500018",
    image:  "/public/delivery.png",
    timing: "10:00 AM - 11:30 PM",
    status: "Closed",
  },

  {
    id: 19,
    city: "Chennai",
    name: "Crevio Chennai",
    address: "Anna Nagar, Chennai, Tamil Nadu",
    phone: "9876500019",
    image:  "/public/delivery.png",
    timing: "11:00 AM - 11:00 PM",
    status: "Open",
  },

  {
    id: 20,
    city: "Kolkata",
    name: "Crevio Kolkata",
    address: "Salt Lake, Kolkata, West Bengal",
    phone: "9876500020",
    image:  "/public/delivery.png",
    timing: "10:00 AM - 10:30 PM",
    status: "Open",
  },
];