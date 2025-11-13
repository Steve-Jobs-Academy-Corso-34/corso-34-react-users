import type { UserType } from "../../../types/users";

interface UserItemProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    user: UserType;
    i: number;
    isSelected?: boolean;
}

const UserItem: React.FC<UserItemProps> = ({
    user: { id, name },
    i,
    isSelected,
    ...props
}) => {
    return (
        <button {...props}>
            <p>Index: {i}</p>
            <p>ID: {id}</p>
            <p>Name: {name} </p>
            {isSelected && <p>(Selected)</p>}
        </button>
    );
};

export default UserItem;
