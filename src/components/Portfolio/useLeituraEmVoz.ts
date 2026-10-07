import { useCallback, useEffect, useRef, useState } from "react";

export type EstadoLeitura = "parado" | "lendo" | "pausado";

const suportado = typeof window !== "undefined" && "speechSynthesis" in window;

/**
 * Leitura em voz alta usando a Web Speech API do navegador
 * (gratuita, sem biblioteca externa, voz em pt-BR).
 */
export function useLeituraEmVoz() {
  const [estado, setEstado] = useState<EstadoLeitura>("parado");
  const [velocidade, setVelocidade] = useState(1);
  const idAtual = useRef(0);

  const parar = useCallback(() => {
    if (!suportado) return;
    idAtual.current++; // invalida callbacks da leitura anterior
    window.speechSynthesis.cancel();
    setEstado("parado");
  }, []);

  const ler = useCallback(
    (trechos: string[], aoTerminar?: () => void) => {
      if (!suportado) return;
      parar();
      const id = idAtual.current;
      const fila = trechos.filter((t) => t.trim());
      if (fila.length === 0) {
        aoTerminar?.();
        return;
      }

      const voz = window.speechSynthesis
        .getVoices()
        .find((v) => v.lang.toLowerCase().startsWith("pt-br"));

      fila.forEach((texto, i) => {
        const fala = new SpeechSynthesisUtterance(texto);
        fala.lang = "pt-BR";
        fala.rate = velocidade;
        if (voz) fala.voice = voz;
        if (i === 0) fala.onstart = () => id === idAtual.current && setEstado("lendo");
        fala.onerror = () => id === idAtual.current && setEstado("parado");
        if (i === fila.length - 1) {
          fala.onend = () => {
            if (id !== idAtual.current) return;
            setEstado("parado");
            aoTerminar?.();
          };
        }
        window.speechSynthesis.speak(fala);
      });
    },
    [parar, velocidade],
  );

  const pausar = useCallback(() => {
    if (!suportado) return;
    window.speechSynthesis.pause();
    setEstado("pausado");
  }, []);

  const retomar = useCallback(() => {
    if (!suportado) return;
    window.speechSynthesis.resume();
    setEstado("lendo");
  }, []);

  // Para a leitura ao sair da página.
  useEffect(() => parar, [parar]);

  return { suportado, estado, velocidade, setVelocidade, ler, pausar, retomar, parar };
}
