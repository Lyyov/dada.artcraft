"use client";

import { usePathname } from "next/navigation";
import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { TProject, projects } from "../../_utils";
import NavSlider from "@/app/_components/NavSlider";
import Modal from "@/app/_components/Modal";
import SliderContainer from "@/app/_components/SliderContainer";

type TOneProjectLayout = {
  children: React.ReactNode;
};

type TOneProjectContext = {
  project: any;
  setProject: (value: any) => void;
  zoomHandler: (e: number) => void;
};

const INITIAL_STATE: TOneProjectContext = {
  project: {},
  setProject: () => {},
  zoomHandler: () => {},
};

const OneProjectContext = createContext(INITIAL_STATE);

export function OneProjectProvider({ children }: TOneProjectLayout) {
  const [show, setShow] = useState(false);
  const [initialSlide, setInitialSlide] = useState(2);
  const [project, setProject] = useState<TProject | undefined>(undefined);

  useEffect(() => {
    if (show) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [show]);

  const closeModal = () => setShow(false);

  const zoomHandler = (imgId: number) => {
    setShow(true);
    setInitialSlide(imgId);
  };

  const zoomItems = project?.images?.map((item, key) => {
    return (
      <div key={key} className="modal__image-container">
        <img loading="lazy" src={item.src} alt={item.alt} />
      </div>
    );
  });

  const contextProps = useMemo(() => {
    return {
      show,
      setShow,
      project,
      setProject,
      closeModal,
      zoomHandler,
    };
  }, [show, project]);

  console.log("project", initialSlide);

  return (
    <OneProjectContext.Provider value={contextProps}>
      {show ? (
        <Modal show={show} closeModal={closeModal}>
          <SliderContainer
            customSettings={{
              fade: true,
              initialSlide,
              speed: 500,
              dots: false,
            }}
          >
            {zoomItems && zoomItems}
          </SliderContainer>
        </Modal>
      ) : null}

      {children}
      <NavSlider />
    </OneProjectContext.Provider>
  );
}

export const useModal = (): TOneProjectContext => {
  return useContext(OneProjectContext);
};
