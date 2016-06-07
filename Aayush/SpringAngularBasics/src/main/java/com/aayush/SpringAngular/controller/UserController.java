package com.aayush.SpringAngular.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.util.UriComponentsBuilder;

import com.aayush.SpringAngular.model.User;
import com.aayush.SpringAngular.service.UserService;
import java.util.HashMap;
import java.util.Map;

@RestController
public class UserController {

    @Autowired
    UserService userService;

    @RequestMapping(value = "/", method = RequestMethod.GET)
    public String home() {
        return "UserManagement";
    }

    @RequestMapping(value = "/getRadio", method = RequestMethod.GET)
    public ResponseEntity<Map<String, String>> getGender() {
        System.out.println("In radio button section");
        Map<String, String> map = new HashMap<>();
        map.put("male", "Male");
        map.put("female", "Female");
        return new ResponseEntity<Map<String, String>>(map, HttpStatus.OK);
    }

    @RequestMapping(value = "/user/", method = RequestMethod.POST)
    public ResponseEntity<Void> saveUser(@RequestBody User user, UriComponentsBuilder ucBuilder) {
        System.out.println("Creating user " + user.getUserName());

        if (userService.isUserExists(user)) {
            System.out.println("User with username : " + user.getUserName() + " already exists");
            return new ResponseEntity<Void>(HttpStatus.CONFLICT);
        }

        int checkInsert = userService.saveUser(user);
        if (checkInsert > 0) {
            HttpHeaders httpHeaders = new HttpHeaders();
            httpHeaders.setLocation(ucBuilder.path("/user/{id}").buildAndExpand(user.getId()).toUri());
            return new ResponseEntity<Void>(httpHeaders, HttpStatus.CREATED);
        }
        System.out.println("Some error occured!!!");
        return new ResponseEntity<Void>(HttpStatus.NOT_FOUND);
    }

    @RequestMapping(value = "/user/{id}", method = RequestMethod.POST)
    public ResponseEntity<User> updateUser(@RequestBody User user, @PathVariable("id") int id) {
        System.out.println("Updating user " + user.getUserName());

        //find the details of the current user
        User currentUser = userService.findById(id);

        if (currentUser == null) {
            System.out.println("User with id " + id + "not found.");
            return new ResponseEntity<User>(HttpStatus.NOT_FOUND);
        }

        //setting the id to the value that has to be edited.
        user.setId(id);

        int checkUpdate = userService.updateUser(user);

        if (checkUpdate > 0) {
            System.out.println("User update successfully.");
            return new ResponseEntity<User>(user, HttpStatus.OK);
        }
        return new ResponseEntity<User>(HttpStatus.NOT_MODIFIED);
    }

    @RequestMapping(value = "/user/{id}", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<Void> getUser(@PathVariable("id") int id) {
        System.out.println("Fetching a user");
        User user = userService.findById(id);
        if (user == null) {
            System.out.println("User not found.");
            return new ResponseEntity<Void>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<Void>(HttpStatus.OK);
    }

    @RequestMapping(value = "/user/", method = RequestMethod.GET)
    public ResponseEntity<List<User>> getAllUsers() {
        System.out.println("Fetching a user");
        List<User> users = userService.listUsers();
        if (users.isEmpty()) {
            System.out.println("Users not found.");
            return new ResponseEntity<List<User>>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<List<User>>(users, HttpStatus.OK);
    }

    //------------------- Delete a User --------------------------------------------------------
    @RequestMapping(value = "/user/{id}", method = RequestMethod.DELETE)
    public ResponseEntity<User> deleteUser(@PathVariable("id") int id) {
        System.out.println("Fetching & Deleting User with id " + id);

        User user = userService.findById(id);
        if (user == null) {
            System.out.println("Unable to delete. User with id " + id + " not found");
            return new ResponseEntity<User>(HttpStatus.NOT_FOUND);
        }

        userService.deleteUser(id);
        return new ResponseEntity<User>(HttpStatus.NO_CONTENT);
    }

}
