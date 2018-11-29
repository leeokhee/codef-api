import { Component, OnInit } from '@angular/core';

import * as $ from 'jquery';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor() { }

  ngOnInit() {


    // 브라우저 사이즈 체크
    function checkScreen() {
      return $('#device-size-detector').find('div:visible').first().attr('id');
    }

    $(window).on('resize', function () {
      var screen = checkScreen();
      //console.log(screen);
    });

    //
    var ui = {
      init: function () {
        this.header();
        this.invalid();
      },
      invalid: function () {

      },
      header: function () {
        // 모바일에서 메뉴 클릭시 메뉴 숨김
        $(document).on('click', '.navbar-collapse a, .navbar-collapse .btn', function () {
          var screen = checkScreen();
          if (screen != 'xs') return;
          var classCheck = this.className.match('dropdown-toggle') == null;
          if (classCheck) {
            $('.navbar-toggler').trigger('click');
          }
        });

      },
      footer: function () {
      }
    }.init();

  }

}
