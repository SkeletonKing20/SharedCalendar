package com.example.SharedCalendar.Repositories;

import com.example.SharedCalendar.Collections.Appointment;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface IAppointmentRepository extends MongoRepository<Appointment, String> {

    List<Appointment> findByCreator(String name);
}
