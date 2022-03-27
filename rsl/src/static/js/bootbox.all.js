!function(t,e){"use strict";"function"==typeof define&&define.amd?define(["jquery"],e):"object"==typeof exports?module.exports=e(require("jquery")):t.bootbox=e(t.jQuery)}(this,function t(e,o){"use strict";var a,r,n,i;Object.keys||(Object.keys=(a=Object.prototype.hasOwnProperty,r=!{toString:null}.propertyIsEnumerable("toString"),i=(n=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"]).length,function(t){if("function"!=typeof t&&("object"!=typeof t||null===t))throw new TypeError("Object.keys called on non-object");var e,o,l=[];for(e in t)a.call(t,e)&&l.push(e);if(r)for(o=0;o<i;o++)a.call(t,n[o])&&l.push(n[o]);return l}));var l={};l.VERSION="5.5.2";var s={en:{OK:"OK",CANCEL:"Cancel",CONFIRM:"OK"}},c={dialog:'<div class="bootbox modal" tabindex="-1" role="dialog" aria-hidden="true"><div class="modal-dialog"><div class="modal-content"><div class="modal-body"><div class="bootbox-body"></div></div></div></div></div>',header:'<div class="modal-header"><h5 class="modal-title"></h5></div>',footer:'<div class="modal-footer"></div>',closeButton:'<button type="button" class="bootbox-close-button btn-close" aria-hidden="true"></button>',form:'<form class="bootbox-form"></form>',button:'<button type="button" class="btn"></button>',option:"<option></option>",promptMessage:'<div class="bootbox-prompt-message"></div>',inputs:{text:'<input class="bootbox-input bootbox-input-text form-control" autocomplete="off" type="text" />',textarea:'<textarea class="bootbox-input bootbox-input-textarea form-control"></textarea>',email:'<input class="bootbox-input bootbox-input-email form-control" autocomplete="off" type="email" />',select:'<select class="bootbox-input bootbox-input-select form-control"></select>',checkbox:'<div class="form-check checkbox"><label class="form-check-label"><input class="form-check-input bootbox-input bootbox-input-checkbox" type="checkbox" /></label></div>',radio:'<div class="form-check radio"><label class="form-check-label"><input class="form-check-input bootbox-input bootbox-input-radio" type="radio" name="bootbox-radio" /></label></div>',date:'<input class="bootbox-input bootbox-input-date form-control" autocomplete="off" type="date" />',time:'<input class="bootbox-input bootbox-input-time form-control" autocomplete="off" type="time" />',number:'<input class="bootbox-input bootbox-input-number form-control" autocomplete="off" type="number" />',password:'<input class="bootbox-input bootbox-input-password form-control" autocomplete="off" type="password" />',range:'<input class="bootbox-input bootbox-input-range form-control-range" autocomplete="off" type="range" />'}},p={locale:"en",backdrop:"static",animate:!0,className:null,closeButton:!0,show:!0,container:"body",value:"",inputType:"text",swapButtonOrder:!1,centerVertical:!1,multiple:!1,scrollable:!1,reusable:!1};function u(t,o,a){return e.extend(!0,{},t,function(t,e){var o=t.length,a={};if(o<1||o>2)throw new Error("Invalid argument length");return 2===o||"string"==typeof t[0]?(a[e[0]]=t[0],a[e[1]]=t[1]):a=t[0],a}(o,a))}function d(t,e,a,r){var n;r&&r[0]&&(n=r[0].locale||p.locale,(r[0].swapButtonOrder||p.swapButtonOrder)&&(e=e.reverse()));var i,l,s,c={className:"bootbox-"+t,buttons:b(e,n)};return i=u(c,r,a),s={},h(l=e,function(t,e){s[e]=!0}),h(i.buttons,function(t){if(s[t]===o)throw new Error('button key "'+t+'" is not allowed (options are '+l.join(" ")+")")}),i}function b(t,e){for(var o={},a=0,r=t.length;a<r;a++){var n=t[a],i=n.toLowerCase(),l=n.toUpperCase();o[i]={label:f(l,e)}}return o}function f(t,e){var o=s[e];return o?o[t]:s.en[t]}function m(t){return Object.keys(t).length}function h(t,o){var a=0;e.each(t,function(t,e){o(t,e,a++)})}function w(t){t.data.dialog.find(".bootbox-accept").first().trigger("focus")}function g(t){t.target===t.data.dialog[0]&&t.data.dialog.remove()}function v(t){t.target===t.data.dialog[0]&&(t.data.dialog.off("escape.close.bb"),t.data.dialog.off("click"))}function y(t,o,a){t.stopPropagation(),t.preventDefault(),e.isFunction(a)&&!1===a.call(o,t)||o.modal("hide")}function x(t){return/([01][0-9]|2[0-3]):[0-5][0-9]?:[0-5][0-9]/.test(t)}function k(t){return/(\d{4})-(\d{2})-(\d{2})/.test(t)}return l.locales=function(t){return t?s[t]:s},l.addLocale=function(t,o){return e.each(["OK","CANCEL","CONFIRM"],function(t,e){if(!o[e])throw new Error('Please supply a translation for "'+e+'"')}),s[t]={OK:o.OK,CANCEL:o.CANCEL,CONFIRM:o.CONFIRM},l},l.removeLocale=function(t){if("en"===t)throw new Error('"en" is used as the default and fallback locale and cannot be removed.');return delete s[t],l},l.setLocale=function(t){return l.setDefaults("locale",t)},l.setDefaults=function(){var t={};return 2===arguments.length?t[arguments[0]]=arguments[1]:t=arguments[0],e.extend(p,t),l},l.hideAll=function(){return e(".bootbox").modal("hide"),l},l.init=function(o){return t(o||e)},l.dialog=function(t){if(e.fn.modal===o)throw new Error('"$.fn.modal" is not defined; please double check you have included the Bootstrap JavaScript library. See https://getbootstrap.com/docs/4.4/getting-started/javascript/ for more details.');if(t=function(t){var o,a;if("object"!=typeof t)throw new Error("Please supply an object of options");if(!t.message)throw new Error('"message" option must not be null or an empty string.');(t=e.extend({},p,t)).backdrop?t.backdrop="string"!=typeof t.backdrop||"static"!==t.backdrop.toLowerCase()||"static":t.backdrop=!1!==t.backdrop&&0!==t.backdrop&&"static";t.buttons||(t.buttons={});return o=t.buttons,a=m(o),h(o,function(r,n,i){if(e.isFunction(n)&&(n=o[r]={callback:n}),"object"!==e.type(n))throw new Error('button with key "'+r+'" must be an object');if(n.label||(n.label=r),!n.className){var l=!1;l=t.swapButtonOrder?0===i:i===a-1,n.className=a<=2&&l?"btn-primary":"btn-secondary btn-default"}}),t}(t),e.fn.modal.Constructor.VERSION){t.fullBootstrapVersion=e.fn.modal.Constructor.VERSION;var a=t.fullBootstrapVersion.indexOf(".");t.bootstrap=t.fullBootstrapVersion.substring(0,a)}else t.bootstrap="2",t.fullBootstrapVersion="2.3.2",console.warn("Bootbox will *mostly* work with Bootstrap 2, but we do not officially support it. Please upgrade, if possible.");var r=e(c.dialog),n=r.find(".modal-dialog"),i=r.find(".modal-body"),l=e(c.header),s=e(c.footer),u=t.buttons,d={onEscape:t.onEscape};if(i.find(".bootbox-body").html(t.message),m(t.buttons)>0&&(h(u,function(t,o){var a=e(c.button);switch(a.data("bb-handler",t),a.addClass(o.className),t){case"ok":case"confirm":a.addClass("bootbox-accept");break;case"cancel":a.addClass("bootbox-cancel")}a.html(o.label),s.append(a),d[t]=o.callback}),i.after(s)),!0===t.animate&&r.addClass("fade"),t.className&&r.addClass(t.className),t.size)switch(t.fullBootstrapVersion.substring(0,3)<"3.1"&&console.warn('"size" requires Bootstrap 3.1.0 or higher. You appear to be using '+t.fullBootstrapVersion+". Please upgrade to use this option."),t.size){case"small":case"sm":n.addClass("modal-sm");break;case"large":case"lg":n.addClass("modal-lg");break;case"extra-large":case"xl":n.addClass("modal-xl"),t.fullBootstrapVersion.substring(0,3)<"4.2"&&console.warn('Using size "xl"/"extra-large" requires Bootstrap 4.2.0 or higher. You appear to be using '+t.fullBootstrapVersion+". Please upgrade to use this option.")}if(t.scrollable&&(n.addClass("modal-dialog-scrollable"),t.fullBootstrapVersion.substring(0,3)<"4.3"&&console.warn('Using "scrollable" requires Bootstrap 4.3.0 or higher. You appear to be using '+t.fullBootstrapVersion+". Please upgrade to use this option.")),t.title&&(i.before(l),r.find(".modal-title").html(t.title)),t.closeButton){var b=e(c.closeButton);t.title?t.bootstrap>3?r.find(".modal-header").append(b):r.find(".modal-header").prepend(b):b.prependTo(i)}if(t.centerVertical&&(n.addClass("modal-dialog-centered"),t.fullBootstrapVersion<"4.0.0"&&console.warn('"centerVertical" requires Bootstrap 4.0.0-beta.3 or higher. You appear to be using '+t.fullBootstrapVersion+". Please upgrade to use this option.")),t.reusable||r.one("hide.bs.modal",{dialog:r},v),t.onHide){if(!e.isFunction(t.onHide))throw new Error('Argument supplied to "onHide" must be a function');r.on("hide.bs.modal",t.onHide)}if(t.reusable||r.one("hidden.bs.modal",{dialog:r},g),t.onHidden){if(!e.isFunction(t.onHidden))throw new Error('Argument supplied to "onHidden" must be a function');r.on("hidden.bs.modal",t.onHidden)}if(t.onShow){if(!e.isFunction(t.onShow))throw new Error('Argument supplied to "onShow" must be a function');r.on("show.bs.modal",t.onShow)}if(r.one("shown.bs.modal",{dialog:r},w),t.onShown){if(!e.isFunction(t.onShown))throw new Error('Argument supplied to "onShown" must be a function');r.on("shown.bs.modal",t.onShown)}return!0===t.backdrop&&r.on("click.dismiss.bs.modal",function(t){r.children(".modal-backdrop").length&&(t.currentTarget=r.children(".modal-backdrop").get(0)),t.target===t.currentTarget&&r.trigger("escape.close.bb")}),r.on("escape.close.bb",function(t){d.onEscape&&y(t,r,d.onEscape)}),r.on("click",".modal-footer button:not(.disabled)",function(t){var a=e(this).data("bb-handler");a!==o&&y(t,r,d[a])}),r.on("click",".bootbox-close-button",function(t){y(t,r,d.onEscape)}),r.on("keyup",function(t){27===t.which&&r.trigger("escape.close.bb")}),e(t.container).append(r),r.modal({backdrop:t.backdrop,keyboard:!1,show:!1}),t.show&&r.modal("show"),r},l.alert=function(){var t;if((t=d("alert",["ok"],["message","callback"],arguments)).callback&&!e.isFunction(t.callback))throw new Error('alert requires the "callback" property to be a function when provided');return t.buttons.ok.callback=t.onEscape=function(){return!e.isFunction(t.callback)||t.callback.call(this)},l.dialog(t)},l.confirm=function(){var t;if(t=d("confirm",["cancel","confirm"],["message","callback"],arguments),!e.isFunction(t.callback))throw new Error("confirm requires a callback");return t.buttons.cancel.callback=t.onEscape=function(){return t.callback.call(this,!1)},t.buttons.confirm.callback=function(){return t.callback.call(this,!0)},l.dialog(t)},l.prompt=function(){var t,a,r,n,i,s;if(r=e(c.form),(t=d("prompt",["cancel","confirm"],["title","callback"],arguments)).value||(t.value=p.value),t.inputType||(t.inputType=p.inputType),i=t.show===o?p.show:t.show,t.show=!1,t.buttons.cancel.callback=t.onEscape=function(){return t.callback.call(this,null)},t.buttons.confirm.callback=function(){var o;if("checkbox"===t.inputType)o=n.find("input:checked").map(function(){return e(this).val()}).get();else if("radio"===t.inputType)o=n.find("input:checked").val();else{if(n[0].checkValidity&&!n[0].checkValidity())return!1;o="select"===t.inputType&&!0===t.multiple?n.find("option:selected").map(function(){return e(this).val()}).get():n.val()}return t.callback.call(this,o)},!t.title)throw new Error("prompt requires a title");if(!e.isFunction(t.callback))throw new Error("prompt requires a callback");if(!c.inputs[t.inputType])throw new Error("Invalid prompt type");switch(n=e(c.inputs[t.inputType]),t.inputType){case"text":case"textarea":case"email":case"password":n.val(t.value),t.placeholder&&n.attr("placeholder",t.placeholder),t.pattern&&n.attr("pattern",t.pattern),t.maxlength&&n.attr("maxlength",t.maxlength),t.required&&n.prop({required:!0}),t.rows&&!isNaN(parseInt(t.rows))&&"textarea"===t.inputType&&n.attr({rows:t.rows});break;case"date":case"time":case"number":case"range":if(n.val(t.value),t.placeholder&&n.attr("placeholder",t.placeholder),t.pattern&&n.attr("pattern",t.pattern),t.required&&n.prop({required:!0}),"date"!==t.inputType&&t.step){if(!("any"===t.step||!isNaN(t.step)&&parseFloat(t.step)>0))throw new Error('"step" must be a valid positive number or the value "any". See https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attr-step for more information.');n.attr("step",t.step)}(function(t,e,a){var r=!1,n=!0,i=!0;if("date"===t)e===o||(n=k(e))?a===o||(i=k(a))||console.warn('Browsers which natively support the "date" input type expect date values to be of the form "YYYY-MM-DD" (see ISO-8601 https://www.iso.org/iso-8601-date-and-time-format.html). Bootbox does not enforce this rule, but your max value may not be enforced by this browser.'):console.warn('Browsers which natively support the "date" input type expect date values to be of the form "YYYY-MM-DD" (see ISO-8601 https://www.iso.org/iso-8601-date-and-time-format.html). Bootbox does not enforce this rule, but your min value may not be enforced by this browser.');else if("time"===t){if(e!==o&&!(n=x(e)))throw new Error('"min" is not a valid time. See https://www.w3.org/TR/2012/WD-html-markup-20120315/datatypes.html#form.data.time for more information.');if(a!==o&&!(i=x(a)))throw new Error('"max" is not a valid time. See https://www.w3.org/TR/2012/WD-html-markup-20120315/datatypes.html#form.data.time for more information.')}else{if(e!==o&&isNaN(e))throw n=!1,new Error('"min" must be a valid number. See https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attr-min for more information.');if(a!==o&&isNaN(a))throw i=!1,new Error('"max" must be a valid number. See https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attr-max for more information.')}if(n&&i){if(a<=e)throw new Error('"max" must be greater than "min". See https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attr-max for more information.');r=!0}return r})(t.inputType,t.min,t.max)&&(t.min!==o&&n.attr("min",t.min),t.max!==o&&n.attr("max",t.max));break;case"select":var u={};if(s=t.inputOptions||[],!e.isArray(s))throw new Error("Please pass an array of input options");if(!s.length)throw new Error('prompt with "inputType" set to "select" requires at least one option');t.placeholder&&n.attr("placeholder",t.placeholder),t.required&&n.prop({required:!0}),t.multiple&&n.prop({multiple:!0}),h(s,function(t,a){var r=n;if(a.value===o||a.text===o)throw new Error('each option needs a "value" property and a "text" property');a.group&&(u[a.group]||(u[a.group]=e("<optgroup />").attr("label",a.group)),r=u[a.group]);var i=e(c.option);i.attr("value",a.value).text(a.text),r.append(i)}),h(u,function(t,e){n.append(e)}),n.val(t.value);break;case"checkbox":var b=e.isArray(t.value)?t.value:[t.value];if(!(s=t.inputOptions||[]).length)throw new Error('prompt with "inputType" set to "checkbox" requires at least one option');n=e('<div class="bootbox-checkbox-list"></div>'),h(s,function(a,r){if(r.value===o||r.text===o)throw new Error('each option needs a "value" property and a "text" property');var i=e(c.inputs[t.inputType]);i.find("input").attr("value",r.value),i.find("label").append("\n"+r.text),h(b,function(t,e){e===r.value&&i.find("input").prop("checked",!0)}),n.append(i)});break;case"radio":if(t.value!==o&&e.isArray(t.value))throw new Error('prompt with "inputType" set to "radio" requires a single, non-array value for "value"');if(!(s=t.inputOptions||[]).length)throw new Error('prompt with "inputType" set to "radio" requires at least one option');n=e('<div class="bootbox-radiobutton-list"></div>');var f=!0;h(s,function(a,r){if(r.value===o||r.text===o)throw new Error('each option needs a "value" property and a "text" property');var i=e(c.inputs[t.inputType]);i.find("input").attr("value",r.value),i.find("label").append("\n"+r.text),t.value!==o&&r.value===t.value&&(i.find("input").prop("checked",!0),f=!1),n.append(i)}),f&&n.find('input[type="radio"]').first().prop("checked",!0)}if(r.append(n),r.on("submit",function(t){t.preventDefault(),t.stopPropagation(),a.find(".bootbox-accept").trigger("click")}),""!==e.trim(t.message)){var m=e(c.promptMessage).html(t.message);r.prepend(m),t.message=r}else t.message=r;return(a=l.dialog(t)).off("shown.bs.modal",w),a.on("shown.bs.modal",function(){n.focus()}),!0===i&&a.modal("show"),a},l});