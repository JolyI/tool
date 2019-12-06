##可口百宝箱
>npm i

>需要在node_modules/page-skeleton-webpack-plugin/ 里面的skeletonPlugin.js
``
SkeletonPlugin.prototype.createServer = function() {
	// eslint-disable-line func-names
		const server = (this.server = new Server(this.options)); // eslint-disable-line no-multi-assign
		server.listen().catch((err) => server.log.warn(err));
};
换成
SkeletonPlugin.prototype.createServer = function() {
	// eslint-disable-line func-names
	if (!this.server) { //这是更改点
		const server = (this.server = new Server(this.options)); // eslint-disable-line no-multi-assign
		server.listen().catch((err) => server.log.warn(err));
	}
};
``
>再才能跑起来哦