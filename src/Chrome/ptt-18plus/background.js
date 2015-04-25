//
//  PTT 18+ Redirect
//
// The MIT License (MIT)
//
// Copyright (c) 2015 Zhi-Wei Cai.
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in all
// copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
// SOFTWARE.
//

var b = "https://www.ptt.cc";
chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
    	var p = details.url.match(/\ask\/over18\?from=(.*)/)[0].split("=")[1];
    	var n = b + decodeURIComponent(p);
    	chrome.cookies.set({
    		url: n,
    		name: "over18",
    		value: "1",
    		domain: ".ptt.cc",
    		path: "/",
    		secure: false,
    		httpOnly: false,
    		storeId: "0" ,
    		expirationDate: (new Date().getTime()/1000) + 3600
    	});
    	return {redirectUrl: n};
    },
    {
        urls: [
            "*://ptt.cc/ask/over18?from=*",
            "*://*.ptt.cc/ask/over18?from=*",
        ],
        types: ["main_frame"]
    },
    ["blocking"]
);