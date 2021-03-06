/* vim: set ts=2 et sw=2 tw=80: */
/* Any copyright is dedicated to the Public Domain.
 http://creativecommons.org/publicdomain/zero/1.0/ */

"use strict";

// Test that the layout-view displays the right values and that it updates when
// the node's style is changed

// Expected values:
var res1 = [
  {
    selector: "#layout-element-size",
    value: "160" + "\u00D7" + "160.117"
  },
  {
    selector: ".layout-size > span",
    value: "100" + "\u00D7" + "100.117"
  },
  {
    selector: ".layout-margin.layout-top > span",
    value: 30
  },
  {
    selector: ".layout-margin.layout-left > span",
    value: "auto"
  },
  {
    selector: ".layout-margin.layout-bottom > span",
    value: 30
  },
  {
    selector: ".layout-margin.layout-right > span",
    value: "auto"
  },
  {
    selector: ".layout-padding.layout-top > span",
    value: 20
  },
  {
    selector: ".layout-padding.layout-left > span",
    value: 20
  },
  {
    selector: ".layout-padding.layout-bottom > span",
    value: 20
  },
  {
    selector: ".layout-padding.layout-right > span",
    value: 20
  },
  {
    selector: ".layout-border.layout-top > span",
    value: 10
  },
  {
    selector: ".layout-border.layout-left > span",
    value: 10
  },
  {
    selector: ".layout-border.layout-bottom > span",
    value: 10
  },
  {
    selector: ".layout-border.layout-right > span",
    value: 10
  },
];

var res2 = [
  {
    selector: "#layout-element-size",
    value: "190" + "\u00D7" + "210"
  },
  {
    selector: ".layout-size > span",
    value: "100" + "\u00D7" + "150"
  },
  {
    selector: ".layout-margin.layout-top > span",
    value: 30
  },
  {
    selector: ".layout-margin.layout-left > span",
    value: "auto"
  },
  {
    selector: ".layout-margin.layout-bottom > span",
    value: 30
  },
  {
    selector: ".layout-margin.layout-right > span",
    value: "auto"
  },
  {
    selector: ".layout-padding.layout-top > span",
    value: 20
  },
  {
    selector: ".layout-padding.layout-left > span",
    value: 20
  },
  {
    selector: ".layout-padding.layout-bottom > span",
    value: 20
  },
  {
    selector: ".layout-padding.layout-right > span",
    value: 50
  },
  {
    selector: ".layout-border.layout-top > span",
    value: 10
  },
  {
    selector: ".layout-border.layout-left > span",
    value: 10
  },
  {
    selector: ".layout-border.layout-bottom > span",
    value: 10
  },
  {
    selector: ".layout-border.layout-right > span",
    value: 10
  },
];

add_task(function*() {
  let style = "div { position: absolute; top: 42px; left: 42px; height: 100.111px; width: 100px; border: 10px solid black; padding: 20px; margin: 30px auto;}";
  let html = "<style>" + style + "</style><div></div>";

  yield addTab("data:text/html," + encodeURIComponent(html));
  let {toolbox, inspector, view} = yield openLayoutView();
  yield selectNode("div", inspector);

  yield runTests(inspector, view);
});

addTest("Test that the initial values of the box model are correct",
function*(inspector, view) {
  let viewdoc = view.doc;

  for (let i = 0; i < res1.length; i++) {
    let elt = viewdoc.querySelector(res1[i].selector);
    is(elt.textContent, res1[i].value, res1[i].selector + " has the right value.");
  }
});

addTest("Test that changing the document updates the box model",
function*(inspector, view) {
  let viewdoc = view.doc;

  let onUpdated = waitForUpdate(inspector);
  inspector.selection.node.style.height = "150px";
  inspector.selection.node.style.paddingRight = "50px";
  yield onUpdated;

  for (let i = 0; i < res2.length; i++) {
    let elt = viewdoc.querySelector(res2[i].selector);
    is(elt.textContent, res2[i].value, res2[i].selector + " has the right value after style update.");
  }
});
