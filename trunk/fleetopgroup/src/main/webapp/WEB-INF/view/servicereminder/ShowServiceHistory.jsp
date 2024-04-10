<%@ include file="taglib.jsp"%>
<div class="content-wrapper">
	<section class="content-header">
		<div class="box">
			<div class="box-header">
				<div class="pull-left">
					<a href="<c:url value="/open"/>"><spring:message
							code="label.master.home" /></a> / <a
						href="ViewServiceReminderList.in"> Service
						Reminder</a> / <small>Service Reminder History </small>
				</div>
				<div class="col-md-off-5">
					<div class="col-md-2">
							<div class="input-group">
								<span class="input-group-addon"> <span aria-hidden="true">S-</span></span>
								<input class="form-text" id="serviceNumber"
									name="Search" type="number" min="1" required="required"
									placeholder="S-ID eg:3245" onkeyup="searchServiceByNumberOnEnter(event);"> <span
									class="input-group-btn">
									<button type="submit" name="search" id="search-btn" onclick="searchServiceReminderByNumber();"
										class="btn btn-success btn-sm">
										<i class="fa fa-search"></i>
									</button>
								</span>
							</div>
					</div>
					<c:if test="${Service.dueSoonOrOverDue || Service.service_remider_howtimes <= 1 }">
						<sec:authorize access="hasAuthority('SE_SERVICE_REMINDER')">
							<c:if test="${empty Service.serviceEntriesId}">
								<a class="btn btn-success btn-sm"
									href="<c:url value="/createServiceEntries?issue=${Service.vid},${Service.service_id}"/>">
									<span class="fa fa-plus"> </span> Create SE
								</a>
							</c:if>	
						</sec:authorize>
						<sec:authorize access="hasAuthority('WORKORDER_SERVICE_REMINDER')">
							<a class="btn btn-success btn-sm" id="create"
								href="createWorkOrder.in?service_id=${Service.service_id}">
								<i class="fa fa-edit"></i> Create WorkOrder
							</a>
						</sec:authorize>

						<sec:authorize access="hasAuthority('DEALER_SERVICE_REMINDER')">
						<a class="btn btn-success btn-sm" title="Dealer Service Entries"
							href="<c:url value="/createDealerServiceEntries?serviceReminder=${Service.service_id}"/>">
							<span class="fa fa-plus"> </span> Create DSE
						</a>
						</sec:authorize>
						<sec:authorize access="hasAuthority('SKIP_SERVICE_REMINDER')">
							<a class="btn btn-success btn-sm" title="Skip SR" href="#"
								onclick="skipRemarkModal(${Service.service_id});"> <span
								class="fa fa-fast-forward"> </span> Skip
							</a>
						</sec:authorize>
						<sec:authorize access="hasAuthority('EDIT_SERVICE_REMINDER')">
							<a class="btn btn-warning btn-sm"
								href="editServiceReminderEntry.in?service_id=${Service.service_id}">
								<i class="fa fa-pencil"></i> Edit Service Reminder
							</a>
						</sec:authorize>
						
						
						<sec:authorize access="hasAuthority('DELETE_SERVICE_REMINDER')">
							<a class="btn btn-default btn-sm"
								href="#"
								class="confirmation" onclick="deleteServiceReminder(${Service.service_id});"> <span
								class="fa fa-trash"></span> Delete
							</a>
						</sec:authorize>
					</c:if>
					<sec:authorize access="hasAuthority('EDIT_SERVICE_REMINDER')">
						<a class="btn btn-success btn-sm"  onclick="email();" > <span
							class="fa fa-plus"></span> Configure E-mail
						</a>
						</sec:authorize>
						
						<sec:authorize access="hasAuthority('EDIT_SERVICE_REMINDER')">
						<a class="btn btn-warning btn-sm"  onclick="Sms();" > <span
							class="fa fa-plus"></span> Configure SMS
						</a>
						</sec:authorize>
					<a class="btn btn-link btn-sm"
						href="ViewServiceReminderList.in">Cancel</a>
				</div>
			</div>
			<sec:authorize access="!hasAuthority('VIEW_SERVICE_REMINDER')">
				<spring:message code="message.unauth"></spring:message>
			</sec:authorize>
			
			<div class="modal fade" id="configureEmail" role="dialog">
			<div class="modal-dialog modal-md">
				<div class="modal-content">
					<div class="modal-header">
						<button type="button" class="close" data-dismiss="modal">&times;</button>
						<h4 class="modal-title">Configure E-Mail </h4>
					</div>
					
						<div class="modal-body">
								<input type="hidden" id="companyId" value="${companyId}">
								<input type="hidden" id="userId" value="${userId}">
									<input type="hidden" id="statusid" value="${status}">
										<div class="row">
											<!-- <label class="L-size control-label">Service ID</label> -->
											<div class="I-size">
												<input type="hidden" class="form-text" id="serviceId"
													name="service" value="${Service.service_id}"
													readonly="true"
													placeholder="Enter Vehicle" /> <label
													id="errorvStatus" class="error"></label>
											</div>
										</div>
										<div class="row">
											<!-- <label class="L-size control-label">Service Number</label> -->
											<div class="I-size">
												<input type="hidden" class="form-text" id="serviceNum"
													name="service" value="${Service.service_Number}" 
													readonly="true"
													placeholder="Enter Vehicle" /> <label
													id="errorvStatus" class="error"></label>
											</div>
										</div>
										<div class="row">
											
											<label class="L-size control-label">E-mail Id</label>
											<div class="I-size">
											
												<input type="text" class="form-text" id="emailId"
													name="unitCost" 
													placeholder="Enter E-mail Id" /> <label
													id="errorvStatus" class="error"></label>
												
											</div>
										</div>
										<div class="row">
											<!-- <label class="L-size control-label">VehicleId</label> -->
											<div class="I-size">
												<input type="hidden" class="form-text" id="vehicleId"
													name="discount" value="${Service.vid}"
													readonly="true"
													placeholder="Enter Vehicle" /> <label
													id="errorvStatus" class="error"></label>
											</div>
										</div>
										<div class="row">
											<label class="L-size control-label">Vehicle</label>
											<div class="I-size">
												<input type="text" class="form-text" id="vehicle"
													name="discount" value="${Service.vehicle_registration}"
													readonly="true"
													placeholder="Enter Vehicle" /> <label
													id="errorvStatus" class="error"></label>
											</div>
										</div> 
										
										<div class="row">
											<label class="L-size control-label">Service Task</label>
											<div class="I-size">
												<input type="text" class="form-text" id="serviceTask"
													name="tax" value="${Service.service_type}"
													readonly="true"
													placeholder="Enter Content" /> <label
													id="errorvStatus" class="error"></label>
											</div>
										</div> 
										<div class="row">
											<label class="L-size control-label">Service Sub-Task</label>
											<div class="I-size">
												<input type="text" class="form-text" id="serviceSubTask"
													name="tax" value="${Service.service_subtype}"
													readonly="true"
													placeholder="Enter Content" /> <label
													id="errorvStatus" class="error"></label>
											</div>
										</div>
										<div class="row">
											<label class="L-size control-label">Service Date</label>
											<div class="I-size">
												<input type="text" class="form-text" id="serviceDate"
													name="tax" value="${Service.time_servicedate}"
													readonly="true"
													placeholder="Enter Content" /> <label
													id="errorvStatus" class="error"></label>
											</div>
										</div>
										
										<div class="row">
											<label class="L-size control-label">Alert Before Date</label>
											<div class="I-size">
												<input type="text" class="form-text" id="alertBeforeDate"
													name="tax" readonly="true"
													placeholder="How many days before the service Eg:2,4" /> <label
													id="errorvStatus" class="error"></label>
											</div>
										</div>
										
										<div class="row">
											<div class="col-xs-3"></div>
											<label class="checkbox-inline"> <input
													type="checkbox" name="privileges" 
													onclick="showAlertAfterDate(this);"
													 id="alertAfterDate1" autocomplete="off" />
													Do you need alert after date
												</label>
											</div>
											
											<div class="row hide" id="alertdate">
											<label class="L-size control-label">Alert After Date</label>
											<div class="I-size">
												<input type="text" class="form-text" id="alertAfterDate"
													name="tax" 
													placeholder="How many days After the service Eg:1,5" /> <label
													id="errorvStatus" class="error"></label>
											</div>
											</div>
							
							<br>
						</div>
						<div class="modal-footer">
							<button type="submit" onclick="addEmail()" class="btn btn-success">Save</button>
							<button type="button" class="btn btn-default"
								data-dismiss="modal">Close</button>
						</div>
					
				</div>
			</div>
		</div>
			
			
			<div class="modal fade" id="configureSms" role="dialog">
			<div class="modal-dialog modal-md">
				<div class="modal-content">
					<div class="modal-header">
						<button type="button" class="close" data-dismiss="modal">&times;</button>
						<h4 class="modal-title">Configure SMS </h4>
					</div>
					
						<div class="modal-body">
						
										<div class="row">
											<!-- <label class="L-size control-label">Service ID</label> -->
											<div class="I-size">
												<input type="hidden" class="form-text" id="serviceId1"
													name="service" value="${Service.service_id}"
													readonly="true"
													placeholder="Enter Vehicle" /> <label
													id="errorvStatus" class="error"></label>
											</div>
										</div>
										<div class="row">
											<!-- <label class="L-size control-label">Service Number</label> -->
											<div class="I-size">
												<input type="hidden" class="form-text" id="serviceNumber1"
													name="service" value="${Service.service_Number}"
													readonly="true"
													placeholder="Enter Vehicle" /> <label
													id="errorvStatus" class="error"></label>
											</div>
										</div>
										
										<div class="row">
											<label class="L-size control-label">Mobile No</label>
											<div class="I-size">
												<input type="text" class="form-text" id="mobileNumber"
													name="mobileNumber" onkeypress="return isNumberKey(event)"
													placeholder="Enter 10 digit Mobile Number" /> <label
													id="errorvStatus" class="error"></label>
											</div>
										</div>
										<div class="row">
											<!-- <label class="L-size control-label">VehicleId</label> -->
											<div class="I-size">
												<input type="hidden" class="form-text" id="vehicleId1"
													name="discount" value="${Service.vid}"
													readonly="true"
													placeholder="Enter Vehicle" /> <label
													id="errorvStatus" class="error"></label>
											</div>
										</div>
										<div class="row">
											<label class="L-size control-label">Vehicle</label>
											<div class="I-size">
												<input type="text" class="form-text" id="vehicle1"
													name="discount" value="${Service.vehicle_registration}"
													readonly="true"
													placeholder="Enter Vehicle" /> <label
													id="errorvStatus" class="error"></label>
											</div>
										</div> 
										<div class="row">
											<label class="L-size control-label">Service Task</label>
											<div class="I-size">
												<input type="text" class="form-text" id="serviceTask1"
													name="tax" value="${Service.service_type}"
													readonly="true"
													placeholder="Enter Content" /> <label
													id="errorvStatus" class="error"></label>
											</div>
										</div> 
										<div class="row">
											<label class="L-size control-label">Service Sub-Task</label>
											<div class="I-size">
												<input type="text" class="form-text" id="serviceSubTask1"
													name="tax" value="${Service.service_subtype}"
													readonly="true"
													placeholder="Enter Content" /> <label
													id="errorvStatus" class="error"></label>
											</div>
										</div>
										<div class="row">
											<label class="L-size control-label">Service Date</label>
											<div class="I-size">
												<input type="text" class="form-text" id="serviceDate1"
													name="tax" value="${Service.time_servicedate}"
													
													placeholder="Enter Content" /> <label
													id="errorvStatus" class="error"></label>
											</div>
										</div>
										
										<div class="row">
											<label class="L-size control-label">Alert Before Date</label>
											<div class="I-size">
												<input type="text" class="form-text" id="alertBeforeDate1"
													name="tax" onkeypress="return isNumberKey(event,this);"
													placeholder="How many days Before the service Eg:1,4" /> <label
													id="errorvStatus" class="error"></label>
											</div>
										</div>
										
										<div class="row">
											<div class="col-xs-3"></div>
											<label class="checkbox-inline"> <input
													type="checkbox" name="privileges" 
													onclick="showAlertAfterDate1(this);"
													 id="alertAfterDate2" autocomplete="off" />
													Do you need alert after date
												</label>
											</div>
											
											<div class="row hide" id="alertdate1">
											<label class="L-size control-label">Alert After Date</label>
											<div class="I-size">
												<input type="text" class="form-text" id="alertAfterDate3"
													name="tax" 
													placeholder="How many days After the service Eg:4,7" /> <label
													id="errorvStatus" class="error"></label>
											</div>
											</div>
							
							<br>
						</div>
						<div class="modal-footer">
							<button type="submit" onclick="addSms()" class="btn btn-success">Save</button>
							<button type="button" class="btn btn-default"
								data-dismiss="modal">Close</button>
						</div>
					
				</div>
			</div>
		</div>
		
			<div class="modal fade" id="skipSrRemark" role="dialog">
			<div class="modal-dialog" style="width: 980px;">
				<div class="modal-content">
						<div class="modal-header">
							<button type="button" class="close" data-dismiss="modal"
								aria-label="Close">
								<span aria-hidden="true">&times;</span>
							</button>
							<h4 class="modal-title">Skip Remark</h4><br><samp style="color: blue;">Service reminder will be skipped and rescheduled .</samp>
						</div>
						<div class="modal-body">
						<input type="hidden" id="skipSrId" >
					
							<div class="row1">
											<label class="L-size control-label" for="skipRemark">Remark
												</label>
											<div class="I-size">
											<script language="javascript" src="jquery.maxlength.js"></script>
				                                 <textarea class="text optional form-text"
																id="skipRemark" name="skipRemark"
																rows="3" maxlength="1000"></textarea>
											</div>
										</div>
						</div>
						<div class="modal-footer">
							<button type="submit" onclick="skipServiceReminder();" id="btnSubmit" class="btn btn-primary">
								<span>Skip SR</span>
							</button>
							<button type="button" class="btn btn-default"
								data-dismiss="modal">
								<span>Cancel</span>
							</button>
						</div>
				</div>
			</div>
		</div>
			
			
			<sec:authorize access="hasAuthority('VIEW_SERVICE_REMINDER')">
				<div class="box-body">
					<div class="pull-left1">
							<h3 class="secondary-header-title">
							
							</h3>
						<h3 class="secondary-header-title">
							<a
								href="#"
								data-toggle="tip" data-original-title="Click Vehicle Details">
								<span style="color: black;">Service Number : ${Service.service_Number}</span>
							</a>
							<a
								href="<c:url value="/VehicleServiceDetails.in?vid=${Service.vid}"/>"
								data-toggle="tip" data-original-title="Click Vehicle Details">
								  <span class="fa fa-bus">  </span> <c:out value="${Service.vehicle_registration}" />
							</a>
							
							<a 
								href="<c:url value="/ServiceReminderHistory.in?service_id=${Service.service_id}"/>"
								class="btn btn-success btn-sm"  >  History 
						    </a>
							</h3>
							<!--  -->	
							
						<div class="secondary-header-title">
							<ul class="breadcrumb">
								<li><span class="fa fa-bell">Task :</span> <a href=""
									data-toggle="tip" data-original-title="Service Task"> <c:out
											value="${Service.service_type}" />
								</a></li>
								<li><span class="fa fa-bell">Sub Task :</span> <a href=""
									data-toggle="tip" data-original-title="Service Task"> <c:out
											value="${Service.service_subtype}" />
								</a></li>
								<li><span class="fa fa-usb"> Odometer :</span> <a href=""
									data-toggle="tip" data-original-title="Current Odometer"> <c:out
											value="${Service.vehicle_currentOdometer} Km" /></a></li>
								<li><span class="fa fa-usb">Service Odometer :</span> <a
									href="" data-toggle="tip"
									data-original-title="Service odometer"> <c:out
											value="${Service.meter_serviceodometer}" />
								</a></li>
							</ul>
						</div>
					</div>
				</div>
			</sec:authorize>
		</div>
	</section>
	<section class="content">
		<sec:authorize access="!hasAuthority('VIEW_SERVICE_REMINDER')">
			<spring:message code="message.unauth"></spring:message>
		</sec:authorize>
		<sec:authorize access="hasAuthority('VIEW_SERVICE_REMINDER')">
			<div class="row">
				<div class="col-md-10 col-sm-10 col-xs-12">
					<div class="main-body">
						<div class="row">
							<c:if test="${param.emptyWO eq true}">
								<div class="alert alert-danger">
									<button class="close" data-dismiss="alert" type="button">x</button>
									Create WorkOrders Required Vehicle Name, Assigned To, Start
									date, Work_Location..and Task please enter.
								</div>
							</c:if>
							<c:if test="${param.saveWorkOrder eq true}">
								<div class="alert alert-success">
									<button class="close" data-dismiss="alert" type="button">x</button>
									This Service_Reminder to Work_Order Created successfully and
									Service_Reminder Resolved. WO-${successWOID}
								</div>
							</c:if>
							<c:if test="${param.closeStatus eq true}">
								<div class="alert alert-danger">
									<button class="close" data-dismiss="alert" type="button">x</button>

									${VMandatory}<br> You should be close first TripSheet or
									Change Status or close workOrder .
								</div>
							</c:if>
							<c:if test="${param.sequenceNotFound eq true}">
								<div class="alert alert-danger">
									<button class="close" data-dismiss="alert" type="button">x</button>
									WorkOrder Sequence Not Found Please Contact To System admininstrator !
								</div>
							</c:if>
							<input type="hidden" id="serviceReminderId" value="${Service.service_id}">
							<div style="width:90%" class="col-md-6 col-sm-5 col-xs-12">
								<div class="box box-success" style ="width:90%">
									<table id="historyDetails" style="width:100%; margin: 0 auto; padding:20px;" class="table table-hover table-bordered">
											<thead id="tableHeaderHistory"></thead> 
											<tbody style="height:30px;margin: 0 auto; padding:20px;align-text:center" id="TableBodyHistory">
											</tbody>
								   </table>
								</div>
							</div>	
						</div>
					</div>
				</div>
			</div>
			<div class="row">
				<small class="text-muted"><b>Created by :</b> <c:out
						value="${Service.createdBy}" /></small> | <small class="text-muted"><b>Created
						date: </b> <c:out value="${Service.created}" /></small> | <small
					class="text-muted"><b>Last updated by :</b> <c:out
						value="${Service.lastModifiedBy}" /></small> | <small class="text-muted"><b>Last
						updated date:</b> <c:out value="${Service.lastupdated}" /></small>
			</div>

		</sec:authorize>
	</section>
	
	
	<script type="text/javascript"
		src="<c:url value="/resources/QhyvOb0m3EjE7A4/js/fleetop/SR/ServiceReminderHistory.js" />"></script>	
  <script type="text/javascript"
		src="<c:url value="/resources/QhyvOb0m3EjE7A4/js/fleetop/genericfunctions.js" />"></script>  
</div>