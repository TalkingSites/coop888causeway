// This site's own SpaceDash blocks: each section of a page is a small form in the editor.
// Every block writes the same code the pages use:
//   {% set sectionTitle = "..." %}
//   {% include "partials/textPhoto.njk" %}
// All of a block's values are always written, even empty ones, so one block's text can't
// carry over into the next block on the page.
(function () {
  var text = (name, label, extra) => Object.assign({ name: name, label: label, widget: "string", required: false }, extra);
  var long = (name, label, extra) => Object.assign({ name: name, label: label, widget: "text", required: false }, extra);
  var rich = (name, label, extra) => Object.assign({ name: name, label: label, widget: "markdown", buttons: ["bold", "italic", "link", "bulleted-list"], editor_components: [], required: false }, extra);
  var image = (name, label) => ({ name: name, label: label, widget: "image", required: false });
  var pick = (name, label, options, value) => ({ name: name, label: label, widget: "select", options: options, default: value, required: false });
  var yes = (name, label) => ({ name: name, label: label, widget: "boolean", default: false, required: false });

  var heading = text("sectionTitle", "Heading");
  var linkText = text("sectionLinkText", "Link text");
  var linkUrl = text("sectionLinkUrl", "Link address", { hint: "e.g. /membership/ or https://..." });
  var alt = text("sectionAlt", "Describe the photo", { hint: "For people who can't see it" });
  var colours = [
    { label: "Paper", value: "" },
    { label: "White", value: "band-white" },
    { label: "Aqua", value: "band-aqua" },
    { label: "Dark", value: "band-ink" },
    { label: "Orange", value: "band-orange" },
  ];
  var linkStyle = pick("sectionLinkStyle", "Link style", [{ label: "Text with an arrow", value: "arrow" }, { label: "Button", value: "button" }], "arrow");

  var blocks = [
    { id: "hero", label: "Big opening", file: "hero", summary: "heroTitle", fields: [
      text("heroTitle", "Heading"), long("heroLead", "Intro"),
      text("heroAction", "Button text"), text("heroLink", "Button address"),
      text("heroAction2", "Second link text"), text("heroLink2", "Second link address"),
    ] },
    { id: "pageHead", label: "Page heading", file: "pageHead", summary: "headTitle", fields: [
      text("headTitle", "Heading"), long("headLead", "Intro"),
      pick("headStyle", "Colour", [{ label: "Aqua", value: "aqua" }, { label: "Dark", value: "ink" }], "aqua"),
    ] },
    { id: "eights", label: "8 hours strip", file: "eights", fields: [
      text("eightOne", "First 8"), text("eightTwo", "Second 8"), text("eightThree", "Third 8"),
    ] },
    { id: "textPhoto", label: "Text and photo", file: "textPhoto", summary: "sectionTitle", fields: [
      heading, rich("sectionText", "Text"), linkText, linkUrl, linkStyle,
      image("sectionImage", "Photo"), alt,
      pick("sectionLayout", "Photo side", [{ label: "Right", value: "right" }, { label: "Left", value: "left" }], "right"),
      pick("photoStyle", "Photo style", [{ label: "Rounded", value: "rounded" }, { label: "Tilted card", value: "tilted" }], "rounded"),
      pick("sectionBg", "Background", colours, ""),
    ] },
    { id: "widePhoto", label: "Wide photo", file: "widePhoto", summary: "sectionAlt", fields: [image("sectionImage", "Photo"), alt] },
    { id: "levelsBand", label: "Membership levels section", file: "levelsBand", summary: "sectionTitle", fields: [
      heading, text("sectionText", "Intro"), yes("levelDetail", "Show what's included"),
      rich("sectionNote", "Note underneath"), pick("sectionBg", "Background", colours, ""),
    ] },
    { id: "eventsBand", label: "Events", file: "eventsBand", summary: "sectionTitle", fields: [
      heading, rich("sectionText", "Text"), image("sectionImage", "Round photo"), alt,
    ] },
    { id: "podcastBand", label: "Podcast", file: "podcastBand", summary: "sectionTitle", fields: [
      heading, long("sectionQuestion", "Big question"), long("sectionText", "Text"), linkText, linkUrl,
    ] },
    { id: "podcastHead", label: "Podcast heading", file: "podcastHead", summary: "sectionTitle", fields: [
      heading, long("sectionQuestion", "Big question"),
    ] },
    { id: "membersBand", label: "Member logos", file: "membersBand", summary: "sectionTitle", fields: [
      heading, text("sectionText", "Intro"), yes("wallDetail", "Show what each member does"),
    ] },
    { id: "sidePanel", label: "Text with a side panel", file: "sidePanel", summary: "sideTitle", fields: [
      long("sectionLead", "Opening paragraph"), rich("sectionText", "Text"),
      text("sideTitle", "Panel heading"), rich("sideText", "Panel text"),
      text("sectionLinkText", "Panel button text"), text("sectionLinkUrl", "Panel button address"),
      text("sideLinkText", "Panel link text"), text("sideLinkUrl", "Panel link address"),
    ] },
    { id: "boardBand", label: "Board and patrons section", file: "boardBand", summary: "sectionTitle", fields: [
      heading, rich("sectionText", "Text"), linkText, linkUrl, linkStyle,
      text("boardTitle", "Board heading"), text("patronsTitle", "Patrons heading"),
    ] },
    { id: "contactBand", label: "Contact details", file: "contactBand", fields: [
      text("contactEmail", "Email"), long("contactAddress", "Address"), text("contactMap", "Map link"),
      image("sectionImage", "Photo"), alt,
    ] },
    { id: "buttonBand", label: "Big button", file: "buttonBand", summary: "sectionLinkText", fields: [linkText, linkUrl] },
    { id: "joinNetworkerForm", label: "Networker application form", file: "joinNetworkerForm", fields: [] },
    { id: "joinMailingForm", label: "Mailing application form", file: "joinMailingForm", fields: [] },
  ];

  var VALUE = '"(?:[^"\\\\]|\\\\.)*"';

  blocks.forEach(function (b) {
    var names = b.fields.map(function (f) { return f.name; });
    var include = '{% include "partials/' + b.file + '.njk" %}';
    var sets = names.length ? "(?:{%\\s*set\\s+(?:" + names.join("|") + ")\\s*=\\s*" + VALUE + "\\s*%}\\s*\\n?)*" : "";
    var booleans = b.fields.filter(function (f) { return f.widget === "boolean"; }).map(function (f) { return f.name; });

    window.CMS.registerEditorComponent({
      id: "site-" + b.id,
      label: b.label,
      fields: b.fields,
      collapsed: true,
      summary: b.summary ? "{{fields." + b.summary + "}}" : undefined,
      pattern: new RegExp("^" + sets + '{%\\s*include\\s+"partials/' + b.file + '\\.njk"\\s*%}'),
      fromBlock: function (match) {
        var data = {};
        var re = /{%\s*set\s+(\w+)\s*=\s*("(?:[^"\\]|\\.)*")\s*%}/g;
        var m;
        while ((m = re.exec(match[0]))) data[m[1]] = JSON.parse(m[2]);
        booleans.forEach(function (k) { data[k] = data[k] === "yes"; });
        return data;
      },
      toBlock: function (data) {
        var lines = names.map(function (k) {
          var v = data[k];
          if (booleans.indexOf(k) > -1) v = v ? "yes" : "no";
          return "{% set " + k + " = " + JSON.stringify(String(v == null ? "" : v)) + " %}";
        });
        return lines.concat(include).join("\n");
      },
      toPreview: function () { return "<strong>" + b.label + "</strong>"; },
    });
  });
})();
