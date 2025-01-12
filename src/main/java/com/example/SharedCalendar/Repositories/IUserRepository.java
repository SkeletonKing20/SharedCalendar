package com.example.SharedCalendar.Repositories;

import com.example.SharedCalendar.Collections.User;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface IUserRepository extends MongoRepository<User, String> {
    List<User> findByUserNameStartsWith(String name);

}
