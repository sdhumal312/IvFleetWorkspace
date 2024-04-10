<%@ include file="taglib.jsp"%>
<link rel="stylesheet"
	href="<c:url value="/resources/QhyvOb0m3EjE7A4/css/select/select2.min.css" />">
<div class="content-wrapper">
	<section class="content-header">
		<div class="box">
			<div class="box-body">
				<div class="pull-left">
					<a href="<c:url value="/open.html"/>"><spring:message
							code="label.master.home" /></a> / <small><a
						href="<c:url value="/addPartLocations.in"/>">New Part
							Locations</a> / <span id="NewPartLocations">Edit Part
							Locations</span></small>
				</div>
				<div class="pull-right">
					<sec:authorize access="hasAuthority('ADD_PRIVILEGE')">
						<a href="createPartLocations.in" class="btn btn-success"><span
							class="fa fa-plus" id="AddPartLocations"> Create Part
								Locations</span></a>
					</sec:authorize>
				</div>
			</div>
		</div>
	</section>
	<section class="content">
		<div class="row">
			<div class="col-xs-9">
				<sec:authorize access="hasAuthority('EDIT_PRIVILEGE')">
					<c:if test="${!empty PartLocations}">

						<form id="formEditPart"
							action="<c:url value="/uploadPartLocations.in"/>" method="post"
							enctype="multipart/form-data" name="formEditPart" role="form"
							class="form-horizontal">

							<input type="hidden" value="${PartLocations.partlocation_id}"
								name="partlocation_id" />
							<div class="form-horizontal ">
								<fieldset>
									<div class="box">
										<div class="box-body">
											<fieldset>
												<legend>Edit Part Locations</legend>
												<c:choose>
													<c:when test="${PartLocations.partLocationType == 1}">
														<div class="row1" id="grplocationName" class="form-group">
															<label class="L-size control-label">Location Name :</label>
															<div class="I-size">
																<input type="text" class="form-text" id="locationName"
																	name="partlocation_name" readonly="readonly"
																	value="${PartLocations.partlocation_name}"
																	placeholder="Enter Part Location" maxlength="100"
																	onkeypress="return IsplName(event);"
																	ondrop="return false;" /><span id="locationNameIcon"
																	class=""></span>
																<div id="locationNameErrorMsg" class="text-danger"></div>
																<label id="errorplName" class="error"></label>
															</div>
														</div>
														<input type="hidden" name="partLocationType" value="1">
													</c:when>
													<c:otherwise>
														<div class="row1">
															<label class="L-size control-label">Location Type :</label>
															<div class="I-size">
																<select name="partLocationType" id="partLocationType" class="form-text select2" style="width: 100%;"
																	required="required">
																	<option value="${PartLocations.partLocationType }"> 
																		<c:out value="${PartLocations.partLocationTypeStr}" />
																	</option>
																	<option value="1">MAIN LOCATION</option>
																	<option value="2">SUB LOCATION</option>
																</select>
															</div>
														</div>
														<div class="row1" id="mainPartLocation" >
															<label class="L-size control-label">Main Location :</label>
															<div class="I-size">
																<select class="form-text" name="mainPartLocationId" id="mainPartLocationId" required="required">
																	<option value="${PartLocations.mainPartLocationId }"> 
																		<c:out value="${PartLocations.mainPartLocation}" />
																	</option>	
																		<c:forEach items="${mainLocationList}" var="mainLocationList">
																			<option value="${mainLocationList.partlocation_id}">
																					<c:out value="${mainLocationList.partlocation_name}" />
																			</option>
																		</c:forEach>
																	</select>
															</div>
																<span id="mainRouteIcon" class=""></span>
																<div id="mainRouteErrorMsg" class="text-danger"></div>
														</div>
														
														<div class="row1" id="grplocationName" class="form-group">
															<label class="L-size control-label">Location Name :</label>
															<div class="I-size">
																<input type="text" class="form-text" id="locationName"
																	name="partlocation_name" 
																	value="${PartLocations.partlocation_name}"
																	placeholder="Enter Part Location" maxlength="100"
																	onkeypress="return IsplName(event);"
																	ondrop="return false;" /><span id="locationNameIcon"
																	class=""></span>
																<div id="locationNameErrorMsg" class="text-danger"></div>
																<label id="errorplName" class="error"></label>
															</div>
														</div>
														
														
													</c:otherwise>
												</c:choose>
												
												<div class="row1">
													<label class="L-size control-label">Description :</label>
													<div class="I-size">
														<textarea class="text optional form-text"
															name="partlocation_description" rows="3" maxlength="200"
															onkeypress="return IspartRemarks(event);"
															ondrop="return false;" placeholder="Enter Description">${PartLocations.partlocation_description} 
				                                </textarea>
														<label id="errorPartRemarks" class="error"></label>
													</div>
												</div>
											</fieldset>
											<fieldset>
												<legend>Warehouse Address</legend>

												<div class="row">
													<div class="col-md-5">
														<div class="row" id="grplocationAddress"
															class="form-group">
															<label class="string required control-label">Address</label>
															<input type="text" class="form-text"
																name="partlocation_address" id="locationAddress"
																value="${PartLocations.partlocation_address}"
																onkeypress="return IsAlphaNumericAddress(event);"
																ondrop="return false;" maxlength="50"><span
																id="locationAddressIcon" class=""></span>
															<div id="locationAddressErrorMsg" class="text-danger"></div>
															<label class="error" id="errorAddress"
																style="display: none"> </label>

														</div>
													</div>
													<div class="col-md-5">
														<div class="row">
															<label class="string required control-label">Street
																Address Line 2 </label> <input type="text" class="form-text"
																name="partlocation_streetaddress"
																value="${PartLocations.partlocation_streetaddress}"
																onkeypress="return IsAlphaNumericAddress2(event);"
																ondrop="return false;" maxlength="50"> <label
																class="error" id="errorAddress2" style="display: none">
															</label>

														</div>
													</div>
												</div>

												<div class="row">
													<div class="col-md-5">
														<div class="row" id="grplocationCountry"
															class="form-group">
															<label class="string required control-label">Country</label>

															<select name="partlocation_country" class="select2  form-text" style="width: 100%" id="countryId">
															<option value="${PartLocations.partlocation_country}" selected="selected">${PartLocations.partlocation_country}</option>
															<option value="${PartLocations.partlocation_country}">${PartLocations.partlocation_country}</option>
															</select><span id="locationCountryIcon" class=""></span>
															<div id="locationCountryErrorMsg" class="text-danger"></div>
														</div>
													</div>

													<div class="col-md-5">
														<div class="row" id="grplocationState" class="form-group">
															<label class="string required control-label">State/Province/Region</label>
															<select name="partlocation_state"
																class="select2 states form-text" style="width: 100%"
																id="stateId">
																<option value="${PartLocations.partlocation_state}">${PartLocations.partlocation_state}</option>
																<option value="${PartLocations.partlocation_state}"
																	selected="selected">${PartLocations.partlocation_state}</option>
															</select> <span id="locationStateIcon" class=""></span>
															<div id="locationStateErrorMsg" class="text-danger"></div>
														</div>
													</div>
												</div>
												<div class="row">
													<div class="col-md-5">
														<div class="row" id="grplocationCity" class="form-group">
															<label class="string required control-label">City</label>
															<select name="partlocation_city"
																class="select2 cities form-text" style="width: 100%"
																id="cityId">
																<option value="${PartLocations.partlocation_city}">${PartLocations.partlocation_city}</option>
																<option value="${PartLocations.partlocation_city}"
																	selected="selected">${PartLocations.partlocation_city}</option>
															</select> <span id="locationCityIcon" class=""></span>
															<div id="locationCityErrorMsg" class="text-danger"></div>
														</div>
													</div>
													<div class="col-md-5">
														<div class="row" id="grplocationCode" class="form-group">
															<label class="string required control-label">Zip/Postal
																Code</label> <input type="text" class="form-text"
																name="partlocation_pincode" id="locationCode"
																value="${PartLocations.partlocation_pincode}"
																onkeypress="return IsNumericPin(event);"
																ondrop="return false;" maxlength="6"><span
																id="locationCodeIcon" class=""></span>
															<div id="locationCodeErrorMsg" class="text-danger"></div>
															<label class="error" id="errorPin" style="display: none">
															</label>
														</div>
													</div>

												</div>
												<div class="row">
													<div class="col-md-4">
														<div class="row" id="grpcontactFirName" class="form-group">
															<label class="string required control-label">Contact
																Name</label> <input type="text" class="form-text"
																value="${PartLocations.contactFirName}"
																name="contactFirName" id="contactFirName"
																onkeypress="return IsAlpaFriContent(event);"
																ondrop="return false;" maxlength="50"> <span
																id="contactFirNameIcon" class=""></span>
															<div id="contactFirNameErrorMsg" class="text-danger"></div>
															<label class="error" id="errorFriName"
																style="display: none"> </label>

														</div>
													</div>

													<div class="col-md-3">
														<div class="row" id="grpcontactMobile" class="form-group">
															<label class="control-label">Mobile Number</label> <input
																type="text" class="form-text" name="contactFirPhone"
																value="${PartLocations.contactFirPhone}"
																id="contactMobile"
																onkeypress="return IsNumericFriMobile(event);"
																ondrop="return false;" maxlength="15"> <span
																id="contactMobileIcon" class=""></span>
															<div id="contactMobileErrorMsg" class="text-danger"></div>
															<label class="error" id="errorFriMobile"
																style="display: none"> </label>
														</div>
													</div>
													<div class="col-md-3">
														<div class="row">
															<label class="control-label">Description</label> <input
																type="text" class="form-text"
																name="contactFirdescription"
																value="${PartLocations.contactFirdescription}"
																onkeypress="return IsAlpaFriDescription(event);"
																ondrop="return false;" maxlength="100"> <label
																class="error" id="errorFridescription"
																style="display: none"> </label>

														</div>
													</div>
												</div>
												<br> <input type="checkbox" name="billingtoo"
													onclick="FillBilling(this.form)"> <em>Check
													this box if Warehouse Address and Shipping Address are the
													same.</em>

											</fieldset>
											<fieldset>
												<legend>Shipping Address</legend>

												<div class="row">
													<div class="col-md-5">
														<div class="row" id="grpshipAddress" class="form-group">
															<label class="string required control-label"
																for="shipAddress">Address</label> <input type="text"
																class="form-text" id="shipAddress"
																name="shippartlocation_address"
																value="${PartLocations.shippartlocation_address}"
																onkeypress="return IsShipNumericAddress(event);"
																ondrop="return false;" maxlength="50"> <span
																id="shipAddressIcon" class=""></span>
															<div id="shipAddressErrorMsg" class="text-danger"></div>
															<label class="error" id="errorShipAddress"
																style="display: none"> </label>

														</div>
													</div>
													<div class="col-md-5">
														<div class="row">
															<label class="string required control-label">Street
																Address Line 2 </label> <input type="text" class="form-text"
																name="shippartlocation_streetaddress"
																value="${PartLocations.shippartlocation_streetaddress}"
																onkeypress="return IsShipNumericAddress2(event);"
																ondrop="return false;" maxlength="50"> <label
																class="error" id="errorShipAddress2"
																style="display: none"> </label>

														</div>
													</div>
												</div>

												<div class="row">
													<div class="col-md-5">
														<div class="row" id="grpshipCountry" class="form-group">
															<label class="string required control-label"
																for="shipCountry">Country</label> <input type="text"
																class="form-text" name="shippartlocation_country"
																id="shipCountry"
																value="${PartLocations.shippartlocation_country}"
																onkeypress="return IsShipNumericCountry(event);"
																ondrop="return false;" maxlength="25"><span
																id="shipCountryIcon" class=""></span>
															<div id="shipCountryErrorMsg" class="text-danger"></div>
															<label class="error" id="errorShipCountry"
																style="display: none"> </label>
														</div>
													</div>
													<div class="col-md-5">
														<div class="row" id="grpshipState" class="form-group">
															<label class="string required control-label"
																for="shipState">State</label> <input type="text"
																class="form-text" name="shippartlocation_state"
																id="shipState"
																value="${PartLocations.shippartlocation_state}"
																onkeypress="return IsShipNumericState(event);"
																ondrop="return false;" maxlength="50"> <span
																id="shipStateIcon" class=""></span>
															<div id="shipStateErrorMsg" class="text-danger"></div>
															<label class="error" id="errorShipState"
																style="display: none"> </label>
														</div>
													</div>
												</div>
												<div class="row">
													<div class="col-md-5">
														<div class="row" id="grpshipCity" class="form-group">
															<label class="string required control-label"
																for="shipCity">City</label> <input type="text"
																class="form-text" name="shippartlocation_city"
																id="shipCity"
																value="${PartLocations.shippartlocation_city}"
																onkeypress="return IsShipNumericCity(event);"
																ondrop="return false;" maxlength="50"><span
																id="shipCityIcon" class=""></span>
															<div id="shipCityErrorMsg" class="text-danger"></div>
															<label class="error" id="errorShipCity"
																style="display: none"> </label>
														</div>
													</div>
													<div class="col-md-5">
														<div class="row" id="grpshipCode" class="form-group">
															<label class="string required control-label"
																for="shipCode">Zip/Postal Code</label> <input
																type="text" class="form-text"
																name="shippartlocation_pincode" id="shipCode"
																value="${PartLocations.shippartlocation_pincode}"
																onkeypress="return IsShipNumericPin(event);"
																ondrop="return false;" maxlength="6"><span
																id="shipCodeIcon" class=""></span>
															<div id="shipCodeErrorMsg" class="text-danger"></div>
															<label class="error" id="errorShipPin"
																style="display: none"> </label>
														</div>
													</div>

												</div>

											</fieldset>
											<div class="row">
												<div class="col-md-4">
													<div class="row" id="grpshipContact" class="form-group">
														<label class="string required control-label"
															for="shipContact">Contact Name</label> <input type="text"
															class="form-text" value="${PartLocations.contactSecName}"
															id="shipContact" name="contactSecName" id="driver_email"
															onkeypress="return IsAlpaSecContent(event);"
															ondrop="return false;" maxlength="50"><span
															id="shipContactIcon" class=""></span>
														<div id="shipContactErrorMsg" class="text-danger"></div>
														<label class="error" id="errorSecName"
															style="display: none"> </label>

													</div>
												</div>

												<div class="col-md-3">
													<div class="row" id="grpshipMobile" class="form-group">
														<label class="control-label">Mobile Number</label> <input
															type="text" class="form-text" name="contactSecPhone"
															onkeypress="return IsNumericSecMobile(event);"
															value="${PartLocations.contactSecPhone}" id="shipMobile"
															ondrop="return false;" maxlength="15"><span
															id="shipMobileIcon" class=""></span>
														<div id="shipMobileErrorMsg" class="text-danger"></div>
														<label class="error" id="errorSecMobile"
															style="display: none"> </label>
													</div>
												</div>
												<div class="col-md-3">
													<div class="row">
														<label class="control-label">Description</label> <input
															type="text" class="form-text"
															name="contactSecdescription"
															value="${PartLocations.contactSecdescription}"
															onkeypress="return IsAlpaSecDescription(event);"
															ondrop="return false;" maxlength="100"> <label
															class="error" id="errorSecdescription"
															style="display: none"> </label>

													</div>
												</div>
											</div>
											<div class="form-group">
												<label class="L-size control-label" for="vehicle_theft"></label>
												<div class="col-sm-5">
													<fieldset class="form-actions">
														<button type="submit" class="btn btn-success" onclick="return validateSubLocation()" >Update
															Part Location</button>
														<a class="btn btn-link" href="addPartLocations.in">Cancel</a>
													</fieldset>
												</div>
											</div>

										</div>
									</div>

								</fieldset>
							</div>
						</form>
					</c:if>
				</sec:authorize>
				<c:if test="${empty PartLocations}">
					<div class="callout callout-danger">
						<h4>Warning!</h4>
						<p>
							The page no data to Show.., Please Don't Change any URL ID or
							Number.. <br> Don't Enter any Extra worlds in URL..
						</p>
					</div>
				</c:if>
			</div>
			<div class="col-sm-1 col-md-2">
				<%@include file="../vehicle/masterSideMenu.jsp"%>
			</div>
		</div>
	</section>
	<script type="text/javascript"
		src="<c:url value="/resources/QhyvOb0m3EjE7A4/js/fleetop/select2.full.min.js" />"></script>
	<script type="text/javascript"
		src="<c:url value="/resources/QhyvOb0m3EjE7A4/js/fleetop/MA/Parts.validate.js" />"></script>
	<script type="text/javascript">
		$(document).ready(function() {
			$(".select2").select2();
			$("#tagPicker").select2({
				closeOnSelect : !1
			}),
			$("#partLocationType").change(function() {
		        if($("#partLocationType").val() == 1){
		        	$('#mainPartLocation').hide();
		        }else{
		        	$('#mainPartLocation').show();
		        }
		    });
			
		});
	</script>
	<script src="<c:url value="/resources/QhyvOb0m3EjE7A4/js/location.js" />"></script>
</div>