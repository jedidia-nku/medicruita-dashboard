
import { getSearchTransactions, getTransactions } from "../../transactionData"; 

export async function fetchTransactions(page: number, pageSize: number) {
    try {
        const response = await getTransactions({ page, pageSize });
        console.log("Fetched Transactions:", response);
        return response;
    } catch (error) {
        console.error("Error fetching transactions:", error);
    }
}

export async function searchTransactions(page: number, pageSize: number, searchTerm: string) {
    try {
        const response = await getSearchTransactions({ page, pageSize, searchTerm });

        if (!response) {
            throw new Error("No response received from getTransactions");
        }

        console.log("Fetched Transactions:", response);
        return response;
    } catch (error) {
        console.error("Error fetching transactions:", error);
        throw error; 
    }
}




































// import axios from "axios";
// import { ITransactionResponse } from "../../model/product";
// import { getTransactions } from "../../transactionData";

// export async function getTransactions({
//   page,
//   pageSize
// }: { 
//   page: number; 
//   pageSize: number;
// }): Promise<ITransactionResponse> {
//   try {
//     const response = await axios.get<ITransactionResponse>(
//       getTransactions()
//       { params: { page, pageSize } }
//     );

//     if (response.data?.status === "success") {
//       return response.data;
//     } else {
//       throw new Error(response.data?.message || "Failed to fetch transactions");
//     }
//   } catch (error) {
//     console.error("Error fetching transactions:", error);
//     throw error;
//   }
// }
