<%@ include file="taglib.jsp"%>
<link rel="stylesheet"
	href="<c:url value="/resources/QhyvOb0m3EjE7A4/css/select/select2.min.AJAX.css" />">
<link rel="stylesheet"
	href="<c:url value="/resources/QhyvOb0m3EjE7A4/css/datepicker/datepicker.css" />">
<link rel="stylesheet"
	href="<c:url value="/resources/QhyvOb0m3EjE7A4/css/datepicker/daterangepicker-bs3.css" />">
<style>
.closeAmount td {
	text-align: right;
}

.actualkm {
	width: 0.8%;
	float: left;
}
</style>
<div class="content-wrapper">
	<section class="content-header">
		<div class="box">
			<div class="box-body">
				<div class="pull-left">
					<a href="<c:url value="/open"/>"><spring:message
							code="label.master.home" /></a> / <a href="<c:url value="/Report"/>">Report</a>
					/ <a href="<c:url value="/AR.in"/>">Driver Attendance Report</a> /
					<span>Driver Depot Attendance Report</span>
				</div>
				<div class="pull-right">
					<button class="btn btn-default btn-sm"
						onclick="printDiv('div_print')">
						<span class="fa fa-print"> Print</span>
					</button>
					<button class="btn btn-default btn-sm"
						onclick="advanceTableToExcel('advanceTable', 'Driver Depot Attendance Report')">
						<span class="fa fa-file-excel-o"> Export to Excel</span>
					</button>
					<a href="<c:url value="/Report"/>">Cancel</a>

				</div>
			</div>
		</div>
			<div class="panel-group">
					<div class="panel panel-info" id="GD_ATT_EIGHT">
						<div class="panel-body">
							<form name="driverAttReport">
								<div class="form-horizontal ">
									<div class="row1">
										<label class="L-size control-label">Date range: <abbr
											title="required">*</abbr></label>
										<div class="I-size">
											<div class="input-group">
												<div class="input-group-addon">
													<i class="fa fa-calendar"></i>
												</div>
												<input type="text" id="GTC_daterange" class="form-text"
													name="ATTENDANCE_DATE" required="required"
													style="cursor: pointer; padding: 5px 5px; border: 1px solid #ccc; width: 100%">
											</div>
										</div>
									</div>
									<div class="row">
										<label class="L-size control-label">Depot: <abbr
											title="required">*</abbr>
										</label>
										<div class="I-size">
											<input type="hidden" id="SelectFuelGroup"
												name="DRIVER_GROUP_ID" style="width: 100%;"
												required="required" placeholder="Please Select Group" />
											<p class="help-block">Select One Depot</p>
										</div>
									</div>

									<div class="row">
										<label class="L-size control-label"> Job Title :</label>
										<div class="I-size">
											<input type="hidden" id="AttGroupDriverJob_ID"
												name="DRIVER_JOBTITLE" value="-1" style="width: 100%;"
												placeholder="Please Enter 2 or more Job Type" />
										</div>
									</div>
									<fieldset class="form-actions">
										<div class="row1">
											<label class="L-size control-label"></label>

											<div class="I-size">
												<div class="pull-left">
													<button type="submit" name="commit" class="btn btn-success">
														<i class="fa fa-search"> Search</i>
													</button>
												</div>
											</div>
										</div>
									</fieldset>
								</div>
							</form>
						</div>
					</div>
			</div>
	</section>
	<section class="content">
		<sec:authorize access="!hasAuthority('VIEW_DRIVER')">
			<spring:message code="message.unauth"></spring:message>
		</sec:authorize>
		<sec:authorize access="hasAuthority('VIEW_DRIVER')">
			<div id="div_print">

				<div id="div_print">

					<section class="invoice">
						<div class="row invoice-info">
							<div class="col-sm-12 col-md-12 col-xs-12"
								style="padding-right: 80px;">
								<div class="table-responsive">
									<table class="table table-hover table-bordered table-striped" id="companyTable" style="display: none;">
										<tbody id="tbodyHeader">
											<!-- <tr id="imgRow">
												<td id="companyLogo"> </td>
												<td id="printBy"</td>
											</tr>
											<tr>
												<td colspan="2" id="branchInfo"></td>
												
											</tr> -->
										</tbody>
									</table>
									<div class="row invoice-info">
										<table id="advanceTable"
											class="table table-hover table-bordered table-striped" style="display: none;">
											<caption id="reportDetails"></caption>
											<thead id="tHeadId">
												
											</thead>
											<tbody id="tableBody">

											</tbody>
										</table>
									</div>
								</div>
							</div>
						</div>
					</section>
				</div>
			</div>
		</sec:authorize>
	</section>
	<script type="text/javascript"
		src="<c:url value="/resources/QhyvOb0m3EjE7A4/js/datepicker/moment.min.js" />"></script>
	<script type="text/javascript"
		src="<c:url value="/resources/QhyvOb0m3EjE7A4/js/datepicker/daterangepickerSearch.js" />"></script>
	<script
		src="<c:url value="/resources/QhyvOb0m3EjE7A4/js/fleetop/Report.js" />"></script>
	<script
		src="<c:url value="/resources/QhyvOb0m3EjE7A4/js/fleetop/driverAttandanceReport.js" />"></script>
	<script
		src="<c:url value="/resources/QhyvOb0m3EjE7A4/js/select/lodash.min.js" />"></script>
	<script
		src="<c:url value="/resources/QhyvOb0m3EjE7A4/js/select/select2.min.AJAX.js" />"></script>
	<script type="text/javascript"
		src="<c:url value="/resources/QhyvOb0m3EjE7A4/js/inputMask/inputmask.js" />"></script>
	<script type="text/javascript"
		src="<c:url value="/resources/QhyvOb0m3EjE7A4/js/inputMask/inputmask.date.extensions.js" />"></script>
	<script type="text/javascript"
		src="<c:url value="/resources/QhyvOb0m3EjE7A4/js/inputMask/inputmask.extensions.js" />"></script>
	<script type="text/javascript"
		src="<c:url value="/resources/QhyvOb0m3EjE7A4/js/datepicker/datepicker.js" />"></script>

	<script type="text/javascript">
		$(document).ready(function() {
			$("#datemask").inputmask("yyyy-mm-dd", {
				placeholder : "yyyy-mm-dd"
			}), $("[data-mask]").inputmask()
		});
	</script>

	<script type="text/javascript"
		src="<c:url value="/resources/QhyvOb0m3EjE7A4/js/Print/print.js"/>"></script>
</div>