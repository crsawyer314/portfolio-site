import React from "react";
import { FaPython, FaNodeJs, FaReact, FaAws, FaHtml5, FaCss3Alt, FaJava, FaServer, FaJs } from "react-icons/fa";
import { SiDjango, SiNumpy, SiPandas, SiScipy, SiTensorflow, SiFlask, SiPostgresql, SiMysql, SiSqlite, SiMongodb } from "react-icons/si";

const LanguageIcons = () => {
  return (
    <div>
      <FaPython size={30} title="Python" />
      <SiDjango size={30} title="Django" />
      <SiNumpy size={30} title="NumPy" />
      <SiPandas size={30} title="Pandas" />
      <SiScipy size={30} title="SciPy" />
      <SiTensorflow size={30} title="TensorFlow" />
      <SiFlask size={30} title="Flask" />

      <FaNodeJs size={30} title="Node.js" />
      <FaReact size={30} title="React" />

      <FaAws size={30} title="AWS" />

      <FaJs size={30} title="JavaScript" />
      <FaHtml5 size={30} title="HTML5" />
      <FaCss3Alt size={30} title="CSS3" />

      <FaJava size={30} title="Java" />

      <SiPostgresql size={30} title="PostgreSQL" />
      <SiMysql size={30} title="MySQL" />
      <SiSqlite size={30} title="SQLite" />

      <SiMongodb size={30} title="MongoDB" />
    </div>
  );
};

export default LanguageIcons;
