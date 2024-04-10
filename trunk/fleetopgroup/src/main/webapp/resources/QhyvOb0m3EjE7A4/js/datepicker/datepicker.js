$(document).ready(function() {
    $("#dlFromDate").datepicker({
        autoclose: !0,
        todayHighlight: !0,
        format: "dd-mm-yyyy"
    }).on("changeDate", function(t) {
        $("#eventForm").formValidation("revalidateField", "date")
    });
    var currDate = new Date();
    $("#minCurrentDate").datepicker({
        autoclose: !0,
        todayHighlight: !0,
        format: "dd-mm-yyyy",
        startDate:currDate
    });
    
}), $(document).ready(function() {
    $("#sandbox-container .input-daterange").datepicker({
        autoclose: !0,
        todayHighlight: !0,
        format: "dd-mm-yyyy"
    })
}), $(document).ready(function() {
    $("#renewal_from").datepicker({
        autoclose: !0,
        todayHighlight: !0,
        format: "dd-mm-yyyy"
    }), $("#renewal_to").datepicker({
        autoclose: !0,
        todayHighlight: !0,
        format: "dd-mm-yyyy",
        useCurrent: !1
    }), $("#renewal_from").on("dp.change", function(t) {
        $("#renewal_to").datepicker({
            autoclose: !0,
            todayHighlight: !0,
            format: "dd-mm-yyyy"
        }).minDate(t.date)
    }), $("#renewal_to").on("dp.change", function(t) {
        $("#renewal_from").datepicker({
            autoclose: !0,
            todayHighlight: !0,
            format: "dd-mm-yyyy"
        }).minDate(t.date)
    })
}), $(document).ready(function() {
	 var currentDate = new Date();
    $("#dateofbirth").datepicker({
        autoclose: !0,
        todayHighlight: !0,
        format: "dd-mm-yyyy",
        endDate: "currentDate",
        maxDate: currentDate
    }),$("#loanEnd").datepicker({
        autoclose: !0,
        todayHighlight: !0,
        format: "dd-mm-yyyy"
    }),$("#loanStart").datepicker({
        autoclose: !0,
        todayHighlight: !0,
        format: "dd-mm-yyyy"
    }), $("#DLToDate").datepicker({
        autoclose: !0,
        todayHighlight: !0,
        format: "dd-mm-yyyy"
    })
}), $(document).ready(function() {
    var currentDate = new Date();
    	if($("#serverDate").val() != undefined)
    	{
    		defaultServerDate = $("#serverDate").val();
    	}else{
    		defaultServerDate = new Date();
    	}
   $("#maxTodayDate").datepicker({
        autoclose: !0,
        todayHighlight: !0,
       	endDate: currentDate,
        maxDate: currentDate,
        format: "dd-mm-yyyy",
    }),
     $("#maxTodayDate2").datepicker({
        autoclose: !0,
        todayHighlight: !0,
        format: "dd-mm-yyyy",
       	endDate: currentDate,
        maxDate: currentDate
    }),$("#maxTodayDate3").datepicker({
        autoclose: !0,
        todayHighlight: !0,
        format: "dd-mm-yyyy",
       	endDate: currentDate,
        maxDate: currentDate
    }),
    $("#StartDate").datepicker({
        defaultDate: defaultServerDate,
        autoclose: !0,
        todayHighlight: true,
        format: "dd-mm-yyyy",
        setDate: "0",
        endDate: defaultServerDate,
        maxDate: defaultServerDate
    }), $("#tripDateSearch").datepicker({
        defaultDate: new Date(),
        autoclose: !0,
        format: "yyyy-mm-dd",
        endDate: 'currentDate',
        maxDate: currentDate
    }),  $("#StartDate1").datepicker({
        defaultDate: defaultServerDate,
        autoclose: !0,
        todayHighlight: !0,
        format: "dd-mm-yyyy",
        setDate: "0",
        endDate: defaultServerDate,
        maxDate: defaultServerDate
    }),$("#LeaveDate").datepicker({
        autoclose: !0,
        todayHighlight: !0,
        format: "dd-mm-yyyy"
    }), $("#paymentDate").datepicker({
        autoclose: !0,
        todayHighlight: !0,
        format: "dd-mm-yyyy"
    }), $("#paymentDate").datepicker("setDate", currentDate), $("#opendDate").datepicker({
        autoclose: !0,
        todayHighlight: !0,
        format: "dd-mm-yyyy"
    }), $("#opendDate").datepicker("setDate", currentDate), $("#requiredDate").datepicker({
        autoclose: !0,
        todayHighlight: !0,
        format: "dd-mm-yyyy"
    }), $("#damageReceiveDate").datepicker({
        autoclose: !0,
        todayHighlight: !0,
        format: "dd-mm-yyyy"
    }), $("#lostReceiveDate").datepicker({
        autoclose: !0,
        todayHighlight: !0,
        format: "dd-mm-yyyy"
    }), $("#TripStartDate").datepicker({
        autoclose: !0,
        todayHighlight: !0,
        viewMode: "years",
        format: "dd-mm-yyyy"
    }),$("#repairOpenDate").datepicker({
    	  autoclose: !0,
          todayHighlight: !0,
          viewMode: "years",
          setDate: currentDate,
          endDate: defaultServerDate,
          maxDate: defaultServerDate,
          format: "dd-mm-yyyy"
    }),$("#stockRequiredDate").datepicker({
    	  autoclose: !0,
          todayHighlight: !0,
          viewMode: "years",
          setDate: currentDate,
          format: "dd-mm-yyyy"
    }), $("#retreadDate").datepicker({
        autoclose: !0,
        todayHighlight: !0,
        format: "dd-mm-yyyy"
    }),$("#retreadDate").datepicker("setDate", $("#hiddenRetreadDate").val()), $("#requiredRetreadDate").datepicker({
        autoclose: !0,
        todayHighlight: !0,
        format: "dd-mm-yyyy"
    }),$("#keepOpenDate1").datepicker({
    	defaultDate: defaultServerDate,
        autoclose: !0,
        todayHighlight: !0,
        format: "dd-mm-yyyy",
        setDate: "0",
        endDate: defaultServerDate,
        maxDate: defaultServerDate
    }),$("#callFinalSurveyorDate1").datepicker({
    	defaultDate: defaultServerDate,
        autoclose: !0,
        todayHighlight: !0,
        format: "dd-mm-yyyy",
        setDate: "0",
        endDate: defaultServerDate,
        maxDate: defaultServerDate
    }),$("#insuranceSubmitDate1").datepicker({
    	defaultDate: defaultServerDate,
        autoclose: !0,
        todayHighlight: !0,
        format: "dd-mm-yyyy",
        setDate: "0",
        endDate: defaultServerDate,
        maxDate: defaultServerDate
    }), $("#BusLocationDate").datepicker({
        defaultDate: defaultServerDate,
        autoclose: !0,
        todayHighlight: true,
        format: "dd-mm-yyyy",
        setDate: currentDate,
        minDate: currentDate,
        startDate: currentDate,
        endDate: currentDate,
        maxDate: currentDate
    }),$("#requiredRetreadDate").datepicker("setDate", $("#hiddenRetreadRequiredDate").val());
}), $(document).ready(function() {
	 var currentDate = new Date();
    $("#datePicker").datepicker({
        autoclose: !0,
        todayHighlight: !0,
        format: "dd-mm-yyyy"
    }), $("#vehicle_year").datepicker({
        autoclose: !0,
        yearHighlight: !0,
        format: "yyyy",
        viewMode: "years",
        minViewMode: "years",
        startDate: '-30y',
        endDate: '+0y'
    }),
    $("#vehicle_RegisterDate").datepicker({
        autoclose: !0,
        todayHighlight: !0,
        format: "dd-mm-yyyy",
        startDate: '-30y',
        endDate: currentDate
    }), $("#tripCloseDate").datepicker({
        autoclose: !0,
        todayHighlight: !0,
        format: "yyyy-mm-dd"
    }), $("#vehicle_Registeredupto").datepicker({
        autoclose: !0,
        todayHighlight: !0,
        format: "dd-mm-yyyy",
        startDate: currentDate,
        endDate: '+30y'
    }), $("#datePicker2").datepicker({
        autoclose: !0,
        todayHighlight: !0,
        format: "dd-mm-yyyy"
    }), $("#lastOrderedDate").datepicker({
        autoclose: !0,
        todayHighlight: !0,
        format: "yyyy-mm-dd"
    })
}), $(document).ready(function() {
    $("#ApprovalPaidDate").datepicker({
        autoclose: !0,
        todayHighlight: !0,
        format: "dd-mm-yyyy"
    }), $("#paidDate").datepicker({
        autoclose: !0,
        todayHighlight: !0,
        format: "dd-mm-yyyy"
    })
}), $(document).ready(function() {
    $("#ReportDailydate").datepicker({
        defaultDate: new Date(),
        autoclose: !0,
        todayHighlight: !0,
        format: "dd-mm-yyyy"
    }),$("#SROverdueDate, #SRDuesoondate, #TSAVANCEDailydate, #TCDailydate, #IssuesDailydate,#dealerServiceSearchDate").datepicker({
        defaultDate: new Date(),
        autoclose: !0,
        todayHighlight: !0,
        format: "dd-mm-yyyy"
    })
});$(document).ready(function() {/*
	var invoiceId 	= $("#invoiceId")
	var currentDate = new Date();
    $("#expectedPaymentDate").datepicker({
        defaultDate: new Date(),
        autoclose: !0,
        todayHighlight: !0,
        format: "yyyy-mm-dd"
        	
    })
    $("#expectedPaymentDate").datepicker("setDate", currentDate);
*/	
	var currentDate = new Date();
	$('input[name*=expectedPaymentDate]').each(function(obj){
		$(this).datepicker({
	        autoclose: !0,
	        todayHighlight: !0,
	        format: "dd-mm-yyyy"
	    });
		
	});	
	$('input[name*=expectedPaymentDate]').each(function(obj){
		$(this).datepicker("setDate", currentDate)});
});

/*====================================================================================== 
=======================functionof the Datepicker core==================================
====================================================================================== */
! function(t, e) {
    function i() {
        return new Date(Date.UTC.apply(Date, arguments))
    }

    function a() {
        var t = new Date;
        return i(t.getFullYear(), t.getMonth(), t.getDate())
    }

    function s(t) {
        return function() {
            return this[t].apply(this, arguments)
        }
    }

    function n(e, i) {
        function a(t, e) {
            return e.toLowerCase()
        }
        var s, n = t(e).data(),
            r = {},
            h = new RegExp("^" + i.toLowerCase() + "([A-Z])");
        i = new RegExp("^" + i.toLowerCase());
        for (var o in n) i.test(o) && (s = o.replace(h, a), r[s] = n[o]);
        return r
    }

    function r(e) {
        var i = {};
        if (f[e] || (e = e.split("-")[0], f[e])) {
            var a = f[e];
            return t.each(p, function(t, e) {
                e in a && (i[e] = a[e])
            }), i
        }
    }
    var h = t(window),
        o = function() {
            var e = {
                get: function(t) {
                    return this.slice(t)[0]
                },
                contains: function(t) {
                    for (var e = t && t.valueOf(), i = 0, a = this.length; a > i; i++)
                        if (this[i].valueOf() === e) return i;
                    return -1
                },
                remove: function(t) {
                    this.splice(t, 1)
                },
                replace: function(e) {
                    e && (t.isArray(e) || (e = [e]), this.clear(), this.push.apply(this, e))
                },
                clear: function() {
                    this.splice(0)
                },
                copy: function() {
                    var t = new o;
                    return t.replace(this), t
                }
            };
            return function() {
                var i = [];
                return i.push.apply(i, arguments), t.extend(i, e), i
            }
        }(),
        d = function(e, i) {
            this.dates = new o, this.viewDate = a(), this.focusDate = null, this._process_options(i), this.element = t(e), this.isInline = !1, this.isInput = this.element.is("input"), this.component = this.element.is(".date") ? this.element.find(".add-on, .input-group-addon, .btn") : !1, this.hasInput = this.component && this.element.find("input").length, this.component && 0 === this.component.length && (this.component = !1), this.picker = t(g.template), this._buildEvents(), this._attachEvents(), this.isInline ? this.picker.addClass("datepicker-inline").appendTo(this.element) : this.picker.addClass("datepicker-dropdown dropdown-menu"), this.o.rtl && this.picker.addClass("datepicker-rtl"), this.viewMode = this.o.startView, this.o.calendarWeeks && this.picker.find("tfoot th.today").attr("colspan", function(t, e) {
                return parseInt(e) + 1
            }), this._allow_update = !1, this.setStartDate(this._o.startDate), this.setEndDate(this._o.endDate), this.setDaysOfWeekDisabled(this.o.daysOfWeekDisabled), this.fillDow(), this.fillMonths(), this._allow_update = !0, this.update(), this.showMode(), this.isInline && this.show()
        };
    d.prototype = {
        constructor: d,
        _process_options: function(e) {
            this._o = t.extend({}, this._o, e);
            var i = this.o = t.extend({}, this._o),
                a = i.language;
            switch (f[a] || (a = a.split("-")[0], f[a] || (a = u.language)), i.language = a, i.startView) {
                case 2:
                case "decade":
                    i.startView = 2;
                    break;
                case 1:
                case "year":
                    i.startView = 1;
                    break;
                default:
                    i.startView = 0
            }
            switch (i.minViewMode) {
                case 1:
                case "months":
                    i.minViewMode = 1;
                    break;
                case 2:
                case "years":
                    i.minViewMode = 2;
                    break;
                default:
                    i.minViewMode = 0
            }
            i.startView = Math.max(i.startView, i.minViewMode), i.multidate !== !0 && (i.multidate = Number(i.multidate) || !1, i.multidate = i.multidate !== !1 ? Math.max(0, i.multidate) : 1), i.multidateSeparator = String(i.multidateSeparator), i.weekStart %= 7, i.weekEnd = (i.weekStart + 6) % 7;
            var s = g.parseFormat(i.format);
            i.startDate !== -1 / 0 && (i.startDate = i.startDate ? i.startDate instanceof Date ? this._local_to_utc(this._zero_time(i.startDate)) : g.parseDate(i.startDate, s, i.language) : -1 / 0), 1 / 0 !== i.endDate && (i.endDate = i.endDate ? i.endDate instanceof Date ? this._local_to_utc(this._zero_time(i.endDate)) : g.parseDate(i.endDate, s, i.language) : 1 / 0), i.daysOfWeekDisabled = i.daysOfWeekDisabled || [], t.isArray(i.daysOfWeekDisabled) || (i.daysOfWeekDisabled = i.daysOfWeekDisabled.split(/[,\s]*/)), i.daysOfWeekDisabled = t.map(i.daysOfWeekDisabled, function(t) {
                return parseInt(t, 10)
            });
            var n = String(i.orientation).toLowerCase().split(/\s+/g),
                r = i.orientation.toLowerCase();
            if (n = t.grep(n, function(t) {
                    return /^auto|left|right|top|bottom$/.test(t)
                }), i.orientation = {
                    x: "auto",
                    y: "auto"
                }, r && "auto" !== r)
                if (1 === n.length) switch (n[0]) {
                    case "top":
                    case "bottom":
                        i.orientation.y = n[0];
                        break;
                    case "left":
                    case "right":
                        i.orientation.x = n[0]
                } else r = t.grep(n, function(t) {
                    return /^left|right$/.test(t)
                }), i.orientation.x = r[0] || "auto", r = t.grep(n, function(t) {
                    return /^top|bottom$/.test(t)
                }), i.orientation.y = r[0] || "auto";
                else;
        },
        _events: [],
        _secondaryEvents: [],
        _applyEvents: function(t) {
            for (var i, a, s, n = 0; n < t.length; n++) i = t[n][0], 2 === t[n].length ? (a = e, s = t[n][1]) : 3 === t[n].length && (a = t[n][1], s = t[n][2]), i.on(s, a)
        },
        _unapplyEvents: function(t) {
            for (var i, a, s, n = 0; n < t.length; n++) i = t[n][0], 2 === t[n].length ? (s = e, a = t[n][1]) : 3 === t[n].length && (s = t[n][1], a = t[n][2]), i.off(a, s)
        },
        _buildEvents: function() {
            this.isInput ? this._events = [
                [this.element, {
                    focus: t.proxy(this.show, this),
                    keyup: t.proxy(function(e) {
                        -1 === t.inArray(e.keyCode, [27, 37, 39, 38, 40, 32, 13, 9]) && this.update()
                    }, this),
                    keydown: t.proxy(this.keydown, this)
                }]
            ] : this.component && this.hasInput ? this._events = [
                [this.element.find("input"), {
                    focus: t.proxy(this.show, this),
                    keyup: t.proxy(function(e) {
                        -1 === t.inArray(e.keyCode, [27, 37, 39, 38, 40, 32, 13, 9]) && this.update()
                    }, this),
                    keydown: t.proxy(this.keydown, this)
                }],
                [this.component, {
                    click: t.proxy(this.show, this)
                }]
            ] : this.element.is("div") ? this.isInline = !0 : this._events = [
                [this.element, {
                    click: t.proxy(this.show, this)
                }]
            ], this._events.push([this.element, "*", {
                blur: t.proxy(function(t) {
                    this._focused_from = t.target
                }, this)
            }], [this.element, {
                blur: t.proxy(function(t) {
                    this._focused_from = t.target
                }, this)
            }]), this._secondaryEvents = [
                [this.picker, {
                    click: t.proxy(this.click, this)
                }],
                [t(window), {
                    resize: t.proxy(this.place, this)
                }],
                [t(document), {
                    "mousedown touchstart": t.proxy(function(t) {
                        this.element.is(t.target) || this.element.find(t.target).length || this.picker.is(t.target) || this.picker.find(t.target).length || this.hide()
                    }, this)
                }]
            ]
        },
        _attachEvents: function() {
            this._detachEvents(), this._applyEvents(this._events)
        },
        _detachEvents: function() {
            this._unapplyEvents(this._events)
        },
        _attachSecondaryEvents: function() {
            this._detachSecondaryEvents(), this._applyEvents(this._secondaryEvents)
        },
        _detachSecondaryEvents: function() {
            this._unapplyEvents(this._secondaryEvents)
        },
        _trigger: function(e, i) {
            var a = i || this.dates.get(-1),
                s = this._utc_to_local(a);
            this.element.trigger({
                type: e,
                date: s,
                dates: t.map(this.dates, this._utc_to_local),
                format: t.proxy(function(t, e) {
                    0 === arguments.length ? (t = this.dates.length - 1, e = this.o.format) : "string" == typeof t && (e = t, t = this.dates.length - 1), e = e || this.o.format;
                    var i = this.dates.get(t);
                    return g.formatDate(i, e, this.o.language)
                }, this)
            })
        },
        show: function() {
            this.isInline || this.picker.appendTo("body"), this.picker.show(), this.place(), this._attachSecondaryEvents(), this._trigger("show")
        },
        hide: function() {
            this.isInline || this.picker.is(":visible") && (this.focusDate = null, this.picker.hide().detach(), this._detachSecondaryEvents(), this.viewMode = this.o.startView, this.showMode(), this.o.forceParse && (this.isInput && this.element.val() || this.hasInput && this.element.find("input").val()) && this.setValue(), this._trigger("hide"))
        },
        remove: function() {
            this.hide(), this._detachEvents(), this._detachSecondaryEvents(), this.picker.remove(), delete this.element.data().datepicker, this.isInput || delete this.element.data().date
        },
        _utc_to_local: function(t) {
            return t && new Date(t.getTime() + 6e4 * t.getTimezoneOffset())
        },
        _local_to_utc: function(t) {
            return t && new Date(t.getTime() - 6e4 * t.getTimezoneOffset())
        },
        _zero_time: function(t) {
            return t && new Date(t.getFullYear(), t.getMonth(), t.getDate())
        },
        _zero_utc_time: function(t) {
            return t && new Date(Date.UTC(t.getUTCFullYear(), t.getUTCMonth(), t.getUTCDate()))
        },
        getDates: function() {
            return t.map(this.dates, this._utc_to_local)
        },
        getUTCDates: function() {
            return t.map(this.dates, function(t) {
                return new Date(t)
            })
        },
        getDate: function() {
            return this._utc_to_local(this.getUTCDate())
        },
        getUTCDate: function() {
            return new Date(this.dates.get(-1))
        },
        setDates: function() {
            var e = t.isArray(arguments[0]) ? arguments[0] : arguments;
            this.update.apply(this, e), this._trigger("changeDate"), this.setValue()
        },
        setUTCDates: function() {
            var e = t.isArray(arguments[0]) ? arguments[0] : arguments;
            this.update.apply(this, t.map(e, this._utc_to_local)), this._trigger("changeDate"), this.setValue()
        },
        setDate: s("setDates"),
        setUTCDate: s("setUTCDates"),
        setValue: function() {
            var t = this.getFormattedDate();
            this.isInput ? this.element.val(t).change() : this.component && this.element.find("input").val(t).change()
        },
        getFormattedDate: function(i) {
            i === e && (i = this.o.format);
            var a = this.o.language;
            return t.map(this.dates, function(t) {
                return g.formatDate(t, i, a)
            }).join(this.o.multidateSeparator)
        },
        setStartDate: function(t) {
            this._process_options({
                startDate: t
            }), this.update(), this.updateNavArrows()
        },
        setEndDate: function(t) {
            this._process_options({
                endDate: t
            }), this.update(), this.updateNavArrows()
        },
        setDaysOfWeekDisabled: function(t) {
            this._process_options({
                daysOfWeekDisabled: t
            }), this.update(), this.updateNavArrows()
        },
        place: function() {
            if (!this.isInline) {
                var e = this.picker.outerWidth(),
                    i = this.picker.outerHeight(),
                    a = 10,
                    s = h.width(),
                    n = h.height(),
                    r = h.scrollTop(),
                    o = parseInt(this.element.parents().filter(function() {
                        return "auto" !== t(this).css("z-index")
                    }).first().css("z-index")) + 10,
                    d = this.component ? this.component.parent().offset() : this.element.offset(),
                    l = this.component ? this.component.outerHeight(!0) : this.element.outerHeight(!1),
                    c = this.component ? this.component.outerWidth(!0) : this.element.outerWidth(!1),
                    u = d.left,
                    p = d.top;
                this.picker.removeClass("datepicker-orient-top datepicker-orient-bottom datepicker-orient-right datepicker-orient-left"), "auto" !== this.o.orientation.x ? (this.picker.addClass("datepicker-orient-" + this.o.orientation.x), "right" === this.o.orientation.x && (u -= e - c)) : (this.picker.addClass("datepicker-orient-left"), d.left < 0 ? u -= d.left - a : d.left + e > s && (u = s - e - a));
                var f, g, v = this.o.orientation.y;
                "auto" === v && (f = -r + d.top - i, g = r + n - (d.top + l + i), v = Math.max(f, g) === g ? "top" : "bottom"), this.picker.addClass("datepicker-orient-" + v), "top" === v ? p += l : p -= i + parseInt(this.picker.css("padding-top")), this.picker.css({
                    top: p,
                    left: u,
                    zIndex: o
                })
            }
        },
        _allow_update: !0,
        update: function() {
            if (this._allow_update) {
                var e = this.dates.copy(),
                    i = [],
                    a = !1;
                arguments.length ? (t.each(arguments, t.proxy(function(t, e) {
                    e instanceof Date && (e = this._local_to_utc(e)), i.push(e)
                }, this)), a = !0) : (i = this.isInput ? this.element.val() : this.element.data("date") || this.element.find("input").val(), i = i && this.o.multidate ? i.split(this.o.multidateSeparator) : [i], delete this.element.data().date), i = t.map(i, t.proxy(function(t) {
                    return g.parseDate(t, this.o.format, this.o.language)
                }, this)), i = t.grep(i, t.proxy(function(t) {
                    return t < this.o.startDate || t > this.o.endDate || !t
                }, this), !0), this.dates.replace(i), this.dates.length ? this.viewDate = new Date(this.dates.get(-1)) : this.viewDate < this.o.startDate ? this.viewDate = new Date(this.o.startDate) : this.viewDate > this.o.endDate && (this.viewDate = new Date(this.o.endDate)), a ? this.setValue() : i.length && String(e) !== String(this.dates) && this._trigger("changeDate"), !this.dates.length && e.length && this._trigger("clearDate"), this.fill()
            }
        },
        fillDow: function() {
            var t = this.o.weekStart,
                e = "<tr>";
            if (this.o.calendarWeeks) {
                var i = '<th class="cw">&nbsp;</th>';
                e += i, this.picker.find(".datepicker-days thead tr:first-child").prepend(i)
            }
            for (; t < this.o.weekStart + 7;) e += '<th class="dow">' + f[this.o.language].daysMin[t++ % 7] + "</th>";
            e += "</tr>", this.picker.find(".datepicker-days thead").append(e)
        },
        fillMonths: function() {
            for (var t = "", e = 0; 12 > e;) t += '<span class="month">' + f[this.o.language].monthsShort[e++] + "</span>";
            this.picker.find(".datepicker-months td").html(t)
        },
        setRange: function(e) {
            e && e.length ? this.range = t.map(e, function(t) {
                return t.valueOf()
            }) : delete this.range, this.fill()
        },
        getClassNames: function(e) {
            var i = [],
                a = this.viewDate.getUTCFullYear(),
                s = this.viewDate.getUTCMonth(),
                n = new Date;
            return e.getUTCFullYear() < a || e.getUTCFullYear() === a && e.getUTCMonth() < s ? i.push("old") : (e.getUTCFullYear() > a || e.getUTCFullYear() === a && e.getUTCMonth() > s) && i.push("new"), this.focusDate && e.valueOf() === this.focusDate.valueOf() && i.push("focused"), this.o.todayHighlight && e.getUTCFullYear() === n.getFullYear() && e.getUTCMonth() === n.getMonth() && e.getUTCDate() === n.getDate() && i.push("today"), -1 !== this.dates.contains(e) && i.push("active"), (e.valueOf() < this.o.startDate || e.valueOf() > this.o.endDate || -1 !== t.inArray(e.getUTCDay(), this.o.daysOfWeekDisabled)) && i.push("disabled"), this.range && (e > this.range[0] && e < this.range[this.range.length - 1] && i.push("range"), -1 !== t.inArray(e.valueOf(), this.range) && i.push("selected")), i
        },
        fill: function() {
            var a, s = new Date(this.viewDate),
                n = s.getUTCFullYear(),
                r = s.getUTCMonth(),
                h = this.o.startDate !== -1 / 0 ? this.o.startDate.getUTCFullYear() : -1 / 0,
                o = this.o.startDate !== -1 / 0 ? this.o.startDate.getUTCMonth() : -1 / 0,
                d = 1 / 0 !== this.o.endDate ? this.o.endDate.getUTCFullYear() : 1 / 0,
                l = 1 / 0 !== this.o.endDate ? this.o.endDate.getUTCMonth() : 1 / 0,
                c = f[this.o.language].today || f.en.today || "",
                u = f[this.o.language].clear || f.en.clear || "";
            this.picker.find(".datepicker-days thead th.datepicker-switch").text(f[this.o.language].months[r] + " " + n), this.picker.find("tfoot th.today").text(c).toggle(this.o.todayBtn !== !1), this.picker.find("tfoot th.clear").text(u).toggle(this.o.clearBtn !== !1), this.updateNavArrows(), this.fillMonths();
            var p = i(n, r - 1, 28),
                v = g.getDaysInMonth(p.getUTCFullYear(), p.getUTCMonth());
            p.setUTCDate(v), p.setUTCDate(v - (p.getUTCDay() - this.o.weekStart + 7) % 7);
            var D = new Date(p);
            D.setUTCDate(D.getUTCDate() + 42), D = D.valueOf();
            for (var m, y = []; p.valueOf() < D;) {
                if (p.getUTCDay() === this.o.weekStart && (y.push("<tr>"), this.o.calendarWeeks)) {
                    var w = new Date(+p + (this.o.weekStart - p.getUTCDay() - 7) % 7 * 864e5),
                        k = new Date(Number(w) + (11 - w.getUTCDay()) % 7 * 864e5),
                        _ = new Date(Number(_ = i(k.getUTCFullYear(), 0, 1)) + (11 - _.getUTCDay()) % 7 * 864e5),
                        C = (k - _) / 864e5 / 7 + 1;
                    y.push('<td class="cw">' + C + "</td>")
                }
                if (m = this.getClassNames(p), m.push("day"), this.o.beforeShowDay !== t.noop) {
                    var T = this.o.beforeShowDay(this._utc_to_local(p));
                    T === e ? T = {} : "boolean" == typeof T ? T = {
                        enabled: T
                    } : "string" == typeof T && (T = {
                        classes: T
                    }), T.enabled === !1 && m.push("disabled"), T.classes && (m = m.concat(T.classes.split(/\s+/))), T.tooltip && (a = T.tooltip)
                }
                m = t.unique(m), y.push('<td class="' + m.join(" ") + '"' + (a ? ' title="' + a + '"' : "") + ">" + p.getUTCDate() + "</td>"), p.getUTCDay() === this.o.weekEnd && y.push("</tr>"), p.setUTCDate(p.getUTCDate() + 1)
            }
            this.picker.find(".datepicker-days tbody").empty().append(y.join(""));
            var b = this.picker.find(".datepicker-months").find("th:eq(1)").text(n).end().find("span").removeClass("active");
            t.each(this.dates, function(t, e) {
                e.getUTCFullYear() === n && b.eq(e.getUTCMonth()).addClass("active")
            }), (h > n || n > d) && b.addClass("disabled"), n === h && b.slice(0, o).addClass("disabled"), n === d && b.slice(l + 1).addClass("disabled"), y = "", n = 10 * parseInt(n / 10, 10);
            var U = this.picker.find(".datepicker-years").find("th:eq(1)").text(n + "-" + (n + 9)).end().find("td");
            n -= 1;
            for (var M, x = t.map(this.dates, function(t) {
                    return t.getUTCFullYear()
                }), S = -1; 11 > S; S++) M = ["year"], -1 === S ? M.push("old") : 10 === S && M.push("new"), -1 !== t.inArray(n, x) && M.push("active"), (h > n || n > d) && M.push("disabled"), y += '<span class="' + M.join(" ") + '">' + n + "</span>", n += 1;
            U.html(y)
        },
        updateNavArrows: function() {
            if (this._allow_update) {
                var t = new Date(this.viewDate),
                    e = t.getUTCFullYear(),
                    i = t.getUTCMonth();
                switch (this.viewMode) {
                    case 0:
                        this.o.startDate !== -1 / 0 && e <= this.o.startDate.getUTCFullYear() && i <= this.o.startDate.getUTCMonth() ? this.picker.find(".prev").css({
                            visibility: "hidden"
                        }) : this.picker.find(".prev").css({
                            visibility: "visible"
                        }), 1 / 0 !== this.o.endDate && e >= this.o.endDate.getUTCFullYear() && i >= this.o.endDate.getUTCMonth() ? this.picker.find(".next").css({
                            visibility: "hidden"
                        }) : this.picker.find(".next").css({
                            visibility: "visible"
                        });
                        break;
                    case 1:
                    case 2:
                        this.o.startDate !== -1 / 0 && e <= this.o.startDate.getUTCFullYear() ? this.picker.find(".prev").css({
                            visibility: "hidden"
                        }) : this.picker.find(".prev").css({
                            visibility: "visible"
                        }), 1 / 0 !== this.o.endDate && e >= this.o.endDate.getUTCFullYear() ? this.picker.find(".next").css({
                            visibility: "hidden"
                        }) : this.picker.find(".next").css({
                            visibility: "visible"
                        })
                }
            }
        },
        click: function(e) {
            e.preventDefault();
            var a, s, n, r = t(e.target).closest("span, td, th");
            if (1 === r.length) switch (r[0].nodeName.toLowerCase()) {
                case "th":
                    switch (r[0].className) {
                        case "datepicker-switch":
                            this.showMode(1);
                            break;
                        case "prev":
                        case "next":
                            var h = g.modes[this.viewMode].navStep * ("prev" === r[0].className ? -1 : 1);
                            switch (this.viewMode) {
                                case 0:
                                    this.viewDate = this.moveMonth(this.viewDate, h), this._trigger("changeMonth", this.viewDate);
                                    break;
                                case 1:
                                case 2:
                                    this.viewDate = this.moveYear(this.viewDate, h), 1 === this.viewMode && this._trigger("changeYear", this.viewDate)
                            }
                            this.fill();
                            break;
                        case "today":
                            var o = new Date;
                            o = i(o.getFullYear(), o.getMonth(), o.getDate(), 0, 0, 0), this.showMode(-2);
                            var d = "linked" === this.o.todayBtn ? null : "view";
                            this._setDate(o, d);
                            break;
                        case "clear":
                            var l;
                            this.isInput ? l = this.element : this.component && (l = this.element.find("input")), l && l.val("").change(), this.update(), this._trigger("changeDate"), this.o.autoclose && this.hide()
                    }
                    break;
                case "span":
                    r.is(".disabled") || (this.viewDate.setUTCDate(1), r.is(".month") ? (n = 1, s = r.parent().find("span").index(r), a = this.viewDate.getUTCFullYear(), this.viewDate.setUTCMonth(s), this._trigger("changeMonth", this.viewDate), 1 === this.o.minViewMode && this._setDate(i(a, s, n))) : (n = 1, s = 0, a = parseInt(r.text(), 10) || 0, this.viewDate.setUTCFullYear(a), this._trigger("changeYear", this.viewDate), 2 === this.o.minViewMode && this._setDate(i(a, s, n))), this.showMode(-1), this.fill());
                    break;
                case "td":
                    r.is(".day") && !r.is(".disabled") && (n = parseInt(r.text(), 10) || 1, a = this.viewDate.getUTCFullYear(), s = this.viewDate.getUTCMonth(), r.is(".old") ? 0 === s ? (s = 11, a -= 1) : s -= 1 : r.is(".new") && (11 === s ? (s = 0, a += 1) : s += 1), this._setDate(i(a, s, n)))
            }
            this.picker.is(":visible") && this._focused_from && t(this._focused_from).focus(), delete this._focused_from
        },
        _toggle_multidate: function(t) {
            var e = this.dates.contains(t);
            if (t ? -1 !== e ? this.dates.remove(e) : this.dates.push(t) : this.dates.clear(), "number" == typeof this.o.multidate)
                for (; this.dates.length > this.o.multidate;) this.dates.remove(0)
        },
        _setDate: function(t, e) {
            e && "date" !== e || this._toggle_multidate(t && new Date(t)), e && "view" !== e || (this.viewDate = t && new Date(t)), this.fill(), this.setValue(), this._trigger("changeDate");
            var i;
            this.isInput ? i = this.element : this.component && (i = this.element.find("input")), i && i.change(), !this.o.autoclose || e && "date" !== e || this.hide()
        },
        moveMonth: function(t, i) {
            if (!t) return e;
            if (!i) return t;
            var a, s, n = new Date(t.valueOf()),
                r = n.getUTCDate(),
                h = n.getUTCMonth(),
                o = Math.abs(i);
            if (i = i > 0 ? 1 : -1, 1 === o) s = -1 === i ? function() {
                return n.getUTCMonth() === h
            } : function() {
                return n.getUTCMonth() !== a
            }, a = h + i, n.setUTCMonth(a), (0 > a || a > 11) && (a = (a + 12) % 12);
            else {
                for (var d = 0; o > d; d++) n = this.moveMonth(n, i);
                a = n.getUTCMonth(), n.setUTCDate(r), s = function() {
                    return a !== n.getUTCMonth()
                }
            }
            for (; s();) n.setUTCDate(--r), n.setUTCMonth(a);
            return n
        },
        moveYear: function(t, e) {
            return this.moveMonth(t, 12 * e)
        },
        dateWithinRange: function(t) {
            return t >= this.o.startDate && t <= this.o.endDate
        },
        keydown: function(t) {
            if (this.picker.is(":not(:visible)")) return 27 === t.keyCode && this.show(), void 0;
            var e, i, s, n = !1,
                r = this.focusDate || this.viewDate;
            switch (t.keyCode) {
                case 27:
                    this.focusDate ? (this.focusDate = null, this.viewDate = this.dates.get(-1) || this.viewDate, this.fill()) : this.hide(), t.preventDefault();
                    break;
                case 37:
                case 39:
                    if (!this.o.keyboardNavigation) break;
                    e = 37 === t.keyCode ? -1 : 1, t.ctrlKey ? (i = this.moveYear(this.dates.get(-1) || a(), e), s = this.moveYear(r, e), this._trigger("changeYear", this.viewDate)) : t.shiftKey ? (i = this.moveMonth(this.dates.get(-1) || a(), e), s = this.moveMonth(r, e), this._trigger("changeMonth", this.viewDate)) : (i = new Date(this.dates.get(-1) || a()), i.setUTCDate(i.getUTCDate() + e), s = new Date(r), s.setUTCDate(r.getUTCDate() + e)), this.dateWithinRange(i) && (this.focusDate = this.viewDate = s, this.setValue(), this.fill(), t.preventDefault());
                    break;
                case 38:
                case 40:
                    if (!this.o.keyboardNavigation) break;
                    e = 38 === t.keyCode ? -1 : 1, t.ctrlKey ? (i = this.moveYear(this.dates.get(-1) || a(), e), s = this.moveYear(r, e), this._trigger("changeYear", this.viewDate)) : t.shiftKey ? (i = this.moveMonth(this.dates.get(-1) || a(), e), s = this.moveMonth(r, e), this._trigger("changeMonth", this.viewDate)) : (i = new Date(this.dates.get(-1) || a()), i.setUTCDate(i.getUTCDate() + 7 * e), s = new Date(r), s.setUTCDate(r.getUTCDate() + 7 * e)), this.dateWithinRange(i) && (this.focusDate = this.viewDate = s, this.setValue(), this.fill(), t.preventDefault());
                    break;
                case 32:
                    break;
                case 13:
                    r = this.focusDate || this.dates.get(-1) || this.viewDate, this._toggle_multidate(r), n = !0, this.focusDate = null, this.viewDate = this.dates.get(-1) || this.viewDate, this.setValue(), this.fill(), this.picker.is(":visible") && (t.preventDefault(), this.o.autoclose && this.hide());
                    break;
                case 9:
                    this.focusDate = null, this.viewDate = this.dates.get(-1) || this.viewDate, this.fill(), this.hide()
            }
            if (n) {
                this.dates.length ? this._trigger("changeDate") : this._trigger("clearDate");
                var h;
                this.isInput ? h = this.element : this.component && (h = this.element.find("input")), h && h.change()
            }
        },
        showMode: function(t) {
            t && (this.viewMode = Math.max(this.o.minViewMode, Math.min(2, this.viewMode + t))), this.picker.find(">div").hide().filter(".datepicker-" + g.modes[this.viewMode].clsName).css("display", "block"), this.updateNavArrows()
        }
    };
    var l = function(e, i) {
        this.element = t(e), this.inputs = t.map(i.inputs, function(t) {
            return t.jquery ? t[0] : t
        }), delete i.inputs, t(this.inputs).datepicker(i).bind("changeDate", t.proxy(this.dateUpdated, this)), this.pickers = t.map(this.inputs, function(e) {
            return t(e).data("datepicker")
        }), this.updateDates()
    };
    l.prototype = {
        updateDates: function() {
            this.dates = t.map(this.pickers, function(t) {
                return t.getUTCDate()
            }), this.updateRanges()
        },
        updateRanges: function() {
            var e = t.map(this.dates, function(t) {
                return t.valueOf()
            });
            t.each(this.pickers, function(t, i) {
                i.setRange(e)
            })
        },
        dateUpdated: function(e) {
            if (!this.updating) {
                this.updating = !0;
                var i = t(e.target).data("datepicker"),
                    a = i.getUTCDate(),
                    s = t.inArray(e.target, this.inputs),
                    n = this.inputs.length;
                if (-1 !== s) {
                    if (t.each(this.pickers, function(t, e) {
                            e.getUTCDate() || e.setUTCDate(a)
                        }), a < this.dates[s])
                        for (; s >= 0 && a < this.dates[s];) this.pickers[s--].setUTCDate(a);
                    else if (a > this.dates[s])
                        for (; n > s && a > this.dates[s];) this.pickers[s++].setUTCDate(a);
                    this.updateDates(), delete this.updating
                }
            }
        },
        remove: function() {
            t.map(this.pickers, function(t) {
                t.remove()
            }), delete this.element.data().datepicker
        }
    };
    var c = t.fn.datepicker;
    t.fn.datepicker = function(i) {
        var a = Array.apply(null, arguments);
        a.shift();
        var s;
        return this.each(function() {
            var h = t(this),
                o = h.data("datepicker"),
                c = "object" == typeof i && i;
            if (!o) {
                var p = n(this, "date"),
                    f = t.extend({}, u, p, c),
                    g = r(f.language),
                    v = t.extend({}, u, g, p, c);
                if (h.is(".input-daterange") || v.inputs) {
                    var D = {
                        inputs: v.inputs || h.find("input").toArray()
                    };
                    h.data("datepicker", o = new l(this, t.extend(v, D)))
                } else h.data("datepicker", o = new d(this, v))
            }
            return "string" == typeof i && "function" == typeof o[i] && (s = o[i].apply(o, a), s !== e) ? !1 : void 0
        }), s !== e ? s : this
    };
    var u = t.fn.datepicker.defaults = {
            autoclose: !1,
            beforeShowDay: t.noop,
            calendarWeeks: !1,
            clearBtn: !1,
            daysOfWeekDisabled: [],
            endDate: 1 / 0,
            forceParse: !0,
            format: "dd/mm/yyyy",
            keyboardNavigation: !0,
            language: "en",
            minViewMode: 0,
            multidate: !1,
            multidateSeparator: ",",
            orientation: "auto",
            rtl: !1,
            startDate: -1 / 0,
            startView: 0,
            todayBtn: !1,
            todayHighlight: !1,
            weekStart: 0
        },
        p = t.fn.datepicker.locale_opts = ["format", "rtl", "weekStart"];
    t.fn.datepicker.Constructor = d;
    var f = t.fn.datepicker.dates = {
            en: {
                days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
                daysShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
                daysMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"],
                months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
                monthsShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                today: "Today",
                clear: "Clear"
            }
        },
        g = {
            modes: [{
                clsName: "days",
                navFnc: "Month",
                navStep: 1
            }, {
                clsName: "months",
                navFnc: "FullYear",
                navStep: 1
            }, {
                clsName: "years",
                navFnc: "FullYear",
                navStep: 10
            }],
            isLeapYear: function(t) {
                return t % 4 === 0 && t % 100 !== 0 || t % 400 === 0
            },
            getDaysInMonth: function(t, e) {
                return [31, g.isLeapYear(t) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][e]
            },
            validParts: /dd?|DD?|mm?|MM?|yy(?:yy)?/g,
            nonpunctuation: /[^ -\/:-@\[\u3400-\u9fff-`{-~\t\n\r]+/g,
            parseFormat: function(t) {
                var e = t.replace(this.validParts, "\x00").split("\x00"),
                    i = t.match(this.validParts);
                if (!e || !e.length || !i || 0 === i.length) throw new Error("Invalid date format.");
                return {
                    separators: e,
                    parts: i
                }
            },
            parseDate: function(a, s, n) {
                function r() {
                    var t = this.slice(0, u[l].length),
                        e = u[l].slice(0, t.length);
                    return t === e
                }
                if (!a) return e;
                if (a instanceof Date) return a;
                "string" == typeof s && (s = g.parseFormat(s));
                var h, o, l, c = /([\-+]\d+)([dmwy])/,
                    u = a.match(/([\-+]\d+)([dmwy])/g);
                if (/^[\-+]\d+[dmwy]([\s,]+[\-+]\d+[dmwy])*$/.test(a)) {
                    for (a = new Date, l = 0; l < u.length; l++) switch (h = c.exec(u[l]), o = parseInt(h[1]), h[2]) {
                        case "d":
                            a.setUTCDate(a.getUTCDate() + o);
                            break;
                        case "m":
                            a = d.prototype.moveMonth.call(d.prototype, a, o);
                            break;
                        case "w":
                            a.setUTCDate(a.getUTCDate() + 7 * o);
                            break;
                        case "y":
                            a = d.prototype.moveYear.call(d.prototype, a, o)
                    }
                    return i(a.getUTCFullYear(), a.getUTCMonth(), a.getUTCDate(), 0, 0, 0)
                }
                u = a && a.match(this.nonpunctuation) || [], a = new Date;
                var p, v, D = {},
                    m = ["yyyy", "yy", "M", "MM", "m", "mm", "d", "dd"],
                    y = {
                        yyyy: function(t, e) {
                            return t.setUTCFullYear(e)
                        },
                        yy: function(t, e) {
                            return t.setUTCFullYear(2e3 + e)
                        },
                        m: function(t, e) {
                            if (isNaN(t)) return t;
                            for (e -= 1; 0 > e;) e += 12;
                            for (e %= 12, t.setUTCMonth(e); t.getUTCMonth() !== e;) t.setUTCDate(t.getUTCDate() - 1);
                            return t
                        },
                        d: function(t, e) {
                            return t.setUTCDate(e)
                        }
                    };
                y.M = y.MM = y.mm = y.m, y.dd = y.d, a = i(a.getFullYear(), a.getMonth(), a.getDate(), 0, 0, 0);
                var w = s.parts.slice();
                if (u.length !== w.length && (w = t(w).filter(function(e, i) {
                        return -1 !== t.inArray(i, m)
                    }).toArray()), u.length === w.length) {
                    var k;
                    for (l = 0, k = w.length; k > l; l++) {
                        if (p = parseInt(u[l], 10), h = w[l], isNaN(p)) switch (h) {
                            case "MM":
                                v = t(f[n].months).filter(r), p = t.inArray(v[0], f[n].months) + 1;
                                break;
                            case "M":
                                v = t(f[n].monthsShort).filter(r), p = t.inArray(v[0], f[n].monthsShort) + 1
                        }
                        D[h] = p
                    }
                    var _, C;
                    for (l = 0; l < m.length; l++) C = m[l], C in D && !isNaN(D[C]) && (_ = new Date(a), y[C](_, D[C]), isNaN(_) || (a = _))
                }
                return a
            },
            formatDate: function(e, i, a) {
                if (!e) return "";
                "string" == typeof i && (i = g.parseFormat(i));
                var s = {
                    d: e.getUTCDate(),
                    D: f[a].daysShort[e.getUTCDay()],
                    DD: f[a].days[e.getUTCDay()],
                    m: e.getUTCMonth() + 1,
                    M: f[a].monthsShort[e.getUTCMonth()],
                    MM: f[a].months[e.getUTCMonth()],
                    yy: e.getUTCFullYear().toString().substring(2),
                    yyyy: e.getUTCFullYear()
                };
                s.dd = (s.d < 10 ? "0" : "") + s.d, s.mm = (s.m < 10 ? "0" : "") + s.m, e = [];
                for (var n = t.extend([], i.separators), r = 0, h = i.parts.length; h >= r; r++) n.length && e.push(n.shift()), e.push(s[i.parts[r]]);
                return e.join("")
            },
            headTemplate: '<thead><tr><th class="prev">&laquo;</th><th colspan="5" class="datepicker-switch"></th><th class="next">&raquo;</th></tr></thead>',
            contTemplate: '<tbody><tr><td colspan="7"></td></tr></tbody>',
            footTemplate: '<tfoot><tr><th colspan="7" class="today"></th></tr><tr><th colspan="7" class="clear"></th></tr></tfoot>'
        };
    g.template = '<div class="datepicker"><div class="datepicker-days"><table class=" table-condensed">' + g.headTemplate + "<tbody></tbody>" + g.footTemplate + '</table></div><div class="datepicker-months"><table class="table-condensed">' + g.headTemplate + g.contTemplate + g.footTemplate + '</table></div><div class="datepicker-years"><table class="table-condensed">' + g.headTemplate + g.contTemplate + g.footTemplate + "</table></div></div>", t.fn.datepicker.DPGlobal = g, t.fn.datepicker.noConflict = function() {
        return t.fn.datepicker = c, this
    }, t(document).on("focus.datepicker.data-api click.datepicker.data-api", '[data-provide="datepicker"]', function(e) {
        var i = t(this);
        i.data("datepicker") || (e.preventDefault(), i.datepicker("show"))
    }), t(function() {
        t('[data-provide="datepicker-inline"]').datepicker()
    })
}(window.jQuery);