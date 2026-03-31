import { WorkGrid } from "@/components/work-grid";
import { getWorksForHire } from "@/data/works";

export default function ForHirePage() {
  return <WorkGrid works={getWorksForHire()} />;
}
