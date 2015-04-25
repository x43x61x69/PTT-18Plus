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

//document.querySelector('button[name="yes"]').click();

var url = document.location.href;
var result = /^https?:\/\/[a-zA-Z\d-]+\.{0,}ptt\.cc\/ask\/over18\?from=(.*)/.test(url);
if(result) {
	window.stop();
	var p = url.match(/\ask\/over18\?from=(.*)/)[0].split("=")[1];

	//var body = document.createElement("body");

	var form = document.createElement("form");
	form.setAttribute("method", "post");
	form.setAttribute("action", "/ask/over18");

	var hiddenField = document.createElement("input");
	hiddenField.setAttribute("type", 	"hidden");
	hiddenField.setAttribute("name", 	"from");
	hiddenField.setAttribute("value", 	decodeURIComponent(p));
	form.appendChild(hiddenField);

	var yes = document.createElement("button");
	yes.setAttribute("type", 	"submit");
	yes.setAttribute("name", 	"yes");
	yes.setAttribute("value", 	"yes");
	form.appendChild(yes);

	//body.appendChild(form);
	yes.click();
}