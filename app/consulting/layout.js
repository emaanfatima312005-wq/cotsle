import ConsultingNavbar from "@/components/consulting/ConsultingNavbar";
import ConsultingFooter from "@/components/consulting/ConsultingFooter";
import ConsultingAIAssistant from "@/components/consulting/ConsultingAIAssistant";

export default function ConsultingLayout({ children }) {
  return (
    <>
      <ConsultingNavbar />

      <main>
        {children}
      </main>

      <ConsultingFooter />

      {/* Consulting AI Assistant - appears throughout Consulting */}
      <ConsultingAIAssistant />
    </>
  );
}