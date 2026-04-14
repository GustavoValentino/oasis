// constants/team.ts
import { Member } from "@/types";
// Use o alias @/public para as imagens, é mais limpo
import team1 from "@/public/images/team-01.png";
import team2 from "@/public/images/team-02.png";
import team3 from "@/public/images/team-03.png";
import team4 from "@/public/images/team-04.png";
import team5 from "@/public/images/team-05.jpg";
import team6 from "@/public/images/team-06.jpg";

export const TEAM_MEMBERS: Member[] = [
  {
    id: 1, // Se seu type pede number, use 1. Se pede string, use "1"
    name: "Edy",
    role: "UI/UX Designer",
    img: team1,
    letter: "E", // Adicione os campos que a interface Member exige
    age: "27 Anos",
    location: "São Paulo, Brasil", // Ajustado para sua realidade
    email: "edy@braincore.inc",
    phone: "+55 1194999999",
  },
  {
    id: 2,
    name: "Fabiane",
    role: "Videomaker",
    img: team2,
    letter: "F",
    age: "27 Anos",
    location: "São Paulo, Brasil",
    email: "fabiane@braincore.inc",
    phone: "+55 1194999999",
  },
  {
    id: 3,
    name: "Roberto",
    role: "Marketing Digital",
    img: team3,
    letter: "R",
    age: "22 Anos",
    location: "São Paulo, Brasil",
    email: "roberto@braincore.inc",
    phone: "+55 1194999999",
  },
  {
    id: 4,
    name: "Karen",
    role: "Fotógrafa",
    img: team4,
    letter: "K",
    age: "25 Anos",
    location: "São Paulo, Brasil",
    email: "karen@braincore.inc",
    phone: "+55 1194999999",
  },
  {
    id: 5,
    name: "Jonas Prado",
    role: "Programador",
    img: team5,
    letter: "J",
    age: "21 Anos",
    location: "São Paulo, Brasil",
    email: "jonas@braincore.inc",
    phone: "+55 1194999999",
  },
  {
    id: 6,
    name: "Larissa Alves",
    role: "Marketing",
    img: team6,
    letter: "L",
    age: "27 Anos",
    location: "São Paulo, Brasil",
    email: "larissa@braincore.inc",
    phone: "+55 1194999999",
  },
];
