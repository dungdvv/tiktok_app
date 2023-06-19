import { useEffect, useMemo, useState } from 'react';
import Items from './Item';

import './style.scss';

function Home() {
  return (
    <div className="home-wrapper">
      <div className="home-body">
        <Items />
        <Items />
        <Items />
        <Items />
        <Items />
        <Items />
        <Items />
      </div>
    </div>
  );
}

export const useElementOnScreen = (options, targetRef) => {
  const [isVisibile, setIsVisible] = useState();
  const callbackFunction = (entries) => {
    const [entry] = entries; //const entry = entries[0]
    setIsVisible(entry.isIntersecting);
  };
  const optionsMemo = useMemo(() => {
    return options;
  }, [options]);
  useEffect(() => {
    const observer = new IntersectionObserver(callbackFunction, optionsMemo);
    const currentTarget = targetRef.current;
    if (currentTarget) observer.unobserve(currentTarget);
    return () => {
      if (currentTarget) observer.unobserve(currentTarget);
    };
  }, [targetRef, optionsMemo]);
  return isVisibile;
};

export default Home;
