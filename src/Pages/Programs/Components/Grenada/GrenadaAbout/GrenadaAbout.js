import AboutPrograms from "../../../AboutPrograms/AboutPrograms";
import Table from "../../../Table/Table";
const table = [
  "St. Jorge  ",
  "English",
  "344 sq. km",
  "Parliamentary system and a Commonwealth kingdom",
  "113,694",
  "East Caribbean Dollar",
];
const GrenadaAbout = () => {
  return (
    <>
    <AboutPrograms
    country="Grenada"
    text="Grenada is characterized by the beauty of its green mountains and clear blue beaches. It is about 140 km from the northern coast of Venezuela. This country consists of a few small islands. The Citizenship by Investment Program in Grenada was launched in 2013 and is the only program in the Caribbean Area that allows entry to China, all Schengen countries, the United Kingdom, and Singapore without the need for a visa.
    Grenada passport ranks 39th among the most powerful passport in the world.
    "
  />
  <Table table={table} />
    </>
  )
}

export default GrenadaAbout