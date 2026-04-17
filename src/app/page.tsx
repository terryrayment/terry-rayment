import { getWorksForHire } from "@/data/works";
import { HomeClient } from "./home-client";

export default function ForHirePage() {
  return <HomeClient works={getWorksForHire()} />;
}
