/*global define, brackets, $ */

// See detailed docs in https://docs.phcode.dev/api/creating-extensions

// A good place to look for code examples for extensions: https://github.com/phcode-dev/phoenix/tree/main/src/extensions/default

// A simple extension that adds an entry in "file menu> hello world"
define(function (require, exports, module) {
    "use strict";

    // Import dat z Package, rn jen kvůli verzi :3
    
    let JsonProVerzi = {};

    fetch('package.json')
      .then(response => response.json())
      .then(data => {
        JsonProVerzi = data;
    });
    //Věc samotná
    const AppInit = brackets.getModule("utils/AppInit"),
        DefaultDialogs = brackets.getModule("widgets/DefaultDialogs"),
        Dialogs = brackets.getModule("widgets/Dialogs"),
        CommandManager = brackets.getModule("command/CommandManager"),
        Menus = brackets.getModule("command/Menus");

    // Function to run when the menu item is clicked
    function DoTheThing() {
        Dialogs.showModalDialog(
            DefaultDialogs.DIALOG_ID_INFO,
            "LVPHC",
            "Inserted."
        );
    }
    
    var MY_COMMAND_ID = "LVPHC.Handle";
    CommandManager.register("Insert Lorem Ipsum", MY_COMMAND_ID, DoTheThing);
    
    // Deklarace pro menu, samotná zkratka
    var menu = Menus.getMenu(Menus.AppMenuBar.FILE_MENU);
    menu.addMenuItem(MY_COMMAND_ID);
    menu.addMenuItem(MY_COMMAND_ID, "Ctrl-Alt-L");
    
    
    AppInit.appReady(function () {
        console.log("Using LVPHCode by Jakub", myData.version);
    });
});
