parcelRequire = (function(e, r, t, n) {
	var i,
		o = 'function' == typeof parcelRequire && parcelRequire,
		u = 'function' == typeof require && require;
	function f(t, n) {
		if (!r[t]) {
			if (!e[t]) {
				var i = 'function' == typeof parcelRequire && parcelRequire;
				if (!n && i) return i(t, !0);
				if (o) return o(t, !0);
				if (u && 'string' == typeof t) return u(t);
				var c = new Error("Cannot find module '" + t + "'");
				throw ((c.code = 'MODULE_NOT_FOUND'), c);
			}
			(p.resolve = function(r) {
				return e[t][1][r] || r;
			}),
				(p.cache = {});
			var l = (r[t] = new f.Module(t));
			e[t][0].call(l.exports, p, l, l.exports, this);
		}
		return r[t].exports;
		function p(e) {
			return f(p.resolve(e));
		}
	}
	(f.isParcelRequire = !0),
		(f.Module = function(e) {
			(this.id = e), (this.bundle = f), (this.exports = {});
		}),
		(f.modules = e),
		(f.cache = r),
		(f.parent = o),
		(f.register = function(r, t) {
			e[r] = [
				function(e, r) {
					r.exports = t;
				},
				{},
			];
		});
	for (var c = 0; c < t.length; c++)
		try {
			f(t[c]);
		} catch (e) {
			i || (i = e);
		}
	if (t.length) {
		var l = f(t[t.length - 1]);
		'object' == typeof exports && 'undefined' != typeof module
			? (module.exports = l)
			: 'function' == typeof define && define.amd
			? define(function() {
					return l;
			  })
			: n && (this[n] = l);
	}
	if (((parcelRequire = f), i)) throw i;
	return f;
})(
	{
		'YOw+': [
			function(require, module, exports) {
				'use strict';
				var r = Object.getOwnPropertySymbols,
					t = Object.prototype.hasOwnProperty,
					e = Object.prototype.propertyIsEnumerable;
				function n(r) {
					if (null == r)
						throw new TypeError(
							'Object.assign cannot be called with null or undefined'
						);
					return Object(r);
				}
				function o() {
					try {
						if (!Object.assign) return !1;
						var r = new String('abc');
						if (
							((r[5] = 'de'),
							'5' === Object.getOwnPropertyNames(r)[0])
						)
							return !1;
						for (var t = {}, e = 0; e < 10; e++)
							t['_' + String.fromCharCode(e)] = e;
						if (
							'0123456789' !==
							Object.getOwnPropertyNames(t)
								.map(function(r) {
									return t[r];
								})
								.join('')
						)
							return !1;
						var n = {};
						return (
							'abcdefghijklmnopqrst'
								.split('')
								.forEach(function(r) {
									n[r] = r;
								}),
							'abcdefghijklmnopqrst' ===
								Object.keys(Object.assign({}, n)).join('')
						);
					} catch (o) {
						return !1;
					}
				}
				module.exports = o()
					? Object.assign
					: function(o, c) {
							for (
								var a, i, s = n(o), f = 1;
								f < arguments.length;
								f++
							) {
								for (var u in (a = Object(arguments[f])))
									t.call(a, u) && (s[u] = a[u]);
								if (r) {
									i = r(a);
									for (var b = 0; b < i.length; b++)
										e.call(a, i[b]) && (s[i[b]] = a[i[b]]);
								}
							}
							return s;
					  };
			},
			{},
		],
		pyFg: [
			function(require, module, exports) {
				'use strict';
				var e = require('object-assign'),
					t = 'function' == typeof Symbol && Symbol.for,
					r = t ? Symbol.for('react.element') : 60103,
					n = t ? Symbol.for('react.portal') : 60106,
					o = t ? Symbol.for('react.fragment') : 60107,
					u = t ? Symbol.for('react.strict_mode') : 60108,
					l = t ? Symbol.for('react.profiler') : 60114,
					f = t ? Symbol.for('react.provider') : 60109,
					c = t ? Symbol.for('react.context') : 60110,
					i = t ? Symbol.for('react.concurrent_mode') : 60111,
					a = t ? Symbol.for('react.forward_ref') : 60112,
					s = t ? Symbol.for('react.suspense') : 60113,
					p = t ? Symbol.for('react.memo') : 60115,
					y = t ? Symbol.for('react.lazy') : 60116,
					d = 'function' == typeof Symbol && Symbol.iterator;
				function v(e, t, r, n, o, u, l, f) {
					if (!e) {
						if (((e = void 0), void 0 === t))
							e = Error(
								'Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.'
							);
						else {
							var c = [r, n, o, u, l, f],
								i = 0;
							(e = Error(
								t.replace(/%s/g, function() {
									return c[i++];
								})
							)).name = 'Invariant Violation';
						}
						throw ((e.framesToPop = 1), e);
					}
				}
				function m(e) {
					for (
						var t = arguments.length - 1,
							r =
								'https://reactjs.org/docs/error-decoder.html?invariant=' +
								e,
							n = 0;
						n < t;
						n++
					)
						r += '&args[]=' + encodeURIComponent(arguments[n + 1]);
					v(
						!1,
						'Minified React error #' +
							e +
							'; visit %s for the full message or use the non-minified dev environment for full errors and additional helpful warnings. ',
						r
					);
				}
				var h = {
						isMounted: function() {
							return !1;
						},
						enqueueForceUpdate: function() {},
						enqueueReplaceState: function() {},
						enqueueSetState: function() {},
					},
					b = {};
				function _(e, t, r) {
					(this.props = e),
						(this.context = t),
						(this.refs = b),
						(this.updater = r || h);
				}
				function S() {}
				function k(e, t, r) {
					(this.props = e),
						(this.context = t),
						(this.refs = b),
						(this.updater = r || h);
				}
				(_.prototype.isReactComponent = {}),
					(_.prototype.setState = function(e, t) {
						'object' != typeof e &&
							'function' != typeof e &&
							null != e &&
							m('85'),
							this.updater.enqueueSetState(
								this,
								e,
								t,
								'setState'
							);
					}),
					(_.prototype.forceUpdate = function(e) {
						this.updater.enqueueForceUpdate(this, e, 'forceUpdate');
					}),
					(S.prototype = _.prototype);
				var g = (k.prototype = new S());
				(g.constructor = k),
					e(g, _.prototype),
					(g.isPureReactComponent = !0);
				var $ = {current: null},
					x = {current: null},
					C = Object.prototype.hasOwnProperty,
					w = {key: !0, ref: !0, __self: !0, __source: !0};
				function P(e, t, n) {
					var o = void 0,
						u = {},
						l = null,
						f = null;
					if (null != t)
						for (o in (void 0 !== t.ref && (f = t.ref),
						void 0 !== t.key && (l = '' + t.key),
						t))
							C.call(t, o) &&
								!w.hasOwnProperty(o) &&
								(u[o] = t[o]);
					var c = arguments.length - 2;
					if (1 === c) u.children = n;
					else if (1 < c) {
						for (var i = Array(c), a = 0; a < c; a++)
							i[a] = arguments[a + 2];
						u.children = i;
					}
					if (e && e.defaultProps)
						for (o in (c = e.defaultProps))
							void 0 === u[o] && (u[o] = c[o]);
					return {
						$$typeof: r,
						type: e,
						key: l,
						ref: f,
						props: u,
						_owner: x.current,
					};
				}
				function R(e, t) {
					return {
						$$typeof: r,
						type: e.type,
						key: t,
						ref: e.ref,
						props: e.props,
						_owner: e._owner,
					};
				}
				function E(e) {
					return (
						'object' == typeof e && null !== e && e.$$typeof === r
					);
				}
				function j(e) {
					var t = {'=': '=0', ':': '=2'};
					return (
						'$' +
						('' + e).replace(/[=:]/g, function(e) {
							return t[e];
						})
					);
				}
				var O = /\/+/g,
					A = [];
				function I(e, t, r, n) {
					if (A.length) {
						var o = A.pop();
						return (
							(o.result = e),
							(o.keyPrefix = t),
							(o.func = r),
							(o.context = n),
							(o.count = 0),
							o
						);
					}
					return {
						result: e,
						keyPrefix: t,
						func: r,
						context: n,
						count: 0,
					};
				}
				function M(e) {
					(e.result = null),
						(e.keyPrefix = null),
						(e.func = null),
						(e.context = null),
						(e.count = 0),
						10 > A.length && A.push(e);
				}
				function U(e, t, o, u) {
					var l = typeof e;
					('undefined' !== l && 'boolean' !== l) || (e = null);
					var f = !1;
					if (null === e) f = !0;
					else
						switch (l) {
							case 'string':
							case 'number':
								f = !0;
								break;
							case 'object':
								switch (e.$$typeof) {
									case r:
									case n:
										f = !0;
								}
						}
					if (f) return o(u, e, '' === t ? '.' + F(e, 0) : t), 1;
					if (
						((f = 0),
						(t = '' === t ? '.' : t + ':'),
						Array.isArray(e))
					)
						for (var c = 0; c < e.length; c++) {
							var i = t + F((l = e[c]), c);
							f += U(l, i, o, u);
						}
					else if (
						(null === e || 'object' != typeof e
							? (i = null)
							: (i =
									'function' ==
									typeof (i = (d && e[d]) || e['@@iterator'])
										? i
										: null),
						'function' == typeof i)
					)
						for (e = i.call(e), c = 0; !(l = e.next()).done; )
							f += U((l = l.value), (i = t + F(l, c++)), o, u);
					else
						'object' === l &&
							m(
								'31',
								'[object Object]' === (o = '' + e)
									? 'object with keys {' +
											Object.keys(e).join(', ') +
											'}'
									: o,
								''
							);
					return f;
				}
				function q(e, t, r) {
					return null == e ? 0 : U(e, '', t, r);
				}
				function F(e, t) {
					return 'object' == typeof e && null !== e && null != e.key
						? j(e.key)
						: t.toString(36);
				}
				function L(e, t) {
					e.func.call(e.context, t, e.count++);
				}
				function V(e, t, r) {
					var n = e.result,
						o = e.keyPrefix;
					(e = e.func.call(e.context, t, e.count++)),
						Array.isArray(e)
							? D(e, n, r, function(e) {
									return e;
							  })
							: null != e &&
							  (E(e) &&
									(e = R(
										e,
										o +
											(!e.key || (t && t.key === e.key)
												? ''
												: ('' + e.key).replace(
														O,
														'$&/'
												  ) + '/') +
											r
									)),
							  n.push(e));
				}
				function D(e, t, r, n, o) {
					var u = '';
					null != r && (u = ('' + r).replace(O, '$&/') + '/'),
						q(e, V, (t = I(t, u, n, o))),
						M(t);
				}
				function T() {
					var e = $.current;
					return null === e && m('307'), e;
				}
				var N = {
						Children: {
							map: function(e, t, r) {
								if (null == e) return e;
								var n = [];
								return D(e, n, null, t, r), n;
							},
							forEach: function(e, t, r) {
								if (null == e) return e;
								q(e, L, (t = I(null, null, t, r))), M(t);
							},
							count: function(e) {
								return q(
									e,
									function() {
										return null;
									},
									null
								);
							},
							toArray: function(e) {
								var t = [];
								return (
									D(e, t, null, function(e) {
										return e;
									}),
									t
								);
							},
							only: function(e) {
								return E(e) || m('143'), e;
							},
						},
						createRef: function() {
							return {current: null};
						},
						Component: _,
						PureComponent: k,
						createContext: function(e, t) {
							return (
								void 0 === t && (t = null),
								((e = {
									$$typeof: c,
									_calculateChangedBits: t,
									_currentValue: e,
									_currentValue2: e,
									_threadCount: 0,
									Provider: null,
									Consumer: null,
								}).Provider = {$$typeof: f, _context: e}),
								(e.Consumer = e)
							);
						},
						forwardRef: function(e) {
							return {$$typeof: a, render: e};
						},
						lazy: function(e) {
							return {
								$$typeof: y,
								_ctor: e,
								_status: -1,
								_result: null,
							};
						},
						memo: function(e, t) {
							return {
								$$typeof: p,
								type: e,
								compare: void 0 === t ? null : t,
							};
						},
						useCallback: function(e, t) {
							return T().useCallback(e, t);
						},
						useContext: function(e, t) {
							return T().useContext(e, t);
						},
						useEffect: function(e, t) {
							return T().useEffect(e, t);
						},
						useImperativeHandle: function(e, t, r) {
							return T().useImperativeHandle(e, t, r);
						},
						useDebugValue: function() {},
						useLayoutEffect: function(e, t) {
							return T().useLayoutEffect(e, t);
						},
						useMemo: function(e, t) {
							return T().useMemo(e, t);
						},
						useReducer: function(e, t, r) {
							return T().useReducer(e, t, r);
						},
						useRef: function(e) {
							return T().useRef(e);
						},
						useState: function(e) {
							return T().useState(e);
						},
						Fragment: o,
						StrictMode: u,
						Suspense: s,
						createElement: P,
						cloneElement: function(t, n, o) {
							null == t && m('267', t);
							var u = void 0,
								l = e({}, t.props),
								f = t.key,
								c = t.ref,
								i = t._owner;
							if (null != n) {
								void 0 !== n.ref &&
									((c = n.ref), (i = x.current)),
									void 0 !== n.key && (f = '' + n.key);
								var a = void 0;
								for (u in (t.type &&
									t.type.defaultProps &&
									(a = t.type.defaultProps),
								n))
									C.call(n, u) &&
										!w.hasOwnProperty(u) &&
										(l[u] =
											void 0 === n[u] && void 0 !== a
												? a[u]
												: n[u]);
							}
							if (1 === (u = arguments.length - 2))
								l.children = o;
							else if (1 < u) {
								a = Array(u);
								for (var s = 0; s < u; s++)
									a[s] = arguments[s + 2];
								l.children = a;
							}
							return {
								$$typeof: r,
								type: t.type,
								key: f,
								ref: c,
								props: l,
								_owner: i,
							};
						},
						createFactory: function(e) {
							var t = P.bind(null, e);
							return (t.type = e), t;
						},
						isValidElement: E,
						version: '16.8.4',
						unstable_ConcurrentMode: i,
						unstable_Profiler: l,
						__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: {
							ReactCurrentDispatcher: $,
							ReactCurrentOwner: x,
							assign: e,
						},
					},
					z = {default: N},
					B = (z && N) || z;
				module.exports = B.default || B;
			},
			{'object-assign': 'YOw+'},
		],
		HdMw: [
			function(require, module, exports) {
				'use strict';
				module.exports = require('./cjs/react.production.min.js');
			},
			{'./cjs/react.production.min.js': 'pyFg'},
		],
		wMdc: [
			function(require, module, exports) {
				var global = arguments[3];
				var t = arguments[3],
					n = 'Expected a function',
					e = NaN,
					i = '[object Symbol]',
					r = /^\s+|\s+$/g,
					o = /^[-+]0x[0-9a-f]+$/i,
					u = /^0b[01]+$/i,
					f = /^0o[0-7]+$/i,
					a = parseInt,
					c = 'object' == typeof t && t && t.Object === Object && t,
					l =
						'object' == typeof self &&
						self &&
						self.Object === Object &&
						self,
					s = c || l || Function('return this')(),
					v = Object.prototype,
					p = v.toString,
					y = Math.max,
					d = Math.min,
					m = function() {
						return s.Date.now();
					};
				function b(t, e, i) {
					var r,
						o,
						u,
						f,
						a,
						c,
						l = 0,
						s = !1,
						v = !1,
						p = !0;
					if ('function' != typeof t) throw new TypeError(n);
					function b(n) {
						var e = r,
							i = o;
						return (r = o = void 0), (l = n), (f = t.apply(i, e));
					}
					function g(t) {
						var n = t - c;
						return (
							void 0 === c || n >= e || n < 0 || (v && t - l >= u)
						);
					}
					function h() {
						var t = m();
						if (g(t)) return x(t);
						a = setTimeout(
							h,
							(function(t) {
								var n = e - (t - c);
								return v ? d(n, u - (t - l)) : n;
							})(t)
						);
					}
					function x(t) {
						return (
							(a = void 0), p && r ? b(t) : ((r = o = void 0), f)
						);
					}
					function T() {
						var t = m(),
							n = g(t);
						if (((r = arguments), (o = this), (c = t), n)) {
							if (void 0 === a)
								return (function(t) {
									return (
										(l = t),
										(a = setTimeout(h, e)),
										s ? b(t) : f
									);
								})(c);
							if (v) return (a = setTimeout(h, e)), b(c);
						}
						return void 0 === a && (a = setTimeout(h, e)), f;
					}
					return (
						(e = O(e) || 0),
						j(i) &&
							((s = !!i.leading),
							(u = (v = 'maxWait' in i)
								? y(O(i.maxWait) || 0, e)
								: u),
							(p = 'trailing' in i ? !!i.trailing : p)),
						(T.cancel = function() {
							void 0 !== a && clearTimeout(a),
								(l = 0),
								(r = c = o = a = void 0);
						}),
						(T.flush = function() {
							return void 0 === a ? f : x(m());
						}),
						T
					);
				}
				function g(t, e, i) {
					var r = !0,
						o = !0;
					if ('function' != typeof t) throw new TypeError(n);
					return (
						j(i) &&
							((r = 'leading' in i ? !!i.leading : r),
							(o = 'trailing' in i ? !!i.trailing : o)),
						b(t, e, {leading: r, maxWait: e, trailing: o})
					);
				}
				function j(t) {
					var n = typeof t;
					return !!t && ('object' == n || 'function' == n);
				}
				function h(t) {
					return !!t && 'object' == typeof t;
				}
				function x(t) {
					return 'symbol' == typeof t || (h(t) && p.call(t) == i);
				}
				function O(t) {
					if ('number' == typeof t) return t;
					if (x(t)) return e;
					if (j(t)) {
						var n =
							'function' == typeof t.valueOf ? t.valueOf() : t;
						t = j(n) ? n + '' : n;
					}
					if ('string' != typeof t) return 0 === t ? t : +t;
					t = t.replace(r, '');
					var i = u.test(t);
					return i || f.test(t)
						? a(t.slice(2), i ? 2 : 8)
						: o.test(t)
						? e
						: +t;
				}
				module.exports = g;
			},
			{},
		],
		Focm: [
			function(require, module, exports) {
				'use strict';
				var e = require('react'),
					t = n(require('lodash.throttle'));
				function n(e) {
					return e && e.__esModule ? e : {default: e};
				}
				function r(e, t) {
					return u(e) || o(e, t) || i();
				}
				function i() {
					throw new TypeError(
						'Invalid attempt to destructure non-iterable instance'
					);
				}
				function o(e, t) {
					var n = [],
						r = !0,
						i = !1,
						o = void 0;
					try {
						for (
							var u, l = e[Symbol.iterator]();
							!(r = (u = l.next()).done) &&
							(n.push(u.value), !t || n.length !== t);
							r = !0
						);
					} catch (a) {
						(i = !0), (o = a);
					} finally {
						try {
							r || null == l.return || l.return();
						} finally {
							if (i) throw o;
						}
					}
					return n;
				}
				function u(e) {
					if (Array.isArray(e)) return e;
				}
				module.exports = function() {
					var n =
							arguments.length > 0 && void 0 !== arguments[0]
								? arguments[0]
								: 0,
						i = r((0, e.useState)(null), 2),
						o = i[0],
						u = i[1],
						l = r((0, e.useState)(!1), 2),
						a = l[0],
						f = l[1];
					return (
						(0, e.useEffect)(
							function() {
								if (o) {
									var e = (0, t.default)(function() {
										o &&
											window.pageYOffset >=
												o.getBoundingClientRect().top +
													window.pageYOffset -
													window.innerHeight +
													n &&
											(window.removeEventListener(
												'scroll',
												e
											),
											f(!0));
									}, 200);
									return (
										window.addEventListener('scroll', e, {
											passive: !0,
										}),
										e(),
										function() {
											return window.removeEventListener(
												'scroll',
												e
											);
										}
									);
								}
							},
							[o, n]
						),
						[u, a]
					);
				};
			},
			{react: 'HdMw', 'lodash.throttle': 'wMdc'},
		],
	},
	{},
	['Focm'],
	null
);
//# sourceMappingURL=/index.js.map
