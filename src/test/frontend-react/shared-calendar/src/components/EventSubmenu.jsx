import React, { useState } from "react";

const EventSubmenu = ({ onAddEvent, selectedDate }) => {
    const [title, setTitle] = useState("");

    const handleAddEvent = (e) => {
        e.preventDefault();
        if (title) {
            onAddEvent({ title, date: selectedDate.toDateString() });
            setTitle("");
        }
    };

    return (
        <div className="event-submenu">
            <h2>Add Event</h2>
            <form onSubmit={handleAddEvent}>
                <input
                    type="text"
                    placeholder="Event Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                />
                <button type="submit">Add Event</button>
            </form>
        </div>
    );
};

export default EventSubmenu;
