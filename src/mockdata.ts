interface Transaction {
    id: string;
    name: string;
    type: "deposit" | "withdraw" | "savings deposit" | "investment withdraw";
    amount: number;
    status: "successful" | "pending" | "failed";
    date: string;
    image: string;
}

interface InsurancePolicies {
    providerName: string;
    type: string;
    usersEnrol: number;
    amount: number;
    premium: string;
    status: "active" | "pending";
    duration: string;
}
  
interface Users{
    id: string;
    name: string;
    email: string;
    phone: string;
    kyc: string;
    submissionDate: string;
}

interface InactiveUsers{
    id: string;
    name: string;
    email: string;
    phone: string;
    reason: string;
    joinedDate: string;
}

interface Resource {
    id: string;
    title: string;
    type: "Video" | "Article";
    category: string;
    dateAdded: string;
    status: "Active" | "Inactive";
}

interface Logs {
    adminName: string;
    logId: string;
    action: "Approved KYC" | "Rejected KYC";
    affectedUser: string;
    dateTime: string;
    status: "Success" | "Failed";
}


export const mockTransactions: Transaction[] = [
    {
        id: "WSX-10452",
        name: "Floyd Miles",
        type: "deposit",
        amount: 250000,
        status: "successful",
        date: "Jun. 24, 2023",
        image: "https://pagedone.io/asset/uploads/1697536419.png"
    },
    {
        id: "WSX-20873",
        name: "Jenny Wilson",
        type: "withdraw",
        amount: 150000,
        status: "pending",
        date: "Feb. 20, 2024",
        image: "https://pagedone.io/asset/uploads/1697536419.png"
    },
    {
        id: "WSX-30948",
        name: "Cameron Williamson",
        type: "savings deposit",
        amount: 500000,
        status: "failed",
        date: "Mar. 02, 2024",
        image: "https://pagedone.io/asset/uploads/1697536419.png"
    },
    {
        id: "WSX-45937",
        name: "Darlene Robertson",
        type: "investment withdraw",
        amount: 200000,
        status: "successful",
        date: "Jan. 10, 2024",
        image: "https://pagedone.io/asset/uploads/1697536419.png"
    },
    {
        id: "WSX-309448",
        name: "Cameron Williamson",
        type: "savings deposit",
        amount: 500000,
        status: "failed",
        date: "Mar. 02, 2024",
        image: "https://pagedone.io/asset/uploads/1697536419.png"
    },
    {
        id: "WSX-453337",
        name: "Darlene Robertson",
        type: "investment withdraw",
        amount: 200000,
        status: "successful",
        date: "Jan. 10, 2024",
        image: "https://pagedone.io/asset/uploads/1697536419.png"
    }
];

export const mockUsers: Users[] = [
    {
        id: "JO-1045",
        name: "Funke Dayo",
        email: "funkedayo@yahoo.com",
        phone: "08012345678",
        kyc: "Driving License",
        submissionDate: "Feb 14, 2025" 
    },
    {
        id: "JO-2045",
        name: "Funke Dayo",
        email: "funkedayo@yahoo.com",
        phone: "08012345678",
        kyc: "International Passport",
        submissionDate: "Feb 14, 2025" 
    },
    {
        id: "JO-3045",
        name: "Funke Dayo",
        email: "funkedayo@yahoo.com",
        phone: "08012345678",
        kyc: "Driving License",
        submissionDate: "Feb 14, 2025" 
    },
    {
        id: "JO-4445",
        name: "Funke Dayo",
        email: "funkedayo@yahoo.com",
        phone: "08012345678",
        kyc: "International Passport",
        submissionDate: "Feb 14, 2025" 
    },
    {
        id: "JO-5345",
        name: "Funke Dayo",
        email: "funkedayo@yahoo.com",
        phone: "08012345678",
        kyc: "National ID",
        submissionDate: "Feb 14, 2025" 
    },
    {
        id: "JO-6345",
        name: "Funke Dayo",
        email: "funkedayo@yahoo.com",
        phone: "08012345678",
        kyc: "Driving License",
        submissionDate: "Feb 14, 2025" 
    },
    {
        id: "JO-7042",
        name: "Funke Dayo",
        email: "funkedayo@yahoo.com",
        phone: "08012345678",
        kyc: "National ID",
        submissionDate: "Feb 14, 2025" 
    }
]

export const mockInactiveUsers: InactiveUsers[] = [
    {
        id: "JO-1045",
        name: "Funke Dayo",
        email: "funkedayo@yahoo.com",
        phone: "08012345678",
        reason: "Failed KYC",
        joinedDate: "Feb 14, 2025" 
    },
    {
        id: "JO-2045",
        name: "Funke Dayo",
        email: "funkedayo@yahoo.com",
        phone: "08012345678",
        reason: "Failed KYC",
        joinedDate: "Feb 14, 2025" 
    },
    {
        id: "JO-3045",
        name: "Funke Dayo",
        email: "funkedayo@yahoo.com",
        phone: "08012345678",
        reason: "Unverified Email",
        joinedDate: "Feb 14, 2025" 
    },
    {
        id: "JO-4445",
        name: "Funke Dayo",
        email: "funkedayo@yahoo.com",
        phone: "08012345678",
        reason: "Failed KYC",
        joinedDate: "Feb 14, 2025" 
    },
    {
        id: "JO-5345",
        name: "Funke Dayo",
        email: "funkedayo@yahoo.com",
        phone: "08012345678",
        reason: "Manual Deactivation",
        joinedDate: "Feb 14, 2025" 
    },
    {
        id: "JO-6345",
        name: "Funke Dayo",
        email: "funkedayo@yahoo.com",
        phone: "08012345678",
        reason: "Unverified Email",
        joinedDate: "Feb 14, 2025" 
    },
    {
        id: "JO-7042",
        name: "Funke Dayo",
        email: "funkedayo@yahoo.com",
        phone: "08012345678",
        reason: "Manual Deactivation",
        joinedDate: "Feb 14, 2025" 
    }
]

export const InsurancePolicies: InsurancePolicies[] = [
    {
      providerName: "Allianz Insurance",
      type: "Health",
      usersEnrol: 1200,
      amount: 50000,
      premium: "8,500/Monthly",
      status: "active",
      duration: "Monthly"
    },
    {
      providerName: "AXA Mansard",
      type: "Auto",
      usersEnrol: 850,
      amount: 75000,
      premium: "2000,Yearly",
      status: "pending",
       duration: "Monthly"
    },
    {
      providerName: "Leadway Assurance",
      type: "Life",
      usersEnrol: 2200,
      amount: 100000,
      premium: "3000,Quarterly",
      status: "active",
       duration: "Monthly"
    },
    {
      providerName: "Mutual Benefits",
      type: "Travel",
      usersEnrol: 540,
      amount: 30000,
      premium: "2000,Monthly",
      status: "pending",
       duration: "Monthly"
    },
    {
      providerName: "Old Mutual",
      type: "Home",
      usersEnrol: 670,
      amount: 45000,
      premium: "3000,Yearly",
      status: "active",
       duration: "Monthly"
    },
    {
      providerName: "Prudential Zenith",
      type: "Health",
      usersEnrol: 1500,
      amount: 60000,
      premium: "3000,Quarterly",
      status: "active",
       duration: "Monthly"
    },
    {
      providerName: "FBN Insurance",
      type: "Business",
      usersEnrol: 430,
      amount: 90000,
      premium: "2100,Yearly",
      status: "pending",
       duration: "Monthly"
    },
  ];


interface AllUsers {
    id: string;
    name: string;
    email: string;
    status: "active" | "inactive";
    date: string;
    phone: number;
}

export const mockAllUsers: AllUsers[] = [
    {
        id: "JO-1045",
        name: "Funke Dayo",
        email: "funkedayo@example.com",
        phone: 2348012345678,
        status: "active",
        date: "Feb. 24, 2025"
    },
    {
        id: "JO-1046",
        name: "Funke Dayo",
        email: "funkedayo@example.com",
        phone: 2348012345678,
        status: "active",
        date: "Feb. 24, 2025"
    },
    {
        id: "JO-1047",
        name: "Funke Dayo",
        email: "funkedayo@example.com",
        phone: 2348012345678,
        status: "inactive",
        date: "Feb. 24, 2025"
    },
    {
        id: "JO-1048",
        name: "Funke Dayo",
        email: "funkedayo@example.com",
        phone: 2348012345678,
        status: "active",
        date: "Feb. 24, 2025"
    },
    {
        id: "JO-1049",
        name: "Funke Dayo",
        email: "funkedayo@example.com",
        phone: 2348012345678,
        status: "active",
        date: "Feb. 24, 2025"
    },
    {
        id: "JO-1050",
        name: "Funke Dayo",
        email: "funkedayo@example.com",
        phone: 2348012345678,
        status: "inactive",
        date: "Feb. 24, 2025"
    },
    {
        id: "JO-1051",
        name: "Funke Dayo",
        email: "funkedayo@example.com",
        phone: 2348012345678,
        status: "active",
        date: "Feb. 24, 2025"
    },
]


export interface UserDetailsModalProps {
    isOpen: boolean
    onClose: () => void
    userData: UserData
    onEditUser: () => void
    onInitiateWithdrawal: () => void
}
export interface UserData {
    name: string
    email: string
    userId: string
    phone: string
    accountStatus: "active" | "inactive";
    dateJoined: string
    lastLogin: string
    kycStatus: {
        verification: "pending" | "verified";
        documentSubmitted: string
        verificationDate: string
        documentReview: "view" | "edit";
        lastLogin: string
    }
    financial: {
        totalBalance: string
        savingsBalance: string
        investmentBalance: string
        bankAccount: string
    }
    recentActivity: Array<{
        date: string
        time: string
        type: string
        amount: string
    }>
}

export const mockUserData: UserData = {
    name: "John Doe",
    email: "johndoe@example.com",
    userId: "JD-1234",
    phone: "+234 801 234 5678",
    accountStatus: "active",
    dateJoined: "Jan 15, 2025",
    lastLogin: "Feb 27, 2025 09:45 AM",
    kycStatus: {
        verification: "pending",
        documentSubmitted: "International Passport",
        verificationDate: "Feb 10, 2025",
        documentReview: "view",
        lastLogin: "Feb 27, 2025 09:45 AM",
    },
    financial: {
        totalBalance: "1,250,000",
        savingsBalance: "750,000",
        investmentBalance: "500,000",
        bankAccount: "0123456789 (GTBank)",
    },
    recentActivity: [
        {
            date: "Feb 26, 2025",
            time: "02:30 PM",
            type: "Deposit",
            amount: "250,000",
        },
        {
            date: "Feb 25, 2025",
            time: "11:45 AM",
            type: "Withdrawal",
            amount: "100,000",
        },
        {
            date: "Feb 23, 2025",
            time: "09:15 AM",
            type: "Investment",
            amount: "500,000",
        },
    ],
}

export const mockResources: Resource[] = [
    {
        id: "R-1001",
        title: "Investing 101",
        type: "Video",
        category: "Investments",
        dateAdded: "Feb 15, 2025",
        status: "Active",
    },
    {
        id: "R-1002",
        title: "Budgeting for Beginners",
        type: "Article",
        category: "Budgeting",
        dateAdded: "Feb 15, 2025",
        status: "Active",
    },
    {
        id: "R-1003",
        title: "External Resource: Money Tips",
        type: "Video",
        category: "Savings",
        dateAdded: "Feb 15, 2025",
        status: "Inactive",
    },
    {
        id: "R-1004",
        title: "Budgeting for Beginners",
        type: "Article",
        category: "Budgeting",
        dateAdded: "Feb 15, 2025",
        status: "Active",
    },
    {
        id: "R-1005",
        title: "Understanding Savings",
        type: "Video",
        category: "Investments",
        dateAdded: "Feb 15, 2025",
        status: "Active",
    },
    {
        id: "R-1006",
        title: "Investing 101",
        type: "Article",
        category: "Savings",
        dateAdded: "Feb 15, 2025",
        status: "Active",
    },
    {
        id: "R-1007",
        title: "External Resource: Money Tips",
        type: "Video",
        category: "Budgeting",
        dateAdded: "Feb 15, 2025",
        status: "Active",
    },
    {
        id: "R-1008",
        title: "Understanding Savings",
        type: "Article",
        category: "Savings",
        dateAdded: "Feb 15, 2025",
        status: "Inactive",
    },
];

export const mockAudits: Logs[] = [
    {
      adminName: "Ben Richards",
      logId: "LOG-2025-0012",
      action: "Approved KYC",
      affectedUser: "Adamu Lawson",
      dateTime: "Feb 15, 2025, 12:30 PM",
      status: "Success",
    },
    {
      adminName: "Ben Richards",
      logId: "LOG-2025-0012",
      action: "Rejected KYC",
      affectedUser: "Adamu Lawson",
      dateTime: "Feb 15, 2025, 12:30 PM",
      status: "Success",
    },
    {
      adminName: "Ben Richards",
      logId: "LOG-2025-0012",
      action: "Approved KYC",
      affectedUser: "Adamu Lawson",
      dateTime: "Feb 15, 2025, 12:30 PM",
      status: "Failed",
    },
    {
      adminName: "Ben Richards",
      logId: "LOG-2025-0012",
      action: "Approved KYC",
      affectedUser: "Adamu Lawson",
      dateTime: "Feb 15, 2025, 12:30 PM",
      status: "Success",
    },
    {
      adminName: "Ben Richards",
      logId: "LOG-2025-0012",
      action: "Approved KYC",
      affectedUser: "Adamu Lawson",
      dateTime: "Feb 15, 2025, 12:30 PM",
      status: "Success",
    },
    {
      adminName: "Ben Richards",
      logId: "LOG-2025-0012",
      action: "Rejected KYC",
      affectedUser: "Adamu Lawson",
      dateTime: "Feb 15, 2025, 12:30 PM",
      status: "Success",
    },
    {
      adminName: "Ben Richards",
      logId: "LOG-2025-0012",
      action: "Rejected KYC",
      affectedUser: "Adamu Lawson",
      dateTime: "Feb 15, 2025, 12:30 PM",
      status: "Failed",
    },
    {
      adminName: "Ben Richards",
      logId: "LOG-2025-0012",
      action: "Approved KYC",
      affectedUser: "Adamu Lawson",
      dateTime: "Feb 15, 2025, 12:30 PM",
      status: "Success",
    },
  ];
  
