package org.fleetopgroup.persistence.serviceImpl;

import org.fleetopgroup.persistence.model.TripsheetPickAndDropInvoiceSequenceCounter;
import org.springframework.stereotype.Service;

@Service
public interface ITripsheetPickAndDropInvoiceSequenceService {

	public TripsheetPickAndDropInvoiceSequenceCounter findNextInvoiceNumber(Integer companyId) throws Exception;
	
	public void updateNextInvoiceNumber(long nextVal, Integer companyId, long sequence_Id) throws Exception;
}