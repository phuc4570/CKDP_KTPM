(window.webpackJsonp=window.webpackJsonp||[]).push([[135],{465:function(t,a,e){"use strict";e.r(a);var s=e(6),r=Object(s.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"time-cartesian-axis"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#time-cartesian-axis"}},[t._v("#")]),t._v(" Time Cartesian Axis")]),t._v(" "),e("p",[t._v("The time scale is used to display times and dates. Data are spread according to the amount of time between data points. When building its ticks, it will automatically calculate the most comfortable unit base on the size of the scale.")]),t._v(" "),e("h2",{attrs:{id:"date-adapters"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#date-adapters"}},[t._v("#")]),t._v(" Date Adapters")]),t._v(" "),e("p",[t._v("The time scale "),e("strong",[t._v("requires")]),t._v(" both a date library and a corresponding adapter to be present. Please choose from the "),e("a",{attrs:{href:"https://github.com/chartjs/awesome#adapters",target:"_blank",rel:"noopener noreferrer"}},[t._v("available adapters"),e("OutboundLink")],1),t._v(".")]),t._v(" "),e("h2",{attrs:{id:"data-sets"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#data-sets"}},[t._v("#")]),t._v(" Data Sets")]),t._v(" "),e("h3",{attrs:{id:"input-data"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#input-data"}},[t._v("#")]),t._v(" Input Data")]),t._v(" "),e("p",[t._v("See "),e("RouterLink",{attrs:{to:"/general/data-structures.html"}},[t._v("data structures")]),t._v(".")],1),t._v(" "),e("h3",{attrs:{id:"date-formats"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#date-formats"}},[t._v("#")]),t._v(" Date Formats")]),t._v(" "),e("p",[t._v("When providing data for the time scale, Chart.js uses timestamps defined as milliseconds since the epoch (midnight January 1, 1970, UTC) internally. However, Chart.js also supports all of the formats that your chosen date adapter accepts. You should use timestamps if you'd like to set "),e("code",[t._v("parsing: false")]),t._v(" for better performance.")]),t._v(" "),e("h2",{attrs:{id:"configuration-options"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#configuration-options"}},[t._v("#")]),t._v(" Configuration Options")]),t._v(" "),e("h3",{attrs:{id:"time-axis-specific-options"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#time-axis-specific-options"}},[t._v("#")]),t._v(" Time Axis specific options")]),t._v(" "),e("p",[t._v("Namespace: "),e("code",[t._v("options.scales[scaleId]")])]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("Name")]),t._v(" "),e("th",[t._v("Type")]),t._v(" "),e("th",[t._v("Default")]),t._v(" "),e("th",[t._v("Description")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[e("code",[t._v("min")])]),t._v(" "),e("td",[e("code",[t._v("number")]),t._v("|"),e("code",[t._v("string")])]),t._v(" "),e("td"),t._v(" "),e("td",[t._v("The minimum item to display. "),e("a",{attrs:{href:"#min-max-configuration"}},[t._v("more...")])])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("max")])]),t._v(" "),e("td",[e("code",[t._v("number")]),t._v("|"),e("code",[t._v("string")])]),t._v(" "),e("td"),t._v(" "),e("td",[t._v("The maximum item to display. "),e("a",{attrs:{href:"#min-max-configuration"}},[t._v("more...")])])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("suggestedMin")])]),t._v(" "),e("td",[e("code",[t._v("number")]),t._v("|"),e("code",[t._v("string")])]),t._v(" "),e("td"),t._v(" "),e("td",[t._v("The minimum item to display if there is no datapoint before it. "),e("RouterLink",{attrs:{to:"/axes/#axis-range-settings"}},[t._v("more...")])],1)]),t._v(" "),e("tr",[e("td",[e("code",[t._v("suggestedMax")])]),t._v(" "),e("td",[e("code",[t._v("number")]),t._v("|"),e("code",[t._v("string")])]),t._v(" "),e("td"),t._v(" "),e("td",[t._v("The maximum item to display if there is no datapoint behind it. "),e("RouterLink",{attrs:{to:"/axes/#axis-range-settings"}},[t._v("more...")])],1)]),t._v(" "),e("tr",[e("td",[e("code",[t._v("adapters.date")])]),t._v(" "),e("td",[e("code",[t._v("object")])]),t._v(" "),e("td",[e("code",[t._v("{}")])]),t._v(" "),e("td",[t._v("Options for adapter for external date library if that adapter needs or supports options")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("bounds")])]),t._v(" "),e("td",[e("code",[t._v("string")])]),t._v(" "),e("td",[e("code",[t._v("'data'")])]),t._v(" "),e("td",[t._v("Determines the scale bounds. "),e("RouterLink",{attrs:{to:"/axes/cartesian/#scale-bounds"}},[t._v("more...")])],1)]),t._v(" "),e("tr",[e("td",[e("code",[t._v("offsetAfterAutoskip")])]),t._v(" "),e("td",[e("code",[t._v("boolean")])]),t._v(" "),e("td",[e("code",[t._v("false")])]),t._v(" "),e("td",[t._v("If true, bar chart offsets are computed with auto skipped ticks.")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("ticks.source")])]),t._v(" "),e("td",[e("code",[t._v("string")])]),t._v(" "),e("td",[e("code",[t._v("'auto'")])]),t._v(" "),e("td",[t._v("How ticks are generated. "),e("a",{attrs:{href:"#ticks-source"}},[t._v("more...")])])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("time.displayFormats")])]),t._v(" "),e("td",[e("code",[t._v("object")])]),t._v(" "),e("td"),t._v(" "),e("td",[t._v("Sets how different time units are displayed. "),e("a",{attrs:{href:"#display-formats"}},[t._v("more...")])])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("time.isoWeekday")])]),t._v(" "),e("td",[e("code",[t._v("boolean")]),t._v("|"),e("code",[t._v("number")])]),t._v(" "),e("td",[e("code",[t._v("false")])]),t._v(" "),e("td",[t._v("If "),e("code",[t._v("boolean")]),t._v(" and true and the unit is set to 'week', then the first day of the week will be Monday. Otherwise, it will be Sunday. If "),e("code",[t._v("number")]),t._v(", the index of the first day of the week (0 - Sunday, 6 - Saturday)")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("time.parser")])]),t._v(" "),e("td",[e("code",[t._v("string")]),t._v("|"),e("code",[t._v("function")])]),t._v(" "),e("td"),t._v(" "),e("td",[t._v("Custom parser for dates. "),e("a",{attrs:{href:"#parser"}},[t._v("more...")])])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("time.round")])]),t._v(" "),e("td",[e("code",[t._v("string")])]),t._v(" "),e("td",[e("code",[t._v("false")])]),t._v(" "),e("td",[t._v("If defined, dates will be rounded to the start of this unit. See "),e("a",{attrs:{href:"#time-units"}},[t._v("Time Units")]),t._v(" below for the allowed units.")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("time.tooltipFormat")])]),t._v(" "),e("td",[e("code",[t._v("string")])]),t._v(" "),e("td"),t._v(" "),e("td",[t._v("The format string to use for the tooltip.")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("time.unit")])]),t._v(" "),e("td",[e("code",[t._v("string")])]),t._v(" "),e("td",[e("code",[t._v("false")])]),t._v(" "),e("td",[t._v("If defined, will force the unit to be a certain type. See "),e("a",{attrs:{href:"#time-units"}},[t._v("Time Units")]),t._v(" section below for details.")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("time.stepSize")])]),t._v(" "),e("td",[e("code",[t._v("number")])]),t._v(" "),e("td",[e("code",[t._v("1")])]),t._v(" "),e("td",[t._v("The number of units between grid lines.")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("time.minUnit")])]),t._v(" "),e("td",[e("code",[t._v("string")])]),t._v(" "),e("td",[e("code",[t._v("'millisecond'")])]),t._v(" "),e("td",[t._v("The minimum display format to be used for a time unit.")])])])]),t._v(" "),e("h3",{attrs:{id:"common-options-to-all-cartesian-axes"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#common-options-to-all-cartesian-axes"}},[t._v("#")]),t._v(" Common options to all cartesian axes")]),t._v(" "),e("p",[t._v("Namespace: "),e("code",[t._v("options.scales[scaleId]")])]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("Name")]),t._v(" "),e("th",[t._v("Type")]),t._v(" "),e("th",[t._v("Default")]),t._v(" "),e("th",[t._v("Description")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[e("code",[t._v("bounds")])]),t._v(" "),e("td",[e("code",[t._v("string")])]),t._v(" "),e("td",[e("code",[t._v("'ticks'")])]),t._v(" "),e("td",[t._v("Determines the scale bounds. "),e("RouterLink",{attrs:{to:"/axes/cartesian/#scale-bounds"}},[t._v("more...")])],1)]),t._v(" "),e("tr",[e("td",[e("code",[t._v("position")])]),t._v(" "),e("td",[e("code",[t._v("string")]),t._v(" | "),e("code",[t._v("object")])]),t._v(" "),e("td"),t._v(" "),e("td",[t._v("Position of the axis. "),e("RouterLink",{attrs:{to:"/axes/cartesian/#axis-position"}},[t._v("more...")])],1)]),t._v(" "),e("tr",[e("td",[e("code",[t._v("stack")])]),t._v(" "),e("td",[e("code",[t._v("string")])]),t._v(" "),e("td"),t._v(" "),e("td",[t._v("Stack group. Axes at the same "),e("code",[t._v("position")]),t._v(" with same "),e("code",[t._v("stack")]),t._v(" are stacked.")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("stackWeight")])]),t._v(" "),e("td",[e("code",[t._v("number")])]),t._v(" "),e("td",[t._v("1")]),t._v(" "),e("td",[t._v("Weight of the scale in stack group. Used to determine the amount of allocated space for the scale within the group.")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("axis")])]),t._v(" "),e("td",[e("code",[t._v("string")])]),t._v(" "),e("td"),t._v(" "),e("td",[t._v("Which type of axis this is. Possible values are: "),e("code",[t._v("'x'")]),t._v(", "),e("code",[t._v("'y'")]),t._v(". If not set, this is inferred from the first character of the ID which should be "),e("code",[t._v("'x'")]),t._v(" or "),e("code",[t._v("'y'")]),t._v(".")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("offset")])]),t._v(" "),e("td",[e("code",[t._v("boolean")])]),t._v(" "),e("td",[e("code",[t._v("false")])]),t._v(" "),e("td",[t._v("If true, extra space is added to the both edges and the axis is scaled to fit into the chart area. This is set to "),e("code",[t._v("true")]),t._v(" for a bar chart by default.")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("title")])]),t._v(" "),e("td",[e("code",[t._v("object")])]),t._v(" "),e("td"),t._v(" "),e("td",[t._v("Scale title configuration. "),e("RouterLink",{attrs:{to:"/axes/labelling.html#scale-title-configuration"}},[t._v("more...")])],1)])])]),t._v(" "),e("h3",{attrs:{id:"common-options-to-all-axes"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#common-options-to-all-axes"}},[t._v("#")]),t._v(" Common options to all axes")]),t._v(" "),e("p",[t._v("Namespace: "),e("code",[t._v("options.scales[scaleId]")])]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("Name")]),t._v(" "),e("th",[t._v("Type")]),t._v(" "),e("th",[t._v("Default")]),t._v(" "),e("th",[t._v("Description")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[e("code",[t._v("type")])]),t._v(" "),e("td",[e("code",[t._v("string")])]),t._v(" "),e("td"),t._v(" "),e("td",[t._v("Type of scale being employed. Custom scales can be created and registered with a string key. This allows changing the type of an axis for a chart.")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("alignToPixels")])]),t._v(" "),e("td",[e("code",[t._v("boolean")])]),t._v(" "),e("td",[e("code",[t._v("false")])]),t._v(" "),e("td",[t._v("Align pixel values to device pixels.")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("backgroundColor")])]),t._v(" "),e("td",[e("RouterLink",{attrs:{to:"/general/colors.html"}},[e("code",[t._v("Color")])])],1),t._v(" "),e("td"),t._v(" "),e("td",[t._v("Background color of the scale area.")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("display")])]),t._v(" "),e("td",[e("code",[t._v("boolean")]),t._v("|"),e("code",[t._v("string")])]),t._v(" "),e("td",[e("code",[t._v("true")])]),t._v(" "),e("td",[t._v("Controls the axis global visibility (visible when "),e("code",[t._v("true")]),t._v(", hidden when "),e("code",[t._v("false")]),t._v("). When "),e("code",[t._v("display: 'auto'")]),t._v(", the axis is visible only if at least one associated dataset is visible.")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("grid")])]),t._v(" "),e("td",[e("code",[t._v("object")])]),t._v(" "),e("td"),t._v(" "),e("td",[t._v("Grid line configuration. "),e("RouterLink",{attrs:{to:"/axes/styling.html#grid-line-configuration"}},[t._v("more...")])],1)]),t._v(" "),e("tr",[e("td",[e("code",[t._v("min")])]),t._v(" "),e("td",[e("code",[t._v("number")])]),t._v(" "),e("td"),t._v(" "),e("td",[t._v("User defined minimum number for the scale, overrides minimum value from data. "),e("RouterLink",{attrs:{to:"/axes/#axis-range-settings"}},[t._v("more...")])],1)]),t._v(" "),e("tr",[e("td",[e("code",[t._v("max")])]),t._v(" "),e("td",[e("code",[t._v("number")])]),t._v(" "),e("td"),t._v(" "),e("td",[t._v("User defined maximum number for the scale, overrides maximum value from data. "),e("RouterLink",{attrs:{to:"/axes/#axis-range-settings"}},[t._v("more...")])],1)]),t._v(" "),e("tr",[e("td",[e("code",[t._v("reverse")])]),t._v(" "),e("td",[e("code",[t._v("boolean")])]),t._v(" "),e("td",[e("code",[t._v("false")])]),t._v(" "),e("td",[t._v("Reverse the scale.")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("stacked")])]),t._v(" "),e("td",[e("code",[t._v("boolean")]),t._v("|"),e("code",[t._v("string")])]),t._v(" "),e("td",[e("code",[t._v("false")])]),t._v(" "),e("td",[t._v("Should the data be stacked. "),e("RouterLink",{attrs:{to:"/axes/#stacking"}},[t._v("more...")])],1)]),t._v(" "),e("tr",[e("td",[e("code",[t._v("suggestedMax")])]),t._v(" "),e("td",[e("code",[t._v("number")])]),t._v(" "),e("td"),t._v(" "),e("td",[t._v("Adjustment used when calculating the maximum data value. "),e("RouterLink",{attrs:{to:"/axes/#axis-range-settings"}},[t._v("more...")])],1)]),t._v(" "),e("tr",[e("td",[e("code",[t._v("suggestedMin")])]),t._v(" "),e("td",[e("code",[t._v("number")])]),t._v(" "),e("td"),t._v(" "),e("td",[t._v("Adjustment used when calculating the minimum data value. "),e("RouterLink",{attrs:{to:"/axes/#axis-range-settings"}},[t._v("more...")])],1)]),t._v(" "),e("tr",[e("td",[e("code",[t._v("ticks")])]),t._v(" "),e("td",[e("code",[t._v("object")])]),t._v(" "),e("td"),t._v(" "),e("td",[t._v("Tick configuration. "),e("RouterLink",{attrs:{to:"/axes/#tick-configuration"}},[t._v("more...")])],1)]),t._v(" "),e("tr",[e("td",[e("code",[t._v("weight")])]),t._v(" "),e("td",[e("code",[t._v("number")])]),t._v(" "),e("td",[e("code",[t._v("0")])]),t._v(" "),e("td",[t._v("The weight used to sort the axis. Higher weights are further away from the chart area.")])])])]),t._v(" "),e("h4",{attrs:{id:"time-units"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#time-units"}},[t._v("#")]),t._v(" Time Units")]),t._v(" "),e("p",[t._v("The following time measurements are supported. The names can be passed as strings to the "),e("code",[t._v("time.unit")]),t._v(" config option to force a certain unit.")]),t._v(" "),e("ul",[e("li",[e("code",[t._v("'millisecond'")])]),t._v(" "),e("li",[e("code",[t._v("'second'")])]),t._v(" "),e("li",[e("code",[t._v("'minute'")])]),t._v(" "),e("li",[e("code",[t._v("'hour'")])]),t._v(" "),e("li",[e("code",[t._v("'day'")])]),t._v(" "),e("li",[e("code",[t._v("'week'")])]),t._v(" "),e("li",[e("code",[t._v("'month'")])]),t._v(" "),e("li",[e("code",[t._v("'quarter'")])]),t._v(" "),e("li",[e("code",[t._v("'year'")])])]),t._v(" "),e("p",[t._v("For example, to create a chart with a time scale that always displayed units per month, the following config could be used.")]),t._v(" "),e("div",{staticClass:"language-javascript extra-class"},[e("pre",{pre:!0,attrs:{class:"language-javascript"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" chart "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Chart")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ctx"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("type")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'line'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("data")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" data"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("options")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("scales")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),e("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("x")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                "),e("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("type")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'time'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                "),e("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("time")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                    "),e("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("unit")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'month'")]),t._v("\n                "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n            "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("h4",{attrs:{id:"display-formats"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#display-formats"}},[t._v("#")]),t._v(" Display Formats")]),t._v(" "),e("p",[t._v("You may specify a map of display formats with a key for each unit:")]),t._v(" "),e("ul",[e("li",[e("code",[t._v("millisecond")])]),t._v(" "),e("li",[e("code",[t._v("second")])]),t._v(" "),e("li",[e("code",[t._v("minute")])]),t._v(" "),e("li",[e("code",[t._v("hour")])]),t._v(" "),e("li",[e("code",[t._v("day")])]),t._v(" "),e("li",[e("code",[t._v("week")])]),t._v(" "),e("li",[e("code",[t._v("month")])]),t._v(" "),e("li",[e("code",[t._v("quarter")])]),t._v(" "),e("li",[e("code",[t._v("year")])])]),t._v(" "),e("p",[t._v("The format string used as a value depends on the date adapter you chose to use.")]),t._v(" "),e("p",[t._v("For example, to set the display format for the "),e("code",[t._v("quarter")]),t._v(" unit to show the month and year, the following config might be passed to the chart constructor.")]),t._v(" "),e("div",{staticClass:"language-javascript extra-class"},[e("pre",{pre:!0,attrs:{class:"language-javascript"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" chart "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Chart")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ctx"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("type")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'line'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("data")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" data"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("options")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("scales")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),e("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("x")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                "),e("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("type")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'time'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                "),e("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("time")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                    "),e("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("displayFormats")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                        "),e("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("quarter")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'MMM YYYY'")]),t._v("\n                    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n                "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n            "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("h4",{attrs:{id:"ticks-source"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#ticks-source"}},[t._v("#")]),t._v(" Ticks Source")]),t._v(" "),e("p",[t._v("The "),e("code",[t._v("ticks.source")]),t._v(" property controls the ticks generation.")]),t._v(" "),e("ul",[e("li",[e("code",[t._v("'auto'")]),t._v(': generates "optimal" ticks based on scale size and time options')]),t._v(" "),e("li",[e("code",[t._v("'data'")]),t._v(": generates ticks from data (including labels from data "),e("code",[t._v("{x|y}")]),t._v(" objects)")]),t._v(" "),e("li",[e("code",[t._v("'labels'")]),t._v(": generates ticks from profile given "),e("code",[t._v("labels")]),t._v(" ONLY")])]),t._v(" "),e("h4",{attrs:{id:"parser"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#parser"}},[t._v("#")]),t._v(" Parser")]),t._v(" "),e("p",[t._v("If this property is defined as a string, it is interpreted as a custom format to be used by the date adapter to parse the date.")]),t._v(" "),e("p",[t._v("If this is a function, it must return a type that can be handled by your date adapter's "),e("code",[t._v("parse")]),t._v(" method.")]),t._v(" "),e("h2",{attrs:{id:"min-max-configuration"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#min-max-configuration"}},[t._v("#")]),t._v(" Min Max Configuration")]),t._v(" "),e("p",[t._v("For both the "),e("code",[t._v("min")]),t._v(" and "),e("code",[t._v("max")]),t._v(" properties, the value must be "),e("code",[t._v("string")]),t._v(" that is parsable by your date adapter or a number with the amount of milliseconds that have elapsed since UNIX epoch.\nIn the example below the x axis will start at 7 October 2021.")]),t._v(" "),e("div",{staticClass:"language-javascript extra-class"},[e("pre",{pre:!0,attrs:{class:"language-javascript"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" chart "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Chart")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ctx"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("type")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'line'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("data")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("datasets")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),e("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("data")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                "),e("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("x")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'2021-11-06 23:39:30'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                "),e("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("y")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("50")]),t._v("\n            "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                "),e("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("x")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'2021-11-07 01:00:28'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                "),e("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("y")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("60")]),t._v("\n            "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                "),e("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("x")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'2021-11-07 09:00:28'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                "),e("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("y")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("20")]),t._v("\n            "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("options")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("scales")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),e("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("x")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                "),e("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("min")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'2021-11-07 00:00:00'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("h2",{attrs:{id:"changing-the-scale-type-from-time-scale-to-logarithmic-linear-scale"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#changing-the-scale-type-from-time-scale-to-logarithmic-linear-scale"}},[t._v("#")]),t._v(" Changing the scale type from Time scale to Logarithmic/Linear scale.")]),t._v(" "),e("p",[t._v("When changing the scale type from Time scale to Logarithmic/Linear scale, you need to add "),e("code",[t._v("bounds: 'ticks'")]),t._v(" to the scale options. Changing the "),e("code",[t._v("bounds")]),t._v(" parameter is necessary because its default value is the "),e("code",[t._v("'data'")]),t._v(" for the Time scale.")]),t._v(" "),e("p",[t._v("Initial config:")]),t._v(" "),e("div",{staticClass:"language-javascript extra-class"},[e("pre",{pre:!0,attrs:{class:"language-javascript"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" chart "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Chart")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ctx"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("type")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'line'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("data")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" data"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("options")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("scales")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),e("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("x")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                "),e("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("type")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'time'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("p",[t._v("Scale update:")]),t._v(" "),e("div",{staticClass:"language-javascript extra-class"},[e("pre",{pre:!0,attrs:{class:"language-javascript"}},[e("code",[t._v("chart"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("options"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("scales"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("x "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("type")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'logarithmic'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("bounds")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'ticks'")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("h2",{attrs:{id:"internal-data-format"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#internal-data-format"}},[t._v("#")]),t._v(" Internal data format")]),t._v(" "),e("p",[t._v("Internally time scale uses milliseconds since epoch")])])}),[],!1,null,null,null);a.default=r.exports}}]);