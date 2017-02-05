package com.cxstock.biz.ziliao;

import com.cxstock.pojo.Spxx;
import com.cxstock.utils.pubutil.Page;

public interface SpxxBiz {
	
	/**
	 * 产品编号
	 */
	public String getSpxxCode();
	
	/**
	 * 分页查询产品列表
	 */
	public void findPageSpxx(Page page);
	
	/**
	 * 保存产品
	 */
	public void save(Spxx dto);
	
	/**
	 * 修改改产品
	 */
	public void updateSpxx(Spxx dto);
	
	/**
	 * 删除产品
	 */
	public boolean deleteSpxx(String spid);


}
