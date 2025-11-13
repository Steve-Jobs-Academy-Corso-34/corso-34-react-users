import { useState } from "react";
import "./App.scss";

import UserList from "./components/User/UserList/UserList";
import ShowHideButton from "./components/User/ShowHideButton/ShowHideButton";

const App = () => {
    const [showUserList, setShowUserList] = useState<boolean>(false);

    return (
        <div className="app-container">
            <ShowHideButton show={showUserList} setShow={setShowUserList} />

            {showUserList && <UserList />}
        </div>
    );
};

export default App;
