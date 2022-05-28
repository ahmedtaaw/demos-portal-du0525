import "./scss/app.scss";
import SlickInit from "./scripts/slick-init";
import DatePicker from "./scripts/datepicker-init";
var $ = require("jquery");
window.jQuery = $;
window.$ = $;
require("select2");
require('slick-carousel');
//datepicker
require('Litepicker');



SlickInit(); 
DatePicker(); 