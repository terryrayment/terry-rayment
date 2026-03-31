import { WorkGrid } from "@/components/work-grid";
import { getWorksForFun } from "@/data/works";

export default function ForFunPage() {
  return <WorkGrid works={getWorksForFun()} variant="fun" />;
}
