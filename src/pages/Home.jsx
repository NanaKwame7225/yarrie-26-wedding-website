import CompassButton from "../components/wedding/CompassButton";
import Countdown from "../components/wedding/Countdown";
import EventWayfinder from "../components/wedding/EventWayfinder";
import FindingUs from "../components/wedding/FindingUs";
import InvitationHero from "../components/wedding/InvitationHero";
import Rsvp from "../components/wedding/Rsvp";
import SiteFooter from "../components/wedding/SiteFooter";
import CouplePortrait from "../components/wedding/CouplePortrait";
export default function Home() { return <main className="wedding-site min-h-screen bg-[#F7F9F6]"><InvitationHero/><CouplePortrait/><Countdown/><EventWayfinder/><FindingUs/><Rsvp/><SiteFooter/><CompassButton/></main>; }
