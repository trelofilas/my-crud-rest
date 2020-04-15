package com.eurodyn.restapi.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.eurodyn.restapi.model.User;

public interface UserRepository extends JpaRepository<User, Long>{

}
