  'use strict'
  var mouseupCount = 0;
  var $previousValue;
  var $currentValue;
  var $previousInputTextValue = $('#result').val();
  var mouseDownEvent;

  $(document).ready(function(){
      $("#phone").find("button").mousedown(function(event){
      });
      $("#phone").find("button").mouseup(function(event){

        // console.log("event value", mouseDownEvent);
        // if(mouseDownEvent) {
        //   console.log("clear timeout");
        //   clearTimeout(mouseDownEvent);
        //   console.log(mouseDownEvent);
        // }
        var button_pressed = $(event.currentTarget).data("value")
        if($previousValue === undefined){
          $previousValue = button_pressed;
        }
        $currentValue = button_pressed;
        if($previousValue === button_pressed){
          mouseupCount += 1;
          // $inputTextValue = $currentValue
          // $('#result').val($inputTextValue);
        }
        else{
          mouseupCount = 0
          mouseupCount += 1;
          $previousValue = $currentValue;
          // $inputTextValue += $currentValue
          // $('#result').val($inputTextValue);
        }
        if([1,2,3,4,5,6,8].indexOf($currentValue) !== -1){
          $('#result').val(t9($('#result').val(), clickOn4ValuesButton()));
        }
        else if([7,9].indexOf($currentValue) !== -1){
          $('#result').val(t9($('#result').val(), clickOn5ValuesButton()));
        }
        else if($currentValue === '#' || $currentValue === '*' || $currentValue === 0){
          $('#result').val(t9($('#result').val(), clickOnSingleValueButton()));
        }
        // $('#result').val($currentValue);
        // if([1,2,3,4,5,6,8].indexOf($currentValue) !== -1){
        //   $('#result').val(t9($('#result').val(), clickOn4ValuesButton()));
        // }
        // else if([7,9].indexOf($currentValue) !== -1){
        //   $('#result').val(t9($('#result').val(), clickOn5ValuesButton()));
        // }
        // else if($currentValue === '#' || $currentValue === '*' || $currentValue === 0){
        //   $('#result').val(t9($('#result').val(), clickOnSingleValueButton()));
        // }
        // mouseDownEvent = setTimeout(setInputTextFieldValue, 3000);
        console.log("afterevent value", mouseDownEvent);
      });
      // setInterval(clearMouseDownEvent,3500)
      // setInterval(setInputTextFieldValue, 2000);
      // setInterval(resetKeyboard, 10000);
  })

  function clearMouseDownEvent(){
    if(mouseDownEvent) {
      console.log("interal clear timeout");
      clearTimeout(mouseDownEvent);
      console.log(mouseDownEvent);
    }
  }

  function setInputTextFieldValue(){
    console.log("text field value:", $previousInputTextValue)
    $('#result').val(t9($('#result').val(),$previousInputTextValue));
    $previousInputTextValue += $('#result').val();
    // $('#result').val($currentValue);
    // if([1,2,3,4,5,6,8].indexOf($currentValue) !== -1){
    //       $('#result').val(t9($('#result').val(), clickOn4ValuesButton()));
    // }
    // else if([7,9].indexOf($currentValue) !== -1){
    //   $('#result').val(t9($('#result').val(), clickOn5ValuesButton()));
    // }
    // else if($currentValue === '#' || $currentValue === '*' || $currentValue === 0){
    //   $('#result').val(t9($('#result').val(), clickOnSingleValueButton()));
    // }
  };

  function t9(text,button_pressed){
    // button_pressed += text;
    text += button_pressed;
    return text
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

