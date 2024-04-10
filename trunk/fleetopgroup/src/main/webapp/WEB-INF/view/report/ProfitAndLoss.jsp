<%@ include file="taglib.jsp"%>
<link rel="stylesheet"
	href="<c:url value="/resources/QhyvOb0m3EjE7A4/css/select/select2.min.AJAX.css" />">
<link rel="stylesheet"
	href="<c:url value="/resources/QhyvOb0m3EjE7A4/css/datepicker/datepicker.css" />">
<link rel="stylesheet"
	href="<c:url value="/resources/QhyvOb0m3EjE7A4/css/datepicker/daterangepicker-bs3.css" />">
<style>
.box-body .affix {
	border-radius: 3px;
	background: #FFF;
	margin-bottom: 5px;
	padding: 5px;
}
</style>
<div class="content-wrapper">
	<section class="content-header">
		<div class="box">
			<div class="box-body">
				<div class="pull-left">
					<a href="<c:url value="/open"/>"><spring:message
							code="label.master.home" /></a> / <a href="<c:url value="/Report"/>">Report</a>
					/ <a href="<c:url value="/ProfitAndLoss.in"/>">Profit And Loss Report</a>
				</div>
				<div class="pull-right">
					<a href="<c:url value="/Report"/>">Cancel</a>
				</div>
			</div>
		</div>
	</section>
	<section class="content">
		<div class="row">
			<div class="col-md-offset-2 col-md-8 col-sm-8 col-xs-12">
				<div class="tab-content">
				<sec:authorize access="hasAuthority('VEHICLE_WISE_USES_REPORT')">
						<div class="panel box box-primary">
							<div class="box-header with-border">
								<h4 class="box-title">
										<a 
											href="<c:url value="/VehicleWiseUsageReport"/>">Vehicle wise usage and movement report </a>
								</h4>
							</div>
						</div>
				</sec:authorize>
				<sec:authorize access="hasAuthority('GROUP_WISE_USAGE_REPORT')">
						<div class="panel box box-primary">
							<div class="box-header with-border">
								<h4 class="box-title">
										<a 
											href="<c:url value="/GroupWiseUsageReport"/>">Group Wise Vehicle usage and movement report </a>
								</h4>
							</div>
						</div>
				</sec:authorize>
				<sec:authorize access="hasAuthority('ROUTE_WISE_USES_REPORT')">
						<div class="panel box box-primary">
							<div class="box-header with-border">
								<h4 class="box-title">
										<a 
											href="<c:url value="/RouteWiseUsageReport"/>">Route wise usage and movement report </a>
								</h4>
							</div>
						</div>
				</sec:authorize>
				<sec:authorize access="hasAuthority('VIEW_P_AND_L_REPORT')">
						<div class="panel box box-primary">
							<div class="box-header with-border">
								<h4 class="box-title">
										<a 
											href="<c:url value="/VehicleWiseProfitAndLossReport"/>">Vehicle Wise Profit And Loss Report </a>
								</h4>
							</div>
						</div>
				</sec:authorize>
				<sec:authorize access="hasAuthority('VEHICLE_GROUP_WISE_P_AND_L_REPORT')">
						<div class="panel box box-primary">
							<div class="box-header with-border">
								<h4 class="box-title">
										<a 
											href="<c:url value="/GroupWiseProfitAndLossReport"/>">Vehicle Group Wise Profit And Loss Report </a>
								</h4>
							</div>
						</div>
				</sec:authorize>
				<sec:authorize access="hasAuthority('VIEW_P_AND_L_REPORT')">
							<div class="panel box box-primary">
								<div class="box-header with-border">
									<h4 class="box-title">
											<a 
												href="<c:url value="/DateWiseProfitAndLossReport"/>">Date Range Wise Vehicle Profit And Loss Report </a>
									</h4>
								</div>
							</div>
					</sec:authorize> 
					<sec:authorize access="hasAuthority('ROUTE_WISE_P_AND_L_REPORT')">
						<div class="panel box box-primary">
							<div class="box-header with-border">
								<h4 class="box-title">
										<a href="<c:url value="/RouteWiseProfitAndLossReport"/>">Route Wise Profit And Loss Report </a>
								</h4>
							</div>
						</div>
					</sec:authorize>
					

				</div>
			</div>
		</div>
	</section>

	<script type="text/javascript"
		src="<c:url value="/resources/QhyvOb0m3EjE7A4/js/datepicker/moment.min.js"/>"></script>
	<script type="text/javascript"
		src="<c:url value="/resources/QhyvOb0m3EjE7A4/js/datepicker/daterangepickerSearch.js"/>"></script>
	<script
		src="<c:url value="/resources/QhyvOb0m3EjE7A4/js/fleetop/Report.js"/>"></script>
	<script
		src="<c:url value="/resources/QhyvOb0m3EjE7A4/js/select/lodash.min.js"/>"></script>
	<script
		src="<c:url value="/resources/QhyvOb0m3EjE7A4/js/select/select2.min.AJAX.js"/>"></script>
	<script type="text/javascript"
		src="<c:url value="/resources/QhyvOb0m3EjE7A4/js/inputMask/inputmask.js"/>"></script>
	<script type="text/javascript"
		src="<c:url value="/resources/QhyvOb0m3EjE7A4/js/inputMask/inputmask.date.extensions.js"/>"></script>
	<script type="text/javascript"
		src="<c:url value="/resources/QhyvOb0m3EjE7A4/js/inputMask/inputmask.extensions.js"/>"></script>
	<script type="text/javascript"
		src="<c:url value="/resources/QhyvOb0m3EjE7A4/js/datepicker/datepicker.js"/>"></script>

	<script type="text/javascript">
		$(document).ready(function() {
			$("#datemask").inputmask("yyyy-mm-dd", {
				placeholder : "yyyy-mm-dd"
			}), $("[data-mask]").inputmask()
		});
	</script>
</div>