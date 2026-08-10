import ConsultingHero from "@/components/consulting/ConsultingHero";
import ConsultingOverview from "@/components/consulting/ConsultingOverview";
import ConsultingServices from "@/components/consulting/ConsultingServices";
import ConsultingApproach from "@/components/consulting/ConsultingApproach";
import ConsultingCTA from "@/components/consulting/ConsultingCTA";

export default function ConsultingPage() {
  return (
    <>
      <ConsultingHero />
      <ConsultingOverview />
      <ConsultingServices />
      <ConsultingApproach />
      <ConsultingCTA />
    </>
  );
}