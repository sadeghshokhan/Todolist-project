/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./app/index.js":
/*!**********************!*\
  !*** ./app/index.js ***!
  \**********************/
/***/ (() => {

eval("{\r\nconst inputbox = document.getElementById('input-box');\r\nconst listcontainer = document.getElementById('doing-list');\r\nconst doneList = document.getElementById(\"done-list\");\r\n\r\nfunction addTask(){\r\n    if( inputbox.value == \"\" ){\r\n        alert (\"please write something\");\r\n    }else{\r\n        let liTag = document.createElement('li');\r\n        liTag.innerHTML = inputbox.value;\r\n        listcontainer.appendChild(liTag);\r\n        let span = document.createElement('span');\r\n        span.innerHTML= '\\u00d7';\r\n        liTag.appendChild(span)\r\n    }\r\n    inputbox.value = \"\"\r\n    saveData()\r\n}\r\n/////////////////////////////////////////////////////////\r\n\r\nlistcontainer.addEventListener('click', function(e) {\r\n    if (e.target.tagName === 'LI') {\r\n        doneList.appendChild(e.target);\r\n        e.target.classList.add('checked');\r\n        saveData();\r\n    }else if(e.target.tagName = 'SPAN'){\r\n        e.target.parentElement.remove();\r\n        saveData();\r\n    }\r\n});\r\n\r\ndoneList.addEventListener('click', function(e) {\r\n    if (e.target.tagName === 'LI') {\r\n        listcontainer.appendChild(e.target);\r\n        e.target.classList.remove('checked');\r\n        saveData();\r\n    }else if(e.target.tagName = 'SPAN'){\r\n        e.target.parentElement.remove();\r\n        saveData();\r\n    }\r\n});\r\n\r\nfunction saveData(){\r\n    localStorage.setItem('doing-data' , listcontainer.innerHTML)\r\n    localStorage.setItem('done-data' , doneList.innerHTML)\r\n}\r\n\r\nfunction showData(){\r\n    listcontainer.innerHTML = localStorage.getItem('doing-data')\r\n    doneList.innerHTML= localStorage.getItem('done-data')\r\n}\r\n\r\nshowData() \r\n\n\n//# sourceURL=webpack://todolist-project-academy-branch/./app/index.js?\n}");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./app/index.js"]();
/******/ 	
/******/ })()
;