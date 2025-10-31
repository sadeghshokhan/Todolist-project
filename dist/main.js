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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("{\nconst inputbox = document.getElementById('input-box');\nconst listcontainer = document.getElementById('doing-list');\nconst doneList = document.getElementById(\"done-list\");\n\nfunction addTask(){\n    if( inputbox.value == \"\" ){\n        alert (\"please write something\");\n    }else{\n        let liTag = document.createElement('li');\n        liTag.innerHTML = inputbox.value;\n        listcontainer.appendChild(liTag);\n        let span = document.createElement('span');\n        span.innerHTML= '\\u00d7';\n        liTag.appendChild(span)\n    }\n    inputbox.value = \"\"\n    saveData()\n}\n/////////////////////////////////////////////////////////\n\nlistcontainer.addEventListener('click', function(e) {\n    if (e.target.tagName === 'LI') {\n        doneList.appendChild(e.target);\n        e.target.classList.add('checked');\n        saveData();\n    }else if(e.target.tagName = 'SPAN'){\n        e.target.parentElement.remove();\n        saveData();\n    }\n});\n\ndoneList.addEventListener('click', function(e) {\n    if (e.target.tagName === 'LI') {\n        listcontainer.appendChild(e.target);\n        e.target.classList.remove('checked');\n        saveData();\n    }else if(e.target.tagName = 'SPAN'){\n        e.target.parentElement.remove();\n        saveData();\n    }\n});\n\nfunction saveData(){\n    localStorage.setItem('doing-data' , listcontainer.innerHTML)\n    localStorage.setItem('done-data' , doneList.innerHTML)\n}\n\nfunction showData(){\n    listcontainer.innerHTML = localStorage.getItem('doing-data')\n    doneList.innerHTML= localStorage.getItem('done-data')\n}\n\nshowData() \n\n\n//# sourceURL=webpack://todolist-project-academy-branch/./src/index.js?\n}");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;