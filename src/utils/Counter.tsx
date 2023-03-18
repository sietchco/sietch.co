import { animate } from "framer-motion";
import { useEffect, useRef } from "react";

function Counter({ from, to }) {
  const nodeRef = useRef()

  useEffect(() => {
    const node = nodeRef.current;

    const controls = animate(from, to, {
      duration: 2.5,
      onUpdate(value) {
        node.textContent = value.toFixed();
      }
    });

    return () => controls.stop();
  }, [from, to]);

  return(
      <p ref={nodeRef}></p>
  )
}

export default Counter