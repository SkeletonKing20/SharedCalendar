package com.example.SharedCalendar.Services;

import com.example.SharedCalendar.Collections.Appointment;
import com.example.SharedCalendar.Repositories.IAppointmentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class AppointmentService implements IAppointmentService{
    @Autowired
    IAppointmentRepository appointmentRepository;
    @Override
    public List<Appointment> getAppointmentStartsWith(String name) {
        return null;
    }

    @Override
    public String save(Appointment appointment) {
        return appointmentRepository.save(appointment).getAppointmentId();
    }

    @Override
    public List<Appointment> getAppointmentsByCreator(String name) {
        return appointmentRepository.findByCreator(name);
    }
}
