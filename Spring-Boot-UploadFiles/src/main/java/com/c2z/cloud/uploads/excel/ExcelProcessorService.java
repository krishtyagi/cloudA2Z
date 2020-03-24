package com.c2z.cloud.uploads.excel;

import java.util.List;

import org.springframework.web.multipart.MultipartFile;

public interface ExcelProcessorService {
	
	void readFile(MultipartFile file);
	void applyBusinessRules(String ruleReference);
	void audiLog(String fileName);
	List<Object> getAsJson();

}
