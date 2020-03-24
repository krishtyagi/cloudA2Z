package com.c2z.cloud.uploads.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import com.c2z.cloud.uploads.excel.RouterExcelProcessorService;
import com.c2z.cloud.uploads.service.StorageFileNotFoundException;
import com.c2z.cloud.uploads.service.StorageService;

@CrossOrigin
@RequestMapping("service/v1")
@RestController
public class FileUploadController {
	private final StorageService storageService;

	@Autowired
	public FileUploadController(StorageService storageService) {
		this.storageService = storageService;
	}
	
	@Autowired
	RouterExcelProcessorService routerExcelProcessorService;

	@GetMapping("/health")
	public ResponseEntity<?> healthCheck() {
		return ResponseEntity.ok().body("File Upload Service is Healthy.");

	}

	@PostMapping("/uploadFile")
	public ResponseEntity<?> handleFileUpload(@RequestParam("file") MultipartFile file,
			RedirectAttributes redirectAttributes) {
		storageService.store(file);
		routerExcelProcessorService.readFile(file);
		String message = "You successfully uploaded " + file.getOriginalFilename() + "!";
		return ResponseEntity.ok().body(message);

	}

	@ExceptionHandler(StorageFileNotFoundException.class)
	public ResponseEntity<?> handleStorageFileNotFound(StorageFileNotFoundException exc) {
		return ResponseEntity.notFound().build();
	}

}
