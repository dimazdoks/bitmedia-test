import React from "react";
import {Paginator} from "../common/Paginator/Paginator";
import {UserPreview} from "./UserPreview";
import style from "../UsersList/UserList.module.scss";
import {NavLink} from "react-router-dom";

export const UsersList = (props) => {
    return (
        <div className={style.master}>
            <div className={style.nav}>
                <NavLink to="/" exact>Main page</NavLink>
                <NavLink to="/users-list" className={style.currentPage} exact>User statistics</NavLink>
            </div>

            <h2>Users statistics</h2>
            <div className={style.underTable}>

                <table>
                    <thead>
                    <tr>
                        <th>id</th>
                        <th>First name</th>
                        <th>Last name</th>
                        <th>Email</th>
                        <th>Gender</th>
                        <th>IP address</th>
                        <th>Total clicks</th>
                        <th>Total page views</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        props.users.map((u, key) =>
                            <UserPreview key={key}
                                         id={u.id}
                                         name={u.first_name}
                                         l_name={u.last_name}
                                         email={u.email}
                                         gender={u.gender}
                                         ip={u.ip_address}
                                         clicks={u.total_clicks}
                                         views={u.total_views}
                                         state={props.state}
                                         setState={props.setState}
                            />)
                    }
                    </tbody>
                </table>
            </div>
            <Paginator {...props}/>
        </div>
    );
};