package com.c2z.cloud.uploads.excel;

import java.io.InputStream;
import java.util.Date;
import java.util.Iterator;
import java.util.List;

import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.CellType;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.ss.usermodel.Sheet;
import org.apache.poi.ss.usermodel.Workbook;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.springframework.stereotype.Component;
import org.springframework.util.StringUtils;
import org.springframework.web.multipart.MultipartFile;

import com.c2z.cloud.uploads.service.StorageException;

@Component
public class RouterExcelProcessorService implements ExcelProcessorService {

	@Override
	public void readFile(MultipartFile file) {
		String filename = StringUtils.cleanPath(file.getOriginalFilename());
		try {
			if (file.isEmpty()) {
				throw new StorageException("Failed to store empty file " + filename);
			}
			if (filename.contains("..")) {

				// This is a security check
				throw new StorageException(
						"Cannot store file with relative path outside current directory " + filename);
			}
			InputStream inputStream = file.getInputStream();
			Workbook workbook = new XSSFWorkbook(inputStream);
			 
            Sheet firstSheet = workbook.getSheetAt(0);
            Iterator<Row> rowIterator = firstSheet.iterator();
         
            // Process headerRow
            Row headerRow = rowIterator.next();
          //  List<String> headerList=new ArrayList<>();
          //  Iterator<Cell> cellIterator = headerRow.cellIterator();
            
            
            while (rowIterator.hasNext()) {
                Row nextRow = rowIterator.next();
                Iterator<Cell> cellIterator = nextRow.cellIterator();
 
                while (cellIterator.hasNext()) {
                    Cell nextCell = cellIterator.next();
 
                    CellType cType= nextCell.getCellType();
                    System.out.println(" CellType=="+cType);
                    int columnIndex = nextCell.getColumnIndex();
                    
                    switch (columnIndex) {
                    case 1: case 2: case 3: case 4:
                        String name = nextCell.getStringCellValue();
                         System.out.println("name ::"+name);
                        break;
                    case 6:
                        Date enrollDate = nextCell.getDateCellValue();
                       System.out.println(enrollDate);
                    case 0:case 5:case 7:
                        int number = (int) nextCell.getNumericCellValue();
                        System.out.println("number"+number);
                    }
 
                }
            }
            
            workbook.close();
            
            
			
			//try (InputStream inputStream = file.getInputStream()) {
			//	Files.copy(inputStream, this.rootLocation.resolve(filename), StandardCopyOption.REPLACE_EXISTING);
			//}
		} catch (Exception e) {
			throw new StorageException("Failed to store file " + filename, e);
		}

	}

		
		
	
	
		
		
		
	@Override
	public void applyBusinessRules(String ruleReference) {
		// TODO Auto-generated method stub

	}

	@Override
	public void audiLog(String fileName) {
		// TODO Auto-generated method stub

	}

	@Override
	public List<Object> getAsJson() {
		// TODO Auto-generated method stub
		return null;
	}

}
