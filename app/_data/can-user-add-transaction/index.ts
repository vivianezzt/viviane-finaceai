import { auth, clerkClient } from "@clerk/nextjs/server";
import { getCurrentMonthTransactions } from "../get-current-month-transactions";

export const canUserAddTransaction = async () => {
    const { userId } = await auth();

    if (!userId) {
        throw new Error("Unauthorized");
    }

    const user = await clerkClient().users.getUser(userId);
    if (user.publicMetadata.subscriptionPlan === "premium") {
        return true; // Usuário premium pode adicionar sem limites
    }

    // Obtem a contagem de transações do usuário
    const currentMonthTransactions = await getCurrentMonthTransactions();
    if (currentMonthTransactions >= 10) {
        return false; // Limite atingido
    }

    return true;
};