import AboutPrograms from "../../../AboutPrograms/AboutPrograms";
import Table from "../../../Table/Table";
import Frame from "../../../../../components/frame/Frame";
const table = [
  "Basseterre ",
  "English",
  "261 sq. km",
  "Parliamentary Democracy & Part of the Commonwealth",
  "54,031",
  "East Caribbean Dollar",
];
const NevisAbout = () => {
  return (
    <>
    <Frame text="&emsp;  St. Kitts and Nevis" />
    <AboutPrograms
    text="Saint Kitts and Nevis is one of the most beautiful Caribbean islands and is a convenient location for businessmen to relax in picturesque nature. Saint Kitts and Nevis launched the Citizenship by Investment Program in 1984, making it the world’s first program of its kind. The state grants life citizenship to investors for a period of 6-9 months. It has become the first choice for any investor looking for a second passport by investing in government-approved real estate or through direct support to the Economic Development Fund in St. Kitts and Nevis."
  />
  <Table table={table} />
    </>
  )
}

export default NevisAbout