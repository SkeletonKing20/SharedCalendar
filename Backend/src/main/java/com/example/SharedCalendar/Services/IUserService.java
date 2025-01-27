package com.example.SharedCalendar.Services;

import com.example.SharedCalendar.Collections.User;

import java.util.List;

public interface IUserService {

    String save(User user);

    List<User> getUserStartsWith(String name);
}
