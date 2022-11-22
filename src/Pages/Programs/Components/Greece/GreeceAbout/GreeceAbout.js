import AboutPrograms from "../../../AboutPrograms/AboutPrograms";
import Table from "../../../Table/Table";
const table = [
  "Athens",
  "Greek and English",
  "131,957 sq. km",
  "Democratic Republic",
  "10.30 million",
  "Euro",
];
const GreeceAbout = () => {
  return (
    <>
    <AboutPrograms
    country="Greece"
    text="Greece is located in the southernmost part of the Balkans. Its topography combines the high mountains in the interior of the country and more than 1,400 islands, the largest of which is Crete; The Golden Visa Program in Greece was launched in 2013 and grants a 5-year residency to applicants and all members of their families including in the application within the Greek territory; The Greek passport is the sixth most powerful passport in the world.
    "
  />
  <Table table={table} />
    </>
  )
}

export default GreeceAbout