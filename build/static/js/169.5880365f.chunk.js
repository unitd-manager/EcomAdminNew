(this["webpackJsonpmain-bt5"]=this["webpackJsonpmain-bt5"]||[]).push([[169],{1123:function(e,c,s){"use strict";s.r(c);var t=s(2),n=s(9),a=s(27),j=s(1),r=s.n(j),l=s(63),i=s(7),d=s(3);c.default=function(e){var c=e.editCostingSummaryModel,s=e.setEditCostingSummaryModel,b=e.costingsummary,o=Object(j.useState)(null),h=Object(a.a)(o,2),O=h[0],m=h[1],x=function(e){m(Object(n.a)(Object(n.a)({},O),{},Object(t.a)({},e.target.name,e.target.value)))};return r.a.useEffect((function(){m(b)}),[b]),Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)(l.N,{size:"lg",isOpen:c,children:[Object(d.jsxs)(l.Q,{children:["Edit Costing Summary",Object(d.jsx)(l.e,{color:"secondary",className:"shadow-none",onClick:function(){s(!1)},children:"X"})]}),Object(d.jsx)(l.O,{children:Object(d.jsx)(l.eb,{children:Object(d.jsx)(l.s,{md:"12",children:Object(d.jsxs)(l.i,{children:[Object(d.jsx)(l.j,{children:Object(d.jsx)(l.A,{children:Object(d.jsxs)(l.eb,{children:[Object(d.jsx)(l.s,{md:"4",children:Object(d.jsxs)(l.C,{children:[Object(d.jsx)(l.H,{children:"No. of Worker Used"}),Object(d.jsx)(l.E,{type:"number",onChange:x,defaultValue:b&&b.no_of_worker_used,name:"no_of_worker_used"})]})}),Object(d.jsx)(l.s,{md:"4",children:Object(d.jsxs)(l.C,{children:[Object(d.jsx)(l.H,{children:"No. of Days Worked"}),Object(d.jsx)(l.E,{type:"number",onChange:x,defaultValue:b&&b.no_of_days_worked,name:"no_of_days_worked"})]})}),Object(d.jsx)(l.s,{md:"4",children:Object(d.jsxs)(l.C,{children:[Object(d.jsx)(l.H,{children:"Labout Rates Per Day"}),Object(d.jsx)(l.E,{type:"number",onChange:x,defaultValue:b&&b.labour_rates_per_day,name:"labour_rates_per_day"})]})}),Object(d.jsx)(l.s,{md:"4",children:Object(d.jsxs)(l.C,{children:[Object(d.jsx)(l.H,{children:"Total Price (S$ W/o GST)"}),Object(d.jsx)(l.E,{type:"number",onChange:x,defaultValue:b&&b.invoiced_price,name:"invoiced_price"})]})}),Object(d.jsx)(l.s,{md:"4",children:Object(d.jsxs)(l.C,{children:[Object(d.jsx)(l.H,{children:"Profit Margin %"}),Object(d.jsx)(l.E,{type:"number",disabled:!0,onChange:x,defaultValue:b&&b.profit_percentage,name:"profit_percentage"})]})}),Object(d.jsx)(l.s,{md:"4",children:Object(d.jsxs)(l.C,{children:[Object(d.jsx)(l.H,{children:"Profit Margin"}),Object(d.jsx)(l.E,{type:"number",disabled:!0,name:"profit",onChange:x,defaultValue:b&&b.profit,tabindex:"-1"})]})})]})})}),Object(d.jsx)(l.j,{className:"bg-light",children:Object(d.jsx)(l.o,{tag:"h4",className:"mb-0"})}),Object(d.jsxs)(l.j,{children:[Object(d.jsxs)(l.eb,{children:[Object(d.jsx)(l.s,{md:"4",children:Object(d.jsxs)(l.C,{children:[Object(d.jsx)(l.H,{children:"Total Material"}),Object(d.jsx)(l.E,{type:"number",disabled:!0,onChange:x,defaultValue:b&&b.total_material_price,name:"total_material_price"})]})}),Object(d.jsx)(l.s,{md:"4",children:Object(d.jsxs)(l.C,{children:[Object(d.jsx)(l.H,{children:"Transport Charges "}),Object(d.jsx)(l.E,{type:"number",onChange:x,defaultValue:b&&b.transport_charges,name:"transport_charges"})]})}),Object(d.jsx)(l.s,{md:"4",children:Object(d.jsxs)(l.C,{children:[Object(d.jsx)(l.H,{children:"Total Labour Charges"}),Object(d.jsx)(l.E,{type:"number",disabled:!0,onChange:x,defaultValue:b&&b.total_labour_charges,name:"total_labour_charges"})]})})]}),Object(d.jsxs)(l.eb,{children:[Object(d.jsx)(l.s,{md:"4",children:Object(d.jsxs)(l.C,{children:[Object(d.jsx)(l.H,{children:"Salesman Commission "}),Object(d.jsx)(l.E,{type:"number",onChange:x,defaultValue:b&&b.salesman_commission,name:"salesman_commission"})]})}),Object(d.jsx)(l.s,{md:"4",children:Object(d.jsxs)(l.C,{children:[Object(d.jsx)(l.H,{children:"Finance Charges "}),Object(d.jsx)(l.E,{type:"number",onChange:x,defaultValue:b&&b.finance_charges,name:"finance_charges"})]})}),Object(d.jsx)(l.s,{md:"4",children:Object(d.jsxs)(l.C,{children:[Object(d.jsx)(l.H,{children:"Office Overheads "}),Object(d.jsx)(l.E,{type:"number",onChange:x,defaultValue:b&&b.office_overheads,name:"office_overheads"})]})})]}),Object(d.jsxs)(l.eb,{children:[Object(d.jsx)(l.s,{md:"4",children:Object(d.jsxs)(l.C,{children:[Object(d.jsx)(l.H,{children:"Other Charges "}),Object(d.jsx)(l.E,{type:"number",onChange:x,defaultValue:b&&b.other_charges,name:"other_charges"})]})}),Object(d.jsx)(l.s,{md:"4",children:Object(d.jsxs)(l.C,{children:[Object(d.jsx)(l.H,{children:"TOTAL COST"}),Object(d.jsx)(l.E,{type:"number",disabled:!0,onChange:x,value:b&&b.total_cost,name:"total_cost"})]})})]})]}),Object(d.jsx)(l.j,{children:Object(d.jsx)(l.o,{className:"mb-0 bg-light"})})]})})})}),Object(d.jsxs)(l.P,{children:[Object(d.jsx)(l.e,{color:"primary",className:"shadow-none",onClick:function(){i.a.post("/tender/edit-TabCostingSummaryForm",O).then((function(e){console.log(e),s(!1),window.location.reload()}))},children:" Submit "}),Object(d.jsx)(l.e,{color:"secondary",className:"shadow-none",onClick:function(){s(!1)},children:"Cancel"})]})]})})}}}]);
//# sourceMappingURL=169.5880365f.chunk.js.map