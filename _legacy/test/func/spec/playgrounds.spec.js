var adapter = require("builder-docs-archetype-dev/spec-setup").adapter;
var _ = require("lodash");
var expect = require("chai").expect;

var fullPath = function (path) {
  return _.trimEnd(global.TEST_FUNC_BASE_URL, "/") + path;
};

var navigateToPage = function () {
  return adapter.client.url(fullPath("/guides/animations"));
};

describe("Playgrounds", function () {
  it("should render", function () {
    return navigateToPage()
      .elements(".Interactive > .playground").then(function (res) {
        expect(res.value.length > 0).to.eq(true);
      });
  });

  // Find the first playground CodeMirror instance,
  // update it, then check if the preview updated
  it("should reflect changes", function () {
    return navigateToPage()
      .selectorExecute(".Interactive > .playground", function (els) {
        var editor = els[0].querySelector(".CodeMirror").CodeMirror;
        editor.setValue("mountNode.innerHTML = 'Test string'");
        editor.execCommand("insertTab"); /* Trigger onChange */
      })
      .getText(".Interactive > .playground > .playgroundPreview").then(function (text) {
        var textString = Array.isArray(text) ? text[0] : text;
        expect(textString).to.eq("Test string");
      });
  });
});
