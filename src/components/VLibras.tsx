import { useEffect } from "react";
import React from "react";

declare module "react" {
  interface HTMLAttributes<T>
    extends React.AriaAttributes, React.DOMAttributes<T> {
    // Adiciona os atributos específicos do VLibras
    vw?: string | boolean;
    "vw-access-button"?: string | boolean;
    "vw-plugin-wrapper"?: string | boolean;
  }
}

const VLibras = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://vlibras.gov.br/app/vlibras-plugin.js";
    script.async = true;

    script.onload = () => {
      // @ts-ignore
      new window.VLibras.Widget("https://vlibras.gov.br/app");
    };

    document.body.appendChild(script);
  }, []);

  return (
    <div vw="enabled">
      <div vw-access-button="active"></div>
      <div vw-plugin-wrapper>
        <div className="vw-plugin-top-wrapper"></div>
      </div>
    </div>
  );
};

export default VLibras;
