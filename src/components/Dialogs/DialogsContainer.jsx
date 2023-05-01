import Dialogs from "./Dialogs";
import {addMessageActionCreator, updateMessageBodyActionCreator} from "../../redux/dialogs-reducer";
import StoreContext from "../../StoreContext";

const DialogsContainer = () => {
    return <StoreContext.Consumer>
        {
            store => {
                const state = store.getState();

                const onSendMessageClick = () => {
                    store.dispatch(addMessageActionCreator());
                };

                const onNewMessageChange = (body) => {
                    store.dispatch(updateMessageBodyActionCreator(body));
                };

                return <Dialogs
                    changeMessage={onNewMessageChange}
                    sendMessage={onSendMessageClick}
                    dialogs={state.dialogsPage.dialogs}
                    messages={state.dialogsPage.messages}
                    newMessageBody={state.dialogsPage.newMessageBody}
                />
            }
        }
    </StoreContext.Consumer>
};

export default DialogsContainer;