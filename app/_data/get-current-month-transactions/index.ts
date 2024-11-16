import { db } from "@/app/_lib/prisma";
import { auth } from "@clerk/nextjs/server";
import { endOfMonth, startOfMonth } from "date-fns";

export const getCurrentMonthTransactions = async () => {
    const { userId } = await auth();
    if (!userId) {
        throw new Error("Unauthorized");
    }

    // Retorna a contagem de transações do usuário no mês atual
    return db.transaction.count({
        where: {
            userId,
            createdAt: {
                gte: startOfMonth(new Date()),
                lt: endOfMonth(new Date())
            }
        }
    });
};
