import HomeAboutUs from "./HomeAboutUs";
import HomeContact from "./HomeContact";
import HomeNavHeader from "./HomeNavHeader";
import HomeSimpleSteps from "./HomeSimpleSteps";
import HomeThreeColumns from "./HomeThreeColumns";
import HomeWhoWeHelp from "./HomeWhoWeHelp";

export default function Home() {
  return (
    <>
      <HomeNavHeader />
      <HomeThreeColumns />
      <HomeSimpleSteps />
      <HomeAboutUs />
      <HomeWhoWeHelp />
      <HomeContact />
    </>
  );
}
