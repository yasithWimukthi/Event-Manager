import React from "react";
import EventItem from "./event-item.component";

const EventList = props => {

    const {items} = props;

    return (
        <ul>
            {
                // eslint-disable-next-line react/jsx-key
                items.map(item => <EventItem />)
            }
        </ul>
    );
}

export default EventList;
