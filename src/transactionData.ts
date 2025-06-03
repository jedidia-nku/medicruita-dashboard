import { ITransactionResponse } from "./model/product";

const mockTransactions = [
  {
    dateTime: "14 Feb 2025, 10:23 AM",
    transactionId: "WSX-10452",
    user: {
      name: "Adekunle Alabi",
      email: "adekunle@yahoo.com",
    },
    transactionType: "Deposit",
    amount: 250000,
    transactionFee: 500,
    totalProcessed: 249500,
    paymentMethod: "Bank Transfer",
    referenceId: "ABC123XYZ",
    status: "Successful",
    additionalDetails: {
      accountNumber: "0123456789",
      bankName: "GTBank",
      processingTime: "Instant",
      initiatedBy: "User",
    },
    adminActions: "None Required",
  },
  {
    dateTime: "15 Feb 2025, 12:45 PM",
    transactionId: "WSX-10453",
    user: {
      name: "John Doe",
      email: "john.doe@example.com",
    },
    transactionType: "Withdrawal",
    amount: 500000,
    transactionFee: 1000,
    totalProcessed: 499000,
    paymentMethod: "Credit Card",
    referenceId: "DEF456GHI",
    status: "Pending",
    additionalDetails: {
      accountNumber: "0234567890",
      bankName: "UBA",
      processingTime: "24 Hours",
      initiatedBy: "Admin",
    },
    adminActions: "Review Required",
  },
    {
      dateTime: "16 Feb 2025, 08:15 AM",
      transactionId: "WSX-10454",
      user: {
        name: "Chinwe Okafor",
        email: "chinwe.okafor@mail.com"
      },
      transactionType: "Deposit",
      amount: 150000,
      transactionFee: 300,
      totalProcessed: 149700,
      paymentMethod: "Mobile Wallet",
      referenceId: "JKL789MNO",
      status: "Successful",
      additionalDetails: {
        accountNumber: "0345678901",
        bankName: "Access Bank",
        processingTime: "Instant",
        initiatedBy: "User"
      },
      adminActions: "None Required"
    },
    {
      dateTime: "17 Feb 2025, 02:30 PM",
      transactionId: "WSX-10455",
      user: {
        name: "Emeka Obi",
        email: "emeka.obi@email.com"
      },
      transactionType: "Withdrawal",
      amount: 750000,
      transactionFee: 1500,
      totalProcessed: 748500,
      paymentMethod: "Debit Card",
      referenceId: "PQR123STU",
      status: "Failed",
      additionalDetails: {
        accountNumber: "0456789012",
        bankName: "Zenith Bank",
        processingTime: "24 Hours",
        initiatedBy: "Admin"
      },
      adminActions: "Retry Recommended"
    },
    {
      dateTime: "18 Feb 2025, 09:10 AM",
      transactionId: "WSX-10456",
      user: {
        name: "Fatima Bello",
        email: "fatima.bello@gmail.com"
      },
      transactionType: "Deposit",
      amount: 300000,
      transactionFee: 600,
      totalProcessed: 299400,
      paymentMethod: "Bank Transfer",
      referenceId: "VWX456YZA",
      status: "Pending",
      additionalDetails: {
        accountNumber: "0567890123",
        bankName: "First Bank",
        processingTime: "3 Hours",
        initiatedBy: "User"
      },
      adminActions: "Verification Needed"
    },
    {
      dateTime: "19 Feb 2025, 04:55 PM",
      transactionId: "WSX-10457",
      user: {
        name: "Oluwakemi Adeyemi",
        email: "kemi.adeyemi@yahoo.com"
      },
      transactionType: "Withdrawal",
      amount: 1000000,
      transactionFee: 2000,
      totalProcessed: 998000,
      paymentMethod: "PayPal",
      referenceId: "BCD789EFG",
      status: "Successful",
      additionalDetails: {
        accountNumber: "0678901234",
        bankName: "Stanbic IBTC",
        processingTime: "Instant",
        initiatedBy: "User"
      },
      adminActions: "None Required"
    },
    {
      dateTime: "20 Feb 2025, 06:40 PM",
      transactionId: "WSX-10458",
      user: {
        name: "Ibrahim Yusuf",
        email: "ibrahim.yusuf@hotmail.com"
      },
      transactionType: "Deposit",
      amount: 450000,
      transactionFee: 900,
      totalProcessed: 449100,
      paymentMethod: "Cryptocurrency",
      referenceId: "HIJ123KLM",
      status: "Failed",
      additionalDetails: {
        accountNumber: "0789012345",
        bankName: "Ecobank",
        processingTime: "48 Hours",
        initiatedBy: "Admin"
      },
      adminActions: "Investigation Required"
    },
        {
          dateTime: "21 Feb 2025, 07:30 AM",
          transactionId: "WSX-10459",
          user: {
            name: "Aisha Mohammed",
            email: "aisha.mohammed@gmail.com"
          },
          transactionType: "Deposit",
          amount: 320000,
          transactionFee: 640,
          totalProcessed: 319360,
          paymentMethod: "Bank Transfer",
          referenceId: "XYZ987LMN",
          status: "Pending",
          additionalDetails: {
            accountNumber: "0890123456",
            bankName: "Fidelity Bank",
            processingTime: "4 Hours",
            initiatedBy: "User"
          },
          adminActions: "Verification Needed"
        },
        {
          dateTime: "22 Feb 2025, 01:15 PM",
          transactionId: "WSX-10460",
          user: {
            name: "Samuel Eze",
            email: "samuel.eze@yahoo.com"
          },
          transactionType: "Withdrawal",
          amount: 270000,
          transactionFee: 540,
          totalProcessed: 269460,
          paymentMethod: "Debit Card",
          referenceId: "OPQ654RST",
          status: "Successful",
          additionalDetails: {
            accountNumber: "0901234567",
            bankName: "Union Bank",
            processingTime: "Instant",
            initiatedBy: "User"
          },
          adminActions: "None Required"
        },
        {
          dateTime: "23 Feb 2025, 09:50 AM",
          transactionId: "WSX-10461",
          user: {
            name: "Jessica Brown",
            email: "jessica.brown@outlook.com"
          },
          transactionType: "Deposit",
          amount: 500000,
          transactionFee: 1000,
          totalProcessed: 499000,
          paymentMethod: "Mobile Wallet",
          referenceId: "UVW321XYZ",
          status: "Failed",
          additionalDetails: {
            accountNumber: "0912345678",
            bankName: "Sterling Bank",
            processingTime: "24 Hours",
            initiatedBy: "Admin"
          },
          adminActions: "Retry Recommended"
        },
        {
          dateTime: "24 Feb 2025, 04:20 PM",
          transactionId: "WSX-10462",
          user: {
            name: "Michael Johnson",
            email: "michael.johnson@email.com"
          },
          transactionType: "Withdrawal",
          amount: 150000,
          transactionFee: 300,
          totalProcessed: 149700,
          paymentMethod: "Credit Card",
          referenceId: "ABC543DEF",
          status: "Successful",
          additionalDetails: {
            accountNumber: "0923456789",
            bankName: "Polaris Bank",
            processingTime: "Instant",
            initiatedBy: "User"
          },
          adminActions: "None Required"
        },
        {
          dateTime: "25 Feb 2025, 10:05 AM",
          transactionId: "WSX-10463",
          user: {
            name: "Chukwuma Nwosu",
            email: "chukwuma.nwosu@gmail.com"
          },
          transactionType: "Deposit",
          amount: 650000,
          transactionFee: 1300,
          totalProcessed: 648700,
          paymentMethod: "Cryptocurrency",
          referenceId: "GHI876JKL",
          status: "Pending",
          additionalDetails: {
            accountNumber: "0934567890",
            bankName: "Keystone Bank",
            processingTime: "12 Hours",
            initiatedBy: "Admin"
          },
          adminActions: "Review Required"
        },
        {
          dateTime: "26 Feb 2025, 06:45 PM",
          transactionId: "WSX-10464",
          user: {
            name: "Fatima Sule",
            email: "fatima.sule@hotmail.com"
          },
          transactionType: "Withdrawal",
          amount: 420000,
          transactionFee: 840,
          totalProcessed: 419160,
          paymentMethod: "Bank Transfer",
          referenceId: "MNO987PQR",
          status: "Failed",
          additionalDetails: {
            accountNumber: "0945678901",
            bankName: "Wema Bank",
            processingTime: "48 Hours",
            initiatedBy: "User"
          },
          adminActions: "Investigation Required"
        },
        {
          dateTime: "27 Feb 2025, 02:25 PM",
          transactionId: "WSX-10465",
          user: {
            name: "David Okonkwo",
            email: "david.okonkwo@live.com"
          },
          transactionType: "Deposit",
          amount: 200000,
          transactionFee: 400,
          totalProcessed: 199600,
          paymentMethod: "Mobile Wallet",
          referenceId: "STU654VWX",
          status: "Successful",
          additionalDetails: {
            accountNumber: "0956789012",
            bankName: "FCMB",
            processingTime: "Instant",
            initiatedBy: "User"
          },
          adminActions: "None Required"
        },
        {
          dateTime: "28 Feb 2025, 11:55 AM",
          transactionId: "WSX-10466",
          user: {
            name: "Mary Ojo",
            email: "mary.ojo@mail.com"
          },
          transactionType: "Withdrawal",
          amount: 800000,
          transactionFee: 1600,
          totalProcessed: 798400,
          paymentMethod: "Debit Card",
          referenceId: "XYZ321ABC",
          status: "Pending",
          additionalDetails: {
            accountNumber: "0967890123",
            bankName: "Jaiz Bank",
            processingTime: "24 Hours",
            initiatedBy: "Admin"
          },
          adminActions: "Verification Needed"
        },
        {
          dateTime: "1 Mar 2025, 03:10 PM",
          transactionId: "WSX-10467",
          user: {
            name: "Ebuka Nwachukwu",
            email: "ebuka.nwachukwu@yahoo.com"
          },
          transactionType: "Deposit",
          amount: 120000,
          transactionFee: 240,
          totalProcessed: 119760,
          paymentMethod: "Cryptocurrency",
          referenceId: "LMN789OPQ",
          status: "Successful",
          additionalDetails: {
            accountNumber: "0978901234",
            bankName: "FBNQuest",
            processingTime: "Instant",
            initiatedBy: "User"
          },
          adminActions: "None Required"
        },
        {
          dateTime: "2 Mar 2025, 05:35 PM",
          transactionId: "WSX-10468",
          user: {
            name: "Abiola Adewale",
            email: "abiola.adewale@gmail.com"
          },
          transactionType: "Withdrawal",
          amount: 950000,
          transactionFee: 1900,
          totalProcessed: 948100,
          paymentMethod: "PayPal",
          referenceId: "RST321UVW",
          status: "Failed",
          additionalDetails: {
            accountNumber: "0989012345",
            bankName: "Heritage Bank",
            processingTime: "36 Hours",
            initiatedBy: "Admin"
          },
          adminActions: "Investigation Required"
        }
];

// Function to simulate fetching paginated transactions
export async function getTransactions({
  page,
  pageSize,
}: {
  page: number;
  pageSize: number;
}): Promise<ITransactionResponse> {
  const startIndex = (page - 1) * pageSize;
  const endIndex = startIndex + pageSize;

  return new Promise((resolve) =>
    setTimeout(() => {
      resolve({
        status: "success",
        message: "Mock data fetched successfully",
        data: {
          transactions: mockTransactions.slice(startIndex, endIndex),
          total: mockTransactions.length,
          page,
          pageSize,
        },
      });
    }, 500)
  );
}

export async function getSearchTransactions({
    page,
    pageSize,
    searchTerm
  }: {
    page: number;
    pageSize: number;
    searchTerm: string,
  }): Promise<ITransactionResponse> {
    const startIndex = (page - 1) * pageSize;
    const endIndex = startIndex + pageSize;
  
    return new Promise((resolve) =>
        setTimeout(() => {
          // Filter transactions by name or transactionId
          const filteredTransactions = mockTransactions.filter((transaction) =>
            transaction.user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            transaction.transactionId.toLowerCase().includes(searchTerm.toLowerCase()) 
          );
    
          resolve({
            status: "success",
            message: "Mock data fetched successfully",
            data: {
              transactions: filteredTransactions.slice(startIndex, endIndex),
              total: filteredTransactions.length,
              page,
              pageSize,
            },
          });
        }, 500)
      );
  }
  
