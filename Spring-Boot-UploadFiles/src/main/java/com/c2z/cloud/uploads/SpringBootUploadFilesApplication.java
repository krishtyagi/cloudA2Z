package com.c2z.cloud.uploads;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import com.c2z.cloud.uploads.service.StorageService;

@SpringBootApplication
public class SpringBootUploadFilesApplication {

	public static void main(String[] args) {
		SpringApplication.run(SpringBootUploadFilesApplication.class, args);
	}

	@Bean
	CommandLineRunner init(StorageService storageService) {
		return (args) -> {
			//storageService.deleteAll();
			storageService.init();
		};
	}
}
