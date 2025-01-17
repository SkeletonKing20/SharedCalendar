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
    private Date date;
    private Time time;
    private List<User> attendees;

    public String getAppointmentId() {
        return appointId;
    }
}
