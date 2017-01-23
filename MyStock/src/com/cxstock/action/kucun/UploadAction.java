package com.cxstock.action.kucun;

import java.io.*;
import java.util.Date;
import java.util.UUID;

import org.apache.struts2.ServletActionContext;

import com.opensymphony.xwork2.ActionSupport;


public class UploadAction extends ActionSupport {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	private File upload;
	private String uploadContentType;
	
	private String uploadFileName;   //fileName 前面必須和uplaod一致,不然找不到文件
	
	public File getUpload() {
		return upload;
	}

	public void setUpload(File upload) {
		this.upload = upload;
	}

	public String getUploadContentType() {
		return uploadContentType;
	}

	public void setUploadContentType(String uploadContentType) {
		this.uploadContentType = uploadContentType;
	}

	public String getUploadFileName() {
		return uploadFileName;
	}

	public void setUploadFileName(String uploadFileName) {
		this.uploadFileName = uploadFileName;
	}

	// 上传文件的文件名
	

	private String getFileExp(String name) {
		int pos = name.lastIndexOf(".");

		return name.substring(pos);
	}
	
	private static final int BUFFER_SIZE = 16 * 1024;
	
	public String execute() throws Exception{
	
		Date d = new Date();
		
		System.out.println("uploadFileName = "+this.uploadFileName);
		
		//upload --  wapps 下面的文件夹,用来存放图片
		String toSrc = ServletActionContext.getServletContext().getRealPath("upload")+"/"+d.getTime()+getFileExp(this.uploadFileName);  //使用時間戳作為文件名
	
		System.out.println("toFile= "+toSrc);
		
		File toFile = new File(toSrc);
	
		
		writeFile(this.upload,toFile);
		
		return SUCCESS;
	}


	private static void writeFile(File src, File dst) {
		
		System.out.println(" == 文件寫入 == ");
		try {
			InputStream in = null;
			OutputStream out = null;
			try {
			
				in = new BufferedInputStream(new FileInputStream(src),
						BUFFER_SIZE);
				out = new BufferedOutputStream(new FileOutputStream(dst),
						BUFFER_SIZE);
				byte[] buffer = new byte[BUFFER_SIZE];
				while (in.read(buffer) > 0) {
					out.write(buffer);
				}
			} finally {
				if (null != in) {
					in.close();
				}
				if (null != out) {
					out.close();
				}
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
		
		System.out.println("写入成功！");
}
}
