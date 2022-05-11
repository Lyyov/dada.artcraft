import React from "react";

import { Link } from "react-router-dom";

import { projects } from "../../../api/api-projects";

import { ChevronRight } from "../../../icons";

import "./oneProject.scss";

const OneProject = () => {
  const items = projects.map(
    ({ name, info, cover, domain, to, text_allprojects }) => {
      return (
        <section key={name} className={`projall__section`}>
          <div className="row">
            <div className="col-md-6 col-12 projall__left">
              <Link to={to} className="projall__image">
                <img
                  loading="lazy"
                  className="projall__iamge-image"
                  src={`${process.env.PUBLIC_URL}${cover}`}
                  alt={`cover for ${name}`}
                />
              </Link>
            </div>
            <div className="col-md-6 col-12 projall__right">
              <div className="projall__descr">
                <h4 className="projall__domain">{name}</h4>
                <p className="projall__info">{info}</p>
                <p className="projall__text">{text_allprojects}</p>
                <Link to={to} className="projall__button button">
                  <span>See full project</span>
                  <span className="button__icon">
                    <ChevronRight />
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </section>
      );
    }
  );

  return (
    <div className="projects-all">
      <div className="container">{items}</div>
    </div>
  );
};

export default OneProject;
