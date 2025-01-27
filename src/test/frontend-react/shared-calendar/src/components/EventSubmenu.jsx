import React, { useState } from "react";

const EventSubmenu = ({ onAddEvent, selectedDate, selectedEvent }) => {
    const [title, setTitle] = useState("");
    const [vonDT, setVonDT] = useState(new Date());
    const [bisDT, setBisDT] = useState(new Date());

    const [description, setDescription] = useState("");



    const handleAddEvent = (e) => {
        e.preventDefault();
        if (title && vonDT && bisDT) {
            let nEvent = new Event(title, vonDT, bisDT, description);
            onAddEvent(nEvent);
        }
    };

    return (
        <div className="event-submenu">
            <h2>Event</h2>
            <h3>{selectedDate.toDateString()}</h3>
            <form onSubmit={handleAddEvent}>
                <input
                    type="text"
                    placeholder="Titel"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                />
                <div>
                    <label htmlFor="title">Von</label>
                    <input
                        type="datetime-local"
                        placeholder="Von"
                        value={vonDT}
                        onChange={(e) => setVonDT(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="title">Bis</label>
                    <input
                        type="datetime-local"
                        placeholder="Bis"
                        value={bisDT}
                        onChange={(e) => setBisDT(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <input
                        type="text"
                        placeholder="Beschreibung (optional)"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </div>


                <div>
                    <button type="submit">Event Hinzufügen</button>
                </div>

            </form>
        </div>
    );
};

export default EventSubmenu;

class Event {
    constructor(Title, VonDT, BisDT, Description) {
        this.Title = Title;
        this.VonDT = VonDT;
        this.BisDT = BisDT;
        this.Description = Description;

    }
}
