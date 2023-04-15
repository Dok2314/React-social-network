import dialogsCss from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {
    const dialogs = props.dialogs;
    const messages = props.messages;

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