package com.example.SharedCalendar.Services;

import com.example.SharedCalendar.Collections.Appointment;

import java.util.List;

public interface IAppointmentService {
    List<Appointment> getAppointmentStartsWith(String name);

    String save(Appointment appointment);
}
