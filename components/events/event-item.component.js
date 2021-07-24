import React from "react";
import Link from "next/link";
import classes from './event-item.module.css';

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
        <li className={classes.item}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={`/${image}`} alt="" />
            <div className={classes.content}>
                <div className={classes.summary}>
                    <h2>{title}</h2>
                    <div className={classes.date}>
                        <time>{formattedDate}</time>
                    </div>
                    <div className={classes.address}>
                        <address>{formattedAddress}</address>
                    </div>
                </div>
                <div className={classes.actions}>
                    <Link href={exploreEvent}> Explore Event</Link>
                </div>
            </div>
        </li>
    )
}

export default EventItem;
