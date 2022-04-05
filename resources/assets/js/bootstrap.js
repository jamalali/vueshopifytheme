// Babel 7 reccommends doing these direct polyfill imports here.
import "core-js/stable";
import "regenerator-runtime/runtime";
// Babel Polyfill was here, but replaced by the above imports.

// Changed lodash to only import the core build, as we only use it for array manipulation techniques.

// This isn't the best solution but its a start on using modern JS imports with Webpack & Vue.
import _ from 'lodash-es';
window._ = _;

import axios from 'axios';
window.axios = axios;

// Adding support for responsive/lazyloaded images for future proofing and improving theme performance.
// Jan 2020 - Jed V. <jed@vivolife.co.uk>
import 'lazysizes';
// import a plugin
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

// Testing removal of vmodal from required Vue.js components, will stage the removal incase its required again or breaks.
// Jan 2020 - Jed V. <jed@vivolife.co.uk>
//import vmodal from 'vue-js-modal';
