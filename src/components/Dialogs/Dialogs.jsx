import dialogsCss from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {addMessageActionCreator, updateMessageBodyActionCreator} from "../../redux/store";

const Dialogs = (props) => {
    const dialogsElements = props.state.dialogs.map((d) => <DialogItem key={d.id} id={d.id} name={d.name} />);
    const messagesElements = props.state.messages.map((m) => <Message key={m.id} message={m.message} />);
    const newMessageBody = props.state.newMessageBody;

    const onSendMessageClick = () => {
        props.dispatch(addMessageActionCreator())
    };

    const onNewMessageChange = (e) => {
        let body = e.target.value;

        props.dispatch(updateMessageBodyActionCreator(body));
    };

    return (
        <div className={dialogsCss.dialogs}>
            <div className={dialogsCss.dialogsItems}>
                { dialogsElements }
            </div>

            <div className={dialogsCss.messages}>
                <div>
                    { messagesElements }
                </div>
                <div>
                    <div>
                        <textarea
                            value={newMessageBody}
                            placeholder='Enter your message'
                            onChange={onNewMessageChange}
                        ></textarea>
                    </div>
                    <div>
                        <button onClick={ onSendMessageClick }>Add message</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dialogs;