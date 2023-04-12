import dialogsCss from "./Dialogs.module.css";

const Dialogs = (props) => {
    return (
        <div className={dialogsCss.dialogs}>
            <div className={dialogsCss.dialogsItems}>
                <div className={`${dialogsCss.dialog} ${dialogsCss.active}`}>
                    Daniil
                </div>
                <div className={dialogsCss.dialog}>
                    Sabina
                </div>
                <div className={dialogsCss.dialog}>
                    Oleg
                </div>
                <div className={dialogsCss.dialog}>
                    Sveta
                </div>
                <div className={dialogsCss.dialog}>
                    Nika
                </div>
            </div>

            <div className={dialogsCss.messages}>
                <div className={dialogsCss.message}>Hi</div>
                <div className={dialogsCss.message}>How is your dok?</div>
                <div className={dialogsCss.message}>Hello dude!</div>
                <div className={dialogsCss.message}>My name John!</div>
            </div>
        </div>
    );
};

export default Dialogs;