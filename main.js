/*global define, brackets, $ */

// L O R E M      L O R E M
// I P S U M      I P S U M
//   F O R          P R O
// P H D E V      P H D E V
// Author Jakub Dalecký, as an additional mark project, and a cure to occasional boredom
// Using the default template, my nonexistent JS skills and a will to prove something

//Last save as of: 10.03.2025/0:00

//Beginning of code, and my shenanigans

// DOKUMENTACE https://docs.phcode.dev/api/creating-extensions
// PŘÍKLADY https://github.com/phcode-dev/phoenix/tree/main/src/extensions/default


define(function (require, exports, module) {
    "use strict";

    // Import dat z Package, rn jen kvůli verzi :3
    
    let JsonProVerzi = {};

    fetch('package.json')
        .then(response => response.json())
        .then(data => {JsonProVerzi = data;})
        .catch(error => console.error("Chyba při načítání JSON:", error));
    
    //moduly z brackets
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
    menu.addMenuItem(MY_COMMAND_ID, "Ctrl-Alt-M");
    
    
    AppInit.appReady(function () {
        console.log("Using LVPHCode by Jakub", myData.version);
    });
});
