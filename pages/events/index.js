import React from "react";
import {getAllEvents} from "../../dummy-data";
import EventList from "../../components/events/event-list.component";
import EventsSearch from "../../components/events/events-search";

export default function AllEventsPage(){

    const events = getAllEvents();

    return(
        <div>
            <EventsSearch/>
            <EventList items={events}/>
        </div>
    )
}
