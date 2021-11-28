import React from 'react';
import MyLink from './buttons/MyLink';
import { DownArrow } from './buttons/Arrows';

export default function Section({
  id,
  next,
  last,
  titleShown,
  bgColored,
  hasBgImgClassName,
  fluidHeight,
  children,
}) {
  const containerStart =
    'py-16 px-44 ' +
    (!fluidHeight ? 'section ' : '') +
    (bgColored ? 'bg-gradient-to-br from-primary to-secondary text-white' : '');

  const container = () => {
    if (hasBgImgClassName) {
      return containerStart + hasBgImgClassName;
    }
    return containerStart;
  };

  return (
    <div id={id} className={container()}>
      {/* {!!hasBgImgClassName && (
        <div className={'bg-img ' + hasBgImgClassName}></div>
      )} */}
      {titleShown && <div className='text-4xl font-bold text-center pb-12'>{titleShown}</div>}
      {children}
      {!last && (
        <div className='py-4 grid justify-items-center'>
          <MyLink to={next}>
            <DownArrow />
          </MyLink>
        </div>
      )}
    </div>
  );
}