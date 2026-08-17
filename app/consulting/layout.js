import ConsultingNavbar from "@/components/consulting/ConsultingNavbar";
import ConsultingFooter from "@/components/consulting/ConsultingFooter";

export default function ConsultingLayout({ children }) {
  return (
    <>
      <ConsultingNavbar />

      <main>
        {children}
      </main>

      <ConsultingFooter /> 
    </>
  );
}