import React, { useState } from 'react';
import Tilt from 'react-parallax-tilt';
import loadable from "@loadable/component";
import Fade from './Fade';
import A from './buttons/A';
import Button from './buttons/Button';
import heyfioImg from '../assets/images/heyfio-1000.png';
import wineImg from '../assets/images/wine-pairing-1000.png';
import synaImg from '../assets/images/syna-1000.png';
import seafoodsImg from '../assets/images/seafoods-1000.png';
import villainImg from '../assets/images/villain-1000.png';
import confcoImg from '../assets/images/confco-1000.png';
import w3Img from '../assets/images/w3-1000.png';
import ghostbedImg from '../assets/images/ghostbed-1000.png';

export default function Projects() {
  const btnBase = 'mx-4 lg:ml-0 lg:mr-8 whitespace-nowrap ';
  const btnB = btnBase + 'py-2 px-4';
  const btnNoB = btnBase + 'py-4 transform hover:translate-x-1 transition duration-300 ease-in';
  const p = 'text-center px-0 md:px-16 lg:px-0 lg:text-left';
  
  const [showModal, setShowModal] = useState(false);
  const [whichVideo, setWhichVideo] = useState(null);
  
  function handleModal(video) {
    if (video) {
      setShowModal(s => !s);
      setWhichVideo(video);
    }
  }
  
  loadable(() => showModal ? document.body.style.overflow = 'hidden' : document.body.style.overflow = 'visible');
  
  return (
    <div>
      {showModal ?
        <div className='fixed inset-0 z-30 w-screen p-4 bg-black sm:p-12 lg:p-24 bg-opacity-60'>
          <div onClick={handleModal}>
            <div className='fixed inset-0 top-0 z-40 w-screen h-screen bg-transparent'></div>
          </div>
          <div className='flex items-center max-h-full'>
            <div className='z-50 w-full max-h-full border-2 border-black'>
              <div className='flex items-center justify-end p-2 m-auto bg-white border-b border-gray-400'>
                <button onClick={handleModal}>
                  <i className='fa fa-times' aria-hidden='true' />
                </button>
              </div>
              <div className='flex justify-center'>
                <div className='video-container'>
                  <iframe
                    className='responsive-iframe'
                    src={whichVideo}
                  />
                </div>
              </div>
            </div>
          </div>
        </div> : null
      }
      {projects.map(
        ({ type, subtitle1, subtitle2, items }) => {
          return (
            <div key={type}>
              <Fade from='bottom'>
                <h2 id={type} className='py-4 text-3xl font-bold text-center lg:pb-6'>{subtitle1}</h2>
              </Fade>
              <Fade from='bottom'>
                <h3 className='pb-4 text-3xl font-bold text-center lg:pb-16'>{subtitle2}</h3>
              </Fade>
              {items.map(
                ({ number, id, title, desc1, desc2, img, video, website, repo }) => {
                  return (
                    <div id={id} className='grid grid-cols-1 pt-6 pb-20 lg:pt-12 lg:pb-28 lg:grid-cols-5' key={number}>
                      <div className='grid-cols-1 py-4 lg:py-8 lg:pr-16 lg:col-start-1 lg:col-end-3'>
                        <Fade from='left'>
                          <h3 className='pb-4 text-xl font-bold text-center lg:text-left'>{title}</h3>
                          <p className={p}>{desc1}</p>
                          <p className={p}>{desc2}</p>
                          <div className='flex flex-wrap items-center justify-center my-4 lg:justify-start'>
                            {video ?
                              <div onClick={() => handleModal(video)}>
                                <Button text='Demo Video' addClassName={btnB} Bg />
                              </div> : null
                            }
                            {website ?
                              <A h={website}>
                                <Button text='See Live' addClassName={btnNoB} NoBg />
                              </A> : null
                            }
                            {repo ?
                              <A h={repo}>
                                <Button text='Source Code' addClassName={btnNoB} NoBg />
                              </A> : null
                            }
                          </div>
                        </Fade>
                      </div>
                        <Tilt className='lg:col-start-3 lg:col-end-6'>
                          <Fade from='right'>
                            {video ?
                              <div onClick={() => handleModal(video)} className='cursor-pointer'>
                                <img src={img} alt={title + ' image'} width='1000' />
                              </div> :
                              <A h={website}>
                                <img src={img} alt={title + ' image'} width='1000' />
                              </A>
                            }
                          </Fade>
                        </Tilt>
                    </div>
                  );
                }
              )}
            </div>
          );
        }
      )}
    </div>
  );
}

const projects = [
  {
    type: 'full-time',
    subtitle1: 'Full Stack Engineering',
    subtitle2: 'Full Time Web Developer',
    items: [
      {
        number: 1,
        id: 'ghostbed',
        title: 'GhostBed',
        desc1: 'A thriving eCommerce store I get to help build as a member of the Software Engineering team',
        desc2: 'React + Next.js + GraphQL + Craft CMS + Shopify',
        img: ghostbedImg,
        video: null,
        website: 'https://ghostbed.com',
        repo: null,
      },
    ],
  },
  {
    type: 'contract-full-stack',
    subtitle1: 'Full Stack Engineering',
    subtitle2: 'Client Project',
    items: [
      {
        number: 2,
        id: 'heyfio',
        title: 'HeyFIO',
        desc1: 'A Full Stack Software Engineering Contract for a Blockchain web application',
        desc2: 'React + MySQL + NodeJS + ExpressJS',
        img: heyfioImg,
        video: 'https://www.loom.com/embed/fb82239929bd4518b793ab911eb313ea',
        website: 'https://beta.heyfio.com',
        repo: null,
      },
    ],
  },
  {
    type: 'contract-web-dev',
    subtitle1: 'Web Development & Shopify',
    subtitle2: 'Client Projects',
    items: [
      {
        number: 1,
        id: 'syna',
        title: 'Syna Jewels',
        desc1: 'Web development with JSON and Shopify app implementation to prepare products to scale the store',
        desc2: null,
        img: synaImg,
        video: null,
        website: 'https://synajewels.com/',
        repo: null,
      },
      {
        number: 2,
        id: 'seafoods',
        title: 'Global Seafoods',
        desc1: 'Web development with Sass, CSS, HTML, and Shopify Liquid to redesign membership pages',
        desc2: null,
        img: seafoodsImg,
        video: null,
        website: 'https://globalseafoods.com/',
        repo: null,
      },
      {
        number: 3,
        id: 'confco',
        title: 'Confidence Co',
        desc1: 'Custom web development and theme development with CSS and Liquid to implement a new design for a health and wellness Shopify store',
        desc2: null,
        img: confcoImg,
        video: 'https://www.loom.com/embed/505d28067eb3491a8e27dc222c21ad12',
        website: 'https://www.theconfidence.co/',
        repo: null,
      },
      {
        number: 4,
        id: 'w3sales',
        title: 'W3 Sales',
        desc1: 'Web development and Shopify development with Python for a food services factory and distributor group with a large inventory of products',
        desc2: null,
        img: w3Img,
        video: 'https://www.loom.com/embed/3b0aa0cd448b4e41964e8e2cb5cffdf1',
        website: 'https://w3salesonline.com/',
        repo: null,
      },
      {
        number: 5,
        id: 'villain',
        title: 'Villain Codes',
        desc1: 'Web development with Shopify Liquid, HTML, and CSS to customize add-to-cart options based on product types',
        desc2: null,
        img: villainImg,
        video: 'https://www.loom.com/embed/928d3245c61f402eb9f4d302cb995ce1',
        website: 'https://villain-codes.myshopify.com/',
        repo: null,
      },
    ],
  },
  {
    type: 'js',
    subtitle1: 'Vanilla JavaScript',
    subtitle2: 'Personal Project',
    items: [
      {
        number: 1,
        id: 'wine',
        title: 'Wine Pairing App',
        desc1: 'A custom API app to pair wines with popular dishes, created with JavaScript, Sass, HTML, CSS, and the Spoonacular API',
        desc2: null,
        img: wineImg,
        video: 'https://www.loom.com/embed/b65b0fb0d9a94902a272216645706fb4',
        website: 'https://evan-walter.github.io/wine-pairing',
        repo: 'https://github.com/Evan-Walter/wine-pairing',
      },
    ],
  },
];
