  'use strict'
  var mouseupCount = -1;
  var $previousValue;
  var $currentValue;
  // var $previousInputTextValue = $('#result').val();
  var mouseDownEvent;
  var clickTimeout;
  var T9_DATA = {
    '1': ['a', 'b', 'c'],
    '2': ['d', 'e', 'f'],
    '3': ['g', 'h', 'i'],
    '4': ['j', 'k', 'l'],
    '5': ['m', 'n', 'o'],
    '6': ['p', 'q', 'r'],
    '7': ['s', 't', 'u'],
    '8': ['v', 'w', 'x'],
    '9': ['y', 'z', "'"],
  };

  $(document).ready(function(){
      $("#phone").find("button").mouseup(function(event){
        if($currentValue === $(this).data('value')){
            if( mouseupCount < 3 ){
              mouseupCount = mouseupCount + 1
              $('#result').val(t9())
            }
            else{
              mouseupCount = 0
              $('#result').val(t9())
            }
            if(clickTimeout){
              clearTimeout(clickTimeout);
              clickTimeout = setTimeout(clearMouseDownEvent, 500)
            }
            else{
              clickTimeout = setTimeout(clearMouseDownEvent, 500)
            }
          }else{
            $currentValue = $(this).data('value')
            mouseupCount = 0
            $('#result').val(t9())
         }

      });
  })

  function clearMouseDownEvent(){
    $currentValue = null;
    mouseupCount = -1
  }

  // function clearMouseDownEvent(){
  //   if(mouseDownEvent) {
  //     console.log("interal clear timeout");
  //     clearTimeout(mouseDownEvent);
  //     console.log(mouseDownEvent);
  //   }
  // }

  function setInputTextFieldValue(){
    console.log("text field value:", $previousInputTextValue)
    $('#result').val(t9($('#result').val(),$previousInputTextValue));
    $previousInputTextValue += $('#result').val();
  };

  function t9(){
    // button_pressed += text;
    return $('#result').val().substring(0,($('#result').val().length))+T9_DATA[$currentValue][mouseupCount];
  }

// 1,2,3,4,5,6,8
  function clickOn4ValuesButton(){
    return clickMultipleValueButton(4);
  };

// 7, 9
  function clickOn5ValuesButton(){
    return clickMultipleValueButton(5);
  };

// return current button value
  function clickMultipleValueButton(value){
    var index = 0;
    if(mouseupCount > value){
      index = mouseupCount%value;
    }
    else {
      index = mouseupCount - 1;
    }
    return window['button'+$currentValue+'Values'](index);
  };

//  *, 0, #
  function clickOnSingleValueButton(){
    return $currentValue;
  };

//  button values

  function button1Values(index){
    return ['1','.',',','!'][index];
  };

  function button2Values(index){
    return ['2','a','b','c'][index];
  };

  function button3Values(index){
    return ['3','d','e','f'][index];
  };

  function button4Values(index){
    return ['4','g','h','i'][index];
  };

  function button5Values(index){
    return ['5','j','k','l'][index];
  };

  function button6Values(index){
    return ['6','m','n','o'][index];
  };

  function button7Values(index){
    return ['7','p','q','r','s'][index];
  };

  function button8Values(index){
    return ['8','t','4','v'][index];
  };

  function button9Values(index){
    return ['9','w','x','y','z'][index];
  };

// reset keyboar

  function resetKeyboard(){
    // console.log("reset keyboard!!");
    mouseupCount = 0;
    $previousValue = undefined;
    $currentValue = undefined;
  }

