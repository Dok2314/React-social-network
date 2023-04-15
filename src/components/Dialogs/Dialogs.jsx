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
    const dialogs = [
        {id: 1, name: 'Daniil'},
        {id: 2, name: 'Sabina'},
        {id: 3, name: 'Oleg'},
        {id: 4, name: 'Nika'},
        {id: 5, name: 'Vitya'},
        {id: 6, name: 'Nika'},
        {id: 7, name: 'Kostya'},
    ];

    const messages = [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How is your DOK?'},
        {id: 3, message: 'Hello dude!'},
        {id: 4, message: 'My name John!'}
    ];

    const dialogsElements = dialogs.map((d) => <DialogItem key={d.id} id={d.id} name={d.name} />);
    const messagesElements = messages.map((m) => <Message key={m.id} message={m.message} />);

    return (
        <div className={dialogsCss.dialogs}>
            <div className={dialogsCss.dialogsItems}>
                { dialogsElements }
            </div>

            <div className={dialogsCss.messages}>
                { messagesElements }
            </div>
        </div>
    );
};

export default Dialogs;