// Event details and local media assets for the independent GitHub Pages site.
const asset = (name) => `${import.meta.env.BASE_URL}images/${name}`;
export const couple = {
  groom: { first: "Aggya Yaw", family: "ASOMANI" },
  bride: { first: "Harriet Yahaya", family: "SAAKA" },
  families: "Asomani & Saaka",
  hashtag: "#YARRIE26",
};
export const wedding = {
  id: "wedding", kicker: "The Wedding", rite: "The Holy Union",
  day: "28", monthYear: "NOV 2026", time: "11:00 AM",
  isoDate: "2026-11-28T11:00:00Z", dateLong: "Saturday, 28 November 2026",
  venue: "Sweet Life International Ministries",
  area: "Bubiashie Atico, Last Stop — near Tuna House",
  city: "Accra, Ghana", postal: "GA-398-2268",
  mapsQuery: "Sweet Life International Ministries, Bubiashie Atico, Accra, Ghana",
};
export const engagement = {
  id: "engagement", kicker: "The Engagement", rite: "Where it all begins",
  day: "26", monthYear: "NOV 2026", time: "10:00 AM",
  isoDate: "2026-11-26T10:00:00Z", dateLong: "Thursday, 26 November 2026",
  venue: "Destiny Transformation Centre", area: "Eduardo Mohdlana Road",
  city: "Accra, Ghana", postal: "",
  mapsQuery: "Destiny Transformation Centre, Eduardo Mohdlana Rd, Accra, Ghana",
};
export const directionsUrl = (event) => event.mapsQuery
  ? `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(event.mapsQuery)}` : null;
export const mapEmbedUrl = (event) => event.mapsQuery
  ? `https://maps.google.com/maps?q=${encodeURIComponent(event.mapsQuery)}&z=15&output=embed` : null;
export const rsvpContacts = [
  { name: "Andrew", phone: "0244693519" },
  { name: "Stanley", phone: "0554366025" },
];
export const gallery = [
  { slot: "cocktail", title: "Golden hour, our hands", credit: "The rings · Accra 2026", src: asset("rings.png"), alt: "Two hands clasped with gold rings, emerald green fabric around the wrists" },
  { slot: "headlight", title: "White roses, gold ribbon", credit: "The blooms", src: asset("bouquet.png"), alt: "Bridal bouquet of white roses and mustard blooms tied with emerald silk" },
  { slot: "portrait", title: "Hand in hand, Bubiashie", credit: "#YARRIE26", src: asset("couple-garden.png"), alt: "Couple walking hand in hand along a palm-lined garden path" },
  { slot: "aloe", title: "The table we set", credit: "Reception details", src: asset("table-details.png"), alt: "Emerald tablecloth with mustard gold cutlery, glassware and white flowers" },
  { slot: "wheel", title: "Dancing under the lights", credit: "Accra 2026", src: asset("first-dance.png"), alt: "Couple dancing at an outdoor garden reception beneath warm string lights" },
];
export const invitationArtwork = asset("invitation.jpg");
