// useEffect: um Code auszuführen, wenn sich etwas ändert
import { useEffect } from "react";

// useLocation: liefert Infos über die aktuelle Route (URL)
import { useLocation } from "react-router-dom";

function ScrollToTop() {
  // Wir holen uns den aktuellen Pfad aus der URL
  // Beispiel:
  // "/"           ->  Infopage
  // "/home"       ->  Homepage
  
  const { pathname } = useLocation();

  useEffect(() => {
    // Dieser Code läuft jedes mal , wenn sich pathname ändert -> also wenn sich der pfad ändert


    // window.scrollTo bewegt den Viewport der Seite
    // x = 0 → ganz links
    // y = 0 → ganz nach oben
    window.scrollTo(0, 0);
  }, [pathname]); 
  // ↑ Dependency Array:
  // useEffect wird nur ausgeführt,
  // wenn sich "pathname" ändert (also bei Routenwechsel)

  // Die Komponente rendert nichts im DOM
  // Sie existiert nur wegen ihres Side-Effects (Scrollen)
  return null;
}

export default ScrollToTop;
