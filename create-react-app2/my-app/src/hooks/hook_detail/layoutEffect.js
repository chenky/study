import React, {useEffect, useLayoutEffect, useState} from 'react'

export default function LayoutEffect() {
  const [color, setColor] = useState('red');
  useLayoutEffect(() => {
      // alert(color);
      // setColor('gray');
      console.log('layoutEffect:'+color);
  });
  useEffect(() => {
    // setColor('gray');
      console.log('effect:', color);
  });
  return (
      <>
          <div id="myDiv" style={{ background: color }}>颜色</div>
          <button onClick={() => setColor('red')}>红</button>
          <button onClick={() => setColor('yellow')}>黄</button>
          <button onClick={() => setColor('blue')}>蓝</button>
      </>
  );
}
