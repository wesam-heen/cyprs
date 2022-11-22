import AboutPrograms from "../../../AboutPrograms/AboutPrograms";
import Table from "../../../Table/Table";
import Frame from "../../../../../components/frame/Frame";
const table = [
  "Castries ",
  "English",
  "617 sq. km",
  "Parliamentary System & one of the Realms of the Commonwealth",
  "185,561",
  "East Caribbean Dollar. ",
];
const SaintAbout = () => {
  return (
    <>
    
    <Frame text="&emsp;&emsp;&ensp;&ensp;    Saint Lucia" />
    <AboutPrograms
    text="Saint Lucia is located in the Caribbean Sea, with great landscapes overlooking the breathtaking Western Mountains.  It is full of unrivaled landmarks imbued with the natural beauty of the Caribbean Islands. Investors can obtain Saint Lucia citizenship by investing either through a one-time financial donation to the National Economic Fund or by investing in a government-approved property. "
  />
  <Table table={table} />
    </>
  )
}

export default SaintAbout