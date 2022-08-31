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
  fullName.oninput = function () {
    console.log(fullName.value);
    if(fullName.value != ''){
      setSuccess(fullName);
    }
    else{
      setError(fullName, '『氏名』を入力してください。');
    }
  };
  fullName.onblur = function () {
    console.log(fullName.value);
    if(fullName.value != ''){
      setSuccess(fullName);
    }
    else{
      setError(fullName, '『氏名』を入力してください。');
    }
  };
  phoneNumber.oninput = function () {
    console.log(phoneNumber.value);
    if(phoneNumber.value != ''){
      setSuccess(phoneNumber);
    }
    else{
      setError(phoneNumber , '『電話番号』を入力してください。');
    }
  };
  phoneNumber.onblur = function () {
    console.log(phoneNumber.value);
    if(phoneNumber.value != ''){
      setSuccess(phoneNumber);
    }
    else{
      setError(phoneNumber , '『電話番号』を入力してください。');
    }
  };
  email.oninput = function () {
    console.log(email.value);
    if(email.value != ''){
      setSuccess(email);
    }
    else{
      setError(email, '『メールアドレス』を入力してください。');
    }
  };
  email.onblur = function () {
    console.log(email.value);
    if(email.value != ''){
      setSuccess(email);
    }
    else{
      setError(email, '『メールアドレス』を入力してください。');
    }
  };
  request.oninput = function () {
    console.log(request.value);
    if(request.value != ''){
      setSuccess(request);
    }
    else{
      setError(request, '『お問い合わせ内容』を入力してください。');
    }
  };
  request.onblur = function () {
    console.log(request.value);
    if(request.value != ''){
      setSuccess(request);
    }
    else{
      setError(request, '『お問い合わせ内容』を入力してください。');
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
   
    console.log(isCheck)
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
    console.log(parentEle.querySelector('small').innerText);
    console.log(parentEle);
  }
  
  function setSuccess(ele){
    ele.parentNode.querySelector('small').classList.remove('is-block');
  }