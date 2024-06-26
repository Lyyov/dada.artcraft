type TSection = {
  className?: string;
  children: React.ReactNode;
};
const Section = (props: TSection) => {
  return (
    <section
      className={
        props.className
          ? `project__section ${props.className}`
          : "project__section"
      }
    >
      {props.children}
    </section>
  );
};

export default Section;
