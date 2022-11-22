import AboutPrograms from "../../../AboutPrograms/AboutPrograms";
import Table from "../../../Table/Table";
import Frame from "../../../../../components/frame/Frame";
const table = [
  "Port Vila ",
  "English, French, and Bislama",
  "12,190 sq. km",
  "Representative Parliamentary System",
  "323,142",
  "Vatu (VUV) ",
];
const VanuatuAbout = () => {
  return (
    <>
    <Frame text="&emsp;&emsp;&emsp; &ensp;Vanuatu" />
    <AboutPrograms
    text="The Republic of Vanuatu is a beautiful nation stretching across the South Pacific Ocean, located in the west of Fiji, four hours by plane from the east coast of Australia. Vanuatu is a South Pacific Ocean nation made up of roughly 80 islands that stretch 1,300 kilometers. The islands offer scuba diving at coral reefs, underwater caverns, and wrecks. 
    The Vanuatu Citizenship Program (Development Support Program - DSP) was created by the Government of Vanuatu in 2017. Vanuatu passports have the longest validity of 10 years for all family members regardless of their ages.
     "
  />
  <Table table={table} />
    </>
  )
}

export default VanuatuAbout