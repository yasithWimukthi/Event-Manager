import React from "react";
import {getAllEvents} from "../../dummy-data";
import EventList from "../../components/events/event-list.component";
import EventsSearch from "../../components/events/events-search";
import {useRouter} from "next/router";

export default function AllEventsPage(){

    const events = getAllEvents();
    const router = useRouter();

    const findEventsHandler = (year,month) => {
        const path = `/events/${year}/${month}`
        router.push(path)
    }

    return(
        <div>
            <EventsSearch onSearch={findEventsHandler}/>
            <EventList items={events}/>
        </div>
    )
}
