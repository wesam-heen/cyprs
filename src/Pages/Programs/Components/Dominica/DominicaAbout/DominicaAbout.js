import AboutPrograms from "../../../AboutPrograms/AboutPrograms";
import Table from "../../../Table/Table";
const table = [
  "Rousseau ",
  "English",
  "261 square km",
  "Parliamentary system and the Commonwealth Kingdom",
  "72,398",
  "East Caribbean Dollar",
];
const DominicaAbout = () => {
  return (
    <>
      <AboutPrograms
        country="Dominica"
        text="Dominica launched the Citizenship by Investment Program in 1993 to become an investment destination for individuals wishing to secure the future of their families by obtaining a second passport. You can apply for a Dominica passport either by making a non-refundable financial donation or by investing in real estate. The Dominica citizenship by investment program is characterized by its easy procedures, intense security investigations, and return on investment, which made it one of the strongest investment programs with a second passport."
      />
      <Table table={table} />
    </>
  );
};

export default DominicaAbout;
