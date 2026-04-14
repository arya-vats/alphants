import { useEffect, useRef } from 'react';

export default function Cursor({ onDark }) {
  const curRef = useRef(null);
  const ringRef = useRef(null);
  const pos = useRef({ mx: 0, my: 0, rx: 0, ry: 0 });
  const rafRef = useRef(null);

  useEffect(() => {
    const onMove = (e) => {
      pos.current.mx = e.clientX;
      pos.current.my = e.clientY;
    };
    document.addEventListener('mousemove', onMove);

    const loop = () => {
      const { mx, my } = pos.current;
      let { rx, ry } = pos.current;
      if (curRef.current) {
        curRef.current.style.left = mx + 'px';
        curRef.current.style.top = my + 'px';
      }
      rx += (mx - rx) * 0.12;
      ry += (my - ry) * 0.12;
      pos.current.rx = rx;
      pos.current.ry = ry;
      if (ringRef.current) {
        ringRef.current.style.left = rx + 'px';
        ringRef.current.style.top = ry + 'px';
      }
      rafRef.current = requestAnimationFrame(loop);
    };
    rafRef.current = requestAnimationFrame(loop);

    return () => {
      document.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  useEffect(() => {
    const els = document.querySelectorAll('a,button,.card-light,.build-card,.trio-row,.step');
    const enter = () => {
      if (ringRef.current) ringRef.current.style.transform = 'translate(-50%,-50%) scale(1.8)';
    };
    const leave = () => {
      if (ringRef.current) ringRef.current.style.transform = 'translate(-50%,-50%) scale(1)';
    };
    els.forEach(el => { el.addEventListener('mouseenter', enter); el.addEventListener('mouseleave', leave); });
    return () => els.forEach(el => { el.removeEventListener('mouseenter', enter); el.removeEventListener('mouseleave', leave); });
  });

  return (
    <>
      <div ref={curRef} className={`cursor${onDark ? ' on-dark' : ''}`} />
      <div ref={ringRef} className={`cursor-ring${onDark ? ' on-dark' : ''}`} />
    </>
  );
}
