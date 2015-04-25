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

var events = require("sdk/system/events");
var { Ci,Cu } = require("chrome");
Cu.import("resource://gre/modules/Services.jsm");

function listener(event) {
	var subject = event.subject;
	var httpChannel = subject.QueryInterface(Ci.nsIHttpChannel);
	var url = subject.URI.spec;
	var result = /^https?:\/\/[a-zA-Z\d-]+\.{0,}ptt\.cc\/ask\/over18\?from=(.*)/.test(url);

	if(result) {
		var b = "https://www.ptt.cc";
		Services.cookies.add(".ptt.cc", "/", "over18", "1", false, false, true, (new Date().getTime()/1000) + 3600);
		var p = url.match(/\ask\/over18\?from=(.*)/)[0].split("=")[1];
		var n = b + decodeURIComponent(p);
		subject.redirectTo(Services.io.newURI(n, null, null));
	}
}
events.on("http-on-modify-request", listener);