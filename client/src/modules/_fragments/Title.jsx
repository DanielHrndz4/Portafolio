import React, { useRef } from "react";
import { Reveal } from "react-awesome-reveal";
import { useInView } from "framer-motion";

function Section({ children }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref}>
      <span
        style={{
          transform: isInView ? "none" : "translateX(-200px)",
          opacity: isInView ? 1 : 0,
          transition: "all 1s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
        }}
      >
        {children}
      </span>
    </section>
  );
}

export default function Title(props) {
    return (
        <Reveal>
            <div className="w-full text-Ctext h-10 relative py-20">
            <span className="absolute inset-0 flex items-center justify-center text-7xl backtitle tracking-wider text-Cbackground">{props.title}</span>
            <span className="absolute inset-0 flex items-center justify-center text-6xl fronttitle text-Ctext font-bold">{props.title}</span>
        </div>
        </Reveal>
    );
}
