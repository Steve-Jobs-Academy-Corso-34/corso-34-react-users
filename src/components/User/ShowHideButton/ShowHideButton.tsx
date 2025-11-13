type ShowHideButtonProps = {
    show: boolean;
    setShow: React.Dispatch<React.SetStateAction<boolean>>;
};

const ShowHideButton: React.FC<ShowHideButtonProps> = ({ show, setShow }) => {
    return (
        <button onClick={() => setShow((prevShow) => !prevShow)}>
            {show ? "Nascondi" : "Mostra"}
        </button>
    );
};

export default ShowHideButton;
