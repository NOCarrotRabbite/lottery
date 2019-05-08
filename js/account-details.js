(function() {
  let mask_layer = document.querySelector('.mask-layer');
  let screen = document.querySelector('.screen');
  let select_kind = document.querySelector('.select-kind');
  $(function() {
    //选择筛选时间
    $('.date').on('click', function() {
      mask_layer.style.zIndex = '998';
    });
    $('.date').each(function() {
      $(this).ionDatePicker({
        lang: 'zh-cn',
        format: 'YYYY-MM-DD'
      });
    });
  });
  //点击筛选按钮显示模态框
  $('.filtrate-btn').on('click', () => {
    mask_layer.style.zIndex = 1;
    screen.style.zIndex = 2;
  });
  //点击蒙层隐藏对应内容
  $('.mask-layer').on('click', () => {
    if (mask_layer.style.zIndex == '998') {
      mask_layer.style.zIndex = '1';
      select_kind.style.zIndex = -3;
    } else {
      screen.style.zIndex = -1;
      mask_layer.style.zIndex = -2;
      select_kind.style.zIndex = -3;
    }
  });
  //选择彩种
  $('.kind').on('click', () => {
    select_kind.style.zIndex = '999';
    mask_layer.style.zIndex = '998';
  });
  //确认选中的彩种
  $('.select-kind li').on('click', function() {
    let value = $(this)
      .text()
      .replace(/\s+/g, '');
    $('.select-kind li .radio-bg').removeClass('active');
    $(this)
      .find('.radio-bg')
      .addClass('active');
    $('.kind').text(value);
    mask_layer.style.zIndex = '1';
    select_kind.style.zIndex = -3;
  });
  //取消筛选
  $('.close').on('click', () => {
    mask_layer.style.zIndex = -2;
    screen.style.zIndex = -1;
    select_kind.style.zIndex = -3;
  });
  //确定筛选
  $('.submit').on('click', () => {
    mask_layer.style.zIndex = -2;
    screen.style.zIndex = -1;
    select_kind.style.zIndex = -3;
  });
})();

/* moment.min.js */

!function(t) {
  function e(t, e) {
    return function(n) {
      return u(t.call(this, n), e);
    };
  }
  function n(t, e) {
    return function(n) {
      return this.lang().ordinal(t.call(this, n), e);
    };
  }
  function s() {}
  function i(t) {
    a(this, t);
  }
  function r(t) {
    var e = t.years || t.year || t.y || 0,
      n = t.months || t.month || t.M || 0,
      s = t.weeks || t.week || t.w || 0,
      i = t.days || t.day || t.d || 0,
      r = t.hours || t.hour || t.h || 0,
      a = t.minutes || t.minute || t.m || 0,
      o = t.seconds || t.second || t.s || 0,
      u = t.milliseconds || t.millisecond || t.ms || 0;
    (this._input = t),
      (this._milliseconds = u + 1e3 * o + 6e4 * a + 36e5 * r),
      (this._days = i + 7 * s),
      (this._months = n + 12 * e),
      (this._data = {}),
      this._bubble();
  }
  function a(t, e) {
    for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
    return t;
  }
  function o(t) {
    return 0 > t ? Math.ceil(t) : Math.floor(t);
  }
  function u(t, e) {
    for (var n = t + ''; n.length < e; ) n = '0' + n;
    return n;
  }
  function h(t, e, n, s) {
    var i,
      r,
      a = e._milliseconds,
      o = e._days,
      u = e._months;
    a && t._d.setTime(+t._d + a * n),
      (o || u) && ((i = t.minute()), (r = t.hour())),
      o && t.date(t.date() + o * n),
      u && t.month(t.month() + u * n),
      a && !s && H.updateOffset(t),
      (o || u) && (t.minute(i), t.hour(r));
  }
  function d(t) {
    return '[object Array]' === Object.prototype.toString.call(t);
  }
  function c(t, e) {
    var n,
      s = Math.min(t.length, e.length),
      i = Math.abs(t.length - e.length),
      r = 0;
    for (n = 0; s > n; n++) ~~t[n] !== ~~e[n] && r++;
    return r + i;
  }
  function f(t) {
    return t ? ie[t] || t.toLowerCase().replace(/(.)s$/, '$1') : t;
  }
  function l(t, e) {
    return (e.abbr = t), x[t] || (x[t] = new s()), x[t].set(e), x[t];
  }
  function _(t) {
    if (!t) return H.fn._lang;
    if (!x[t] && A)
      try {
        require('./lang/' + t);
      } catch (e) {
        return H.fn._lang;
      }
    return x[t];
  }
  function m(t) {
    return t.match(/\[.*\]/) ? t.replace(/^\[|\]$/g, '') : t.replace(/\\/g, '');
  }
  function y(t) {
    var e,
      n,
      s = t.match(E);
    for (e = 0, n = s.length; n > e; e++) s[e] = ue[s[e]] ? ue[s[e]] : m(s[e]);
    return function(i) {
      var r = '';
      for (e = 0; n > e; e++)
        r += s[e] instanceof Function ? s[e].call(i, t) : s[e];
      return r;
    };
  }
  function M(t, e) {
    function n(e) {
      return t.lang().longDateFormat(e) || e;
    }
    for (var s = 5; s-- && N.test(e); ) e = e.replace(N, n);
    return re[e] || (re[e] = y(e)), re[e](t);
  }
  function g(t, e) {
    switch (t) {
      case 'DDDD':
        return V;
      case 'YYYY':
        return X;
      case 'YYYYY':
        return $;
      case 'S':
      case 'SS':
      case 'SSS':
      case 'DDD':
        return I;
      case 'MMM':
      case 'MMMM':
      case 'dd':
      case 'ddd':
      case 'dddd':
        return R;
      case 'a':
      case 'A':
        return _(e._l)._meridiemParse;
      case 'X':
        return B;
      case 'Z':
      case 'ZZ':
        return j;
      case 'T':
        return q;
      case 'MM':
      case 'DD':
      case 'YY':
      case 'HH':
      case 'hh':
      case 'mm':
      case 'ss':
      case 'M':
      case 'D':
      case 'd':
      case 'H':
      case 'h':
      case 'm':
      case 's':
        return J;
      default:
        return new RegExp(t.replace('\\', ''));
    }
  }
  function p(t) {
    var e = (j.exec(t) || [])[0],
      n = (e + '').match(ee) || ['-', 0, 0],
      s = +(60 * n[1]) + ~~n[2];
    return '+' === n[0] ? -s : s;
  }
  function D(t, e, n) {
    var s,
      i = n._a;
    switch (t) {
      case 'M':
      case 'MM':
        i[1] = null == e ? 0 : ~~e - 1;
        break;
      case 'MMM':
      case 'MMMM':
        (s = _(n._l).monthsParse(e)),
          null != s ? (i[1] = s) : (n._isValid = !1);
        break;
      case 'D':
      case 'DD':
      case 'DDD':
      case 'DDDD':
        null != e && (i[2] = ~~e);
        break;
      case 'YY':
        i[0] = ~~e + (~~e > 68 ? 1900 : 2e3);
        break;
      case 'YYYY':
      case 'YYYYY':
        i[0] = ~~e;
        break;
      case 'a':
      case 'A':
        n._isPm = _(n._l).isPM(e);
        break;
      case 'H':
      case 'HH':
      case 'h':
      case 'hh':
        i[3] = ~~e;
        break;
      case 'm':
      case 'mm':
        i[4] = ~~e;
        break;
      case 's':
      case 'ss':
        i[5] = ~~e;
        break;
      case 'S':
      case 'SS':
      case 'SSS':
        i[6] = ~~(1e3 * ('0.' + e));
        break;
      case 'X':
        n._d = new Date(1e3 * parseFloat(e));
        break;
      case 'Z':
      case 'ZZ':
        (n._useUTC = !0), (n._tzm = p(e));
    }
    null == e && (n._isValid = !1);
  }
  function Y(t) {
    var e,
      n,
      s = [];
    if (!t._d) {
      for (e = 0; 7 > e; e++)
        t._a[e] = s[e] = null == t._a[e] ? (2 === e ? 1 : 0) : t._a[e];
      (s[3] += ~~((t._tzm || 0) / 60)),
        (s[4] += ~~((t._tzm || 0) % 60)),
        (n = new Date(0)),
        t._useUTC
          ? (n.setUTCFullYear(s[0], s[1], s[2]),
            n.setUTCHours(s[3], s[4], s[5], s[6]))
          : (n.setFullYear(s[0], s[1], s[2]),
            n.setHours(s[3], s[4], s[5], s[6])),
        (t._d = n);
    }
  }
  function w(t) {
    var e,
      n,
      s = t._f.match(E),
      i = t._i;
    for (t._a = [], e = 0; e < s.length; e++)
      (n = (g(s[e], t).exec(i) || [])[0]),
        n && (i = i.slice(i.indexOf(n) + n.length)),
        ue[s[e]] && D(s[e], n, t);
    i && (t._il = i),
      t._isPm && t._a[3] < 12 && (t._a[3] += 12),
      t._isPm === !1 && 12 === t._a[3] && (t._a[3] = 0),
      Y(t);
  }
  function k(t) {
    var e,
      n,
      s,
      r,
      o,
      u = 99;
    for (r = 0; r < t._f.length; r++)
      (e = a({}, t)),
        (e._f = t._f[r]),
        w(e),
        (n = new i(e)),
        (o = c(e._a, n.toArray())),
        n._il && (o += n._il.length),
        u > o && ((u = o), (s = n));
    a(t, s);
  }
  function v(t) {
    var e,
      n = t._i,
      s = K.exec(n);
    if (s) {
      for (t._f = 'YYYY-MM-DD' + (s[2] || ' '), e = 0; 4 > e; e++)
        if (te[e][1].exec(n)) {
          t._f += te[e][0];
          break;
        }
      j.exec(n) && (t._f += ' Z'), w(t);
    } else t._d = new Date(n);
  }
  function T(e) {
    var n = e._i,
      s = G.exec(n);
    n === t
      ? (e._d = new Date())
      : s
      ? (e._d = new Date(+s[1]))
      : 'string' == typeof n
      ? v(e)
      : d(n)
      ? ((e._a = n.slice(0)), Y(e))
      : (e._d = n instanceof Date ? new Date(+n) : new Date(n));
  }
  function b(t, e, n, s, i) {
    return i.relativeTime(e || 1, !!n, t, s);
  }
  function S(t, e, n) {
    var s = W(Math.abs(t) / 1e3),
      i = W(s / 60),
      r = W(i / 60),
      a = W(r / 24),
      o = W(a / 365),
      u = (45 > s && ['s', s]) ||
        (1 === i && ['m']) ||
        (45 > i && ['mm', i]) ||
        (1 === r && ['h']) ||
        (22 > r && ['hh', r]) ||
        (1 === a && ['d']) ||
        (25 >= a && ['dd', a]) ||
        (45 >= a && ['M']) ||
        (345 > a && ['MM', W(a / 30)]) ||
        (1 === o && ['y']) || ['yy', o];
    return (u[2] = e), (u[3] = t > 0), (u[4] = n), b.apply({}, u);
  }
  function F(t, e, n) {
    var s,
      i = n - e,
      r = n - t.day();
    return (
      r > i && (r -= 7),
      i - 7 > r && (r += 7),
      (s = H(t).add('d', r)),
      { week: Math.ceil(s.dayOfYear() / 7), year: s.year() }
    );
  }
  function O(t) {
    var e = t._i,
      n = t._f;
    return null === e || '' === e
      ? null
      : ('string' == typeof e && (t._i = e = _().preparse(e)),
        H.isMoment(e)
          ? ((t = a({}, e)), (t._d = new Date(+e._d)))
          : n
          ? d(n)
            ? k(t)
            : w(t)
          : T(t),
        new i(t));
  }
  function z(t, e) {
    H.fn[t] = H.fn[t + 's'] = function(t) {
      var n = this._isUTC ? 'UTC' : '';
      return null != t
        ? (this._d['set' + n + e](t), H.updateOffset(this), this)
        : this._d['get' + n + e]();
    };
  }
  function C(t) {
    H.duration.fn[t] = function() {
      return this._data[t];
    };
  }
  function L(t, e) {
    H.duration.fn['as' + t] = function() {
      return +this / e;
    };
  }
  for (
    var H,
      P,
      U = '2.1.0',
      W = Math.round,
      x = {},
      A = 'undefined' != typeof module && module.exports,
      G = /^\/?Date\((\-?\d+)/i,
      Z = /(\-)?(\d*)?\.?(\d+)\:(\d+)\:(\d+)\.?(\d{3})?/,
      E = /(\[[^\[]*\])|(\\)?(Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|mm?|ss?|SS?S?|X|zz?|ZZ?|.)/g,
      N = /(\[[^\[]*\])|(\\)?(LT|LL?L?L?|l{1,4})/g,
      J = /\d\d?/,
      I = /\d{1,3}/,
      V = /\d{3}/,
      X = /\d{1,4}/,
      $ = /[+\-]?\d{1,6}/,
      R = /[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i,
      j = /Z|[\+\-]\d\d:?\d\d/i,
      q = /T/i,
      B = /[\+\-]?\d+(\.\d{1,3})?/,
      K = /^\s*\d{4}-\d\d-\d\d((T| )(\d\d(:\d\d(:\d\d(\.\d\d?\d?)?)?)?)?([\+\-]\d\d:?\d\d)?)?/,
      Q = 'YYYY-MM-DDTHH:mm:ssZ',
      te = [
        ['HH:mm:ss.S', /(T| )\d\d:\d\d:\d\d\.\d{1,3}/],
        ['HH:mm:ss', /(T| )\d\d:\d\d:\d\d/],
        ['HH:mm', /(T| )\d\d:\d\d/],
        ['HH', /(T| )\d\d/]
      ],
      ee = /([\+\-]|\d\d)/gi,
      ne = 'Date|Hours|Minutes|Seconds|Milliseconds'.split('|'),
      se = {
        Milliseconds: 1,
        Seconds: 1e3,
        Minutes: 6e4,
        Hours: 36e5,
        Days: 864e5,
        Months: 2592e6,
        Years: 31536e6
      },
      ie = {
        ms: 'millisecond',
        s: 'second',
        m: 'minute',
        h: 'hour',
        d: 'day',
        w: 'week',
        M: 'month',
        y: 'year'
      },
      re = {},
      ae = 'DDD w W M D d'.split(' '),
      oe = 'M D H h m s w W'.split(' '),
      ue = {
        M: function() {
          return this.month() + 1;
        },
        MMM: function(t) {
          return this.lang().monthsShort(this, t);
        },
        MMMM: function(t) {
          return this.lang().months(this, t);
        },
        D: function() {
          return this.date();
        },
        DDD: function() {
          return this.dayOfYear();
        },
        d: function() {
          return this.day();
        },
        dd: function(t) {
          return this.lang().weekdaysMin(this, t);
        },
        ddd: function(t) {
          return this.lang().weekdaysShort(this, t);
        },
        dddd: function(t) {
          return this.lang().weekdays(this, t);
        },
        w: function() {
          return this.week();
        },
        W: function() {
          return this.isoWeek();
        },
        YY: function() {
          return u(this.year() % 100, 2);
        },
        YYYY: function() {
          return u(this.year(), 4);
        },
        YYYYY: function() {
          return u(this.year(), 5);
        },
        gg: function() {
          return u(this.weekYear() % 100, 2);
        },
        gggg: function() {
          return this.weekYear();
        },
        ggggg: function() {
          return u(this.weekYear(), 5);
        },
        GG: function() {
          return u(this.isoWeekYear() % 100, 2);
        },
        GGGG: function() {
          return this.isoWeekYear();
        },
        GGGGG: function() {
          return u(this.isoWeekYear(), 5);
        },
        e: function() {
          return this.weekday();
        },
        E: function() {
          return this.isoWeekday();
        },
        a: function() {
          return this.lang().meridiem(this.hours(), this.minutes(), !0);
        },
        A: function() {
          return this.lang().meridiem(this.hours(), this.minutes(), !1);
        },
        H: function() {
          return this.hours();
        },
        h: function() {
          return this.hours() % 12 || 12;
        },
        m: function() {
          return this.minutes();
        },
        s: function() {
          return this.seconds();
        },
        S: function() {
          return ~~(this.milliseconds() / 100);
        },
        SS: function() {
          return u(~~(this.milliseconds() / 10), 2);
        },
        SSS: function() {
          return u(this.milliseconds(), 3);
        },
        Z: function() {
          var t = -this.zone(),
            e = '+';
          return (
            0 > t && ((t = -t), (e = '-')),
            e + u(~~(t / 60), 2) + ':' + u(~~t % 60, 2)
          );
        },
        ZZ: function() {
          var t = -this.zone(),
            e = '+';
          return 0 > t && ((t = -t), (e = '-')), e + u(~~((10 * t) / 6), 4);
        },
        z: function() {
          return this.zoneAbbr();
        },
        zz: function() {
          return this.zoneName();
        },
        X: function() {
          return this.unix();
        }
      };
    ae.length;

  )
    (P = ae.pop()), (ue[P + 'o'] = n(ue[P], P));
  for (; oe.length; ) (P = oe.pop()), (ue[P + P] = e(ue[P], 2));
  for (
    ue.DDDD = e(ue.DDD, 3),
      s.prototype = {
        set: function(t) {
          var e, n;
          for (n in t)
            (e = t[n]),
              'function' == typeof e ? (this[n] = e) : (this['_' + n] = e);
        },
        _months: 'January_February_March_April_May_June_July_August_September_October_November_December'.split(
          '_'
        ),
        months: function(t) {
          return this._months[t.month()];
        },
        _monthsShort: 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split(
          '_'
        ),
        monthsShort: function(t) {
          return this._monthsShort[t.month()];
        },
        monthsParse: function(t) {
          var e, n, s;
          for (
            this._monthsParse || (this._monthsParse = []), e = 0;
            12 > e;
            e++
          )
            if (
              (this._monthsParse[e] ||
                ((n = H([2e3, e])),
                (s = '^' + this.months(n, '') + '|^' + this.monthsShort(n, '')),
                (this._monthsParse[e] = new RegExp(s.replace('.', ''), 'i'))),
              this._monthsParse[e].test(t))
            )
              return e;
        },
        _weekdays: 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split(
          '_'
        ),
        weekdays: function(t) {
          return this._weekdays[t.day()];
        },
        _weekdaysShort: 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_'),
        weekdaysShort: function(t) {
          return this._weekdaysShort[t.day()];
        },
        _weekdaysMin: 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_'),
        weekdaysMin: function(t) {
          return this._weekdaysMin[t.day()];
        },
        weekdaysParse: function(t) {
          var e, n, s;
          for (
            this._weekdaysParse || (this._weekdaysParse = []), e = 0;
            7 > e;
            e++
          )
            if (
              (this._weekdaysParse[e] ||
                ((n = H([2e3, 1]).day(e)),
                (s =
                  '^' +
                  this.weekdays(n, '') +
                  '|^' +
                  this.weekdaysShort(n, '') +
                  '|^' +
                  this.weekdaysMin(n, '')),
                (this._weekdaysParse[e] = new RegExp(s.replace('.', ''), 'i'))),
              this._weekdaysParse[e].test(t))
            )
              return e;
        },
        _longDateFormat: {
          LT: 'h:mm A',
          L: 'MM/DD/YYYY',
          LL: 'MMMM D YYYY',
          LLL: 'MMMM D YYYY LT',
          LLLL: 'dddd, MMMM D YYYY LT'
        },
        longDateFormat: function(t) {
          var e = this._longDateFormat[t];
          return (
            !e &&
              this._longDateFormat[t.toUpperCase()] &&
              ((e = this._longDateFormat[t.toUpperCase()].replace(
                /MMMM|MM|DD|dddd/g,
                function(t) {
                  return t.slice(1);
                }
              )),
              (this._longDateFormat[t] = e)),
            e
          );
        },
        isPM: function(t) {
          return 'p' === (t + '').toLowerCase()[0];
        },
        _meridiemParse: /[ap]\.?m?\.?/i,
        meridiem: function(t, e, n) {
          return t > 11 ? (n ? 'pm' : 'PM') : n ? 'am' : 'AM';
        },
        _calendar: {
          sameDay: '[Today at] LT',
          nextDay: '[Tomorrow at] LT',
          nextWeek: 'dddd [at] LT',
          lastDay: '[Yesterday at] LT',
          lastWeek: '[Last] dddd [at] LT',
          sameElse: 'L'
        },
        calendar: function(t, e) {
          var n = this._calendar[t];
          return 'function' == typeof n ? n.apply(e) : n;
        },
        _relativeTime: {
          future: 'in %s',
          past: '%s ago',
          s: 'a few seconds',
          m: 'a minute',
          mm: '%d minutes',
          h: 'an hour',
          hh: '%d hours',
          d: 'a day',
          dd: '%d days',
          M: 'a month',
          MM: '%d months',
          y: 'a year',
          yy: '%d years'
        },
        relativeTime: function(t, e, n, s) {
          var i = this._relativeTime[n];
          return 'function' == typeof i ? i(t, e, n, s) : i.replace(/%d/i, t);
        },
        pastFuture: function(t, e) {
          var n = this._relativeTime[t > 0 ? 'future' : 'past'];
          return 'function' == typeof n ? n(e) : n.replace(/%s/i, e);
        },
        ordinal: function(t) {
          return this._ordinal.replace('%d', t);
        },
        _ordinal: '%d',
        preparse: function(t) {
          return t;
        },
        postformat: function(t) {
          return t;
        },
        week: function(t) {
          return F(t, this._week.dow, this._week.doy).week;
        },
        _week: { dow: 0, doy: 6 }
      },
      H = function(t, e, n) {
        return O({ _i: t, _f: e, _l: n, _isUTC: !1 });
      },
      H.utc = function(t, e, n) {
        return O({ _useUTC: !0, _isUTC: !0, _l: n, _i: t, _f: e });
      },
      H.unix = function(t) {
        return H(1e3 * t);
      },
      H.duration = function(t, e) {
        var n,
          s,
          i = H.isDuration(t),
          a = 'number' == typeof t,
          o = i ? t._input : a ? {} : t,
          u = Z.exec(t);
        return (
          a
            ? e
              ? (o[e] = t)
              : (o.milliseconds = t)
            : u &&
              ((n = '-' === u[1] ? -1 : 1),
              (o = {
                y: 0,
                d: ~~u[2] * n,
                h: ~~u[3] * n,
                m: ~~u[4] * n,
                s: ~~u[5] * n,
                ms: ~~u[6] * n
              })),
          (s = new r(o)),
          i && t.hasOwnProperty('_lang') && (s._lang = t._lang),
          s
        );
      },
      H.version = U,
      H.defaultFormat = Q,
      H.updateOffset = function() {},
      H.lang = function(t, e) {
        return t
          ? (e ? l(t, e) : x[t] || _(t),
            (H.duration.fn._lang = H.fn._lang = _(t)),
            void 0)
          : H.fn._lang._abbr;
      },
      H.langData = function(t) {
        return t && t._lang && t._lang._abbr && (t = t._lang._abbr), _(t);
      },
      H.isMoment = function(t) {
        return t instanceof i;
      },
      H.isDuration = function(t) {
        return t instanceof r;
      },
      H.fn = i.prototype = {
        clone: function() {
          return H(this);
        },
        valueOf: function() {
          return +this._d + 6e4 * (this._offset || 0);
        },
        unix: function() {
          return Math.floor(+this / 1e3);
        },
        toString: function() {
          return this.format('ddd MMM DD YYYY HH:mm:ss [GMT]ZZ');
        },
        toDate: function() {
          return this._offset ? new Date(+this) : this._d;
        },
        toISOString: function() {
          return M(H(this).utc(), 'YYYY-MM-DD[T]HH:mm:ss.SSS[Z]');
        },
        toArray: function() {
          var t = this;
          return [
            t.year(),
            t.month(),
            t.date(),
            t.hours(),
            t.minutes(),
            t.seconds(),
            t.milliseconds()
          ];
        },
        isValid: function() {
          return (
            null == this._isValid &&
              (this._isValid = this._a
                ? !c(
                    this._a,
                    (this._isUTC ? H.utc(this._a) : H(this._a)).toArray()
                  )
                : !isNaN(this._d.getTime())),
            !!this._isValid
          );
        },
        utc: function() {
          return this.zone(0);
        },
        local: function() {
          return this.zone(0), (this._isUTC = !1), this;
        },
        format: function(t) {
          var e = M(this, t || H.defaultFormat);
          return this.lang().postformat(e);
        },
        add: function(t, e) {
          var n;
          return (
            (n = 'string' == typeof t ? H.duration(+e, t) : H.duration(t, e)),
            h(this, n, 1),
            this
          );
        },
        subtract: function(t, e) {
          var n;
          return (
            (n = 'string' == typeof t ? H.duration(+e, t) : H.duration(t, e)),
            h(this, n, -1),
            this
          );
        },
        diff: function(t, e, n) {
          var s,
            i,
            r = this._isUTC ? H(t).zone(this._offset || 0) : H(t).local(),
            a = 6e4 * (this.zone() - r.zone());
          return (
            (e = f(e)),
            'year' === e || 'month' === e
              ? ((s = 432e5 * (this.daysInMonth() + r.daysInMonth())),
                (i =
                  12 * (this.year() - r.year()) + (this.month() - r.month())),
                (i +=
                  (this -
                    H(this).startOf('month') -
                    (r - H(r).startOf('month'))) /
                  s),
                (i -=
                  (6e4 *
                    (this.zone() -
                      H(this)
                        .startOf('month')
                        .zone() -
                      (r.zone() -
                        H(r)
                          .startOf('month')
                          .zone()))) /
                  s),
                'year' === e && (i /= 12))
              : ((s = this - r),
                (i =
                  'second' === e
                    ? s / 1e3
                    : 'minute' === e
                    ? s / 6e4
                    : 'hour' === e
                    ? s / 36e5
                    : 'day' === e
                    ? (s - a) / 864e5
                    : 'week' === e
                    ? (s - a) / 6048e5
                    : s)),
            n ? i : o(i)
          );
        },
        from: function(t, e) {
          return H.duration(this.diff(t))
            .lang(this.lang()._abbr)
            .humanize(!e);
        },
        fromNow: function(t) {
          return this.from(H(), t);
        },
        calendar: function() {
          var t = this.diff(H().startOf('day'), 'days', !0),
            e =
              -6 > t
                ? 'sameElse'
                : -1 > t
                ? 'lastWeek'
                : 0 > t
                ? 'lastDay'
                : 1 > t
                ? 'sameDay'
                : 2 > t
                ? 'nextDay'
                : 7 > t
                ? 'nextWeek'
                : 'sameElse';
          return this.format(this.lang().calendar(e, this));
        },
        isLeapYear: function() {
          var t = this.year();
          return (0 === t % 4 && 0 !== t % 100) || 0 === t % 400;
        },
        isDST: function() {
          return (
            this.zone() <
              this.clone()
                .month(0)
                .zone() ||
            this.zone() <
              this.clone()
                .month(5)
                .zone()
          );
        },
        day: function(t) {
          var e = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
          return null != t
            ? 'string' == typeof t &&
              ((t = this.lang().weekdaysParse(t)), 'number' != typeof t)
              ? this
              : this.add({ d: t - e })
            : e;
        },
        month: function(t) {
          var e,
            n = this._isUTC ? 'UTC' : '';
          return null != t
            ? 'string' == typeof t &&
              ((t = this.lang().monthsParse(t)), 'number' != typeof t)
              ? this
              : ((e = this.date()),
                this.date(1),
                this._d['set' + n + 'Month'](t),
                this.date(Math.min(e, this.daysInMonth())),
                H.updateOffset(this),
                this)
            : this._d['get' + n + 'Month']();
        },
        startOf: function(t) {
          switch ((t = f(t))) {
            case 'year':
              this.month(0);
            case 'month':
              this.date(1);
            case 'week':
            case 'day':
              this.hours(0);
            case 'hour':
              this.minutes(0);
            case 'minute':
              this.seconds(0);
            case 'second':
              this.milliseconds(0);
          }
          return 'week' === t && this.weekday(0), this;
        },
        endOf: function(t) {
          return this.startOf(t)
            .add(t, 1)
            .subtract('ms', 1);
        },
        isAfter: function(t, e) {
          return (
            (e = 'undefined' != typeof e ? e : 'millisecond'),
            +this.clone().startOf(e) > +H(t).startOf(e)
          );
        },
        isBefore: function(t, e) {
          return (
            (e = 'undefined' != typeof e ? e : 'millisecond'),
            +this.clone().startOf(e) < +H(t).startOf(e)
          );
        },
        isSame: function(t, e) {
          return (
            (e = 'undefined' != typeof e ? e : 'millisecond'),
            +this.clone().startOf(e) === +H(t).startOf(e)
          );
        },
        min: function(t) {
          return (t = H.apply(null, arguments)), this > t ? this : t;
        },
        max: function(t) {
          return (t = H.apply(null, arguments)), t > this ? this : t;
        },
        zone: function(t) {
          var e = this._offset || 0;
          return null == t
            ? this._isUTC
              ? e
              : this._d.getTimezoneOffset()
            : ('string' == typeof t && (t = p(t)),
              Math.abs(t) < 16 && (t = 60 * t),
              (this._offset = t),
              (this._isUTC = !0),
              e !== t && h(this, H.duration(e - t, 'm'), 1, !0),
              this);
        },
        zoneAbbr: function() {
          return this._isUTC ? 'UTC' : '';
        },
        zoneName: function() {
          return this._isUTC ? 'Coordinated Universal Time' : '';
        },
        daysInMonth: function() {
          return H.utc([this.year(), this.month() + 1, 0]).date();
        },
        dayOfYear: function(t) {
          var e =
            W((H(this).startOf('day') - H(this).startOf('year')) / 864e5) + 1;
          return null == t ? e : this.add('d', t - e);
        },
        weekYear: function(t) {
          var e = F(this, this.lang()._week.dow, this.lang()._week.doy).year;
          return null == t ? e : this.add('y', t - e);
        },
        isoWeekYear: function(t) {
          var e = F(this, 1, 4).year;
          return null == t ? e : this.add('y', t - e);
        },
        week: function(t) {
          var e = this.lang().week(this);
          return null == t ? e : this.add('d', 7 * (t - e));
        },
        isoWeek: function(t) {
          var e = F(this, 1, 4).week;
          return null == t ? e : this.add('d', 7 * (t - e));
        },
        weekday: function(t) {
          var e = (this._d.getDay() + 7 - this.lang()._week.dow) % 7;
          return null == t ? e : this.add('d', t - e);
        },
        isoWeekday: function(t) {
          return null == t
            ? this.day() || 7
            : this.day(this.day() % 7 ? t : t - 7);
        },
        lang: function(e) {
          return e === t ? this._lang : ((this._lang = _(e)), this);
        }
      },
      P = 0;
    P < ne.length;
    P++
  )
    z(ne[P].toLowerCase().replace(/s$/, ''), ne[P]);
  z('year', 'FullYear'),
    (H.fn.days = H.fn.day),
    (H.fn.months = H.fn.month),
    (H.fn.weeks = H.fn.week),
    (H.fn.isoWeeks = H.fn.isoWeek),
    (H.fn.toJSON = H.fn.toISOString),
    (H.duration.fn = r.prototype = {
      _bubble: function() {
        var t,
          e,
          n,
          s,
          i = this._milliseconds,
          r = this._days,
          a = this._months,
          u = this._data;
        (u.milliseconds = i % 1e3),
          (t = o(i / 1e3)),
          (u.seconds = t % 60),
          (e = o(t / 60)),
          (u.minutes = e % 60),
          (n = o(e / 60)),
          (u.hours = n % 24),
          (r += o(n / 24)),
          (u.days = r % 30),
          (a += o(r / 30)),
          (u.months = a % 12),
          (s = o(a / 12)),
          (u.years = s);
      },
      weeks: function() {
        return o(this.days() / 7);
      },
      valueOf: function() {
        return (
          this._milliseconds +
          864e5 * this._days +
          2592e6 * (this._months % 12) +
          31536e6 * ~~(this._months / 12)
        );
      },
      humanize: function(t) {
        var e = +this,
          n = S(e, !t, this.lang());
        return (
          t && (n = this.lang().pastFuture(e, n)), this.lang().postformat(n)
        );
      },
      add: function(t, e) {
        var n = H.duration(t, e);
        return (
          (this._milliseconds += n._milliseconds),
          (this._days += n._days),
          (this._months += n._months),
          this._bubble(),
          this
        );
      },
      subtract: function(t, e) {
        var n = H.duration(t, e);
        return (
          (this._milliseconds -= n._milliseconds),
          (this._days -= n._days),
          (this._months -= n._months),
          this._bubble(),
          this
        );
      },
      get: function(t) {
        return (t = f(t)), this[t.toLowerCase() + 's']();
      },
      as: function(t) {
        return (
          (t = f(t)),
          this['as' + t.charAt(0).toUpperCase() + t.slice(1) + 's']()
        );
      },
      lang: H.fn.lang
    });
  for (P in se) se.hasOwnProperty(P) && (L(P, se[P]), C(P.toLowerCase()));
  L('Weeks', 6048e5),
    (H.duration.fn.asMonths = function() {
      return (+this - 31536e6 * this.years()) / 2592e6 + 12 * this.years();
    }),
    H.lang('en', {
      ordinal: function(t) {
        var e = t % 10,
          n =
            1 === ~~((t % 100) / 10)
              ? 'th'
              : 1 === e
              ? 'st'
              : 2 === e
              ? 'nd'
              : 3 === e
              ? 'rd'
              : 'th';
        return t + n;
      }
    }),
    A && (module.exports = H),
    'undefined' == typeof ender && (this.moment = H),
    'function' == typeof define &&
      define.amd &&
      define('moment', [], function() {
        return H;
      });
}.call(this);

/* moment.zh-cn.js */

!(function() {
  function e(e) {
    e.lang('zh-cn', {
      months: '一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月'.split(
        '_'
      ),
      monthsShort: '1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月'.split(
        '_'
      ),
      weekdays: '星期日_星期一_星期二_星期三_星期四_星期五_星期六'.split('_'),
      weekdaysShort: '周日_周一_周二_周三_周四_周五_周六'.split('_'),
      weekdaysMin: '日_一_二_三_四_五_六'.split('_'),
      longDateFormat: {
        LT: 'Ah点mm',
        L: 'YYYY年MMMD日',
        LL: 'YYYY年MMMD日',
        LLL: 'YYYY年MMMD日LT',
        LLLL: 'YYYY年MMMD日ddddLT',
        l: 'YYYY年MMMD日',
        ll: 'YYYY年MMMD日',
        lll: 'YYYY年MMMD日LT',
        llll: 'YYYY年MMMD日ddddLT'
      },
      meridiem: function(hour, minute, isLower) {
        if (hour < 9) {
          return '早上';
        } else if (hour < 11 && minute < 30) {
          return '上午';
        } else if (hour < 13 && minute < 30) {
          return '中午';
        } else if (hour < 18) {
          return '下午';
        } else {
          return '晚上';
        }
      },
      calendar: {
        sameDay: '[今天] LT',
        nextDay: '[明天] LT',
        nextWeek: '[下周]dddd LT',
        lastDay: '[昨天] LT',
        lastWeek: '[上周]dddd LT',
        sameElse: 'L'
      },
      relativeTime: {
        future: '%s内',
        past: '%s前',
        s: '几秒',
        m: '1分钟',
        mm: '%d分钟',
        h: '1小时',
        hh: '%d小时',
        d: '1天',
        dd: '%d天',
        M: '1个月',
        MM: '%d个月',
        y: '1年',
        yy: '%d年'
      }
    });
  }
  'function' == typeof define && define.amd && define(['moment'], e),
    'undefined' != typeof window && window.moment && e(window.moment);
})();

/* ion.calendar.js */
(function($) {
  try {
    var timeNow = moment();
  } catch (e) {
    throw new Error("Can't find Moment.js library");
  }

  var methods = {
    init: function(options) {
      var settings = $.extend(
          {
            lang: 'en',
            sundayFirst: true,
            years: '80',
            format: '',
            clickable: true,
            startDate: '',
            hideArrows: false,
            onClick: null,
            onReady: null
          },
          options
        ),
        html,
        i;

      return this.each(function() {
        var $calendar = $(this);

        //prevent overwrite
        if ($calendar.data('isActive')) {
          return;
        }
        $calendar.data('isActive', true);

        var $prev,
          $next,
          $month,
          $year,
          $day,
          timeSelected,
          timeNowLocal = moment(timeNow.lang(settings.lang)),
          timeForWork,
          weekFirstDay,
          weekLastDay,
          monthLastDay,
          tempYears,
          fromYear,
          toYear,
          firstStart = true;

        // public methods
        this.updateData = function(options) {
          settings = $.extend(settings, options);
          removeHTML();
        };

        // private methods
        var removeHTML = function() {
          $prev.off();
          $next.off();
          $month.off();
          $year.off();
          $calendar.empty();

          prepareData();
          prepareCalendar();
        };

        var prepareData = function() {
          // start date
          if (settings.startDate) {
            if (settings.format.indexOf('L') >= 0) {
              timeSelected = moment(settings.startDate, 'YYYY.MM.DD').lang(
                settings.lang
              );
            } else {
              timeSelected = moment(settings.startDate, settings.format).lang(
                settings.lang
              );
            }
          }

          // years diapason
          settings.years = settings.years.toString();
          tempYears = settings.years.split('-');
          if (tempYears.length === 1) {
            fromYear = moment()
              .subtract('years', tempYears[0])
              .format('YYYY');
            toYear = moment().format('YYYY');
          } else if (tempYears.length === 2) {
            fromYear = tempYears[0];
            toYear = tempYears[1];
          }
          fromYear = parseInt(fromYear);
          toYear = parseInt(toYear);

          if (toYear < timeNowLocal.format('YYYY')) {
            timeNowLocal.year(toYear).month(11);
          }
          if (fromYear > timeNowLocal.format('YYYY')) {
            timeNowLocal.year(fromYear).month(0);
          }
        };

        var prepareCalendar = function() {
          timeForWork = moment(timeNowLocal);

          weekFirstDay = parseInt(timeForWork.startOf('month').format('d'));
          weekLastDay = parseInt(timeForWork.endOf('month').format('d'));
          monthLastDay = parseInt(timeForWork.endOf('month').format('D'));
          html = '<div class="ic__container">';
          html += '<div class="ic__header">';
          html += '<div class="ic__prev"><div></div></div>';

          // head month
          html += '<div class="ic__month"><select class="ic__month-select">';
          for (i = 0; i < 12; i++) {
            if (i === parseInt(timeNowLocal.format('M')) - 1) {
              html +=
                '<option value="' +
                i +
                '" selected="selected">' +
                timeForWork.month(i).format('MMMM') +
                '</option>';
            } else {
              html +=
                '<option value="' +
                i +
                '">' +
                timeForWork.month(i).format('MMMM') +
                '</option>';
            }
          }
          html +=
            '</select><svg class="icon icon-left detail-icon" aria-hidden="true">\n' +
            '                <use xlink:href="#icon-iconzhuanqu23"></use>\n' +
            '              </svg></div>';

          // head year
          html += '<div class="ic__year"><select class="ic__year-select">';
          for (i = fromYear; i <= toYear; i++) {
            if (i === parseInt(timeNowLocal.format('YYYY'))) {
              console.log('iiiiiiii', i);
              html +=
                '<option value="' +
                i +
                '" selected="selected">' +
                i +
                '</option>';
            } else {
              html += '<option value="' + i + '">' + i + '</option>';
            }
          }
          html +=
            '</select><svg class="icon icon-right detail-icon" aria-hidden="true">\n' +
            '                <use xlink:href="#icon-iconzhuanqu23"></use>\n' +
            '              </svg></div>';
          html += '<div class="ic__next"><div></div></div>';
          html += '</div>';

          if (settings.sundayFirst) {
            // week
            html += '<table class="ic__week-head"><tr>';
            for (i = 0; i < 7; i++) {
              html += '<td>' + timeForWork.day(i).format('dd') + '</td>';
            }
            html += '</tr></table>';

            // month
            html += '<table class="ic__days"><tr>';
            // empty days
            for (i = 0; i < weekFirstDay; i++) {
              html += '<td class="ic__day-empty">&nbsp;</td>';
            }
            // days
            for (i = 1; i <= monthLastDay; i++) {
              // current day
              if (
                moment(timeNowLocal)
                  .date(i)
                  .format('D.M.YYYY') === timeNow.format('D.M.YYYY')
              ) {
                html +=
                  '<td class="ic__day ic__day_state_current">' + i + '</td>';
              } else if (
                timeSelected &&
                moment(timeNowLocal)
                  .date(i)
                  .format('D.M.YYYY') === timeSelected.format('D.M.YYYY')
              ) {
                html +=
                  '<td class="ic__day ic__day_state_selected">' + i + '</td>';
              } else {
                html += '<td class="ic__day">' + i + '</td>';
              }

              // new week - new line
              if (
                (weekFirstDay + i) / 7 ===
                Math.floor((weekFirstDay + i) / 7)
              ) {
                html += '</tr><tr>';
              }
            }
            // empty days
            for (i = weekLastDay; i < 6; i++) {
              html += '<td class="ic__day-empty">&nbsp;</td>';
            }
            html += '</tr></table>';
          } else {
            // week
            html += '<table class="ic__week-head"><tr>';
            for (i = 1; i < 8; i++) {
              if (i < 7) {
                html += '<td>' + timeForWork.day(i).format('dd') + '</td>';
              } else {
                html += '<td>' + timeForWork.day(0).format('dd') + '</td>';
              }
            }
            html += '</tr></table>';

            // days
            html += '<table class="ic__days"><tr>';

            // empty days
            if (weekFirstDay > 0) {
              weekFirstDay = weekFirstDay - 1;
            } else {
              weekFirstDay = 6;
            }
            for (i = 0; i < weekFirstDay; i++) {
              html += '<td class="ic__day-empty">&nbsp;</td>';
            }

            for (i = 1; i <= monthLastDay; i++) {
              // current day
              if (
                moment(timeNowLocal)
                  .date(i)
                  .format('D.M.YYYY') === timeNow.format('D.M.YYYY')
              ) {
                html +=
                  '<td class="ic__day ic__day_state_current">' + i + '</td>';
              } else if (
                timeSelected &&
                moment(timeNowLocal)
                  .date(i)
                  .format('D.M.YYYY') === timeSelected.format('D.M.YYYY')
              ) {
                html +=
                  '<td class="ic__day ic__day_state_selected">' + i + '</td>';
              } else {
                html += '<td class="ic__day">' + i + '</td>';
              }

              // new week - new line
              if (
                (weekFirstDay + i) / 7 ===
                Math.floor((weekFirstDay + i) / 7)
              ) {
                html += '</tr><tr>';
              }
            }
            // empty days
            if (weekLastDay < 1) {
              weekLastDay = 7;
            }
            for (i = weekLastDay - 1; i < 6; i++) {
              html += '<td class="ic__day-empty">&nbsp;</td>';
            }
            html += '</tr></table>';
          }

          html += '</div>';

          placeCalendar();
        };

        var placeCalendar = function() {
          $calendar.html(html);

          $prev = $calendar.find('.ic__prev');
          $next = $calendar.find('.ic__next');
          $month = $calendar.find('.ic__month-select');
          $year = $calendar.find('.ic__year-select');
          $day = $calendar.find('.ic__day');

          if (settings.hideArrows) {
            $prev[0].style.display = 'none';
            $next[0].style.display = 'none';
          } else {
            $prev.on('click', function(e) {
              e.preventDefault();
              timeNowLocal.subtract('months', 1);
              if (parseInt(timeNowLocal.format('YYYY')) < fromYear) {
                timeNowLocal.add('months', 1);
              }
              removeHTML();
            });
            $next.on('click', function(e) {
              e.preventDefault();
              timeNowLocal.add('months', 1);
              if (parseInt(timeNowLocal.format('YYYY')) > toYear) {
                timeNowLocal.subtract('months', 1);
              }
              removeHTML();
            });
          }

          $month.on('change', function(e) {
            e.preventDefault();
            var toMonth = $(this).prop('value');
            timeNowLocal.month(parseInt(toMonth));
            removeHTML();
          });
          $year.on('change', function(e) {
            e.preventDefault();
            var toYear = $(this).prop('value');
            timeNowLocal.year(parseInt(toYear));
            removeHTML();
          });

          if (settings.clickable) {
            $day.on('click', function(e) {
              e.preventDefault();
              var toDay = $(this).text();
              timeNowLocal.date(parseInt(toDay));
              timeSelected = moment(timeNowLocal);
              if (settings.format.indexOf('L') >= 0) {
                settings.startDate = timeSelected.format('YYYY-MM-DD');
              } else {
                settings.startDate = timeSelected.format(settings.format);
              }

              // trigger callback function
              if (typeof settings.onClick === 'function') {
                if (settings.format) {
                  if (settings.format === 'moment') {
                    settings.onClick.call(this, timeSelected);
                  } else {
                    settings.onClick.call(
                      this,
                      timeSelected.format(settings.format)
                    );
                  }
                  let a = document.querySelector('.mask-layer');
                  let b = document.querySelector('.screen');
                  a.style.zIndex = '2';
                  b.style.zIndex = '3';
                } else {
                  settings.onClick.call(this, timeSelected.format());
                }
              }

              removeHTML();
            });
          }

          // trigger onReady function
          if (typeof settings.onReady === 'function') {
            if (settings.format) {
              if (settings.format === 'moment') {
                settings.onReady.call(this, timeNowLocal);
              } else {
                settings.onReady.call(
                  this,
                  timeNowLocal.format(settings.format)
                );
              }
            } else {
              settings.onReady.call(this, timeNowLocal.format());
            }
          }

          // go to startDate
          if (settings.startDate && firstStart) {
            firstStart = false;
            timeNowLocal.year(parseInt(timeSelected.format('YYYY')));
            timeNowLocal.month(parseInt(timeSelected.format('M') - 1));
            removeHTML();
          }
        };

        // yarrr!
        prepareData();
        prepareCalendar();
      });
    },
    update: function(options) {
      return this.each(function() {
        this.updateData(options);
      });
    }
  };

  $.fn.ionCalendar = function(method) {
    if (methods[method]) {
      return methods[method].apply(
        this,
        Array.prototype.slice.call(arguments, 1)
      );
    } else if (typeof method === 'object' || !method) {
      return methods.init.apply(this, arguments);
    } else {
      $.error('Method ' + method + ' does not exist for jQuery.ionCalendar');
    }
  };
})(jQuery);

// =====================================================================================================================
// Ion.DatePicker
// support plugin for ion.calendar
(function($) {
  var pluginCount = 0,
    html,
    $body = $(document.body);

  var closePopups = function() {
    $('.ic__datepicker')
      .css('left', '-9999px')
      .css('top', '-9999px');
  };

  var methods = {
    init: function(options) {
      var settings = $.extend(
        {
          lang: 'en',
          sundayFirst: true,
          years: '80',
          clickable: true,
          format: ''
        },
        options
      );

      return this.each(function() {
        var $input = $(this),
          $popup,
          tempData = {},
          self = this,
          x,
          y,
          w,
          selectedDate,
          currentDate,
          testDate;

        //prevent overwrite
        if ($input.data('isActive')) {
          return;
        }
        $input.data('isActive', true);

        pluginCount++;
        this.pluginCount = pluginCount;

        // change settings from data
        tempData.lang = $input.data('lang') || settings.lang;
        if ($input.data('sundayfirst') === false) {
          tempData.sundayFirst = $input.data('sundayfirst');
        }
        tempData.years = $input.data('years') || settings.years;
        tempData.format = $input.data('format') || settings.format;
        $.extend(settings, tempData);

        $body.on('mousedown', function() {
          closePopups();
        });

        settings.onClick = function(date) {
          $input.prop('value', date);
          selectedDate = date;
          closePopups();
        };

        var preparePopup = function() {
          html =
            '<div class="ic__datepicker" id="ic__datepicker-' +
            self.pluginCount +
            '"></div>';
          $body.append(html);
          $popup = $('#ic__datepicker-' + self.pluginCount);
          $popup.ionCalendar(settings);
          $popup.on('mousedown', function(e) {
            e.stopPropagation();
          });
          $input.on('mousedown', function(e) {
            e.stopPropagation();
          });
          $input.on('focusin', function() {
            closePopups();
            openPopup();
          });
          $input.on('keyup', function() {
            openPopup();
          });
        };

        var openPopup = function() {
          x = parseInt($input.offset().left);
          y = parseInt($input.offset().top);
          w = parseInt($input.outerWidth(true));
          //$popup.css('left', x + w + 10 + 'px').css('top', y - 10 + 'px')
          //设置日期选择框的位置
          $popup.css('left', 50 + '%').css('top', 20 + 'rem');
          currentDate = $input.prop('value');
          if (
            currentDate &&
            currentDate !== selectedDate &&
            settings.format.indexOf('L') < 0
          ) {
            testDate = moment(currentDate, settings.format);
            if (testDate.isValid()) {
              $popup.ionCalendar('update', {
                startDate: currentDate
              });
            }
          }
        };

        // yarrr!
        preparePopup();
      });
    },
    close: function() {
      closePopups();
    }
  };

  $.fn.ionDatePicker = function(method) {
    if (methods[method]) {
      return methods[method].apply(
        this,
        Array.prototype.slice.call(arguments, 1)
      );
    } else if (typeof method === 'object' || !method) {
      return methods.init.apply(this, arguments);
    } else {
      $.error('Method ' + method + ' does not exist for jQuery.ionDatePicker');
    }
  };
})(jQuery);
