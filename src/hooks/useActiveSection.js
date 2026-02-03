import { useEffect, useState } from "react";

export default function useActiveSection(ids) {
  const [activeId, setActiveId] = useState(ids[0]);

  useEffect(() => {
    const scrollContainer = document.querySelector("main");
    if (!scrollContainer) return;

    const visibleSections = new Map();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            visibleSections.set(entry.target.id, entry);
          } else {
            visibleSections.delete(entry.target.id);
          }
        });

        if (visibleSections.size > 0) {
          const closest = [...visibleSections.values()].sort(
            (a, b) => a.boundingClientRect.top - b.boundingClientRect.top,
          )[0];

          setActiveId(closest.target.id);
        }
      },
      {
        root: scrollContainer,
        threshold: 0.1,
        rootMargin: "0px 0px -64px 0px",
      },
    );

    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [ids]);

  return activeId;
}
