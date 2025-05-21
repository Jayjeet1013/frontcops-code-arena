
import { LandingNavbar } from "@/components/LandingNavbar";
import { LandingHero } from "@/components/LandingHero";
import { LandingFeatures } from "@/components/LandingFeatures";
import { LandingFooter } from "@/components/LandingFooter";

export default function Index() {
  return (
    <div className="bg-bg min-h-screen flex flex-col">
      <LandingNavbar />
      <main className="flex-1 flex flex-col">
        <LandingHero />
        <LandingFeatures />
      </main>
      <LandingFooter />
    </div>
  )
}
