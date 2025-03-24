import type {ReactNode} from "react";

import JavascriptPlain from "devicons-react/lib/icons/JavascriptPlain";
import TypescriptPlain from "devicons-react/lib/icons/TypescriptPlain";
import NodejsPlain from "devicons-react/lib/icons/NodejsPlain";
import Html5Plain from "devicons-react/lib/icons/Html5Plain";
import Css3Plain from "devicons-react/lib/icons/Css3Plain";
import AngularPlain from "devicons-react/lib/icons/AngularPlain";
import ReactOriginal from "devicons-react/lib/icons/ReactOriginal";
import PostgresqlPlain from "devicons-react/lib/icons/PostgresqlPlain";
import MysqlPlainWordmark from "devicons-react/lib/icons/MysqlPlainWordmark";
import NginxOriginal from "devicons-react/lib/icons/NginxOriginal";
import JavaPlain from "devicons-react/lib/icons/JavaPlain";
import ScalaPlain from "devicons-react/lib/icons/ScalaPlain";
import CPlain from "devicons-react/lib/icons/CPlain";
import CplusplusPlain from "devicons-react/lib/icons/CplusplusPlain";
import PythonPlain from "devicons-react/lib/icons/PythonPlain";
import DockerPlain from "devicons-react/lib/icons/DockerPlain";
import KubernetesPlain from "devicons-react/lib/icons/KubernetesPlain";
import AmazonwebservicesPlainWordmark from "devicons-react/lib/icons/AmazonwebservicesPlainWordmark";
import GooglecloudPlain from "devicons-react/lib/icons/GooglecloudPlain";

type SkillCategory = "Frontend" | "Backend" | "Database" | "Cloud";

export type Skill =
  | "JavaScript"
  | "TypeScript"
  | "NodeJS"
  | "HTML"
  | "CSS/SCSS"
  | "Angular"
  | "React"
  | "Postgres"
  | "MySQL"
  | "Nginx"
  | "Java"
  | "Scala"
  | "C"
  | "C++"
  | "Python"
  | "Docker"
  | "Kubernetes"
  | "AWS"
  | "Google Cloud";

export const skillsIcons: {
  [key in Skill]: ReactNode;
} = {
  JavaScript: <JavascriptPlain />,
  TypeScript: <TypescriptPlain />,
  NodeJS: <NodejsPlain />,
  HTML: <Html5Plain />,
  "CSS/SCSS": <Css3Plain />,
  Angular: <AngularPlain />,
  React: <ReactOriginal />,
  Postgres: <PostgresqlPlain />,
  MySQL: <MysqlPlainWordmark />,
  Nginx: <NginxOriginal />,
  Java: <JavaPlain />,
  Scala: <ScalaPlain />,
  C: <CPlain />,
  "C++": <CplusplusPlain />,
  Python: <PythonPlain />,
  Docker: <DockerPlain />,
  Kubernetes: <KubernetesPlain />,
  AWS: <AmazonwebservicesPlainWordmark />,
  "Google Cloud": <GooglecloudPlain />,
};
