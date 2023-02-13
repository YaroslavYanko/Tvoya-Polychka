export const UserInputProfile = ({ title, children, footer }) => {


  return (
    <div>
      <h2>{title}</h2>
      {children}
      <div>{footer}</div>
    </div>
  );
};
