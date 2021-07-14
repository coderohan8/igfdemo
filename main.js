const apiUrl = 'https://belive.multitvsolution.com:3600'
const videoLabel = '6062d3cbec3b9'
const token = videoLabel
var auditoken1 = '609245108bb07'
var auditoken2 = '609245486fa34'
var auditoken3 = '60924564c31a8'
var auditoken4 = '6092458338f56'
const querytoken = '603cbcf3623a1'
var beliveUSerId = 'igf_a_id'
var beliveEmail = 'igf_a_email'
var beliveName = 'igf_a_name'
var belivecompany = 'igf_a_company'
var belivedesignation = 'igf_a_designation'
var beliveFingurePrintID = 'igf_a_id'
var feedbackcheck = ''
var feed = ''
var _env = 'pro'
function validateEmail(email) {
  var re =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  if (re.test(email)) {
    //Email valid. Procees to test if it's from the right domain (Second argument is to check that the string ENDS with this domain, and that it doesn't just contain it)
    /* if (
      email.indexOf ('@upl-ltd.com', email.length - '@upl-ltd.com'.length) !==
        -1 ||
      email.indexOf (
        '@thomascook.in',
        email.length - '@thomascook.in'.length
      ) !== -1 ||
      email.indexOf 
        '@cyberlinks.in',
        email.length - '@cyberlinks.in'.length
      ) !== -1 ||
      email.indexOf (
        '@thomascook.in',
        email.length - '@thomascook.in'.length
      ) !== -1 ||
      email.indexOf ('@swal.in', email.length - '@swal.in'.length) !== -1 ||
      email.indexOf ('@nurture.farm', email.length - '@nurture.farm'.length) !==
        -1
    ) {
      return true;
    } else {
      showmessage ('Please enter your company email id!');
    } /* */
    return true
  } else {
    return showmessage('Please enter valid email id!')
  }
}
function showmessage(message) {
  $('#loginerror').html('')
  $('#loginerror').append(message)
  return false
}
function signup(form) {
  $('#loginerror').html('')
  var password = '123456'
  var email_id = form.email.value
  // var email_id = form.email_id.value;
  // var mobile = form.mobile.value;
  // var industry = form.industry.value;
  // var designation = form.designation.value;
  // var org = form.org.value;
  // var country = form.country.value;
  // var state = form.state.value;
  // var city = form.city.value;
  if (email_id === '') {
    showmessage('All fields are required!')
    return false
  } else {
    var emailvalid = validateEmail(email_id)
    if (!emailvalid) {
      return false
    }
    // if (mobile !== null && mobile.length == 10) {
    //   if (isNaN (mobile)) {
    //     showmessage ('Please enter a valid mobile number.');
    //     form.mobile.focus ();
    //     return false;
    //   }
    // } else {
    //   showmessage ('Please enter a valid mobile number.');
    //   form.mobile.focus ();
    //   return false;
    // }
    var user_name = localStorage.getItem(beliveName)
    if (user_name == null) {
      userName = ''
    } else {
      userName = user_name
    }

    //let url = apiUrl + '/user/' + videoLabel + '/' + email_id;
    let url =
      'https://virtual.multitvsolution.com:7000/beliveapi/v1/auth/attendee/get/token/607e9ea42122d/email/' +
      email_id +
      '/password/' +
      password +
      '/role_id/1'
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        console.log(data) // Prints result from `response.json()` in getRequest
        if (data.code == 0) {
          console.log(data)
          showmessage('Please enter registered email id!')
          //  adduser (form);
          $('#loginerror').show()
        } else {
          // if(mobile === "TOPGUN201920"){
          //$('#sendmessage').show();s
          store(beliveName, data.result.name)
          store(beliveEmail, email_id)

          console.log(data)
          // adduser (form);
          window.location.replace('player.html')
          // }else{
          //   showmessage ('Please enter valid password!');
          // }
        }
      })
      .catch((error) => console.error(error))
  }
} /**/

function adduserboardroom_interest(form) {
  $('#loginerror').html('')
  var name = form.name.value
  var lname = form.lname.value
  var industry = form.company.value
  var designation = form.job.value
  var email_id = form.email.value
  var location = form.country.value
  // var question3 = form.registertype.value

  // var mobile = form.mobile.value
  if ($('#interest1').is(':checked')) {
    var interest1 = form.interest1.value
  }
  if ($('#interest2').is(':checked')) {
    var interest2 = form.interest2.value
  }
  if ($('#interest3').is(':checked')) {
    var interest3 = form.interest3.value
  }
  if ($('#interest4').is(':checked')) {
    var interest4 = form.interest4.value
  }
  if ($('#interest5').is(':checked')) {
    var interest5 = form.interest5.value
  }
  if ($('#interest6').is(':checked')) {
    var interest6 = form.interest6.value
  }
  if ($('#interest7').is(':checked')) {
    var interest7 = form.interest7.value
  }
  if ($('#interest8').is(':checked')) {
    var interest8 = form.interest8.value
  }
  if ($('#interest9').is(':checked')) {
    var interest9 = form.interest9.value
  }
  // if ($('#interest10').is(':checked')) {
  //   var interest10 = form.interest10.value
  // }
  // if ($('#interest11').is(':checked')) {
  //   var interest11 = form.interest11.value
  // }
  // if ($('#interest12').is(':checked')) {
  //   var interest12 = form.interest12.value
  // }
  // if ($('#interest13').is(':checked')) {
  //   var interest13 = form.interest13.value
  // }
  // if ($('#interest14').is(':checked')) {
  //   var interest14 = form.interest14.value
  // }
  // if ($('#interest15').is(':checked')) {
  //   var interest15 = form.interest15.value
  // }
  // if ($('#interest16').is(':checked')) {
  //   var interest16 = form.interest16.value
  // }

  // if ($('#interest17').is(':checked')) {
  //   var interest18 = form.interest18.value
  //   var interest19 = form.interest19.value
  //   var interest20 = form.interest20.value
  // }

  // var city = form.terms.value

  if ($('#option1').is(':checked')) {
    var question1 = form.option1.value
  }

  if ($('#option2').is(':checked')) {
    var question2 = form.option2.value
  }

  // if ($('#option4').is(':checked')) {
  //   var question4 = form.option4.value
  // }

  // if ($('#option5').is(':checked')) {
  //   var question5 = form.option5.value
  // }

  // if ($('#option6').is(':checked')) {
  //   var question6 = form.option6.value
  // }

  // if ($('#option7').is(':checked')) {
  //   var question7 = form.option7.value
  // }

  // if ($('#option8').is(':checked')) {
  //   var question8 = form.option8.value
  // }

  // if ($('#option9').is(':checked')) {
  //   var question9 = form.option9.value
  // }

  // if ($('#option10').is(':checked')) {
  //   var question10 = form.option10.value
  // }
  // if ($('#terms').is(':checked')) {
  //   var questcityion10 = form.terms.value
  // }
  var intarr = []
  // var int1 = JSON.stringify(interest18)
  // var int2 = JSON.stringify(interest19)
  // var int3 = JSON.stringify(interest20)

  intarr.push(
    interest1,
    interest2,
    interest3,
    interest4,
    interest5,
    interest6,
    interest7,
    interest8,
    interest9
  )
  //   interest10,
  //   interest11,
  //   interest12,
  //   interest13,
  //   interest14,
  //   interest15,
  //   interest16,
  //   int1,
  //   int2,
  //   int3

  // others.interest19,
  // others.interest20
  // )
  // var alluserinterest = ''
  var datastored = ''
  intarr.map((item) => {
    if (!item == '') {
      datastored += item + ' ,'
    }
  })
  var datain = datastored.replace('/', ' ', '"', ' ')
  var interestdata = datain.replace(/"/g, ' ')
  // console.log(interestdata)
  // no checkbox checked, do something...
  var isValid
  $('#regform input ').each(function () {
    var element = $(this)
    if (element.val() == '') {
      isValid = false

      $(this).css('border-color', 'red')
      // $('#phoneinp').css('border-color', '#ccc')
    }
    // if (location === 'Country Code') {
    //   $('.phonenumber').css('border-color', 'red')
    //   $('#countrycode').change(function () {
    //     $('.phonenumber').css('border-color', '#ccc')
    //   })
    // }

    $('#regform input').click(function () {
      $(this).focus().css('border-color', '#ccc')
    })
  })
  if (
    name === '' ||
    lname === '' ||
    industry === '' ||
    designation === '' ||
    email_id === '' ||
    location === 'Country Code' ||
    interestdata === ''
    // mobile === '' ||
  ) {
    showmessage('All fields are required!')
    return false
  } else {
    // if ($('.roles:checkbox:checked').length < 2) {
    //   alert('please select minimum 2 intrests!')
    //   return false
    // }

    if (!$('#option1').prop('checked')) {
      showmessage('All fields are required!')
      return false
    }
    if (!$('#option2').prop('checked')) {
      showmessage('All fields are required!')
      return false
    }

    // var emailvalid = validateEmail (email_id);
    // if(!emailvalid){
    //   return false;
    // }
    // if (mobile !== null && mobile.length == 10) {
    //   if (isNaN (mobile)) {
    //     showmessage ('Please enter a valid mobile number.');
    //     form.mobile.focus ();
    //     return false;
    //   }
    // } else {
    //   showmessage ('Please enter a valid mobile number.');
    //   form.mobile.focus ();
    //   return false;
    // }

    // let Emailstr = email_id.toLowerCase();

    var formdata = new FormData()
    formdata.append('name', name + ' ' + lname)
    formdata.append('email', email_id)
    // formdata.append('bio', bio)
    formdata.append('organisation', industry)
    formdata.append('designation', designation)
    formdata.append('field', interestdata)
    formdata.append('country', location)

    fetch(
      'https://virtual.multitvsolution.com:7000/beliveapi/v1/post/boardroom/interests/token/607e9ea42122d',
      {
        method: 'POST',
        body: formdata,
        contentType: false, // NEEDED, DON'T OMIT THIS (requires jQuery 1.6+)
        processData: false,
      }
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data.code)
        if (data.code == 0) {
          // store(beliveEmail, email_id)
          // store(beliveName, name)
          showmessage('Email id is already registered!')
          return false
        } else {
          // store(beliveEmail, email_id)
          // store(beliveName, name)

          showmessage('Thanks for the registration')

          // window.location.replace("player.html")
        }
        sendmailigfboardroom(name, email_id)

        $('#regform').get(0).reset()
        localStorage.setItem('value', 'boardroom')
        setTimeout(() => {
          window.location.replace('thankyou.html')
        }, 3000)
      })
      .catch((err) => console.log(err))
  }
}
function adduser(form) {
  $('#loginerror').html('')
  var name = form.name.value
  var lname = form.lname.value
  var industry = form.company.value
  var designation = form.job.value
  var email_id = form.email.value
  var location = form.country.value
  // var question3 = form.registertype.value

  // var mobile = form.mobile.value
  // if ($('#interest1').is(':checked')) {
  //   var interest1 = form.interest1.value
  // }
  // if ($('#interest2').is(':checked')) {
  //   var interest2 = form.interest2.value
  // }
  // if ($('#interest3').is(':checked')) {
  //   var interest3 = form.interest3.value
  // }
  // if ($('#interest4').is(':checked')) {
  //   var interest4 = form.interest4.value
  // }
  // if ($('#interest5').is(':checked')) {
  //   var interest5 = form.interest5.value
  // }
  // if ($('#interest6').is(':checked')) {
  //   var interest6 = form.interest6.value
  // }
  // if ($('#interest7').is(':checked')) {
  //   var interest7 = form.interest7.value
  // }
  // if ($('#interest8').is(':checked')) {
  //   var interest8 = form.interest8.value
  // }
  // if ($('#interest9').is(':checked')) {
  //   var interest9 = form.interest9.value
  // }
  // if ($('#interest10').is(':checked')) {
  //   var interest10 = form.interest10.value
  // }
  // if ($('#interest11').is(':checked')) {
  //   var interest11 = form.interest11.value
  // }
  // if ($('#interest12').is(':checked')) {
  //   var interest12 = form.interest12.value
  // }
  // if ($('#interest13').is(':checked')) {
  //   var interest13 = form.interest13.value
  // }
  // if ($('#interest14').is(':checked')) {
  //   var interest14 = form.interest14.value
  // }
  // if ($('#interest15').is(':checked')) {
  //   var interest15 = form.interest15.value
  // }
  // if ($('#interest16').is(':checked')) {
  //   var interest16 = form.interest16.value
  // }

  // if ($('#interest17').is(':checked')) {
  //   var interest18 = form.interest18.value
  //   var interest19 = form.interest19.value
  //   var interest20 = form.interest20.value
  // }

  // var city = form.terms.value

  if ($('#option1').is(':checked')) {
    var question1 = form.option1.value
  }

  if ($('#option2').is(':checked')) {
    var question2 = form.option2.value
  }

  // if ($('#option4').is(':checked')) {
  //   var question4 = form.option4.value
  // }

  // if ($('#option5').is(':checked')) {
  //   var question5 = form.option5.value
  // }

  // if ($('#option6').is(':checked')) {
  //   var question6 = form.option6.value
  // }

  // if ($('#option7').is(':checked')) {
  //   var question7 = form.option7.value
  // }

  // if ($('#option8').is(':checked')) {
  //   var question8 = form.option8.value
  // }

  // if ($('#option9').is(':checked')) {
  //   var question9 = form.option9.value
  // }

  // if ($('#option10').is(':checked')) {
  //   var question10 = form.option10.value
  // }
  // if ($('#terms').is(':checked')) {
  //   var questcityion10 = form.terms.value
  // }

  // no checkbox checked, do something...
  var isValid
  $('#regform input ').each(function () {
    var element = $(this)
    if (element.val() == '') {
      isValid = false

      $(this).css('border-color', 'red')
      // $('#phoneinp').css('border-color', '#ccc')
    }
    // if (location === 'Country Code') {
    //   $('.phonenumber').css('border-color', 'red')
    //   $('#countrycode').change(function () {
    //     $('.phonenumber').css('border-color', '#ccc')
    //   })
    // }

    $('#regform input').click(function () {
      $(this).focus().css('border-color', '#ccc')
    })
  })
  if (
    name === '' ||
    lname === '' ||
    industry === '' ||
    designation === '' ||
    email_id === '' ||
    location === 'Country Code'
    // mobile === '' ||
  ) {
    showmessage('All fields are required!')
    return false
  } else {
    // if ($('.roles:checkbox:checked').length < 2) {
    //   alert('please select minimum 2 intrests!')
    //   return false
    // }

    if (!$('#option1').prop('checked')) {
      showmessage('All fields are required!')
      return false
    }
    if (!$('#option2').prop('checked')) {
      showmessage('All fields are required!')
      return false
    }

    // var emailvalid = validateEmail (email_id);
    // if(!emailvalid){
    //   return false;
    // }
    // if (mobile !== null && mobile.length == 10) {
    //   if (isNaN (mobile)) {
    //     showmessage ('Please enter a valid mobile number.');
    //     form.mobile.focus ();
    //     return false;
    //   }
    // } else {
    //   showmessage ('Please enter a valid mobile number.');
    //   form.mobile.focus ();
    //   return false;
    // }

    // let Emailstr = email_id.toLowerCase();
    // var intarr = []
    // var int1 = JSON.stringify(interest18)
    // var int2 = JSON.stringify(interest19)
    // var int3 = JSON.stringify(interest20)

    // intarr.push(
    //   interest1,
    //   interest2,
    //   interest3,
    //   interest4,
    //   interest5,
    //   interest6,
    //   interest7,
    //   interest8,
    //   interest9,
    //   interest10,
    //   interest11,
    //   interest12,
    //   interest13,
    //   interest14,
    //   interest15,
    //   interest16,
    //   int1,
    //   int2,
    //   int3

    // others.interest19,
    // others.interest20
    // )
    // var alluserinterest = ''
    // var datastored = ''
    // intarr.map((item) => {
    //   if (!item == '') {
    //     datastored += item + ' ,'
    //   }
    // })
    // var datain = datastored.replace('/', ' ', '"', ' ')
    // var interestdata = datain.replace(/"/g, ' ')

    let url = apiUrl + '/users'
    fetch(url, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        //  salutation: designation,
        name: name,
        lastname: lname,
        org: industry, //shop or firm or company

        job: designation,
        email: email_id.toLowerCase(),
        phone: location,
        // location: location, //state --
        // industry: industry,
        // city: city,

        question1: question1,
        question2: question2,
        // question3: question3,

        // question8: question5,
        // question9: question6,
        // question10: question7,
        // question11: question8,
        // location: question9, //state --
        // industry: question10,
        // city: '1',

        eventname: videoLabel,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        if (data.id == 'exist') {
          // store(beliveEmail, email_id)
          // store(beliveName, name)
          showmessage('Email id is already registered!')
          return false
        } else {
          // store(beliveEmail, email_id)
          // store(beliveName, name)

          showmessage('Thanks for the registration')

          // window.location.replace("player.html")
        }
        sendmailigf(name, email_id)

        $('#regform').get(0).reset()
        setTimeout(() => {
          window.location.replace('thankyou.html')
        }, 3000)
      })
      .catch((err) => console.log(err))
  }
}
function speakeradduser(form) {
  $('#loginerror').html('')
  var title = form.title.value
  var fname = form.fname.value
  var lname = form.lname.value
  var location = form.country.value
  var mobile = form.mobile.value
  var company = form.company.value
  var designation = form.designation.value
  var email_id = form.email.value
  var optionradio = form.optradio.value
  var bio = form.bio.value
  var twitter = form.twitter.value
  var linkedin = form.Linkedin.value
  var s_name = form.optionradio.value
  // var s_time = 'other'
  var file = form.imgfile.value
  // console.log(file)

  //
  if (
    title === '' ||
    fname === '' ||
    lname === '' ||
    company === '' ||
    designation === '' ||
    email_id === '' ||
    bio === '' ||
    mobile === '' ||
    location === 'Country Code' ||
    // twitter === '' ||
    // linkedin === '' ||
    s_name === '' ||
    // s_time === '' ||
    file === '' ||
    optionradio === ''
  ) {
    alert('All fields are required!')
    return false
  } else {
    var file = $('input[type=file]')[0].files[0]
    if ($('#radio1').is(':checked')) {
      var title1 = form.title1.value
      var fname1 = form.fname1.value
      var lname1 = form.lname1.value
      var email1 = form.email1.value
      var sessionname = title1 + ' ' + fname1 + ' ' + lname1
      var session_namevalid = allLetter(sessionname)
      if (!session_namevalid) {
        return false
      }
    }
    var fullname = title + ' ' + fname + ' ' + lname
    var namevalid = allLetter(fullname)
    if (!namevalid) {
      return false
    }
    var emailvalid = validateEmail(email_id)
    if (!emailvalid) {
      return false
    }
    //     name:divakar
    // email:dvkr@gmail.com
    // bio:bio
    // designation:designation
    // company:company
    // youtube:youtube
    // twitter:twitter
    // linkedin:linkedin
    // facebook:facebook
    var formdata = new FormData()
    formdata.append('name', fullname)
    formdata.append('email', email_id)
    formdata.append('bio', bio)
    formdata.append('company', company)
    formdata.append('designation', designation)
    formdata.append('twitter', twitter ? twitter : 'other')
    formdata.append('linkedin', linkedin ? linkedin : 'other')
    formdata.append('youtube', s_name)
    formdata.append('facebook', 'other')
    formdata.append('file', file)
    formdata.append('mobile', location + '' + mobile)
    formdata.append('session_name', sessionname ? sessionname : 'other')
    formdata.append('session_email', email1 ? email1 : 'other')

    fetch(
      'https://virtual.multitvsolution.com:7000/beliveapi/v1/speaker/add/token/' +
        videoLabel,
      {
        method: 'POST',
        body: formdata,
        contentType: false, // NEEDED, DON'T OMIT THIS (requires jQuery 1.6+)
        processData: false,
      }
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        alert('Thank you for Registration')
        $('#speakerform').get(0).reset()
      })

      .catch((err) => console.log(err))
  }
}

function feedbackadduser(form) {
  $('#loginerror').html('')

  var name = form.name.value
  // var lname =form.lname.value
  var industry = form.company.value
  var job = form.job.value
  let email_id = form.email.value
  // var location = form.country.value;
  var country = form.country.value
  var mobile = form.mobile.value
  var question1 = form.question1.value
  var question2 = form.question2.value

  // console.log(question2)
  // var question2 = form.option2.value;
  // var question3= form.option3.value;
  // var question4 = form.option4.value;
  // var question5 = form.option5.value;
  // var question6 = form.option6.value;
  // var os =form.option7.value;
  // var ua =form.option8.value
  // var org = form.option9.value;
  // var city = form.option10.value;
  // var designation = form.terms.value;

  // no checkbox checked, do something...

  if (
    name === '' ||
    industry === '' ||
    job === '' ||
    email_id === '' ||
    mobile === '' ||
    question1 === 'select' ||
    country === 'select'
  ) {
    showmessage('All fields are required!')
    return false
  } else {
    let emailmobile = email_id + ',' + country + mobile
    // if($('.roles:checkbox:checked').length < 2){
    //   alert('please select minimum 2 intrests!')
    //   return false;
    // }
    var emailvalid = validateEmail(email_id)
    if (!emailvalid) {
      return false
    }
    // if (mobile !== null && mobile.length == 10) {
    //   if (isNaN (mobile)) {
    //     showmessage ('Please enter a valid mobile number.');
    //     form.mobile.focus ();
    //     return false;
    //   }
    // } else {
    //   showmessage ('Please enter a valid mobile number.');
    //   form.mobile.focus ();
    //   return false;
    // }

    // let Emailstr = email_id.toLowerCase();
    let url = apiUrl + '/question'
    fetch(url, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        //  salutation: ,
        name: name,
        // lastname: lname,
        // phone: mobile,
        email: emailmobile,
        designation: job,
        // location: location, //state
        company: industry,
        // city: city,
        // org: org, //shop or firm or company
        question: question1,
        reply: {
          user_name: question2,
        },
        // question3: question3,
        // question4: question4,
        // question5: question5,
        // question6: question6,
        // os: os,
        // ua: ua,
        // logincount: Number,
        // eventname: String,
        eventname: querytoken,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        if (data.id == 'exist') {
          store(beliveEmail, email_id)
          store(beliveName, name)
          //  showmessage ('your query is already ');
        } else {
          store(beliveEmail, email_id)
          store(beliveName, name)
          //   mailsent(email_id);
          //   $("#signup").trigger("reset");
          //   $('#myModal').modal('show');
          // showmessage('Thanks for the registration')
          // window.location.replace("player.html")
        }
        alert("Thank you we'll get back to you soon!")
        $('.contactform').get(0).reset()
      })
      .catch((err) => console.log(err))
  }
}

function store(filedname, uName) {
  localStorage.setItem(filedname, uName)
}

// function sendQuestion_feedback (form) {
//   let query = form.feedbackTxt.value;

//   if (query == '') {
//     $ ('#feedbackTxt').focus ();
//     return false;
//   } else {
//     $ ('#feedbackTxt').val ('');
//     var user_name = localStorage.getItem (beliveName);
//     var id = localStorage.getItem (beliveUSerId);
//     var email = localStorage.getItem (beliveEmail);
//     let url = apiUrl + '/question';
//     //var url = "http://localhost:3600/comment";
//     fetch (url, {
//       method: 'POST',
//       headers: {
//         Accept: 'application/json',
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify ({
//         email: email,
//         question: query,
//         name: user_name,
//         eventname: videoLabel,
//         status: 'false',
//       }),
//     })
//       .then (res => res.json ())
//       .then (data => {
//         console.log (data);
//         getFeedData ();
//       })
//       .catch (err => console.log (err));
//   }
// }

function sendMessage(form) {
  var query = form.feedbackTxt.value
  if (query == '') {
    $('#feedbackTxt').focus()
    return false
  } else {
    $('#feedbackTxt').val('')
    var user_name = localStorage.getItem(beliveName)
    var id = localStorage.getItem(beliveUSerId)
    let url = apiUrl + '/comment'
    //var url = "http://localhost:3600/comment";
    fetch(url, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        user_id: id,
        message: query,
        user_name: user_name,
        status: 'false',
        eventname: videoLabel,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        getChatData()
      })
      .catch((err) => console.log(err))
  }
}
var positionC = true
function timer() {
  $('#login').hide()
  $('#timerDiv').show()
  $('#AfterLogin').show()
  $('#message').hide()
  $('#timer').show()
  $('#body').removeClass('bg')
  $('#body').addClass('timerBg')
  // getFeedData()

  //   getChatData ();
  //   setInterval (function () {
  //     getChatData ();
  //     // getFeedData();
  //   }, 30000);
  //$('#playerSec').hide();
  var countDownDate = new Date('December 10, 2020 13:30:00').getTime()
  var dateDB = new Date()
  var x = setInterval(function () {
    var now = new Date().getTime()
    var distance = countDownDate - now
    var days = Math.floor(distance / (1000 * 60 * 60 * 24))
    var hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    )
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
    var seconds = Math.floor((distance % (1000 * 60)) / 1000)

    // document.getElementById('timer').innerHTML =
    //   '<h1 class="clockH1">COUNT DOWN</h1><div id="clockdiv"><div><span class="days">' +
    //   days +
    //   '</span><div class="smalltext">Days</div></div><div><span class="hours">' +
    //   hours +
    //   '</span><div class="smalltext">Hours</div></div><div><span class="minutes">' +
    //   minutes +
    //   '</span><div class="smalltext">Minutes</div></div><div><span class="seconds">' +
    //   seconds +
    //   '</span><div class="smalltext">Seconds</div></div></div>';
    // days + 'd :' + hours + 'h :' + minutes + 'm :' + seconds + 's ';
    document.getElementById('timer').innerHTML =
      '<div id="clockdiv"><span class="days">' +
      days +
      '</span><div class="smalltext">Days</div></div><div><span class="hours">' +
      hours +
      '</span><div class="smalltext">Hours</div></div><div><span class="minutes">' +
      minutes +
      '</span><div class="smalltext">Minutes</div></div><div><span class="seconds">' +
      seconds +
      '</span><div class="smalltext">Seconds</div></div></div>'
    if (distance < 0) {
      clearInterval(x)
      positionC = false
      $('#timer').hide()
      $('#timerDiv').hide()
    }
  }, 1000)
  // player ();

  //getMessage();
}
function getFeedData(videotoken) {
  // console.log(videotoken)
  stopFeedback()
  $('#feedbackR').html('')
  //let url = apiUrlComment+'/comments/'+videoLabel;
  var email = localStorage.getItem(beliveEmail)
  let url = apiUrl + '/questionbyid/' + videotoken + '/false/' + email + '/50/0'
  fetch(url)
    .then((response) => {
      return response.json()
    })
    .then((data) => {
      // Work with JSON data here
      const chatData = data.map((chatcard, i) => {
        // timeago = $.timeago(chatcard.createdAt);
        var adminreply = ''
        if (chatcard.hasOwnProperty('reply') && chatcard.reply.message != '') {
          adminreply =
            '<div style="margin-top:10px;"><div class="direct-chat-name"><span style="margin-top:10px;">' +
            chatcard.reply.user_name +
            '</span>&nbsp;:&nbsp;<span class="direct-chat-text">' +
            chatcard.reply.message +
            '</span></div></div>'
        } else {
          adminreply = ''
        }
        var card =
          '<div class="direct-chat-msg clearfix" style="padding-top: 4%"></div>' +
          '<div class="direct-chat-name">' +
          chatcard.name +
          '&nbsp;:&nbsp;<span class="direct-chat-text">' +
          chatcard.question +
          '</span></div><div class="clearfix"></div>' +
          adminreply +
          '</div>'

        $('#feedbackR').append(card)
        // var profileImage = $('#' + pid).text(intials);
      })
    })
    .catch((err) => {
      console.log(err)
    })
}
function getFeedDataqna() {
  stopFeedback()
  $('#chat').html('')
  //let url = apiUrlComment+'/comments/'+videoLabel;
  var email = localStorage.getItem(beliveEmail)
  let url =
    apiUrl +
    '/questionbyid/' +
    screentoken +
    '_qna' +
    '/false/' +
    email +
    '/50/0'
  fetch(url)
    .then((response) => {
      return response.json()
    })
    .then((data) => {
      // Work with JSON data here
      const chatData = data.map((chatcard, i) => {
        // timeago = $.timeago(chatcard.createdAt);
        var adminreply = ''
        if (chatcard.hasOwnProperty('reply') && chatcard.reply.message != '') {
          adminreply =
            '<div style="margin-top:10px;"><div class="direct-chat-name"><span style="margin-top:10px;">' +
            chatcard.reply.user_name +
            '</span>&nbsp;:&nbsp;<span class="direct-chat-text">' +
            chatcard.reply.message +
            '</span></div></div>'
        } else {
          adminreply = ''
        }
        var card =
          '<div class="direct-chat-msg clearfix" style="padding-top: 4%"></div>' +
          '<div class="direct-chat-name">' +
          chatcard.name +
          '&nbsp;:&nbsp;<span class="direct-chat-text">' +
          chatcard.question +
          '</span></div><div class="clearfix"></div>' +
          adminreply +
          '</div>'

        // $('#chat').append(card)
        // var profileImage = $('#' + pid).text(intials);
      })
    })
    .catch((err) => {
      console.log(err)
    })
}
function sendQuestion(form) {
  let query = form.query.value
  if (query == '') {
    $('#query').focus()
    return false
  } else {
    $('#query').val('')
    var user_name = localStorage.getItem(beliveName)
    var id = localStorage.getItem(beliveUSerId)
    var email = localStorage.getItem(beliveEmail)
    let url = apiUrl + '/question'
    //var url = "http://localhost:3600/comment";
    fetch(url, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: email,
        question: query,
        name: user_name,
        eventname: auditoken1,
        status: 'false',
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        getFeedData(auditoken1)
      })
      .catch((err) => console.log(err))
  }
}

function sendQuestionqna(form) {
  let query = form.feedbackTxt.value
  if (query == '') {
    $('#feedbackTxt').focus()
    return false
  } else {
    $('#feedbackTxt').val('')
    var user_name = localStorage.getItem(beliveName)
    var id = localStorage.getItem(beliveUSerId)
    var email = localStorage.getItem(beliveEmail)
    let url = apiUrl + '/question'
    //var url = "http://localhost:3600/comment";
    fetch(url, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: email,
        question: query,
        name: user_name,
        eventname: auditoken1 + '_qna',
        status: 'false',
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        var thanksmsg =
          '<div class="alert alert-success">Thank you for your question. Our team is looking into getting your query addressed.</div>'
        $('#chat').append(thanksmsg)

        setTimeout(function () {
          $('#chat').html('')
          $('#fullHeightModalRight3').modal('hide')
          console.log('nodata')
        }, 5000)
      })
      .catch((err) => console.log(err))
  }
}
function sendQuestions2(form) {
  let query = form.query.value
  if (query == '') {
    $('#query').focus()
    return false
  } else {
    $('#query').val('')
    var user_name = localStorage.getItem(beliveName)
    var id = localStorage.getItem(beliveUSerId)
    var email = localStorage.getItem(beliveEmail)
    let url = apiUrl + '/question'
    //var url = "http://localhost:3600/comment";
    fetch(url, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: email,
        question: query,
        name: user_name,
        eventname: auditoken2,
        status: 'false',
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        getFeedData(auditoken2)
      })
      .catch((err) => console.log(err))
  }
}

function sendQuestionqnas2(form) {
  let query = form.feedbackTxt.value
  if (query == '') {
    $('#feedbackTxt').focus()
    return false
  } else {
    $('#feedbackTxt').val('')
    var user_name = localStorage.getItem(beliveName)
    var id = localStorage.getItem(beliveUSerId)
    var email = localStorage.getItem(beliveEmail)
    let url = apiUrl + '/question'
    //var url = "http://localhost:3600/comment";
    fetch(url, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: email,
        question: query,
        name: user_name,
        eventname: auditoken2 + '_qna',
        status: 'false',
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        var thanksmsg =
          '<div class="alert alert-success">Thank you for your question. Our team is looking into getting your query addressed.</div>'
        $('#chat').append(thanksmsg)

        setTimeout(function () {
          $('#chat').html('')
          $('#fullHeightModalRight3').modal('hide')
          console.log('nodata')
        }, 5000)
      })
      .catch((err) => console.log(err))
  }
}
function sendQuestions3(form) {
  let query = form.query.value
  if (query == '') {
    $('#query').focus()
    return false
  } else {
    $('#query').val('')
    var user_name = localStorage.getItem(beliveName)
    var id = localStorage.getItem(beliveUSerId)
    var email = localStorage.getItem(beliveEmail)
    let url = apiUrl + '/question'
    //var url = "http://localhost:3600/comment";
    fetch(url, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: email,
        question: query,
        name: user_name,
        eventname: auditoken3,
        status: 'false',
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        getFeedData(auditoken3)
      })
      .catch((err) => console.log(err))
  }
}

function sendQuestionqnas3(form) {
  let query = form.feedbackTxt.value
  if (query == '') {
    $('#feedbackTxt').focus()
    return false
  } else {
    $('#feedbackTxt').val('')
    var user_name = localStorage.getItem(beliveName)
    var id = localStorage.getItem(beliveUSerId)
    var email = localStorage.getItem(beliveEmail)
    let url = apiUrl + '/question'
    //var url = "http://localhost:3600/comment";
    fetch(url, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: email,
        question: query,
        name: user_name,
        eventname: auditoken3 + '_qna',
        status: 'false',
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        var thanksmsg =
          '<div class="alert alert-success">Thank you for your question. Our team is looking into getting your query addressed.</div>'
        $('#chat').append(thanksmsg)

        setTimeout(function () {
          $('#chat').html('')
          $('#fullHeightModalRight3').modal('hide')
          console.log('nodata')
        }, 5000)
      })
      .catch((err) => console.log(err))
  }
}
function sendQuestions4(form) {
  let query = form.query.value
  if (query == '') {
    $('#query').focus()
    return false
  } else {
    $('#query').val('')
    var user_name = localStorage.getItem(beliveName)
    var id = localStorage.getItem(beliveUSerId)
    var email = localStorage.getItem(beliveEmail)
    let url = apiUrl + '/question'
    //var url = "http://localhost:3600/comment";
    fetch(url, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: email,
        question: query,
        name: user_name,
        eventname: auditoken4,
        status: 'false',
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        getFeedData(auditoken4)
      })
      .catch((err) => console.log(err))
  }
}

function sendQuestionqnas4(form) {
  let query = form.feedbackTxt.value
  if (query == '') {
    $('#feedbackTxt').focus()
    return false
  } else {
    $('#feedbackTxt').val('')
    var user_name = localStorage.getItem(beliveName)
    var id = localStorage.getItem(beliveUSerId)
    var email = localStorage.getItem(beliveEmail)
    let url = apiUrl + '/question'
    //var url = "http://localhost:3600/comment";
    fetch(url, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: email,
        question: query,
        name: user_name,
        eventname: auditoken4 + '_qna',
        status: 'false',
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        var thanksmsg =
          '<div class="alert alert-success">Thank you for your question. Our team is looking into getting your query addressed.</div>'
        $('#chat').append(thanksmsg)

        setTimeout(function () {
          $('#chat').html('')
          $('#fullHeightModalRight3').modal('hide')
          console.log('nodata')
        }, 5000)
      })
      .catch((err) => console.log(err))
  }
}

function logout() {
  window.localStorage.clear()
  window.location.replace('index.html')
}
function getChatData() {
  $('#chat').html('')

  console.log(user_id)

  //let url = apiUrlComment+'/comments/'+videoLabel;
  let url = apiUrl + '/comments/' + videoLabel + '/false/'
  fetch(url)
    .then((response) => {
      return response.json()
    })
    .then((data) => {
      console.log(data)

      // Work with JSON data here
      const chatData = data.map((chatcard, i) => {
        //console.log(chatcard);

        // timeago = $.timeago (chatcard.createdAt);
        pid = 'profileImage' + i
        var nameC = chatcard.user_name.split(' ')
        var intials = user_name ? user_name.charAt(0).toUpperCase() : 'D'
        //   var id = localStorage.getItem(hclUSerId);
        var card =
          '<p class="left clearfix"><span class="chat-img pull-left"><div class="profileImage" id="' +
          // pid +
          '"></div></span><div class="chat-body clearfix"><div class="header"><strong class="primary-font">' +
          chatcard.user_name +
          '</strong><small class="pull-right text-muted"></span>' +
          // timeago +
          '</small></div><p>' +
          chatcard.message +
          '</p></div></p>'
        $('#chat').append(card)
        var profileImage = $('#' + pid).text(intials)
      })
    })
    .catch((err) => {
      console.log(err)
    })
}
$('#chatboxhide2').hide()
$('#chatboxhide1').click(function () {
  $('#chatboxhide').slideToggle()
  $('#chatboxhide2').show()
  if (positionC) {
    $('#message').attr('style', 'position: relative!important')
  }
  console.log('hiding...')
})
$('#chatboxhide2').click(function () {
  $('#chatboxhide').slideToggle()
  $('#chatboxhide2').hide()
  console.log('hiding...')
})
function submitfeed_old(form) {
  var q1 = form.f1.value
  var q2 = form.f2.value
  var q3 = form.f3.value
  // var q4 = form.f4.value;
  // var q5 = form.f5.value;
  // var q6 = form.f6.value;
  // var q7 = form.f7.value;
  if (
    (q1 == null || q1 == '', q2 == null || q2 == '', q3 == null || q3 == '')
  ) {
    alert('All fields are required!')
  } else {
    console.log(q1 + q2 + q3)
    var user_name = localStorage.getItem(beliveName)
    var id = localStorage.getItem(beliveUSerId)
    var email = localStorage.getItem(beliveEmail)
    let url = apiUrl + '/feedback'
    fetch(url, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: user_name,
        phone: $('#mobile').val() ? $('#mobile').val() : '9999999999',
        email: email,
        question1: q1,
        question2: q2,
        question3: q3,

        eventname: videoLabel,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        $('#feedbackform').trigger('reset')
        $('#feedmsg').append('Thanks for your feedback!')
        setTimeout(function () {
          $('#feedmsg').html('')
        }, 5000)
      })
      .catch((err) => console.log(err))
  }
}

function giveVote(form) {
  cval = form.radioGroup.value
  // alert(token);
  // console.log(radioVal);
  // let getthevalue = $(e).attr('id');
  //cval = $('#' + getthevalue).val();
  pollObjId = $('#pollObjId').val()
  let user_email = localStorage.getItem(beliveEmail)
  let user_name = localStorage.getItem(beliveName)
  data = {
    pollObjId: pollObjId,
    choice: cval,
    token: token,
    email_id: user_email,
    name: user_name,
  }
  socket.emit('pushpollvote', data)
  // pollDiv = '<div class="box"><div class="head">Poll is closed now.</div><div class="content"></div></div>';
  //$("#addPoll").html(pollDiv);
}
function enableFeedback() {
  var dateCheck = new Date()
  dayofevent = String(dateCheck.getDate()).padStart(2, '0')
  $('.Buttondis, .Buttondis1, .Buttondis2, .Buttondis3').attr('disabled', true)

  if (
    dayofevent == 06 &&
    dateCheck.getHours() >= 17 &&
    dateCheck.getMinutes() >= 53
  ) {
    $('.Buttondis, .Buttondis1, .Buttondis2, .Buttondis3').attr(
      'disabled',
      false
    )
    clearInterval(feedbackcheck)
  }
}
function stopFeedback() {
  var dateFeed = new Date()
  dayofevent = String(dateFeed.getDate()).padStart(2, '0')
  if (
    dayofevent == 06 &&
    dateFeed.getHours() >= 15 &&
    dateFeed.getMinutes() >= 50
  ) {
    clearInterval(feed)
  }
  return true
}
function mailsent(email) {
  console.log(email)
  var url = 'https://belive.mobi/phpmailer/send1_mail.php'
  $.ajax({
    type: 'GET',
    url: url,
    data: { email_id: email },
    success: function (response) {
      console.log(response)
    },
    error: function () {
      // $('.form_loader').show();
    },
  })
}
// var socket ;
// socket = io.connect(getApiUrl('/'));
// socket.emit('pushpoll', {
//   token: token,
// });
// socket.on(token, function (data) {
//   $('#poll').html(data);
//   if (
//     $('#nopoll').text() == 'E-votes will be commencing shortly.') {
//     $('#pollnot').text('0');
//   } else {
//     openPoll();
//     $('#pollnot').text('1');
//   }
// });

function check(form) {
  $('#loginerror').html('')
  var emailformvalue = form.email.value
  console.log(emailformvalue)
  // var emailvalue = $('#email_id').val()

  var email_id = emailformvalue
  //  var fname =form.fname.value;

  if (email_id === '') {
    showmessage('All fields are Required')
    return false
  }
  // if (email_id == null || email_id == '') {
  //   $('#signinerror').append('Email id is required!');
  //   return false;
  // }
  else {
    if (email_id.indexOf('@', 0) < 0) {
      $('#loginerror').append('Please check your email id!')
      form.email.focus()
      return false
    }
    if (email_id.indexOf('.', 0) < 0) {
      $('#loginerror').append('Please check your email id!')
      form.email.focus()
      return false
    }
    var user_name = localStorage.getItem(beliveName)
    if (user_name == null) {
      userName = ''
    } else {
      userName = user_name
    }

    let url = apiUrl + '/user/' + videoLabel + '/' + email_id.toLowerCase()
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        console.log(data) // Prints result from `response.json()` in getRequest
        if (data.length == 0) {
          // $('#signinerror').append(
          //   'Please check your email id and try again!'
          // );
          // $('#signinerror').show();
          showmessage('Please check your email id and try again!')
          // return false;
          //$("#email").val("");
        } else {
          // $('#sendmessage').show();
          console.log(data)
          const userData = data.map((user, i) => {
            // if(password == user.org){
            store(beliveUSerId, user._id)
            store(beliveName, user.name)
            store(beliveEmail, user.email)
            store(belivecompany, user.org)
            store(belivedesignation, user.job)

            // store('org', user.org);

            window.location.replace('player.html')

            // }
            // else {
            //   showmessage('please check you password and try again!')
            //   return false;
            // }

            // store('job', user.job);
            // store('org', user.org);
          })
        }
      })
      .catch((error) => {
        $('#loginerror').append('Please check your email id and try again!')
        console.error(error)
      })
  }
}

$(function () {
  $('form').submit(function () {
    return false
  })
})

function Trackuser(audi) {
  var fname = localStorage.getItem(beliveName)
  var email = localStorage.getItem(beliveEmail)
  var id = localStorage.getItem(beliveUSerId)
  var company = localStorage.getItem(belivecompany)
  var designation = localStorage.getItem(belivedesignation)
  var todayDate = new Date().toISOString().slice(0, 10)
  var d = new Date()
  var localtime = d.toLocaleTimeString('en-US', { hour12: false })
  console.log(todayDate, localtime)
  var created = todayDate + ' ' + localtime

  //  var type = localStorage.getItem (beliveType);
  //console.log(email+'Name'+fname+'ID'+id+'Type'+type);
  var form = new FormData()
  form.append('user_id', id)
  // form.append('audi', 204)
  form.append('event_id', '10005')
  form.append('name', fname)
  form.append('email', email)
  form.append('action', audi)
  form.append('company', company)
  form.append('designation', designation)
  form.append('created', created)

  fetch(
    'https://virtual.multitvsolution.com:7000/beliveapi/v1/analytics/user/history/add',
    {
      method: 'POST',
      body: form,
    }
  )
    .then((response) => response.json())
    .catch((error) => console.error('Error:', error))
    .then((response) => {
      console.log('Success:', JSON.stringify(response))
    })
}
function getcountrycode() {
  let dropdown = $('#countrycode')

  dropdown.empty()

  dropdown.append('<option selected="true" disabled></option>')
  dropdown.prop('selectedIndex', 0)

  const url = 'js/code.json'

  // Populate dropdown with list of provinces
  $.getJSON(url, function (data) {
    $.each(data, function (key, entry) {
      dropdown.append(
        $('<option></option>')
          .attr('value', entry.name)

          .text(`${entry.name} (${entry.code})`)
      )
    })
  })
}

function changelogutbtn() {
  var user_name = localStorage.getItem(beliveEmail)
  if (user_name == null) {
    $('#logoutbtn').hide()
    $('#registerbtn').show()
    userName = ''
    console.log('nt#lgn')
  } else {
    $('#logoutbtn').show()
    $('#registerbtn').hide()
  }
}
function allLetter(inputtxt) {
  var letters = /^[a-zA-Z ]*$/
  if (inputtxt.match(letters)) {
    return true
  } else {
    showmessage('Please enter your name alphabet characters only!')
    return false
  }
}

function sendmailigf(name, email_id) {
  var formData = new FormData()
  formData.append('name', name)
  formData.append('email', email_id)
  $.ajax({
    type: 'POST',
    url: 'https://goapi.multitvsolution.com:7000/virtualapi/v1/auth/sendemail/event_id/10',
    data: formData,
    processData: false,
    contentType: false,
    success: function (response) {
      console.log(response)
    },
    error: function (errResponse) {
      console.log(errResponse)
    },
  })
}

function sendmailigfboardroom(name, email_id) {
  var formData = new FormData()
  formData.append('name', name)
  formData.append('email', email_id)
  $.ajax({
    type: 'POST',
    url: 'https://goapi.multitvsolution.com:7000/virtualapi/v1/auth/sendemail/event_id/14',
    data: formData,
    processData: false,
    contentType: false,
    success: function (response) {
      console.log(response)
    },
    error: function (errResponse) {
      console.log(errResponse)
    },
  })
}
