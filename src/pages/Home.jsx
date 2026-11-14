import CompassButton from "../components/wedding/CompassButton";
import Countdown from "../components/wedding/Countdown";
import EventWayfinder from "../components/wedding/EventWayfinder";
import FindingUs from "../components/wedding/FindingUs";
import InvitationArtwork from "../components/wedding/InvitationArtwork";
import InvitationHero from "../components/wedding/InvitationHero";
import PhotoGallery from "../components/wedding/PhotoGallery";
import Rsvp from "../components/wedding/Rsvp";
import SiteFooter from "../components/wedding/SiteFooter";
export default function Home() { return <main className="min-h-screen bg-[#F7F9F6]"><InvitationHero/><Countdown/><EventWayfinder/><FindingUs/><InvitationArtwork/><PhotoGallery/><Rsvp/><SiteFooter/><CompassButton/></main>; }
