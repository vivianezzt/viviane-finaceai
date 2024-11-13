"use client"
import { Button } from "@/app/_components/ui/button";
import { createStripeCheckout } from "../_actions/create-stripe-checkout";
import { loadStripe } from "@stripe/stripe-js";
import { useUser } from "@clerk/nextjs";

export const AcquirePlanButton = () => {
  const {user} = useUser()
  const handleAcquirePlanClick = async () => {
     const { sessionId } = await createStripeCheckout();
    if (!process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY) {
      throw new Error("Stripe publishable key not found");
    }
    const stripe = await loadStripe(
      process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY,
    );
    if (!stripe) {
      throw new Error("Stripe not found");
    }
    await stripe.redirectToCheckout({ sessionId });
  }
  const hasPremiumPlan = user?.publicMetadata.subscriptionPlan === "premium"
  return (
    <Button 
    className="w-full rounded-full font-bold" 
    onClick={handleAcquirePlanClick}
    variant={hasPremiumPlan ? 'link' : 'primary'}
    >
      {hasPremiumPlan ? 'Gerenciar Plano' : 'Adquirir Plano'}
    </Button>
  )
}