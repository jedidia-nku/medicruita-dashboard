// /* eslint-disable @typescript-eslint/explicit-function-return-type */
// import axios from "axios";
// import type {
//   ILoginResponse,
//   ILoginPayload,
//   IStaffLoginPayload,
// } from "../models/auth";
// import API_ENDPOINTS from "@/constants/api";

// export function login(payload: ILoginPayload) {
//   return axios.post<ILoginResponse>(`${API_ENDPOINTS.AUTH.LOGIN}`, payload);
// }
// // export async function login(payload: ILoginPayload) {
// //   return axios.post<ILoginResponse>(
// //     `${API_ENDPOINTS.AUTH.LOGIN}`,
// //     payload
// //   );
// //  }

// export async function staffLogin(payload: IStaffLoginPayload) {
//   const response = await axios.post<ILoginResponse>(
//     `/auth/login/staff`,
//     payload
//   );
//   return response.data;
// }
