import TypeScriptLogo from "../atoms/logo/TypeScriptLogo";
import JavaScriptLogo from "../atoms/logo/JavaScriptLogo";
import PythonLogo from "../atoms/logo/PythonLogo";
import CLogo from "../atoms/logo/CLogo";
import OCamlLogo from "../atoms/logo/OCamlLogo";
import HtmlLogo from "../atoms/logo/HtmlLogo";
import CSSLogo from "../atoms/logo/CSSLogo";
import ReactLogo from "../atoms/logo/ReactLogo";
import NextLogo from "../atoms/logo/NextLogo";
import DjangoLogo from "../atoms/logo/DjangoLogo";
import styles from "../../styles/SkillList.module.scss";

type Props = {
  TypeScript?: boolean;
  JavaScipt?: boolean;
  Python?: boolean;
  C?: boolean;
  OCaml?: boolean;
  HTML?: boolean;
  CSS?: boolean;
  React?: boolean;
  Next?: boolean;
  Django?: boolean;
};

const SkillList: React.VFC<Props> = (Props) => {
  const {
    TypeScript,
    JavaScipt,
    Python,
    C,
    OCaml,
    HTML,
    CSS,
    React,
    Next,
    Django,
  } = Props;
  return (
    <div className={styles.flex}>
      <div className={styles.logo_wrap}>{TypeScript && <TypeScriptLogo />}</div>
      <div className={styles.js_wrap}>{JavaScipt && <JavaScriptLogo />}</div>
      <div className={styles.logo_wrap}>{Python && <PythonLogo />}</div>
      <div className={styles.logo_wrap}>{C && <CLogo />}</div>
      <div className={styles.logo_wrap}>{OCaml && <OCamlLogo />}</div>
      <div className={styles.logo_wrap}>{HTML && <HtmlLogo />}</div>
      <div className={styles.logo_wrap}>{CSS && <CSSLogo />}</div>
      <div className={styles.logo_wrap}>{React && <ReactLogo />}</div>
      <div className={styles.logo_wrap}>{Django && <DjangoLogo />}</div>
      <div className={styles._wrap}>{Next && <NextLogo />}</div>
    </div>
  );
};

export default SkillList;
