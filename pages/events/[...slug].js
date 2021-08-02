import React from "react";
import {useRouter} from "next/router";
import {getFilteredEvents} from "../../dummy-data";
import EventList from "../../components/events/event-list.component";

export default function FilteredEventsPage(){

    const router = useRouter();
    const filterData = router.query.slug;

    if(!filterData){
        return <p className='center'>Loading...</p>
    }

    const filteredYear = +filterData[0];
    const filteredMonth = +filterData[1];

    if(
        isNaN(filteredYear) ||
        isNaN(filteredMonth) ||
        filteredYear>2030 ||
        filteredYear<2012 ||
        filteredMonth < 1 ||
        filteredMonth>12
    ){
        return <p>Invalid filter.</p>
    }

    const filteredEvents = getFilteredEvents({
        year: filteredYear,
        month: filteredMonth
    });

    if(!filteredEvents || filteredEvents.length === 0){
        return <p>No events found!</p>
    }

    return(
        <div>
            <EventList items={filteredYear}/>
        </div>
    )
}
