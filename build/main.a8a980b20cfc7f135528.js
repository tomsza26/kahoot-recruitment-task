(() => {
  'use strict';
  var r,
    a = {
      fa19f54e969d8d4dfc1d: (r, a, e) => {
        var f = e('a2b3d8f47c0ad32bad7e'),
          d = e('87bc2e8b5a2dbc5ab851'),
          v = () => (0, d.tZ)('div', { children: 'xd' }),
          i = document.getElementById('app');
        f.ZP.render((0, d.tZ)(v, {}), i);
      },
    },
    e = {};
  function f(r) {
    var d = e[r];
    if (void 0 !== d) return d.exports;
    var v = (e[r] = { exports: {} });
    return a[r](v, v.exports, f), v.exports;
  }
  (f.m = a),
    (r = []),
    (f.O = (a, e, d, v) => {
      if (!e) {
        var i = 1 / 0;
        for (o = 0; o < r.length; o++) {
          for (var [e, d, v] = r[o], n = !0, t = 0; t < e.length; t++)
            (!1 & v || i >= v) && Object.keys(f.O).every((r) => f.O[r](e[t]))
              ? e.splice(t--, 1)
              : ((n = !1), v < i && (i = v));
          if (n) {
            r.splice(o--, 1);
            var c = d();
            void 0 !== c && (a = c);
          }
        }
        return a;
      }
      v = v || 0;
      for (var o = r.length; o > 0 && r[o - 1][2] > v; o--) r[o] = r[o - 1];
      r[o] = [e, d, v];
    }),
    (f.d = (r, a) => {
      for (var e in a) f.o(a, e) && !f.o(r, e) && Object.defineProperty(r, e, { enumerable: !0, get: a[e] });
    }),
    (f.o = (r, a) => Object.prototype.hasOwnProperty.call(r, a)),
    (() => {
      var r = { 179: 0 };
      f.O.j = (a) => 0 === r[a];
      var a = (a, e) => {
          var d,
            v,
            [i, n, t] = e,
            c = 0;
          if (i.some((a) => 0 !== r[a])) {
            for (d in n) f.o(n, d) && (f.m[d] = n[d]);
            if (t) var o = t(f);
          }
          for (a && a(e); c < i.length; c++) (v = i[c]), f.o(r, v) && r[v] && r[v][0](), (r[v] = 0);
          return f.O(o);
        },
        e = (self.webpackChunkgreatpreactconfig = self.webpackChunkgreatpreactconfig || []);
      e.forEach(a.bind(null, 0)), (e.push = a.bind(null, e.push.bind(e)));
    })();
  var d = f.O(void 0, [60], () => f('fa19f54e969d8d4dfc1d'));
  d = f.O(d);
})();
