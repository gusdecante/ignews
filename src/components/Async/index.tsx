import { useEffect, useState } from "react";

export function Async() {
  const [isButtonInVisible, setIsButtonInvisible] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setIsButtonInvisible(true);
    }, 1000);
  }, []);

  return (
    <div>
      <div>Hello World</div>
      {!isButtonInVisible && <button>Button</button>}
    </div>
  );
}
