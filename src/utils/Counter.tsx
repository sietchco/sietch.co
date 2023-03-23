import { animate } from "framer-motion";
import { useEffect, useRef } from "react";

type CounterProps = {
  from: number
  to: number
}

const Counter = ({ from, to } : CounterProps) => {
  const nodeRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const node = nodeRef.current
    
    if (node) {
      const controls = animate(from, to, {
        duration: 2.5,
        onUpdate(value) {
          node.textContent = value.toFixed()
        }
      });
      return () => controls.stop()
    }
  }, [from, to])

  return(
      <p ref={nodeRef}></p>
  )
}

export default Counter