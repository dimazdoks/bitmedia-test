import React, {useCallback, useEffect, useState} from "react";
import {Redirect, useHistory, useParams} from "react-router-dom";
import {useHttp} from "../../hooks/http.hook";
import {User} from "./User";
import {Preloader} from "../common/Preloader/Preloader";
import {dateToString, stringToDate} from "../../DateString/DateString";
import {Header} from "../common/Header/Header";
import {Footer} from "../common/Footer/Footer";

export const UserContainer = () => {
    const [data, setData] = useState({user_name: null, statistics: null});

    const history = useHistory();
    const user_id = useParams().id || 1;

    const {loading, request} = useHttp();

    const date = new Date();
    date.setDate(new Date().getDate() - 7);

    const [from, setFrom] = useState(dateToString(date));
    const [to, setTo] = useState(dateToString(new Date()));

    const getStatistic = useCallback(async () => {
        try {
            if (from <= to) {
                const response = await request(`/api/user/${user_id}?from=${from}&to=${to}`, 'GET');
                setData({
                    user_name: response.name,
                    statistics: responseToData(from, to, response.rows)
                });
            }
        } catch (e) {
            console.log('Redirect -- ', e.message);
            history.push(`/users-list/1`);
            return <Redirect to={`/users-list/1`}/>;
        }
    }, [user_id, request, from, to, setData, history]);

    useEffect(() => {
        getStatistic();
    }, [getStatistic]);

    return (
        <div>
            <Header/>
            {
                loading ? <Preloader/> :
                    <User from={from}
                          to={to}
                          setFrom={setFrom}
                          setTo={setTo}
                          data={data.statistics}
                          id={user_id}
                          user_name={data.user_name}
                    />
            }
            <Footer/>
        </div>
    );
};

const responseToData = (from, to, response) => {
    const statistics_data = {};
    const ddd = {};
    let date = from;
    let nextDay = stringToDate(from);

    while (date <= to) {
        ddd[nextDay] = {clicks: 0, views: 0};
        statistics_data[date] = {clicks: 0, views: 0};
        nextDay.setDate(nextDay.getDate() + 1);
        date = dateToString(nextDay);
    }

    for (let i = 0; i < response.length; i++)
        if (response[i] && response[i].date && response[i].page_views && response[i].clicks) {
            statistics_data[response[i].date].clicks = response[i].clicks;
            statistics_data[response[i].date].views = response[i].page_views;
        }

    const labels = Object.keys(statistics_data);
    let clicks = [['data', 'clicks', 'dotes']];
    let views = [['data', 'views', 'dotes']];

    for (let pr in statistics_data) {
        let index_date = stringToDate(pr);
        clicks.push([index_date, statistics_data[pr].clicks, null]);
        views.push([index_date, statistics_data[pr].views, null]);
    }

    return {labels, clicks, views};
};
