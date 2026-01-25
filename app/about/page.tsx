import FaqSection from "@/components/LandingSections/Faqs";
import Header from "@/components/LandingSections/Header";
import ClickUpFooter from "@/components/LandingSections/ClickUpFooter";
import PeopleBackingSection from "@/components/AboutSections/BackingPeople";
import AboutIntroSection from "@/components/AboutSections/AboutIntro";
import MeetTheTeamSection from "@/components/AboutSections/MeetTheTeam";
import AboutMissionSection from "@/components/AboutSections/AboutMission";

export default function AboutPage() {
  return (
    <div>
      <Header />
      <AboutIntroSection />
      <AboutMissionSection />
      <MeetTheTeamSection />
      <PeopleBackingSection />
      <FaqSection />
      <ClickUpFooter />
    </div>
  );
}
