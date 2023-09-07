import React, { useCallback, useState } from "react";
import Card from 'react-bootstrap/Card';
import useFitText from 'use-fit-text';

function FittedText({description}) {
  const [textOpacity, setTextOpacity] = useState('1')
  const onStart = useCallback(() => {
      console.log("Example 3 resizing started");
      setTextOpacity(0);
    }, []);
  const onFinish = useCallback((fontSize: number) => {
        console.log("Example 3 resizing finished", fontSize);
        setTextOpacity(1);
      }, []);
  const { fontSize, ref } = useFitText({ onStart, onFinish });

  return (
    <Card.Text
      ref={ref}
      style={{ fontSize, height: '120px', width: "100%", opacity: textOpacity }} >
      { description }
    </Card.Text>
  );
}

export default FittedText;