import ConsultingHero from "@/components/consulting/ConsultingHero";
import ConsultingOverview from "@/components/consulting/ConsultingOverview";
import ConsultingServices from "@/components/consulting/ConsultingServices";
import ConsultingApproach from "@/components/consulting/ConsultingApproach";
import ConsultingWhyChoose from "@/components/consulting/ConsultingWhyChoose";
import ConsultingGovernance from "@/components/consulting/ConsultingGovernance";

export default function ConsultingPage() {
  return (
    <>
      <ConsultingHero />
      <ConsultingOverview />
      <ConsultingServices />
      <ConsultingApproach />
      <ConsultingWhyChoose />
      <ConsultingGovernance />
    </>
  );
}