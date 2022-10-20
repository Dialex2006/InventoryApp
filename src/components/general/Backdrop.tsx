interface BackdropProps {
  onCancel: () => void;
}

const Backdrop = (props: BackdropProps) => {
  return <div className="backdrop" onClick={props.onCancel} />;
};

export default Backdrop;
