$(document).ready(function(){$("#master").change(function(){$('input[id="All-master"]').prop("checked",$(this).prop("checked"))}),$("#All-vehicle").change(function(){$('input[id="vehicle"]').prop("checked",$(this).prop("checked"))}),$("#All-Driver").change(function(){$('input[id="driver"]').prop("checked",$(this).prop("checked"))}),$("#All-Renewal").change(function(){$('input[id="renewal"]').prop("checked",$(this).prop("checked"))}),$("#all-service_reminder").change(function(){$('input[id="service_reminder"]').prop("checked",$(this).prop("checked"))}),$("#all-service_entries").change(function(){$('input[id="service_entries"]').prop("checked",$(this).prop("checked"))}),$("#all-fuel_entries").change(function(){$('input[id="fuel_entries"]').prop("checked",$(this).prop("checked"))}),$("#all-vendor_entries").change(function(){$('input[id="vendor_entries"]').prop("checked",$(this).prop("checked"))}),$("#all-tripsheet_entries").change(function(){$('input[id="tripsheet_entries"]').prop("checked",$(this).prop("checked"))}),$("#all-parts").change(function(){$('input[id="parts"]').prop("checked",$(this).prop("checked"))}),$("#all-purchase").change(function(){$('input[id="purchase"]').prop("checked",$(this).prop("checked"))}),$("#all-inventory").change(function(){$('input[id="inventory"]').prop("checked",$(this).prop("checked"))}),$("#all-workorder").change(function(){$('input[id="workorder"]').prop("checked",$(this).prop("checked"))})}),$(document).ready(function(){var e=$;privileges,$("#btnResetCheckBox").click(function(){$("#myForm").find(':checkbox[name^="privileges"]').each(function(){$(this).prop("checked",-1!=$.inArray($(this).val(),e))})}),$("#btnResetCheckBox").trigger("click")});