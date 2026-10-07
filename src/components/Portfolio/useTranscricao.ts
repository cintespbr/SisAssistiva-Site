import { useEffect, useState } from "react";

/** Carrega o texto de cada página do livreto (um array de parágrafos por página). */
export function useTranscricao(url: string) {
  const [paginas, setPaginas] = useState<string[][]>([]);
  const [erro, setErro] = useState(false);

  useEffect(() => {
    let cancelado = false;
    fetch(url)
      .then((r) => {
        if (!r.ok) throw new Error(String(r.status));
        return r.json() as Promise<string[][]>;
      })
      .then((dados) => !cancelado && setPaginas(dados))
      .catch(() => !cancelado && setErro(true));
    return () => {
      cancelado = true;
    };
  }, [url]);

  return { paginas, erro };
}
