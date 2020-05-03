import React from "react";
import {NavLink} from "react-router-dom";

export const UserPreview = ({id, name, l_name, email, gender, ip, clicks, views, state, setState}) => {
    return (
        <tr>
            {[id, name, l_name, email, gender, ip, clicks, views].map((description, key) =>
                <TD key={key}
                    id={id}
                    name={name + ' ' + l_name}
                    description={description}
                    state={state}
                    setState={setState}
                />)}
        </tr>
    );
};

const TD = ({id, description, name, state, setState}) => {
    return <td><NavLink exact to={`/user/${id}`} onClick={() => {
        setState({...state, userName: name});
    }}>{description}</NavLink></td>;
};
