import AboutPrograms from "../../../AboutPrograms/AboutPrograms";
import Table from "../../../Table/Table";
import Frame from "../../../../../components/frame/Frame";
const table = [
  "St. John's ",
  "English",
  "440 sq. km",
  "Parliamentary Democracy under Constitutional Monarchy",
  "99,753",
  "East Caribbean Dollar",
];
const AntiguaAbout = () => {
  return (
    <>
    <Frame text="&emsp;Antigua and Barbuda" />
    <AboutPrograms
    text="Antigua and Barbuda is an island nation well-known for its reef-lined beaches, rich scenery landscapes, and beautiful lush green forests. Antigua and Barbuda is located in the Caribbean. The Antigua and Barbuda Citizenship by Investment Program was launched in 2014. The program provides applicants with the opportunity to obtain second citizenship within 6 to 9 months."
  />
  <Table table={table} />
    </>
  )
}

export default AntiguaAbout