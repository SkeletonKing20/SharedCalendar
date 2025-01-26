import React, { useState, useEffect } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid"; // Month view
import interactionPlugin from "@fullcalendar/interaction"; // Date click interaction

const CalendarPage = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [selectedDate, setSelectedDate] = useState(null);
    const [eventDetails, setEventDetails] = useState("");
    const [events, setEvents] = useState([]);

    // Fetch events from the backend when the component mounts
    useEffect(() => {
        const loadEvents = async () => {
            try {
                const response = await fetch("/api/events"); // Adjust this URL to your backend endpoint
                const data = await response.json();
                setEvents(data); // Set the fetched events to the state
            } catch (error) {
                console.error("Error fetching events:", error);
            }
        };

        loadEvents();
    }, []); // Empty dependency array to run once when the component mounts

    // Show the menu when a date is clicked
    const handleDateClick = (info) => {
        setSelectedDate(info.date);
        setIsMenuOpen(true); // Open the side menu
    };

    // Handle changes in the event details textarea
    const handleEventDetailsChange = (e) => {
        setEventDetails(e.target.value);
    };

    // Save the event to the backend
    const handleSaveEvent = async () => {
        if (!eventDetails) {
            alert("Event details cannot be empty!");
            return;
        }

        const newEvent = {
            title: eventDetails,
            date: selectedDate.toISOString(),
        };

        try {
            // Send the new event to the backend (POST request)
            const response = await fetch("/api/events", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(newEvent),
            });

            if (response.ok) {
                alert(`Event saved for ${selectedDate.toDateString()}: ${eventDetails}`);
                setEventDetails(""); // Reset event details
                setIsMenuOpen(false); // Close the menu
                // Reload events after saving a new event
                const updatedEvents = await response.json();
                setEvents(updatedEvents); // Update the calendar with the new event
            } else {
                alert("Failed to save event");
            }
        } catch (error) {
            console.error("Error saving event:", error);
        }
    };

    // Close the side menu
    const handleCloseMenu = () => {
        setIsMenuOpen(false);
        setSelectedDate(null); // Reset the selected date
    };

    return (
        <div style={{ display: "flex", height: "100vh" }}>
            {/* Calendar */}
            <div style={{ flex: 1, position: "relative" }}>
                <FullCalendar
                    plugins={[dayGridPlugin, interactionPlugin]}
                    initialView="dayGridMonth"
                    dateClick={handleDateClick} // Handle date click
                    height="100%" // Ensure the calendar takes up full height of its container
                    events={events} // Load events into the calendar
                />
            </div>

            {/* Side menu for event details */}
            {isMenuOpen && (
                <div
                    style={{
                        position: "absolute",
                        top: 0,
                        right: 0,
                        width: "300px",
                        height: "100%",
                        backgroundColor: "#ffffff",
                        boxShadow: "-4px 0 10px rgba(0, 0, 0, 0.1)",
                        transition: "right 0.3s ease",
                        padding: "20px",
                        zIndex: 1000,
                    }}
                >
                    {/* Close button */}
                    <button
                        onClick={handleCloseMenu}
                        style={{
                            position: "absolute",
                            top: "20px",
                            right: "20px", // Move it to the right side
                            backgroundColor: "#f5f5f5",
                            border: "none",
                            borderRadius: "50%",
                            padding: "20px", // Increase the size of the button
                            fontSize: "20px", // Increase font size for the icon
                            cursor: "pointer",
                        }}
                    >
                        X
                    </button>
                    <h2>Edit Event</h2>
                    <p>{selectedDate ? selectedDate.toDateString() : "No date selected"}</p>
                    <textarea
                        value={eventDetails}
                        onChange={handleEventDetailsChange}
                        placeholder="Enter event details"
                        style={{
                            width: "100%",
                            padding: "12px",
                            marginBottom: "20px",
                            borderRadius: "10px",
                            border: "1px solid #ddd",
                            fontSize: "16px",
                            height: "100px",
                            boxSizing: "border-box",
                        }}
                    />
                    <button
                        onClick={handleSaveEvent}
                        style={{
                            width: "100%",
                            padding: "12px",
                            backgroundColor: "#4f46e5",
                            color: "#ffffff",
                            border: "none",
                            borderRadius: "10px",
                            fontSize: "16px",
                            cursor: "pointer",
                            transition: "background 0.3s ease",
                        }}
                    >
                        Save Event
                    </button>
                </div>
            )}
        </div>
    );
};

export default CalendarPage;
