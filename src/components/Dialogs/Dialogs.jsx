import dialogsCss from "./Dialogs.module.css";
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    return (
        <div className={`${dialogsCss.dialog} ${dialogsCss.active}`}>
            <NavLink to={`/dialogs/${props.id}`}>{props.name}</NavLink>
        </div>
    );
};

const Message = (props) => {
    return (
        <div className={dialogsCss.message}>
            {props.message}
        </div>
    );
};

const Dialogs = (props) => {
    return (
        <div className={dialogsCss.dialogs}>
            <div className={dialogsCss.dialogsItems}>
                <DialogItem id={1} name={'Daniil'} />
                <DialogItem id={2} name={'Sabina'} />
                <DialogItem id={3} name={'Oleg'} />
                <DialogItem id={4} name={'Nika'} />
                <DialogItem id={5} name={'Vitya'} />
                <DialogItem id={6} name={'Nika'} />
                <DialogItem id={7} name={'Kostya'} />
            </div>

            <div className={dialogsCss.messages}>
                <Message message={'Hi'} />
                <Message message={'How is your DOK?'} />
                <Message message={'Hello dude!'} />
                <Message message={'My name John!'} />
            </div>
        </div>
    );
};

export default Dialogs;