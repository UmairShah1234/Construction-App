import { AnimatePresence, motion } from "framer-motion";
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
    site: "M/S. YUSUF TRUST.MOSQUE FOR “MAHAJIANI DARGAH” MOSQUE TRUST, WORLI, MUMBAI-",
    area: "16,000.00 SFT",
    type: "MOSQUE",
    value: "1.20 CR",
    consultant: "MR Manohar.E.SHETYE",
  },
  {
    srno: 3,
    site: "BOHRA TRUST MASJID COMPLEX Complex at Alot,Vikramgarh,Ratlam,(M.P.)",
    area: "25,000.00 SFT",
    type: "NEW CONSTRUCTION & INTERIOR ETC",
    value: "1.8 CR",
    consultant: "M/s. Aesthetic Designs J.A.CHAHWALA",
  },
  {
    srno: 4,
    site: "M/S.MUTHA CONSTRUCTION SAHAD, TALUKA, KALYAN (W)",
    area: "2.25 LAKH SFT",
    type: "NEW RESIDNTIAL BUILDING PROJECT",
    value: "40.00 CR",
    consultant: "SHOBHANA DESHPANDE",
  },
  {
    srno: 4,
    site: "H.A.HOUSE FATEHPUR SHEKHAWATI, DIST. SIKAR, RAJASTHAN",
    area: "18000.00 SFT",
    type: "NEW CONSTRUCTION BUNGLOW",
    value: "2.75 CR",
    consultant: "ARCHITECT MR.VINAYA K SAHASRABUDHE",
  },
  {
    srno: 5,
    site: "M/S DAWOODI BOHRA TRUST ,MAHESWAR, MP.",
    area: "26,000 SFT",
    type: "NEW CONSTRUCTION BUNGLOW",
    value: "3.00 CR",
    consultant: "ARCHITECT I.M. ASSOCIATES R.C.C MR. J.J KIKANI",
  },
  {
    srno: 6,
    site: "M/S.ASMITA SCHOOL WESTERN EXPRESS HIHGWAY JOGESHWARI (E), MUMBAI-400060.",
    area: "30,000 SFT",
    type: "NEW R.C.C WORK",
    value: "4.53 CR",
    consultant: "ARCHITECT ARCH-UNIQUE R.C.C M/S DAMBLE & THAKURDESAI",
  },
  {
    srno: 7,
    site: "Vanvasi Kalyan Ashram Rani Durgavati Girls Hostel BuildingSilvasa",
    area: "28,000 SFT",
    type: "Hostel Building Completed in 2017-18",
    value: "3.28 CR",
    consultant: "ARCHITECT MR.VINAYAK SAHASRABUDHE",
  },
  {
    srno: 8,
    site: "M/S.VITHAL COURT APT.TO VITHAL COURT APT. C.H.S.LTD.CEMPS CORNER,MUMBAI",
    area: "NA",
    type: "REPAIRS & EXTENTION RESIDENTINAL sBUILDING",
    value: "15,00,000.00",
    consultant: "MR. M.E.GORIAWALA",
  },
  {
    srno: 9,
    site: "M/S.DHARMAKSHETRA NO.3 C.H.S.LTD. DHARMAKSHETRA NO.3 C.H.S.LTD. FACTORY LANE, SHIMPOLI ROAD, BORIWALI(W).",
    area: "NA",
    type: "EXTENTION,REPAIRS & RENOVATION RESIDENTINAL BUILDING",
    value: "22,00,000.00",
    consultant: "MR. DILIP. T. DAVE",
  },
  {
    srno: 10,
    site: "M/S.DHARMAKSHETRA NO.4 C.H.S. LTD. DHARMAKSHETRA NO.4 C.H.S.LTD.FACTORY LANE,SHIMPOLI ROAD, BORIWALI(W)",
    area: "NA",
    type: "REPAIRS & RENOVATION RESIDENTINAL BUILDING",
    value: "4,50,000.00",
    consultant: "MR. K.G.DESAI",
  },
  {
    srno: 11,
    site: "M/S.IMAMIA MASJID.MOSQUE FOR MASJID AT DONGARI, MUMBAI-8",
    area: "NA",
    type: "MOSQUE",
    value: "12,00,000.00",
    consultant: "M/S.A.Z. VASI & CO",
  },
  {
    srno: 12,
    site: "ONGARI POLICE STATION CONSTRUCTION OF “SHIV MANDIR” IN DONGRI POLICE STATION MUMBAI- 3.",
    area: "NA",
    type: "TEMPLE",
    value: "18,00,000.00",
    consultant: "MR. MANOHAR E SHETYE",
  },
  {
    srno: 13,
    site: "M/S.HARI MASJID.EXTENTION OF FLOOR FORMASJID AT MADANPURA,MUMBAI-2",
    area: "NA",
    type: "EXTENTION OF FLOOR FOR MOSQUE",
    value: "12,00,000.00",
    consultant: "M/S.A.Z. VASI & CO.",
  },
  {
    srno: 14,
    site: "M/S. DAWAT PAROPARTYS CONSTRUCTION OF WATER TOWER TANK, CAPACITY OF 1.25 LAKH LITERS, DANDI VILLAGE, NAVSARI, (GUJRAT)",
    area: "NA",
    type: "CONSTRUCTION OF WATERTOWER TANK,CAPACITY OF1.25 LAKHLITERS",
    value: "12,00,000.00",
    consultant: "MR.M.E.GORIAWALA",
  },
  {
    srno: 15,
    site: "DR.T.D.NADKARNI.REPAIR & RENOVATION ATMAHADEO KUTEER, PLOTNO.A-135, JAIN SOCIETY,BEHIND SION HOSPITAL,SION",
    area: "NA",
    type: "RESIDENTINAL BUILDING",
    value: "17,00,000.00",
    consultant: "MR. R. M. PATHAK",
  },
  {
    srno: 16,
    site: "C-2, KAVERI LOKGRAM CHS. LTD., LOKGRAM, KALYAN (E),421306.",
    area: "NA",
    type: "REPAIR & RENOWATION RESIDENTINAL BUILDING",
    value: "4,00,000.00",
    consultant: "MR. SABU JHON CHAIRMAN",
  },
  {
    srno: 17,
    site: "HEMANI NEWAS,S.V.ROAD, SANTACRUZ(W),MUMBAI",
    area: "NA",
    type: "REPAIR & RENOWATION RESIDENTINAL BUILDING",
    value: "18,51,000.00",
    consultant: "MR. R.M. PATHAK.",
  },
  {
    srno: 17,
    site: "MR. ARVIND GUPTA(RAYMOND DIRECTOR) RAHIJ(VIHAR, HILL CREST II(CHANDIVALI, MUMBAI-400 072",
    area: "NA",
    type: "FLAT INTERIOR CIVIL ONLY ",
    value: "18,21,000.00",
    consultant: "MR. SUNIL THANAWAL",
  },
  {
    srno: 18,
    site: "MR. NIYAZ KHAN, (OMANAIRWAYS)VALMIKI APT, 3RD FLOOR,MAROL, CHRUCH ROAD,ANDHERI (E), MUMBAI –400059.",
    area: "NA",
    type: "INTERIOR WORK FOR RESIDENT",
    value: "11,50,000.00",
    consultant: "MR.VINAYAK SAHASRABUDHE ",
  },
  {
    srno: 19,
    site: "KISAN GROUP OF COMPANY 233, JAGAN KUTIER, SHER E– PUNJAB ANDHERI – (E)",
    area: "NA",
    type: "INTERIOR WORK FOR RESIDENT",
    value: "42,00,000.00",
    consultant: "MR.VINAYAK SAHASRABUDHE",
  },
  {
    srno: 20,
    site: "TEJAS C.H.S. LTD.MILITARY ROAD, MAROL,ANDHERI (E), MUMBAI –400 059.",
    area: "NA",
    type: "BUILDING PAVING, REPAIR & PAINTING",
    value: "4,00,000.00",
    consultant: "MR. AZAD",
  },
  {
    srno: 21,
    site: "Sunil Gehi.Bungalow No-02,Girikandra Society,Lonavala, Maha",
    area: "NA",
    type: "Major Repair,Structural Relocation,Extension,Interior ,Etc.",
    value: "45.00 LAKH",
    consultant: "DIRECT CLIENT",
  },
  {
    srno: 22,
    site: "Dr.T D Nadkarni.A-17, Guru Dutta Society,Govandi –Mumbai",
    area: "NA",
    type: "Major Repair, Waterproofing,Interior Work.Etc.",
    value: "30.00 LAKH",
    consultant: "ARCHITECH.AR.Hakkan.",
  },
  {
    srno: 23,
    site: "M/s.TEX CENTRE PERMISES C.S. LTD., CHANDIVALI,SAKINAKA MUMBAI- 400 072.",
    area: "NA",
    type: "R.C.C.ROAD PAVING and BUILDING REPAIR WORK",
    value: "20.00 CR",
    consultant: "CHAIRMAN MR.SHATISH AGARWA",
  },
  {
    srno: 24,
    site: "NEEL MOHAR BUNGLOW.PINGLAS,KARJAT",
    area: "NA",
    type: "NEW CONSTRUCTION",
    value: "1.00 CR",
    consultant: "ARCHITECT STUDIO TAB",
  },
  {
    srno: 25,
    site: "GOPAL SONS.Gopal Nagri Umbroli, Dombivli East.",
    area: "NA",
    type: "NEW RESIDNTIAL BUILDING PROJECT  R.C.C / Brickworks/ Plaster 8.50 Lakh Sqft",
    value: "APPROX 65 CR.",
    consultant: "ARCHITECT MR.VINAYAK SAHASRABUDHE",
  },
  {
    srno: 26,
    site: "M/S. RAJ BABBAR BUNGLOW JVPD ROAD MUMBAI.",
    area: "NA",
    type: "RCC JACKETING MAJOR REPAIRS & INTERIORS",
    value: "1.00Cr",
    consultant: "ARCHITECT MR.ROHIT SHAH RCC CONSULTANT VORA ASSOCIATE",
  },
];

const ResidentialTable = () => {
  return (
    <div>
      <div className="table-responsive">
        <AnimatePresence>
          <table className="table table-bordered border-dark table-hover shadow border">
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
                  <motion.tr
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0 }}
                    transition={{ duration: 0.3 }}
                    key={d.srno}
                  >
                    <th scope="row">{d.srno}</th>
                    <td>{d.site}</td>
                    <td>{d.area}</td>
                    <td>{d.type}</td>
                    <td>{d.value}</td>
                    <td>{d.consultant}</td>
                  </motion.tr>
                );
              })}
            </tbody>
          </table>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default ResidentialTable;
