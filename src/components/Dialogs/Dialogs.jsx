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
    const dialogsData = [
        {id: 1, name: 'Daniil'},
        {id: 2, name: 'Sabina'},
        {id: 3, name: 'Oleg'},
        {id: 4, name: 'Nika'},
        {id: 5, name: 'Vitya'},
        {id: 6, name: 'Nika'},
        {id: 7, name: 'Kostya'},
    ];

    const messagesData = [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How is your DOK?'},
        {id: 3, message: 'Hello dude!'},
        {id: 4, message: 'My name John!'}
    ];

    return (
        <div className={dialogsCss.dialogs}>
            <div className={dialogsCss.dialogsItems}>
                <DialogItem id={dialogsData[0].id} name={dialogsData[0].name} />
                <DialogItem id={dialogsData[1].id} name={dialogsData[1].name} />
                <DialogItem id={dialogsData[2].id} name={dialogsData[2].name} />
                <DialogItem id={dialogsData[3].id} name={dialogsData[3].name} />
                <DialogItem id={dialogsData[4].id} name={dialogsData[4].name} />
                <DialogItem id={dialogsData[5].id} name={dialogsData[5].name} />
                <DialogItem id={dialogsData[6].id} name={dialogsData[6].name} />
            </div>

            <div className={dialogsCss.messages}>
                <Message message={messagesData[0].message} />
                <Message message={messagesData[1].message} />
                <Message message={messagesData[2].message} />
                <Message message={messagesData[3].message} />
            </div>
        </div>
    );
};

export default Dialogs;