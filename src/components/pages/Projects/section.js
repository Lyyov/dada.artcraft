const section = (props) => {

  return (
    <section className={props.className ? `project__section ${props.className}` : 'project__section'}>
      {props.children}
    </section>
  )
};

export default section;