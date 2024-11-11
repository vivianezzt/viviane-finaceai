import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import Navbar from "../_components/Navbar";

const SubscriptionPage = async () => {
  const { userId } = await auth();
  if (!userId) {
    redirect("/login");
  }
  return <Navbar />;
};
export default SubscriptionPage;
