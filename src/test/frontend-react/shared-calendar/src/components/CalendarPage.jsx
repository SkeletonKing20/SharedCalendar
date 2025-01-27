import React, { useState, useEffect } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid"; // Month view
import interactionPlugin from "@fullcalendar/interaction";
import EventSubmenu from "./EventSubmenu"; // Date click interaction

const CalendarPage = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [selectedDate, setSelectedDate] = useState(null);
    const [eventDetails, setEventDetails] = useState("");
    const [events, setEvents] = useState([]);

    // Fetch events from the backend when the component mounts
    useEffect(() => {
        const loadEvents = async () => {
            // load Calendar
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
    const handleSaveEvent = async (e)  => {
        if (e) {

            let nEvent = {
                title: e.Title,
                description: e.Description,
                startStr: new Date(e.VonDT).toISOString(),
                endStr: new Date(e.BisDT).toISOString(),
            }

            events.push(nEvent);
        }
    };

    // Close the side menu
    const handleCloseMenu = () => {
        setIsMenuOpen(false);
        setSelectedDate(null);
    };

    return (
        <div style={{ display: "flex", height: "100vh", width: "80%", marginLeft: "24px", marginTop: "50px" }}>
            {/* Calendar */}
            <div style={{ flex: 1, position: "relative" }}>
                <FullCalendar
                    plugins={[dayGridPlugin, interactionPlugin]}
                    initialView="dayGridMonth"
                    dateClick={handleDateClick}
                    height="80%"
                    events={events}
                />
            </div>

            {/* Side menu for event details */}
            {isMenuOpen && (
                <div
                    style={{
                        position: "absolute",
                        top: 0,
                        right: 0,
                        width: "15%",
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
                            right: "20px",
                            backgroundColor: "#f5f5f5",
                            border: "none",
                            borderRadius: "50%",
                            padding: "20px",
                            fontSize: "20px",
                            cursor: "pointer",
                            zIndex: "100"
                        }}
                    >
                        X
                    </button>
                    <EventSubmenu selectedDate={selectedDate} onAddEvent={handleSaveEvent} />
                </div>
            )}
        </div>
    );
};

export default CalendarPage;
