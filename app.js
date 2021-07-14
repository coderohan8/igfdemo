;(function (e) {
  var t = 60 * 1e3
  var n = function (e) {
    return e.toISOString().replace(/-|:|\.\d+/g, '')
  }
  var r = function (e) {
    return e.end ? n(e.end) : n(new Date(e.start.getTime() + e.duration * t))
  }
  var i = {
    google: function (e) {
      var t = n(e.start)
      var i = r(e)
      var s = encodeURI(
        [
          'https://www.google.com/calendar/render',
          '?action=TEMPLATE',
          '&text=' + (e.title || ''),
          '&dates=' + (t || ''),
          '/' + (i || ''),
          '&details=' + (e.description || ''),
          '&location=' + (e.address || ''),
          '&sprop=&sprop=name:',
        ].join('')
      )
      return (
        '<a class="icon-google test" target="_blank" href="' +
        s +
        '">Google Calendar</a>'
      )
    },
    yahoo: function (e) {
      var r = e.end ? (e.end.getTime() - e.start.getTime()) / t : e.duration
      var i = r < 600 ? '0' + Math.floor(r / 60) : Math.floor(r / 60) + ''
      var s = r % 60 < 10 ? '0' + (r % 60) : (r % 60) + ''
      var o = i + s
      var u = n(new Date(e.start - e.start.getTimezoneOffset() * t)) || ''
      var a = encodeURI(
        [
          'http://calendar.yahoo.com/?v=60&view=d&type=20',
          '&title=' + (e.title || ''),
          '&st=' + u,
          '&dur=' + (o || ''),
          '&desc=' + (e.description || ''),
          '&in_loc=' + (e.address || ''),
        ].join('')
      )
      return (
        '<a class="icon-yahoo test" target="_blank" href="' +
        a +
        '">Yahoo! Calendar</a>'
      )
    },
    ics: function (e, t, i) {
      var s = n(e.start)
      var o = r(e)
      var u = encodeURI(
        'data:text/calendar;charset=utf8,' +
          [
            'BEGIN:VCALENDAR',
            'VERSION:2.0',
            'BEGIN:VEVENT',
            'URL:' + document.URL,
            'DTSTART:' + (s || ''),
            'DTEND:' + (o || ''),
            'SUMMARY:' + (e.title || ''),
            'DESCRIPTION:' + (e.description || ''),
            'LOCATION:' + (e.address || ''),
            'END:VEVENT',
            'END:VCALENDAR',
          ].join('\n')
      )
      return (
        '<a class="' +
        t +
        '" target="_blank" href="' +
        u +
        '">' +
        i +
        ' Calendar</a>'
      )
    },
    ical: function (e) {
      return this.ics(e, 'icon-ical test', 'iCal')
    },
    outlook: function (e) {
      return this.ics(e, 'icon-outlook test', 'Outlook')
    },
  }
  var s = function (e) {
    return {
      google: i.google(e),
      yahoo: i.yahoo(e),
      //   ical: i.ical(e),
      outlook: i.outlook(e),
    }
  }
  var o = function (e) {
    return (
      e.data !== undefined &&
      e.data.start !== undefined &&
      (e.data.end !== undefined || e.data.duration !== undefined)
    )
  }
  var u = function (e, t, n) {
    var r = document.createElement('div')
    r.innerHTML =
      '<label for="checkbox-for-' +
      n +
      '" class="add-to-calendar-checkbox" text-center>+ Add to my Calendar <i class="fa fa-calendar"> </label>'
    r.innerHTML +=
      '<input name="add-to-calendar-checkbox" class="add-to-calendar-checkbox" id="checkbox-for-' +
      n +
      '" type="checkbox">'
    Object.keys(e).forEach(function (t) {
      r.innerHTML += e[t]
    })
    r.className = 'add-to-calendar'
    if (t !== undefined) {
      r.className += ' ' + t
    }
    r.id = n
    return r
  }
  var a = function (e) {
    if (e.options && e.options.class) {
      return e.options.class
    }
  }
  var f = function (e) {
    return e.options && e.options.id
      ? e.options.id
      : Math.floor(Math.random() * 1e6)
  }
  e.createCalendar = function (e) {
    if (!o(e)) {
      console.log('Event details missing.')
      return
    }
    return u(s(e.data), a(e), f(e))
  }
})(this)
