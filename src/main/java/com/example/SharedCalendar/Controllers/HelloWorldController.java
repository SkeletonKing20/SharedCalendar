package com.example.SharedCalendar.Controllers;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HelloWorldController {
    @GetMapping(value = "/helloWorld")
    public String HelloWorld(){
        return "Hello World!";
    }
}
