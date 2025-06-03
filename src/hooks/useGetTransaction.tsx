import { useQuery } from "@tanstack/react-query";
import { fetchTransactions, searchTransactions } from "../services/transactions/getTransactions";

export function useGetTransactionsQuery(page: number, pageSize: number)  {
    return useQuery({
        queryKey: ["Transactions", page, pageSize],
        queryFn: () => fetchTransactions(page, pageSize),
    });
};


export function useSearchTransactionsQuery(page: number, pageSize: number, searchTerm: string) {
    return useQuery({
      queryKey: ["SearchTransactions", page, pageSize, searchTerm],
      queryFn: () => searchTransactions(page, pageSize, searchTerm),
      enabled: !!searchTerm, 
    });
  }