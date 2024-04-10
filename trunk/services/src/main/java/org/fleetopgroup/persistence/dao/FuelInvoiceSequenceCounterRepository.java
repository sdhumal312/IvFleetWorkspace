package org.fleetopgroup.persistence.dao;

import org.fleetopgroup.persistence.model.FuelInvoiceSequenceCounter;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface FuelInvoiceSequenceCounterRepository extends JpaRepository<FuelInvoiceSequenceCounter, Long> {

	@Query("From FuelInvoiceSequenceCounter RRSC where RRSC.companyId = ?1 AND RRSC.markForDelete = 0 ")
	public FuelInvoiceSequenceCounter findNextNumber(Integer companyId) throws Exception;
	
	@Modifying
	@Query("UPDATE FuelInvoiceSequenceCounter RRSC SET RRSC.nextVal = ?1  where RRSC.sequence_Id = ?2")
	public void updateNextNumber(long nextVal, long sequenceId) throws Exception;

}
