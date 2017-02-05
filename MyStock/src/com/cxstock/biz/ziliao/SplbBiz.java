package com.cxstock.biz.ziliao;

import java.util.List;

import com.cxstock.biz.ziliao.dto.SplbDTO;

public interface SplbBiz {
	
	
	/**
	 * 保存/修改产品类别
	 */
	public Integer saveOrUpdateSplb(SplbDTO dto);
	
	/**
	 * 删除产品类别
	 */
	public boolean deleteSplb(Integer lbid);

	/**
	 * 产品类别树
	 */
	@SuppressWarnings("unchecked")
	public List findSplbTree();

}
