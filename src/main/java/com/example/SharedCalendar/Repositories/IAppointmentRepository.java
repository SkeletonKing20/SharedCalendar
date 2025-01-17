package com.example.SharedCalendar.Repositories;

import com.example.SharedCalendar.Collections.Appointment;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface IAppointmentRepository extends MongoRepository<Appointment, String> {
}
