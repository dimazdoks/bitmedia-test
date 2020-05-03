import React, {useCallback, useContext, useEffect, useState} from "react";
import {UsersList} from "./UsersList";
import {useHttp} from "../../hooks/http.hook";
import {Preloader} from "../common/Preloader/Preloader";
import {Context} from "../../Context";
import {useParams, useHistory, Redirect} from 'react-router-dom';
import {Header} from "../common/Header/Header";
import {Footer} from "../common/Footer/Footer";

export const UsersListContainer = () => {
    const {state, setState} = useContext(Context);

    const history = useHistory();
    let page =  Number(useParams().pg);
    if (0 >= page || page > state.pageSize || isNaN(page)) {
        page = 1;
        history.push(`/users-list/1`)
    }

    const {request, loading} = useHttp();

    const [totalCount, setTotalCount] = useState(0);
    const [users, setUsers] = useState([]);
    const [currentPage, setCurrentPage] = useState(page);


    const getUsers = useCallback(async () => {
        try {
            const response = await request(`/api/users-statistic?page=${currentPage}&users_count=${state.pageSize}`, 'GET');
            setTotalCount(response.totalCount);
            setUsers(response.users);
        } catch (e) {
            console.log("Redirect -- ", e.message);
            history.push(`/users-list/1`);
            return <Redirect exact to={`/users-list/1`}/>;
        }
    }, [currentPage, request, state.pageSize, history]);

    const changeCurrentPage = p => {
        setCurrentPage(p);
        history.push(`/users-list/${p}`);
    };

    useEffect(() => {
        getUsers();
    }, [getUsers]);

    return (
        <div>
            <Header/>
            {loading ? <Preloader/> :
                <UsersList totalCount={totalCount}
                           pageSize={state.pageSize}
                           currentPage={currentPage}
                           changeCurrentPage={changeCurrentPage}
                           portionSize={state.portionSize}
                           users={users}
                           state={state}
                           setState={setState}
                />}

            <Footer/>
        </div>
    );
};