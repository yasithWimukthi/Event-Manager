import React from "react";
import EventItem from "./event-item.component";

const EventList = props => {

    const {items} = props;

    return (
        <ul>
            {
                // eslint-disable-next-line react/jsx-key
                items.map(event => <EventItem
                    key={event.id}
                    id={event.id}
                    title={event.title}
                    location={event.location}
                    data={event.data}
                    image={event.image}
                />)
            }
        </ul>
    );
}

export default EventList;
