package com.example.SharedCalendar.Collections;

import com.fasterxml.jackson.annotation.JsonInclude;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.sql.Date;
import java.sql.Time;
import java.util.List;

@Document(collection = "appointment")
@JsonInclude(JsonInclude.Include.NON_NULL)
public class Appointment {
    @Id
    private String appointId;
    private String creator;
    private String description;

    private List<User> attendees;

    public String getAppointmentId() {
        return appointId;
    }

    public String getDescription() {
        return description;
    }

    public List<User> getAttendees() {
        return attendees;
    }

    public String getCreator() {
        return creator;
    }
}
