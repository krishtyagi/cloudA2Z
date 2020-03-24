package com.c2z.cloud.uploads.service;

public class StorageFileNotFoundException extends StorageException {
	
	private static final long serialVersionUID = 8244171060611638171L;

	public StorageFileNotFoundException(String message) {
		super(message);
	}

	public StorageFileNotFoundException(String message, Throwable cause) {
		super(message, cause);
	}

}
