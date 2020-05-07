const St = imports.gi.St; // icon
const Main = imports.ui.main; // settings
const PanelMenu = imports.ui.panelMenu; // button

let button,
  isDockHidden = true; // state of the dock - hidden or not

function init() {}

function toggleDash() {
  if (isDockHidden == true) Main.overview._dash.actor.hide();
  else Main.overview._dash.actor.show();

  // flip the state
  isDockHidden = !isDockHidden;
}
function enable() {
  button = new PanelMenu.Button(0.0); // create button

  // set icon
  const icon = new St.Icon({
    icon_name: "window_fullscreen",
    style_class: "actions",
    icon_size: 22,
  });

  button.actor.add_actor(icon);
  button.actor.connect("button-press-event", toggleDash); // connect event and action
  Main.panel.addToStatusArea("DockHideButton", button);

  isDockHidden = true; // dock is not-hidden, initially
}

function disable() {
  button.destroy();
}
