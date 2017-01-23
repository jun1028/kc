package com.cxstock.biz.kucun.imp;

import java.util.List;

import com.cxstock.biz.kucun.SearchBiz;
import com.cxstock.dao.DqkcDAO;
import com.cxstock.utils.system.Constants;

@SuppressWarnings("unchecked")
public class SearchBizImpl implements SearchBiz {
	
	private DqkcDAO dqkcDao;
	
	public void setDqkcDao(DqkcDAO dqkcDao) {
		this.dqkcDao = dqkcDao;
	}

	/*
	 * 库存查询
	 */
	public List findKcByParams(Integer kfid,Integer lbid, String cktype, String search) {
		return dqkcDao.getDqkcByParams(kfid, lbid, cktype, search);
	}

	/*
	 * 库存报警
	 */
	public List findBaoJingSpxx() {
		String hql = "from Spxx as t where t.kcsl<=t.minnum";
		return dqkcDao.findByHql(hql);
	}

	public List findKcByParams(Integer kfid, Integer lbid, 
			String search) {
		// TODO Auto-generated method stub
		return this.findKcByParams(kfid, lbid, Constants.DEFAULTCKTYPE, search);
	}
	


}
