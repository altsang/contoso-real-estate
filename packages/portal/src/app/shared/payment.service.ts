import { Injectable } from "@angular/core";
import { User, Payment } from "../../types"; // Corrected import for User and Payment

@Injectable({
  providedIn: "root",
})
export class PaymentService {
  async getPaymentsByUser(user: User, { limit = 10, offset = 0 } = {}): Promise<Payment[]> {
    const response = await fetch(`/api/payments?userId=${user.id}&limit=${limit}&offset=${offset}`);
    if (response.status === 200) {
      return (await response.json()).payments;
    }
    throw new Error("Error while fetching payments");
  }
}
