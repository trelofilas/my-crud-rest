package com.eurodyn.restapi;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;

@SpringBootApplication
@EnableJpaAuditing
public class RestfulExampleApplication {

	public static void main(String[] args) {
		SpringApplication.run(RestfulExampleApplication.class, args);
	}

}
