<%@ include file="taglib.jsp"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn"%>
<div class="content-wrapper">
	<section class="content-header">
		<div class="box">
			<div class="box-header">
				<div class="pull-left">
					<a href="<c:url value="/open"/>"><spring:message
							code="label.master.home" /></a> / <a
						href="<c:url value="/vehicle/1/1"/>">Vehicle</a> / <a
						href="<c:url value="showVehicle.in?vid=${vehicle.vid}"/>"><c:out
							value="${vehicle.vehicle_registration}" /></a> / <span>New
						Vehicle Service Reminder</span>
				</div>
				<div class="pull-right">
					<sec:authorize access="hasAuthority('ADD_SERVICE_REMINDER')">
						<a class="btn btn-success btn-sm"
							href="addServiceReminderEntry.in?vid=${vehicle.vid}"> <i
							class="fa fa-plus"></i> Add Service Reminder
						</a>
					</sec:authorize>
					<a class="btn btn-link btn-sm" href="showVehicle.in?vid=${vehicle.vid}">Cancel</a>
				</div>
			</div>
			<div class="box-body">
				<sec:authorize access="!hasAuthority('VIEW_VEHICLE')">
					<spring:message code="message.unauth"></spring:message>
				</sec:authorize>
				<sec:authorize access="hasAuthority('VIEW_VEHICLE')">
					<div class="pull-left">
						<a href="${pageContext.request.contextPath}/getImageVehicle/${vehicle.vehicle_photoid}.in"
								class="zoom" data-title="Vehicle Photo" data-footer="" 
								data-type="image" data-toggle="lightbox"> 
								  <span class="info-box-icon bg-green" id="iconContainer"><i class="fa fa-bus"></i></span>
							      <img src="${pageContext.request.contextPath}/getImageVehicle/${vehicle.vehicle_photoid}.in"
							         class="img-rounded" alt=" " width="100" height="100" id="vehicleImage" onerror="hideImageOnError(this)" />
						</a>
					</div>
					<div class="pull-left1">
						<h3 class="secondary-header-title">
							<a href="showVehicle.in?vid=${vehicle.vid}"> <c:out
									value="${vehicle.vehicle_registration}" />
							</a>
						</h3>
						<div class="secondary-header-title">
							<ul class="breadcrumb">
								<li><span class="fa fa-black-tie" aria-hidden="true"
									data-toggle="tip" data-original-title="Status"><a
										href="#"><c:out value=" ${vehicle.vehicle_Status}" /></a></span></li>
								<li><span class="fa fa-clock-o" aria-hidden="true"
									data-toggle="tip" data-original-title="Odometer"><a
										href="#"><c:out value=" ${vehicle.vehicle_Odometer}" /></a></span></li>
								<li><span class="fa fa-bus" aria-hidden="true"
									data-toggle="tip" data-original-title="Type"><a href="#"><c:out
												value=" ${vehicle.vehicle_Type}" /></a></span></li>
								<li><span class="fa fa-map-marker" aria-hidden="true"
									data-toggle="tip" data-original-title="Location"><a
										href="#"><c:out value=" ${vehicle.vehicle_Location}" /></a></span></li>
								<li><span class="fa fa-users" aria-hidden="true"
									data-toggle="tip" data-original-title="Group"><a
										href="#"><c:out value=" ${vehicle.vehicle_Group}" /></a></span></li>
								<li><span class="fa fa-road" aria-hidden="true"
									data-toggle="tip" data-original-title="Route"><a
										href="#"><c:out value=" ${vehicle.vehicle_RouteName}" /></a></span></li>
							</ul>
						</div>
					</div>
				</sec:authorize>
			</div>
		</div>
	</section>
	<section class="content-body">
		<div class="row">
			<sec:authorize access="!hasAuthority('VIEW_SERVICE_REMINDER')">
				<spring:message code="message.unauth"></spring:message>
			</sec:authorize>
			<sec:authorize access="hasAuthority('VIEW_SERVICE_REMINDER')">
				<div class="col-md-9 col-sm-9 col-xs-12">
					<c:if test="${param.saveService eq true}">
						<div class="alert alert-success">
							<button class="close" data-dismiss="alert" type="button">x</button>
							This Service Created successfully .
						</div>
					</c:if>
					<c:if test="${param.updateService eq true}">
						<div class="alert alert-success">
							<button class="close" data-dismiss="alert" type="button">x</button>
							This Service Updated successfully .
						</div>
					</c:if>
					<c:if test="${param.deleteService eq true}">
						<div class="alert alert-success">
							<button class="close" data-dismiss="alert" type="button">x</button>
							This Service Deleted successfully .
						</div>
					</c:if>
					<c:if test="${param.danger eq true}">
						<div class="alert alert-danger">
							<button class="close" data-dismiss="alert" type="button">x</button>
							This Service Not Create successfully .
						</div>
					</c:if>
					<c:if test="${param.alreadyCreatedWorkOrder eq true}">
						<div class="alert alert-danger">
							<button class="close" data-dismiss="alert" type="button">x</button>
							This Service Reminder was already created. Please Wait for
							Complete Work Order.
						</div>
					</c:if>
					<div class="row">
						<div class="main-body">
							<c:if test="${!empty Service}">
								<div class="box">
									<div class="box-body">
										<table id="FuelTable"
											class="table table-hover table-striped">
											<thead>
												<tr>
													<th class="fit">Id</th>
													<!-- <th>Vehicle</th> -->
													<th>Service Task &amp; Schedule</th>
													<th>Next Due</th>
													<th class="fit ar">Subscribers</th>
													<th class="fit ar">Actions</th>
												</tr>
											</thead>
											<tbody>
												<c:forEach items="${Service}" var="Service">
													<tr data-object-id="" class="ng-scope">
														<td class="fit"><a
															href="ShowService.in?Service_id=${Service.service_id}"><c:out
																	value="S-${Service.service_Number}" /></a></td>
														<td>
																	${Service.diffenceThrsholdOdometer}
																 
															<b style="font-size: 15px;"><a><c:out
																		value="${Service.service_type} - " /> <c:out
																		value="${Service.service_subtype}" /></a></b> 
																		<span>every
																		<c:if test ="${Service.time_interval > 0}">
																<c:out value="${Service.time_interval} " /> <c:out
																	value="${Service.time_intervalperiod} " /></c:if> 
																	 <c:if test ="${Service.meter_interval > 0}">/ <c:out
																	value="${Service.meter_interval}  Km" /></c:if>
														</span></td>
														<td>
														<c:if test="${Service.diffrent_time_days != ''}">
														<i class="fa fa-calendar-check-o"></i> 
																	${Service.diffrent_time_days}
															 <br></c:if>
															 <c:if test="${Service.diffrent_meter_oddmeter != ''}">
															  <i class="fa fa-road"></i> 
																${Service.diffrent_meter_oddmeter}
																</c:if>
																
														<td class="fir ar"><c:out
																value="${Service.service_subscribeduser_name}" /></td>
														<td class="fir ar">
															<div class="btn-group">
																<a class="btn btn-default btn-sm dropdown-toggle"
																	data-toggle="dropdown" href="#"> <span
																	class="fa fa-ellipsis-v"></span>
																</a>

																<ul class="dropdown-menu pull-right">
																<c:choose>
																
																
																<c:when test="${Service.dueSoonOrOverDue || Service.service_remider_howtimes <= 1 }">
																	<li><sec:authorize
																			access="hasAuthority('WORKORDER_SERVICE_REMINDER')">
																			<a
																				href="VehicleServiceWorkOrder.in?service_id=${Service.service_id}">
																				<i class="fa fa-edit"></i> Create WorkOrder
																			</a>
																		</sec:authorize></li>
																			<li><sec:authorize
																					access="hasAuthority('DEALER_SERVICE_REMINDER')">
																					<a
																						href="<c:url value="/createDealerServiceEntries?serviceReminder=${Service.service_id}"/>">
																						<span class="fa fa-plus"> </span> Create DSE
																					</a>
																				</sec:authorize></li>

																			<li><sec:authorize
																			access="hasAuthority('SKIP_SERVICE_REMINDER')">
																			<c:if test="${Service.dueSoonOrOverDue}">
																			<a
																				href="#" onclick="skipRemarkModal(${Service.service_id});">
																				<i class="fa fa-fast-forward"></i> Skip
																			</a>
																			</c:if>
																		</sec:authorize></li>

																	<li><sec:authorize
																			access="hasAuthority('EDIT_SERVICE_REMINDER')">
																			<a
																				href="VehicleServiceEdit.in?service_id=${Service.service_id}">
																				<i class="fa fa-edit"></i> Edit
																			</a>
																		</sec:authorize></li>
																	<li><sec:authorize
																			access="hasAuthority('DELETE_SERVICE_REMINDER')">
																			<a
																				href="VehicleServiceDelete.in?service_id=${Service.service_id}"
																				class="confirmation"
																				onclick="return confirm('Are you sure? Delete ')">
																				<span class="fa fa-trash"></span> Delete
																			</a>
																		</sec:authorize></li>
																		</c:when>
																		<c:otherwise>
																		<li><span class="label label-warning"><i class="fa fa-dot-circle-o"></i>WorkOrder/DSE/Skipped</span></li>
																		</c:otherwise>
																		
																</c:choose>
																</ul>
															</div>
														</td>
													</tr>
												</c:forEach>
											</tbody>
										</table>
									</div>
								</div>
							</c:if>
							<c:if test="${empty Service}">
								<div class="main-body">
									<p class="lead text-muted text-center t-padded">
										<spring:message code="label.master.noresilts" />
									</p>
								</div>
							</c:if>
						</div>
					</div>
				</div>
			</sec:authorize>
			
			<div class="col-md-2 col-sm-2 col-xs-12">
				<%@include file="VehicleSideMenu.jsp"%>
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
	</section>
</div>
	<script type="text/javascript">
		 $(document).ready(function() {
	         var img = $("#vehicleImage");
	         var iconContainer = $("#iconContainer");
	
	         // Check if the image is loaded
	         img.on("load", function() {
	             // If loaded, hide the icon
	             iconContainer.hide();
	         });
	     });
	</script>
	<script type='text/javascript' src="<c:url value="/resources/QhyvOb0m3EjE7A4/js/photoView/ekko-lightbox.js"/>" ></script>

	<script type="text/javascript"
		src="<c:url value="/resources/QhyvOb0m3EjE7A4/js/fleetop/SR/ViewServiceReminderList.js" />"></script>	