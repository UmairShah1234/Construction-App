import React from "react";

const data = [
  {
    srno: 2,
    site: "M/S.KHOJIMA CHEMICALWORKS.FACTORY AT PLOT NO.‘J’-52, TALOJA INDUSTRIAL, ESTATE, TALOJA,DIST.THANE.",
    area: "15,000.00 SFT",
    type: "FACTORY",
    value: "90 LAKH",
    consultant: "MR M.E. Goriwala",
  },
  {
    srno: 3,
    site: "M/S.COOPKING ENAMIL WAIRE MFG.CO. FACTORY & RESIDENTAPT.AT PLOTNO.100, 101AT PANCHAL UDYOGNAGAR, NANI DAMAN, DAMAN",
    area: "40,000.00 SFT",
    type: "FACTORY",
    value: "72 LAKH",
    consultant: "M/S.A.Z. VASI & CO",
  },

  {
    srno: 5,
    site: "BOHRA TRUST MASJID COMPLEX Complex at Alot,Vikramgarh,Ratlam,(M.P.)",
    area: "25,000.00 SFT",
    type: "NEW CONSTRUCTION & INTERIOR ETC",
    value: "1.8 CR",
    consultant: "M/s. Aesthetic Designs J.A.CHAHWALA",
  },
  {
    srno: 6,
    site: "M/S. CRYSTALINE EXPORTS LTD.133, MAROL CO.OP. IND. LTD.ANDHERI €, MUMBAI-400072",
    area: "8,000 SFT",
    type: "R.C.C EXTENTION FACTORY RENOVATION & REPAIR",
    value: "2.00 CR",
    consultant: "M/S.VORA & ASSOCIATES MR.ASHIT VORA",
  },

  {
    srno: 8,
    site: "H.A.HOUSE FATEHPUR SHEKHAWATI, DIST. SIKAR, RAJASTHAN",
    area: "18000.00 SFT",
    type: "NEW CONSTRUCTION BUNGLOW",
    value: "2.75 CR",
    consultant: "ARCHITECT MR.VINAYA K SAHASRABUDHE",
  },
  {
    srno: 9,
    site: "M/S DAWOODI BOHRA TRUST ,MAHESWAR, MP.",
    area: "26,000 SFT",
    type: "NEW CONSTRUCTION BUNGLOW",
    value: "3.00 CR",
    consultant: "ARCHITECT I.M. ASSOCIATES R.C.C MR. J.J KIKANI",
  },
  {
    srno: 10,
    site: "M/S.ASMITA SCHOOL WESTERN EXPRESS HIHGWAY JOGESHWARI (E), MUMBAI-400060.",
    area: "30,000 SFT",
    type: "NEW R.C.C WORK",
    value: "4.53 CR",
    consultant: "ARCHITECT ARCH-UNIQUE R.C.C M/S DAMBLE & THAKURDESAI",
  },
  {
    srno: 11,
    site: "M/S HINDUSTAN PENCIL PVT. LTD. FACTORY AT PLOT NO. 18,ACHHAD INDUSTRIALS ESTATE, DIST. THANE.",
    area: "NA",
    type: "REPAIRS & EXTENTION FACTORY",
    value: "24,000,00.00",
    consultant: "M/S.A.Z. VASI & CO",
  },
  {
    srno: 12,
    site: "M/S. KIRITI STATIONERY PVT. LTD.FACTORY AT PLOT NO. 1,ACHHAD INDUSTRIAL ESTATE, DIST.THANE",
    area: "NA",
    type: "REPAIRS & EXTENTION FACTORY",
    value: "28,000,00.00",
    consultant: "M/S.A.Z. VASI & CO",
  },
  {
    srno: 13,
    site: "M/S. KIRITI STATIONERY PVT. LTD. FACTORY AT PLOT NO. 18,ACHHAD INDUSTRIAL ESTATE, DIST THANE.",
    area: "NA",
    type: "REPAIRS & EXTENTION FACTORY",
    value: "24,000,00.00",
    consultant: "M/S.A.Z. VASI & CO",
  },
  {
    srno: 14,
    site: "M/S.KHOJIMA CHEMICAL WORKS.PLOT NO. ‘J’-52, TALOJA INDUSTRIAL, ESTATE, TALOJA, DIST.THANE",
    area: "NA",
    type: "REPAIRS & EXTENTION FACTORY",
    value: "32,00,000.00",
    consultant: "MR. M.E GORIAWALA",
  },
  {
    srno: 15,
    site: "M/S. THE HIMALAYA DRUG CO.OPP.SANGAM CINEMA, M. VASNJI ROAD, CHAKALA,ANDHERI (E),MUMBAI – 400059",
    area: "NA",
    type: "REPAIR & RENOVATION MEDICAL FACTORY",
    value: "1,25,00,000.00",
    consultant: "M/S.A.Z. VASI & CO.",
  },
  {
    srno: 16,
    site: "M/S.ZENITH TINS WORK LTD. AT PLOT NO. D- 140, M.I.D.C NERUL",
    area: "NA",
    type: "REPAR & RENOVATION FACTORY",
    value: "88,00,000.00",
    consultant: "M/S.A.Z. VASI & CO. ",
  },
  {
    srno: 17,
    site: "M/S.SOHBIZ STAGE MANG.PVT LTD.STRUCTURE REPAIR133/135, SHERIF DEVJISTREET, MUMBAI – 400003.",
    area: "NA",
    type: "STRUCTURE REPAIR DECORATIVE CAMPONY",
    value: "18,00,000.00",
    consultant: "MR. RIZVAN",
  },
  {
    srno: 18,
    site: "M/S. SANCEE AROMATIC,Y-4, OKHLA INDESTRIAL AREA,PHASE 2, NEW DELHI",
    area: "NA",
    type: "REPAIR AND RCC WORK, INTERIOR. FACTORY AND OFFICE, FARM HOUSE",
    value: "64,00,000.00",
    consultant: "MR.VINAYAK SAHASRABUDHE",
  },
  {
    srno: 19,
    site: "M/S.KHATRAKYA SAMAJ,VANMALI HALL, DADER (w),MUMBAI",
    area: "NA",
    type: "REPAIR/WATER PROOFING WORK.",
    value: "8,50,000.00",
    consultant: "MR. A.R. NAIK.",
  },
  {
    srno: 20,
    site: "NEW NAVYUG CHS.LTD.10/18,OLD HANUMANLANE, KALBADEVI,MUMBAI-400 002",
    area: "NA",
    type: "REPAIR AND RENOVATION COMERCIAL BUILDING",
    value: "1.50 CR",
    consultant: "M/S.A.Z. VASI & CO",
  },
  {
    srno: 21,
    site: "M/S. MAY- ROSE OPP. ST LAWRANCE SCHOOL, MAROL ANDHERI (E), MUMBAI 59",
    area: "NA",
    type: "REPAIR AND RESTRANTHING CHAMICAL REPAIR ETC",
    value: "9,00,000.00",
    consultant: "MR.VINAYAK SAHASRABUDHE",
  },
  {
    srno: 22,
    site: " GITANJALI BUILDING Pandit Nursing Home. Matunga (E), Mumbai ",
    area: "NA",
    type: "REPAIR AND RESTRANTHING CHAMICAL REPAIR ETC",
    value: "6,00,000.00",
    consultant: "Mr. S.PANDIT",
  },
  {
    srno: 23,
    site: "M/S. KOHINOOR INDUSTRIAL ESTATE OPP. PHEONIX MILL,LOWER PREL,MUMBAI-4000 13",
    area: "NA",
    type: "COMERCIAL COMPLEX",
    value: "8,00,000.00",
    consultant: "MR. ASIT VORA",
  },
  {
    srno: 24,
    site: "GOREGAON SPORTS CLUB,CIVIL & INTERIOR WORK ATLINK RAOD, MALAD (W),MUMBAI-400 064",
    area: "NA",
    type: "R.C.C & CIVIL WORK FOR A’ BLOCK, OTHERBASKIT BALL,FIFLESHOOTING ETC.",
    value: "55,00,000.00 PENEL CONTRACTOR",
    consultant: "M/S. PRANJPE DESHPANDE & ASSO. MR. AMISH SHAH",
  },
  {
    srno: 25,
    site: "M/S. CRYSTALINE EXPORTS LTD. 133, MAROL CO.OP. IND. LTD. ANDHERI (E), MUMBAI-400 072",
    area: "NA",
    type: "FACTORY RENOVATION & REPAIR",
    value: "9,50,000.00",
    consultant: "MR. DILIP PHULKAR",
  },
  {
    srno: 26,
    site: "M/s.RAJ INDUSTRIES COMPLEX, Military Road,Marol,Andheri East, Mumbai –400 059",
    area: "NA",
    type: "REPAIR WORK",
    value: "50,00,000.00",
    consultant: "Mr. Razzaq(Manager)",
  },
  {
    srno: 27,
    site: "M/S. CRYSTALINE EXPORTS LTD. 133, MAROL CO.OP. IND.LTD. ANDHERI (E), MUMBAI-400 072.",
    area: "NA",
    type: "R.C.C. EXTENTION FACTORY RENOVATION &REPAIR",
    value: "2.00 CRORE",
    consultant: "M/S.VORA & ASSOCIATES MR. ASHIT VORA",
  },
  {
    srno: 28,
    site: "M/s. VIJAY CONDOMINIUM MEHRA COMPOUND,ANDHERI KURLA ROAD,SAKINAKA, MUMBAI-400072",
    area: "NA",
    type: "R.C.C.ROAD PAVING and REPAIR WORK",
    value: "3.00 CRORE",
    consultant: "M/S NEO-TECH CONSULTING",
  },
  {
    srno: 29,
    site: "M/S DIVINE CHILD HIGH SCHOOL, ANDHEI (E), MUMBAI -400093",
    area: "NA",
    type: "REPAIR SCHOOL BUILDING",
    value: "3.00 CRORE",
    consultant: "ARCHITECT MR.VINAYAK SAHASRABUDHE",
  },
  {
    srno: 30,
    site: "M/S. CRYSTALINE EXPORTS LTD ANDHERI (E) MUMBAI 400 059 ",
    area: "NA",
    type: "FIRE FIGHTING TANK / EXTERNAL PAINTING",
    value: "20.00LAKH",
    consultant: "VORA ASSOCIATE (MR. ASHIT VORA)",
  },
  {
    srno: 31,
    site: "M/S. KOHINOOR INDUSTRIAL ESTATE 164, TULSI PIPE ROAD, LOWER PAREL (W), MUMBAI 400013",
    area: "NA",
    type: "MAJOR REPAIR EXTERNAL & INTERNAL WATERPROOFING ",
    value: "34.20LAKH",
    consultant: "Mr. JEEVAN JADHAV RCC CONSULTANT",
  },
  {
    srno: 32,
    site: "M/S. SILVER POINT PRESS PVT. LTD. A, 403, TTC INDUSTRIAL  AREA MIDC, MAHAPE, NAVI MUMBAI 400709",
    area: "NA",
    type: "MAJOR REPAIR EXTERNAL & INTERNAL WATERPROOFING ",
    value: "42.50LAKH",
    consultant: "Mr. JEEVAN JADHAV RCC CONSULTANT",
  },
];

const ProjectTable = () => {
  return (
    <div>
      <table className="table table-bordered border-dark shadow table-hover border">
        <thead className="bg-danger">
          <tr>
            <th scope="col">Sr No</th>
            <th scope="col">Site Location</th>
            <th scope="col">Area</th>
            <th scope="col">Type</th>
            <th scope="col">Value</th>
            <th scope="col">Consultant</th>
          </tr>
        </thead>
        <tbody>
          {data.map((d) => {
            return (
              <tr key={d.srno}>
                <th scope="row">{d.srno}</th>
                <td>{d.site}</td>
                <td>{d.area}</td>
                <td>{d.type}</td>
                <td>{d.value}</td>
                <td>{d.consultant}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ProjectTable;
