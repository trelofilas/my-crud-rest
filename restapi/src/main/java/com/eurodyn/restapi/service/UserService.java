package com.eurodyn.restapi.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.eurodyn.restapi.exception.RecordNotFoundException;
import com.eurodyn.restapi.model.User;
import com.eurodyn.restapi.repository.UserRepository;

@Service
public class UserService {

	@Autowired
	UserRepository userRepository;
	
	public List<User> getAllUsers(){
		List<User> userList = userRepository.findAll();
		if( userList.size() > 0) {
			return userList;
		} else {
			return new ArrayList<User>();
		}
	}
	
	public User getUserById(Long id) throws RecordNotFoundException {
		Optional<User> user = userRepository.findById(id);
		if(user.isPresent()) {
			return user.get();
		} else {
			throw new RecordNotFoundException("No user record exist for given id");
		}
	}
	
	public User createOrUpdateUser(User newUser) throws RecordNotFoundException {
		if(newUser.getId() != null) { //update
			Optional<User> user = userRepository.findById(newUser.getId());
			
			if(user.isPresent()) {
				User updatedUser = user.get();
				updatedUser.setFirstname(newUser.getFirstname());;
				updatedUser.setSurname(newUser.getSurname());
				updatedUser.setGender(newUser.getGender());
				updatedUser.setBirthdate(newUser.getBirthdate());
				updatedUser.setHome_address(newUser.getHome_address());
				updatedUser.setWork_address(newUser.getWork_address());
				
				updatedUser = userRepository.save(updatedUser);
				return updatedUser;
			} else {
				throw new RecordNotFoundException("No user record exist for given id");
			}
		} else { //create
			newUser = userRepository.save(newUser);
			return newUser;
		}	
	}
	
	public void deleteUser(Long id) throws RecordNotFoundException {
		Optional<User> user = userRepository.findById(id);
		
		if(user.isPresent()) {
			userRepository.deleteById(id);
		} else {
			throw new RecordNotFoundException("No user record exist for given id");
		}
	}

}
