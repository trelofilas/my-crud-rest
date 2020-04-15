package com.eurodyn.restapi.web;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.eurodyn.restapi.exception.RecordNotFoundException;
import com.eurodyn.restapi.model.User;
import com.eurodyn.restapi.service.UserService;

@RestController
@RequestMapping("/api")
public class UserController {
	
	@Autowired 
	UserService userService;
	
	@GetMapping("/user")
	public ResponseEntity<List<User>> getAllUsers(){
		List<User> userList = userService.getAllUsers();
		return new ResponseEntity<List<User>>(userList, new HttpHeaders(), HttpStatus.OK);
	}
	
	@GetMapping("/user/{id}")
	public ResponseEntity<User> getUserById(@PathVariable("id") Long id) throws RecordNotFoundException {
		User user = userService.getUserById(id);
		return new ResponseEntity<User>(user, new HttpHeaders(), HttpStatus.OK);
	}
	
	@PostMapping("/user")
	public ResponseEntity<User> createOrUpdateUser(@RequestBody User user) throws RecordNotFoundException {
		user = userService.createOrUpdateUser(user);
		return new ResponseEntity<User>(user, new HttpHeaders(), HttpStatus.OK);
	}
	
	@PutMapping("/user/{id}")
	public ResponseEntity<User> updateUser(@PathVariable("id") Long id, @RequestBody User user) throws RecordNotFoundException {
		user.setId(id);
		user = userService.createOrUpdateUser(user);
		return new ResponseEntity<User>(user, new HttpHeaders(), HttpStatus.OK);
	}
	
	@DeleteMapping("/user/{id}")
	public HttpStatus deleteUser(@PathVariable("id") Long id) throws RecordNotFoundException {
		userService.deleteUser(id);
		return HttpStatus.FORBIDDEN;
	}
}
