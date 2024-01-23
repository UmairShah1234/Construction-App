import React from "react";

const data = [
  {
    srno: 1,
    site: "MR.RAMAN.K. SHETH BUNGALOW AT PLOT NO.153,MHADA WORLD, BEHIND TELEPHONE EXCHANGE,VERSOVA,ANDHERI (W)",
    area: "12,000.00 SFT",
    type: "BUNGLOW",
    value: "1.50 CR",
    consultant: "MR Satish Rawool",
  },
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
    srno: 4,
    site: "M/S. YUSUF TRUST.MOSQUE FOR “MAHAJIANI DARGAH” MOSQUE TRUST, WORLI, MUMBAI-",
    area: "16,000.00 SFT",
    type: "MOSQUE",
    value: "1.20 CR",
    consultant: "MR Manohar.E.SHETYE",
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
    srno: 7,
    site: "M/S.MUTHA CONSTRUCTION SAHAD, TALUKA, KALYAN (W)",
    area: "2.25 LAKH SFT",
    type: "NEW RESIDNTIAL BUILDING PROJECT",
    value: "40.00 CR",
    consultant: "SHOBHANA DESHPANDE",
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
    site: "Vanvasi Kalyan Ashram Rani Durgavati Girls Hostel BuildingSilvasa",
    area: "28,000 SFT",
    type: "Hostel Building Completed in 2017-18",
    value: "3.28 CR",
    consultant: "ARCHITECT MR.VINAYAK SAHASRABUDHE",
  },
];

const ProjectTable = () => {
  return (
    <div>
      <table className="table table-bordered border-dark table-hover border">
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
