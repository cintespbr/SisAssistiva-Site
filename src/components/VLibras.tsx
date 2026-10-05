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

declare global {
  interface Window {
    VLibras?: { Widget: new (url: string) => unknown };
  }
}

const VLIBRAS_SCRIPT_SRC = "https://vlibras.gov.br/app/vlibras-plugin.js";
const VLIBRAS_APP_URL = "https://vlibras.gov.br/app";

// Garante que o widget seja criado uma única vez, mesmo com StrictMode
// (que monta o componente duas vezes em desenvolvimento).
let widgetStarted = false;

const startWidget = () => {
  if (widgetStarted || !window.VLibras) return;
  widgetStarted = true;
  new window.VLibras.Widget(VLIBRAS_APP_URL);
};

const VLibras = () => {
  useEffect(() => {
    if (window.VLibras) {
      startWidget();
      return;
    }

    let script = document.querySelector<HTMLScriptElement>(
      `script[src="${VLIBRAS_SCRIPT_SRC}"]`,
    );

    if (!script) {
      script = document.createElement("script");
      script.src = VLIBRAS_SCRIPT_SRC;
      script.async = true;
      document.body.appendChild(script);
    }

    script.addEventListener("load", startWidget);
    return () => script?.removeEventListener("load", startWidget);
  }, []);

  return (
    <div vw="enabled">
      <div vw-access-button="active"></div>
      <div vw-plugin-wrapper="">
        <div className="vw-plugin-top-wrapper"></div>
      </div>
    </div>
  );
};

export default VLibras;
