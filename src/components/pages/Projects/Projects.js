import React from 'react';

import { Link } from 'react-router-dom';
import ImgContainer from '../../ImgContainer/ImgContainer';

import mancomm from "../../../assets/mancomm/banner.png";
import sagro from "../../../assets/sagro/banner.jpg";
import mancommLogo from "../../../assets/mancomm/logo.svg";
import prgisc from "../../../assets/prcisc/banner.png";
import prciscLogo from "../../../assets/prcisc/logo.svg";

import './oneProject.scss';

const projects = [
  {
    name: 'sagro',
    logo: 'https://sagro.md/wp-content/uploads/2020/04/Sagro-svg4.svg',
    cover: sagro,
    domain: 'Agriculture',
    to: '/sagro'
  },
  {
    name: 'mancomm',
    logo: mancommLogo,
    cover: mancomm,
    domain: 'Recruitment Agency',
    to:'/mancomm'
  },
  {
    name: 'prgisc',
    logo: prciscLogo,
    cover: prgisc,
    domain: 'Recruitment Agency',
    to: '/prgisc'
  },
  {
    name: 'saula',
    logo: `${process.env.PUBLIC_URL }/assets/saula/logo.svg`,
    cover: "https://mir-s3-cdn-cf.behance.net/project_modules/1400/032549107170459.5fa13695efe54.jpg",
    domain: 'Coffee To Go',
    to: '/saula'
  },
  {
    name: 'banners',
    logo: null,
    cover: "https://mir-s3-cdn-cf.behance.net/project_modules/1400/a50060103368273.5f4d32342812c.jpg",
    domain: "Fashion Banners",
    to: '/banners'
  }
]

const OneProject = () => {


  const items =  projects.map( ({ name, logo, cover, domain, to }) => {
    return (
      <section key={ name } className="projects-all__section">
        <ImgContainer src={cover} className='projects-all__image' />
        <div className="projects-all__inner">
          <div className="projects-all__container container">
            <ul className="borders">
              <li className="borders__line borders-left"></li>
              <li className="borders__line borders-top"></li>
              <li className="borders__line borders-right"></li>
              <li className="borders__line borders-bottom"></li>
            </ul>
            <div className="projects-all__content">
              <Link className="projects-all__logo" to={to}>
                <ImgContainer className="projects-all__logo-image" src={logo} alt="logo" />
              </Link>
              <div className="projects-all__button">
              <div className="projects-all__domain">{ domain }</div>
                <Link to={to}>
                  <button className="button sliderServices__button">
                    <span>See full project</span>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  })

  return (
    <div className="projects-all">
      <div className="filter">
      <svg aria-hidden="true" focusable="false" data-prefix="fas"       data-icon="hamburger" class="svg-inline--fa fa-hamburger fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#ddb407" d="M464 256H48a48 48 0 0 0 0 96h416a48 48 0 0 0 0-96zm16 128H32a16 16 0 0 0-16 16v16a64 64 0 0 0 64 64h352a64 64 0 0 0 64-64v-16a16 16 0 0 0-16-16zM58.64 224h394.72c34.57 0 54.62-43.9 34.82-75.88C448 83.2 359.55 32.1 256 32c-103.54.1-192 51.2-232.18 116.11C4 180.09 24.07 224 58.64 224zM384 112a16 16 0 1 1-16 16 16 16 0 0 1 16-16zM256 80a16 16 0 1 1-16 16 16 16 0 0 1 16-16zm-128 32a16 16 0 1 1-16 16 16 16 0 0 1 16-16z"></path>
      </svg>
      </div>
      { items }
    </div>
  )
}

export default OneProject;