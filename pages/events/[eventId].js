import React from "react";
import {useRouter} from "next/router";
import {getEventById} from "../../dummy-data";
import EventSummary from "../../components/event-detail/event-summary";
import EventLogistics from "../../components/event-detail/event-logistics";
import EventContent from "../../components/event-detail/event-content";
import ErrorAlert from "../../components/ui/error-alert";


export default function EventDetailPage(){

    const router = useRouter();
    const eventId = router.query.eventId;
    const event = getEventById(eventId);

    if(!event){
        return (
            <>
                <ErrorAlert>
                    <p>event not found</p>
                </ErrorAlert>
            </>
        )
    }

    return(
        <>
            <EventSummary/>
            <EventLogistics
                date={event.date}
                address={event.location}
                image={event.image}
                imageAlt={event.title}
            />
            <EventContent>
                <p>{event.description}</p>
            </EventContent>
        </>
    )
}
