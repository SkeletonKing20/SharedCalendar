package com.example.SharedCalendar.Services;

import com.example.SharedCalendar.Collections.User;
import com.example.SharedCalendar.Repositories.IUserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserServiceImpl implements IUserService{
    @Autowired
    private IUserRepository userRepository;
    @Override
    public String save(User user) {
        return userRepository.save(user).getUserName();
    }

    @Override
    public List<User> getUserStartsWith(String name) {
        return userRepository.findByUserNameStartsWith(name);
    }
}
