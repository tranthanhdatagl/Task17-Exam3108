var btnSubmit = document.getElementById('c-btnsubmit');
  btnSubmit.addEventListener('click',function (e){
    var isValid = checkValidate();
    if (isValid){
      alert('リクエストを送信しました');
    }
    else{
      e.preventDefault();
    }
  });

  var fullName = document.getElementById('is-fullName');
  var phoneNumber = document.getElementById('is-phoneNumber');
  var email = document.getElementById('is-email');
  var request = document.getElementById('is-request');
  var error1 = document.getElementById('is-error1');
  fullName.oninput = function () {
    if(fullName.value != ''){
      setSuccess(fullName);
      error1.style.display = 'none';
    }
    else{
      setError(fullName, '『氏名』を入力してください。');
        error1.style.display = 'block';
    }
  };
  fullName.onblur = function () {
    if(fullName.value != ''){
      setSuccess(fullName);
    }
    else{
      setError(fullName, '『氏名』を入力してください。');
      error1.style.display = 'block';
    }
  };
  phoneNumber.oninput = function () {
    if(phoneNumber.value != ''){
      setSuccess(phoneNumber);
      error1.style.display = 'none';
    }
    else{
      setError(phoneNumber , '『電話番号』を入力してください。');
      error1.style.display = 'block';
    }
  };
  phoneNumber.onblur = function () {
    if(phoneNumber.value != ''){
      setSuccess(phoneNumber);
    }
    else{
      setError(phoneNumber , '『電話番号』を入力してください。');
      error1.style.display = 'block';
    }
  };
  email.oninput = function () {
    if(email.value != ''){
      setSuccess(email);
      error1.style.display = 'none';
    }
    else{
      setError(email, '『メールアドレス』を入力してください。');
      error1.style.display = 'block';
    }
  };
  email.onblur = function () {
    if(email.value != ''){
      setSuccess(email);
    }
    else{
      setError(email, '『メールアドレス』を入力してください。');
      error1.style.display = 'block';
    }
  };
  request.oninput = function () {
    if(request.value != ''){
      setSuccess(request);
      error1.style.display = 'none';
    }
    else{
      setError(request, '『お問い合わせ内容』を入力してください。');
      error1.style.display = 'block';
    }
  };
  request.onblur = function () {
    if(request.value != ''){
      setSuccess(request);
    }
    else{
      setError(request, '『お問い合わせ内容』を入力してください。');
      error1.style.display = 'block';
    }
  };
  function checkValidate() {
    var fullNameValue = fullName.value;
    var phoneNumberValue = phoneNumber.value;
    var emailValue = email.value;
    var requestValue = request.value;
    var isCheck = true;
    var error1 = document.getElementById('is-error1');
    
    if(fullNameValue == ''){
      setError(fullName, '『氏名』を入力してください。');
      isCheck = false;
    } else{
      setSuccess(fullName);
    }
  
    if(phoneNumberValue == ''){
      setError(phoneNumber , '『電話番号』を入力してください。');
      isCheck = false;
    } else{
      setSuccess(phoneNumber);
    }
  
    if(emailValue == ''){
      setError(email, '『メールアドレス』を入力してください。');
      isCheck = false;
    } else{
      setSuccess(email);
    }
  
    if(requestValue == ''){
      setError(request, '『お問い合わせ内容』を入力してください。');
      isCheck = false;
    } else{
      setSuccess(request);
    }
  
    if(isCheck == false){
      error1.style.display = 'block';
    } else{
      error1.style.display = 'none';
    }
    return isCheck;
  }
  
  function setError(ele,message){
    var parentEle = ele.parentNode;
    var mbContact = document.getElementById('is-contact');
    var mtSubmit = document.getElementById('is-btnsub');
    parentEle.querySelector('small').innerText = message;
    parentEle.querySelector('small').classList.add('is-block');
    mbContact.classList.add('is-mbcontact');
    mtSubmit.classList.add('is-mtsubmit');
  }
  
  function setSuccess(ele){
    ele.parentNode.querySelector('small').classList.remove('is-block');
  }