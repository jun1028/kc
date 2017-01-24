package com.cxstock.action.power;

import java.text.SimpleDateFormat;
import java.util.Date;

import com.cxstock.action.BaseAction;
import com.cxstock.utils.system.DataCopy;

@SuppressWarnings("serial")
public class TuPianUploadAction extends BaseAction  {
	
	private String datapath;
	
	/**
	 * 
	 */
	public String upload(){
		try {
			SimpleDateFormat bartDateFormat = new SimpleDateFormat("yyyy_MM_dd_hh_mm");
			String d = bartDateFormat.format(new Date());
			DataCopy.backup(datapath+"data_"+d+".sql");
			this.outString("true");
		} catch (Exception e) {
			e.printStackTrace();
			this.outString("false");
		}
		return null;
	}

	
}
