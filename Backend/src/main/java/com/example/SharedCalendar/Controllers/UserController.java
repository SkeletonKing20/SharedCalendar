package com.example.SharedCalendar.Controllers;

import com.example.SharedCalendar.Collections.User;
import com.example.SharedCalendar.Services.IUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/user")
public class UserController {
    @Autowired
    private IUserService userService;

    @PostMapping
    public String save(@RequestBody User user){
        return userService.save(user);
    }

    @GetMapping
    public List<User> getUserStartsWith(@RequestParam("name") String name){
        return userService.getUserStartsWith(name);
    }
}
