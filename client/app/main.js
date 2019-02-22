"use strict";

require("es6-promise/auto");

import Vue from "vue";

import axios from "axios";
axios.defaults.headers.post["Content-Type"] = "application/json";

import Filters from "./core/filters";
import VueI18Next from "./core/i18next.js";
import VueFormGenerator from "vue-form-generator";
import VueWebsocket from "vue-websocket";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
// import InfiniteLoading from "vue-infinite-loading";


import lang from "element-ui/lib/locale/lang/en";
import locale from "element-ui/lib/locale";
locale.use(lang);

import store from "./core/store";
import App from "./core/App";

Vue.use(Filters);

Vue.use(VueFormGenerator);
Vue.use(VueWebsocket);
Vue.use(ElementUI);
// Vue.use(InfiniteLoading);

//Vue.http.headers.common['X-CSRF-TOKEN'] = $('input[name="csrf"]').val();

// Register i18next localization module. We need to
// wait it before start the application!
Vue.use(VueI18Next, (i18next) => {
	let router = require("./core/router").default; // Load only after i18next initialized

	new Vue({
		el: "#app",
		components: {
			App
		},
		router,
		store,
		render: h => h("app")
	});
});
