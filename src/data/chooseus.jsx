import { VerifiedUser, Construction, Schedule, TrendingUp, Build, Engineering } from '@mui/icons-material';

export const choose = [
  { 
    color: 1,
    title: "Safety First",
    desc: "Ensuring the well-being of our team and clients is our top priority. We implement rigorous safety measures to create a secure construction environment, adhering to the highest industry standards.",
    icon: <VerifiedUser sx={{ fontSize: 100 }} />
  },
  {
    title: "Quality Construction",
    desc: "At the heart of our ethos is a commitment to delivering construction excellence. Our meticulous attention to detail and use of premium materials ensure that every project is executed with the utmost quality",
    icon: <Construction sx={{ fontSize: 100 }} />
  },
  {
    color: 1,
    title: "Timely Delivery",
    desc: "We understand the importance of deadlines. Our streamlined processes and efficient project management guarantee that your construction project is completed on time, without compromising on the quality of work",
    icon: <Schedule sx={{ fontSize: 100 }} />
  },
  {
    title: "Innovative Systems",
    desc: "Embracing cutting-edge technologies, we bring innovation to every aspect of construction. Our integrated systems enhance efficiency, foster sustainability, and push the boundaries of what's possible in the construction industry",
    icon: <TrendingUp sx={{ fontSize: 100 }} />
  },
  {
    color: 1,
    title: "Modern Equipment",
    desc: "Equipped with state-of-the-art machinery, our construction sites boast the latest technologies. Our modern equipment not only expedites the building process but also ensures precision and reliability in every construction endeavor.",
    icon: <Build sx={{ fontSize: 100 }} />
  },
  {
    title: "Reputed for Engineered Constructions",
    desc: "With a solid reputation for delivering meticulously engineered constructions, we take pride in our commitment to excellence. Our portfolio speaks volumes about our dedication to creating structures that stand the test of time",
    icon: <Engineering sx={{ fontSize: 100 }} />
  },
];
