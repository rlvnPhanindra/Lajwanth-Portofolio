import { useEffect, useRef, useState } from "react";

const useTypewriter = (texts: string[], typeSpeed = 80, deleteSpeed = 40, pauseTime = 2000, loop = true) => {
  const [displayText, setDisplayText] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    if (isFinished) return;
    const currentText = texts[textIndex];

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(currentText.substring(0, displayText.length + 1));

        if (displayText.length === currentText.length) {
          if (!loop && textIndex === texts.length - 1) {
            setIsFinished(true);
            return;
          }
          setTimeout(() => setIsDeleting(true), pauseTime);
        }
      } else {
        setDisplayText(currentText.substring(0, displayText.length - 1));

        if (displayText.length === 0) {
          setIsDeleting(false);
          setTextIndex((prev) => (prev + 1) % texts.length);
        }
      }
    }, isDeleting ? deleteSpeed : typeSpeed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, textIndex, texts, typeSpeed, deleteSpeed, pauseTime, loop, isFinished]);

  return displayText;
};

export default useTypewriter;
