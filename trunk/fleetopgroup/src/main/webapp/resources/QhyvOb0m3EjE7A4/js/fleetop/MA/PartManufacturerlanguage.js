function includeHTML(){$.get("html/pannel/languageSelect.html",function(a){$("#langSelect").html(a)})}function updateLanguage(){var a=$("#language").val();$.linguaLoadAutoUpdate(a)}function changeLanguage(){$.linguaInit("html/languages/VehicleStatus/","Status"),$("#language").val($.linguaGetLanguage()),$.linguaLoad("en-GB"),$.linguaUpdateElements()}$(document).ready(function(){changeLanguage(),includeHTML()}),$(document).ready(function(){$("#PartManufacturerTable").DataTable({sScrollX:"100%",bScrollcollapse:!0,dom:"Blfrtip",buttons:["excel","print"]})});