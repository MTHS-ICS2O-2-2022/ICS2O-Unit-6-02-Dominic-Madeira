// Copyright (c) 2023 Dominic M. All rights reserved
//
// Created by: Dominic M.
// Created on: Sep 2020
// This file contains the JS functions for index.html

"use strict"

function myCookies() {
  if (localStorage.cookies){
    localStorage.cookies = Number(localStorage.cookies) + 1
  } else {
    localStorage.cookies = 1
  } document.getElementById("answer").innerHTML = localStorage.cookies
}

function myButtonClicked() {
  alert("Calculation Failed!!")
}
