import { useEffect, useState } from "preact/hooks";
import { useLocation } from "preact-iso";
import { getNextRoute, getPreviousRoute } from "../routes";
import { link } from "../config";

// Extract the doc ID from URLs like: /docs/grid
const getPath = (location) => {
  const parts = location.path.split("/").filter(Boolean);
  // ["docs", "grid"]
  return parts[1] || null;
};

export default function Footer() {
  const location = useLocation();
  const [prev, setPrev] = useState(null);
  const [next, setNext] = useState(null);

  useEffect(() => {
    const currentId = getPath(location);
    if (!currentId) {
      setPrev(null);
      setNext(null);
      return;
    }

    const p = getPreviousRoute(currentId);
    const n = getNextRoute(currentId);

    setPrev(p);
    setNext(n);
  }, [location.path]);

  return (
    <footer style={styles.footer}>
      {/* styles.footer */}
      <div style={styles.nav}>
        {prev ? (
          <a href={link(prev.path)} style={styles.btn} class="tt-t">
            ← {prev.path.replace("/", "")}
          </a>
        ) : (
          <span />
        )}

        {next ? (
          <a href={link(next.path)} style={styles.btn} class="tt-t">
            {next.path.replace("/", "")} →
          </a>
        ) : (
          <span />
        )}
      </div>
    </footer>
  );
}

const styles = {
  footer: {
    padding: "2rem 0",
    display: "flex",
    justifyContent: "center",
  },
  nav: {
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
    maxWidth: "650px",
  },
  btn: {
    padding: "0.5rem 1rem",
    borderRadius: "6px",
    color: "var(--text)",
    border: "solid 1px var(--text)",
    textDecoration: "none",
    fontSize: "14px",
  },
};
