import React from "react";
import {useRouter} from "next/router";
import {getFilteredEvents} from "../../dummy-data";
import EventList from "../../components/events/event-list.component";
import ResultsTitle from "../../components/events/results-title";
import Button from "../../components/ui/button.component";
import ErrorAlert from "../../components/ui/error-alert";

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
        return (
            <>
                <ErrorAlert>
                    <p>Invalid filter.</p>
                </ErrorAlert>
                <Button link='/events'>Show all events.</Button>
            </>
        )
    }

    const filteredEvents = getFilteredEvents({
        year: filteredYear,
        month: filteredMonth
    });

    if(!filteredEvents || filteredEvents.length === 0){
        return (
            <>
                <ErrorAlert>
                    <p>No events found!</p>
                </ErrorAlert>
                <Button link='/events'>Show all events.</Button>
            </>
        )
    }

    const date = new Date(filteredYear,filteredMonth-1);

    return(
        <>
            <ResultsTitle date={date}/>
            <EventList items={filteredYear}/>
        </>
    )
}
