import Dialogs from "./Dialogs";
import {addMessageActionCreator, updateMessageBodyActionCreator} from "../../redux/dialogs-reducer";

const DialogsContainer = (props) => {
    let state = props.store.getState();

    const onSendMessageClick = () => {
        props.store.dispatch(addMessageActionCreator());
    };

    const onNewMessageChange = (body) => {
        props.store.dispatch(updateMessageBodyActionCreator(body));
    };

    return (
        <Dialogs
            changeMessage={onNewMessageChange}
            sendMessage={onSendMessageClick}
            dialogs={state.dialogsPage.dialogs}
            messages={state.dialogsPage.messages}
            newMessageBody={state.dialogsPage.newMessageBody}
        />
    );
};

export default DialogsContainer;