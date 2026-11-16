// Event details for the independent GitHub Pages site.
export const couple = {
  groom: { first: "Agya Yaw", family: "ASOMANI" },
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
  venue: "Engagement Venue", area: "Jagbele Road, Abossey Okai",
  city: "Accra, Greater Accra Region, Ghana", postal: "G73623854",
  mapsQuery: "5.559677149455824,-0.240815763639917",
  mapsUrl: "https://www.ghanapostgps.com/map/#G73623854",
};
export const directionsUrl = (event) => event.mapsUrl || (event.mapsQuery
  ? `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(event.mapsQuery)}` : null);
export const mapEmbedUrl = (event) => event.mapsQuery
  ? `https://maps.google.com/maps?q=${encodeURIComponent(event.mapsQuery)}&z=15&output=embed` : null;
export const rsvpContacts = [
  { name: "Andrew", phone: "0244693519" },
  { name: "Stanley", phone: "0554366025" },
];
