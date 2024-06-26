import React from "react";

import { projects } from "./_utils";
import Link from "next/link";
import ChevronRight from "../_icons/ChevronRight";
import Image from "next/image";

const OneProject = () => {
  const items = projects.map(({ name, info, cover, to, text_allprojects }) => {
    return (
      <section key={name} className={`projall__section`}>
        <div className="row">
          <div className="col-md-6 col-12 projall__left">
            <Link href={"/works/" + to} className="projall__image">
              <Image
                loading="lazy"
                className="projall__iamge-image"
                src={cover}
                alt={`cover for ${name}`}
                width={555}
                height={370}
              />
            </Link>
          </div>
          <div className="col-md-6 col-12 projall__right">
            <div className="projall__descr">
              <h4 className="projall__domain">{name}</h4>
              <p className="projall__info">{info}</p>
              <p className="projall__text">{text_allprojects}</p>
              <Link href={"/works/" + to} className="projall__button button">
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
  });

  return (
    <div className="projects-all">
      <div className="container">{items}</div>
    </div>
  );
};

export default OneProject;
