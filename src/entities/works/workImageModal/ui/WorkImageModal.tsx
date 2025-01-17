import clsx from "clsx";

interface IWorkImageModal {
    show: boolean;
    closeModal: () => void;
    children: React.ReactNode;
};

export const WorkImageModal = ({ show, closeModal, children }: IWorkImageModal) => {

    return (
        <>
            <div className={clsx(
                "fixed z-[500] top-0 right-0 left-0 bottom-0 w-[100vw] lg:[w-90vw] m-auto bg-transparent box-border",
                show ? "block" : "hidden"
            )}>
                <div onClick={closeModal} className="absolute z-10 top-4 right-4 md:top-[40px] md:right-[40px] text-foreground-secondary cursor-pointer leading-8 w-8 text-[40px] text-center">
                    &times;
                </div>
                {children}
            </div>
        </>
    );
};

export default WorkImageModal;