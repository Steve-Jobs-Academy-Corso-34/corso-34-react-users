import { useState, useEffect } from "react";

import axios from "axios";

import UserItem from "../UserItem/UserItem";
import type { UserType } from "../../../types/users";

const UserList: React.FC = () => {
    const [currentUserIndex, setCurrentUserIndex] = useState<number | undefined>();
    const [users, setUsers] = useState<UserType[]>();

    const fetchUsers = async () => {
        /* try {
            const response = await fetch("https://jsonplaceholder.typicode.com/users");
            const data = await response.json();

            setUsers(data);
        } catch (error) {
            console.log(error);
        } finally {
            console.log("fetching users completed");
        } */

        await axios("https://jsonplaceholder.typicode.com/users")
            .then(({ data }) => setUsers(data))
            .catch((error) => console.log(error))
            .finally(() => console.log("fetching users completed"));
    };

    useEffect(() => {
        fetchUsers();
    }, []);

    return (
        <div>
            <h2>User List</h2>
            <p>Current User Index: {currentUserIndex ?? "N/A"}</p>

            {users ? (
                users.map((user: UserType, i: number) => {
                    return (
                        <UserItem
                            user={user}
                            i={i}
                            key={user.id}
                            isSelected={currentUserIndex === i}
                            onClick={() => setCurrentUserIndex(i)}
                        />
                    );
                })
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default UserList;
