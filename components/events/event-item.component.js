import React from "react";
import Link from "next/link";

const EventItem = props => {

    const {title,image,date,location,id} = props;

    const formattedDate = new Date(date).toLocaleDateString('en-US',{
        day:'numeric',
        month:'long',
        year:'numeric'
    });

    const formattedAddress = location.replace(', ','\n');
    const exploreEvent = `/events/${id}`;

    return (
        <li>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={`/${image}`} alt="" />
            <div>
                <div>
                    <h2>{title}</h2>
                    <div>
                        <time>{formattedDate}</time>
                    </div>
                    <div>
                        <address>{formattedAddress}</address>
                    </div>
                </div>
                <div>
                    <Link href={exploreEvent}> Explore Event</Link>
                </div>
            </div>
        </li>
    )
}

export default EventItem;
