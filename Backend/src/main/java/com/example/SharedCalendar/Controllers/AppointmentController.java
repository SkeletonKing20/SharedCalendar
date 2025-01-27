package com.example.SharedCalendar.Controllers;

import com.example.SharedCalendar.Collections.Appointment;
import com.example.SharedCalendar.Collections.User;
import com.example.SharedCalendar.Services.IAppointmentService;
import com.example.SharedCalendar.Services.IUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/appointment")
public class AppointmentController {
    @Autowired
    private IAppointmentService appointmentService;

    @PostMapping
    public String save(@RequestBody Appointment appointment){
        return appointmentService.save(appointment);
    }

    @GetMapping
    public List<Appointment> getAllByCreator(@RequestParam("name") String name){
        return appointmentService.getAppointmentsByCreator(name);
    }
}
